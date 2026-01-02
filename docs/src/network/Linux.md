# Linux操作系统
*(基于《鸟哥的Linux私房菜》整理)*
## 一、Linux系统基础
### 1. 登录与退出
```bash
# 登录系统
username: your_username
password: your_password

# 退出系统
logout
exit
Ctrl+D  # 也可以退出

# 切换用户
su - username  # 切换到指定用户，-表示加载环境变量
sudo -i        # 切换到root用户(需要sudo权限)
sudo -u username command  # 以指定用户身份执行命令
```

### 2. 基本命令详解

```bash
# pwd: 显示当前工作目录
pwd
# 示例输出: /home/user

# ls: 列出目录内容
ls                  # 列出当前目录非隐藏文件
ls -a               # 显示所有文件(包括隐藏文件，以.开头)
ls -l               # 详细列表模式
ls -lh              # 人类可读的文件大小
ls -lt              # 按修改时间排序(最新在前)
ls -ltr             # 按修改时间反向排序(最旧在前)
ls -R               # 递归列出子目录
ls /path/to/dir     # 列出指定目录

# cd: 改变目录
cd /path/to/dir     # 绝对路径切换
cd dir_name         # 相对路径切换
cd ..               # 返回上一级目录
cd ../..            # 返回上两级目录
cd ~                # 返回用户主目录
cd                  # 返回用户主目录
cd -                # 在当前目录和上一个工作目录之间切换

# mkdir: 创建目录
mkdir dirname       # 创建单个目录
mkdir -p dir1/dir2/dir3  # 递归创建目录(包含父目录)
mkdir -m 755 dirname     # 创建目录并设置权限

# rmdir: 删除空目录
rmdir dirname       # 仅能删除空目录
rmdir -p dir1/dir2/dir3  # 递归删除空目录

# touch: 创建空文件或修改文件时间戳
touch filename      # 创建空文件
touch file1 file2   # 创建多个文件
touch -t 202301010000 file  # 设置特定时间戳(YYYYMMDDHHMM)
touch -a file       # 仅修改访问时间
touch -m file       # 仅修改修改时间
touch -r ref_file target_file  # 使用参考文件的时间戳

# echo: 显示文本或变量值
echo "Hello World"  # 显示文本
echo $HOME          # 显示环境变量
echo -n "Text"      # 不换行输出
echo -e "Line1\nLine2"  # 启用转义字符
echo "Text" > file  # 将输出重定向到文件(覆盖)
echo "Text" >> file # 将输出追加到文件

# date: 显示/设置日期和时间
date                # 显示当前日期和时间
date +"%Y-%m-%d %H:%M:%S"  # 自定义格式
date -s "2023-01-01 12:00:00"  # 设置系统时间(需要root权限)

# cal: 显示日历
cal                 # 显示当前月日历
cal 2023            # 显示2023年全年日历
cal 1 2023          # 显示2023年1月日历

# clear: 清屏
clear               # 清除终端屏幕
Ctrl+L              # 也可以清屏(快捷键)

# history: 命令历史
history             # 显示命令历史
history 10          # 显示最近10条命令
!5                  # 执行历史记录中的第5条命令
!!                  # 重复上一条命令
!ls                 # 重复最近以ls开头的命令
history -c          # 清空历史记录

# man: 手册页
man ls              # 查看ls命令手册
man -k keyword      # 搜索包含关键字的手册页
man 1 command       # 查看用户命令(1类)
man 5 passwd        # 查看配置文件格式(5类)
# 在man页面中:
#  q      退出
#  /text  搜索text
#  n      下一个搜索结果
#  N      上一个搜索结果
#  Space  下一页
#  b      上一页
```

## 二、文件系统与目录结构

### 1. Linux目录结构详解 (FHS标准)

```
/ (根目录)
├── bin        # 基础命令二进制文件，所有用户可用(软链接到/usr/bin)
├── boot       # 启动加载器文件、内核文件
│   ├── vmlinuz       # Linux内核文件
│   ├── initramfs     # 初始RAM磁盘
│   └── grub2         # GRUB2引导加载器配置
├── dev        # 设备文件
│   ├── sda           # 第一块SATA/SCSI硬盘
│   ├── sda1          # 第一块硬盘的第一个分区
│   ├── tty           # 终端设备
│   └── null          # 丢弃所有写入的数据，读取时返回EOF
├── etc        # 系统配置文件
│   ├── passwd        # 用户账户信息
│   ├── shadow        # 用户密码信息
│   ├── group         # 用户组信息
│   ├── hosts         # 主机名解析
│   ├── fstab         # 文件系统挂载表
│   ├── sudoers       # sudo权限配置
│   └── sysconfig/    # 系统配置目录(RHEL/CentOS)
├── home       # 普通用户主目录
│   ├── user1         # user1的主目录
│   └── user2         # user2的主目录
├── lib        # 32位共享库文件(软链接到/usr/lib)
├── lib64      # 64位共享库文件(软链接到/usr/lib64)
├── media      # 可移动媒体挂载点(如USB、CD-ROM)
├── mnt        # 临时挂载文件系统
├── opt        # 可选应用程序包
├── proc       # 虚拟文件系统，包含进程和内核信息
│   ├── cpuinfo       # CPU信息
│   ├── meminfo       # 内存信息
│   ├── mounts        # 挂载的文件系统
│   └── [pid]         # 进程信息目录
├── root       # root用户的主目录
├── run        # 运行时变量数据
├── sbin       # 系统管理命令(软链接到/usr/sbin)
├── srv        # 服务数据
├── sys        # 虚拟文件系统，设备和驱动信息
├── tmp        # 临时文件(重启后通常清除)
├── usr        # 用户程序和数据
│   ├── bin           # 用户命令
│   ├── sbin          # 系统管理命令
│   ├── lib           # 程序库
│   ├── include       # C头文件
│   ├── share         # 体系结构无关的数据
│   ├── local         # 本地安装的软件(/usr/local/bin等)
│   └── src           # 源代码
└── var        # 可变数据文件
    ├── log           # 系统日志
    ├── cache         # 应用程序缓存
    ├── lib           # 状态信息
    ├── spool         # 任务队列
    └── www           # Web服务器文件
```

### 2. 详细文件操作命令

```bash
# cp: 复制文件和目录
cp file1 file2                # 复制文件
cp file1 file2 dir/           # 复制多个文件到目录
cp -r dir1 dir2               # 递归复制目录
cp -a dir1 dir2               # 归档模式(保留权限、所有权等)
cp -i file1 file2             # 交互模式(覆盖前确认)
cp -v file1 file2             # 详细模式(显示操作过程)
cp -u file1 file2             # 仅当file1比file2新或file2不存在时复制

# mv: 移动/重命名文件
mv file1 file2                # 重命名文件
mv file dir/                  # 移动文件到目录
mv dir1 dir2                  # 重命名目录
mv -i file1 file2             # 交互模式(覆盖前确认)
mv -v file1 file2             # 详细模式

# rm: 删除文件
rm file                       # 删除文件
rm file1 file2                # 删除多个文件
rm *.txt                      # 删除所有.txt文件
rm -i file                    # 交互模式(删除前确认)
rm -f file                    # 强制删除(不提示)
rm -v file                    # 详细模式

# rm -r: 递归删除目录
rm -r dir                     # 递归删除目录
rm -rf dir                    # 强制递归删除(危险命令!)
rm -ri dir                    # 交互式递归删除

# file: 确定文件类型
file filename                 # 显示文件类型
file -b filename              # 简洁输出
file /dev/sda                 # 显示设备文件类型

# du: 估算文件空间使用
du                            # 显示当前目录大小
du -h                         # 人类可读格式
du -sh /path/to/dir           # 显示目录总大小
du -h --max-depth=1 /path     # 限制目录深度
du -h --exclude="*.tmp" dir   # 排除特定文件

# df: 报告文件系统磁盘空间使用
df                            # 显示所有文件系统
df -h                         # 人类可读格式
df -T                         # 显示文件系统类型
df -i                         # 显示inode使用情况
df /path                      # 显示特定文件系统

# ln: 创建链接
ln file link                  # 创建硬链接
ln -s file link               # 创建符号链接(软链接)
ln -sf file link              # 强制创建符号链接(覆盖现有)
ln -sv file dir/              # 详细模式创建符号链接

# 查看链接
ls -l link                    # 显示链接目标
ls -li                        # 显示inode号(硬链接有相同inode)
readlink link                 # 仅显示链接目标
```

