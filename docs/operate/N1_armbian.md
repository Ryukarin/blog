---
title: 【斐讯N1】Armbian
date: 2021-03-18
tags:
 - 斐讯N1
categories: 
 - 折腾
---

## 下载 Armbian 镜像

下载地址：https://users.armbian.com/balbes150/arm-64/
该地址为 armbian 官网 balbes150 大神专门为晶晨、全志、RK 芯片的盒子做的镜像，并且不断更新，更新后，原来的镜像都会被删除，所以如果觉得某个版本的镜像好，要自己备份。

## 写入镜像到 U盘

1. 下载镜像写入工具，把镜像写入到U盘中。

2. 烧录到优盘后，修改 `extlinux` 目录下的 `extlinux.conf` 文件。

  前三行不变之后全用 #注释，#aml s9xx 以下的行解除#注释，并修改对应 dtb 路径（只解除一个 FDT 行的注释并修改即可）

2018 年上半年以前的 S905L/M2 的机器（Q7、部分Q5、HM201、R3300L、MG101、M201S、M201D、部分E900V21C)，使用 p212；
新一代支持蓝牙和双频 WiFi 的 S905L 盒子，比如咪咕 MGV2000、创维 E900V21D/E 等机型由于没有适配的 dtb，使用 p212 有机会开机启动，但没有视频和网络，可以通过 TTL 输出，目前没有进一步适配 dtb；S905M的机器，比如江苏版 Q5、魔百盒 G2 40F、百事通 R3300-M 等，使用 gxbb_p200_1G_100M_RealtekWiFi
其他机器所用 dtb 见下：

- Amlogic S905 = p200/p201
- Amlogic S905X = p212
- Amlogic S905D = p230/231
- Amlogic S905W = p281
- Amlogic S912 = q200/q201

3. 重命名 U盘根目录的 u-boot-s905x-s912 为 u-boot.ext
4. 插入盒子，U盘启动

## 进入 armbian 系统

1. 插入 U盘，给N1通电，会默认进入 U盘的 armbian 系统
- username：root

- passeord：1234

  首次登录，需要修改密码，密码修改后，提示新建账户，ctrl+C可以取消

2. 写入 emmc

  输入如下命令，执行脚本，会自动把 armbian 写入到 emmc 中
  ```shell
  ./install-aml.sh
  ```
当出现 commpletd 表明写入完成



3. 重启 N1

     输入命令

  ```shell
  shutdown -r now
  ```

  等到 N1 的灯灭掉之后，拔出U盘，在重新拔插电源，N1 会自动计入到 emmc 的 armbian 系统

---
以上，N1 刷入 armbian 结束。

