---
title: 【squashfs】解包打包
date: 2021-09-15
tag:
 - 解包
category: 
 - 系统文件
---

## 查看文件类型

使用 `file` 命令查看文件的文件类型，以便使用对应的命令工具去执行操作。

```shell
kei@kei-KVM:~# file SYSTEM
SYSTEM: Squashfs filesystem, little endian, version 4.0, 906421384 bytes, 17904 inodes, blocksize: 524288 bytes, created: Fri Jun 18 21:05:07 2021
```

## 安装工具

根据上面查看到的 SYSTEM 文件类型是 Squashfs filesystem，那么需要用到 squashfs-tools 工具命令，直接安装。

```shell
kei@kei-KVM:~$ sudo apt install squashfs-tools 
[sudo] karin 的密码： 
正在读取软件包列表... 完成
正在分析软件包的依赖关系树       
正在读取状态信息... 完成       
下列软件包是自动安装的并且现在不需要了：
  fonts-liberation2 fonts-opensymbol gir1.2-gst-plugins-base-1.0
  gir1.2-gstreamer-1.0 gir1.2-gudev-1.0 gir1.2-udisks-2.0
  grilo-plugins-0.3-base gstreamer1.0-gtk3 libboost-date-time1.65.1
  libboost-filesystem1.65.1 libboost-iostreams1.65.1 libboost-locale1.65.1
  libcdr-0.1-1 libclucene-contribs1v5 libclucene-core1v5 libcmis-0.5-5v5
  libdazzle-1.0-0 libe-book-0.1-1 libedataserverui-1.2-2 libeot0
  libepubgen-0.1-1 libetonyek-0.1-1 libevent-2.1-6 libexiv2-14
  libfreerdp-client2-2 libfreerdp2-2 libgee-0.8-2 libgexiv2-2 libgom-1.0-0
  libgpgmepp6 libgpod-common libgpod4 liblangtag-common liblangtag1
  liblirc-client0 liblua5.3-0 libmediaart-2.0-0 libmspub-0.1-1 libodfgen-0.1-1
  libqqwing2v5 librevenge-0.0-0 libsgutils2-2 libssh-4 libvncclient1
  libwinpr2-2 libxapian30 libxmlsec1 libxmlsec1-nss
  linux-hwe-5.4-headers-5.4.0-72 lp-solve media-player-info python3-mako
  python3-markupsafe syslinux syslinux-common syslinux-legacy
  usb-creator-common
使用'sudo apt autoremove'来卸载它(它们)。
下列软件包将被升级：
  squashfs-tools
升级了 1 个软件包，新安装了 0 个软件包，要卸载 0 个软件包，有 123 个软件包未被升级。
需要下载 111 kB 的归档。
解压缩后会消耗 0 B 的额外空间。
获取:1 http://cn.archive.ubuntu.com/ubuntu bionic-updates/main amd64 squashfs-tools amd64 1:4.3-6ubuntu0.18.04.2 [111 kB]
已下载 111 kB，耗时 2秒 (51.9 kB/s)      
(正在读取数据库 ... 系统当前共安装有 190664 个文件和目录。)
正准备解包 .../squashfs-tools_1%3a4.3-6ubuntu0.18.04.2_amd64.deb  ...
正在将 squashfs-tools (1:4.3-6ubuntu0.18.04.2) 解包到 (1:4.3-6ubuntu0.18.04.1) 上 ...
正在设置 squashfs-tools (1:4.3-6ubuntu0.18.04.2) ...
正在处理用于 man-db (2.8.3-2ubuntu0.1) 的触发器 ...
kei@kei-KVM:~$
```

## unsquashfs 命令解压解包

解包打包最好切换到 root 用户操作。用 `unsquashfs` 命令解压缩。

```shell
# 切换 root 用户
kei@kei-KVM:~$ su -
root@kei-KVM:~#

# 复制上面解压的 SYSTEM 文件到当前位置
root@kei-KVM:~# cp /home/kei/桌面/SYSTEM .

# unsquashfs 命令解包 SYSTEM 文件
root@kei-KVM:~# unsquashfs SYSTEM 
Parallel unsquashfs: Using 2 processors
16882 inodes (19542 blocks) to write

[===========================================================\] 19542/19542 100%

created 15854 files
created 1022 directories
created 1028 symlinks
created 0 devices
created 0 fifos

# 解压完成后，查看一下，多出一个 squashfs-root 文件夹
root@kei-KVM:~# ls -l
总用量 885196
drwxrwxr-x 12 root root      4096 6月  19 05:03 squashfs-root
-rw-------  1 root root 906424320 9月  16 14:04 SYSTEM

```

## 查看与修改

根据需求，适当修改里面的相关文件。

