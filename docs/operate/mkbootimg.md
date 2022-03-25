---
title: 【bootimg】解包打包
date: 2021-09-15
tag:
 - 解包
category: 
 - 系统文件
---

关于 kernel.img 系统内核文件，我们该如何去修改呢？一般此类型文件是很难打开或挂载的，那么就没有办法修改了吗，经过几天的查资料，其实也不难。对安卓开发的大神来说，那是轻而易举的，但对于没有开发经验的来说就比较困难了。

好了，下面直接把我折腾的内容整理一下。

## 解压 kernel.img 文件

### 查看文件类型

要想解压某个文件，首先要知道该文件是什么类型的。用 `file` 命令查看一下 `kernel.img` 文件的类型。

```shell
img$ file kernel.img
kernel.img: Android bootimg, kernel (0x1080000), ramdisk (0x1000000), page size: 2048
```
由此可知，这是 Android bootimg 文件类型。那么，怎么解压呢？

### 下载工具并解压

在网上查找了相关资料，需要 `unpackbootimg` 解包命令，`mkbootimg` 打包命令。那这两个命令系统并没有，需要自行下载。

```shell
# 下载项目 android-unpackbootimg
img$ git clone https://github.com/anestisb/android-unpackbootimg.git bootimg
img.git bootimg
正克隆到 'bootimg'...
remote: Enumerating objects: 50, done.
remote: Total 50 (delta 0), reused 0 (delta 0), pack-reused 50
展开对象中: 100% (50/50), 完成.
img$ cd bootimg

# 编译此项目，会多出两个可执行文件 mkbootimg、unpackbootimg
img/bootimg$ make
...
cc -O2 -Wall -Werror -Wno-address-of-packed-member -Iinclude -o mkbootimg mkbootimg.c  -L. -lmincrypt
cc -O2 -Wall -Werror -Wno-address-of-packed-member -Iinclude -o unpackbootimg unpackbootimg.c  -L. -lmincrypt

# 返回上级目录并查看文件列表
img/bootimg$ cd .. && ls -l
drwxrwxr-x 5 kei kei     4096 9月  15 11:01 bootimg
-rw-r--r-- 1 kei kei 16543744 9月  15 14:15 kernel.img

#新建boot目录，把 kernel.img 解压缩到 boot 目录
img$ mkdir boot
img$ cd bootimg/
img/bootimg$ ./unpackbootimg -i ../kernel.img -o ../boot
BOARD_KERNEL_CMDLINE 
BOARD_KERNEL_BASE 01078000
BOARD_NAME 
BOARD_PAGE_SIZE 2048
BOARD_HASH_TYPE sha1
BOARD_KERNEL_OFFSET 00008000
BOARD_RAMDISK_OFFSET fff88000
BOARD_SECOND_OFFSET ffe88000
BOARD_TAGS_OFFSET fef88100
# 解压缩完成
```
::: tip 补充

`mkbootimg`、`unpackbootimg` 命令工具使用方法

```
$ ./unpackbootimg
usage: unpackbootimg
  -i|--input boot.img
  [ -o|--output output_directory]
  [ -p|--pagesize <size-in-hexadecimal> ]
$ ./mkbootimg
usage: mkbootimg
       --kernel <filename>
       [ --ramdisk <filename> ]
       [ --second <2ndbootloader-filename> ]
       [ --cmdline <kernel-commandline> ]
       [ --board <boardname> ]
       [ --base <address> ]
       [ --pagesize <pagesize> ]
       [ --dt <filename> ]
       [ --kernel_offset <base offset> ]
       [ --ramdisk_offset <base offset> ]
       [ --second_offset <base offset> ]
       [ --tags_offset <base offset> ]
       [ --os_version <A.B.C version> ]
       [ --os_patch_level <YYYY-MM-DD date> ]
       [ --hash <sha1(default)|sha256> ]
       [ --id ]
       -o|--output <filename>
```

:::

### 查看解压后的文件

