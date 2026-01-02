# Python笔记
## 注释

### 单行注释

   #来表示单行注释

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

   使用len()函数计算字符串长度，不区分汉子和字符，统一按照英文长度处理

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

   使用三个连续的单引号或者双引号表示

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

   左边的替换成右边的

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
​    input() 方法
```python
    username = input("请输入用户名：")
    passwd = input("请输入密码：")
```
​    从键盘录入内容赋值给前面的变量

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
​    小练习
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
​    range(start,end,step) start 可以取到，end取不到，step步长 
​    如果要取1-100 则应该写 range(1,101)
​    用for循环打印1-100里面的值
```python
for i in range(1,101):
    print(i)
```
小练习 

​    for循环打印99乘法表

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

## 1. Python基础核心

### 1.1 变量与数据类型

```python
# 基本数据类型
# 整数
age = 25
temperature = -10
population = 7_800_000_000  # Python 3.6+支持下划线分隔符

# 浮点数
price = 19.99
scientific = 2.5e-3  # 0.0025

# 字符串 (单引号、双引号、三引号)
name = 'Alice'
message = "Hello, World!"
multi_line = """这是多行字符串，
可以包含换行符和特殊字符，
很适合写文档。"""

# 布尔值
is_active = True
has_permission = False

# None (空值)
result = None

# 类型检查与转换
print(type(age))  # <class 'int'>
print(isinstance(name, str))  # True

# 类型转换
num_str = "42"
num_int = int(num_str)  # "42" -> 42
float_num = float(num_int)  # 42 -> 42.0
str_num = str(float_num)  # 42.0 -> "42.0"

# 布尔转换规则
print(bool(0))      # False
print(bool(1))      # True
print(bool(""))     # False
print(bool("0"))    # True
print(bool([]))     # False
print(bool(None))   # False
```

### 1.2 运算符

```python
# 算术运算符
a = 10
b = 3
print(a + b)  # 13 (加)
print(a - b)  # 7 (减)
print(a * b)  # 30 (乘)
print(a / b)  # 3.333... (除，结果总是float)
print(a // b) # 3 (整除)
print(a % b)  # 1 (取模/余数)
print(a ** b) # 1000 (幂)

# 比较运算符
print(a == b)  # False (等于)
print(a != b)  # True (不等于)
print(a > b)   # True (大于)
print(a < b)   # False (小于)
print(a >= b)  # True (大于等于)
print(a <= b)  # False (小于等于)

# 逻辑运算符
x = True
y = False
print(x and y)  # False
print(x or y)   # True
print(not x)    # False

# 位运算符
print(a & b)  # 2 (按位与)
print(a | b)  # 11 (按位或)
print(a ^ b)  # 9 (按位异或)
print(~a)     # -11 (按位取反)
print(a << 1) # 20 (左移)
print(a >> 1) # 5 (右移)

# 赋值运算符
c = 5
c += 2  # c = c + 2 -> 7
c -= 1  # c = c - 1 -> 6
c *= 3  # c = c * 3 -> 18
c /= 2  # c = c / 2 -> 9.0

# Python特有的运算符
# 成员运算符
my_list = [1, 2, 3, 4, 5]
print(3 in my_list)    # True
print(6 not in my_list) # True

# 身份运算符 (检查对象ID是否相同)
a = [1, 2, 3]
b = a
c = [1, 2, 3]
print(a is b)  # True (同一个对象)
print(a is c)  # False (值相同但不同对象)
print(a == c)  # True (值比较)

# 海象运算符 (Python 3.8+)
# 在表达式内部为变量赋值
if (n := len(my_list)) > 3:
    print(f"List is too long ({n} elements, expected <= 3)")
```

### 1.3 控制流

```python
# 条件语句
temperature = 25

# if-elif-else 结构
if temperature > 30:
    print("今天很热，注意防暑")
elif 20 <= temperature <= 30:
    print("今天天气舒适")
elif 10 <= temperature < 20:
    print("今天有点凉，加件外套")
else:
    print("今天很冷，注意保暖")

# 三元表达式
age = 20
status = "成年人" if age >= 18 else "未成年人"
print(status)  # 成年人

# 循环

# for 循环
# 遍历列表
fruits = ["苹果", "香蕉", "橙子", "葡萄"]
for fruit in fruits:
    print(f"我喜欢吃{fruit}")

# 遍历字符串
for char in "Python":
    print(char)

# 使用 range()
for i in range(5):  # 0,1,2,3,4
    print(f"计数: {i}")

for i in range(2, 6):  # 2,3,4,5
    print(f"从2开始: {i}")

for i in range(0, 10, 2):  # 0,2,4,6,8 (步长为2)
    print(f"步长为2: {i}")

# 遍历字典
person = {
    "name": "张三",
    "age": 30,
    "city": "北京"
}

# 遍历键
for key in person:
    print(f"键: {key}, 值: {person[key]}")

# 遍历键值对
for key, value in person.items():
    print(f"{key}: {value}")

# while 循环
count = 0
while count < 5:
    print(f"计数器: {count}")
    count += 1

# 无限循环 (需要break跳出)
while True:
    user_input = input("输入'exit'退出: ")
    if user_input.lower() == 'exit':
        break
    print(f"你输入了: {user_input}")

# 循环控制语句
for i in range(10):
    if i == 3:
        continue  # 跳过当前迭代，继续下一个
    if i == 7:
        break     # 完全退出循环
    print(i)      # 输出 0,1,2,4,5,6
else:
    # 注意：只有当循环正常完成(没有break)时才会执行else块
    print("循环正常结束")

# 嵌套循环
for i in range(3):
    for j in range(2):
        print(f"i={i}, j={j}")
```

### 1.4 数据结构

```python
# 列表 (List) - 有序、可变序列
# 创建列表
empty_list = []
fruits = ["苹果", "香蕉", "橙子"]
mixed_list = [1, "hello", True, 3.14]

# 列表操作
fruits.append("葡萄")       # 末尾添加 ["苹果", "香蕉", "橙子", "葡萄"]
fruits.insert(1, "芒果")    # 在索引1处插入 ["苹果", "芒果", "香蕉", "橙子", "葡萄"]
fruits.remove("香蕉")       # 移除第一个匹配项 ["苹果", "芒果", "橙子", "葡萄"]
popped_fruit = fruits.pop() # 移除并返回最后一个元素 ["苹果", "芒果", "橙子"], popped_fruit = "葡萄"
popped_item = fruits.pop(0) # 移除并返回索引0的元素 ["芒果", "橙子"], popped_item = "苹果"

# 列表切片
numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
print(numbers[2:5])   # [2, 3, 4] (索引2到4)
print(numbers[:4])    # [0, 1, 2, 3] (从开头到索引3)
print(numbers[6:])    # [6, 7, 8, 9] (从索引6到结尾)
print(numbers[::2])   # [0, 2, 4, 6, 8] (步长为2)
print(numbers[::-1])  # [9, 8, 7, 6, 5, 4, 3, 2, 1, 0] (反转列表)

# 列表推导式 (简洁创建列表)
squares = [x**2 for x in range(10)] # [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
even_squares = [x**2 for x in range(10) if x % 2 == 0] # [0, 4, 16, 36, 64]
matrix = [[i*j for j in range(3)] for i in range(3)] # [[0,0,0],[0,1,2],[0,2,4]]

# 元组 (Tuple) - 有序、不可变序列
# 创建元组
empty_tuple = ()
single_item = (42,)  # 注意逗号，没有逗号就是整数
person = ("张三", 30, "北京")
coordinates = (10, 20, 30)

# 元组解包
name, age, city = person
print(f"姓名: {name}, 年龄: {age}, 城市: {city}")

x, y, z = coordinates
print(f"坐标: ({x}, {y}, {z})")

# 交换变量 (不需要临时变量)
a, b = 10, 20
a, b = b, a  # a=20, b=10

# 字典 (Dict) - 键值对集合
# 创建字典
empty_dict = {}
person = {
    "name": "李四",
    "age": 28,
    "city": "上海",
    "skills": ["Python", "JavaScript", "SQL"]
}

# 字典操作
person["email"] = "lisi@example.com"  # 添加/更新键值对
person["age"] = 29  # 更新值

# 安全访问 (避免KeyError)
print(person.get("phone", "未提供电话"))  # 未提供电话 (键不存在时返回默认值)

if "skills" in person:
    print("技能:", person["skills"])

# 删除键值对
del person["city"]  # 直接删除
email = person.pop("email", "无邮箱")  # 删除并返回值，不存在时返回默认值

# 字典视图
keys = person.keys()    # dict_keys(['name', 'age', 'skills'])
values = person.values()  # dict_values(['李四', 29, ['Python', 'JavaScript', 'SQL']])
items = person.items()  # dict_items([('name','李四'), ('age',29), ...])

# 字典推导式
squares_dict = {x: x**2 for x in range(6)} # {0:0, 1:1, 2:4, 3:9, 4:16, 5:25}
filtered_dict = {k: v for k, v in person.items() if k != "skills"}

# 集合 (Set) - 无序、不重复元素集合
# 创建集合
empty_set = set()  # 注意：{} 创建的是字典
fruits_set = {"苹果", "香蕉", "橙子", "苹果"}  # {"苹果", "香蕉", "橙子"} (自动去重)
numbers_set = set([1, 2, 3, 2, 1])  # {1, 2, 3}

# 集合操作
fruits_set.add("葡萄")    # 添加元素
fruits_set.remove("香蕉") # 移除元素 (不存在时抛出KeyError)
fruits_set.discard("芒果") # 安全移除 (不存在时不报错)

# 集合运算
set1 = {1, 2, 3, 4, 5}
set2 = {4, 5, 6, 7, 8}

union = set1 | set2      # 并集 {1,2,3,4,5,6,7,8}
intersection = set1 & set2  # 交集 {4,5}
difference = set1 - set2  # 差集 {1,2,3}
symmetric_diff = set1 ^ set2  # 对称差集 {1,2,3,6,7,8}

# 集合推导式
even_squares_set = {x**2 for x in range(10) if x % 2 == 0}  # {0,4,16,36,64}
```