## 三、文件内容查看与处理

### 1. 内容查看命令

```bash
# cat: 连接并显示文件内容
cat file                      # 显示整个文件
cat file1 file2               # 连接多个文件
cat > newfile                 # 从标准输入创建文件(Ctrl+D结束)
cat file1 > file2             # 覆盖写入
cat file1 >> file2            # 追加写入

# tac: 反向显示文件
tac file                      # 从最后一行开始显示

# more: 分页查看文件(仅向前)
more file                     # 分页查看
# 在more中:
#  Space  下一页
#  Enter  下一行
#  b      上一页(如果可能)
#  q      退出

# less: 增强版分页查看(可向前向后)
less file                     # 分页查看
# 在less中:
#  Space  下一页
#  b      上一页
#  g      跳到文件开头
#  G      跳到文件末尾
#  /text  向前搜索text
#  ?text  向后搜索text
#  n      下一个搜索结果
#  N      上一个搜索结果
#  q      退出

# head: 显示文件开头
head file                     # 默认显示前10行
head -n 5 file                # 显示前5行
head -c 100 file              # 显示前100字节
head -n -5 file               # 显示除最后5行外的所有内容

# tail: 显示文件末尾
tail file                     # 默认显示后10行
tail -n 5 file                # 显示后5行
tail -f logfile               # 持续监控文件变化(用于日志)
tail -F logfile               # 持续监控(即使文件被重命名/重建)
tail -n +5 file               # 从第5行开始显示到末尾

# nl: 带行号显示文件
nl file                       # 显示带行号的文件
nl -ba file                   # 为所有行编号(包括空行)
nl -w3 -s": " file            # 自定义行号格式(3位宽，后跟": ")

# od: 显示二进制文件
od -c file                    # 以ASCII字符显示
od -x file                    # 以十六进制显示
od -t x1 file                 # 以单字节十六进制显示
od -A x -t x1z file           # 带地址和可读格式
```

### 2. 文件搜索与定位

```bash
# which: 在PATH中搜索可执行文件
which command                 # 查找命令路径
which -a command              # 显示所有匹配项

# whereis: 搜索二进制、源码和man手册
whereis command               # 搜索命令
whereis -b command            # 仅搜索二进制
whereis -m command            # 仅搜索man手册
whereis -s command            # 仅搜索源代码

# locate: 通过数据库快速查找文件
locate filename               # 搜索文件
locate -i filename            # 忽略大小写
locate "*.conf"               # 使用通配符
updatedb                      # 更新数据库(需要root权限)

# find: 强大的实时文件搜索
find /path                    # 列出目录下所有文件
find /path -name "filename"   # 按名称查找(区分大小写)
find /path -iname "filename"  # 按名称查找(不区分大小写)
find /path -type f            # 仅查找文件
find /path -type d            # 仅查找目录
find /path -type l            # 仅查找符号链接
find /path -mtime -7          # 7天内修改的文件
find /path -mtime +7          # 7天前修改的文件
find /path -atime -7          # 7天内访问的文件
find /path -ctime -7          # 7天内状态改变的文件
find /path -size +10M         # 大于10MB的文件
find /path -size -100k        # 小于100KB的文件
find /path -user username     # 属于特定用户的文件
find /path -group groupname   # 属于特定组的文件
find /path -perm 755          # 权限为755的文件
find /path -perm -u=x         # 用户有执行权限的文件
find /path -empty             # 空文件或目录
find /path -exec command {} \;  # 对每个结果执行命令
find /path -exec rm {} \;     # 删除所有匹配文件(危险!)
find /path -ok rm {} \;       # 交互式删除
```

## 四、文件权限与特殊属性

### 1. 详细权限解析

```
文件类型标识符:
-  普通文件
d  目录
l  符号链接
b  块设备文件
c  字符设备文件
s  套接字文件
p  管道文件

权限位详解(每3位一组):
用户(user/owner)   组(group)   其他人(others)
rwx               rwx         rwx
│││               │││         │││
││└─ 执行(x)      ││└─ 执行(x) │└─ 执行(x)
│└── 写入(w)      │└── 写入(w) └── 写入(w)
└─── 读取(r)      └─── 读取(r)   └─ 读取(r)

特殊权限位:
s  SUID/SGID (在用户/组的x位置)
t  Sticky bit (在其他人的x位置)
```

### 2. 权限管理命令详解

```bash
# chmod: 修改文件权限
# 符号模式
chmod u+x file                # 用户增加执行权限
chmod g-w file                # 组移除写权限
chmod o=r file                # 其他人设置为只读
chmod a+x file                # 所有人都增加执行权限
chmod ug+rw,o-r file          # 用户和组增加读写，移除其他人读权限
chmod +x file                 # 所有类别增加执行权限
chmod -R u+x dir              # 递归修改目录权限

# 数字模式
chmod 755 file                # rwxr-xr-x
chmod 644 file                # rw-r--r--
chmod 777 file                # rwxrwxrwx (谨慎使用!)
chmod 1777 dir                # rwxrwxrwt (sticky bit)
chmod 4755 file               # rwsr-xr-x (SUID)
chmod 2755 dir                # rwxr-sr-x (SGID)
chmod -R 755 dir              # 递归设置目录权限

# chown: 修改文件所有者
chown user file               # 修改所有者
chown user:group file         # 修改所有者和组
chown :group file             # 仅修改组
chown -R user:group dir       # 递归修改

# chgrp: 修改文件组
chgrp group file              # 修改组
chgrp -R group dir            # 递归修改

# umask: 设置默认权限掩码
umask                         # 显示当前掩码
umask 022                     # 设置掩码(文件:644, 目录:755)
umask 002                     # 设置掩码(文件:664, 目录:775)
# 计算方法:
# 文件默认权限: 666 - umask
# 目录默认权限: 777 - umask

# 特殊权限实例
# SUID: 允许用户以文件所有者权限执行
chmod u+s /usr/bin/passwd     # passwd命令需要修改/etc/shadow
# SGID: 目录中新建文件继承目录组
chmod g+s /shared/dir         # 团队共享目录
# Sticky bit: 仅文件所有者可删除目录中的文件
chmod +t /tmp                 # 保护/tmp中的文件
```

### 3. 文件属性与扩展属性

```bash
# lsattr: 显示文件属性
lsattr file                   # 显示文件属性
lsattr -d dir                 # 显示目录属性
lsattr -R dir                 # 递归显示

# chattr: 修改文件属性
chattr +i file                # 设置不可变属性(不能修改/删除/重命名)
chattr -i file                # 移除不可变属性
chattr +a file                # 设置追加属性(只能追加内容，不能修改已有)
chattr +c file                # 设置压缩属性(自动压缩/解压)
chattr +s file                # 设置安全删除(文件删除时填充零)
chattr +u file                # 设置不可删除(保存数据内容，防止意外删除)

# getfacl: 获取访问控制列表
getfacl file                  # 显示ACL
getfacl -R dir                # 递归显示

# setfacl: 设置访问控制列表
setfacl -m u:user:rwx file    # 添加用户ACL
setfacl -m g:group:rx file    # 添加组ACL
setfacl -x u:user file        # 删除用户ACL
setfacl -b file               # 删除所有ACL
setfacl -R -m u:user:r-x dir  # 递归设置ACL
```