```shell
# 查看一下 squashfs-root 目录
root@kei-KVM:~/squashfs-root# ls -l squashfs-root/
总用量 44
lrwxrwxrwx  1 root root    8 6月  19 05:03 bin -> /usr/bin
drwxrwxr-x  2 root root 4096 6月  19 05:02 dev
-rw-rw-r--  1 root root   11 6月  19 05:03 ee_arch
lrwxrwxrwx  1 root root   24 6月  19 05:03 emuelec -> /storage/.config/emuelec
drwxrwxr-x 27 root root 4096 6月  19 05:03 etc
drwxrwxr-x  2 root root 4096 6月  19 05:02 flash
lrwxrwxrwx  1 root root    8 6月  19 05:03 lib -> /usr/lib
lrwxrwxrwx  1 root root   10 6月  19 05:03 media -> /var/media
lrwxrwxrwx  1 root root   13 6月  19 05:03 opt -> /storage/.opt
drwxrwxr-x  2 root root 4096 6月  19 05:02 proc
drwxrwxr-x  2 root root 4096 6月  19 05:02 run
lrwxrwxrwx  1 root root    9 6月  19 05:03 sbin -> /usr/sbin
drwxrwxr-x  2 root root 4096 6月  19 05:02 storage
drwxrwxr-x  2 root root 4096 6月  19 05:02 sys
drwxrwxr-x  2 root root 4096 6月  19 05:02 tmp
drwxrwxr-x 10 root root 4096 6月  19 05:03 usr
drwxrwxr-x  2 root root 4096 6月  19 05:02 var
```

相关文件所在位置：

- Emuelec 启动脚本：`squashfs-root/usr/bin/emuelecRunEmu.sh`
- 自启动脚本：`squashfs-root/usr/config/autostart.sh`

- 修改开机视频：`squashfs-root/usr/bin/show_splash.sh`
- 修改边框：`squashfs-root/usr/bun/bezels.sh`

## 查看原包信息

使用 `unsquashfs -s [filename]` 命令来查看 squashfs 文件类型的包压缩信息。

```shell
# 查看一下原 SYSTEM 文件的 squashfs 压缩信息
root@kei-KVM:~# unsquashfs -s SYSTEM 
Found a valid SQUASHFS 4:0 superblock on SYSTEM.
Creation or last append time Sat Jun 19 05:05:07 2021
Filesystem size 885177.13 Kbytes (864.43 Mbytes)
Compression lzo					#压缩方式：-comp lzo
	algorithm lzo1x_999		#压缩算法：-Xalgorithm lzo1x_999
	compression level 9		#压缩等级：-Xcompression-level 9
Block size 524288				#块大小：-b 524288
Filesystem is exportable via NFS
Inodes are compressed
Data is compressed
Fragments are compressed
Always-use-fragments option is not specified
Xattrs are not stored			#扩展属性：-no-xattrs
Duplicates are removed
Number of fragments 988
Number of inodes 17904
Number of ids 2

# 可以看到压缩方式是 lzo，压缩算法是 lzo1x_999，压缩等级是 9 ，块大小是 524288 ，扩展属性是 not stored 等信息。
```

## mksquashfs 命令压缩打包

最后，使用 `mksquashfs` 命令，根据上面查看到的压缩参数信息，对 `squashfs-root/` 目录进行压缩打包。

```shell
root@kei-KVM:~# mksquashfs squashfs-root/ SYSTEM_changed -comp lzo -Xalgorithm lzo1x_999 -Xcompression-level 9 -b 524288 -no-xattrs
Parallel mksquashfs: Using 2 processors
Creating 4.0 filesystem on SYSTEM_changed, block size 524288.
[===========================================================/] 18514/18514 100%

Exportable Squashfs 4.0 filesystem, lzo compressed, data block size 524288
	compressed data, compressed metadata, compressed fragments, no xattrs
	duplicates are removed
Filesystem size 885177.12 Kbytes (864.43 Mbytes)
	46.45% of uncompressed filesystem size (1905511.20 Kbytes)
Inode table size 218226 bytes (213.11 Kbytes)
	36.69% of uncompressed inode table size (594786 bytes)
Directory table size 194409 bytes (189.85 Kbytes)
	49.83% of uncompressed directory table size (390171 bytes)
Number of duplicate files found 854
Number of inodes 17904
Number of files 15854
Number of fragments 988
Number of symbolic links  1028
Number of device nodes 0
Number of fifo nodes 0
Number of socket nodes 0
Number of directories 1022
Number of ids (unique uids + gids) 2
Number of uids 1
	root (0)
Number of gids 2
	root (0)
	unknown (81)
```

## 对比原包信息

压缩完成后，`unsquashfs -s` 命令再次查看一下新生城的文件信息。

```shell
root@kei-KVM:~# unsquashfs -s SYSTEM_changed 
Found a valid SQUASHFS 4:0 superblock on SYSTEM_changed.
Creation or last append time Thu Sep 16 14:39:18 2021
Filesystem size 885177.12 Kbytes (864.43 Mbytes)
Compression lzo
	algorithm lzo1x_999
	compression level 9
Block size 524288
Filesystem is exportable via NFS
Inodes are compressed
Data is compressed
Fragments are compressed
Always-use-fragments option is not specified
Xattrs are not stored
Duplicates are removed
Number of fragments 988
Number of inodes 17904
Number of ids 2

# file 命令再次查看一下
root@kei-KVM:~# file SYSTEM_changed 
SYSTEM_changed: Squashfs filesystem, little endian, version 4.0, 906421372 bytes, 17904 inodes, blocksize: 524288 bytes, created: Thu Sep 16 06:39:18 2021
```

和原始的 SYSTEM 比较一下，除了时间和名字，（文件的大小有微小变化，因为修改了文件）其它信息没有任何变化。

以上，就是 squashfs 文件类型的解包和打包的过程。