## 2. 函数与模块

### 2.1 函数基础

```python
# 定义函数
def greet(name):
    """简单的问候函数"""
    return f"你好，{name}！"

# 调用函数
message = greet("小明")
print(message)  # 你好，小明！

# 带默认参数值的函数
def create_user(name, age=18, city="北京"):
    """创建用户信息字典，有默认参数"""
    return {
        "name": name,
        "age": age,
        "city": city
    }

# 调用时可选择性提供参数
user1 = create_user("张三")  # 使用默认年龄和城市
user2 = create_user("李四", 25)  # 指定年龄，使用默认城市
user3 = create_user("王五", city="上海")  # 指定城市，使用默认年龄
user4 = create_user("赵六", 30, "广州")  # 指定所有参数

# 关键字参数 (提高可读性)
def calculate_area(length, width):
    return length * width

# 两种调用方式等价
area1 = calculate_area(10, 5)
area2 = calculate_area(width=5, length=10)  # 使用关键字参数，顺序无关

# 可变参数
# *args: 接收任意数量的位置参数，作为元组
def sum_all(*numbers):
    """计算任意数量数字的和"""
    total = 0
    for num in numbers:
        total += num
    return total

print(sum_all(1, 2, 3))       # 6
print(sum_all(10, 20, 30, 40)) # 100

# **kwargs: 接收任意数量的关键字参数，作为字典
def print_info(**kwargs):
    """打印任意键值对信息"""
    for key, value in kwargs.items():
        print(f"{key}: {value}")

print_info(name="张三", age=30, job="工程师")
# 输出:
# name: 张三
# age: 30
# job: 工程师

# 同时使用 *args 和 **kwargs
def log_message(level, *messages, **metadata):
    """记录带有元数据的消息"""
    timestamp = metadata.get("timestamp", "2023-01-01")
    user = metadata.get("user", "system")
    
    log_entry = f"[{timestamp}] [{level}] User: {user}\n"
    log_entry += "\n".join(messages)
    
    return log_entry

log = log_message(
    "INFO",
    "用户登录成功",
    "IP地址: 192.168.1.100",
    timestamp="2023-06-15 14:30:00",
    user="admin"
)
print(log)
```

### 2.2 函数高级特性

```python
# 匿名函数 (lambda)
# 基本语法: lambda 参数: 表达式
square = lambda x: x ** 2
print(square(5))  # 25

# 在排序中使用
students = [
    {"name": "张三", "score": 85},
    {"name": "李四", "score": 92},
    {"name": "王五", "score": 78}
]

# 按分数排序
sorted_students = sorted(students, key=lambda x: x["score"], reverse=True)
# [{'name':'李四','score':92}, {'name':'张三','score':85}, {'name':'王五','score':78}]

# 在map/filter中使用
numbers = [1, 2, 3, 4, 5]
squares = list(map(lambda x: x ** 2, numbers))  # [1, 4, 9, 16, 25]
evens = list(filter(lambda x: x % 2 == 0, numbers))  # [2, 4]

# 高阶函数 (接收函数作为参数或返回函数)
def apply_operation(func, numbers):
    """对数字列表应用操作函数"""
    return [func(num) for num in numbers]

# 使用不同的操作函数
double = lambda x: x * 2
increment = lambda x: x + 1

doubled = apply_operation(double, [1, 2, 3, 4])  # [2, 4, 6, 8]
incremented = apply_operation(increment, [1, 2, 3, 4])  # [2, 3, 4, 5]

# 函数作为返回值 (闭包)
def create_multiplier(factor):
    """创建一个乘法器函数"""
    def multiplier(x):
        return x * factor
    return multiplier

double = create_multiplier(2)
triple = create_multiplier(3)

print(double(5))  # 10
print(triple(5))  # 15

# 装饰器基础
def timer(func):
    """装饰器：计算函数执行时间"""
    import time
    
    def wrapper(*args, **kwargs):
        start_time = time.time()
        result = func(*args, **kwargs)
        end_time = time.time()
        print(f"{func.__name__} 执行时间: {end_time - start_time:.4f}秒")
        return result
    
    return wrapper

# 使用装饰器
@timer
def slow_function(n):
    """模拟一个耗时操作"""
    total = 0
    for i in range(n):
        total += i
    return total

result = slow_function(1000000)  # 会打印执行时间

# 内置高阶函数
# map() - 将函数应用于可迭代对象的每个元素
numbers = [1, 2, 3, 4, 5]
squared = list(map(lambda x: x**2, numbers))  # [1, 4, 9, 16, 25]

# filter() - 过滤可迭代对象的元素
evens = list(filter(lambda x: x % 2 == 0, numbers))  # [2, 4]

# reduce() - 累积计算 (需要从functools导入)
from functools import reduce
product = reduce(lambda x, y: x * y, numbers)  # 1*2*3*4*5 = 120

# sorted() - 排序
words = ["banana", "apple", "cherry", "date"]
sorted_words = sorted(words)  # ['apple', 'banana', 'cherry', 'date']
sorted_by_length = sorted(words, key=len)  # ['date', 'apple', 'banana', 'cherry']
```

### 2.3 模块与包

```python
# 导入模块
import math  # 导入整个模块
from datetime import datetime  # 从模块导入特定对象
import numpy as np  # 导入并设置别名

# 使用导入的模块
print(math.sqrt(16))  # 4.0
print(datetime.now())  # 当前日期时间
print(np.array([1, 2, 3]))  # NumPy数组

# 创建自己的模块
# 文件: utils.py
def format_currency(amount):
    """格式化金额为货币字符串"""
    return f"¥{amount:.2f}"

def calculate_discount(price, discount_rate):
    """计算折扣后价格"""
    return price * (1 - discount_rate)

# 在另一个文件中使用
# from utils import format_currency, calculate_discount
# print(format_currency(1234.56))  # ¥1234.56
# print(calculate_discount(100, 0.2))  # 80.0

# 包的结构
# mypackage/
# ├── __init__.py
# ├── module1.py
# ├── module2.py
# └── subpackage/
#     ├── __init__.py
#     └── module3.py

# __init__.py 文件使目录成为包
# 可以在其中导入子模块，方便统一访问
# 文件: mypackage/__init__.py
from .module1 import important_function
from .module2 import AnotherClass
# 现在可以这样导入: from mypackage import important_function, AnotherClass

# 模块搜索路径
import sys
print(sys.path)  # Python查找模块的路径列表

# 临时添加路径
sys.path.append('/path/to/your/modules')

# 标准库常用模块
# os - 操作系统接口
import os
current_dir = os.getcwd()  # 获取当前工作目录
files = os.listdir(current_dir)  # 列出目录内容
os.makedirs("new_folder", exist_ok=True)  # 创建目录

# sys - 系统特定参数和函数
print(sys.version)  # Python版本
print(sys.platform)  # 操作系统平台

# time/datetime - 日期和时间
import time
print(time.time())  # 当前时间戳
time.sleep(1)  # 暂停1秒

from datetime import datetime, timedelta
now = datetime.now()
tomorrow = now + timedelta(days=1)
print(now.strftime("%Y-%m-%d %H:%M:%S"))  # 格式化日期

# json - JSON编码解码
import json
data = {"name": "张三", "age": 30}
json_str = json.dumps(data, ensure_ascii=False)  # 转为JSON字符串
loaded_data = json.loads(json_str)  # 从JSON字符串加载

# re - 正则表达式
import re
text = "我的电话号码是 13812345678"
match = re.search(r'\d{11}', text)
if match:
    print("找到电话号码:", match.group())  # 13812345678
```