```shell
img/bootimg$ cd ../boot
img/boot$ ls -lh
总用量 17M
-rw-rw-r-- 1 kei kei    9 9月  15 09:52 kernel.img-base
-rw-rw-r-- 1 kei kei    1 9月  15 09:52 kernel.img-board
-rw-rw-r-- 1 kei kei    1 9月  15 09:52 kernel.img-cmdline
-rw-rw-r-- 1 kei kei    5 9月  15 09:52 kernel.img-hash
-rw-rw-r-- 1 kei kei    9 9月  15 09:52 kernel.img-kerneloff
-rw-rw-r-- 1 kei kei    5 9月  15 09:52 kernel.img-pagesize
-rw-rw-r-- 1 kei kei 5.3M 9月  15 09:52 kernel.img-ramdisk.gz
-rw-rw-r-- 1 kei kei    9 9月  15 09:52 kernel.img-ramdiskoff
-rw-rw-r-- 1 kei kei    9 9月  15 09:52 kernel.img-secondoff
-rw-rw-r-- 1 kei kei    9 9月  15 09:52 kernel.img-tagsoff
-rw-rw-r-- 1 kei kei  12M 9月  15 09:52 kernel.img-zImage

```
有两个文件比较大：

- kernel.img-ramdisk.gz：根文件系统
- kernel.img-zImage：Linux 内核 zImage

```shell
# 查看这两个文件类型
img/boot$ file kernel.img-ramdisk.gz 
kernel.img-ramdisk.gz: ASCII cpio archive (SVR4 with no CRC)
#cpio格式的文件
img/boot$ file kernel.img-zImage 
kernel.img-zImage: lzop compressed data - version 1.030, LZO1X-999, os: Unix
#lzop压缩的文件
```

::: tip 说明

zImage 内核文件，一般不建议修改；但是 ramdisk 根文件系统是可以根据需要适当的修改。

:::

## 修改 ramdisk

kernel.img-ramdisk.gz 映像是一个最基础的小型文件系统，它包括了初始化系统所需要的全部核心文件，例如：初始化 init 进程以及 init.rc（可以用于设置很多系统的参数）等文件。我们怎么去修改它呢？

### 挂载修改

上面查了它是 cpio 格式的文件，那么我们就用 `cpio` 进行挂载。

```shell
# 首先，新建一个目录，用于挂载 kernel.img-ramdisk.gz
img/boot$ mkdir kernel.img-ramdisk
img/boot$ cd kernel.img-ramdisk/

# cpio 命令进行挂载
img/boot/kernel.img-ramdisk$ sudo cpio -i -F ../kernel.img-ramdisk.gz
10696 块

# 挂载成功后，查看文件列表
img/boot/kernel.img-ramdisk$ ls -l
总用量 64
lrwxrwxrwx 1 root root     8 9月  15 10:00 bin -> /usr/bin
drwxrwxr-x 2 root root  4096 9月  15 10:00 dev
drwxrwxr-x 2 root root  4096 9月  15 10:00 etc
-rwxr-xr-x 1 root root  3879 9月  15 10:00 functions
-rwxr-xr-x 1 root root 38051 9月  15 10:00 init
lrwxrwxrwx 1 root root     8 9月  15 10:00 lib -> /usr/lib
-rwxr-xr-x 1 root root  2411 9月  15 10:00 platform_init
lrwxrwxrwx 1 root root     9 9月  15 10:00 sbin -> /usr/sbin
drwxrwxr-x 2 root root  4096 9月  15 10:00 splash
drwxrwxr-x 6 root root  4096 9月  15 10:00 usr
```
然后，我们进入挂载的目录中，对需要改动的文件进行修改或替换等。（可能需要 sudo 权限）

### 压缩还原

