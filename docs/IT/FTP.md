---
title: FTP笔记
date: 2021-06-24
tag:
 - IT基础知识
category: 
 - IT基础
---

## FTP 介绍

FTP（File Transfer Protocol，文件传输协议） 是 TCP/IP 协议组中的协议之一。FTP 协议包括两个组成部分，其一为 FTP 服务器，其二为 FTP 客户端。其中 FTP 服务器用来存储文件，用户可以使用 FTP 客户端通过 FTP 协议访问位于 FTP 服务器上的资源。在开发网站的时候，通常利用 FTP 协议把网页或程序传到 Web 服务器上。此外，由于 FTP 传输效率非常高，在网络上传输大的文件时，一般也采用该协议。

默认情况下 FTP 协议使用 TCP 端口中的 20 和 21 这两个端口，其中 20 用于传输数据，21 用于传输控制信息。但是，是否使用 20 作为传输数据的端口与 FTP 使用的传输模式有关，如果采用主动模式，那么数据传输端口就是 20；如果采用被动模式，则具体最终使用哪个端口要服务器端和客户端协商决定。

## 如何登录 FTP

1. 在命令行下输入`ftp IP地址`，按照提示输入用户名和密码，完成登陆
~~~shell
C:\Users\liujialin>ftp 192.168.3.1	#直接 ftp IP地址
连接到 192.168.3.1。
220 (vsFTPd 3.0.3)
200 Always in UTF8 mode.
用户(192.168.3.1:(none)): root		#输入用户名
331 Please specify the password.
密码:								#输入密码
230 Login successful.				#登录成功
ftp>
~~~

2. 直接输入 `ftp`，进入 ftp 服务后输入 `open IP地址`，按照提示输入用户名和密码，完成登陆

~~~shell
C:\Users\liujialin>ftp				#输入ftp进入ftp模式
ftp> open 192.168.3.1				#输入open IP地址
连接到 192.168.3.1。        
220 (vsFTPd 3.0.3)  
200 Always in UTF8 mode.
用户(192.168.3.1:(none)): root		#输入用户名
331 Please specify the password.
密码:								#输入密码
230 Login successful.				#登录成功
ftp>
~~~
## FTP 基本命令

其实只要说一个命令，常用的基本命令就可以知道了。这个命令就是十万个为什么--- `?`（没错，该命令就是一个问号，等同 `hlep` 命令）
直接输入一个 `?`，就会显示出这些命令；输入 `? 命令`，就会显示该命令的帮助信息

~~~shell
ftp> ?
命令可能是缩写的。  命令为:

!               delete          literal         prompt          send
?               debug           ls              put             status
append          dir             mdelete         pwd             trace
ascii           disconnect      mdir            quit            type
bell            get             mget            quote           user
binary          glob            mkdir           recv            verbose
bye             hash            mls             remotehelp
cd              help            mput            rename
close           lcd             open            rmdir
ftp>
~~~
比如这里随便查看几个命令的帮助信息，如下
~~~shell
ftp> ? ?
?               打印本地帮助信息
ftp> ? dir
dir             列出远程目录的内容
ftp> ? ls
ls              列出远程目录的内容
ftp> ? open
open            连接到远程 FTP
ftp> ? lcd
lcd             更改本地工作目录
ftp> help bye
bye             终止 ftp 会话并退出
ftp> help pwd
pwd             在远程计算机上打印工作目录
ftp>
~~~
## 常用命令

### 文件或目录操作命令

一般情况下用户都会被限制目录的访问权限，只可在当前目录下进行操作

`dir`：显示服务器目录和文件列表

~~~shell
ftp> cd /home
250 Directory successfully changed.
ftp> dir
200 PORT command successful. Consider using PASV.
150 Here comes the directory listing.
-rw-r--r--    1 0        0         1019904 May 12 12:39 Installing_OMV5_on_Armbian.pdf
-rw-r--r--    1 0        0          106026 Aug 03  2019 breed.bin
drwxr-xr-x    2 55       55              0 Apr 30 03:31 ftp
-rw-r--r--    1 0        0         2159147 Sep 09  2019 昆仑.epub
-rw-r--r--    1 0        0          441798 Feb 12  2019 流浪地球.epub
226 Directory send OK.
ftp: 收到 363 字节，用时 0.01秒 24.20千字节/秒。
ftp>
~~~
`mkdir`：在服务器上创建目录

~~~shell
ftp> mkdir test
257 "/home/test" created
ftp> ls
200 PORT command successful. Consider using PASV.
150 Here comes the directory listing.
ftp
ss.txt
system.png
test                    #新创建的文件夹
226 Directory send OK.
ftp: 收到 34 字节，用时 0.01秒 6.80千字节/秒。
ftp>
~~~

`rmdir`：在服务器上删除目录

