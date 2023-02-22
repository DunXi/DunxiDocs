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