## 五、压缩与归档

### 1. 压缩与解压缩命令

```bash
# gzip: 压缩/解压文件(.gz)
gzip file                     # 压缩文件(原文件被删除)
gzip -k file                  # 保留原文件
gzip -9 file                  # 最高压缩比
gzip -d file.gz               # 解压文件
gunzip file.gz                # 等同于gzip -d

# bzip2: 压缩/解压文件(.bz2)
bzip2 file                    # 压缩文件
bzip2 -k file                 # 保留原文件
bzip2 -9 file                 # 最高压缩比
bzip2 -d file.bz2             # 解压文件
bunzip2 file.bz2              # 等同于bzip2 -d

# xz: 压缩/解压文件(.xz)
xz file                       # 压缩文件
xz -k file                    # 保留原文件
xz -9 file                    # 最高压缩比
xz -d file.xz                 # 解压文件
unxz file.xz                  # 等同于xz -d

# zip/unzip: ZIP格式压缩
zip archive.zip file1 file2   # 创建ZIP归档
zip -r archive.zip dir/       # 递归压缩目录
zip -e archive.zip file       # 加密压缩
unzip archive.zip             # 解压ZIP文件
unzip -l archive.zip          # 列出ZIP内容
unzip -d dir archive.zip      # 解压到指定目录
```

### 2. 归档命令

```bash
# tar: 归档文件
# 创建归档
tar -cvf archive.tar file1 file2  # 创建归档
tar -czvf archive.tar.gz dir/     # 创建gzip压缩归档
tar -cjvf archive.tar.bz2 dir/    # 创建bzip2压缩归档
tar -cJvf archive.tar.xz dir/     # 创建xz压缩归档

# 列出归档内容
tar -tvf archive.tar             # 详细列出内容
tar -tf archive.tar              # 简洁列出内容

# 提取归档
tar -xvf archive.tar             # 提取归档
tar -xzvf archive.tar.gz         # 提取gzip压缩归档
tar -xjvf archive.tar.bz2        # 提取bzip2压缩归档
tar -xJvf archive.tar.xz         # 提取xz压缩归档
tar -xvf archive.tar -C /path    # 提取到指定目录

# 查看特定文件
tar -xvf archive.tar file1       # 仅提取特定文件
tar -tvf archive.tar | grep "pattern"  # 搜索归档中的文件

# 其他选项
tar -rvf archive.tar file3       # 向现有归档添加文件
tar --delete -f archive.tar file # 从归档中删除文件
```

### 3. 其他压缩工具

```bash
# cpio: 归档工具
# 从文件列表创建归档
find . -print | cpio -ov > archive.cpio
# 提取归档
cpio -idv < archive.cpio
# 列出内容
cpio -it < archive.cpio

# dd: 转换和复制文件
dd if=/dev/sda of=disk.img        # 创建磁盘镜像
dd if=disk.img of=/dev/sdb        # 恢复磁盘镜像
dd if=/dev/zero of=file bs=1M count=100  # 创建100MB空文件
dd if=file1 of=file2 bs=4K        # 高效复制大文件
dd if=/dev/sda | gzip > backup.img.gz  # 创建压缩镜像

# split: 分割大文件
split -b 100M largefile prefix_  # 按大小分割(100MB/部分)
split -l 1000 largefile prefix_  # 按行数分割(1000行/部分)
# 重组文件
cat prefix_* > largefile
```

## 六、文本编辑器

### 1. vi/vim 编辑器

```bash
# 启动vim
vim filename          # 编辑文件(不存在则创建)
vim +n filename       # 从第n行开始编辑
vim +/pattern filename # 从匹配pattern处开始

# 模式
# 命令模式(默认): 执行命令
# 插入模式: i,a,o等进入, 输入文本
# 可视模式: v,V,Ctrl+v, 选择文本
# 命令行模式: :, /, ?, 执行命令/搜索

# 基本命令(命令模式)
i       # 在光标前插入
a       # 在光标后插入
o       # 在当前行下方插入新行
I       # 在行首插入
A       # 在行尾插入
O       # 在当前行上方插入新行
Esc     # 退出插入模式, 返回命令模式

# 移动光标
h/j/k/l # 左/下/上/右
0       # 移动到行首
$       # 移动到行尾
^       # 移动到第一个非空白字符
w       # 移动到下一个单词开头
b       # 移动到上一个单词开头
e       # 移动到当前/下一个单词末尾
gg      # 移动到文件首行
G       # 移动到文件末行
:n      # 移动到第n行
Ctrl+f  # 向前翻页
Ctrl+b  # 向后翻页
Ctrl+d  # 向下翻半页
Ctrl+u  # 向上翻半页
H       # 移动到屏幕顶部
M       # 移动到屏幕中间
L       # 移动到屏幕底部

# 编辑命令
x       # 删除当前字符
dw      # 删除当前单词
dd      # 删除当前行
D       # 删除到行尾
d$      # 删除到行尾(同D)
d0      # 删除到行首
dG      # 删除到文件末尾
u       # 撤销
Ctrl+r  # 重做
.       # 重复上一个命令
yy      # 复制当前行
yw      # 复制当前单词
p       # 粘贴(在光标后)
P       # 粘贴(在光标前)
r       # 替换单个字符
R       # 进入替换模式
~       # 切换大小写
J       # 合并下一行
:g/pattern/d  # 删除所有匹配pattern的行

# 搜索与替换
/pattern  # 向前搜索
?pattern  # 向后搜索
n         # 下一个匹配
N         # 上一个匹配
:s/old/new/   # 替换当前行第一个匹配
:s/old/new/g  # 替换当前行所有匹配
:%s/old/new/g # 全文件替换
:%s/old/new/gc # 全文件替换(确认每个)

# 保存与退出
:w        # 保存
:q        # 退出(无修改)
:q!       # 强制退出(丢弃修改)
:wq       # 保存并退出
:x        # 保存并退出(同:wq)
ZZ        # 保存并退出(命令模式)
:e!       # 放弃修改, 重新加载文件
:w newfile # 保存到新文件
:r file   # 读入文件内容到当前光标位置
:r !command # 读入命令输出到当前光标位置

# 可视模式
v       # 字符可视模式
V       # 行可视模式
Ctrl+v  # 块可视模式
y       # 复制选中内容
d       # 删除选中内容
>       # 增加缩进
<       # 减少缩进
:       # 对选中行执行命令

# 设置
:set number         # 显示行号
:set nonumber       # 隐藏行号
:set autoindent     # 自动缩进
:set noautoindent   # 取消自动缩进
:set tabstop=4      # 设置tab宽度为4
:set ruler          # 显示光标位置
:set hlsearch       # 高亮搜索结果
:set nohlsearch     # 取消高亮
:set syntax=on      # 启用语法高亮
:syntax off         # 禁用语法高亮
```

### 2. nano 编辑器 (更简单)

```bash
# 启动nano
nano filename

# 常用快捷键(屏幕底部显示)
Ctrl+G    # 帮助
Ctrl+O    # 保存
Ctrl+R    # 读入文件
Ctrl+Y    # 向上翻页
Ctrl+V    # 向下翻页
Ctrl+K    # 剪切当前行
Ctrl+U    # 粘贴
Ctrl+X    # 退出
Ctrl+W    # 搜索
Ctrl+\    # 替换
Ctrl+C    # 显示光标位置
Alt+6     # 复制当前行
Ctrl+A    # 移动到行首
Ctrl+E    # 移动到行尾
Ctrl+_    # 跳转到指定行
```

## 七、进程管理

### 1. 进程查看命令

