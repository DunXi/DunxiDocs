# Go语言

## 1. Go语言介绍
- **特点**：静态类型、编译型、并发支持、垃圾回收、简洁语法
- **优势**：高性能、简单易学、标准库丰富、跨平台编译
- **应用场景**：后端服务、云原生、微服务、CLI工具、网络编程

## 2. 环境安装
### 安装步骤
```bash
# macOS
brew install go

# Linux
sudo apt-get install golang

# Windows
# 从 https://golang.org/dl/ 下载安装包
```

```bash
go version
go env
```

### 项目结构

```
project/
├── main.go
├── go.mod
├── pkg/
│   └── ...
└── cmd/
    └── ...
```

### 常用命令

```bash
go build -o app        # 编译
go run main.go         # 运行
go mod init project    # 初始化模块
go get package         # 安装包
go test                # 运行测试
```

## 3. 变量定义

### 基本语法

```go
// 完整声明
var name string = "Go"
var age int = 12

// 类型推断
var isCool = true
shortName := "Golang"  // 简短声明（仅在函数内可用）

// 批量声明
var (
    a int = 1
    b string = "two"
    c bool
)
```

### 常量

```go
const Pi = 3.14159
const (
    Monday = iota + 1  // 1
    Tuesday            // 2
    Wednesday          // 3
)
```

### 注意事项

- 简短声明 `:=` 只能在函数内部使用
- 变量必须使用，否则编译报错
- 首字母大写表示导出（public），小写为私有（private）

## 4. 输入输出

### 标准输出

```go
package main

import "fmt"

func main() {
    fmt.Println("Hello World")       // 自动换行
    fmt.Print("Hello ")              // 不换行
    fmt.Printf("Value: %d\n", 42)    // 格式化输出
    
    name := "Go"
    age := 12
    fmt.Printf("Name: %s, Age: %d\n", name, age)
}
```

### 标准输入

```go
package main

import (
    "bufio"
    "fmt"
    "os"
    "strings"
)

func main() {
    // 简单输入（空格分隔）
    var name string
    fmt.Print("Enter your name: ")
    fmt.Scan(&name)
    fmt.Println("Hello,", name)
    
    // 读取整行（带空格）
    reader := bufio.NewReader(os.Stdin)
    fmt.Print("Enter a sentence: ")
    text, _ := reader.ReadString('\n')
    text = strings.TrimSpace(text)
    fmt.Println("You entered:", text)
}
```

## 5. 基本数据类型

### 数值类型

```go
// 整型
var i8 int8 = 127       // -128 to 127
var u8 uint8 = 255      // 0 to 255
var i int = 42          // 通常为 int32 或 int64
var bigInt int64 = 9223372036854775807

// 浮点型
var f32 float32 = 3.1415926
var f64 float64 = 3.141592653589793238 // 默认类型

// 复数
var c1 complex64 = 1 + 2i
var c2 complex128 = 3 + 4i
```

### 字符串与布尔

```go
// 字符串（UTF-8编码）
str := "Hello 世界"
empty := ""
multi := `This is a
multi-line
string`

// 布尔
isTrue := true
isFalse := false
```

### 类型转换

```go
var i int = 42
var f float64 = float64(i)  // int to float64
var u uint = uint(f)        // float64 to uint (会截断小数部分)

// 字符串转换
str := "42"
num, _ := strconv.Atoi(str)  // string to int
str2 := strconv.Itoa(num)    // int to string
```

## 6. 数组和切片

### 数组

```go
// 固定长度，值类型
var arr [3]int
arr[0] = 1
arr[1] = 2
arr[2] = 3

// 初始化
arr1 := [3]int{1, 2, 3}
arr2 := [...]int{1, 2, 3, 4, 5}  // 编译器计算长度

// 多维数组
matrix := [2][3]int{
    {1, 2, 3},
    {4, 5, 6},
}
```

### 切片

```go
// 动态长度，引用类型
s := []int{1, 2, 3}  // 无长度指定
s2 := make([]int, 3) // 长度为3，容量为3
s3 := make([]int, 3, 5) // 长度为3，容量为5

// 从数组或切片创建
arr := [5]int{1, 2, 3, 4, 5}
slice := arr[1:3]  // [2, 3]，长度=2，容量=4

// 常用操作
s = append(s, 4)          // 追加元素
s = append(s, 5, 6, 7)    // 追加多个
s = append(s, s2...)      // 追加另一个切片
len(s)                    // 长度
cap(s)                    // 容量

// 切片操作
s = s[1:3]    // 从索引1到3（不含3）
s = s[:2]     // 从开头到索引2
s = s[1:]     // 从索引1到结尾
s = s[:]      // 整个切片
```

### 遍历

```go
// for循环
for i := 0; i < len(s); i++ {
    fmt.Println(s[i])
}

// range（推荐）
for index, value := range s {
    fmt.Printf("Index: %d, Value: %d\n", index, value)
}

// 只需要值
for _, value := range s {
    fmt.Println(value)
}
```

## 7. Map

### 基本操作

```go
// 创建map
m := make(map[string]int)
m2 := map[string]string{
    "name": "Go",
    "type": "language",
}

// 赋值与访问
m["version"] = 1.18
fmt.Println(m["version"])

// 检查key是否存在
value, exists := m["version"]
if exists {
    fmt.Println("Version exists:", value)
}

// 删除key
delete(m, "version")

// 遍历map
for key, value := range m {
    fmt.Printf("Key: %s, Value: %d\n", key, value)
}
```

### 嵌套Map

```go
nested := map[string]map[string]int{
    "scores": {
        "math": 90,
        "english": 85,
    },
}

fmt.Println(nested["scores"]["math"])
```

### 注意事项

- map是引用类型，nil map不能赋值，必须初始化
- map无序，每次遍历顺序可能不同
- map不是并发安全的

## 8. If语句

### 基本语法

```go
// 基本if
if x > 10 {
    fmt.Println("x is greater than 10")
}

// 带初始化语句的if
if y := 20; y > 15 {
    fmt.Println("y is greater than 15")
}

// if-else
if x > 10 {
    fmt.Println("x is big")
} else {
    fmt.Println("x is small")
}

// if-else if-else
if score >= 90 {
    grade = "A"
} else if score >= 80 {
    grade = "B"
} else if score >= 70 {
    grade = "C"
} else {
    grade = "D"
}
```

### 特点

- 条件表达式不需要括号
- 必须使用大括号，即使只有一行代码
- 初始化语句中定义的变量只在if块内有效

## 9. Switch语句

### 基本用法

```go
// 基本switch
switch os := runtime.GOOS; os {
case "darwin":
    fmt.Println("Mac OS")
case "linux":
    fmt.Println("Linux")
case "windows":
    fmt.Println("Windows")
default:
    fmt.Printf("Other OS: %s\n", os)
}

// 无条件switch（替代if-else链）
score := 85
switch {
case score >= 90:
    fmt.Println("A")
case score >= 80:
    fmt.Println("B")
case score >= 70:
    fmt.Println("C")
default:
    fmt.Println("D")
}

// 多值case
num := 2
switch num {
case 1, 3, 5, 7, 9:
    fmt.Println("Odd")
case 2, 4, 6, 8, 10:
    fmt.Println("Even")
}
```