## 3. 面向对象编程

### 3.1 类与对象基础

```python
# 定义类
class Person:
    """表示一个人的类"""
    
    # 构造函数
    def __init__(self, name, age):
        self.name = name  # 实例属性
        self.age = age
    
    # 实例方法
    def greet(self):
        return f"你好，我叫{self.name}，今年{self.age}岁。"
    
    def have_birthday(self):
        self.age += 1
        return f"{self.name}又长大了一岁，现在{self.age}岁。"

# 创建对象
person1 = Person("张三", 25)
person2 = Person("李四", 30)

# 访问属性和方法
print(person1.name)  # 张三
print(person1.greet())  # 你好，我叫张三，今年25岁。
print(person1.have_birthday())  # 张三又长大了一岁，现在26岁。

# 类属性 (所有实例共享)
class Dog:
    # 类属性 (在__init__外部定义)
    species = "犬科动物"
    
    def __init__(self, name, breed):
        self.name = name
        self.breed = breed  # 品种
    
    def bark(self):
        return f"{self.name}在汪汪叫！"

# 访问类属性
dog1 = Dog("旺财", "金毛")
dog2 = Dog("小黑", "拉布拉多")

print(dog1.species)  # 犬科动物
print(dog2.species)  # 犬科动物
print(Dog.species)   # 犬科动物 (直接通过类访问)

# 修改类属性 (影响所有实例)
Dog.species = "家犬"
print(dog1.species)  # 家犬
print(dog2.species)  # 家犬

# 实例属性与类属性的区别
class Counter:
    # 类属性
    count = 0
    
    def __init__(self, name):
        self.name = name  # 实例属性
        Counter.count += 1  # 每创建一个实例，类属性count增加1
    
    @classmethod
    def get_count(cls):
        """类方法，访问类属性"""
        return cls.count

# 创建实例
c1 = Counter("计数器1")
c2 = Counter("计数器2")
c3 = Counter("计数器3")

print(Counter.get_count())  # 3 (总共创建了3个实例)
print(c1.count)  # 3 (通过实例访问类属性)
print(c2.count)  # 3
print(c3.count)  # 3
```

### 3.2 继承与多态

```python
# 基类 (父类)
class Animal:
    def __init__(self, name):
        self.name = name
    
    def speak(self):
        """基类中的方法，会被子类覆盖"""
        raise NotImplementedError("子类必须实现speak方法")

# 子类 (继承)
class Dog(Animal):
    def speak(self):
        return f"{self.name}说：汪汪！"

class Cat(Animal):
    def speak(self):
        return f"{self.name}说：喵喵！"

class Duck(Animal):
    def speak(self):
        return f"{self.name}说：嘎嘎！"

# 创建对象
animals = [
    Dog("旺财"),
    Cat("咪咪"),
    Duck("唐老鸭")
]

# 多态：不同对象对同一方法的不同实现
for animal in animals:
    print(animal.speak())
# 旺财说：汪汪！
# 咪咪说：喵喵！
# 唐老鸭说：嘎嘎！

# super() 函数 - 调用父类方法
class Bird:
    def __init__(self, name):
        self.name = name
    
    def fly(self):
        return f"{self.name}在天空中飞翔"

class Penguin(Bird):
    def __init__(self, name, weight):
        # 调用父类的__init__方法
        super().__init__(name)
        self.weight = weight
    
    def fly(self):
        # 调用父类的fly方法
        parent_fly = super().fly()
        return f"{parent_fly}，但企鹅{self.name}太重({self.weight}kg)了，实际上不能飞！"

penguin = Penguin("小企", 15)
print(penguin.fly())
# 小企在天空中飞翔，但企鹅小企太重(15kg)了，实际上不能飞！

# 多重继承
class Flyable:
    def fly(self):
        return "我能飞！"

class Swimmable:
    def swim(self):
        return "我能游泳！"

class Duck2(Bird, Flyable, Swimmable):
    """鸭子继承自Bird，同时也具备飞行和游泳能力"""
    pass

donald = Duck2("唐老鸭")
print(donald.fly())  # 从Flyable继承
print(donald.swim())  # 从Swimmable继承
print(donald.name)   # 从Bird继承

# 方法解析顺序 (MRO)
print(Duck2.mro())
# [<class '__main__.Duck2'>, <class '__main__.Bird'>, <class '__main__.Flyable'>, <class '__main__.Swimmable'>, <class 'object'>]
```

### 3.3 特殊方法 (魔术方法)

```python
class Vector:
    """表示二维向量的类"""
    
    def __init__(self, x, y):
        self.x = x
        self.y = y
    
    # 字符串表示
    def __str__(self):
        """对用户友好的字符串表示"""
        return f"Vector({self.x}, {self.y})"
    
    def __repr__(self):
        """对开发者友好的字符串表示，通常包含更多信息"""
        return f"Vector(x={self.x}, y={self.y})"
    
    # 算术运算符
    def __add__(self, other):
        """+ 运算符"""
        if isinstance(other, Vector):
            return Vector(self.x + other.x, self.y + other.y)
        raise TypeError("只能将Vector与Vector相加")
    
    def __sub__(self, other):
        """- 运算符"""
        if isinstance(other, Vector):
            return Vector(self.x - other.x, self.y - other.y)
        raise TypeError("只能将Vector与Vector相减")
    
    def __mul__(self, scalar):
        """* 运算符 (标量乘法)"""
        if isinstance(scalar, (int, float)):
            return Vector(self.x * scalar, self.y * scalar)
        raise TypeError("只能将Vector与标量相乘")
    
    # 比较运算符
    def __eq__(self, other):
        """== 运算符"""
        if isinstance(other, Vector):
            return self.x == other.x and self.y == other.y
        return False
    
    def __lt__(self, other):
        """< 运算符 (比较向量长度)"""
        if isinstance(other, Vector):
            return self.magnitude() < other.magnitude()
        raise TypeError("只能比较两个Vector对象")
    
    # 其他有用的方法
    def magnitude(self):
        """向量的模 (长度)"""
        return (self.x**2 + self.y**2) ** 0.5
    
    def __len__(self):
        """len() 函数支持"""
        return 2  # 二维向量
    
    def __getitem__(self, index):
        """[] 索引访问支持"""
        if index == 0:
            return self.x
        elif index == 1:
            return self.y
        else:
            raise IndexError("Vector索引只能是0或1")
    
    def __setitem__(self, index, value):
        """[] 索引赋值支持"""
        if index == 0:
            self.x = value
        elif index == 1:
            self.y = value
        else:
            raise IndexError("Vector索引只能是0或1")
    
    # 上下文管理器支持
    def __enter__(self):
        print(f"进入上下文: {self}")
        return self
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        print(f"退出上下文: {self}")
        if exc_type is not None:
            print(f"捕获到异常: {exc_type}: {exc_val}")
        return False  # 不抑制异常

# 使用Vector类
v1 = Vector(3, 4)
v2 = Vector(1, 2)

print(str(v1))  # Vector(3, 4)
print(repr(v1))  # Vector(x=3, y=4)

v3 = v1 + v2  # Vector(4, 6)
v4 = v1 - v2  # Vector(2, 2)
v5 = v1 * 2   # Vector(6, 8)

print(v1 == Vector(3, 4))  # True
print(v1 < v2)  # False (因为v1.length=5, v2.length≈2.24)

print(len(v1))  # 2
print(v1[0])   # 3
v1[1] = 5
print(v1)      # Vector(3, 5)

# 上下文管理器用法
with Vector(10, 20) as v:
    print(f"在上下文中: {v}")
    # 可以在这里执行操作
    # raise ValueError("测试异常")  # 取消注释会触发异常处理
```

### 3.4 高级OOP概念

