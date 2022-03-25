---
title: linux三剑客
date: 2021-04-09
tag:
 - linux
category: 
 - 教程
---

## grep 命令

很多时候，我们并不需要列出文件的全部内容，而是从文件中找到包含指定信息的那些行，要实现这个目的，可以使用 `grep` 命令。

`grep` 命令作为 Linux 文本处理三剑客的一员，另外两个是 `sed` 和 `awk`。

`grep` 命令的由来可以追溯到 UNIX 诞生的早期，在 UNIX 系统中，<u>搜索的模式（patterns）被称为正则表达式（regular  expressions）</u>，为了要彻底搜索一个文件，有的用户在要搜索的字符串前加上前缀  global（全面的），一旦找到相匹配的内容，用户就像将其输出（print）到屏幕上，而将这一系列的操作整合到一起就是 global  regular expressions print，而这也就是 `grep` 命令的全称。

`grep`命令能够在一个或多个文件中，搜索某一特定的字符模式（也就是正则表达式），此模式可以是单一的字符、字符串、单词或句子。

正则表达式是描述一组字符串的一个模式，正则表达式的构成模仿了数学表达式，通过使用操作符将较小的表达式组合成一个新的表达式。正则表达式可以是一些纯文本文字，也可以是用来产生模式的一些特殊字符。为了进一步定义一个搜索模式，`grep` 命令支持如表1 所示的这几种正则表达式的元字符（也就是通配符）。

**表1	<u>正则表达式通配符</u>**

| 通配符 | 功能                                                         |
| ------ | ------------------------------------------------------------ |
| *      | 匹配前面的子表达式 0 次或多次。                              |
| ?      | 匹配前面的子表达式 0 次或 1 次。                             |
| +      | 匹配前面的子表达式 1 次或多次。                              |
| .      | 将匹配任何一个字符，且只能是一个字符。                       |
| [a-z]  | 匹配方括号中的任意一个字符。                                 |
| [^xyz] | 匹配除方括号中字符外的所有字符。                             |
| \|     | 指明两项之间的一个选择。                                     |
| {n}    | n 是一个非负整数。匹配确定的 n 次。                          |
| {n,}   | n 是一个非负整数。至少匹配 n 次。                            |
| {n,m}  | m 和 n 均为非负整数，其中 n <= m。最少匹配 n 次且最多匹配 m 次。 |
| ^      | 锁定行的开头。                                               |
| $      | 锁定行的结尾。                                               |
| \      | 转义字符。将下一个字符标记为或特殊字符、或原义字符、或向后引用、或八进制转义符。 |