### 特点

- 不需要break语句，Go自动在case末尾break
- 可以使用fallthrough强制执行下一个case
- case表达式可以是任意类型，不限于常量

## 10. For循环

### 基本形式

```go
// 传统for循环
for i := 0; i < 10; i++ {
    fmt.Println(i)
}

// 无限循环
for {
    fmt.Println("Infinite loop")
    break // 需要break退出
}

// while替代
sum := 0
for sum < 100 {
    sum += 10
}
```

### 遍历集合

```go
// 数组/切片
slice := []string{"a", "b", "c"}
for i, v := range slice {
    fmt.Printf("Index: %d, Value: %s\n", i, v)
}

// map
m := map[string]int{"a": 1, "b": 2}
for k, v := range m {
    fmt.Printf("Key: %s, Value: %d\n", k, v)
}

// 字符串（按Unicode码点）
str := "Hello 世界"
for i, r := range str {
    fmt.Printf("Index: %d, Rune: %c\n", i, r)
}
```

### 特点

- Go只有for一种循环结构，没有while和do-while
- range返回索引和值，不需要len()函数
- 可以使用_忽略不需要的值：`for _, v := range slice`

## 11. Break和Continue

### 基本用法

```go
// break - 退出循环
for i := 0; i < 10; i++ {
    if i == 5 {
        break // 退出整个循环
    }
    fmt.Println(i) // 输出 0 1 2 3 4
}

// continue - 跳过当前迭代
for i := 0; i < 10; i++ {
    if i%2 == 0 {
        continue // 跳过偶数
    }
    fmt.Println(i) // 输出 1 3 5 7 9
}
```

### 标签化break/continue

```go
// 多层循环跳出
outer:
for i := 0; i < 3; i++ {
    for j := 0; j < 3; j++ {
        if i == 1 && j == 1 {
            break outer // 跳出外层循环
        }
        fmt.Printf("i=%d, j=%d\n", i, j)
    }
}

// 标签化continue
rowLoop:
for row := 0; row < 3; row++ {
    for col := 0; col < 3; col++ {
        if row == 1 && col == 1 {
            continue rowLoop // 跳过当前行的剩余列
        }
        fmt.Printf("(%d,%d) ", row, col)
    }
    fmt.Println()
}
```

## 12. 函数

### 基本定义

```go
// 基本函数
func greet(name string) string {
    return "Hello, " + name
}

// 多返回值
func divide(a, b float64) (float64, error) {
    if b == 0 {
        return 0, errors.New("division by zero")
    }
    return a / b, nil
}

// 命名返回值
func split(sum int) (x, y int) {
    x = sum * 4 / 9
    y = sum - x
    return // 自动返回x和y
}
```

### 函数作为值

```go
// 函数类型
type Operation func(int, int) int

// 作为参数
func apply(op Operation, a, b int) int {
    return op(a, b)
}

// 作为返回值
func getMultiplier(factor int) func(int) int {
    return func(x int) int {
        return x * factor
    }
}

// 使用
add := func(a, b int) int { return a + b }
result := apply(add, 3, 4) // 7

double := getMultiplier(2)
fmt.Println(double(5)) // 10
```

### 匿名函数与闭包

```go
// 匿名函数
func() {
    fmt.Println("Anonymous function")
}()

// 闭包 - 捕获外部变量
func counter() func() int {
    count := 0
    return func() int {
        count++
        return count
    }
}

c := counter()
fmt.Println(c()) // 1
fmt.Println(c()) // 2
```

## 13. 值传递和引用传递

### 值传递

```go
func modifyValue(x int) {
    x = 100 // 修改的是副本，不影响原始值
}

func main() {
    a := 10
    modifyValue(a)
    fmt.Println(a) // 仍然为10
}
```

### 引用传递（指针）

```go
func modifyPointer(x *int) {
    *x = 100 // 通过指针修改原始值
}

func main() {
    a := 10
    modifyPointer(&a)
    fmt.Println(a) // 100
}
```

### 引用类型（切片、map、channel）

```go
// 切片 - 修改元素影响原始切片
func modifySlice(s []int) {
    s[0] = 99
}

// 但重新分配不影响原始切片
func reassignSlice(s []int) {
    s = []int{4, 5, 6} // 创建新切片，不影响原始
}

// map - 修改内容影响原始map
func modifyMap(m map[string]int) {
    m["new"] = 42
}
```

### 关键区别

- **值类型**：int, float, bool, string, array, struct
- **引用类型**：slice, map, channel, pointer, function
- Go中所有参数传递都是**值传递**，但引用类型传递的是指针的副本

## 14. Init函数和Defer函数

### Init函数

```go
package main

import "fmt"

func init() {
    // 包初始化函数
    fmt.Println("Package initialized")
}

func main() {
    fmt.Println("Main function")
}

// 执行顺序：
// 1. 所有import的包的init()
// 2. 本包的init()
// 3. main()
```

### Defer函数

```go
func readFile(filename string) {
    file, err := os.Open(filename)
    if err != nil {
        log.Fatal(err)
    }
    defer file.Close() // 确保文件关闭，即使发生错误
    
    // 读取文件内容...
}

// 多个defer执行顺序 - LIFO（后进先出）
func example() {
    defer fmt.Println("First defer")
    defer fmt.Println("Second defer")
    fmt.Println("Function body")
    // 输出:
    // Function body
    // Second defer
    // First defer
}

// defer与返回值
func increment(x int) (result int) {
    defer func() {
        result++ // 修改命名返回值
    }()
    return x
}
fmt.Println(increment(5)) // 6
```

### 用途

- **init()**：初始化包变量，注册组件，设置全局状态
- **defer**：资源清理（文件、锁、连接），panic恢复，记录执行时间

## 15. 结构体

### 基本定义

```go
// 声明结构体
type Person struct {
    Name string
    Age  int
    City string
}

// 创建实例
p1 := Person{"Alice", 30, "New York"}
p2 := Person{Name: "Bob", Age: 25} // 部分字段
p3 := new(Person) // 返回指针 *Person

// 访问字段
fmt.Println(p1.Name)
p1.Age = 31

// 结构体指针
p4 := &Person{"Charlie", 40, "London"}
fmt.Println(p4.City)
p4.Age = 41 // Go自动解引用：(*p4).Age 等同于 p4.Age
```

### 方法

```go
// 值接收者
func (p Person) greet() string {
    return "Hello, my name is " + p.Name
}

// 指针接收者（可修改结构体）
func (p *Person) birthday() {
    p.Age++
}

// 使用
p := Person{Name: "Alice", Age: 30}
fmt.Println(p.greet()) // Hello, my name is Alice
p.birthday()
fmt.Println(p.Age) // 31
```

### 嵌套结构体