```python
# 属性 (Property) - 控制属性访问
class Temperature:
    def __init__(self, celsius):
        self._celsius = celsius  # 使用下划线表示内部/私有属性
    
    @property
    def celsius(self):
        """获取摄氏温度"""
        return self._celsius
    
    @celsius.setter
    def celsius(self, value):
        """设置摄氏温度，带验证"""
        if value < -273.15:
            raise ValueError("温度不能低于绝对零度")
        self._celsius = value
    
    @property
    def fahrenheit(self):
        """获取华氏温度 (只读属性)"""
        return self._celsius * 9/5 + 32
    
    @fahrenheit.setter
    def fahrenheit(self, value):
        """设置华氏温度，自动转换为摄氏"""
        self.celsius = (value - 32) * 5/9

# 使用属性
temp = Temperature(25)
print(temp.celsius)  # 25
print(temp.fahrenheit)  # 77.0

temp.celsius = 30
print(temp.fahrenheit)  # 86.0

temp.fahrenheit = 100
print(temp.celsius)  # 37.777...

# 静态方法和类方法
class MathUtils:
    @staticmethod
    def add(a, b):
        """静态方法：不需要访问类或实例属性"""
        return a + b
    
    @classmethod
    def from_string(cls, num_str):
        """类方法：接收类作为第一个参数，可以访问类属性或创建实例"""
        return float(num_str.replace(",", ""))

# 使用
print(MathUtils.add(3, 5))  # 8
print(MathUtils.from_string("1,234.56"))  # 1234.56

# 抽象基类 (ABC)
from abc import ABC, abstractmethod

class Shape(ABC):
    """抽象基类：定义形状接口"""
    
    @abstractmethod
    def area(self):
        """计算面积 (必须在子类中实现)"""
        pass
    
    @abstractmethod
    def perimeter(self):
        """计算周长 (必须在子类中实现)"""
        pass
    
    def describe(self):
        """具体方法，所有子类继承"""
        return f"这个形状的面积是{self.area():.2f}，周长是{self.perimeter():.2f}"

class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height
    
    def area(self):
        return self.width * self.height
    
    def perimeter(self):
        return 2 * (self.width + self.height)

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius
    
    def area(self):
        import math
        return math.pi * self.radius ** 2
    
    def perimeter(self):
        import math
        return 2 * math.pi * self.radius

# 使用
rect = Rectangle(5, 3)
circle = Circle(4)

print(rect.describe())  # 这个形状的面积是15.00，周长是16.00
print(circle.describe())  # 这个形状的面积是50.27，周长是25.13

# 尝试实例化抽象基类 (会失败)
# shape = Shape()  # TypeError: Can't instantiate abstract class Shape with abstract methods area, perimeter

# 数据类 (Python 3.7+)
from dataclasses import dataclass, field
from typing import List

@dataclass
class Product:
    """使用dataclass简化类定义"""
    name: str
    price: float
    quantity: int = 1  # 默认值
    categories: List[str] = field(default_factory=list)  # 可变默认值
    
    def total_value(self) -> float:
        return self.price * self.quantity

# 使用
product1 = Product("笔记本电脑", 8999.0, 2, ["电子产品", "办公用品"])
product2 = Product("鼠标", 199.0)

print(product1)  # Product(name='笔记本电脑', price=8999.0, quantity=2, categories=['电子产品', '办公用品'])
print(product2)  # Product(name='鼠标', price=199.0, quantity=1, categories=[])
print(product1.total_value())  # 17998.0

# dataclass自动提供__init__, __repr__, __eq__等方法
product3 = Product("鼠标", 199.0)
print(product2 == product3)  # True (值相等)
```

## 4. 异常处理与文件操作

### 4.1 异常处理

```python
# 基本try-except结构
try:
    # 可能引发异常的代码
    num = int(input("请输入一个整数: "))
    result = 10 / num
    print(f"10除以{num}等于{result}")
except ValueError:
    # 处理ValueError (例如输入非数字)
    print("错误：请输入有效的整数")
except ZeroDivisionError:
    # 处理ZeroDivisionError (例如除以零)
    print("错误：不能除以零")
except Exception as e:
    # 捕获其他所有异常
    print(f"发生未知错误: {e}")
else:
    # 没有异常时执行
    print("计算成功完成")
finally:
    # 无论是否发生异常都会执行
    print("程序执行完毕")

# 捕获多个异常
try:
    # 代码可能引发多种异常
    file = open("nonexistent_file.txt", "r")
    content = file.read()
    num = int("abc")
except (FileNotFoundError, PermissionError) as e:
    print(f"文件错误: {e}")
except ValueError as e:
    print(f"值错误: {e}")

# 自定义异常
class InvalidAgeError(ValueError):
    """自定义异常：无效年龄"""
    pass

class InvalidNameError(ValueError):
    """自定义异常：无效姓名"""
    pass

def validate_user(name, age):
    """验证用户信息"""
    if not name or not name.strip():
        raise InvalidNameError("姓名不能为空")
    if not name.replace(" ", "").isalpha():
        raise InvalidNameError("姓名只能包含字母和空格")
    if age < 0:
        raise InvalidAgeError("年龄不能为负数")
    if age > 120:
        raise InvalidAgeError("年龄不能超过120岁")
    return True

# 使用自定义异常
try:
    validate_user("张三123", 25)  # 无效姓名
except InvalidNameError as e:
    print(f"姓名验证失败: {e}")
except InvalidAgeError as e:
    print(f"年龄验证失败: {e}")

# 异常链
def process_data(data):
    try:
        # 模拟处理数据
        if not data:
            raise ValueError("没有提供数据")
        return [x * 2 for x in data]
    except Exception as e:
        # 重新抛出异常，保留原始异常信息
        raise RuntimeError("数据处理失败") from e

try:
    result = process_data([])
except Exception as e:
    print(f"捕获到异常: {e}")
    print(f"原始异常: {e.__cause__}")

# 上下文管理器处理异常
class ExceptionHandler:
    """上下文管理器，处理特定异常"""
    
    def __init__(self, exceptions=(Exception,), handler=None):
        self.exceptions = exceptions
        self.handler = handler or self.default_handler
    
    def default_handler(self, exc_type, exc_val, exc_tb):
        print(f"捕获到异常 {exc_type.__name__}: {exc_val}")
        return True  # 抑制异常 (不传播)
    
    def __enter__(self):
        return self
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        if exc_type is not None and issubclass(exc_type, self.exceptions):
            return self.handler(exc_type, exc_val, exc_tb)
        return False  # 不抑制异常

# 使用
with ExceptionHandler(exceptions=(ValueError, ZeroDivisionError)):
    num = int("abc")  # 这会触发ValueError，但被上下文管理器处理

with ExceptionHandler(exceptions=(FileNotFoundError,), 
                     handler=lambda t, v, tb: print(f"文件未找到: {v}")):
    open("missing.txt")  # 这会触发FileNotFoundError，但被处理
```

### 4.2 文件操作

```python
# 基本文件操作
# 写入文件
with open("example.txt", "w", encoding="utf-8") as file:
    file.write("Hello, World!\n")
    file.write("这是第二行文本。\n")
    file.write("第三行：Python文件操作演示。\n")

# 读取整个文件
with open("example.txt", "r", encoding="utf-8") as file:
    content = file.read()
    print("文件内容:")
    print(content)

# 逐行读取
with open("example.txt", "r", encoding="utf-8") as file:
    print("逐行读取:")
    for line in file:
        print(line.strip())  # strip()移除行尾换行符

# 读取所有行到列表
with open("example.txt", "r", encoding="utf-8") as file:
    lines = file.readlines()
    print("行列表:", lines)
    # ['Hello, World!\n', '这是第二行文本。\n', '第三行：Python文件操作演示。\n']

# 移动文件指针
with open("example.txt", "r", encoding="utf-8") as file:
    # 读取前10个字符
    first_part = file.read(10)
    print("前10个字符:", first_part)
    
    # 获取当前位置
    position = file.tell()
    print(f"当前位置: {position}字节")
    
    # 移动到文件开头
    file.seek(0)
    print("回到开头后读取:", file.readline().strip())

# 二进制文件操作
# 写入二进制数据
data = bytes([65, 66, 67, 68, 69])  # ASCII A-E
with open("binary.bin", "wb") as file:
    file.write(data)

# 读取二进制数据
with open("binary.bin", "rb") as file:
    binary_content = file.read()
    print("二进制内容:", binary_content)  # b'ABCDE'
    print("转换为列表:", list(binary_content))  # [65, 66, 67, 68, 69]

# CSV文件操作
import csv

# 写入CSV
data = [
    ["姓名", "年龄", "城市"],
    ["张三", 25, "北京"],
    ["李四", 30, "上海"],
    ["王五", 28, "广州"]
]

with open("people.csv", "w", newline="", encoding="utf-8-sig") as csvfile:
    writer = csv.writer(csvfile)
    writer.writerows(data)

# 读取CSV
with open("people.csv", "r", encoding="utf-8-sig") as csvfile:
    reader = csv.reader(csvfile)
    for row in reader:
        print(row)

# 使用DictReader/DictWriter处理带标题的CSV
with open("people.csv", "r", encoding="utf-8-sig") as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
        print(f"{row['姓名']}住在{row['城市']}，今年{row['年龄']}岁")

# JSON文件操作
import json

# 写入JSON
person = {
    "name": "张三",
    "age": 25,
    "city": "北京",
    "skills": ["Python", "JavaScript", "SQL"],
    "married": False
}

with open("person.json", "w", encoding="utf-8") as jsonfile:
    json.dump(person, jsonfile, ensure_ascii=False, indent=2)

# 读取JSON
with open("person.json", "r", encoding="utf-8") as jsonfile:
    loaded_person = json.load(jsonfile)
    print("加载的JSON数据:", loaded_person)

# 处理大文件 (逐块读取)
def process_large_file(filename, chunk_size=1024):
    """处理大文件，避免内存溢出"""
    with open(filename, "r", encoding="utf-8") as file:
        while True:
            chunk = file.read(chunk_size)
            if not chunk:
                break
            # 处理数据块
            process_chunk(chunk)

def process_chunk(chunk):
    """处理数据块 (示例函数)"""
    # 实际处理逻辑
    print(f"处理了{len(chunk)}个字符的块")
```