```bash
# ps: 进程状态快照
ps                            # 当前终端进程
ps aux                        # BSD格式, 所有进程
ps -ef                        # System V格式, 所有进程
ps -u username                # 特定用户进程
ps -p PID1,PID2               # 特定进程ID
ps --forest -u username       # 以树状显示用户进程
ps -o pid,uname,cmd           # 自定义输出列

# top: 实时进程监控
top                           # 交互式监控
# 在top中:
#  P      按CPU使用排序
#  M      按内存使用排序
#  T      按时间排序
#  k      杀死进程(输入PID和信号)
#  r      调整进程优先级
#  u      显示特定用户进程
#  q      退出
#  h      帮助
top -d 2                      # 设置刷新间隔(2秒)
top -p PID1,PID2              # 监控特定进程
top -u username               # 显示特定用户进程

# htop: 增强版top (需安装)
htop                          # 交互式彩色进程查看器
# 在htop中:
#  F6     选择排序方式
#  F4     过滤进程
#  F5     树状视图
#  F9     杀死进程
#  F2     设置
#  Space  标记/取消标记进程
#  U      标记/取消标记特定用户进程
#  H      显示/隐藏用户线程
#  Ctrl+Z 将标记进程置于后台
#  s      跟踪进程系统调用

# pstree: 进程树
pstree                        # 显示进程树
pstree -p                     # 显示PID
pstree -u                     # 显示用户
pstree -a                     # 显示命令行参数
pstree username               # 特定用户进程树

# pgrep/pkill: 按名称查找/杀死进程
pgrep process_name            # 按名称查找进程ID
pgrep -u username             # 查找特定用户进程
pgrep -l process_name         # 显示进程名称和ID
pkill process_name            # 按名称杀死进程
pkill -9 process_name         # 强制杀死
pkill -u username             # 杀死特定用户所有进程
```

### 2. 进程控制命令

```bash
# kill: 发送信号
kill PID                      # 发送TERM信号(15)
kill -9 PID                   # 发送KILL信号(9)
kill -HUP PID                 # 发送HUP信号(1, 通常用于重新加载配置)
kill -TERM PID                # 发送TERM信号(15, 默认)
kill -INT PID                 # 发送INT信号(2, 同Ctrl+C)
kill -STOP PID                # 暂停进程
kill -CONT PID                # 继续暂停的进程
kill -l                       # 列出所有信号

# nice/renice: 调整进程优先级
nice -n 10 command            # 以优先级10启动命令(范围-20到19)
nice command                  # 默认优先级10
renice 5 -p PID               # 修改运行中进程的优先级
renice -n -5 -u username      # 修改用户所有进程优先级
renice 10 -g groupid          # 修改组所有进程优先级

# nohup: 忽略挂断信号
nohup command &               # 在后台运行, 忽略挂断信号
nohup command > output.log 2>&1 &  # 重定向输出

# time: 测量命令执行时间
time command                  # 显示真实/用户/系统时间

# watch: 重复执行命令
watch command                 # 每2秒执行一次
watch -n 5 command            # 每5秒执行一次
watch -d command              # 高亮显示变化
watch 'ps aux | grep httpd'   # 监控特定进程
```

### 3. 作业控制

```bash
# 后台/前台控制
command &                     # 在后台运行命令
jobs                          # 列出后台作业
jobs -l                       # 列出作业详细信息
fg %job_id                    # 将作业转到前台
bg %job_id                    # 继续后台运行暂停的作业
Ctrl+z                        # 暂停当前作业
Ctrl+c                        # 终止当前作业
kill %job_id                  # 杀死作业
kill %1                       # 杀死第一个作业
kill %%                       # 杀死当前作业

# disown: 从shell作业表中移除
disown %job_id                # 移除作业(防止shell退出时终止)
disown -a                     # 移除所有作业
disown -h %job_id             # 标记作业不接收SIGHUP(不移除)
```

## 八、Shell环境与变量

### 1. 环境变量

```bash
# 查看环境变量
env                           # 显示所有环境变量
printenv                      # 同env
set                           # 显示所有shell变量(含环境变量)
echo $PATH                    # 显示特定变量
export                        # 显示导出的变量

# 常见环境变量
PATH        # 命令搜索路径
HOME        # 用户主目录
USER        # 当前用户名
SHELL       # 当前shell
TERM        # 终端类型
PWD         # 当前工作目录
OLDPWD      # 上一个工作目录
PS1         # 主提示符
PS2         # 次提示符
HISTSIZE    # 历史命令数量
HISTFILE    # 历史文件位置
HISTFILESIZE # 历史文件大小
LANG        # 语言环境
MAIL        # 邮件位置
TMPDIR      # 临时目录

# 设置环境变量
VAR=value                     # 设置shell变量
export VAR=value              # 设置环境变量
export VAR                    # 将现有变量导出为环境变量
unset VAR                     # 删除变量
readonly VAR                  # 设置为只读变量

# 配置文件
# 系统级:
/etc/profile                  # 系统范围bash启动脚本
/etc/bashrc                  # 系统范围bash配置
/etc/environment            # 系统环境变量
# 用户级:
~/.bash_profile              # 用户bash登录脚本
~/.bashrc                    # 用户bash配置
~/.bash_logout               # 用户bash登出脚本
~/.profile                   # 通用用户配置
~/.inputrc                   # readline配置

# 立即应用配置
source ~/.bashrc              # 应用当前shell
. ~/.bashrc                   # 同source
```

### 2. Shell通配符与扩展

```bash
# 通配符
*         # 匹配任意字符(0或多个)
?         # 匹配单个字符
[abc]     # 匹配a、b或c
[a-z]     # 匹配范围
[!abc]    # 不匹配a、b或c
[[:alpha:]] # 匹配字母
[[:digit:]] # 匹配数字
[[:alnum:]] # 匹配字母数字
[[:space:]] # 匹配空白
{a,b,c}   # 扩展为a b c
{1..5}    # 扩展为1 2 3 4 5
{a..e}    # 扩展为a b c d e

# 示例
ls *.txt                  # 所有.txt文件
ls file?.log              # file1.log, fileA.log等
ls [abc]*                 # 以a、b或c开头的文件
ls [!0-9]*                # 不以数字开头的文件
ls {file1,file2}.txt      # file1.txt file2.txt
ls img{1..10}.jpg         # img1.jpg img2.jpg ... img10.jpg
rm -i *[[:upper:]]*       # 交互式删除包含大写字母的文件
```

### 3. I/O重定向与管道

```bash
# 标准文件描述符
0       # 标准输入(stdin)
1       # 标准输出(stdout)
2       # 标准错误(stderr)

# 重定向
command > file            # 标准输出重定向(覆盖)
command >> file           # 标准输出追加
command < file            # 标准输入重定向
command 2> file           # 标准错误重定向
command 2>> file          # 标准错误追加
command &> file           # 所有输出重定向
command > file 2>&1       # 标准输出和标准错误都重定向到file
command < input.txt > output.txt 2> error.log  # 同时重定向所有

# 管道
command1 | command2       # 将command1的输出作为command2的输入
command1 | command2 | command3  # 多级管道
ls -l | grep ".txt"       # 列出.txt文件
ps aux | grep httpd       # 查找httpd进程
cat file | sort | uniq    # 排序并去重
ls -l | tee filelist.txt  # 同时输出到屏幕和文件
ls -l | tee filelist.txt | grep ".txt"  # 多级管道与tee

# 命令替换
$(command)                # 执行命令并将输出作为参数
`command`                 # 旧式命令替换(反引号)
files=$(ls *.txt)         # 将命令输出赋值给变量
echo "Today is $(date)"   # 在字符串中使用命令替换
echo Total files: $(ls | wc -l)  # 统计文件数
```

## 九、正则表达式与文本处理

### 1. 基本正则表达式 (BRE)