```go
type Address struct {
    Street string
    City   string
    Zip    string
}

type Employee struct {
    Person  // 匿名字段（嵌入）
    ID      string
    Company string
    Address // 嵌入
}

e := Employee{
    Person: Person{Name: "Alice", Age: 30},
    ID: "E123",
    Company: "ABC Corp",
    Address: Address{Street: "123 Main St", City: "NYC", Zip: "10001"},
}

// 访问嵌入字段
fmt.Println(e.Name)     // 通过Person嵌入
fmt.Println(e.Street)   // 通过Address嵌入
```

## 16. 结构体（继承和结构体指针）

### 模拟继承（组合）

```go
// 基础结构体
type Animal struct {
    Name string
}

func (a Animal) Speak() string {
    return "..."
}

// "子类"结构体
type Dog struct {
    Animal // 嵌入Animal
    Breed  string
}

// 重写方法
func (d Dog) Speak() string {
    return "Woof!"
}

// 使用
dog := Dog{
    Animal: Animal{Name: "Buddy"},
    Breed: "Golden Retriever",
}
fmt.Println(dog.Name)   // Buddy (从Animal继承)
fmt.Println(dog.Speak()) // Woof! (重写)
```

### 结构体指针用途

```go
// 1. 避免大结构体复制
func processLargeStruct(s *LargeStruct) {
    // 修改s而不复制整个结构体
}

// 2. 允许方法修改结构体
type Counter struct {
    count int
}

func (c *Counter) increment() {
    c.count++ // 修改原始结构体
}

// 3. 表示可选字段
type Config struct {
    MaxConnections *int // nil表示使用默认值
}

// 4. 实现接口（有时需要指针接收者）
type Stringer interface {
    String() string
}

func (p *Person) String() string {
    return fmt.Sprintf("%s (%d)", p.Name, p.Age)
}
```

### 值接收者 vs 指针接收者

```go
type Rectangle struct {
    Width, Height float64
}

// 值接收者 - 不修改结构体
func (r Rectangle) Area() float64 {
    return r.Width * r.Height
}

// 指针接收者 - 修改结构体
func (r *Rectangle) Scale(factor float64) {
    r.Width *= factor
    r.Height *= factor
}

// 一致性规则
// 如果类型T有指针接收者方法，不要对T的值使用值接收者
// 如果类型*T有值接收者方法，不要对*T的指针使用指针接收者
```

## 17. 结构体Tag

### 基本用法

```go
type Person struct {
    Name    string `json:"name" validate:"required"`
    Age     int    `json:"age,omitempty" validate:"min=0,max=120"`
    Email   string `json:"email" validate:"email"`
    Secret  string `json:"-"` // 忽略该字段
}

// 使用反射获取tag
field, ok := reflect.TypeOf(Person{}).FieldByName("Name")
if ok {
    jsonTag := field.Tag.Get("json")    // "name"
    validateTag := field.Tag.Get("validate") // "required"
}
```

### 常见标签用途

```go
// JSON序列化
type User struct {
    ID        int    `json:"id"`
    UserName  string `json:"username"`
    Password  string `json:"-"` // 忽略
}

// 数据库映射（如GORM）
type Product struct {
    ID        uint   `gorm:"primaryKey"`
    Name      string `gorm:"size:255;not null"`
    Price     float64 `gorm:"type:decimal(10,2)"`
}

// 验证（如go-validator）
type RegisterForm struct {
    Username string `validate:"required,min=3,max=20"`
    Email    string `validate:"required,email"`
    Password string `validate:"required,min=8"`
}
```

### 自定义标签解析

```go
func parseTag(tag string) map[string]string {
    result := make(map[string]string)
    parts := strings.Split(tag, ";")
    for _, part := range parts {
        kv := strings.SplitN(part, "=", 2)
        if len(kv) == 2 {
            result[strings.TrimSpace(kv[0])] = strings.TrimSpace(kv[1])
        }
    }
    return result
}

// 使用
type Example struct {
    Field string `custom:"key1=value1; key2=value2"`
}

tag := reflect.TypeOf(Example{}).Field(0).Tag.Get("custom")
params := parseTag(tag)
fmt.Println(params["key1"]) // value1
```

## 18. 自定义类型和类型别名

### 自定义类型

```go
// 基于现有类型创建新类型
type Celsius float64
type Fahrenheit float64
type ID string
type Timestamp int64

// 新类型有自己方法集
func (c Celsius) String() string {
    return fmt.Sprintf("%.1f°C", c)
}

func (f Fahrenheit) String() string {
    return fmt.Sprintf("%.1f°F", f)
}

// 使用
c := Celsius(25.0)
f := Fahrenheit(77.0)
fmt.Println(c, f) // 25.0°C 77.0°F

// 注意：新类型与基础类型不兼容
var temp float64 = 30.0
// c = temp // 错误：不能将float64赋值给Celsius
c = Celsius(temp) // 需要显式转换
```

### 类型别名

```go
// 引入类型别名（Go 1.9+）
type Byte = byte    // 完全等同
type Rune = rune

// 解决包迁移问题
type MyError = errors.Error // 指向同一个类型

// 常见用例
type Context = context.Context
type Logger = log.Logger
```

### 区别

```go
// 自定义类型
type MyInt int        // 新类型
var a MyInt = 10
var b int = 20
// a = b // 错误：类型不匹配

// 类型别名
type YourInt = int    // 同一个类型
var c YourInt = 30
var d int = 40
c = d // 正确：完全兼容

// 方法集区别
type MyString string
func (m MyString) Uppercase() string {
    return strings.ToUpper(string(m))
}

type YourString = string
// 不能为YourString定义方法，因为它就是string
```

### 实际应用

```go
// 避免基本类型冲突
type UserID int
type ProductID int

func getUser(id UserID) { /*...*/ }
func getProduct(id ProductID) { /*...*/ }

// 类型安全
func process(value interface{}) {
    switch v := value.(type) {
    case Celsius:
        fmt.Println("Temperature:", v)
    case ID:
        fmt.Println("ID:", v)
    }
}
```

## 19. 接口

### 基本概念

```go
// 定义接口
type Shape interface {
    Area() float64
    Perimeter() float64
}

// 实现接口（隐式实现）
type Rectangle struct {
    Width, Height float64
}

func (r Rectangle) Area() float64 {
    return r.Width * r.Height
}

func (r Rectangle) Perimeter() float64 {
    return 2 * (r.Width + r.Height)
}

// 使用接口
func printShapeInfo(s Shape) {
    fmt.Printf("Area: %.2f, Perimeter: %.2f\n", s.Area(), s.Perimeter())
}

rect := Rectangle{3, 4}
printShapeInfo(rect) // Area: 12.00, Perimeter: 14.00
```

### 空接口

```go
// interface{} 可以表示任何类型
func printAnything(v interface{}) {
    fmt.Println(v)
}

printAnything(42)
printAnything("Hello")
printAnything([]int{1, 2, 3})

// 类型断言
var i interface{} = "hello"
s := i.(string) // 断言为string
fmt.Println(s) // hello

// 安全断言
s, ok := i.(string)
if ok {
    fmt.Println("String value:", s)
}

// 类型选择
switch v := i.(type) {
case string:
    fmt.Printf("String: %s\n", v)
case int:
    fmt.Printf("Int: %d\n", v)
default:
    fmt.Printf("Unknown type\n")
}
```

