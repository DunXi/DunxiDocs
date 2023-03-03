# Python笔记

## 注释

### 单行注释

​	#来表示单行注释

### 多行注释

```python
'''
多行注释
'''

"""
三个双引号也可以表示多行注释
"""
```



## 常用函数

### print() 打印字符

### .format()

### f字符串

```python
name = 'lily'
student_num = 202108710257
score = 90
print(
    '姓名：{0:-^15}\n学号：{1:-<15}\n成绩：{2:~>15b}'.format(name,student_num,score)
)

#f字符串，省略掉索引，不必使用占位符，类似于${}
#print里面开头写个f，然后在字符串里面写大括号写值
print(f'姓名：{name:-^15}\n学号：{student_num:-<15}\n分数：{score:~>15o}')
```





## 字符串相关

### 字符串长度

len() 函数，获取字符串的长度

​	使用len()函数计算字符串长度，不区分汉子和字符，统一按照英文长度处理

```python
s = 'alsfdj'
s1 = "sldjflasf"
s2 = "sldjflkasjsdafjljalfjklsadjlkfa"
print(len(s))
print(len(s1))
print(len(s2))
```



### 字符串切片

```python
#字符串切片函数，变量名[start:end:step] start可以取值，end索引取不到值，step步长
print(s[1:2:3])
```



### 多行字符串

​	使用三个连续的单引号或者双引号表示

```python
print(
    '''
    *
   * *
 * * * *
    '''
)
```



### 字符串内查找字符

```python
#字符串内查找字符
print("a" in s)
print("a" not in s)
```



### 统计特定字符出现的次数

```python
#统计特定字符串出现的次数
print(s.count("a"))
```

### 替换字符

​	左边的替换成右边的

```python
#替换字符  把左边的替换成右边的
print(s.replace('a','b'))
```



### 字母相关操作

```python
s3 = 'python学习'
print(s3)
print(s3.title()) #首字母大写
print(s3.upper())#所有字母大写
print(s3.lower())#所有字母小写
```


### 键盘录入内容
    input() 方法
```python
    username = input("请输入用户名：")
    passwd = input("请输入密码：")
```
    从键盘录入内容赋值给前面的变量

## 分支结构设计
#选择结构，单分支（if)  ，双分支 （if else) ，多分支 （if elif else)
#条件后的：不能省略
#else在双分支或者多分支只能干，都不能有条件
### if
```python
height = float(input("请输入身高："))
weight = float(input("请输入体重："))
print(height)
print(weight)
BMI = (weight/height**2)

if BMI >= 28:
    print("肥胖！！")
else:
    print("正常。")
```

### 多分支if语句

```python
height = float(input("请输入身高："))
weight = float(input("请输入体重："))
print(height)
print(weight)
BMI = (weight/height**2)

if BMI < 18.5:
    print("偏瘦")
elif BMI < 24:
    print("正常")
elif BMI < 28:
    print("偏胖")
else:
    print("肥胖！！")
```

小练习 开发一个四则运算器
```python
#开发一个四则运算器
first = float(input("请输入第一个数："))
second = float(input("请输入第二个数："))
type = input("请输入运算方式：")
result = 0 #用于接收结果
flag = True #用来判断用户输入是否合法，合法则正常输出结果，不合法，则不输出运算结果
if type == '+':
    result = first + second
elif type == '-':
    result = first - second
elif type == '*':
    result = first * second
elif type == '/':
    result = first / second
else:
    flag = False
    print("没有这种计算方式")

if flag:
    print(result)
```

### if语句的嵌套
    小练习
```python
#用户取钱
password1 = "123"
password2 = "123"

pwd1 = input("请输入登录密码：")
if pwd1 == password1:
    pwd2 = input("请输入取款密码：")
    if pwd2 == password2:
        print("取款密码输入正确，取款成功")
    else:
        print("取款密码输入错误，取款失败")
else:
    print("登录密码输入错误，登录失败")
```

## 循环
### for
for循环基本结构
    
    for 循环变量 in 遍历结构: 语句块的内容
        #语句块

python 可以直接遍历字符串

```python
#通过for循环遍历字符串
s = 'python'
for i in s:
    print(i)
```

### range()函数
    range(start,end,step) start 可以取到，end取不到，step步长 
    如果要取1-100 则应该写 range(1,101)
    用for循环打印1-100里面的值
```python
for i in range(1,101):
    print(i)
```
小练习 

    for循环打印99乘法表

```python
for i in range(1,10):
    for j in range(1,i+1):
        print(f'{j}*{i}=',i*j,end="  ")
    print()
```
### while
用while循环实现 99乘法表
```python
a = 1
b = 1
while a < 10:
    while b <= a:
        print(f'{b}*{a}=', a * b, end="  ")
        b+=1
    print()
    b = 1
    a += 1
```

### 循环小练习
多层循环实现银行卡取钱
```python
password = "123"
pwd = "123"
for l in range(0,3):
    password1 = input("请输入登录密码：")
    if password == password1:
        print("登录成功")
        for q in range(0,3):
            pwd1 = input("请输入取款密码：")
            if pwd1 == pwd:
                print("取款成功")
            else:
                if q < 2:
                    print("取款密码输入错误，请重新输入")
                else:
                    print("密码错误超过三次，请重新登录")
                continue
            break
    else:
        if l < 2:
            print("登录失败，请重新输入登录密码")
        else:
            print("密码错误超过三次，程序结束")
```

for循环实现输入10个数，求平均值
```python
sum = 0
for i in range(10):
    sum += int(input("请输入第"+str(i+1)+"个值:"))
print("平均值为："+str(sum / 10))
```

while循环实现输入任意个数，求平均值
```python
sum = 0
i = 1
while True:
    sum += int(input("请输入第" + str(i) + "个值:"))
    i+=1
    print("继续输入请按y,结束请按n")
    flag = input()
    if flag == "y":
        continue
    else:
        break
print("平均值为："+str(sum / (i-1)))
```
一张0.08毫米厚纸对折多少次可以超过珠穆朗玛峰的高度？
```python
mm = 0.08
m = 8848000
count = 0
while True:
    mm *= 2
    count += 1
    if mm >= m:
        print("对折"+str(count)+"次")
        break
    else:
        continue
```