## 5. 标准库精华

### 5.1 日期与时间

```python
from datetime import datetime, date, time, timedelta, timezone
import time as time_module
import calendar

# 当前日期和时间
now = datetime.now()
print("当前日期时间:", now)
print("当前日期:", now.date())
print("当前时间:", now.time())

# 创建特定日期时间
specific_date = date(2023, 6, 15)  # 2023年6月15日
specific_time = time(14, 30, 45)  # 14:30:45
specific_datetime = datetime(2023, 6, 15, 14, 30, 45)

# 日期时间格式化
formatted = now.strftime("%Y-%m-%d %H:%M:%S")  # "2023-06-15 14:30:45"
formatted_date = now.strftime("%A, %B %d, %Y")   # "Thursday, June 15, 2023"
formatted_time = now.strftime("%I:%M %p")       # "02:30 PM"

# 从字符串解析日期
date_str = "2023-06-15"
parsed_date = datetime.strptime(date_str, "%Y-%m-%d").date()

datetime_str = "15/06/2023 14:30:00"
parsed_datetime = datetime.strptime(datetime_str, "%d/%m/%Y %H:%M:%S")

# 日期时间计算
tomorrow = now + timedelta(days=1)
yesterday = now - timedelta(days=1)
next_week = now + timedelta(weeks=1)
three_hours_later = now + timedelta(hours=3)

# 时区处理
utc_now = datetime.now(timezone.utc)
print("UTC时间:", utc_now)

# 创建带时区的时间
from zoneinfo import ZoneInfo  # Python 3.9+
bj_time = datetime.now(ZoneInfo("Asia/Shanghai"))
ny_time = datetime.now(ZoneInfo("America/New_York"))

# 计算时间差
start_time = datetime.now()
# 模拟一些操作
time_module.sleep(1.5)
end_time = datetime.now()

time_diff = end_time - start_time
print(f"操作耗时: {time_diff.total_seconds():.2f}秒")

# 日历功能
cal = calendar.month(2023, 6)  # 2023年6月的日历
print(cal)
"""
      June 2023
Mo Tu We Th Fr Sa Su
          1  2  3  4
 5  6  7  8  9 10 11
12 13 14 15 16 17 18
19 20 21 22 23 24 25
26 27 28 29 30
"""

# 检查闰年
is_leap = calendar.isleap(2024)  # True
print(f"2024年是闰年吗? {is_leap}")

# 获取一个月的天数
days_in_month = calendar.monthrange(2023, 2)  # (2, 28) - 2023年2月有28天，1号是星期三(2)
print(f"2023年2月有{days_in_month[1]}天")
```

### 5.2 正则表达式

```python
import re

# 基本匹配
text = "我的邮箱是 user@example.com，电话是 13812345678"
pattern = r"\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b"
match = re.search(pattern, text)

if match:
    print("找到邮箱:", match.group())  # user@example.com

# 多个匹配
phone_pattern = r"1[3-9]\d{9}"  # 中国大陆手机号
matches = re.findall(phone_pattern, text)
print("找到的电话号码:", matches)  # ['13812345678']

# 替换
masked_text = re.sub(phone_pattern, "138****5678", text)
print("脱敏后的文本:", masked_text)
# 我的邮箱是 user@example.com，电话是 138****5678

# 分组
url_pattern = r"(https?://)?(www\.)?([a-zA-Z0-9-]+)\.([a-z]{2,})(/.*)?"
url = "https://www.example.com/path/to/page?query=123"
match = re.search(url_pattern, url)

if match:
    print("完整匹配:", match.group(0))  # https://www.example.com/path/to/page?query=123
    print("协议:", match.group(1))     # https://
    print("www:", match.group(2))      # www.
    print("域名:", match.group(3))     # example
    print("顶级域名:", match.group(4))  # com
    print("路径:", match.group(5))     # /path/to/page?query=123

# 预编译模式 (提高效率)
email_pattern = re.compile(r"\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b")
text1 = "联系我: alice@example.com"
text2 = "发送到: bob@test.org"

print(email_pattern.findall(text1))  # ['alice@example.com']
print(email_pattern.findall(text2))  # ['bob@test.org']

# 多行模式
multiline_text = """
姓名: 张三
邮箱: zhangsan@example.com
电话: 13800138000

姓名: 李四
邮箱: lisi@example.com
电话: 13900139000
"""

# 使用re.MULTILINE标志
pattern = re.compile(r"姓名: (.+?)\n邮箱: (.+?)\n电话: (.+?)", re.MULTILINE)
matches = pattern.findall(multiline_text)

for name, email, phone in matches:
    print(f"姓名: {name}, 邮箱: {email}, 电话: {phone}")

# Unicode支持
chinese_text = "你好，世界！Hello, World! 12345"
chinese_pattern = r"[\u4e00-\u9fff]+"  # 匹配中文字符
matches = re.findall(chinese_pattern, chinese_text)
print("中文匹配:", matches)  # ['你好', '世界']

# 常用正则表达式模式
# 邮箱: r"\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b"
# 电话(中国大陆): r"1[3-9]\d{9}"
# URL: r"https?://(?:[-\w.]|(?:%[\da-fA-F]{2}))+"
# IP地址: r"\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b"
# 日期(YYYY-MM-DD): r"\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])"
# 身份证号(简化): r"\d{17}[\dXx]"
```

### 5.3 并发与并行

