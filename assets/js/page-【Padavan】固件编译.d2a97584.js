(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{1091:function(s,t,a){"use strict";a.r(t);var n=a(1),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"固件说明"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#固件说明"}},[s._v("#")]),s._v(" 固件说明")]),s._v(" "),n("ul",[n("li",[s._v("默认登陆IP：192.168.2.1")]),s._v(" "),n("li",[s._v("默认用户名/密码：admin/admin")]),s._v(" "),n("li",[s._v("默认wifi密码：1234567890")]),s._v(" "),n("li",[s._v("集成/取消新增插件请修改此文件："),n("code",[s._v("trunk/build_firmware_modify")])]),s._v(" "),n("li",[s._v("已适配除官方适配外的以下机型\n"),n("ul",[n("li",[s._v("MI-R3P(感谢群里emmmm适配,可能led控制有点问题,其它功能正常)")]),s._v(" "),n("li",[s._v("京东云路由(文件来自Lintel) 编译代码: JDC-1")]),s._v(" "),n("li",[s._v("歌华链(感谢群里Heaven适配与测试）编译代码: GHL")]),s._v(" "),n("li",[s._v("NEWIFI-D1")]),s._v(" "),n("li",[s._v("B70(感谢Untitled提供荒野无灯的适配文件)")]),s._v(" "),n("li",[s._v("JCG-AC856M(感谢群里的旅途中的我适配和测试,gpio值还未完全适配，但不影响使用)")]),s._v(" "),n("li",[s._v("JCG-AC836M(感谢群里的碧霄客修改和测试)")]),s._v(" "),n("li",[s._v("YK-L1(L1、L1C、L1W通刷)")]),s._v(" "),n("li",[s._v("PSG712")]),s._v(" "),n("li",[s._v("PSG1208")]),s._v(" "),n("li",[s._v("PSG1218")]),s._v(" "),n("li",[s._v("5K-W20 (USB)")]),s._v(" "),n("li",[s._v("OYE-001 (USB)")]),s._v(" "),n("li",[s._v("NEWIFI-MINI (USB)")]),s._v(" "),n("li",[s._v("MI-MINI (USB)")]),s._v(" "),n("li",[s._v("MI-3 (USB)")]),s._v(" "),n("li",[s._v("MI-R3G (USB)")]),s._v(" "),n("li",[s._v("HC5661A")]),s._v(" "),n("li",[s._v("HC5761A (USB)")]),s._v(" "),n("li",[s._v("HC5861B")]),s._v(" "),n("li",[s._v("360P2 (USB)")]),s._v(" "),n("li",[s._v("MI-NANO")]),s._v(" "),n("li",[s._v("MZ-R13")]),s._v(" "),n("li",[s._v("MZ-R13P")]),s._v(" "),n("li",[s._v("RT-AC1200GU (USB)")]),s._v(" "),n("li",[s._v("XY-C1 (USB)")]),s._v(" "),n("li",[s._v("WR1200JS (USB)")]),s._v(" "),n("li",[s._v("NEWIFI3 (USB)")]),s._v(" "),n("li",[s._v("B70 (USB)")]),s._v(" "),n("li",[s._v("A3004NS (USB)")]),s._v(" "),n("li",[s._v("K2P")]),s._v(" "),n("li",[s._v("K2P-USB (USB)")]),s._v(" "),n("li",[s._v("JCG-836PRO (USB)")]),s._v(" "),n("li",[s._v("JCG-AC860M (USB)")]),s._v(" "),n("li",[s._v("DIR-882 (USB)")]),s._v(" "),n("li",[s._v("DIR-878")]),s._v(" "),n("li",[s._v("MR2600 (USB)")]),s._v(" "),n("li",[s._v("WDR7300")]),s._v(" "),n("li",[s._v("RM2100")]),s._v(" "),n("li",[s._v("R2100")])])])]),s._v(" "),n("h2",{attrs:{id:"本地编译"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#本地编译"}},[s._v("#")]),s._v(" 本地编译")]),s._v(" "),n("h3",{attrs:{id:"_1、安装依赖包"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1、安装依赖包"}},[s._v("#")]),s._v(" 1、安装依赖包")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Debian/Ubuntu")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" update\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("unzip")]),s._v(" libtool-bin "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" cmake gperf "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("gawk")]),s._v(" flex bison "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("nano")]),s._v(" xxd fakeroot cpio "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" python-docutils gettext automake autopoint texinfo build-essential help2man pkg-config zlib1g-dev libgmp3-dev libmpc-dev libmpfr-dev libncurses5-dev libltdl-dev "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# CentOS 7")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum update\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" ncurses-* flex byacc bison zlib-* texinfo gmp-* mpfr-* gettext libtool* libmpc-* gettext-* python-docutils "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("nano")]),s._v(" help2man fakeroot\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum groupinstall "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Development Tools"')]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# CentOS 8")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum update\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" ncurses-* flex byacc bison zlib-* gmp-* mpfr-* gettext libtool* libmpc-* gettext-* "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("nano")]),s._v(" fakeroot\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum groupinstall "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Development Tools"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# CentOS 8不能直接通过yum安装texinfo，help2man，python-docutils。请去官网下载发行的安装包编译安装")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 以texinfo为例")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cd /usr/local/src")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# sudo wget http://ftp.gnu.org/gnu/texinfo/texinfo-6.7.tar.gz")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# sudo tar zxvf texinfo-6.7.tar.gz")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cd texinfo-6.7")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# sudo ./configure")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# sudo make")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# sudo make install")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Archlinux/Manjaro")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" pacman -Syu --needed "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" base-devel cmake gperf ncurses libmpc gmp python-docutils "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" rpcsvc-proto fakeroot\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br")])]),n("h3",{attrs:{id:"_2、克隆源码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2、克隆源码"}},[s._v("#")]),s._v(" 2、克隆源码")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone --depth"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" https://github.com/chongshengB/rt-n56u.git /opt/rt-n56u\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h3",{attrs:{id:"_3、准备工具链"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3、准备工具链"}},[s._v("#")]),s._v(" 3、准备工具链")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /opt/rt-n56u/toolchain-mipsel\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# （推荐）使用脚本下载预编译的工具链：")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" dl_toolchain.sh\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或者，也可以从源码编译工具链，这需要一些时间：")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Manjaro/ArchLinux 用户请使用gcc-8")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# sudo pacman -S gcc8")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# sudo ln -sf /usr/bin/gcc-8 /usr/local/bin/gcc")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# sudo ln -sf /usr/bin/g++-8 /usr/local/bin/g++")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" ./clean_toolchain\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" ./build_toolchain\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])]),n("h3",{attrs:{id:"_4、自定义插件-可选"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4、自定义插件-可选"}},[s._v("#")]),s._v(" 4、自定义插件（可选）")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /opt/rt-n56u/trunk\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("nano")]),s._v(" build_firmware_modify\t\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#用nano编辑build_firmware_modify文件")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#将下图中的插件自定义修改y/n，y是编译，n是不编译，修改好之后，Ctrl+O保存，Ctrl+X退出")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[n("img",{attrs:{src:a(623),alt:"",loading:"lazy"}})]),s._v(" "),n("h3",{attrs:{id:"_5、修改机型配置文件-可选"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5、修改机型配置文件-可选"}},[s._v("#")]),s._v(" 5、修改机型配置文件（可选）")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cd /opt/rt-n56u/trunk/configs/templates/  #进入此路径")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ls  #查看所有型号路由器的配置文件")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("nano")]),s._v(" /opt/rt-n56u/trunk/configs/templates/RM2100.config\t\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#RM2100.config为红米AC2100路由器")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 根据自身情况。自行修改对应的配置文件（可选）")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("h3",{attrs:{id:"_6、清理代码树并开始编译"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6、清理代码树并开始编译"}},[s._v("#")]),s._v(" 6、清理代码树并开始编译")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /opt/rt-n56u/trunk\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" ./clear_tree\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" fakeroot ./build_firmware_modify RM2100\t\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#RM2100就是对应型号路由器的配置文件名")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 脚本第一个参数为路由型号，在trunk/configs/templates/中")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 编译好的固件在trunk/images里")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("h2",{attrs:{id:"云编译"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#云编译"}},[s._v("#")]),s._v(" 云编译")]),s._v(" "),n("p",[s._v("以 C 大的 padavan 自编译项目")]),s._v(" "),n("p",[s._v("地址："),n("a",{attrs:{href:"https://github.com/chongshengB/Padavan-build",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/chongshengB/Padavan-build"),n("OutboundLink")],1)]),s._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[s._v("说明")]),s._v(" "),n("p",[s._v("现在不需要新建Release了，已经更改了脚本，直接fork，修改好之后，点击右上角的 Star 星星按钮即可开始自动编译（自己点击才会编译）。")])]),s._v(" "),n("p",[s._v("首先你得有个 github 账号（此处省略怎么注册）")]),s._v(" "),n("h3",{attrs:{id:"_1、进入项目地址"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1、进入项目地址"}},[s._v("#")]),s._v(" 1、进入项目地址")]),s._v(" "),n("p",[s._v("浏览器进入 "),n("a",{attrs:{href:"https://github.com/chongshengB/Padavan-build",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/chongshengB/Padavan-build"),n("OutboundLink")],1)]),s._v(" "),n("h3",{attrs:{id:"_2、fork-项目"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2、fork-项目"}},[s._v("#")]),s._v(" 2、Fork 项目")]),s._v(" "),n("p",[s._v("点击右上的 Fork，就把这个项目 Fork 到自己的账号下了")]),s._v(" "),n("p",[n("img",{attrs:{src:a(624),alt:"",loading:"lazy"}})]),s._v(" "),n("h3",{attrs:{id:"_3、进入已-fork-的项目"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3、进入已-fork-的项目"}},[s._v("#")]),s._v(" 3、进入已 Fork 的项目")]),s._v(" "),n("p",[s._v("然后会自动进入自己账号刚刚 Fork 的项目，点击 "),n("code",[s._v(".guthub/workflows")])]),s._v(" "),n("p",[n("img",{attrs:{src:a(625),alt:"",loading:"lazy"}})]),s._v(" "),n("h3",{attrs:{id:"_4、找到-build-padavan-yml"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4、找到-build-padavan-yml"}},[s._v("#")]),s._v(" 4、找到 build-padavan.yml")]),s._v(" "),n("p",[s._v("进入到 "),n("code",[s._v("Padavan-build/.github/workflows/")]),s._v("，点击 "),n("code",[s._v("build-padavan.yml")])]),s._v(" "),n("p",[n("img",{attrs:{src:a(626),alt:"",loading:"lazy"}})]),s._v(" "),n("h3",{attrs:{id:"_5、编辑-build-padavan-yml"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5、编辑-build-padavan-yml"}},[s._v("#")]),s._v(" 5、编辑 build-padavan.yml")]),s._v(" "),n("p",[s._v("可以看到 "),n("code",[s._v("build-padavan.yml")]),s._v(" 文件的内容了，点击右上的 "),n("strong",[s._v("笔")]),s._v(" 图标，进入编辑状态")]),s._v(" "),n("p",[n("img",{attrs:{src:a(627),alt:"",loading:"lazy"}})]),s._v(" "),n("h3",{attrs:{id:"_6、修改型号"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6、修改型号"}},[s._v("#")]),s._v(" 6、修改型号")]),s._v(" "),n("p",[s._v("根据第一行的提示内容，找到 "),n("code",[s._v("TNAME: K2P-5.0")]),s._v("，把 "),n("code",[s._v("K2P-5.0")]),s._v(" 改成你要编译的型号（比如红米 AC2100 对应的是 "),n("code",[s._v("RM2100")]),s._v("）")]),s._v(" "),n("p",[n("img",{attrs:{src:a(628),alt:"",loading:"lazy"}})]),s._v(" "),n("p",[n("img",{attrs:{src:a(629),alt:"",loading:"lazy"}})]),s._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[s._v("说明：怎么看不同机器的型号")]),s._v(" "),n("ul",[n("li",[s._v("找到 "),n("u",[s._v("git clone --depth=1 https://github.com/chongshengB/rt-n56u.git /opt/rt-n56u")]),s._v(" 这一行")]),s._v(" "),n("li",[s._v("浏览器打开中间的网址（https://开头.git结尾）"),n("u",[s._v("https://github.com/chongshengB/rt-n56u.git")])]),s._v(" "),n("li",[s._v("依次进入 "),n("code",[s._v("rt-n56u/trunk/configs/templates")]),s._v("，这里面就是所支持编译的所有机器型号（例如 "),n("code",[s._v("360P2.config")]),s._v(" 文件，对应的机器型号是 360路由器P2，红米AC2100 就是 RM2100.config，上面修改 TNAME 时，不需要 .config 后缀）")])]),s._v(" "),n("p",[n("img",{attrs:{src:a(630),alt:"",loading:"lazy"}})])]),s._v(" "),n("h3",{attrs:{id:"_7、自定义插件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_7、自定义插件"}},[s._v("#")]),s._v(" 7、自定义插件")]),s._v(" "),n("p",[s._v("自定义插件，具体看解释，很简单")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/CONFIG_FIRMWARE_INCLUDE_OPENSSL_EXE=n/CONFIG_FIRMWARE_INCLUDE_OPENSSL_EXE=y/g'")]),s._v(" .config\n "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("################################################################################################")]),s._v("\n "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#因不同型号配置功能不一样，所以先把配置项删除，如果你自己要添加其他的，也要写上删除这一条，切记！！！")]),s._v("\n "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("################################################################################################")]),s._v("\n "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/CONFIG_FIRMWARE_INCLUDE_MENTOHUST/d'")]),s._v(" .config "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#删除配置项MENTOHUST")]),s._v("\n "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/CONFIG_FIRMWARE_INCLUDE_SCUTCLIENT/d'")]),s._v(" .config "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#删除配置项SCUTCLIENT")]),s._v("\n "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/CONFIG_FIRMWARE_INCLUDE_SHADOWSOCKS/d'")]),s._v(" .config "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#删除配置项SS plus+")]),s._v("\n "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/CONFIG_FIRMWARE_INCLUDE_SSSERVER/d'")]),s._v(" .config "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#删除配置项SS server")]),s._v("\n "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/CONFIG_FIRMWARE_INCLUDE_DNSFORWARDER/d'")]),s._v(" .config "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#删除配置项DNSFORWARDER")]),s._v("\n "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/CONFIG_FIRMWARE_INCLUDE_ADBYBY/d'")]),s._v(" .config "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#删除配置项adbyby plus+")]),s._v("\n "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/CONFIG_FIRMWARE_INCLUDE_FRPC/d'")]),s._v(" .config "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#删除配置项内网穿透FRPC")]),s._v("\n "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/CONFIG_FIRMWARE_INCLUDE_FRPS/d'")]),s._v(" .config "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#删除配置项内网穿透FRPS")]),s._v("\n "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/CONFIG_FIRMWARE_INCLUDE_TUNSAFE/d'")]),s._v(" .config "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#删除配置项TUNSAFE")]),s._v("\n "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/CONFIG_FIRMWARE_INCLUDE_ALIDDNS/d'")]),s._v(" .config "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#删除配置项阿里DDNS")]),s._v("\n "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/CONFIG_FIRMWARE_INCLUDE_V2RAY/d'")]),s._v(" .config "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#删除配置项v2ray")]),s._v("\n "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/CONFIG_FIRMWARE_INCLUDE_TROJAN/d'")]),s._v(" .config "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#删除配置项trojan")]),s._v("\n "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/CONFIG_FIRMWARE_INCLUDE_WYYBIN/d'")]),s._v(" .config "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#删除配置项网易云解锁GO版本")]),s._v("\n "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/CONFIG_FIRMWARE_INCLUDE_ZEROTIER/d'")]),s._v(" .config "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#删除配置项zerotier")]),s._v("\n "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/CONFIG_FIRMWARE_INCLUDE_SMARTDNS/d'")]),s._v(" .config\n "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/CONFIG_FIRMWARE_INCLUDE_SRELAY/d'")]),s._v(" .config\n "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/CONFIG_FIRMWARE_INCLUDE_OPENSSL_EXE=n/CONFIG_FIRMWARE_INCLUDE_OPENSSL_EXE=y/g'")]),s._v(" .config\n "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("######################################################################")]),s._v("\n "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#以下选项是定义你需要的功能（y=集成,n=忽略），重新写入到.config文件")]),s._v("\n "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("######################################################################")]),s._v("\n "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"CONFIG_FIRMWARE_INCLUDE_MENTOHUST=n"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" .config "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#MENTOHUST")]),s._v("\n "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"CONFIG_FIRMWARE_INCLUDE_SCUTCLIENT=n"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" .config "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#SCUTCLIENT")]),s._v("\n "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"CONFIG_FIRMWARE_INCLUDE_SHADOWSOCKS=y"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" .config "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#SS plus+")]),s._v("\n "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"CONFIG_FIRMWARE_INCLUDE_SSOBFS=n"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" .config "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# simple-obfs混淆插件")]),s._v("\n "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"CONFIG_FIRMWARE_INCLUDE_SSSERVER=n"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" .config "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#SS server")]),s._v("\n "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"CONFIG_FIRMWARE_INCLUDE_DNSFORWARDER=n"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" .config "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#DNSFORWARDER")]),s._v("\n "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"CONFIG_FIRMWARE_INCLUDE_ADBYBY=y"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" .config "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#adbyby plus+")]),s._v("\n "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"CONFIG_FIRMWARE_INCLUDE_FRPC=n"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" .config "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#内网穿透FRPC")]),s._v("\n "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"CONFIG_FIRMWARE_INCLUDE_FRPS=n"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" .config "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#内网穿透FRPS")]),s._v("\n "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"CONFIG_FIRMWARE_INCLUDE_TUNSAFE=n"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" .config "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#TUNSAFE")]),s._v("\n "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"CONFIG_FIRMWARE_INCLUDE_ALIDDNS=y"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" .config "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#阿里DDNS")]),s._v("\n "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"CONFIG_FIRMWARE_INCLUDE_SMARTDNS=y"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" .config "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#smartdns")]),s._v("\n "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"CONFIG_FIRMWARE_INCLUDE_SMARTDNSBIN=y"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" .config "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#smartdns二进制文件")]),s._v("\n "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"CONFIG_FIRMWARE_INCLUDE_V2RAY=y"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" .config "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#集成v2ray执行文件（3.8M左右)，如果不集成，会从网上下载下来执行，不影响正常使用")]),s._v("\n "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"CONFIG_FIRMWARE_INCLUDE_TROJAN=y"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" .config "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#集成trojan执行文件(1.1M左右)，如果不集成，会从网上下载下来执行，不影响正常使用")]),s._v("\n "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"CONFIG_FIRMWARE_INCLUDE_KOOLPROXY=y"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" .config "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#KP广告过滤")]),s._v("\n "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"CONFIG_FIRMWARE_INCLUDE_CADDY=y"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" .config "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#在线文件管理服务")]),s._v("\n "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"CONFIG_FIRMWARE_INCLUDE_CADDYBIN=n"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" .config "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#集成caddu执行文件（13M左右），如果不集成，会从网上下载下来执行，不影响正常使用")]),s._v("\n "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"CONFIG_FIRMWARE_INCLUDE_ADGUARDHOME=y"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" .config\n "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"CONFIG_FIRMWARE_INCLUDE_SRELAY=n"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" .config "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#可以不集成")]),s._v("\n "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"CONFIG_FIRMWARE_INCLUDE_WYY=y"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" .config "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#网易云解锁")]),s._v("\n "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"CONFIG_FIRMWARE_INCLUDE_WYYBIN=y"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" .config "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#网易云解锁GO版本执行文件（4M多）注意固件超大小,不集成会自动下载")]),s._v("\n "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"CONFIG_FIRMWARE_INCLUDE_ZEROTIER=y"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" .config "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#zerotier ~1.3M")]),s._v("\n "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#########################################################################################")]),s._v("\n "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#自定义添加其它功能请参考源码configs/templates/目录下的config文件。按照上面的格式添加即可")]),s._v("\n "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#格式如下：")]),s._v("\n "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#sed -i '/自定义项/d' .config")]),s._v("\n "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#echo "自定义项=y" >> .config')]),s._v("\n "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#########################################################################################")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br")])]),n("h3",{attrs:{id:"_8、提交修改"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_8、提交修改"}},[s._v("#")]),s._v(" 8、提交修改")]),s._v(" "),n("p",[s._v("修改完成之后，点击右上的 "),n("strong",[s._v("Start commit")]),s._v("，跳出小窗口点击 "),n("strong",[s._v("Commit changes")])]),s._v(" "),n("p",[n("img",{attrs:{src:a(631),alt:"",loading:"lazy"}})]),s._v(" "),n("h3",{attrs:{id:"_9、点击-star"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_9、点击-star"}},[s._v("#")]),s._v(" 9、点击 star")]),s._v(" "),n("p",[s._v("提交之后，再点击右上的 "),n("strong",[s._v("Star")]),s._v("，然后在点击 "),n("strong",[s._v("Action")])]),s._v(" "),n("p",[n("img",{attrs:{src:a(632),alt:"",loading:"lazy"}})]),s._v(" "),n("h3",{attrs:{id:"_10、继续"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_10、继续"}},[s._v("#")]),s._v(" 10、继续")]),s._v(" "),n("p",[s._v("第一次云编译需要点击 "),n("strong",[s._v("I understand myworkflows , go ahead and enable them")])]),s._v(" "),n("p",[n("img",{attrs:{src:a(633),alt:"",loading:"lazy"}})]),s._v(" "),n("h3",{attrs:{id:"_11、刷新确认"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_11、刷新确认"}},[s._v("#")]),s._v(" 11、刷新确认")]),s._v(" "),n("p",[s._v("如果还没有编译，在次点击两次 "),n("strong",[s._v("Star")]),s._v("，让五角星变成黑色填充（文字变成 "),n("strong",[s._v("Unstar")]),s._v("），刷新网址，就可以看到在编译了")]),s._v(" "),n("p",[n("img",{attrs:{src:a(634),alt:"",loading:"lazy"}})]),s._v(" "),n("h3",{attrs:{id:"_12、等待完成"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_12、等待完成"}},[s._v("#")]),s._v(" 12、等待完成")]),s._v(" "),n("p",[s._v("大概等 20 分钟左右，就会编译完成，期间不用管，可以干点其他事情，完成之后（用时21分27秒），点击 "),n("strong",[s._v("Build Padavan")])]),s._v(" "),n("p",[n("img",{attrs:{src:a(635),alt:"",loading:"lazy"}})]),s._v(" "),n("h3",{attrs:{id:"_13、查看下载"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_13、查看下载"}},[s._v("#")]),s._v(" 13、查看下载")]),s._v(" "),n("p",[s._v("点击 "),n("strong",[s._v("Padavan-packages")]),s._v(" 下载到本地，解压后得到的固件就是刚刚编译的，之后就是刷机了")]),s._v(" "),n("p",[n("img",{attrs:{src:a(636),alt:"",loading:"lazy"}})]),s._v(" "),n("h2",{attrs:{id:"参考文档"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考文档"}},[s._v("#")]),s._v(" 参考文档")]),s._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/chongshengB/Padavan-build",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/chongshengB/Padavan-build"),n("OutboundLink")],1)]),s._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/chongshengB/rt-n56u",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/chongshengB/rt-n56u"),n("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=e.exports},623:function(s,t,a){s.exports=a.p+"assets/img/padavan_1.314e1a67.png"},624:function(s,t,a){s.exports=a.p+"assets/img/padavan_2.c05e1cd2.png"},625:function(s,t,a){s.exports=a.p+"assets/img/padavan_3.add30a5f.png"},626:function(s,t,a){s.exports=a.p+"assets/img/padavan_4.e20b9ed9.png"},627:function(s,t,a){s.exports=a.p+"assets/img/padavan_5.4b31717b.png"},628:function(s,t,a){s.exports=a.p+"assets/img/padavan_6.a78fdac3.png"},629:function(s,t,a){s.exports=a.p+"assets/img/padavan_7.2e60840c.png"},630:function(s,t,a){s.exports=a.p+"assets/img/padavan_8.d35d2596.png"},631:function(s,t,a){s.exports=a.p+"assets/img/padavan_9.b0ac5183.png"},632:function(s,t,a){s.exports=a.p+"assets/img/padavan_10.607ebbed.png"},633:function(s,t,a){s.exports=a.p+"assets/img/padavan_11.82eba24a.png"},634:function(s,t,a){s.exports=a.p+"assets/img/padavan_12.30e03f48.png"},635:function(s,t,a){s.exports=a.p+"assets/img/padavan_13.034e42f1.png"},636:function(s,t,a){s.exports=a.p+"assets/img/padavan_14.b2e78d8c.png"}}]);