```shell
# 先对原先的kernel.img-ramdisk.gz做个备份（改名）
img/boot/kernel.img-ramdisk$ mv ../kernel.img-ramdisk.gz ../kernel.img-ramdisk.gz.bk

# 用 cpio 命令进行打包
img/boot/kernel.img-ramdisk$ find . | cpio -o -H newc > ../kernel.img-ramdisk.gz
10696 块

# 返回上一级目录，查看生成的文件
img/boot/kernel.img-ramdisk$ cd .. && ls -l
总用量 22116
-rw-rw-r-- 1 kei kei        9 9月  15 09:52 kernel.img-base
-rw-rw-r-- 1 kei kei        1 9月  15 09:52 kernel.img-board
-rw-rw-r-- 1 kei kei        1 9月  15 09:52 kernel.img-cmdline
-rw-rw-r-- 1 kei kei        5 9月  15 09:52 kernel.img-hash
-rw-rw-r-- 1 kei kei        9 9月  15 09:52 kernel.img-kerneloff
-rw-rw-r-- 1 kei kei        5 9月  15 09:52 kernel.img-pagesize
drwxrwxr-x 6 kei kei     4096 9月  15 10:00 kernel.img-ramdisk
-rw-rw-r-- 1 kei kei  5476352 9月  15 10:05 kernel.img-ramdisk.gz
-rw-rw-r-- 1 kei kei  5476352 9月  15 09:52 kernel.img-ramdisk.gz.bk
-rw-rw-r-- 1 kei kei        9 9月  15 09:52 kernel.img-ramdiskoff
-rw-rw-r-- 1 kei kei        9 9月  15 09:52 kernel.img-secondoff
-rw-rw-r-- 1 kei kei        9 9月  15 09:52 kernel.img-tagsoff
-rw-rw-r-- 1 kei kei 11652817 9月  15 09:52 kernel.img-zImage
```

## 打包还原 kernel.img

### 查看解包信息

```shell
# 成功生成 kernel.img-ramdisk.gz，那么原先的备份就不需要了，可以删除或移到其他位置
img/boot$ rm kernel.img-ramdisk.gz.bk
img/boot$ ls -l
总用量 16192
-rw-rw-r-- 1 kei kei        9 9月  15 09:52 kernel.img-base
-rw-rw-r-- 1 kei kei        1 9月  15 09:52 kernel.img-board
-rw-rw-r-- 1 kei kei        1 9月  15 09:52 kernel.img-cmdline
-rw-rw-r-- 1 kei kei        5 9月  15 09:52 kernel.img-hash
-rw-rw-r-- 1 kei kei        9 9月  15 09:52 kernel.img-kerneloff
-rw-rw-r-- 1 kei kei        5 9月  15 09:52 kernel.img-pagesize
-rw-rw-r-- 1 kei kei  4887552 9月  15 10:53 kernel.img-ramdisk.gz
-rw-rw-r-- 1 kei kei        9 9月  15 09:52 kernel.img-ramdiskoff
-rw-rw-r-- 1 kei kei        9 9月  15 09:52 kernel.img-secondoff
-rw-rw-r-- 1 kei kei        9 9月  15 09:52 kernel.img-tagsoff
-rw-rw-r-- 1 kei kei 11652817 9月  15 09:52 kernel.img-zImage

# 查看解包 kernel.img 的信息
img/boot$ cat kernel.img-base kernel.img-board kernel.img-cmdline kernel.img-hash kernel.img-kerneloff kernel.img-pagesize kernel.img-ramdiskoff kernel.img-secondoff kernel.img-tagsoff
01078000


sha1
00008000
2048
fff88000
ffe88000
fef88100
# 查看解包打包参数信息
```

### 打包封装

```shell
# 返回到 kernel.img 所在目录，修改原文件名称，以防原文件被覆盖导致混淆
img/boot$ cd .. && ls -l
drwxrwxr-x 2 kei kei     4096 9月  15 14:10 boot
drwxrwxr-x 5 kei kei     4096 9月  15 11:01 bootimg
-rw-r--r-- 1 kei kei 16543744 9月  15 14:15 kernel.img
img$ mv kernel.img kernel.img.bk

# 根据上面的参数信息，进行打包封装
img/boot$ ../bootimg/mkbootimg --kernel kernel.img-zImage --ramdisk kernel.img-ramdisk.gz --base 01078000 --kernel_offset 00008000  --ramdisk_offset fff88000 --second_offset ffe88000 --tags_offset fef88100 -o ../kernel.img

# 打包封装完成后，返回上一级目录查看
img/boot$ cd ..
img$ file kernel.img
kernel.img: Android bootimg, kernel (0x1080000), ramdisk (0x1000000), page size: 2048
img$ file kernel.img.bk
kernel.img: Android bootimg, kernel (0x1080000), ramdisk (0x1000000), page size: 2048
# 和原版文件的信息对比，一样
# kernel.img 为后打包封装的，kernel.img.bk 为原文件
```