```python
import threading
import multiprocessing
import concurrent.futures
import asyncio
import time
import requests

# 线程 (适用于I/O密集型任务)
def fetch_url(url):
    """获取URL内容"""
    print(f"开始获取: {url}")
    response = requests.get(url, timeout=5)
    print(f"完成获取: {url}, 状态码: {response.status_code}")
    return response.text

urls = [
    "https://example.com",
    "https://httpbin.org/get",
    "https://jsonplaceholder.typicode.com/posts/1"
]

# 1. 使用threading
threads = []
results = {}

def thread_fetch(url):
    results[url] = fetch_url(url)

start_time = time.time()
for url in urls:
    thread = threading.Thread(target=thread_fetch, args=(url,))
    threads.append(thread)
    thread.start()

# 等待所有线程完成
for thread in threads:
    thread.join()

print(f"线程总耗时: {time.time() - start_time:.2f}秒")

# 2. 使用concurrent.futures (更简洁)
start_time = time.time()
with concurrent.futures.ThreadPoolExecutor(max_workers=3) as executor:
    future_to_url = {executor.submit(fetch_url, url): url for url in urls}
    for future in concurrent.futures.as_completed(future_to_url):
        url = future_to_url[future]
        try:
            data = future.result()
            print(f"{url} 获取成功，长度: {len(data)}")
        except Exception as exc:
            print(f"{url} 生成异常: {exc}")

print(f"ThreadPoolExecutor总耗时: {time.time() - start_time:.2f}秒")

# 进程 (适用于CPU密集型任务)
def cpu_intensive_task(n):
    """CPU密集型任务：计算大数的和"""
    print(f"开始计算 {n} 项")
    total = sum(i * i for i in range(n))
    print(f"完成计算 {n} 项")
    return total

numbers = [10000000, 20000000, 30000000]

# 1. 使用multiprocessing
processes = []
results = []

def process_task(n):
    results.append(cpu_intensive_task(n))

start_time = time.time()
for n in numbers:
    process = multiprocessing.Process(target=process_task, args=(n,))
    processes.append(process)
    process.start()

# 等待所有进程完成
for process in processes:
    process.join()

print(f"进程总耗时: {time.time() - start_time:.2f}秒")
print("进程结果:", results)  # 注意：进程间内存不共享，这样无法获取结果

# 2. 使用multiprocessing.Pool (更好)
start_time = time.time()
with multiprocessing.Pool(processes=3) as pool:
    results = pool.map(cpu_intensive_task, numbers)

print(f"Pool总耗时: {time.time() - start_time:.2f}秒")
print("Pool结果:", results)

# 3. 使用concurrent.futures.ProcessPoolExecutor
start_time = time.time()
with concurrent.futures.ProcessPoolExecutor(max_workers=3) as executor:
    future_to_num = {executor.submit(cpu_intensive_task, n): n for n in numbers}
    for future in concurrent.futures.as_completed(future_to_num):
        n = future_to_num[future]
        try:
            result = future.result()
            print(f"任务 {n} 完成，结果: {result}")
        except Exception as exc:
            print(f"任务 {n} 生成异常: {exc}")

print(f"ProcessPoolExecutor总耗时: {time.time() - start_time:.2f}秒")

# 异步IO (asyncio) - Python 3.5+
async def async_fetch_url(session, url):
    """异步获取URL内容"""
    print(f"开始异步获取: {url}")
    async with session.get(url) as response:
        text = await response.text()
        print(f"完成异步获取: {url}, 状态码: {response.status}")
        return text

async def async_main():
    import aiohttp
    
    async with aiohttp.ClientSession() as session:
        tasks = [async_fetch_url(session, url) for url in urls]
        results = await asyncio.gather(*tasks)
        return results

start_time = time.time()
async_results = asyncio.run(async_main())
print(f"异步IO总耗时: {time.time() - start_time:.2f}秒")

# 混合使用 - 实际应用中的模式
# 例如：Web爬虫同时使用线程池(网络请求)和进程池(数据处理)
def process_data(data):
    """处理获取到的数据 (CPU密集型)"""
    # 模拟数据处理
    time.sleep(0.1)
    return len(data)

def mixed_task(url):
    """混合任务：获取URL内容，然后处理"""
    content = fetch_url(url)
    result = process_data(content)
    return result

# 主函数：使用线程池获取数据，然后使用进程池处理
def mixed_approach():
    start_time = time.time()
    
    # 步骤1: 使用线程池获取所有URL内容
    with concurrent.futures.ThreadPoolExecutor(max_workers=3) as thread_executor:
        futures = [thread_executor.submit(fetch_url, url) for url in urls]
        contents = [future.result() for future in concurrent.futures.as_completed(futures)]
    
    print(f"获取数据完成，耗时: {time.time() - start_time:.2f}秒")
    
    # 步骤2: 使用进程池处理数据
    with concurrent.futures.ProcessPoolExecutor(max_workers=3) as process_executor:
        futures = [process_executor.submit(process_data, content) for content in contents]
        results = [future.result() for future in concurrent.futures.as_completed(futures)]
    
    print(f"混合任务总耗时: {time.time() - start_time:.2f}秒")
    return results

mixed_results = mixed_approach()
```

## 6. 现代Python最佳实践

### 6.1 虚拟环境与依赖管理

```bash
# 创建虚拟环境
python -m venv .venv

# 激活虚拟环境
# Windows (cmd):
.venv\Scripts\activate
# Windows (PowerShell):
.venv\Scripts\Activate.ps1
# Linux/macOS:
source .venv/bin/activate

# 验证激活
(.venv) $ which python
# /path/to/project/.venv/bin/python

# 安装包
pip install requests pandas numpy

# 生成依赖列表
pip freeze > requirements.txt

# 从依赖列表安装
pip install -r requirements.txt

# 现代方式: pyproject.toml (PEP 621)
# [project]
# name = "my-project"
# version = "0.1.0"
# dependencies = [
#     "requests>=2.31.0",
#     "pandas>=2.0.0",
#     "numpy>=1.24.0"
# ]
# [project.optional-dependencies]
# dev = ["pytest", "black", "mypy"]

# 安装项目及其依赖
pip install .

# 仅安装开发依赖
pip install ".[dev]"
```

### 6.2 代码风格与静态检查

```python
# PEP 8 风格指南示例
import os
import sys
from datetime import datetime
from typing import List, Dict, Union, Optional, Any, Tuple

import requests
import pandas as pd

# 常量 (全大写+下划线)
MAX_RETRIES = 3
DEFAULT_TIMEOUT = 5.0
LOG_FILE = "application.log"

class DataProcessor:
    """处理数据的类"""
    
    def __init__(self, source: str, output_dir: str = "output") -> None:
        """
        初始化数据处理器
        
        Args:
            source: 数据源路径
            output_dir: 输出目录，默认为"output"
        """
        self.source = source
        self.output_dir = output_dir
        os.makedirs(output_dir, exist_ok=True)
    
    def load_data(self) -> pd.DataFrame:
        """加载数据"""
        try:
            if self.source.endswith(".csv"):
                return pd.read_csv(self.source)
            elif self.source.endswith(".json"):
                return pd.read_json(self.source)
            else:
                raise ValueError(f"不支持的文件格式: {self.source}")
        except Exception as e:
            print(f"加载数据失败: {e}")
            raise
    
    def process(
        self, 
        columns: Optional[List[str]] = None,
        filter_condition: Optional[Dict[str, Any]] = None
    ) -> pd.DataFrame:
        """
        处理数据
        
        Args:
            columns: 要保留的列名列表，None表示保留所有列
            filter_condition: 过滤条件，格式为{column: value}
        
        Returns:
            处理后的DataFrame
        """
        df = self.load_data()
        
        # 选择列
        if columns:
            df = df[columns]
        
        # 过滤行
        if filter_condition:
            for column, value in filter_condition.items():
                if column in df.columns:
                    df = df[df[column] == value]
        
        return df
    
    def save(self, df: pd.DataFrame, filename: str) -> str:
        """保存处理后的数据"""
        output_path = os.path.join(self.output_dir, filename)
        df.to_csv(output_path, index=False)
        return output_path


# 类型提示示例
def calculate_stats(
    data: List[Union[int, float]],
    weights: Optional[List[float]] = None
) -> Dict[str, float]:
    """计算统计数据"""
    if not data:
        raise ValueError("数据列表不能为空")
    
    total = sum(data)
    count = len(data)
    average = total / count
    
    result = {
        "total": total,
        "count": count,
        "average": average,
        "min": min(data),
        "max": max(data)
    }
    
    # 加权平均
    if weights and len(weights) == count:
        weighted_sum = sum(d * w for d, w in zip(data, weights))
        total_weight = sum(weights)
        result["weighted_average"] = weighted_sum / total_weight
    
    return result


# 错误处理最佳实践
def safe_divide(a: float, b: float) -> Optional[float]:
    """安全除法，处理除零错误"""
    try:
        return a / b
    except ZeroDivisionError:
        print("警告: 除零错误，返回None")
        return None
    except TypeError:
        print("警告: 类型错误，参数必须是数字")
        return None
    except Exception as e:
        print(f"未知错误: {e}")
        return None


# 上下文管理器最佳实践
from contextlib import contextmanager

@contextmanager
def managed_resource(resource_id: str):
    """安全管理资源的上下文管理器"""
    print(f"获取资源: {resource_id}")
    resource = {"id": resource_id, "status": "active"}
    
    try:
        yield resource
    except Exception as e:
        print(f"资源 {resource_id} 处理时出错: {e}")
        raise
    finally:
        print(f"释放资源: {resource_id}")
        resource["status"] = "released"


# 使用
if __name__ == "__main__":
    try:
        processor = DataProcessor("data.csv")
        filtered_data = processor.process(
            columns=["name", "age", "city"],
            filter_condition={"city": "北京"}
        )
        output_file = processor.save(filtered_data, "beijing_users.csv")
        print(f"处理完成，结果保存至: {output_file}")
        
        with managed_resource("database_connection") as db:
            # 使用数据库连接
            print(f"使用资源: {db}")
            # 模拟操作
            if "error" in db["id"]:
                raise ValueError("模拟错误")
    
    except Exception as e:
        print(f"主程序出错: {e}")
        sys.exit(1)
```