### 接口组合

```go
type Reader interface {
    Read(p []byte) (n int, err error)
}

type Writer interface {
    Write(p []byte) (n int, err error)
}

// 组合接口
type ReadWriter interface {
    Reader
    Writer
}

// 等价于
type ReadWriter interface {
    Read(p []byte) (n int, err error)
    Write(p []byte) (n int, err error)
}
```

### 值接收者 vs 指针接收者

```go
type Counter struct {
    count int
}

// 值接收者方法
func (c Counter) Value() int {
    return c.count
}

// 指针接收者方法
func (c *Counter) Increment() {
    c.count++
}

// 接口实现
type Valuer interface {
    Value() int
}

type Incrementer interface {
    Increment()
}

// 值类型实现Valuer
var c Counter
var v Valuer = c // 正确

// 指针类型实现Incrementer
var i Incrementer = &c // 必须使用指针

// 错误示例
// var i Incrementer = c // 错误：Counter没有实现Incrementer
```

### 实际应用

```go
// 错误处理
type Error interface {
    Error() string
}

// HTTP处理
type Handler interface {
    ServeHTTP(ResponseWriter, *Request)
}

// 标准库中的io.Reader和io.Writer
func Copy(dst Writer, src Reader) (written int64, err error)

// 排序
type Sortable interface {
    Len() int
    Less(i, j int) bool
    Swap(i, j int)
}
```

## 20. 协程(Goroutine)

### 基本用法

```go
// 启动协程
go func() {
    fmt.Println("Running in background")
}()

// 带参数的协程
go func(msg string) {
    fmt.Println(msg)
}("Hello from goroutine")

// 协程与主程序
func main() {
    go say("world")
    say("hello") // 主协程执行
}

func say(s string) {
    for i := 0; i < 5; i++ {
        time.Sleep(100 * time.Millisecond)
        fmt.Println(s)
    }
}
// 输出:
// hello
// world
// hello
// world
// ...
```

### 协程生命周期

```go
// 主程序退出，所有协程终止
func main() {
    go func() {
        for i := 0; ; i++ {
            fmt.Println("Background:", i)
            time.Sleep(time.Second)
        }
    }()
    time.Sleep(3 * time.Second) // 等待3秒
    fmt.Println("Main exiting")
    // 3秒后主程序退出，后台协程终止
}
```

### 同步机制

```go
// 使用WaitGroup等待协程完成
var wg sync.WaitGroup

func worker(id int) {
    defer wg.Done() // 计数减1
    fmt.Printf("Worker %d starting\n", id)
    time.Sleep(time.Second)
    fmt.Printf("Worker %d done\n", id)
}

func main() {
    for i := 1; i <= 5; i++ {
        wg.Add(1) // 计数加1
        go worker(i)
    }
    wg.Wait() // 等待所有worker完成
    fmt.Println("All workers done")
}
```

### 设计原则

- **不要通过共享内存来通信，而是通过通信来共享内存**
- 协程非常轻量（初始栈大小2KB），可创建成千上万个
- 避免在协程中访问未同步的共享变量

## 21. Channel

### 基本用法

```go
// 创建通道
ch := make(chan int)       // 无缓冲通道
ch2 := make(chan int, 10)  // 有缓冲通道，容量10

// 发送和接收
ch <- 42                  // 发送
x := <-ch                 // 接收
fmt.Println(x)            // 42

// 关闭通道
close(ch)

// 检查通道是否关闭
x, ok := <-ch
if !ok {
    fmt.Println("Channel closed")
}
```

### 模式示例

```go
// 工作池模式
func worker(id int, jobs <-chan int, results chan<- int) {
    for job := range jobs {
        fmt.Printf("Worker %d processing job %d\n", id, job)
        time.Sleep(time.Second) // 模拟工作
        results <- job * 2
    }
}

func main() {
    jobs := make(chan int, 100)
    results := make(chan int, 100)
    
    // 启动3个worker
    for w := 1; w <= 3; w++ {
        go worker(w, jobs, results)
    }
    
    // 发送5个任务
    for j := 1; j <= 5; j++ {
        jobs <- j
    }
    close(jobs) // 关闭jobs通道，通知workers停止
    
    // 收集结果
    for a := 1; a <= 5; a++ {
        <-results
    }
}
```

### 单向通道

```go
// 限制通道使用方向
func sendData(ch chan<- int) { // 只能发送
    ch <- 42
}

func receiveData(ch <-chan int) { // 只能接收
    x := <-ch
    fmt.Println(x)
}

func main() {
    ch := make(chan int)
    go sendData(ch)
    receiveData(ch)
    close(ch)
}
```

### select语句

```go
func main() {
    ch1 := make(chan string)
    ch2 := make(chan string)
    
    go func() {
        time.Sleep(1 * time.Second)
        ch1 <- "one"
    }()
    
    go func() {
        time.Sleep(2 * time.Second)
        ch2 <- "two"
    }()
    
    for i := 0; i < 2; i++ {
        select {
        case msg1 := <-ch1:
            fmt.Println("Received", msg1)
        case msg2 := <-ch2:
            fmt.Println("Received", msg2)
        case <-time.After(3 * time.Second):
            fmt.Println("Timeout")
        }
    }
}
```

## 22. Select与协程超时处理

### Select基础

```go
select {
case x := <-ch1:
    // 处理ch1接收
case y := <-ch2:
    // 处理ch2接收
case ch3 <- z:
    // 向ch3发送
default:
    // 所有通道都不ready时执行
}
```

### 超时处理

```go
// 基本超时
ch := make(chan int)
go func() {
    time.Sleep(2 * time.Second)
    ch <- 42
}()

select {
case val := <-ch:
    fmt.Println("Received:", val)
case <-time.After(1 * time.Second):
    fmt.Println("Timeout after 1 second")
}

// 带取消的超时
func fetchDataWithTimeout(ctx context.Context) (string, error) {
    result := make(chan string)
    
    go func() {
        // 模拟网络请求
        time.Sleep(2 * time.Second)
        result <- "data"
    }()
    
    select {
    case data := <-result:
        return data, nil
    case <-ctx.Done():
        return "", ctx.Err()
    }
}

// 使用
ctx, cancel := context.WithTimeout(context.Background(), 1*time.Second)
defer cancel()
data, err := fetchDataWithTimeout(ctx)
if err != nil {
    fmt.Println("Error:", err) // context deadline exceeded
}
```

### 定时器与心跳

```go
// 周期性执行
ticker := time.NewTicker(500 * time.Millisecond)
done := make(chan bool)

go func() {
    for {
        select {
        case <-done:
            ticker.Stop()
            return
        case t := <-ticker.C:
            fmt.Println("Tick at", t)
        }
    }
}()

time.Sleep(3 * time.Second)
done <- true

// 倒计时
countdown := time.NewTimer(5 * time.Second)
<-countdown.C
fmt.Println("Time's up!")
```

## 23. 线程安全和sync.Map

### 互斥锁

