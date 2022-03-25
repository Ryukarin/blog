---
title: SFTP笔记
date: 2021-06-24
tag:
 - IT基础知识
category: 
 - IT基础
---

## SFTP 介绍

SFTP 是 SSH File Transfer  Protocol 的缩写，安全文件传送协议。SFTP 与 FTP 有着几乎一样的语法和功能。SFTP 为 SSH 的其中一部分，是一种传输档案至 Blogger 伺服器的安全方式。

其实在 SSH 软件包中，已经包含了一个叫作 SFTP 的安全文件信息传输子系统，SFTP 本身没有单独的守护进程，它必须使用 sshd 守护进程（端口号默认是 22）来完成相应的连接和答复操作，所以从某种意义上来说，SFTP 并不像一个服务器程序，而更像是一个客户端程序。

## 如何登录 SFTP

1. `sftp 服务器IP`

   `sftp 服务器IP` 回车之后，会提示输入默认用户密码进行验证，验证成功后即登录成功。

```shell
kei@kei-KVM:~/Desktop$ sftp 9.200.76.179
ryuu@9.200.76.179's password: 
Connected to 9.200.76.179.
sftp> 
```

2.  `sftp user@服务器IP`

    `sftp user@服务器IP` 之后，会提示输入指定用户 user 的密码进行验证，验证成功后即登录成功。

```shell
kei@kei-KVM:~/Desktop$ sftp karin@9.200.76.179
karin@9.200.76.179's password: 
Connected to 9.200.76.179.
sftp> 
```

## SFTP 的基本命令

同 FTP 一样，命令 `?` 或者 `help` 可以查看所有命令帮助信息。如下：

```shell
sftp> ?
Available commands:
bye                                退出 sftp
cd path                            更改远程目录到 'path'
chgrp [-h] grp path                将文件 'path' 的组更改为 'grp'
chmod [-h] mode path               将文件 'path' 的权限更改为 'mode'
chown [-h] own path                将文件 'path' 的属主更改为 'own'
df [-hi] [path]                    显示当前目录的统计信息或包含 'path' 的文件系统
exit                               退出 sftp
get [-afpR] remote [local]         下载文件
help                               显示这个帮助文本
lcd path                           更改本地目录到 'path'
lls [ls-options [path]]            显示本地目录列表
lmkdir path                        创建本地目录
ln [-s] oldpath newpath            符号链接远程文件
lpwd                               显示本地工作目录
ls [-1afhlnrSt] [path]             显示远程目录列表
lumask umask                       将本地umask设置为 'umask'
mkdir path                         创建远程目录
progress                           切换是否显示文件传输进度
put [-afpR] local [remote]         上传文件
pwd                                显示远程工作目录
quit                               退出 sftp
reget [-fpR] remote [local]        恢复下载文件
rename oldpath newpath             重命名远程文件
reput [-fpR] local [remote]        恢复上传文件
rm path                            删除远程文件
rmdir path                         删除远程目录
symlink oldpath newpath            符号链接远程文件
version                            显示 SFTP 版本信息
!command                           在本地shell中执行 'command'
!                                  启动本地shell
?                                  帮助信息
sftp> ? lpwd
```

## 常用命令

### 文件或目录操作命令

`pwd`：是看 sftp 服务器当前工作目录

`lpwd`：是看本地当前工作目录

`ls` ：是看 sftp 服务器下当前目录下的文件列表

`lls`：是看本地当前目录下的文件列表

`cd path`：更改远程目录到 'path'

`lcd path`：更改本地目录到 'path'

`mkdir path`：创建远程目录

`rmdir path`：删除远程目录

`rm file`：删除远程文件

`rename oldfile newfile`：重命名远程文件

### 上传命令

`put [-r] localfile [remotefile]`

如果不指定 `remotefile`，将使用和本地文件相同的文件名。参数 -r 来上传整个目录。

这个是把本地的 `test.txt` 文件和 `/home/ryuu/newfolder/` 目录上传到 sftp 服务器上的当前目录下。（当然也可以上传到指定的服务器目录）

```shell
#上传文件
上传文件sftp> put /home/kei/test.txt 
Uploading /home/kei/test.txt to /home/ryuu/test.txt
/home/kei/test.txt                           100%    0     0.0KB/s   00:00    
sftp> ls
Desktop         Documents       Downloads       IOSAPP          Pictures        
Templates       config.json     derby.log       fontconfig      hello           
nohup.out       share           test.txt

#上传文件夹
sftp> put -r /home/kei/newfolder/
Uploading /home/kei/newfolder/ to /home/ryuu/newfolder
sftp> ls
Desktop         Documents       Downloads       IOSAPP          Pictures        
Templates       config.json     derby.log       fontconfig      hello           
newfolder		nohup.out       share           test.txt
sftp>
```

### 下载命令

`get [-r] remotefile [localfile]`

如果不指定 `localfile`，将使用和服务器文件相同的文件名。参数 -r 来下载整个目录。

这个是把 sftp 服务器上的 `hello` 文件和 `/home/ryuu/Documents/`  文件夹下载到本地当前目录下。（当然也可以下载到指定的本地目录）

```shell
#下载文件
sftp> get /home/ryuu/hello
Fetching /home/ryuu/hello to hello
/home/ryuu/hello                              100%  174    45.4KB/s   00:00

#下载文件夹
sftp> get -r /home/ryuu/Documents/
/home/ryuu/Documents/md/deploy.sh             100%  493   611.1KB/s   00:00    
/home/ryuu/Documents/test.txt                 100%  790     1.0MB/s   00:00    
/home/ryuu/Documents/new                      100%   37   100.0KB/s   00:00    
/home/ryuu/Documents/old                      100%   26     6.0KB/s   00:00    
/home/ryuu/Documents/webmin-1.972.tar.gz      100%   40MB  36.9MB/s   00:01    
sftp> 
```

### 其他命令

`exit`：退出 sftp

`bye`：退出 sftp

`quit`：退出 sftp

`help`：显示这个帮助文本

`!command`：在本地shell中执行 'command'

`!`：启动本地shell

---

::: tip 说明

以上所有示例都是再 Ubuntu 系统下的命令行模式操作。

Windows 同样操作方法，只是界面和盘符显示不同而已。

:::
