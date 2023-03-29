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

#### 鸡兔同笼
35个头 94只脚
```python
'''
    鸡兔同笼
    35个头 94只脚
'''
all = 35 * 2
tutui = 94 - all
tu = tutui / 2

ji = 35 - tu

print(str(ji)+"只鸡")
print(str(35-ji)+"只兔子")
```

#### 百钱买百鸡
```python
'''
    百钱买百鸡
    5文 1公，3文 1母 1文 3雏鸡
    问 100文 100只鸡  公 母 雏 各多少只
'''
for x in range(0, 21):
    for y in range(0, 34):
        for z in range(0, 101):
            if (x * 5 + y * 3 + z / 3 == 100) and (x + y + z == 100):
                print("公鸡有%d只\t母鸡有%d只\t小鸡有%d只" % (x, y, z))

```

#### 回文数
```python
# 回文数
num = int(input("请输入任意正整数："))
orgin_num = num
reversed_num = 0
while num > 0:
    reversed_num = num % 10 + reversed_num * 10
    num //= 10

if reversed_num == orgin_num:
    print("是回文数")
else:
    print("不是回文数")
```

## 列表
### list

定义与使用
```python
# 定义
list1 = [1,2,3,4,5,6]
# 索引
print(list1[1])
# 切片
print(list1[1:2])
# 遍历
for i in list1:
    print(i)

# 增
list1.append(123)
```

#### 列表判断回文数
```python 
num = input("请输入整数：")
list01 = list(num)
list02 = list(num)
list01.reverse()

#比较两个列表中元素是否一致，只要有一个元素不一样，不是回文数
if list01 == list02:
    print("yes")
else:
    print("no")
```

#### 利用for循环遍历列表
```python 
for i in range(len(list01)):
    if list01[i] != list02[i]:
        print("no")
        break
# for while 配合 else 来判断循环是否是正常结束，没有遇到break则执行else里面的代码
else:
    print("yes")
```
*注意：for while 配合 else 来判断循环是否是正常结束，没有遇到break则执行else里面的代码*



#### 列表的增加

listname.append() 在末尾处增加元素

Listname.extend() 在末尾处增加切片

listname.insert(索引，元素值) 在列表的指定位置索引处插入元素



#### 列表的删除



#### 排序
排序 sort() 会永远改变列表元素的排列顺序  

sorted() 可以实现临时排序，默认排序方式是升序排列，通过传入参数reverse=True，实现降序
```python
score_list = [12,14,435,456,46,67]
# 排序 sort() 会永远改变列表元素的排列顺序  sorted() 可以实现临时排序，默认排序方式是升序排列，通过传入参数reverse=True，实现降序
list_num = score_list.sort()
list_num1 = sorted(score_list)
print(list_num1)
```

#### 赋值
```python 
a = [1,2,3]
b = a
a.append(1)
b.append(2)
print(b)
```
直接赋值会使两个list同时指向一个地址，两个名字对应的列表一样，改变一个另一个也会改变。
1. 切片
为了解决这个问题，我们采用切片的方式复制
```python
a = [1,2,3]
b = a[:]
a.append(1)
b.append(2)
print(a)
print(b)
```
2. copy方法


批量提升成绩
```python

# 遍历列表，挨个改变元素的值
score_list = [10,56,69,58,90,56,88]
list01 = []
print(list01)

for i in score_list:
    i *= 1.2
    list01.append(i)
print(list01)

```

### 列表推导式






### 列表小练习
根据索引定制每日运动计划
```python 
run = ["0分钟","20分钟","40分钟","60分钟"]
swim = ["0米","200米","400米","600米"]

for i in range(len(run)):
    print(f"{i+1}、{run[i]}")
index_run = int(input("请选择您要跑的时长选项："))

for i in range(len(swim)):
    print(f"{i+1}、{run[i]}")

index_swim = int(input("请选择您要跑的时长选项："))

print(f"定制每日运动计划：跑步{run[index_run-1]},游泳：{swim[index_swim-1]}")
```



## 异常处理

### 异常类型
| 异常类型          | 说明                                 |
| ----------------- | ------------------------------------ |
| IndentationError  | 缩进错误                             |
| NameError         | 未声明，未初始化对象                 |
| ImportError       | 导入模块、对象失败                   |
| ZeroDivisionError | 除零异常                             |
| SyntaxError       | 语法错误                             |
| TypeError         | 类型不合适引发的错误                 |
| ValueError        | 传入无效的参数                       |
| IndexError        | 索引超出序列范围                     |
| KeyError          | 请求一个不存在的字典关键字引发的异常 |
| EOFError          | 读取超过文件结尾                     |
| AttributeError    | 访问未知对象属性引发的错误           |
| MemoryError       | 内存溢出错误                         |

try ... except

```python
try:
    语句块1：所有可能产生异常的代码
except 异常的类型：
    异常处理方式
```

例子：

```python
try:
    num1 = int(input("请输入被除数："))
    num2 = int(input("请输入除数："))
    print(num1 / num2)
except TypeError as e:
    print("输入类型错误")
    print(e)
except ZeroDivisionError as e:
    print("除零异常")
    print(e)
else:
    print("没问题")
finally:
    print("程序结束")
```



小练习

````python

'''
run 20 - 200k
swim 200 - 100k
'''

run = ["0分钟","20分钟","40分钟","60分钟"]
swim = ["0米","200米","400米","600米"]

plan_list = []
calorie_list = []

for i in range(len(run)):
    for j in range(len(swim)):
        print(f"定制每日运动计划：跑步{run[i]}消耗{i*100},游泳：{swim[j]}消耗{j*200} 共{i*100+j*200}")
        plan_list.append(f"定制每日运动计划：跑步{run[i]}消耗{i*100},游泳：{swim[j]}消耗{j*200} 共{i*100+j*200}")
        calorie_list.append(i*100+j*200)

print(plan_list)
print(calorie_list)

print("最大值"+str(max(calorie_list)))
print("最小值"+str(min(calorie_list)))

# 遍历集合，寻找能被200整除的数
for i in calorie_list:
    if i % 200 == 0:
        print(i)

````