### 6.3 测试与调试

```python
# test_calculator.py
import pytest
from unittest.mock import patch, MagicMock
from calculator import add, subtract, multiply, divide, Calculator

class TestBasicOperations:
    """测试基本数学运算"""
    
    def test_add(self):
        """测试加法"""
        assert add(2, 3) == 5
        assert add(-1, 1) == 0
        assert add(0, 0) == 0
    
    def test_subtract(self):
        """测试减法"""
        assert subtract(5, 3) == 2
        assert subtract(0, 5) == -5
        assert subtract(-1, -1) == 0
    
    def test_multiply(self):
        """测试乘法"""
        assert multiply(2, 3) == 6
        assert multiply(-2, 3) == -6
        assert multiply(0, 5) == 0
    
    def test_divide(self):
        """测试除法"""
        assert divide(6, 3) == 2
        assert divide(5, 2) == 2.5
        assert divide(-6, 2) == -3
        
        # 测试除零错误
        with pytest.raises(ValueError, match="不能除以零"):
            divide(5, 0)

class TestCalculatorClass:
    """测试Calculator类"""
    
    def setup_method(self):
        """每个测试方法前运行"""
        self.calc = Calculator()
    
    def test_calculator_add(self):
        """测试Calculator的add方法"""
        assert self.calc.add(2, 3) == 5
    
    def test_calculator_history(self):
        """测试操作历史"""
        self.calc.add(2, 3)
        self.calc.subtract(5, 2)
        
        history = self.calc.get_history()
        assert len(history) == 2
        assert history[0]["operation"] == "add"
        assert history[0]["result"] == 5
        assert history[1]["operation"] == "subtract"
        assert history[1]["result"] == 3
    
    @patch('calculator.requests.get')
    def test_calculator_fetch_data(self, mock_get):
        """测试使用mock的网络请求"""
        # 配置mock
        mock_response = MagicMock()
        mock_response.json.return_value = {"result": 42}
        mock_get.return_value = mock_response
        
        # 调用方法
        result = self.calc.fetch_data(1)
        
        # 验证结果
        assert result == 42
        
        # 验证mock被正确调用
        mock_get.assert_called_once_with("https://api.example.com/data/1")

# conftest.py (共享fixture)
import pytest
import tempfile
import os

@pytest.fixture
def temp_file():
    """创建临时文件的fixture"""
    with tempfile.NamedTemporaryFile(delete=False) as f:
        f.write(b"测试内容")
        file_path = f.name
    
    yield file_path
    
    # 清理
    os.unlink(file_path)

@pytest.fixture
def sample_data():
    """提供示例数据的fixture"""
    return [
        {"name": "张三", "age": 25, "city": "北京"},
        {"name": "李四", "age": 30, "city": "上海"},
        {"name": "王五", "age": 28, "city": "广州"}
    ]

# test_file_operations.py
def test_read_file(temp_file):
    """使用fixture测试文件读取"""
    with open(temp_file, 'r', encoding='utf-8') as f:
        content = f.read()
    assert content == "测试内容"

def test_process_data(sample_data):
    """使用fixture测试数据处理"""
    names = [item["name"] for item in sample_data]
    assert names == ["张三", "李四", "王五"]
    
    avg_age = sum(item["age"] for item in sample_data) / len(sample_data)
    assert avg_age == 27.666666666666668

# 调试技巧
# 1. 使用logging
import logging

logging.basicConfig(
    level=logging.DEBUG,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler("debug.log"),
        logging.StreamHandler()
    ]
)

logger = logging.getLogger(__name__)

def complex_function(x, y):
    logger.debug(f"开始执行，参数: x={x}, y={y}")
    result = x * y
    logger.debug(f"计算结果: {result}")
    return result

# 2. 使用pdb (Python调试器)
def debug_me():
    a = 5
    b = 10
    import pdb; pdb.set_trace()  # 程序会在此暂停，进入交互式调试
    c = a + b
    return c

# 3. 使用装饰器跟踪函数执行
from functools import wraps
import time

def trace(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        args_repr = [repr(a) for a in args]
        kwargs_repr = [f"{k}={v!r}" for k, v in kwargs.items()]
        signature = ", ".join(args_repr + kwargs_repr)
        logger.debug(f"调用 {func.__name__}({signature})")
        
        start_time = time.time()
        result = func(*args, **kwargs)
        end_time = time.time()
        
        logger.debug(f"{func.__name__} 返回 {result!r}，耗时 {end_time - start_time:.4f}秒")
        return result
    return wrapper

@trace
def slow_operation(n):
    time.sleep(n)
    return n * 2

# 4. 内存分析
import tracemalloc

tracemalloc.start()

# ... 执行代码 ...

snapshot = tracemalloc.take_snapshot()
top_stats = snapshot.statistics('lineno')

print("[ 顶部10行内存使用 ]")
for stat in top_stats[:10]:
    print(stat)
```

## 7. Web开发基础

```python
# Flask示例 (轻量级Web框架)
from flask import Flask, request, jsonify, render_template
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///blog.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

# 模型定义
class Post(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    content = db.Column(db.Text, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    
    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'content': self.content,
            'created_at': self.created_at.isoformat()
        }

# 创建数据库表
with app.app_context():
    db.create_all()

# 路由
@app.route('/')
def home():
    posts = Post.query.order_by(Post.created_at.desc()).all()
    return render_template('index.html', posts=posts)

@app.route('/api/posts', methods=['GET'])
def get_posts():
    posts = Post.query.order_by(Post.created_at.desc()).all()
    return jsonify([post.to_dict() for post in posts])

@app.route('/api/posts', methods=['POST'])
def create_post():
    data = request.get_json()
    
    if not data or 'title' not in data or 'content' not in data:
        return jsonify({'error': '标题和内容是必需的'}), 400
    
    post = Post(title=data['title'], content=data['content'])
    db.session.add(post)
    db.session.commit()
    
    return jsonify(post.to_dict()), 201

@app.route('/api/posts/<int:post_id>', methods=['GET'])
def get_post(post_id):
    post = Post.query.get_or_404(post_id)
    return jsonify(post.to_dict())

@app.route('/api/posts/<int:post_id>', methods=['PUT'])
def update_post(post_id):
    post = Post.query.get_or_404(post_id)
    data = request.get_json()
    
    if 'title' in data:
        post.title = data['title']
    if 'content' in data:
        post.content = data['content']
    
    db.session.commit()
    return jsonify(post.to_dict())

@app.route('/api/posts/<int:post_id>', methods=['DELETE'])
def delete_post(post_id):
    post = Post.query.get_or_404(post_id)
    db.session.delete(post)
    db.session.commit()
    return '', 204

# 错误处理
@app.errorhandler(404)
def not_found_error(error):
    return jsonify({'error': '未找到资源'}), 404

@app.errorhandler(500)
def internal_error(error):
    db.session.rollback()
    return jsonify({'error': '内部服务器错误'}), 500

if __name__ == '__main__':
    app.run(debug=True)

# Django风格视图示例 (功能视图)
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods
from .models import Product
import json

@csrf_exempt
@require_http_methods(["GET", "POST"])
def product_list(request):
    if request.method == 'GET':
        products = Product.objects.all()
        data = [{
            'id': p.id,
            'name': p.name,
            'price': str(p.price),
            'stock': p.stock
        } for p in products]
        return JsonResponse(data, safe=False)
    
    elif request.method == 'POST':
        try:
            data = json.loads(request.body)
            product = Product.objects.create(
                name=data['name'],
                price=data['price'],
                stock=data.get('stock', 0)
            )
            return JsonResponse({
                'id': product.id,
                'name': product.name,
                'price': str(product.price),
                'stock': product.stock
            }, status=201)
        except (KeyError, json.JSONDecodeError) as e:
            return JsonResponse({'error': str(e)}, status=400)

# FastAPI示例 (现代、异步)
from fastapi import FastAPI, HTTPException, Depends
from pydantic import BaseModel
from typing import List, Optional
from sqlalchemy import create_engine, Column, Integer, String, Float
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, Session

app = FastAPI()

# 数据库设置
SQLALCHEMY_DATABASE_URL = "sqlite:///./test.db"
engine = create_engine(SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False})
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

# 模型
class ItemDB(Base):
    __tablename__ = "items"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    description = Column(String, nullable=True)
    price = Column(Float)
    tax = Column(Float, nullable=True)

Base.metadata.create_all(bind=engine)

# Pydantic模型
class ItemBase(BaseModel):
    name: str
    description: Optional[str] = None
    price: float
    tax: Optional[float] = None

class ItemCreate(ItemBase):
    pass

class Item(ItemBase):
    id: int
    
    class Config:
        orm_mode = True

# 依赖项
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# 路由
@app.post("/items/", response_model=Item)
async def create_item(item: ItemCreate, db: Session = Depends(get_db)):
    db_item = ItemDB(**item.dict())
    db.add(db_item)
    db.commit()
    db.refresh(db_item)
    return db_item

@app.get("/items/", response_model=List[Item])
async def read_items(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    items = db.query(ItemDB).offset(skip).limit(limit).all()
    return items

@app.get("/items/{item_id}", response_model=Item)
async def read_item(item_id: int, db: Session = Depends(get_db)):
    db_item = db.query(ItemDB).filter(ItemDB.id == item_id).first()
    if db_item is None:
        raise HTTPException(status_code=404, detail="Item not found")
    return db_item

# 异步HTTP客户端
import httpx

async def fetch_data(url: str) -> dict:
    async with httpx.AsyncClient() as client:
        response = await client.get(url)
        response.raise_for_status()
        return response.json()

@app.get("/external-data")
async def get_external_data():
    data = await fetch_data("https://api.example.com/data")
    return data
```