```go
type Counter struct {
    mu    sync.Mutex
    count int
}

func (c *Counter) Increment() {
    c.mu.Lock()
    defer c.mu.Unlock()
    c.count++
}

func (c *Counter) Value() int {
    c.mu.Lock()
    defer c.mu.Unlock()
    return c.count
}
```

### 读写锁

```go
type Cache struct {
    mu   sync.RWMutex
    data map[string]string
}

func (c *Cache) Get(key string) string {
    c.mu.RLock()
    defer c.mu.RUnlock()
    return c.data[key]
}

func (c *Cache) Set(key, value string) {
    c.mu.Lock()
    defer c.mu.Unlock()
    c.data[key] = value
}
```

### sync.Map

```go
// 适用于读多写少场景
var cache sync.Map

// 存储
cache.Store("key1", "value1")

// 读取
val, ok := cache.Load("key1")
if ok {
    fmt.Println(val)
}

// 读取或存储
val, loaded := cache.LoadOrStore("key2", "default")
if loaded {
    fmt.Println("Loaded existing:", val)
} else {
    fmt.Println("Stored new:", val)
}

// 删除
cache.Delete("key1")

// 遍历
cache.Range(func(key, value interface{}) bool {
    fmt.Printf("Key: %v, Value: %v\n", key, value)
    return true // 返回false停止遍历
})
```

### 原子操作

```go
var counter int32

// 原子自增
atomic.AddInt32(&counter, 1)

// 原子加载
current := atomic.LoadInt32(&counter)

// 原子比较并交换
old := counter
new := old + 1
if atomic.CompareAndSwapInt32(&counter, old, new) {
    fmt.Println("Successfully updated")
}
```

### 线程安全集合

```go
// 线程安全切片
type SafeSlice struct {
    mu   sync.Mutex
    data []int
}

func (s *SafeSlice) Append(val int) {
    s.mu.Lock()
    defer s.mu.Unlock()
    s.data = append(s.data, val)
}

// 线程安全队列
type SafeQueue struct {
    mu   sync.Mutex
    data []int
}

func (q *SafeQueue) Enqueue(val int) {
    q.mu.Lock()
    defer q.mu.Unlock()
    q.data = append(q.data, val)
}

func (q *SafeQueue) Dequeue() (int, bool) {
    q.mu.Lock()
    defer q.mu.Unlock()
    if len(q.data) == 0 {
        return 0, false
    }
    val := q.data[0]
    q.data = q.data[1:]
    return val, true
}
```

## 24. 异常处理

### Error接口

```go
type error interface {
    Error() string
}

// 创建错误
err := errors.New("something went wrong")
err = fmt.Errorf("value %d is invalid", x)

// 自定义错误类型
type MyError struct {
    Message string
    Code    int
}

func (e *MyError) Error() string {
    return fmt.Sprintf("%s (code %d)", e.Message, e.Code)
}

// 使用
func doSomething() error {
    return &MyError{"Invalid input", 400}
}
```

### Panic和Recover

```go
// 触发panic
panic("something went terribly wrong")

// 恢复panic
func safeDivide(a, b int) (result int, err error) {
    defer func() {
        if r := recover(); r != nil {
            err = fmt.Errorf("recovered from panic: %v", r)
        }
    }()
    
    result = a / b // 可能除零panic
    return
}

// 使用
res, err := safeDivide(10, 0)
if err != nil {
    fmt.Println("Error:", err)
} else {
    fmt.Println("Result:", res)
}
```

### 错误处理模式

```go
// 1. 直接返回错误
func readFile(filename string) ([]byte, error) {
    data, err := os.ReadFile(filename)
    if err != nil {
        return nil, err
    }
    return data, nil
}

// 2. 错误包装 (Go 1.13+)
func processFile() error {
    _, err := readFile("data.txt")
    if err != nil {
        return fmt.Errorf("failed to process file: %w", err)
    }
    return nil
}

// 3. 检查特定错误
if errors.Is(err, os.ErrNotExist) {
    fmt.Println("File does not exist")
}

// 4. 类型断言检查
var pathError *os.PathError
if errors.As(err, &pathError) {
    fmt.Println("Path error:", pathError.Path)
}
```

### 最佳实践

- 不要忽略错误：`_, _ = someFunc()`
- 早返回模式：先处理错误，再处理正常逻辑
- 错误应该被处理或明确传递给调用者
- 避免过度使用panic，只用于不可恢复的错误
- 使用`%w`包装错误以保留原始错误信息

## 25. 泛型

### 基本语法

```go
// 函数泛型
func PrintSlice[T any](s []T) {
    for _, v := range s {
        fmt.Println(v)
    }
}

// 使用
PrintSlice([]int{1, 2, 3})
PrintSlice([]string{"a", "b", "c"})

// 类型约束
func Sum[T int | float64](a, b T) T {
    return a + b
}

// 结构体泛型
type Stack[T any] struct {
    items []T
}

func (s *Stack[T]) Push(item T) {
    s.items = append(s.items, item)
}

func (s *Stack[T]) Pop() (T, bool) {
    var zero T
    if len(s.items) == 0 {
        return zero, false
    }
    lastIndex := len(s.items) - 1
    item := s.items[lastIndex]
    s.items = s.items[:lastIndex]
    return item, true
}
```

### 类型约束

```go
// 内置约束
import "golang.org/x/exp/constraints"

type Number interface {
    constraints.Integer | constraints.Float
}

// 自定义约束
type Stringer interface {
    String() string
}

// 扩展内置类型
func Max[T constraints.Ordered](a, b T) T {
    if a > b {
        return a
    }
    return b
}

// 多约束
func Merge[T any, S Stringer](a T, b S) string {
    return fmt.Sprintf("%v and %s", a, b.String())
}
```

### 实际应用

```go
// 通用缓存
type Cache[K comparable, V any] struct {
    items map[K]V
    mu    sync.Mutex
}

func (c *Cache[K, V]) Get(key K) (V, bool) {
    c.mu.Lock()
    defer c.mu.Unlock()
    val, ok := c.items[key]
    return val, ok
}

// 通用过滤器
func Filter[T any](s []T, pred func(T) bool) []T {
    result := make([]T, 0)
    for _, v := range s {
        if pred(v) {
            result = append(result, v)
        }
    }
    return result
}
```

### 限制

- 不能在泛型函数中调用类型特有方法（除非在约束中指定）
- 不能将类型参数用作结构体字段类型
- 不能将类型参数用作全局变量类型
- 不能直接实例化类型参数：`var t T`（除非有零值）

## 26. 文件操作-文件读取

### 读取整个文件

```go
// 读取全部内容
data, err := os.ReadFile("file.txt")
if err != nil {
    log.Fatal(err)
}
fmt.Println(string(data))

// 按行读取
file, err := os.Open("file.txt")
if err != nil {
    log.Fatal(err)
}
defer file.Close()

scanner := bufio.NewScanner(file)
for scanner.Scan() {
    line := scanner.Text()
    fmt.Println(line)
}

if err := scanner.Err(); err != nil {
    log.Fatal(err)
}
```

### 读取CSV文件