```
普通字符:  匹配自身
特殊字符: . ^ $ * [ ] \ (需要转义)
.         # 任意单个字符
^         # 行首
$         # 行尾
*         # 前一字符0次或多次
[abc]     # 匹配a、b或c
[^abc]    # 不匹配a、b或c
[a-z]     # 匹配范围
\{n\}     # 精确匹配n次
\{n,\}    # 至少匹配n次
\{n,m\}   # 匹配n到m次
```

### 2. 扩展正则表达式 (ERE)

```
所有BRE特性外加:
+         # 前一字符1次或多次
?         # 前一字符0次或1次
|         # 或
()        # 分组
{n}       # 精确匹配n次 (无需转义)
{n,}      # 至少匹配n次 (无需转义)
{n,m}     # 匹配n到m次 (无需转义)
```

### 3. grep 命令详解

```bash
# 基本用法
grep "pattern" file       # 搜索文件
grep "pattern" file1 file2 # 搜索多个文件
grep "pattern" *.txt      # 搜索所有.txt文件
cat file | grep "pattern"  # 通过管道搜索

# 选项
grep -i "pattern" file    # 忽略大小写
grep -v "pattern" file    # 反向选择(不匹配)
grep -n "pattern" file    # 显示行号
grep -l "pattern" file*   # 仅显示匹配文件名
grep -c "pattern" file    # 统计匹配行数
grep -w "word" file       # 匹配完整单词
grep -x "line" file       # 匹配整行
grep -r "pattern" dir/    # 递归搜索目录
grep -A 2 "pattern" file  # 显示匹配行及后2行
grep -B 2 "pattern" file  # 显示匹配行及前2行
grep -C 2 "pattern" file  # 显示匹配行及前后各2行
grep --color "pattern" file # 彩色高亮匹配

# 正则表达式
grep "^[A-Z]" file        # 行首为大写字母
grep "[0-9]$" file        # 行尾为数字
grep "^$" file            # 空行
grep "th.*s" file         # 以th开头, s结尾
grep "th\{2,\}s" file      # 至少两个h (BRE)
grep -E "th{2,}s" file    # 至少两个h (ERE)

# egrep/fgrep
egrep "pattern1|pattern2" file  # 等同于grep -E
fgrep "string" file       # 快速搜索固定字符串(不使用正则)
```

### 4. sed 流编辑器

```bash
# 基本语法
sed [options] 'command' file(s)
# 命令格式: [address]command[options]

# 替换命令(s)
sed 's/old/new/' file     # 替换每行第一个匹配
sed 's/old/new/g' file    # 替换所有匹配
sed 's/old/new/2' file    # 替换每行第二个匹配
sed 's/old/new/gi' file   # 不区分大小写替换
sed '3s/old/new/' file    # 仅第3行替换
sed '1,5s/old/new/' file  # 1-5行替换
sed '/pattern/s/old/new/' file  # 匹配pattern的行替换

# 地址范围
sed '5d' file             # 删除第5行
sed '1,5d' file           # 删除1-5行
sed '5,$d' file           # 删除第5行到末尾
sed '/pattern/d' file     # 删除匹配pattern的行
sed '/start/,/end/d' file # 删除start到end之间的行

# 其他命令
sed 'p' file              # 打印每行两次(默认打印+命令p)
sed -n 'p' file           # 仅打印(禁用默认打印)
sed '=' file              # 显示行号
sed 'a\text' file         # 在行后追加文本
sed 'i\text' file         # 在行前插入文本
sed 'c\text' file         # 替换整行为文本
sed 'y/abc/ABC/' file     # 字符转换(a->A,b->B,c->C)
sed 's/old/& new/' file   # &表示匹配内容

# 多命令
sed -e 'command1' -e 'command2' file
sed -f script.sed file    # 从文件读取命令
sed '1h;2,$H;$g' file     # 将整个文件加载到模式空间

# 修改文件
sed -i 's/old/new/g' file # 直接修改文件
sed -i.bak 's/old/new/g' file  # 备份后修改
sed -i 's/old/new/g' *.txt # 批量修改
```

### 5. awk 文本处理

```bash
# 基本语法
awk [options] 'pattern {action}' file(s)
awk -f script.awk file(s)

# 字段处理
awk '{print $1}' file     # 打印第1列
awk '{print $1,$3}' file  # 打印第1和第3列
awk '{print NF}' file     # 打印每行字段数
awk '{print $NF}' file    # 打印最后一列
awk -F: '{print $1}' /etc/passwd  # 指定分隔符为:
awk 'BEGIN{FS=":"};{print $1}' /etc/passwd  # 在BEGIN块设置分隔符

# 行处理
awk 'NR==5 {print}' file # 打印第5行
awk 'NR>=5 && NR<=10 {print}' file  # 打印5-10行
awk '/pattern/ {print}' file  # 匹配pattern的行
awk '$3 > 100 {print}' file  # 第3列大于100的行
awk 'length($0) > 80 {print}' file  # 行长大于80的行

# 变量与计算
awk '{sum+=$1} END{print sum}' file  # 求和
awk '{sum+=$1} END{print sum/NR}' file  # 平均值
awk '{if($1>max) max=$1} END{print max}' file  # 最大值

# 内置变量
NR      # 当前行号
NF      # 当前行字段数
FILENAME # 当前文件名
FS      # 输入字段分隔符(默认空格)
OFS     # 输出字段分隔符(默认空格)
RS      # 输入记录分隔符(默认换行)
ORS     # 输出记录分隔符(默认换行)

# 流程控制
awk '{
  if($1 > 10) print "High";
  else if($1 > 5) print "Medium";
  else print "Low";
}' file

awk 'BEGIN{
  for(i=1;i<=10;i++) print i;
}'  # 循环

# 数组
awk '{
  count[$1]++;  # 统计每种第一列出现次数
} END{
  for(word in count) print word, count[word];
}' file

# 函数
awk 'BEGIN{
  print sin(3.14159/2);  # 三角函数
  print sqrt(16);        # 平方根
  print rand();          # 随机数
}' file
```

## 十、网络配置与故障排除

### 1. 网络信息查看

```bash
# ip命令(替代ifconfig)
ip addr show              # 显示IP地址
ip addr show eth0         # 显示特定接口
ip route show             # 显示路由表
ip link show              # 显示接口状态
ip -s link show eth0      # 显示接口统计
ip neigh show             # 显示ARP缓存

# 网络接口配置(临时)
ip addr add 192.168.1.100/24 dev eth0
ip addr del 192.168.1.100/24 dev eth0
ip link set eth0 up       # 启用接口
ip link set eth0 down     # 禁用接口
ip route add default via 192.168.1.1  # 添加默认网关
ip route del default      # 删除默认网关

# 永久网络配置
# RHEL/CentOS 7+:
nmcli connection show     # NetworkManager连接
nmcli connection modify "connection-name" ipv4.addresses 192.168.1.100/24
nmcli connection modify "connection-name" ipv4.gateway 192.168.1.1
nmcli connection modify "connection-name" ipv4.dns "8.8.8.8 8.8.4.4"
nmcli connection modify "connection-name" ipv4.method manual
nmcli connection up "connection-name"

# 配置文件(RHEL/CentOS):
# /etc/sysconfig/network-scripts/ifcfg-eth0
BOOTPROTO=static
IPADDR=192.168.1.100
NETMASK=255.255.255.0
GATEWAY=192.168.1.1
DNS1=8.8.8.8
ONBOOT=yes

# 配置文件(Debian/Ubuntu):
# /etc/network/interfaces
auto eth0
iface eth0 inet static
    address 192.168.1.100
    netmask 255.255.255.0
    gateway 192.168.1.1
    dns-nameservers 8.8.8.8 8.8.4.4
```

### 2. 网络测试工具