## 8. 数据科学基础

```python
# NumPy基础
import numpy as np

# 创建数组
arr1 = np.array([1, 2, 3, 4, 5])
arr2 = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
zeros = np.zeros((3, 4))  # 3x4零矩阵
ones = np.ones((2, 3))   # 2x3全1矩阵
identity = np.eye(3)     # 3x3单位矩阵
random_arr = np.random.rand(3, 3)  # 3x3随机矩阵(0-1)
range_arr = np.arange(0, 10, 2)    # [0, 2, 4, 6, 8]
linspace = np.linspace(0, 1, 5)    # [0.0, 0.25, 0.5, 0.75, 1.0]

# 数组属性
print("形状:", arr2.shape)  # (3, 3)
print("维度:", arr2.ndim)   # 2
print("元素总数:", arr2.size)  # 9
print("数据类型:", arr2.dtype)  # int64

# 数组操作
# 索引和切片
print(arr2[0, 1])  # 2
print(arr2[1, :])   # [4, 5, 6]
print(arr2[:, 2])   # [3, 6, 9]
print(arr2[1:3, 0:2])  # [[4,5], [7,8]]

# 重塑
reshaped = arr2.reshape(1, 9)  # 1x9矩阵
flattened = arr2.flatten()     # 一维数组 [1,2,3,4,5,6,7,8,9]

# 合并
arr3 = np.array([10, 11, 12])
horizontal_stack = np.hstack((arr1, arr3))  # 水平堆叠
vertical_stack = np.vstack((arr1, arr3))    # 垂直堆叠

# 数学运算
a = np.array([1, 2, 3])
b = np.array([4, 5, 6])

print(a + b)  # [5, 7, 9]
print(a - b)  # [-3, -3, -3]
print(a * b)  # [4, 10, 18]
print(a / b)  # [0.25, 0.4, 0.5]
print(np.dot(a, b))  # 32 (点积)

# 聚合函数
print(np.sum(arr2))  # 45
print(np.mean(arr2))  # 5.0
print(np.median(arr2))  # 5.0
print(np.std(arr2))  # 标准差
print(np.min(arr2), np.max(arr2))  # 1, 9

# Pandas基础
import pandas as pd

# 创建DataFrame
data = {
    '姓名': ['张三', '李四', '王五', '赵六'],
    '年龄': [25, 30, 28, 35],
    '城市': ['北京', '上海', '广州', '深圳'],
    '工资': [15000, 20000, 18000, 25000]
}
df = pd.DataFrame(data)

# 从CSV读取
# df = pd.read_csv('data.csv')

# 基本信息
print(df.head())  # 前5行
print(df.info())  # 列信息
print(df.describe())  # 统计摘要

# 选择数据
# 按列
names = df['姓名']
ages_cities = df[['年龄', '城市']]

# 按行
first_row = df.iloc[0]  # 第一行
subset = df.iloc[1:3]   # 第2-3行

# 条件筛选
beijing_people = df[df['城市'] == '北京']
high_salary = df[df['工资'] > 20000]
young_people = df[(df['年龄'] < 30) & (df['工资'] > 15000)]

# 添加/删除列
df['税后工资'] = df['工资'] * 0.8
df['工作年限'] = [2, 5, 3, 8]

# 删除列
df = df.drop('工作年限', axis=1)

# 分组和聚合
avg_salary_by_city = df.groupby('城市')['工资'].mean()
count_by_age = df.groupby('年龄').size()

# 处理缺失值
df['奖金'] = [5000, None, 3000, 8000]
df['奖金'] = df['奖金'].fillna(df['奖金'].mean())  # 用均值填充

# 合并数据
df2 = pd.DataFrame({
    '姓名': ['张三', '李四', '王五', '钱七'],
    '部门': ['技术', '市场', '产品', '设计']
})
merged = pd.merge(df, df2, on='姓名', how='left')  # 左连接

# 数据可视化
import matplotlib.pyplot as plt
import seaborn as sns

# 设置样式
sns.set(style="whitegrid")

# 直方图
plt.figure(figsize=(10, 6))
sns.histplot(df['工资'], bins=5, kde=True)
plt.title('工资分布')
plt.xlabel('工资')
plt.ylabel('人数')
plt.savefig('salary_distribution.png')
plt.close()

# 箱线图
plt.figure(figsize=(10, 6))
sns.boxplot(x='城市', y='工资', data=df)
plt.title('各城市工资分布')
plt.savefig('city_salary_boxplot.png')
plt.close()

# 散点图
plt.figure(figsize=(10, 6))
sns.scatterplot(x='年龄', y='工资', hue='城市', data=df, s=100)
plt.title('年龄与工资关系')
plt.savefig('age_salary_scatter.png')
plt.close()

# 热力图 (相关性)
plt.figure(figsize=(10, 8))
corr = df[['年龄', '工资', '奖金']].corr()
sns.heatmap(corr, annot=True, cmap='coolwarm', vmin=-1, vmax=1)
plt.title('变量相关性')
plt.savefig('correlation_heatmap.png')
plt.close()

# 机器学习入门 (scikit-learn)
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error, r2_score
from sklearn.preprocessing import StandardScaler

# 准备数据 (预测工资)
X = df[['年龄']]  # 特征
y = df['工资']    # 目标

# 分割训练集和测试集
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# 特征缩放
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# 创建和训练模型
model = LinearRegression()
model.fit(X_train_scaled, y_train)

# 预测
y_pred = model.predict(X_test_scaled)

# 评估
mse = mean_squared_error(y_test, y_pred)
r2 = r2_score(y_test, y_pred)

print(f"均方误差: {mse:.2f}")
print(f"R²分数: {r2:.2f}")

# 可视化结果
plt.figure(figsize=(10, 6))
plt.scatter(X_test, y_test, color='blue', label='实际值')
plt.scatter(X_test, y_pred, color='red', label='预测值')
plt.plot(X_test, y_pred, color='green', linewidth=2, label='回归线')
plt.title('工资预测')
plt.xlabel('年龄')
plt.ylabel('工资')
plt.legend()
plt.savefig('regression_result.png')
plt.close()

# 保存模型
import joblib
joblib.dump(model, 'salary_prediction_model.pkl')

# 加载模型
loaded_model = joblib.load('salary_prediction_model.pkl')
```

## 9. 实战项目：简易博客系统

```python
# blog_system.py
import sqlite3
from datetime import datetime
import os
from typing import List, Dict, Optional, Any
import json

class BlogSystem:
    """简易博客系统"""
    
    def __init__(self, db_path: str = "blog.db"):
        """初始化博客系统"""
        self.db_path = db_path
        self._initialize_database()
    
    def _initialize_database(self):
        """初始化数据库和表"""
        with sqlite3.connect(self.db_path) as conn:
            cursor = conn.cursor()
            
            # 创建文章表
            cursor.execute('''
            CREATE TABLE IF NOT EXISTS posts (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                title TEXT NOT NULL,
                content TEXT NOT NULL,
                author TEXT NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
            ''')
            
            # 创建评论表
            cursor.execute('''
            CREATE TABLE IF NOT EXISTS comments (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                post_id INTEGER NOT NULL,
                author TEXT NOT NULL,
                content TEXT NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (post_id) REFERENCES posts (id)
            )
            ''')
            
            conn.commit()
    
    def create_post(self, title: str, content: str, author: str) -> Dict[str, Any]:
        """创建新文章"""
        created
```