```go
file, err := os.Open("data.csv")
if err != nil {
    log.Fatal(err)
}
defer file.Close()

reader := csv.NewReader(file)
records, err := reader.ReadAll()
if err != nil {
    log.Fatal(err)
}

for _, record := range records {
    fmt.Println(record)
}
```

### 读取JSON文件

```go
type Person struct {
    Name string `json:"name"`
    Age  int    `json:"age"`
}

file, err := os.Open("data.json")
if err != nil {
    log.Fatal(err)
}
defer file.Close()

var people []Person
decoder := json.NewDecoder(file)
if err := decoder.Decode(&people); err != nil {
    log.Fatal(err)
}

for _, p := range people {
    fmt.Printf("%s is %d years old\n", p.Name, p.Age)
}
```

### 高级读取

```go
// 读取大文件（分块）
func processLargeFile(filename string) error {
    file, err := os.Open(filename)
    if err != nil {
        return err
    }
    defer file.Close()
    
    buffer := make([]byte, 4096) // 4KB块
    for {
        n, err := file.Read(buffer)
        if err == io.EOF {
            break
        }
        if err != nil {
            return err
        }
        // 处理buffer[:n]
        processChunk(buffer[:n])
    }
    return nil
}
```

## 27. 文件操作-文件写入

### 写入文件

```go
// 写入整个内容
err := os.WriteFile("output.txt", []byte("Hello World"), 0644)
if err != nil {
    log.Fatal(err)
}

// 追加内容
file, err := os.OpenFile("log.txt", os.O_APPEND|os.O_CREATE|os.O_WRONLY, 0644)
if err != nil {
    log.Fatal(err)
}
defer file.Close()

if _, err := file.WriteString("New log entry\n"); err != nil {
    log.Fatal(err)
}
```

### 写入CSV文件

```go
file, err := os.Create("output.csv")
if err != nil {
    log.Fatal(err)
}
defer file.Close()

writer := csv.NewWriter(file)
defer writer.Flush()

records := [][]string{
    {"name", "age"},
    {"Alice", "30"},
    {"Bob", "25"},
}

if err := writer.WriteAll(records); err != nil {
    log.Fatal(err)
}
```

### 写入JSON文件

```go
type Product struct {
    ID    string  `json:"id"`
    Name  string  `json:"name"`
    Price float64 `json:"price"`
}

products := []Product{
    {ID: "p1", Name: "Laptop", Price: 999.99},
    {ID: "p2", Name: "Phone", Price: 699.99},
}

file, err := os.Create("products.json")
if err != nil {
    log.Fatal(err)
}
defer file.Close()

encoder := json.NewEncoder(file)
encoder.SetIndent("", "  ") // 格式化输出
if err := encoder.Encode(products); err != nil {
    log.Fatal(err)
}
```

### 高级写入

```go
// 创建临时文件
tempFile, err := os.CreateTemp("", "example-*.txt")
if err != nil {
    log.Fatal(err)
}
defer os.Remove(tempFile.Name()) // 清理

// 写入并复制
content := []byte("Temporary file contents")
if _, err := tempFile.Write(content); err != nil {
    log.Fatal(err)
}

// 复制文件
src, err := os.Open("source.txt")
if err != nil {
    log.Fatal(err)
}
defer src.Close()

dst, err := os.Create("destination.txt")
if err != nil {
    log.Fatal(err)
}
defer dst.Close()

if _, err := io.Copy(dst, src); err != nil {
    log.Fatal(err)
}
```

## 28. 单元测试

### 基本测试

```go
// math.go
package main

func Add(a, b int) int {
    return a + b
}

// math_test.go
package main

import "testing"

func TestAdd(t *testing.T) {
    result := Add(2, 3)
    if result != 5 {
        t.Errorf("Add(2, 3) = %d; want 5", result)
    }
}
```

### 表驱动测试

```go
func TestAdd(t *testing.T) {
    tests := []struct {
        name string
        a, b int
        want int
    }{
        {"positive numbers", 2, 3, 5},
        {"negative numbers", -1, -1, -2},
        {"mixed numbers", -1, 1, 0},
    }
    
    for _, tt := range tests {
        t.Run(tt.name, func(t *testing.T) {
            if got := Add(tt.a, tt.b); got != tt.want {
                t.Errorf("Add(%d, %d) = %d; want %d", tt.a, tt.b, got, tt.want)
            }
        })
    }
}
```

### 基准测试

```go
func BenchmarkAdd(b *testing.B) {
    for i := 0; i < b.N; i++ {
        Add(2, 3)
    }
}

func BenchmarkFib10(b *testing.B) {
    for i := 0; i < b.N; i++ {
        Fib(10)
    }
}
```

### 测试覆盖率

```bash
# 运行测试并生成覆盖率报告
go test -coverprofile=coverage.out
go tool cover -html=coverage.out

# 按包统计
go test -cover ./...
```

### 模拟和存根

```go
type HTTPClient interface {
    Get(url string) (*http.Response, error)
}

type MockHTTPClient struct {
    resp *http.Response
    err  error
}

func (m *MockHTTPClient) Get(url string) (*http.Response, error) {
    return m.resp, m.err
}

func TestGetData(t *testing.T) {
    mockClient := &MockHTTPClient{
        resp: &http.Response{StatusCode: 200},
    }
    
    // 使用mockClient测试依赖HTTPClient的函数
}
```

### 测试辅助函数

```go
func TestMain(m *testing.M) {
    // 在所有测试前执行
    setup()
    
    // 运行测试
    code := m.Run()
    
    // 清理
    teardown()
    
    os.Exit(code)
}

// 临时目录
func TestWithTempDir(t *testing.T) {
    tempDir := t.TempDir()
    // 在tempDir中创建文件/目录
}
```

## 29. 通过反射获取值，修改值

### 基本反射

```go
import "reflect"

// 获取类型和值
var x float64 = 3.4
fmt.Println("Type:", reflect.TypeOf(x)) // float64
fmt.Println("Value:", reflect.ValueOf(x)) // 3.4

// 从接口获取
var i interface{} = 3.4
v := reflect.ValueOf(i)
fmt.Println(v.Type(), v.Float()) // float64 3.4
```

### 获取和设置值

```go
// 获取基本类型值
a := 42
v := reflect.ValueOf(a)
fmt.Println(v.Kind()) // int
fmt.Println(v.Int())  // 42

// 设置值（需要指针）
b := 42
v = reflect.ValueOf(&b).Elem() // 获取指针指向的值
v.SetInt(43)
fmt.Println(b) // 43

// 检查是否可设置
if v.CanSet() {
    v.SetInt(100)
}
```

### 结构体反射

```go
type Person struct {
    Name string
    Age  int
}

p := Person{"Alice", 30}
v := reflect.ValueOf(p)

// 获取字段
nameField := v.Field(0) // 或 v.FieldByName("Name")
fmt.Println(nameField.String()) // Alice

// 设置字段（需要指针）
vp := reflect.ValueOf(&p).Elem()
vp.FieldByName("Age").SetInt(31)
fmt.Println(p.Age) // 31
```

### 函数反射