~~~shell
ftp> rmdir test
250 Remove directory operation successful.
ftp> ls
200 PORT command successful. Consider using PASV.
150 Here comes the directory listing.
ftp
ss.txt
system.png
226 Directory send OK.
ftp: 收到 28 字节，用时 0.01秒 5.60千字节/秒。
ftp>
~~~

`ls`：显示服务器简易的文件列表

~~~shell
ftp> ls
200 PORT command successful. Consider using PASV.
150 Here comes the directory listing.
Installing_OMV5_on_Armbian.pdf
breed.bin
ftp
昆仑.epub
流浪地球.epub
226 Directory send OK.
ftp: 收到 83 字节，用时 0.01秒 10.38千字节/秒。
ftp>
~~~
`cd`：进入服务器指定的目录

```shell
ftp> cd /tmp
250 Directory successfully changed.
ftp>
```

`pwd`：查看服务器上的当前工作目录

~~~shell
ftp> pwd
257 "/tmp" is the current directory
ftp>
~~~
`rename filename [newfilename]`：重命名 FTP 服务器上的文件

`delete filename`：删除 FTP 服务器上的文件

### 传输方式设置命令

上传和下载文件时应该使用正确的传输类型，FTP 的传输类型分为 ASCII码方式和二进制方式两种，对 .txt、.htm 等文件应采用 ASCII码方式传输，对 .exe或图片、视频、音频等文件应采用二进制方式传输。在默认情况下，FTP 为 ASCII码传输方式。（以下 3 个命令都不带参数）

`type`：查看当前的传输方式

`ascii`：设定传输方式为 ASCII码方式

`binary`：设定传输方式为二进制方式

~~~shell
ftp> type
使用 ascii 模式传送文件。
ftp> binary
200 Switching to Binary mode.
ftp> type
使用 binary 模式传送文件。
ftp> ascii
200 Switching to ASCII mode.
ftp>
~~~

### 上传命令

`put filename [newname]`

`send filename [newname]`

filename 为上传的本地文件名，newname 为上传至 FTP 服务器上时使用的名字，如果不指定 newname，文件将以原名上传。

上传文件前，应该根据文件的类型设置传输方式（见文章最后），本机的工作目录也应该设置为上传文件所在的目录。

~~~shell
ftp> put C:\Users\liujialin\Downloads\system.png
200 PORT command successful. Consider using PASV.
150 Ok to send data.
226 Transfer complete.
ftp: 发送 64878 字节，用时 0.01秒 9268.29千字节/秒。
ftp> send C:\Users\liujialin\Downloads\ss.txt
200 PORT command successful. Consider using PASV.
150 Ok to send data.
226 Transfer complete.
ftp: 发送 382 字节，用时 0.00秒 382000.00千字节/秒。
ftp> ls
200 PORT command successful. Consider using PASV.
150 Here comes the directory listing.
ftp
ss.txt
system.png
226 Directory send OK.
ftp: 收到 28 字节，用时 0.01秒 4.67千字节/秒。
ftp>
~~~
### 下载命令
`get filename [newname]`

filename 为 FTP 服务器上的文件名，newname 为保存在本都计算机上时使用的名字，如果不指定 newname，文件将以原名保存。

`get` 命令下载的文件将保存在本地计算机的工作目录下。该目录是启动 FTP 时在盘符 C: 后显示的目录。如果想修改本地计算机的工作目录，可以使用 `lcd` 命令。比如：`lcd d:\` 表示将工作目录设定为 D 盘的根目录。

~~~shell
ftp> lcd D:\
目前的本地目录 D:\。
ftp> pwd
257 "/home" is the current directory
ftp> get ss.txt ssss.txt
200 PORT command successful. Consider using PASV.
150 Opening ASCII mode data connection for ss.txt (382 bytes).
226 Transfer complete.
ftp: 收到 417 字节，用时 0.00秒 417000.00千字节/秒。
ftp> get system.png
200 PORT command successful. Consider using PASV.
150 Opening ASCII mode data connection for system.png (64877 bytes).
226 Transfer complete.
ftp: 收到 65193 字节，用时 0.00秒 65193.00千字节/秒。
ftp>
~~~
### 其他命令

`mput filename1 filename2 ...`：上传多个文件

`mget filename1 filename2 ...`：下载多个文件

`close`：结束与服务器的 FTP 会话

`quit`：结束与服务器的 FTP 会话并退出 FTP 环境

`!`：转义到 shell，也就是结束与服务器的 FTP 会话并退出

~~~shell
ftp> ? !
!               转义到 shell
ftp> ? close
close           终止 ftp 会话
ftp> ? quit
quit            终止 ftp 会话并退出
ftp> ? bye
bye             终止 ftp 会话并退出
ftp>
~~~

---

::: tip 说明

以上所有示例都是再 Windows 10 系统下的 CMD 命令行操作。

Linux 同样操作方法，只是界面和盘符显示不同而已。

:::