需要注意的是，在基本正则表达式中，如通配符 **\*、+、{、|、(** 和 **)** 等，已经失去了它们原本的含义，而若要恢复它们原本的含义，则要在之前添加反斜杠 **\\**，如 **\\*、\\+、\\{、\\|、\\(** 和 **\\)**。

`grep` 命令是用来在每一个文件中（或特定输出上）搜索特定的模式，当使用 `grep` 时，包含指定字符模式的每一行内容，都会被打印（显示）到屏幕上，但是使用 `grep` 命令并不改变文件中的内容。

### 基本用法

`grep` 命令的基本格式如下：

```shell
[root@localhost ~]# grep [选项] 模式 文件名
选项：
	-c：仅列出文件中包含模式的行数
	-i：忽略模式中的字母大小写
	-l：列出带有匹配行的文件名
	-n：在每一行的最前面列出行号
	-v：列出没有匹配模式的行
	-w：把表达式当做一个完整的单字符来搜寻，忽略那些部分匹配的行

模式	：要么是字符（串），要么是正则表达式。

文件名	：即要搜索匹配的源文件或者标准输入，标准输入常用管道符 | 连接 grep

```

::: tip 注意

如果是搜索多个文件，`grep` 命令的搜索结果只显示文件中发现匹配模式的文件名；而如果搜索单个文件，`grep` 命令的结果将显示每一个包含匹配模式的行。

:::

例 1：假设有一份 `emp.data` 员工清单，现在要搜索此文件，找出职位为 CLERK 的所有员工，则执行命令如下：

```shell
# 来自文件
[root@localhost ~]# grep CLERK emp.data

# 来自标准输入
[root@localhost ~]# cat emp.data | grep CLERK
```

而在此基础上，如果只想知道职位为 CLERK 的员工的人数，可以使用“-c”选项，执行命令如下：

```shell
[root@localhost ~]# grep -c CLERK emp.data
#忽略输出内容
```


例 2：搜索 `emp.data` 文件，使用正则表达式找出以 78 开头的数据行，执行命令如下：

```shell
[root@localhost ~]# grep ^78 emp.data
#忽略输出内容
```

`grep` 命令的功能非常强大，通过利用它的不同选项以及变化万千的正则表达式，可以获取任何我们所需要的信息。本节所介绍的 grep  命令，只介绍了它的一部分基础知识，比如说，grep  命令可用的选项还有很多，且用法也五花八门，不过对于初学者来说，本节所介绍的内容已经足以应付多数 Linux 系统的日常工作了。

例 3：将 `/etc/passwd` 文件中，没有出现 root 和 nologin 的行打印出来，执行命令如下：

```shell
[root@localhost ~]# cat /etc/passwd | grep -v root | grep -v nologin
#忽略输出内容
```

### egrep 或 grep -E

使用 `egrep` 的主要好处是增加了额外的正则表达式元字符集。

打印所有包含 NW 或 EA 的行。如果不是使用 `egrep`，而是 `grep`，将不会有结果查出。

```shell
[root@localhost ~]# egrep 'NW|EA' testfile     
northwest       NW      Charles Main        3.0     .98     3       34
eastern         EA      TB Savage           4.4     .84     5       20
```

对于标准 `grep`，如果在扩展元字符前面加 \，grep 会自动启用扩展选项 -E。

```shell
[root@localhost ~]# grep 'NW\|EA' testfile
northwest       NW      Charles Main        3.0     .98     3       34
eastern         EA      TB Savage           4.4     .84     5       20
```

搜索所有包含一个或多个 3 的行。

```shell
[root@localhost ~]# egrep '3+' testfile
[root@localhost ~]# grep -E '3+' testfile
[root@localhost ~]# grep '3\+' testfile        
#这3条命令将会
northwest       NW      Charles Main          3.0     .98     3       34
western         WE      Sharon Gray           5.3     .97     5       23
northeast       NE      AM Main Jr.           5.1     .94     3       13
central         CT      Ann Stephens          5.7     .94     5       13
```

搜索所有包含 0 个或 1 个小数点字符的行。

```shell
[root@localhost ~]# egrep '2\.?[0-9]' testfile 
[root@localhost ~]# grep -E '2\.?[0-9]' testfile
[root@localhost ~]# grep '2\.\?[0-9]' testfile 
#首先含有2字符，其后紧跟着0个或1个点，后面再是0和9之间的数字。
western         WE      Sharon Gray           5.3     .97     5       23
southwest       SW      Lewis Dalsass         2.7     .8      2       18
eastern         EA      TB Savage             4.4     .84     5       20
```

搜索一个或者多个连续的 no 的行。

```shell
[root@localhost ~]# egrep '(no)+' testfile
[root@localhost ~]# grep -E '(no)+' testfile
[root@localhost ~]# grep '\(no\)\+' testfile
#3个命令返回相同结果，
northwest       NW      Charles Main        3.0     .98     3       34
northeast       NE       AM Main Jr.        5.1     .94     3       13
north           NO      Margot Weber        4.5     .89     5       9
```

### fgrep 或 grep -F

`fgrep` 查询速度比 `grep` 命令快，但是不够灵活；它只能找固定的文本，而不是规则表达式。

如果你想在一个文件或者输出中找到包含星号字符的行

```shell
[root@localhost ~]# fgrep '*' /etc/profile
for i in /etc/profile.d/*.sh ; do

或
[root@localhost ~]# grep -F '*' /etc/profile
for i in /etc/profile.d/*.sh ; do
```

## sed 命令

我们知道，Vim 采用的是交互式文本编辑模式，你可以用键盘命令来交互性地插入、删除或替换数据中的文本。

`sed` 命令，它采用的是流编辑模式，最明显的特点是，在 `sed` 处理数据之前，需要预先提供一组规则，`sed` 会按照此规则来编辑数据。

`sed` 会根据脚本命令来处理文本文件中的数据，这些命令要么从命令行中输入，要么存储在一个文本文件中，此命令执行数据的顺序如下：

1. 每次仅读取一行内容；
2. 根据提供的规则命令匹配并修改数据。注意，`sed` 默认不会直接修改源文件数据，而是会将数据复制到缓冲区中，修改也仅限于缓冲区中的数据；
3. 将执行结果输出。

当一行数据匹配完成后，它会继续读取下一行数据，并重复这个过程，直到将文件中所有数据处理完毕。

`sed` 命令的基本格式如下：

```shell
[root@localhost ~]# sed [选项] '[脚本命令]' 文件名
选项：
	-e 脚本命令		：该选项会将其后跟的脚本命令添加到已有的命令中
	-f 脚本命令文件	：该选项会将其后文件中的脚本命令添加到已有的命令中
	-n				：默认情况下，sed 会在所有的脚本指定执行完毕后，会自动输出处理后的内容，而该选项会屏蔽启动输出，需使用 print 命令来完成输出
	-i				：此选项会直接修改源文件，要慎用
	
脚本命令：
	s	：查找替换
	d	：删除定位行
	a\	：在当前行下面插入文本
	i\	：在当前行上面插入文本
	c\	：用新文本替换定位文本
	y	：转换（表示把一个字符翻译为另外的字符）
	p	：打印（和-n选项一起合用，打印匹配行）
	w	：把文本写到一个文件，类似输出重定向 >
	r	：从另一个文件中读文本，类似输入重定向 <
	q	：第一个模式匹配完成后退出或立即退出
```


成功使用 `sed` 命令的关键在于掌握各式各样的脚本命令及格式，它能帮你定制编辑文件的规则。

### sed 脚本命令

#### sed s 替换脚本命令

此命令的基本格式为：

```shell
[address]s/pattern/replacement/flags

address：表示指定要操作的具体行
pattern：指的是需要替换的内容
replacement：指的是要替换的新内容
flags：
	n		：1~512 之间的数字，表示指定要替换的字符串出现第几次时才进行替换，例如，一行中有 3 个 A，但用户只想替换第二个 A，这是就用到这个标记
	g		：对数据中所有匹配到的内容进行替换，如果没有 g，则只会在第一次匹配成功时做替换操作。例如，一行数据中有 3 个 A，则只会替换第一个 A
	p		：会打印与替换命令中指定的模式匹配的行。此标记通常与 -n 选项一起使用
	w file	：将缓冲区中的内容写到指定的 file 文件中（相当于另存为）
	&		：用正则表达式匹配的内容进行替换
	\n		：匹配第 n 个子串，该子串之前在 pattern 中用 \(\) 指定
	\		：转义（转义替换部分包含：&、\ 等）
```


比如，可以指定 `sed` 用新文本替换第几处模式匹配的地方：

```shell
[root@localhost ~]# cat data1.txt
This is a test of the test script.
This is the second test of the test script.
[root@localhost ~]# sed 's/test/trial/2' data1.txt
This is a test of the trial script.
This is the second test of the trial script.
```

可以看到，使用数字 2 作为标记的结果就是，`sed` 编辑器只替换每行中第 2 次出现的匹配模式。

如果要用新文件替换所有匹配的字符串，可以使用 g 标记：

```shell
[root@localhost ~]# sed 's/test/trial/g' data1.txt
This is a trial of the trial script.
This is the second trial of the trial script.
```


我们知道，-n 选项会禁止 `sed` 输出，但 p 标记会输出修改过的行，将二者匹配使用的效果就是只输出被替换命令修改过的行，例如：

```shell
[root@localhost ~]# cat data2.txt
This is a test line.
This is a different line.
[root@localhost ~]# sed -n 's/test/trial/p' data2.txt
This is a trial line.
```


w 标记会将匹配后的结果保存到指定文件中，比如：

```shell
[root@localhost ~]# sed 's/test/trial/w test.txt' data2.txt
This is a trial line.
This is a different line.
[root@localhost ~]#cat test.txt
This is a trial line.
```


在使用 s 脚本命令时，替换类似文件路径的字符串会比较麻烦，需要将路径中的正斜线进行转义，例如：

```shell
[root@localhost ~]# sed 's/\/bin\/bash/\/bin\/csh/' /etc/passwd
```

#### sed d 替换脚本命令

此命令的基本格式为：

```shell
[address]d
```

如果需要删除文本中的特定行，可以用 d 脚本命令，它会删除指定行中的所有内容。但使用该命令时要特别小心，如果你忘记指定具体行的话，文件中的所有内容都会被删除，举个例子：

```shell
[root@localhost ~]# cat data3.txt
The quick brown fox jumps over the lazy dog
The quick brown fox jumps over the lazy dog
The quick brown fox jumps over the lazy dog
The quick brown fox jumps over the lazy dog
[root@localhost ~]# sed 'd' data3.txt
#什么也不输出，证明成了空文件
```

当和指定地址一起使用时，删除命令显然能发挥出大的功用。可以从数据流中删除特定的文本行。

 address 的具体写法后续会做详细介绍，这里只给大家举几个简单的例子：

- 通过行号指定，比如删除 data6.txt 文件内容中的第 3 行：

  ```shell
  [root@localhost ~]# cat data4.txt
  This is line number 1.
  This is line number 2.
  This is line number 3.
  This is line number 4.
  [root@localhost ~]# sed '3d' data4.txt
  This is line number 1.
  This is line number 2.
  This is line number 4.
  ```

- 或者通过特定行区间指定，比如删除 data6.txt 文件内容中的第 2、3行：

  ```shell
  [root@localhost ~]# sed '2,3d' data4.txt
  This is line number 1.
  This is line number 4.
  ```

- 也可以使用两个文本模式来删除某个区间内的行，但这么做时要小心，你指定的第一个模式会“打开”行删除功能，第二个模式会“关闭”行删除功能，因此，`sed` 会删除两个指定行之间的所有行（包括指定的行），例如：

  ```shell
  [root@localhost ~]#sed '/1/,/3/d' data4.txt
  #删除第 1~3 行的文本数据
  This is line number 4.
  ```

- 或者通过特殊的文件结尾字符，比如删除 data4.txt 文件内容中第 3 行开始的所有的内容：

  ```shell
  [root@localhost ~]# sed '3,$d' data4.txt
  This is line number 1.
  This is line number 2.
  ```

在此强调，在默认情况下 `sed` 并不会修改原始文件，这里被删除的行只是从 `sed` 的输出中消失了，原始文件没做任何改变。

#### sed a\ 和 i\ 脚本命令

a\ 命令表示在指定行的后面附加一行，i\ 命令表示在指定行的前面插入一行，这里之所以要同时介绍这 2 个脚本命令，因为它们的基本格式完全相同，如下所示：

```shell
[address]a（或i）\新文本内容
```

下面分别就这 2 个命令，举几个例子。比如说，将一个新行插入到数据流第三行前，执行命令如下：

```shell
[root@localhost ~]# sed '3i\
> This is an inserted line.' data4.txt
This is line number 1.
This is line number 2.
This is an inserted line.
This is line number 3.
This is line number 4.
```

再比如说，将一个新行附加到数据流中第三行后，执行命令如下：

```shell
[root@localhost ~]# sed '3a\
> This is an appended line.' data4.txt
This is line number 1.
This is line number 2.
This is line number 3.
This is an appended line.
This is line number 4.
```

如果你想将一个多行数据添加到数据流中，只需对要插入或附加的文本中的每一行末尾（除最后一行）添加反斜线即可，例如：

```shell
[root@localhost ~]# sed '1i\
> This is one line of new text.\
> This is another line of new text.' data6.txt
This is one line of new text.
This is another line of new text.
This is line number 1.
This is line number 2.
This is line number 3.
This is line number 4.
```

可以看到，指定的两行都会被添加到数据流中。

#### sed c\ 替换脚本命令

c\ 命令表示将指定行中的所有内容，替换成该选项后面的字符串。该命令的基本格式为：

```shell
[address]c\用于替换的新文本
```

举个例子：

```shell
[root@localhost ~]# sed '3c\
> This is a changed line of text.' data4.txt
This is line number 1.
This is line number 2.
This is a changed line of text.
This is line number 4.
在这个例子中，sed 编辑器会修改第三行中的文本，其实，下面的写法也可以实现此目的：
[root@localhost ~]# sed '/number 3/c\
> This is a changed line of text.' data4.txt
This is line number 1.
This is line number 2.
This is a changed line of text.
This is line number 4.
```

#### sed y 转换脚本命令

y 转换命令是唯一可以处理单个字符的 `sed` 脚本命令，其基本格式如下：

```shell
[address]y/inchars/outchars/
```

转换命令会对 inchars 和 outchars 值进行一对一的映射，即 inchars 中的第一个字符会被转换为 outchars  中的第一个字符，第二个字符会被转换成 outchars 中的第二个字符...这个映射过程会一直持续到处理完指定字符。如果 inchars 和 outchars 的长度不同，则 sed 会产生一条错误消息。

举个简单例子：

```shell
[root@localhost ~]# cat data5.txt
This is line number 1.
This is line number 2.
This is line number 3.
This is line number 4.
This is line number 1 again.
This is yet another line.
This is the last line in the file.
[root@localhost ~]# sed 'y/123/789/' data5.txt
This is line number 7.
This is line number 8.
This is line number 9.
This is line number 4.
This is line number 7 again.
This is yet another line.
This is the last line in the file.
```

可以看到，inchars 模式中指定字符的每个实例都会被替换成 outchars 模式中相同位置的那个字符。

转换命令是一个全局命令，也就是说，它会在文本行中找到的所有指定字符自动进行转换，而不会考虑它们出现的位置，再打个比方：

```shell
[root@localhost ~]# echo "This 1 is a test of 1 try." | sed 'y/123/456/'
This 4 is a test of 4 try.
```

`sed` 转换了在文本行中匹配到的字符 1 的两个实例，我们无法限定只转换在特定地方出现的字符。

#### sed p 打印脚本命令

p 命令表示搜索符号条件的行，并输出该行的内容，此命令的基本格式为：

```
[address]p
```

p 命令常见的用法是打印包含匹配文本模式的行，例如：

```shell
[root@localhost ~]# cat data6.txt
This is line number 1.
This is line number 2.
This is line number 3.
This is line number 4.
[root@localhost ~]# sed -n '/number 3/p' data6.txt
This is line number 3.
```

可以看到，用 -n 选项和 p 命令配合使用，我们可以禁止输出其他行，只打印包含匹配文本模式的行。

如果需要在修改之前查看行，也可以使用打印命令，比如与替换或修改命令一起使用。可以创建一个脚本在修改行之前显示该行，如下所示：

```shell
[root@localhost ~]# sed -n '/3/{
> p
> s/line/test/p
> }' data6.txt
This is line number 3.
This is test number 3.
```

`sed` 命令会查找包含数字 3 的行，然后执行两条命令。首先，脚本用 p 命令来打印出原始行；然后它用 s 命令替换文本，并用 p 标记打印出替换结果。输出同时显示了原来的行文本和新的行文本。

#### sed w 脚本命令

w 命令用来将文本中指定行的内容写入文件中，此命令的基本格式如下：

```shell
[address]w filename
```

这里的 filename 表示文件名，可以使用相对路径或绝对路径，但不管是哪种，运行 `sed` 命令的用户都必须有文件的写权限。

下面的例子是将数据流中的前两行打印到一个文本文件中：

```shell
[root@localhost ~]# sed '1,2w test.txt' data6.txt
This is line number 1.
This is line number 2.
This is line number 3.
This is line number 4.
[root@localhost ~]# cat test.txt
This is line number 1.
This is line number 2.
```

当然，如果不想让行直接输出，可以用 -n 选项，再举个例子：

```shell
[root@localhost ~]# cat data7.txt
Blum, R    Browncoat
McGuiness, A Alliance
Bresnahan, C Browncoat
Harken, C   Alliance
[root@localhost ~]# sed -n '/Browncoat/w Browncoats.txt' data7.txt
[root@localhost ~]# cat Browncoats.txt
Blum, R    Browncoat
Bresnahan, C Browncoat
```

可以看到，通过使用 w 脚本命令，`sed` 可以实现将包含文本模式的数据行写入目标文件。

#### sed r 脚本命令

r 命令用于将一个独立文件的数据插入到当前数据流的指定位置，该命令的基本格式为：

```shell
[address]r filename
```

`sed` 命令会将 filename 文件中的内容插入到 address 指定行的后面，比如说：

```shell
[root@localhost ~]# cat data8.txt
This is an added line.
This is the second added line.
[root@localhost ~]# sed '3r data8.txt' data6.txt
This is line number 1.
This is line number 2.
This is line number 3.
This is an added line.
This is the second added line.
This is line number 4.
```

如果你想将指定文件中的数据插入到数据流的末尾，可以使用 $ 地址符，例如：

```shell
[root@localhost ~]# sed '$r data8.txt' data6.txt
This is line number 1.
This is line number 2.
This is line number 3.
This is line number 4.
This is an added line.
This is the second added line.
```

#### sed q 退出脚本命令

q 命令的作用是使 `sed` 命令在第一次匹配任务结束后，退出 `sed` 程序，不再进行对后续数据的处理。

比如：

```shell
[root@localhost ~]# sed '2q' test.txt
This is line number 1.
This is line number 2.
```

可以看到，`sed` 命令在打印输出第 2 行之后，就停止了，是 q 命令造成的，再比如：

```shell
[root@localhost ~]# sed '/number 1/{ s/number 1/number 0/;q; }' test.txt
This is line number 0.
```

使用 q 命令之后，`sed` 命令会在匹配到 number 1 时，将其替换成 number 0，然后直接退出。

### sed 脚本命令的寻址方式

前面在介绍各个脚本命令时，我们一直忽略了对 address 部分的介绍。对各个脚本命令来说，address 用来表明该脚本命令作用到文本中的具体行。

默认情况下，`sed` 命令会作用于文本数据的所有行。如果只想将命令作用于特定行或某些行，则必须写明 address 部分，表示的方法有以下 2 种：

1. 以数字形式指定行区间；
2. 用文本模式指定具体行区间。


以上两种形式都可以使用如下这 2 种格式，分别是：

```shell
[address]脚本命令

 或者

 address {
   多个脚本命令
 }
```

以上两种形式在前面例子中都有具体实例，因此这里不再做过多赘述。

#### 以数字形式指定行区间

当使用数字方式的行寻址时，可以用行在文本流中的行位置来引用。`sed` 会将文本流中的第一行编号为 1，然后继续按顺序为接下来的行分配行号。

在脚本命令中，指定的地址可以是单个行号，或是用起始行号、逗号以及结尾行号指定的一定区间范围内的行。这里举一个 `sed` 命令作用到指定行号的例子：

```shell
[root@localhost ~]#sed '2s/dog/cat/' data9.txt
The quick brown fox jumps over the lazy dog
The quick brown fox jumps over the lazy cat
The quick brown fox jumps over the lazy dog
The quick brown fox jumps over the lazy dog
```

可以看到，`sed` 只修改地址指定的第二行的文本。下面的例子中使用了行地址区间：

```shell
[root@localhost ~]# sed '2,3s/dog/cat/' data9.txt
The quick brown fox jumps over the lazy dog
The quick brown fox jumps over the lazy cat
The quick brown fox jumps over the lazy cat
The quick brown fox jumps over the lazy dog
```

在此基础上，如果想将命令作用到文本中从某行开始的所有行，可以用特殊地址---美元符（$）：

```shell
[root@localhost ~]# sed '2,$s/dog/cat/' data9.txt
The quick brown fox jumps over the lazy dog
The quick brown fox jumps over the lazy cat
The quick brown fox jumps over the lazy cat
The quick brown fox jumps over the lazy cat
```

#### 用文本模式指定行区间

`sed` 允许指定文本模式来过滤出命令要作用的行，格式如下：

```shell
/pattern/command
```

注意，必须用正斜线将要指定的 pattern 封起来，`sed` 会将该命令作用到包含指定文本模式的行上。

举个例子，如果你想只修改用户 demo 的默认 shell，可以使用 `sed` 命令，执行命令如下：

```shell
[root@localhost ~]# grep demo /etc/passwd
demo:x:502:502::/home/Samantha:/bin/bash
[root@localhost ~]# sed '/demo/s/bash/csh/' /etc/passwd
root:x:0:0:root:/root:/bin/bash
...
demo:x:502:502::/home/demo:/bin/csh
...
```


虽然使用固定文本模式能帮你过滤出特定的值，就跟上面这个用户名的例子一样，但其作用难免有限，因此，`sed` 允许在文本模式使用正则表达式指明作用的具体行。正则表达式允许创建高级文本模式匹配表达式来匹配各种数据。这些表达式结合了一系列通配符、特殊字符以及固定文本字符来生成能够匹配几乎任何形式文本的简练模式。

示例：

```shell
[root@localhost ~]# cat test.txt
<html>
<title>First Wed</title>
<body>
h1Helloh1
h2Helloh2
h3Helloh3
</body>
</html>
#使用正则表示式给所有第一个的h1、h2、h3添加<>，给第二个h1、h2、h3添加</>
[root@localhost ~]# cat sed.sh
/h[0-9]/{
    s//\<&\>/1
    s//\<\/&\>/2
}
[root@localhost ~]# sed -f sed.sh test.txt
<h1>Hello</h1>
<h2>Hello</h2>
<h3>Hello</h3>
```

## awk 命令

除了使用 `sed` 命令，Linux 系统中还有一个功能更加强大的文本数据处理工具，就是 `awk`。它诞生于 20 世纪 70 年代末期，这也许是它影响了众多 Linux 用户的原因之一。

曾有人推测 `awk` 命令的名字来源于 awkward 这个单词。其实不然，此命令的设计者有 3 位，他们的姓分别是 Aho、Weingberger 和 Kernighan，awk 就取自这 3 为大师姓的首字母。

和 `sed` 命令类似，`awk` 命令也是逐行扫描文件（从第 1 行到最后一行），寻找含有目标文本的行，如果匹配成功，则会在该行上执行用户想要的操作；反之，则不对行做任何处理。

`awk` 命令的基本格式为：

```shell
[root@localhost ~]# awk [选项] '[脚本命令]' 文件名
选项：
	-F fs		：指定以 fs 作为输入行的分隔符，awk 命令默认分隔符为空格或制表符
	-f file		：从脚本文件中读取 awk 脚本指令，以取代直接在命令行中输入指令
	-v var=val	：在执行处理过程之前，设置一个变量 var，并给其设备初始值为 val
```

`awk` 的强大之处在于脚本命令，它由 2 部分组成，分别为匹配规则和执行命令，如下所示：

```shell
'匹配规则{执行命令}'
```

这里的匹配规则，和 `sed` 命令中的 address 部分作用相同，用来指定脚本命令可以作用到文本内容中的具体行，可以使用字符串（比如  /demo/，表示查看含有 demo 字符串的行）或者正则表达式指定。另外需要注意的是，**整个脚本命令是用单引号 '  ' 括起，而其中的执行命令部分需要用大括号 {  } 括起来**。

在 `awk` 程序执行时，如果没有指定执行命令，则默认会把匹配的行输出；如果不指定匹配规则，则默认匹配文本中所有的行。

举个简单的例子：

```shell
[root@localhost ~]# awk '/^$/ {print "Blank line"}' test.txt
```

在此命令中，`/^$/` 是一个正则表达式，功能是匹配文本中的空白行，同时可以看到，执行命令使用的是 print 命令，此命令经常会使用，它的作用很简单，就是将指定的文本进行输出。因此，整个命令的功能是，如果 test.txt 有 N 个空白行，那么执行此命令会输出 N 个 Blank line。

### awk 基本用法

#### awk 对字段的提取（列）

`awk` 的主要特性之一是其处理文本文件中数据的能力，它会自动给一行中的每个数据元素分配一个变量。

默认情况下，`awk` 会将如下变量分配给它在文本行中发现的数据字段：

- $0 代表整个文本行；
- $1 代表文本行中的第 1 个数据字段；
- $2 代表文本行中的第 2 个数据字段；
- $N 代表文本行中的第 N 个数据字段；
- $NF 代表文本行中的最后一个数据字段。


前面说过，在 `awk` 中，默认的字段分隔符是任意的空白字符（例如空格或制表符）。 在文本行中，每个数据字段都是通过字段分隔符划分的。`awk` 在读取一行文本时，会用预定义的字段分隔符划分每个数据字段。

所以在下面的例子中，`awk` 程序读取文本文件，只显示第 1 个数据字段的值：

```shell
[root@localhost ~]# cat data2.txt
One line of test text.
Two lines of test text.
Three lines of test text.
[root@localhost ~]# awk '{print $1}' data2.txt
One
Two
Three
```

该程序用 $1 字段变量来表示“仅显示每行文本的第 1 个数据字段”。当然，如果你要读取采用了其他字段分隔符的文件，可以用 -F 选项手动指定。

#### awk 对记录的提取（行）

提取一个文本中的一行并打印输出，记录的提取方法有两种：

- 通过行号
- 通过正则匹配

例如：提取test中的第三行（指定行号为3）

```shell
[root@linux ~ ]# awk 'NR==3{print $0}' test
3 the quick brown fox jumps over the lazy cat.
[root@linux ~ ]# awk 'NR==1{print $1,$3,$5}' /etc/passwd
root 0 root
[root@linux ~ ]# awk 'NR==1{print $1 "-" $3 "-" $5}' /etc/passwd
root-0-root
```

#### awk 脚本命令使用多个命令

`awk` 允许将多条命令组合成一个正常的程序。要在命令行上的程序脚本中使用多条命令，只要在命令之间放个分号即可，例如：

```shell
[root@localhost ~]# echo "My name is Rich" | awk '{$4="Christine"; print $0}'
My name is Christine
```

第一条命令会给字段变量 $4 赋值。第二条命令会打印整个数据字段。可以看到，`awk` 程序在输出中已经将原文本中的第四个数据字段替换成了新值。

除此之外，也可以一次一行地输入程序脚本命令，比如说：

```shell
[root@localhost ~]# awk '{
> $4="Christine"
> print $0}'
My name is Rich
My name is Christine
```

在你用了表示起始的单引号后，bash shell 会使用 `>` 来提示输入更多数据，我们可以每次在每行加一条命令，直到输入了结尾的单引号。

注意，此例中因为没有在命令行中指定文件名，`awk` 程序需要用户输入获得数据，因此当运行这个程序的时候，它会一直等着用户输入文本，此时如果要退出程序，只需按下 <kbd>Ctrl</kbd>+<kbd>D</kbd> 组合键即可。

#### awk 从文件中读取程序

跟 `sed` 一样，`awk` 允许将脚本命令存储到文件中，然后再在命令行中引用，比如：

```shell
[root@localhost ~]# cat awk.sh
{print $1 "'s home directory is " $6}
[root@localhost ~]# awk -F: -f awk.sh /etc/passwd
root's home directory is /root
bin's home directory is /bin
daemon's home directory is /sbin
adm's home directory is /var/adm
lp's home directory is /var/spool/lpd
...
Christine's home directory is /home/Christine
Samantha's home directory is /home/Samantha
Timothy's home directory is /home/Timothy
```

awk.sh 脚本文件会使用 print 命令打印 `/etc/passwd` 文件的主目录数据字段（字段变量 $6），以及 userid 数据字段（字段变量 $1）。注意，在程序文件中，也可以指定多条命令，只要一条命令放一行即可，之间不需要用分号。

#### awk BEGIN关键字

`awk` 中还可以指定脚本命令的运行时机。默认情况下，`awk` 会从输入中读取一行文本，然后针对该行的数据执行程序脚本，但有时可能需要在处理数据前运行一些脚本命令，这就需要使用 BEGIN 关键字。

BEGIN 会强制 `awk` 在读取数据前执行该关键字后指定的脚本命令，例如：

```shell
[root@localhost ~]# cat data3.txt
Line 1
Line 2
Line 3
[root@localhost ~]# awk 'BEGIN {print "The data3 File Contents:"}
> {print $0}' data3.txt
The data3 File Contents:
Line 1
Line 2
Line 3
```

可以看到，这里的脚本命令中分为 2 部分，BEGIN 部分的脚本指令会在 awk 命令处理数据前运行，而真正用来处理数据的是第二段脚本命令。

#### awk END关键字

和 BEGIN 关键字相对应，END 关键字允许我们指定一些脚本命令，`awk` 会在读完数据后执行它们，例如：

```shell
[root@localhost ~]# awk 'BEGIN {print "The data3 File Contents:"}
> {print $0}
> END {print "End of File"}' data3.txt
The data3 File Contents:
Line 1
Line 2
Line 3
End of File
```

可以看到，当 `awk` 程序打印完文件内容后，才会执行 END 中的脚本命令。

上面介绍了 awk 程序的基本用法，下面继续介绍更高级的用法。

### awk 高级用法

其实在 `awk` 脚本程序中，还支持使用一些编程语言，比如变量、数组、分支结构（if-then-else）、循环结构（while）、函数等，下面一一给大家介绍。

#### awk 使用变量

在 `awk` 的脚本程序中，支持使用变量来存取值。`awk` 支持两种不同类型的变量：

- 内建变量：`awk` 本身就创建好，用户可以直接拿来用的变量，这些变量用来存放处理数据文件中的某些字段和记录的信息。
- 自定义变量：`awk` 支持用户自己创建变量。

#### 内建变量

`awk` 程序使用内建变量来引用程序数据里的一些特殊功能。常见的一些内建变量，包括上面介绍的数据字段变量（$0、$1、$2...$n）以及表2、表3 中所示的这些变量。

**表2	<u>字段和记录分隔符变量</u>**

| 变量        | 功能                                                 |
| ----------- | ---------------------------------------------------- |
| FIELDWIDTHS | 由空格分隔的一列数字，定义了每个数据字段的确切宽度。 |
| FNR         | 当前输入文档的记录编号，常在有多个输入文档时使用。   |
| NR          | 输入流的当前记录编号。                               |
| FS          | 输入字段分隔符，默认为空格。                         |
| RS          | 输入记录分隔符，默认为换行符 \n。                    |
| OFS         | 输出字段分隔符，默认为空格。                         |
| ORS         | 输出记录分隔符，默认为换行符 \n。                    |


在表2 中，变量 FS 和 OFS 定义了 `awk` 如何处理数据流中的数据字段。我们已经知道了如何使用变量 FS 来定义记录中的字段分隔符，变量 OFS 具备相同的功能，只不过是用在 print 命令的输出上，例如：

```shell
[root@localhost ~]# cat data1
data11,data12,data13,data14,data15
data21,data22,data23,data24,data25
data31,data32,data33,data34,data35
[root@localhost ~]# awk 'BEGIN{FS=","; OFS="-"} {print $1,$2,$3}' data1
data11-data12-data13
data21-data22-data23
data31-data32-data33
[root@localhost ~]# awk 'BEGIN{FS=","; OFS="--"} {print $1,$2,$3}' data1
data11--data12--data13
data21--data22--data23
data31--data32--data33
```

可以看到，print 命令会自动将 OFS 变量的值放置在输出中的每个字段间。通过设置 OFS 变量，可以在输出中使用任意字符串来分隔字段。

FIELDWIDTHS 变量允许用户不依靠字段分隔符来读取记录。在一些应用程序中，数据并没有使用字段分隔符，而是被放置在了记录中的特定列，这种情况下，必须设定 FIELDWIDTHS 变量来匹配数据在记录中的位置。

一旦设置了 FIELDWIDTH 变量，`awk` 就会忽略 FS 变量，并根据提供的字段宽度来计算字段，下面是个采用字段宽度而非字段分隔符的例子：

```shell
[root@localhost ~]# cat data2
1005.3247596.37
115-2.349194.00
05810.1298100.1
[root@localhost ~]# awk 'BEGIN{FIELDWIDTHS="3 5 2 5"}{print $1,$2,$3,$4}' data2
100 5.324 75 96.37
115 -2.34 91 94.00
058 10.12 98 100.1
```

注意，一旦设定了 FIELDWIDTHS 变量的值，就不能再改变了，因此，这种方法并不适用于变长的字段。

变量 RS 和 ORS 定义了 `awk` 程序如何处理数据流中的字段，默认情况下，awk 将 RS 和 ORS 设为换行符。默认的 RS  值表明，输入数据流中的每行新文本就是一条新纪录。  有时，你会在数据流中碰到占据多行的字段。典型的例子是包含地址和电话号码的数据，其中地址和电话号码各占一行，例如：

```
Riley Mullen
123 Main Street
Chicago, IL 60601
(312)555-1234
```

如果你用默认的 FS 和 RS 变量值来读取这组数据，`awk` 就会把每行作为一条单独的记录来读取，并将记录中的空格当作字段分隔符，这并不是用户想要的。

要解决这个问题，只需把 FS 变量设置成换行符，这就表明数据流中的每行都是一个单独的字段，每行上的所有数据都属于同一个字段；与此同时，把 RS 变量设置成空字符串，然后在数据记录间留一个空白行，`awk` 会把每个空白行当作一个记录分隔符。例如：

```shell
[root@localhost ~]# cat data3
Riley Mullen
123 Main Street
Chicago, IL 60601
(312)555-1234

Frank Williams
456 Oak Street
Indianapolis, IN 46201
(317)555-9876

Haley Snell
4231 Elm Street
Detroit, MI 48201
(313)555-4938
[root@localhost ~]# awk 'BEGIN{FS="\n"; RS=""} {print $1,$4}' data3
Riley Mullen (312)555-1234
Frank Williams (317)555-9876
Haley Snell (313)555-4938
```

::: tip 了解

**表3	<u>环境信息变量</u>**

| 变量名     | 功能                                                     |
| ---------- | -------------------------------------------------------- |
| ARGC       | 命令行参数个数。                                         |
| ARGIND     | 当前文件在 ARGC 中的位置。                               |
| ARGV       | 包含命令行参数的数组。                                   |
| CONVFMT    | 数字的转换格式，默认值为 %.6g。                          |
| ENVIRON    | 当前 shell 环境变量及其值组成的关联数组。                |
| ERRNO      | 当读取或关闭输入文件发生错误时的系统错误号。             |
| FILENAME   | 当前输入文档的名称。                                     |
| FNR        | 当前数据文件中的数据行数。                               |
| IGNORECASE | 设成非 0 值时，忽略 awk 命令中出现的字符串的字符大小写。 |
| NF         | 数据文件中的字段总数。                                   |
| NR         | 已处理的输入记录数。                                     |
| OFMT       | 数字的输出格式，默认值为 %.6g。                          |
| RLENGTH    | 由 match 函数所匹配的子字符串的长度。                    |
| TSTART     | 由 match 函数所匹配的子字符串的起始位置。                |


其中，FNR 和 NR 变量虽然类似，但又略有不同。FNR 变量含有当前数据文件中已处理过的记录数，NR 变量则含有已处理过的记录总数。举个例子：

```shell
[root@localhost ~]# cat data1
data11,data12,data13,data14,data15
data21,data22,data23,data24,data25
data31,data32,data33,data34,data35
[root@localhost ~]# awk '
> BEGIN {FS=","}
> {print $1,"FNR="FNR,"NR="NR}
> END{print "There were",NR,"records processed"}' data1 data1
data11 FNR=1 NR=1
data21 FNR=2 NR=2
data31 FNR=3 NR=3
data11 FNR=1 NR=4
data21 FNR=2 NR=5
data31 FNR=3 NR=6
There were 6 records processed
```

由此可以看出，当只使用一个数据文件作为输入时，FNR 和 NR 的值是相同的；如果使用多个数据文件作为输入，FNR 的值会在处理每个数据文件时被重置，而 NR 的值则会继续计数直到处理完所有的数据文件。

:::

#### 自定义变量

和其他典型的编程语言一样，`awk` 允许用户定义自己的变量在脚本程序中使用。`awk` 自定义变量名可以是任意数目的字母、数字和下划线，但不能以数字开头。更重要的是，`awk` 变量名区分大小写。

举个简单的例子：

```shell
[root@localhost ~]# awk '
> BEGIN{
> testing="This is a test"
> print testing
> testing=45
> print testing
> }'
This is a test
45
```

可以看到，print 语句的输出是 testing 变量的当前值。

也可以用 `awk` 命令行来给程序中的变量赋值，这允许我们在正常的代码之外赋值，即时改变变量的值，比如：

```shell
[root@localhost ~]# cat script1
BEGIN{FS=","} {print $n}
[root@localhost ~]# awk -f script1 n=2 data1
data12
data22
data32
[root@localhost ~]# awk -f script1 n=3 data1
data13
data23
data33
```

需要注意的是，使用命令行参数来定义变量值会有一个问题，即设置了变量后，这个值在代码的 BEGIN 部分不可用，如下所示：

```shell
[root@localhost ~]# cat script2
BEGIN{print "The starting value is",n; FS=","}
{print $n}
[root@localhost ~]# awk -f script2 n=3 data1
The starting value is
data13
data23
data33
```

解决这个问题，可以用 -v 命令行参数，它可以实现在 BEGIN 代码之前设定变量。在命令行上，-v 命令行参数必须放在脚本代码之前，如下所示：

```shell
[root@localhost ~]# awk -v n=3 -f script2 data1
The starting value is 3
data13
data23
data33
```

注意，`awk` 脚本程序中输出函数还可以使用 C 语言中的 printf 函数。

### awk 使用数组

为了在单个变量中存储多个值，许多编程语言都提供数组，`awk` 使用关联数组提供数组功能。

关联数组跟数字数组不同之处在于，它的索引值可以是任意文本字符串。用户不需要用连续的数字来标识数组中的数据元素；相反，关联数组用各种字符串来引用值。每个索引字符串都必须能够唯一地标识出赋给它的数据元素。

如果你熟悉其他编程语言的话，其实关联数组和散列表、字典的用法类似。

#### 关联数组的定义和使用

在 `awk` 脚本程序中，定义一个数组变量可以使用标准复制语句，其基本格式为：

```shell
var[index]=element
```

其中，var 是数组名，index 是关联数组的索引值，element 是数据元素值。例如：

```shell
capital["Illinois"] = "[Spring](http://c.biancheng.net/spring/)field"
capital["Indiana"] = "Indianapolis"
capital["Ohio"] = "Columbus"
```

在引用数组变量时，必须用索引值（index）来提取相应的数据元素值，例如：

```shell
[root@localhost ~]# awk 'BEGIN{
> capital["Illinois"] = "Springfield"
> print capital["Illinois"]
> }'
Springfield
```

数组变量也是变量，也可以使用其进行基本的算术运算，例如：

```shell
[root@localhost ~]# awk 'BEGIN{
> var[1] = 34
> var[2] = 3
> total = var[1] + var[2]
> print total
> }'
37
```

#### 关联数组的遍历

在 `awk` 中遍历关联数组，可以用 for 语句的一种特殊形式：

```shell
for (var in array)
 {
	statements
 }
```

这个 for 语句会在每次循环时将关联数组 array 的下一个索引值赋给变量 var，然后执行一遍 statements。

**再次强调，整个遍历过程中，传给 var 的都是每个数组元素的索引值（也就是 index），不是数组元素的值。**

举个例子：

```shell
[root@localhost ~]# awk 'BEGIN{
> var["a"] = 1
> var["g"] = 2
> var["m"] = 3
> var["u"] = 4
> for (test in var)
> {
>  print "Index:",test," - Value:",var[test]
> }
> }'
Index: u - Value: 4
Index: m - Value: 3
Index: a - Value: 1
Index: g - Value: 2
```

注意，索引值不会按任何特定顺序返回，但它们都能够指向对应的数据元素值。

#### 删除数组变量

`awk` 脚本程序还支持从关联数组中删除某个数组索引，使用 delete 命令就可以，此命令会从数组中删除指定的索引值及相关的数据元素的值。

delete 命令的基本格式如下：

```shell
delete array[index]
```

举个例子：

```shell
[root@localhost ~]# awk 'BEGIN{
> var["a"] = 1
> var["g"] = 2
> for (test in var)
> {
>  print "Index:",test," - Value:",var[test]
> }
> delete var["g"]
> print "---"
> for (test in var)
> {
>  print "Index:",test," - Value:",var[test]
> }
> }'
Index: a - Value: 1
Index: g - Value: 2
---
Index: a - Value: 1
```

需要注意的是，一旦从关联数组中删除了索引值，就没法再用它来提取元素值。

### awk 使用分支结构

`awk` 支持标准的 if-then-else 格式的 if 语句，其基本格式为：

```shell
if (condition)
	commands1；
 else
	commands2；
```

也可以将它放在一行上，像这样：

```shell
if (condition) statement1;else statement2
```

举个简单的例子：

```shell
[root@localhost ~]# cat data4
10
5
13
50
34
[root@localhost ~]# awk '{if ($1 > 20) print $1 * 2; else print $1 / 2}' data4
5
2.5
6.5
100
68
```

### awk 使用循环结构

`awk` 脚本程序中，可以使用 while、do-while、for 这 3 种循环结构，它们各自的基本格式分别如表 3 所示。

#### while 循环

基本格式为：

```shell
while (condition) { 
	commands;
}
```

例如：

```shell
[root@localhost ~]# cat data5
130 120 135
160 113 140
145 170 215
[root@localhost ~]# awk '{
> total = 0
> i = 1
> while (i < 4)
> {
>    total += $i
>    i++
> }
> avg = total / 3
> print "Average:",avg
> }' data5
Average: 128.333
Average: 137.667
Average: 176.667
```

#### do-while 循环

基本格式为：

```shell
do {
	commmands;
}while (条件)
```

例如：

```shell
[root@localhost ~]# awk '{
> total = 0
> i = 1
> do
> {
>    total += $i
>    i++
> } while (total < 150)
> print total }' data5
250
160
315
```

#### for 循环

基本格式为：

```shell
for(i;condition;count) {
	commands;
}
```

例如：

```shell
[root@localhost ~]# awk '{
> total = 0
> for (i = 1; i < 4; i++)
> {
>    total += $i
> }
> avg = total / 3
> print "Average:",avg
> }' data5
Average: 128.333
Average: 137.667
Average: 176.667
```

可以看出，`awk` 支持使用的循环结构的用法和 C 语言完全一样，除此之外，`awk` 还支持使用 break（跳出循环）、continue（终止当前循环）关键字，其用法和 C 语言中也完全相同。

### awk 循环控制

#### break：跳出循环

跳出循环，继续执行循环外的后续语句

例：累加每行数值，和大于150停止累加
```shell
[root@linux ~ ]# awk '{
> sum=0
> i=1
> while (i<4){
>	sum+=$i
>	if (sum>150){
>		break
>	}
>	i++
> }
> print sum
> }' data5
250
160
315
```

#### continue：终止本次循环

终止本次循环

例：累加每行数值，和大于 400 的打印出来，小于等于 400 的则退出该次循环。

```shell
[root@linux ~ ]# awk '{
> sum=0
> i=1
> while (i<4){
	sum+=$i
	i++
	if (sum>400)
		print sum
	else
		continue
	}
}' data5
413
530
```


### awk 使用函数

#### 内建函数

和内建变量类似，`awk` 也提供了不少内建函数，可进行一些常见的数学、字符串以及时间函数运算，如表4 所示。

**表4	<u>常见的内建函数</u>**

<table>
<tr>
	<td>函数分类</td>
	<td>函数原型</td>
	<td>函数功能 </td>
</tr>
<tr>
	<td rowspan=9>数学函数</td>
	<td>atan2(x,y)</td>
	<td>x/y 的反正切，x 和 y 以弧度为单位。</td>
</tr>
<tr>
	<td>cos(x)</td>
	<td>x 的余弦，x 以弧度为单位。</td>
</tr>
<tr>
	<td>exp(x)</td>
	<td>x 的指数函数。</td>
</tr>
<tr>
	<td>int(x)</td>
	<td>x 的整数部分，取靠近零一侧的值。</td>
</tr>
<tr>
	<td>log(x)</td>
	<td>x 的自然对数。</td>
</tr>
<tr>
	<td>srand(x)</td>
	<td>为计算随机数指定一个种子值。</td>
</tr>
<tr>
	<td>rand()</td>
	<td>比 0 大比 1 小的随机浮点值。</td>
</tr>
<tr>
	<td>sin(x)</td>
	<td>x 的正弦，x 以弧度为单位。</td>
</tr>
<tr>
	<td>sqrt(x)</td>
	<td>x 的平方根。</td>
</tr>
<tr>
	<td rowspan=6>位运算函数</td>
	<td>and(v1,v2)</td>
	<td>执行值 v1 和 v2 的按位与运算。</td>
</tr>
<tr>
	<td>compl(val)</td>
	<td>执行 val 的补运算。</td>
</tr>
<tr>
	<td>lshift(val,count)</td>
	<td>将值 val 左移 count 位。</td>
</tr>
<tr>
	<td>or(v1,v2) </td>
	<td>执行值 v1 和 v2 的按位或运算。</td>
</tr>
<tr>
	<td>rshift(val,count)</td>
	<td>将值 val 右移 count 位。</td>
</tr>
<tr>
	<td>xor(v1,v2)</td>
	<td>执行值 v1 和 v2 的按位异或运算。</td>
</tr>
<tr>
	<td rowspan=13>字符串函数</td>
	<td> asort(s [,d])</td>
	<td>将数组 s 按数据元素值排序。索引值会被替换成表示新的排序顺序的连续数字。<br>
另外，如果指定了 d，则排序后的数组会存储在数组 d 中。</td>
</tr>
<tr>
	<td>asorti(s [,d])</td>
	<td>将数组 s 按索引值排序。生成的数组会将索引值作为数据元素值，用连续数字索引来表明排序顺序。<br>
        另外如果指定了 d，排序后的数组会存储在数组 d 中。</td>
</tr>
<tr>
	<td>gensub(r,s,h [,t]</td>
	<td>查找变量 $0 或目标字符串 t（如果提供了的话）来匹配正则表达式 r。<br>如果 h 是一个以 g 或 G 开头的字符串，就用 s 替换掉匹配的文本。<br>如果 h 是一个数字，它表示要替换掉第 h 处 r 匹配的地方。</td>
</tr>
<tr>
	<td>gsub(r,s [,t])</td>
	<td>查找变量 $0 或目标字符串 t（如果提供了的话）来匹配正则表达式 r。<br>如果找到了，就全部替换成字符串 s。</td>
</tr>
<tr>
	<td>index(s,t)</td>
	<td>返回字符串 t 在字符串 s 中的索引值，如果没找到的话返回 0。</td>
</tr>
<tr>
	<td>length([s])</td>
	<td>返回字符串 s 的长度；如果没有指定的话，返回 $0 的长度。</td>
</tr>
<tr>
	<td>match(s,r [,a])</td>
	<td>返回字符串 s 中正则表达式 r 出现位置的索引。<br>如果指定了数组 a，它会存储 s 中匹配正则表达式的那部分。</td>
</tr>
<tr>
	<td>split(s,a [,r])</td>
	<td>将 s 用 FS 字符或正则表达式 r（如果指定了的话）分开放到数组 a 中，并返回字段的总数。</td>
</tr>
<tr>
	<td>sprintf(format,variables)</td>
	<td>用提供的 format 和 variables 返回一个类似于 printf 输出的字符串。</td>
</tr>
<tr>
	<td>sub(r,s [,t])</td>
	<td>在变量 $0 或目标字符串 t 中查找正则表达式 r 的匹配。如果找到了，就用字符串 s 替换掉第一处匹配。</td>
</tr>
<tr>
	<td>substr(s,i [,n])</td>
	<td>返回 s 中从索引值 i 开始的 n 个字符组成的子字符串。如果未提供 n，则返回 s 剩下的部分。</td>
</tr>
<tr>
	<td>tolower(s)</td>
	<td>将 s 中的所有字符转换成小写。</td>
</tr>
<tr>
	<td>toupper(s)</td>
	<td>将 s 中的所有字符转换成大写。</td>
</tr>
<tr>
	<td rowspan=3>时间函数</td>
	<td>mktime(datespec)</td>
	<td>将一个按 YYYY MM DD HH MM SS [DST] 格式指定的日期转换成时间戳值。</td>
</tr>
<tr>
	<td>strftime(format [,timestamp])</td>
	<td>将当前时间的时间戳或 timestamp（如果提供了的话）转化格式化日期（采用 shell 函数 date() 的格式）。</td>
</tr>
<tr>
	<td>systime()</td>
	<td>返回当前时间的时间戳。 </td>
</tr>
</table>

时间戳指的是格林威治时间，即从 1970年1月1日起到现在的总秒数。

#### 自定义函数

除了`awk` 中的内建函数，还可以在 `awk` 脚本程序中自定义函数，创建自定义函数的基本格式为：

```shell
function 函数名(参数1，参数2，...)
{
	运行代码；
}
```

注意，自定义函数的函数名必须能够唯一标识此函数，换句话说，在同一个 `awk` 脚本程序中，多个函数的函数名不能相同。同时，函数的参数可以有多个（0 个、1 个或多个）。

例如：

```shell
function printthird()
{
	print $3
}
```

此函数会打印记录中的第三个数据字段。

函数还能用 return 语句返回值，例如：

```shell
function myrand(limit) {
	return int(limit * rand())
}
```

需要注意的是，在定义函数时，它必须出现在所有代码块之前（包括 BEGIN 和 END代码块）。

#### 创建函数库

`awk` 提供了一种途径来将多个函数放到一个库文件中，这样用户就能在所有的 `awk` 脚本程序中使用了。为了方便大家理解，下面给大家举个实例。

首先，我们需要创建一个存储所有 `awk` 函数的文件：

```shell
[root@localhost ~]# cat funclib
function myprint() {
	printf "%-16s - %s\n", $1, $4
}
function myrand(limit)
{
	return int(limit * rand())
}
function printthird()
{
	print $3
}
```

要想让 `awk` 成功读取 funclib 函数库文件，就需要使用 -f 选项，但此选项无法和 `awk` 脚本程序同时放到命令行中一起使用。因此，要使用库函数文件，只能再创建一个脚本程序文件，例如：

```shell
[root@localhost ~]# cat script4
BEGIN{ FS="\n"; RS=""}
{
	myprint()
}
[root@localhost ~]# awk -f funclib -f script4 data2
Riley Mullen   - (312)555-1234
Frank Williams  - (317)555-9876
Haley Snell   - (313)555-4938
```