```go
func Add(a, b int) int {
    return a + b
}

// 获取函数
funcVal := reflect.ValueOf(Add)

// 调用函数
args := []reflect.Value{reflect.ValueOf(2), reflect.ValueOf(3)}
result := funcVal.Call(args)
fmt.Println(result[0].Int()) // 5
```

## 30. 通过反射操作结构体

### 遍历结构体字段

```go
type Config struct {
    Host     string `json:"host" validate:"required"`
    Port     int    `json:"port" validate:"min=1,max=65535"`
    Username string `json:"username"`
    Password string `json:"password" validate:"required"`
}

func printStructFields(s interface{}) {
    v := reflect.ValueOf(s).Elem()
    t := v.Type()
    
    for i := 0; i < v.NumField(); i++ {
        field := v.Field(i)
        fieldType := t.Field(i)
        
        fmt.Printf("Field Name: %s\n", fieldType.Name)
        fmt.Printf("Field Type: %s\n", fieldType.Type)
        fmt.Printf("Field Value: %v\n", field.Interface())
        fmt.Printf("Tag: %s\n", fieldType.Tag.Get("json"))
        fmt.Println("---")
    }
}

// 使用
config := Config{
    Host: "localhost",
    Port: 8080,
}
printStructFields(&config)
```

### 设置结构体字段

```go
func setField(s interface{}, fieldName string, value interface{}) error {
    v := reflect.ValueOf(s).Elem()
    field := v.FieldByName(fieldName)
    
    if !field.IsValid() {
        return fmt.Errorf("no such field: %s", fieldName)
    }
    
    if !field.CanSet() {
        return fmt.Errorf("cannot set field: %s", fieldName)
    }
    
    // 获取value的反射值
    val := reflect.ValueOf(value)
    if field.Type() != val.Type() {
        return fmt.Errorf("wrong type: %s expected %s", val.Type(), field.Type())
    }
    
    field.Set(val)
    return nil
}

// 使用
config := Config{}
err := setField(&config, "Host", "example.com")
if err != nil {
    log.Fatal(err)
}
fmt.Println(config.Host) // example.com
```

### 创建结构体实例

```go
func createInstance(t reflect.Type) reflect.Value {
    // 创建指针
    ptr := reflect.New(t)
    // 获取指针指向的值
    val := ptr.Elem()
    // 初始化字段
    for i := 0; i < val.NumField(); i++ {
        field := val.Field(i)
        if field.CanSet() {
            switch field.Kind() {
            case reflect.String:
                field.SetString("")
            case reflect.Int, reflect.Int8, reflect.Int16, reflect.Int32, reflect.Int64:
                field.SetInt(0)
            case reflect.Bool:
                field.SetBool(false)
            }
        }
    }
    return ptr
}

// 使用
configType := reflect.TypeOf(Config{})
instance := createInstance(configType)
config := instance.Interface().(*Config)
```

## 31. 通过反射实现转sql的小案例

### 结构体转SQL

```go
type Model interface {
    TableName() string
}

func StructToInsertSQL(s interface{}) (string, []interface{}, error) {
    v := reflect.ValueOf(s).Elem()
    t := v.Type()
    
    // 获取表名
    tableName := "unknown"
    if model, ok := s.(Model); ok {
        tableName = model.TableName()
    } else if name := t.Name(); name != "" {
        tableName = strings.ToLower(name) + "s"
    }
    
    // 收集字段和值
    var fields []string
    var values []interface{}
    var placeholders []string
    
    for i := 0; i < v.NumField(); i++ {
        field := v.Field(i)
        fieldType := t.Field(i)
        
        // 跳过零值和私有字段
        if !field.IsValid() || !field.CanInterface() || isZero(field) {
            continue
        }
        
        // 获取字段名（使用tag或字段名）
        dbTag := fieldType.Tag.Get("db")
        fieldName := dbTag
        if dbTag == "" {
            fieldName = strings.ToLower(fieldType.Name)
        }
        
        fields = append(fields, fieldName)
        values = append(values, field.Interface())
        placeholders = append(placeholders, "?")
    }
    
    // 构建SQL
    sql := fmt.Sprintf("INSERT INTO %s (%s) VALUES (%s)",
        tableName,
        strings.Join(fields, ", "),
        strings.Join(placeholders, ", "))
    
    return sql, values, nil
}

// 检查零值
func isZero(v reflect.Value) bool {
    switch v.Kind() {
    case reflect.String:
        return v.Len() == 0
    case reflect.Int, reflect.Int8, reflect.Int16, reflect.Int32, reflect.Int64:
        return v.Int() == 0
    case reflect.Bool:
        return !v.Bool()
    case reflect.Ptr, reflect.Interface:
        return v.IsNil()
    }
    return false
}
```

### 使用示例

```go
type User struct {
    ID        int    `db:"id"`
    Name      string `db:"name"`
    Email     string `db:"email"`
    CreatedAt time.Time
}

func (u User) TableName() string {
    return "users"
}

// 使用
user := User{
    Name:  "Alice",
    Email: "alice@example.com",
    CreatedAt: time.Now(),
}

sql, values, err := StructToInsertSQL(&user)
if err != nil {
    log.Fatal(err)
}

fmt.Println(sql)
// INSERT INTO users (name, email, created_at) VALUES (?, ?, ?)

fmt.Println(values)
// [Alice alice@example.com 2023-05-15 10:30:45 +0000 UTC]
```

### 高级优化

```go
// 缓存类型信息
var typeCache = make(map[reflect.Type]structInfo)
type structInfo struct {
    tableName string
    fields    []fieldInfo
}

type fieldInfo struct {
    name      string
    dbTag     string
    index     []int
}

// 预处理类型
func getStructInfo(t reflect.Type) structInfo {
    // 从缓存获取或创建
}
```

## 32. 网络编程-TCP

### TCP服务器

```go
func main() {
    listener, err := net.Listen("tcp", ":8080")
    if err != nil {
        log.Fatal(err)
    }
    defer listener.Close()
    
    fmt.Println("Server listening on :8080")
    
    for {
        conn, err := listener.Accept()
        if err != nil {
            log.Printf("Error accepting connection: %v", err)
            continue
        }
        
        go handleConnection(conn)
    }
}

func handleConnection(conn net.Conn) {
    defer conn.Close()
    
    buffer := make([]byte, 1024)
    n, err := conn.Read(buffer)
    if err != nil {
        log.Printf("Error reading: %v", err)
        return
    }
    
    message := string(buffer[:n])
    fmt.Printf("Received: %s", message)
    
    response := "Message received: " + message
    _, err = conn.Write([]byte(response))
    if err != nil {
        log.Printf("Error writing: %v", err)
    }
}
```

### TCP客户端

```go
func main() {
    conn, err := net.Dial("tcp", "localhost:8080")
    if err != nil {
        log.Fatal(err)
    }
    defer conn.Close()
    
    _, err = conn.Write([]byte("Hello server!"))
    if err != nil {
        log.Fatal(err)
    }
    
    buffer := make([]byte, 1024)
    n, err := conn.Read(buffer)
    if err != nil {
        log.Fatal(err)
    }
    
    fmt.Println("Server response:", string(buffer[:n]))
}
```

### 并发TCP服务器