```bash
# ping: 测试连通性
ping host                 # 持续ping
ping -c 4 host            # 发送4个包后停止
ping -i 0.5 host          # 0.5秒间隔
ping -s 1000 host         # 1000字节包
ping -W 2 host            # 等待2秒超时

# traceroute: 路径跟踪
traceroute host           # UDP traceroute
traceroute -I host        # ICMP traceroute
traceroute -T -p 80 host  # TCP traceroute (端口80)

# mtr: 实时traceroute
mtr host                  # 交互式traceroute
mtr -r -c 10 host         # 生成报告(10个包)

# netstat/ss: 网络统计
netstat -tuln             # 显示监听TCP/UDP端口
netstat -tulnp            # 显示监听端口及进程
netstat -an               # 显示所有连接
netstat -r                # 显示路由表
netstat -i                # 显示接口统计
ss -tuln                  # 替代netstat(更快)
ss -tuln src 192.168.1.100 # 源IP过滤
ss -tuln dst 192.168.1.1  # 目标IP过滤
ss -o state established   # 显示已建立连接

# dig/nslookup/host: DNS查询
dig example.com           # 查询A记录
dig example.com MX        # 查询MX记录
dig @8.8.8.8 example.com  # 指定DNS服务器
dig +short example.com    # 简洁输出
nslookup example.com      # 交互式DNS查询
host example.com          # 简单DNS查询
host -t MX example.com    # 查询MX记录
host -a example.com       # 查询所有记录

# telnet/nc: 端口测试
telnet host port          # TCP连接测试
nc -zv host port          # 端口扫描(Netcat)
nc -l 8080                # 监听端口
nc host port < file       # 发送文件
```

### 3. SSH 安全连接

```bash
# 基本连接
ssh user@host             # 连接远程主机
ssh -p port user@host     # 指定端口
ssh -l user host          # 指定用户名
ssh host command          # 执行单条命令后退出

# SSH密钥管理
ssh-keygen -t rsa         # 生成RSA密钥
ssh-keygen -t ed25519     # 生成Ed25519密钥(推荐)
ssh-keygen -b 4096 -t rsa # 生成4096位RSA密钥
ssh-copy-id user@host     # 复制公钥到远程主机
ssh-agent bash            # 启动ssh-agent
ssh-add ~/.ssh/id_rsa     # 添加私钥到agent
ssh-add -l                # 列出已加载密钥

# SSH配置
# 客户端配置: ~/.ssh/config
Host shortname
    HostName full.hostname.com
    User username
    Port 2222
    IdentityFile ~/.ssh/id_ed25519
    ForwardAgent yes

# 服务端配置: /etc/ssh/sshd_config
Port 2222                 # 修改默认端口
PermitRootLogin no        # 禁用root登录
PasswordAuthentication no # 禁用密码认证
AllowUsers user1 user2    # 允许特定用户
DenyUsers user3           # 拒绝特定用户
AllowGroups ssh-users     # 允许特定组
X11Forwarding yes         # 允许X11转发
ClientAliveInterval 300   # 保持连接
MaxAuthTries 3            # 最大认证尝试

# SSH隧道
# 本地端口转发
ssh -L 8080:localhost:80 user@host  # 访问本地8080转到远程80
# 远程端口转发
ssh -R 8080:localhost:80 user@host  # 远程8080转到本地80
# 动态端口转发(SOCKS代理)
ssh -D 1080 user@host     # 创建SOCKS代理
```

## 十一、系统管理与维护

### 1. 用户与组管理

```bash
# 用户管理
useradd username          # 创建用户
useradd -m username       # 创建用户并创建家目录
useradd -s /bin/bash username  # 指定shell
useradd -G group1,group2 username  # 指定附加组
useradd -c "Comment" username  # 添加注释
useradd -e 2023-12-31 username  # 设置账号过期日期
usermod -l newname oldname  # 修改用户名
usermod -d /new/home/dir username  # 修改家目录
usermod -d /new/home/dir -m username  # 移动家目录
usermod -L username       # 锁定账号
usermod -U username       # 解锁账号
usermod -aG group username  # 添加用户到组(不移除现有组)
userdel username          # 删除用户(保留家目录)
userdel -r username       # 删除用户及家目录

# 密码管理
passwd username           # 修改密码
passwd -l username        # 锁定密码
passwd -u username        # 解锁密码
passwd -e username        # 强制下次登录修改密码
passwd -x 90 username     # 设置密码最大有效期90天
passwd -n 7 username      # 设置密码最短期限7天
passwd -w 14 username     # 设置密码过期前警告14天
chage -l username         # 查看密码过期信息
chage -M 90 username      # 设置密码最大有效期90天
chage -E 2023-12-31 username  # 设置账号过期日期

# 组管理
groupadd groupname        # 创建组
groupadd -g 1001 groupname  # 指定GID
groupmod -n newname oldname  # 修改组名
groupmod -g 2000 groupname  # 修改GID
groupdel groupname        # 删除组
gpasswd -a user group     # 将用户添加到组
gpasswd -d user group     # 从组中移除用户
gpasswd -M user1,user2 group  # 设置组成员列表
gpasswd -r group          # 移除组密码
gpasswd -R group          # 限制组访问

# 相关配置文件
/etc/passwd  # 用户账户信息
# 格式: username:x:UID:GID:description:home_directory:shell
/etc/shadow  # 加密的用户密码和期限
# 格式: username:encrypted_password:last_change:min_age:max_age:warn:inactive:expire:
/etc/group   # 组信息
# 格式: groupname:x:GID:user_list
/etc/gshadow # 组密码和管理员
/etc/login.defs # 创建用户的默认参数
/etc/default/useradd # useradd的默认参数
/etc/skel    # 新用户家目录的模板
```

### 2. 磁盘管理与文件系统

```bash
# 磁盘分区
fdisk -l                  # 列出所有磁盘
fdisk /dev/sda            # 分区工具
# fdisk命令:
#   p  显示分区表
#   n  新建分区
#   d  删除分区
#   t  修改分区类型
#   w  保存更改
#   q  不保存退出
parted /dev/sda           # 高级分区工具
parted /dev/sda print     # 显示分区
parted /dev/sda mklabel gpt  # 创建GPT分区表
parted /dev/sda mkpart primary ext4 1MB 10GB  # 创建分区

# 文件系统创建
mkfs.ext4 /dev/sdb1       # 创建ext4文件系统
mkfs.xfs /dev/sdb1        # 创建XFS文件系统
mkfs.vfat /dev/sdb1       # 创建FAT32文件系统
mkswap /dev/sdb2          # 创建swap分区

# 文件系统检查与修复
fsck /dev/sdb1            # 检查文件系统
fsck -y /dev/sdb1         # 自动修复
fsck.ext4 -f /dev/sdb1    # 强制检查ext4
xfs_repair /dev/sdb1      # 修复XFS

# 挂载与卸载
mount /dev/sdb1 /mnt      # 挂载分区
mount -t ext4 /dev/sdb1 /mnt  # 指定文件系统类型
mount -o ro /dev/sdb1 /mnt  # 只读挂载
mount -o remount,rw /mnt  # 重新挂载为读写
umount /mnt               # 卸载挂载点
umount /dev/sdb1          # 卸载设备
lsof +f -- /mnt           # 查找使用挂载点的进程

# /etc/fstab: 开机自动挂载
# 格式: 设备 挂载点 文件系统类型 选项 备份 检查顺序
/dev/sda1 / ext4 defaults 1 1
/dev/sdb1 /data xfs defaults 0 0
UUID=xxxx-xxxx /data ext4 defaults 0 0
LABEL=backup /backup ext4 defaults 0 0
# 常用选项:
#   defaults  rw, suid, dev, exec, auto, nouser, async
#   noatime   不更新访问时间
#   nodiratime 不更新目录访问时间
#   relatime  优化访问时间更新
#   nofail    设备不存在时不报错
```

### 3. LVM (逻辑卷管理)

```bash
# PV (物理卷)管理
pvcreate /dev/sdb1        # 创建物理卷
pvcreate /dev/sdb1 /dev/sdc1  # 创建多个物理卷
pvdisplay                 # 显示物理卷信息
pvscan                    # 扫描系统中的物理卷
pvremove /dev/sdb1        # 移除物理卷

# VG (卷组)管理
vgcreate vg_data /dev/sdb1 /dev/sdc1  # 创建卷组
vgcreate -s 32M vg_data /dev/sdb1  # 指定PE大小32MB
vgdisplay                 # 显示卷组信息
vgscan                    # 扫描系统中的卷组
vgextend vg_data /dev/sdd1 # 扩展卷组
vgreduce vg_data /dev/sdb1 # 从卷组移除物理卷
vgchange -ay vg_data      # 激活卷组
vgchange -an vg_data      # 停用卷组
vgremove vg_data          # 删除卷组

# LV (逻辑卷)管理
lvcreate -L 10G -n lv_data vg_data  # 创建10GB逻辑卷
lvcreate -l 100%FREE -n lv_backup vg_data  # 使用所有剩余空间
lvdisplay                 # 显示逻辑卷信息
lvscan                    # 扫描系统中的逻辑卷
lvextend -L +5G /dev/vg_data/lv_data  # 扩展5GB
lvextend -l +100%FREE /dev/vg_data/lv_data  # 使用所有剩余空间
lvreduce -L -2G /dev/vg_data/lv_data  # 减少2GB(危险!)
lvremove /dev/vg_data/lv_data  # 删除逻辑卷

# 调整文件系统
# ext2/ext3/ext4
resize2fs /dev/vg_data/lv_data  # 调整文件系统大小
resize2fs /dev/vg_data/lv_data 20G  # 调整到特定大小
# xfs
xfs_growfs /mount/point  # 增大文件系统(只能增大)
# 注意: XFS不支持缩小
```

### 4. 软件包管理

#### RHEL/CentOS/Fedora (RPM/YUM/DNF)

```bash
# RPM 基本操作
rpm -ivh package.rpm     # 安装包
rpm -Uvh package.rpm     # 升级包
rpm -Fvh package.rpm     # 刷新包(仅升级已安装)
rpm -e package           # 卸载包
rpm -q package           # 查询包是否安装
rpm -qa                  # 列出所有已安装包
rpm -qi package          # 显示包信息
rpm -ql package          # 列出包文件
rpm -qd package          # 列出文档文件
rpm -qc package          # 列出配置文件
rpm -qf /path/to/file    # 查询文件所属包
rpm -q --changelog package  # 显示变更日志
rpm -V package           # 验证包完整性
rpm -K package.rpm       # 验证包签名

# YUM/DNF 操作
yum install package      # 安装包
yum install package.rpm  # 本地安装或从仓库安装
yum localinstall package.rpm  # 仅本地安装
yum remove package       # 卸载包
yum update               # 更新所有包
yum update package       # 更新特定包
yum check-update         # 检查可用更新
yum search keyword       # 搜索包
yum info package         # 查看包信息
yum list installed       # 列出已安装包
yum list available       # 列出可用包
yum provides "*/filename" # 查找提供文件的包
yum clean all            # 清理缓存
yum repolist             # 列出仓库
yum grouplist            # 列出软件组
yum groupinstall "group" # 安装软件组
yum history              # 查看事务历史
yum history undo ID      # 撤销事务

# DNF (YUM的下一代)
dnf install package      # 用法类似YUM
dnf module list          # 列出模块
dnf module enable module # 启用模块
```

#### Debian/Ubuntu (DEB/APT)

```bash
# APT 基本操作
apt update               # 更新软件源
apt upgrade              # 升级已安装包
apt full-upgrade         # 完全升级(可能移除包)
apt install package      # 安装包
apt remove package       # 卸载包(保留配置)
apt purge package        # 卸载包(删除配置)
apt autoremove           # 移除不再需要的依赖
apt search keyword       # 搜索包
apt show package         # 显示包信息
apt list --installed     # 列出已安装包
apt list --upgradable    # 列出可升级包
apt policy package       # 显示包策略
apt clean                # 清理下载的包文件
apt autoclean            # 清理过期的包文件
apt edit-sources         # 编辑源列表
apt depends package      # 显示依赖
apt rdepends package     # 显示反向依赖

# dpkg 低级操作
dpkg -i package.deb      # 安装包
dpkg -r package          # 移除包(保留配置)
dpkg -P package          # 完全移除包
dpkg -l                  # 列出已安装包
dpkg -l 'package*'       # 模式匹配
dpkg -s package          # 显示包状态
dpkg -L package          # 列出包文件
dpkg -S /path/to/file    # 查询文件所属包
dpkg --configure -a      # 配置未完成的安装
dpkg-reconfigure package # 重新配置包
```

## 十二、系统监控与日志

### 1. 系统性能监控

```bash
# 系统负载
uptime                    # 显示运行时间和负载平均值
w                         # 显示谁在登录和他们在做什么
who                       # 显示登录用户
last                      # 显示最近登录
free -h                   # 显示内存使用(人类可读)
vmstat 1                  # 虚拟内存统计(1秒间隔)
vmstat -s                 # 虚拟内存统计详细

# CPU/进程监控
top                       # 交互式进程监控
htop                      # 增强版top
ps aux --sort=-%cpu       # 按CPU使用排序
ps aux --sort=-%mem       # 按内存使用排序
mpstat 1                  # CPU使用统计(1秒间隔)
mpstat -P ALL 1           # 每个CPU核心统计

# I/O监控
iostat 1                  # I/O统计(1秒间隔)
iostat -xz 1              # 扩展统计
iotop                     # I/O监控(类似top)
lsof                      # 列出打开的文件
lsof -i :80               # 列出使用80端口的进程
lsof -u username          # 列出特定用户打开的文件
lsof +D /path             # 递归列出目录打开的文件

# 网络监控
netstat -tuln             # 显示监听端口
ss -tuln                  # 替代netstat
sar -n DEV 1              # 网络接口统计
nload                     # 网络流量监控
iftop                     # 网络连接带宽监控
nethogs eth0              # 按进程监控网络使用

# 温度/硬件监控
sensors                   # 显示传感器温度(需lm-sensors)
hddtemp /dev/sda          # 显示硬盘温度
smartctl -a /dev/sda      # 显示硬盘SMART信息
dmidecode -t memory       # 显示内存信息
dmidecode -t bios         # 显示BIOS信息
```

### 2. 日志管理

```bash
# 传统日志位置
/var/log/messages         # 系统日志(RHEL/CentOS)
/var/log/syslog           # 系统日志(Debian/Ubuntu)
/var/log/auth.log         # 认证日志
/var/log/kern.log         # 内核日志
/var/log/boot.log         # 启动日志
/var/log/dmesg            # 内核环缓冲区
/var/log/mail.log         # 邮件日志
/var/log/httpd/           # Apache日志
/var/log/nginx/           # Nginx日志
/var/log/mysql/           # MySQL日志

# journalctl (systemd日志)
journalctl                # 查看所有日志
journalctl -f             # 实时跟踪日志
journalctl -u service     # 查看特定服务日志
journalctl -b             # 本次启动日志
journalctl -b -1          # 上次启动日志
journalctl --since "2023-01-01" --until "2023-01-02"  # 时间范围
journalctl -p err         # 仅显示错误
journalctl -x             # 添加解释文本
journalctl -o json        # JSON格式输出
journalctl --disk-usage   # 显示磁盘使用

# logrotate: 日志轮替
# 配置文件: /etc/logrotate.conf 和 /etc/logrotate.d/*
# 常用选项:
#   daily/weekly/monthly  轮替频率
#   rotate 7              保留7个备份
#   compress              压缩旧日志
#   delaycompress         延迟压缩(上次轮替)
#   missingok             忽略不存在的日志
#   notifempty            空文件不轮替
#   create 640 root adm   创建新文件(权限/所有者/组)
#   postrotate/endscript  轮替后执行脚本

logrotate -f /etc/logrotate.conf  # 强制轮替
logrotate -d /etc/logrotate.conf  # 调试模式
```