```go
type Client struct {
    conn net.Conn
    name string
}

var (
    clients = make(map[*Client]bool)
    mutex   sync.Mutex
)

func broadcast(message string, sender *Client) {
    mutex.Lock()
    defer mutex.Unlock()
    
    for client := range clients {
        if client != sender {
            _, err := client.conn.Write([]byte(message))
            if err != nil {
                delete(clients, client)
                client.conn.Close()
            }
        }
    }
}
```

### 超时处理

```go
// 设置连接超时
conn, err := net.DialTimeout("tcp", "example.com:80", 5*time.Second)

// 设置读写超时
conn.SetReadDeadline(time.Now().Add(10 * time.Second))
conn.SetWriteDeadline(time.Now().Add(10 * time.Second))
```

## 33. 网络编程-HTTP

### HTTP服务器

```go
func helloHandler(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "Hello, World!")
}

func jsonHandler(w http.ResponseWriter, r *http.Request) {
    w.Header().Set("Content-Type", "application/json")
    json.NewEncoder(w).Encode(map[string]string{
        "message": "Hello, JSON!",
    })
}

func main() {
    http.HandleFunc("/", helloHandler)
    http.HandleFunc("/json", jsonHandler)
    
    // 静态文件服务
    fs := http.FileServer(http.Dir("static"))
    http.Handle("/static/", http.StripPrefix("/static/", fs))
    
    fmt.Println("Server starting on :8080")
    log.Fatal(http.ListenAndServe(":8080", nil))
}
```

### HTTP客户端

```go
func main() {
    // 简单GET请求
    resp, err := http.Get("https://api.github.com/users/octocat")
    if err != nil {
        log.Fatal(err)
    }
    defer resp.Body.Close()
    
    body, err := io.ReadAll(resp.Body)
    if err != nil {
        log.Fatal(err)
    }
    
    fmt.Println(string(body))
    
    // POST请求
    data := []byte(`{"title":"Test Post"}`)
    req, err := http.NewRequest("POST", "https://jsonplaceholder.typicode.com/posts", bytes.NewBuffer(data))
    if err != nil {
        log.Fatal(err)
    }
    req.Header.Set("Content-Type", "application/json")
    
    client := &http.Client{}
    resp, err = client.Do(req)
    // ... 处理响应
}
```

### 路由和中间件

```go
// 简单路由
http.HandleFunc("/users", func(w http.ResponseWriter, r *http.Request) {
    if r.Method == "GET" {
        // 处理GET
    } else if r.Method == "POST" {
        // 处理POST
    }
})

// 中间件
func loggingMiddleware(next http.Handler) http.Handler {
    return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
        start := time.Now()
        next.ServeHTTP(w, r)
        duration := time.Since(start)
        log.Printf("%s %s %s", r.Method, r.URL.Path, duration)
    })
}

// 使用
http.Handle("/api/", loggingMiddleware(http.StripPrefix("/api", apiRouter)))
```

### RESTful API

```go
type User struct {
    ID   int    `json:"id"`
    Name string `json:"name"`
}

var users = []User{
    {ID: 1, Name: "Alice"},
    {ID: 2, Name: "Bob"},
}

func getUsers(w http.ResponseWriter, r *http.Request) {
    w.Header().Set("Content-Type", "application/json")
    json.NewEncoder(w).Encode(users)
}

func getUser(w http.ResponseWriter, r *http.Request) {
    params := mux.Vars(r)
    id, _ := strconv.Atoi(params["id"])
    
    for _, user := range users {
        if user.ID == id {
            w.Header().Set("Content-Type", "application/json")
            json.NewEncoder(w).Encode(user)
            return
        }
    }
    
    http.NotFound(w, r)
}

// 使用gorilla/mux路由
router := mux.NewRouter()
router.HandleFunc("/users", getUsers).Methods("GET")
router.HandleFunc("/users/{id}", getUser).Methods("GET")
```

## 34. Go部署

### 编译和部署

```bash
# 编译为当前平台
go build -o myapp

# 交叉编译
GOOS=linux GOARCH=amd64 go build -o myapp-linux
GOOS=darwin GOARCH=arm64 go build -o myapp-mac
GOOS=windows GOARCH=amd64 go build -o myapp.exe

# 去除调试信息（减小体积）
go build -ldflags="-w -s" -o myapp
```

### Docker部署

```dockerfile
# Go应用的Dockerfile
FROM golang:1.20-alpine AS builder

WORKDIR /app
COPY go.mod go.sum ./
RUN go mod download

COPY . .
RUN CGO_ENABLED=0 GOOS=linux go build -ldflags="-w -s" -o myapp

# 运行时镜像
FROM alpine:latest
RUN apk --no-cache add ca-certificates tzdata
WORKDIR /root/

COPY --from=builder /app/myapp .

EXPOSE 8080
CMD ["./myapp"]
```

### systemd服务

```ini
# /etc/systemd/system/myapp.service
[Unit]
Description=My Go Application
After=network.target

[Service]
Type=simple
User=appuser
Group=appgroup
WorkingDirectory=/opt/myapp
ExecStart=/opt/myapp/myapp
Restart=always
RestartSec=5
Environment=PORT=8080

[Install]
WantedBy=multi-user.target
```

### 云部署

```bash
# AWS部署
# 1. 创建EC2实例
# 2. 安装Go环境
# 3. 传输二进制文件
scp myapp ec2-user@ec2-xx-xx-xx-xx.compute-1.amazonaws.com:/home/ec2-user/

# 4. 配置systemd或直接运行
ssh ec2-user@ec2-xx-xx-xx-xx.compute-1.amazonaws.com
./myapp

# Kubernetes部署
kubectl create deployment myapp --image=myapp:latest
kubectl expose deployment myapp --port=8080
kubectl scale deployment myapp --replicas=3
```

### 监控和日志

```go
// 集成Prometheus
import "github.com/prometheus/client_golang/prometheus"

var (
    httpRequestCount = prometheus.NewCounterVec(
        prometheus.CounterOpts{
            Name: "http_requests_total",
            Help: "Total number of HTTP requests",
        },
        []string{"method", "path", "status"},
    )
)

func init() {
    prometheus.MustRegister(httpRequestCount)
}

func metricsHandler(w http.ResponseWriter, r *http.Request) {
    promhttp.Handler().ServeHTTP(w, r)
}

// 日志最佳实践
import "go.uber.org/zap"

logger, _ := zap.NewProduction()
defer logger.Sync()
logger.Info("Server started", zap.Int("port", 8080))
```

### 配置管理

```go
// 使用Viper管理配置
import "github.com/spf13/viper"

func initConfig() {
    viper.SetConfigName("config")
    viper.SetConfigType("yaml")
    viper.AddConfigPath("/etc/myapp/")
    viper.AddConfigPath("$HOME/.myapp")
    viper.AddConfigPath(".")
    
    // 环境变量
    viper.AutomaticEnv()
    
    if err := viper.ReadInConfig(); err != nil {
        log.Fatalf("Error reading config file: %s", err)
    }
}

// 使用
port := viper.GetInt("server.port")
databaseURL := viper.GetString("database.url")
```