### 3. 定时任务

```bash
# at: 一次性任务
at now + 5 minutes        # 5分钟后执行
at 10:30 tomorrow         # 明天10:30执行
at 02:00 2023-12-31       # 指定日期时间
# at提示符下输入命令:
at> command1
at> command2
at> <EOT>                 # Ctrl+D结束
atq                       # 列出at队列
atrm job_id               # 删除at作业

# crontab: 周期性任务
crontab -e                # 编辑当前用户的crontab
crontab -l                # 列出当前用户的crontab
crontab -r                # 删除当前用户的crontab
crontab -u username -e    # 编辑其他用户的crontab(需要权限)

# crontab格式
# 分 时 日 月 周 命令
# 0-59 0-23 1-31 1-12 0-7 command
# * 表示任意值
# , 指定列表值 1,3,5
# - 指定范围 1-5
# / 指定步长 */2 (每2个单位)

# 示例:
0 2 * * * /backup.sh        # 每天凌晨2点执行
*/5 * * * * /check.sh       # 每5分钟执行
0 9-18 * * 1-5 /work.sh     # 工作日上午9点到下午6点每小时执行
0 0 1 * * /monthly.sh       # 每月1日午夜执行
30 8 1,15 * * /report.sh    # 每月1日和15日上午8:30执行

# 系统级定时任务
/etc/crontab              # 系统crontab(包含用户名字段)
/etc/cron.d/              # 附加crontab
/etc/cron.daily/          # 每日任务
/etc/cron.hourly/         # 每小时任务
/etc/cron.monthly/        # 每月任务
/etc/cron.weekly/         # 每周任务

# anacron: 用于不常开机的系统
# 配置文件: /etc/anacrontab
# 格式: period delay job-identifier command
# 示例:
1       5       cron.daily      run-parts /etc/cron.daily
# 每1天，延迟5分钟，运行/etc/cron.daily中的脚本
```

## 附录：实用技巧与故障排除

### 1. 常见问题解决

```bash
# 忘记root密码
# 1. 重启系统
# 2. 在GRUB菜单时按e进入编辑
# 3. 找到以"linux"开头的行，末尾添加"init=/bin/bash"
# 4. 按Ctrl+X启动
# 5. 执行: mount -o remount,rw /
# 6. 执行: passwd root
# 7. 执行: touch /.autorelabel  # SELinux环境下
# 8. 执行: exec /sbin/init

# 系统无法启动
# 1. 使用安装媒体启动(救援模式)
# 2. 挂载原系统: mount /dev/sda1 /mnt/sysimage
# 3. chroot /mnt/sysimage
# 4. 修复问题(如: grub-install /dev/sda, yum reinstall kernel)
# 5. exit, reboot

# 磁盘空间不足
# 1. 找出大文件/目录
du -sh /var/log/* | sort -h
find / -type f -size +100M -exec ls -lh {} \;
# 2. 清理缓存
yum clean all  # RHEL/CentOS
apt clean      # Debian/Ubuntu
# 3. 清理旧日志
journalctl --vacuum-time=3d  # 保留最近3天
# 4. 清理旧内核
package-cleanup --oldkernels --count=2  # RHEL/CentOS
apt purge linux-image-5.4*              # Debian/Ubuntu
# 5. 清理临时文件
rm -rf /tmp/*
rm -rf /var/tmp/*

# 网络故障排除
# 1. 检查物理连接
ip link show
# 2. 检查IP配置
ip addr show
# 3. 检查路由
ip route show
# 4. 测试连通性
ping 8.8.8.8
# 5. 检查DNS
cat /etc/resolv.conf
nslookup google.com
# 6. 检查防火墙
firewall-cmd --list-all  # firewalld
iptables -L -n -v        # iptables
ufw status               # Ubuntu防火墙
# 7. 检查服务状态
systemctl status network  # RHEL/CentOS
systemctl status networking # Debian/Ubuntu
```

### 2. 有用的命令技巧

```bash
# 历史命令
Ctrl+R                  # 反向搜索历史
!!                      # 重复上一条命令
!-1                     # 倒数第二条命令
!ls                     # 最近的ls命令
!$                      # 上条命令最后一个参数
!*                      # 上条命令所有参数
^old^new^               # 替换上条命令中的old为new

# 快捷键
Ctrl+C                  # 终止当前命令
Ctrl+Z                  # 暂停当前命令
Ctrl+D                  # 退出shell/EOF
Ctrl+L                  # 清屏
Ctrl+A                  # 移动到行首
Ctrl+E                  # 移动到行尾
Ctrl+U                  # 删除到行首
Ctrl+K                  # 删除到行尾
Ctrl+Y                  # 粘贴(上一次Ctrl+U/K删除的内容)
Ctrl+R                  # 搜索历史
Tab                     # 命令/文件名补全
Alt+.                   # 插入上条命令最后一个参数

# 变量与脚本
${VAR:-default}         # 如果VAR未设置，使用default
${VAR:=default}         # 如果VAR未设置，设置为default
${VAR:?message}         # 如果VAR未设置，显示message并退出
${VAR:+value}           # 如果VAR设置，使用value
${#VAR}                 # 变量长度
${VAR:start:length}     # 子字符串
$(command)              # 命令替换
command || echo "Failed" # 如果命令失败执行
command && echo "Success" # 如果命令成功执行
{ command1; command2; } # 在当前shell执行多命令
( command1; command2; ) # 在子shell执行多命令

# 文件处理
sort file | uniq        # 排序并去重
sort file | uniq -c     # 排序并统计重复
sort file | uniq -d     # 仅显示重复行
sort file1 file2 | comm -3 # 比较两个排序文件
paste file1 file2       # 横向合并文件
join file1 file2        # 基于共同字段连接
cut -d: -f1,3 /etc/passwd # 用:分隔，取第1和3字段
column -t data.txt      # 以表格形式显示
watch -n 1 'ls -l'      # 每秒执行一次命令
```

### 3. 文件系统修复实例

```bash
# ext4文件系统修复
# 1. 卸载文件系统
umount /dev/sdb1
# 2. 检查文件系统
fsck -N /dev/sdb1  # 模拟运行
fsck -y /dev/sdb1  # 自动修复
# 3. 检查严重损坏
fsck -c /dev/sdb1  # 检查坏块
# 4. 重新挂载
mount /dev/sdb1 /mnt

# XFS文件系统修复
# 1. 卸载文件系统
umount /dev/sdb1
# 2. 检查文件系统
xfs_repair -n /dev/sdb1  # 仅检查
xfs_repair /dev/sdb1     # 修复
# 3. 强制修复
xfs_repair -L /dev/sdb1  # 清除日志(最后手段)
# 4. 重新挂载
mount /dev/sdb1 /mnt

# 无法卸载的文件系统
# 1. 找出使用进程
lsof +f -- /mnt
fuser -vm /mnt
# 2. 终止进程
fuser -km /mnt  # 终止所有使用进程
# 3. 尝试延迟卸载
umount -l /mnt  # 延迟卸载
# 4. 重启系统
reboot
```

------

> 本手册基于《鸟哥的Linux私房菜》整理，力求全面详细，适合Linux新手和管理员日常参考。手册内容覆盖主流Linux发行版(RHEL/CentOS/Debian/Ubuntu等)，但具体命令和配置可能因发行版而异。建议结合官方文档和实际情况使用。手册最后更新于2024年，如有疑问请查阅最新官方文档。