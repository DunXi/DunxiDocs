# Solidity

## 开发工具：remix

`	remix`是以太坊官方推荐的智能合约开发IDE（集成开发环境），适合新手，可以在浏览器中快速部署测试智能合约，你不需要在本地安装任何程序。

网址：[remix.ethereum.org](https://remix.ethereum.org/)

进入`remix`，我们可以看到最左边的菜单有三个按钮，分别对应文件（写代码的地方），编译（跑代码），部署（部署到链上）。我们点新建（`Create New File`）按钮，就可以创建一个空白的`solidity`合约。

![remix](https://www.wtf.academy/assets/images/1-1-59ec4df354181363259759212e42dad1.png)

## 第一个Solidity程序

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;
contract HelloWeb3{
    string public _string = "Hello Web3!";
}
```

我们拆开分析，学习solidity代码源文件的结构：

1. 第1行是注释，会写一下这个代码所用的软件许可（license），这里用的是MIT license。如果不写许可，编译时会警告（warning），但程序可以运行。solidity的注释由“//”开头，后面跟注释的内容（不会被程序运行）。

```solidity
// SPDX-License-Identifier: MIT
```



1. 第2行声明源文件所用的solidity版本，因为不同版本语法有差别。这行代码意思是源文件将不允许小于 0.8.4 版本或大于等于 0.9.0 版本的编译器编译（第二个条件由`^`提供）。Solidity 语句以分号（;）结尾。

```solidity
pragma solidity ^0.8.4;
```



1. 第3-4行是合约部分，第3行创建合约（contract），并声明合约的名字 HelloWeb3。第4行是合约的内容，我们声明了一个string（字符串）变量_string，并给他赋值 “Hello Web3!”。

```solidity
contract HelloWeb3{
    string public _string = "Hello Web3!";
}
```



## 编译并部署代码

在编辑代码的页面，按ctrl+S就可以编译代码，非常方便。

编译好之后，点击左侧菜单的“部署”按钮，进入部署页面。

![img](https://www.wtf.academy/assets/images/1-2-e3548890cecc06c795a172d811ccc0e6.png)

在默认情况下，remix会用JS虚拟机来模拟以太坊链，运行智能合约，类似在浏览器里跑一条测试链。并且remix会分配几个测试账户给你，每个里面有100 ETH（测试代币），可劲儿用。你点Deploy（黄色按钮），就可以部署咱们写好的合约了。

![img](https://www.wtf.academy/assets/images/1-3-7efd0f70cd17c437f6ec29fc6d28c0d6.png)

部署成功后，你会在下面看到名为`HelloWeb3`的合约，点击`_string`，就能看到我们代码中写的 “Hello Web3!” 了。



## Gas费

你需要支付多少以太币来进行一次交易？ 你需要支付 gas 消耗量 * gas 价格 的以太币，其中：

gas 是计算单位\

gas 消耗量是交易中使用的总 gas 数量\

gas 价格是你愿意支付的每单位 gas 的以太币\

具有更高 gas 价格的交易具有更高的优先级被包含在区块中。
未使用的 gas 将被退还。

燃气限制
你可以花费的 gas 有两个上限\

- gas 限制（你为交易设置的最大 gas 量）\
- 区块 gas 限制（网络设置的区块中允许的最大 gas 量）

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract Gas {
uint public i = 0;

  // 使用完你发送的所有 gas 会导致你的交易失败。
  // 状态更改被撤销。
  // 花费的 gas 不会被退还。
  function forever() public {
      // 在这里，我们运行一个循环直到花费所有的 gas
      // 交易失败
      while (true) {
          i += 1;
      }
  }
}
```



代码术语解释：

- gas：以太坊中的计算单位。
- gas spent：在交易中使用的 gas 总数。
- gas price：为每单位 gas 所支付的以太币数量。
- gas limit：交易中可使用的最大 gas 数量，由用户设置。
- 区块 gas 限制：每个区块中允许的最大 gas 数量，由网络设置。



### Solidity中的变量类型

1. **数值类型(Value Type)**：包括布尔型，整数型等等，这类变量赋值时候直接传递数值。
2. **引用类型(Reference Type)**：包括数组和结构体，这类变量占空间大，赋值时候直接传递地址（类似指针）。
3. **映射类型(Mapping Type)**: `Solidity`里的哈希表。
4. **函数类型(Function Type)**：`Solidity`文档里把函数归到数值类型，但我觉得他跟其他类型差别很大，所以单独分一类。

我们只介绍一些常用的类型，不常用的不讲。这篇介绍数值类型，第3讲介绍函数类型，第4讲介绍引用和映射。



## 数值类型

### 1. 布尔型

布尔型是二值变量，取值为`true`或`false`。

```solidity
    // 布尔值
    bool public _bool = true;
```



布尔值的运算符，包括：

- ! （逻辑非）
- && （逻辑与， "and" ）
- || （逻辑或， "or" ）
- == （等于）
- != （不等于）

代码：

```solidity
    // 布尔运算
    bool public _bool1 = !_bool; //取非
    bool public _bool2 = _bool && _bool1; //与
    bool public _bool3 = _bool || _bool1; //或
    bool public _bool4 = _bool == _bool1; //相等
    bool public _bool5 = _bool != _bool1; //不相等
```



上面的代码中：变量`_bool`的取值是`true`；`_bool1`是`_bool`的非，为`false`；`_bool && _bool1`为`false`；`_bool || _bool1`为`true`；`_bool == _bool1`为`false`；`_bool != _bool1`为`true`。 **值得注意的是：**`&&` 和 `||`运算符遵循短路规则，这意味着，假如存在`f(x) || g(y)`的表达式，如果`f(x)`是`true`，`g(y)`不会被计算，即使它和`f(x)`的结果是相反的



### 2. 整型

整型是`solidity`中的整数，最常用的包括

```solidity
    // 整型
    int public _int = -1; // 整数，包括负数
    uint public _uint = 1; // 正整数
    uint256 public _number = 20220330; // 256位正整数
```



常用的整型运算符包括：

- 比较运算符（返回布尔值）： `<=`， `<`， `==`， `!=`， `>=`， `>`
- 算数运算符： `+`， `-`， 一元运算 `-`， `+`， `*`， `/`， `%`（取余），`**`（幂）

代码：

```solidity
    // 整数运算
    uint256 public _number1 = _number + 1; // +，-，*，/
    uint256 public _number2 = 2**2; // 指数
    uint256 public _number3 = 7 % 2; // 取余数
    bool public _numberbool = _number2 > _number3; // 比大小
```



### 3. 地址类型

地址类型(address)存储一个 20 字节的值（以太坊地址的大小）。地址类型也有成员变量，并作为所有合约的基础。有普通的地址和可以转账`ETH`的地址（`payable`）。`payable`的地址拥有`balance`和`transfer()`两个成员，方便查询`ETH`余额以及转账。

代码

```solidity
    // 地址
    address public _address = 0x7A58c0Be72BE218B41C608b7Fe7C5bB630736C71;
    address payable public _address1 = payable(_address); // payable address，可以转账、查余额
    // 地址类型的成员
    uint256 public balance = _address1.balance; // balance of address
```



### 4. 定长字节数组

字节数组`bytes`分两种，一种定长（`byte`, `bytes8`, `bytes32`），另一种不定长。定长的属于数值类型，不定长的是引用类型（之后讲）。 定长`bytes`可以存一些数据，消耗`gas`比较少。

代码：

```solidity
    // 固定长度的字节数组
    bytes32 public _byte32 = "MiniSolidity"; 
    bytes1 public _byte = _byte32[0]; 
```



```
MiniSolidity`变量以字节的方式存储进变量`_byte32`，转换成`16进制`为：`0x4d696e69536f6c69646974790000000000000000000000000000000000000000
```

`_byte`变量存储`_byte32`的第一个字节，为`0x4d`。

### 5. 枚举 enum

枚举（`enum`）是`solidity`中用户定义的数据类型。它主要用于为`uint`分配名称，使程序易于阅读和维护。它与`C语言`中的`enum`类似，使用名称来代替从`0`开始的`uint`：

```solidity
    // 用enum将uint 0， 1， 2表示为Buy, Hold, Sell
    enum ActionSet { Buy, Hold, Sell }
    // 创建enum变量 action
    ActionSet action = ActionSet.Buy;
```



它可以显式的和`uint`相互转换，并会检查转换的正整数是否在枚举的长度内，不然会报错：

```solidity
    // enum可以和uint显式的转换
    function enumToUint() external view returns(uint){
        return uint(action);
    }
```



### 在remix上验证

- 部署合约后可以查看每个类型的变量具体的数值 ![2-1.png](https://bed-1309358403.cos.ap-shanghai.myqcloud.com/img/2-1-90414d7e21f49e75101a07a8a55e602c.png)
- enum和uint转换的示例 ![2-2.png](https://www.wtf.academy/assets/images/2-2-6c364618b30e6c498127e2d129f9e7e8.png)![2-3.png](https://www.wtf.academy/assets/images/2-3-d2742673ffbd4df5c230d48a02a2921c.png)

### 总结

在这一讲，我们介绍了`solidity`中4种变量类型，并详细介绍了数值变量（`value type`)中的布尔型，整型，地址，定长字节数组和枚举。之后我们会介绍其他几种类型。



## Solidity中的函数

solidity官方文档里把函数归到数值类型，但我觉得差别很大，所以单独分一类。我们先看一下solidity中函数的形式：

```solidity
    function <function name> (<parameter types>) {internal|external|public|private} [pure|view|payable] [returns (<return types>)]
```



看着些复杂，咱们从前往后一个一个看（方括号中的是可写可不写的关键字）：

1. `function`：声明函数时的固定用法，想写函数，就要以function关键字开头。
2. `<function name>`：函数名。
3. `(<parameter types>)`：圆括号里写函数的参数，也就是要输入到函数的变量类型和名字。
4. `{internal|external|public|private}`：函数可见性说明符，一共4种。没标明函数类型的，默认`internal`。
   - `public`: 内部外部均可见。(也可用于修饰状态变量，public变量会自动生成 `getter`函数，用于查询数值).
   - `private`: 只能从本合约内部访问，继承的合约也不能用（也可用于修饰状态变量）。
   - `external`: 只能从合约外部访问（但是可以用`this.f()`来调用，`f`是函数名）
   - `internal`: 只能从合约内部访问，继承的合约可以用（也可用于修饰状态变量）。
5. `[pure|view|payable]`：决定函数权限/功能的关键字。`payable`（可支付的）很好理解，带着它的函数，运行的时候可以给合约转入`ETH`。`pure`和`view`的介绍见下一节。
6. `[returns ()]`：函数返回的变量类型和名称。

### 到底什么是`Pure`和`View`？

我刚开始学`solidity`的时候，一直不理解`pure`跟`view`关键字，因为别的语言没有类似的关键字。`solidity`加入这两个关键字，我认为是因为`gas fee`。合约的状态变量存储在链上，`gas fee`很贵，如果不改变链上状态，就不用付`gas`。包含`pure`跟`view`关键字的函数是不改写链上状态的，因此用户直接调用他们是不需要付gas的（合约中非`pure`/`view`函数调用它们则会改写链上状态，需要付gas）。

在以太坊中，以下语句被视为修改链上状态：

1. 写入状态变量。
2. 释放事件。
3. 创建其他合同。
4. 使用`selfdestruct`.
5. 通过调用发送以太币。
6. 调用任何未标记`view`或`pure`的函数。
7. 使用低级调用（low-level calls）。
8. 使用包含某些操作码的内联汇编。

我画了一个马里奥插画，帮助大家理解。在插画里，我把合约中的状态变量（存储在链上）比作碧池公主，三种不同的角色代表不同的关键字。

![WTH is pure and view in solidity?](https://images.mirror-media.xyz/publication-images/1B9kHsTYnDY_QURSWMmPb.png?height=1028&width=1758)

- `pure`，中文意思是“纯”，在`solidity`里理解为“纯纯牛马”。包含`pure`关键字的函数，不能读取也不能写入存储在链上的状态变量。就像小怪一样，看不到也摸不到碧池公主。
- `view`，“看”，在`solidity`里理解为“看客”。包含`view`关键字的函数，能读取但也不能写入状态变量。类似马里奥，能看到碧池，但终究是看客，不能入洞房。
- 不写`pure`也不写`view`，函数既可以读取也可以写入状态变量。类似马里奥里的`boss`，可以对碧池公主为所欲为🐶。

### 代码

#### 1. pure v.s. view

我们在合约里定义一个状态变量 `number = 5`。

```solidity
    // SPDX-License-Identifier: MIT
    pragma solidity ^0.8.4;
    contract FunctionTypes{
        uint256 public number = 5;
```



定义一个`add()`函数，每次调用，每次给`number + 1`。

```solidity
    // 默认
    function add() external{
        number = number + 1;
    }
```



如果`add()`包含了`pure`关键字，例如 `function add() pure external`，就会报错。因为`pure`（纯纯牛马）是不配读取合约里的状态变量的，更不配改写。那`pure`函数能做些什么？举个例子，你可以给函数传递一个参数 `_number`，然后让他返回 `_number+1`。

```solidity
    // pure: 纯纯牛马
    function addPure(uint256 _number) external pure returns(uint256 new_number){
        new_number = _number+1;
    }
```



**Example:** ![3-3.png](https://www.wtf.academy/assets/images/3-3-5b5c10d460fd4d9721009d3a94a44ebb.png)

如果`add()`包含`view`，比如`function add() view external`，也会报错。因为`view`能读取，但不能够改写状态变量。可以稍微改写下方程，让他不改写`number`，而是返回一个新的变量。

```solidity
    // view: 看客
    function addView() external view returns(uint256 new_number) {
        new_number = number + 1;
    }
```



**Example:** ![3-4.png](https://www.wtf.academy/assets/images/3-4-049b8caacda74a086158981824991cb3.png)

#### 2. internal v.s. external

```solidity
    // internal: 内部
    function minus() internal {
        number = number - 1;
    }

    // 合约内的函数可以调用内部函数
    function minusCall() external {
        minus();
    }
```



我们定义一个`internal`的`minus()`函数，每次调用使得`number`变量减1。由于是`internal`，只能由合约内部调用，而外部不能。因此，我们必须再定义一个`external`的`minusCall()`函数，来间接调用内部的`minus()`。 **Example:** ![3-1.png](https://www.wtf.academy/assets/images/3-1-7ddf1b1c7336bbdd36e3a1fc105b7422.png)

#### 3. payable

```solidity
    // payable: 递钱，能给合约支付eth的函数
    function minusPayable() external payable returns(uint256 balance) {
        minus();    
        balance = address(this).balance;
    }
```



我们定义一个`external payable`的`minusPayable()`函数，间接的调用`minus()`，并且返回合约里的`ETH`余额（`this`关键字可以让我们引用合约地址)。 我们可以在调用`minusPayable()`时，往合约里转入1个`ETH`。

![img](https://images.mirror-media.xyz/publication-images/ETDPN8myq7jFfAL8CUAFt.png?height=148&width=588)

我们可以在返回的信息中看到，合约的余额是1 ETH。

![img](https://images.mirror-media.xyz/publication-images/nGZ2pz0MvzgXuKrENJPYf.png?height=128&width=1130)

**Example:** ![3-2.png](https://www.wtf.academy/assets/images/3-2-e1be980c21311dc80f6233dac763fd89.png)

### 总结

在这一讲，我们介绍了`solidity`中的函数类型，比较难理解的是`pure`和`view`，在其他语言中没出现过。`solidity`引入`pure`和`view`关键字主要是为了节省`gas`和控制函数权限：如果用户直接调用`pure`/`view`方程是不消耗`gas`的（合约中非`pure`/`view`函数调用它们则会改写链上状态，需要付gas）。



## 函数输出

我们将介绍`Solidity`函数输出，包括：返回多种变量，命名式返回，以及利用解构式赋值读取全部和部分返回值。

### 返回值 return和returns

`Solidity`有两个关键字与函数输出相关：`return`和`returns`，他们的区别在于：

- `returns`加在函数名后面，用于声明返回的变量类型及变量名；
- `return`用于函数主体中，返回指定的变量。

```solidity
    // 返回多个变量
    function returnMultiple() public pure returns(uint256, bool, uint256[3] memory){
            return(1, true, [uint256(1),2,5]);
        }
```



上面这段代码中，我们声明了`returnMultiple()`函数将有多个输出：`returns(uint256, bool, uint256[3] memory)`，接着我们在函数主体中用`return(1, true, [uint256(1),2,5])`确定了返回值。

### 命名式返回

我们可以在`returns`中标明返回变量的名称，这样`solidity`会自动给这些变量初始化，并且自动返回这些函数的值，不需要加`return`。

```solidity
    // 命名式返回
    function returnNamed() public pure returns(uint256 _number, bool _bool, uint256[3] memory _array){
        _number = 2;
        _bool = false; 
        _array = [uint256(3),2,1];
    }
```



在上面的代码中，我们用`returns(uint256 _number, bool _bool, uint256[3] memory _array)`声明了返回变量类型以及变量名。这样，我们在主体中只需要给变量`_number`，`_bool`和`_array`赋值就可以自动返回了。

当然，你也可以在命名式返回中用`return`来返回变量：

```solidity
    // 命名式返回，依然支持return
    function returnNamed2() public pure returns(uint256 _number, bool _bool, uint256[3] memory _array){
        return(1, true, [uint256(1),2,5]);
    }
```



### 解构式赋值

`solidity`使用解构式赋值的规则，支持读取函数的全部或部分返回值。

- 读取所有返回值：声明变量，并且将要赋值的变量用`,`隔开，按顺序排列。

```solidity
        uint256 _number;
        bool _bool;
        uint256[3] memory _array;
        (_number, _bool, _array) = returnNamed();
```



- 读取部分返回值：声明要读取的返回值对应的变量，不读取的留空。下面这段代码中，我们只读取`_bool`，而不读取返回的`_number`和`_array`：

```solidity
        (, _bool2, ) = returnNamed();
```



### 在remix上验证

- 部署合约后查看三种返回方式的结果 ![img](https://www.wtf.academy/assets/images/4-1-3c115fdc5afcb11e3f9eb51b8e2abbd8.png)

### 总结

这一讲，我们介绍函数的返回值`return`和`returns`，包括：返回多种变量，命名式返回，以及利用解构式赋值读取全部和部分返回值。



## call() 函数

> 本文介绍了 Solidity 中的 `call()` 函数及其使用。

call 是与其他合约交互的低级函数。

当您只是通过调用回退函数发送 Ether 时，这是推荐使用的方法。

但是，这不是调用现有函数的推荐方式。

不推荐低级调用的几个原因

- 还原不会冒泡
- 绕过类型检查
- 函数存在性检查被省略

### 示例

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract Receiver {
    event Received(address caller, uint amount, string message);

    fallback() external payable {
        emit Received(msg.sender, msg.value, "Fallback was called");
    }

    function foo(string memory _message, uint _x) public payable returns (uint) {
        emit Received(msg.sender, msg.value, _message);

        return _x + 1;
    }
}

contract Caller {
    event Response(bool success, bytes data);

    // Let's imagine that contract Caller does not have the source code for the
    // contract Receiver, but we do know the address of contract Receiver and the function to call.
    function testCallFoo(address payable _addr) public payable {
        // You can send ether and specify a custom gas amount
        (bool success, bytes memory data) = _addr.call{value: msg.value, gas: 5000}(
            abi.encodeWithSignature("foo(string,uint256)", "call foo", 123)
        );

        emit Response(success, data);
    }

    // Calling a function that does not exist triggers the fallback function.
    function testCallDoesNotExist(address payable _addr) public payable {
        (bool success, bytes memory data) = _addr.call{value: msg.value}(
            abi.encodeWithSignature("doesNotExist()")
        );

        emit Response(success, data);
    }
}
```



在上面的示例中，我们定义了两个智能合约 `Caller` 和 `Callee`。`Caller` 合约包含一个名为 `testCall()` 的函数，该函数向指定地址发送 1 wei 的以太币，并调用 `Callee` 合约中的 `foo()` 函数。当 `foo()` 函数被调用时，它将返回一个编码后的字符串和数字。

请注意，我们使用了 `call()` 函数来实现这个过程，并使用 `abi.encodeWithSignature()` 函数对参数进行编码。

这是一个测试从多重签名钱包发送交易的合同：

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract TestContract {
    uint public i;

    function callMe(uint j) public {
        i += j;
    }

    function getData() public pure returns (bytes memory) {
        return abi.encodeWithSignature("callMe(uint256)", 123);
    }
}
```



### 详解

#### `call()` 函数概述

`call()` 是 Solidity 中的一个特殊函数，用于调用其他合约中的函数。在调用 `call()` 函数时，我们需要提供要调用函数的地址、以太币数量和参数。`call()` 函数将返回一个布尔值和一个 `bytes` 类型的数组，用于表示调用是否成功以及包含返回值的数据。

#### 函数编码

在使用 `call()` 函数调用其他合约中的函数时，我们需要对函数参数进行编码。Solidity 提供了多种编码函数，可以根据不同的参数类型来选择使用适当的函数。例如，我们可以使用 `abi.encodeWithSignature()` 函数对字符串和数字参数进行编码。

```solidity
bytes memory data = abi.encodeWithSignature("foo(string,uint256)", "hello", 123);
```



在上面的示例中，我们使用 `abi.encodeWithSignature()` 函数对 `"hello"` 和 `123` 进行编码，并将编码后的字节数组存储在名为 `data` 的变量中。

请注意，使用错误的编码方式可能会导致调用失败或产生错误的返回值。

#### `address payable` 类型

在 Solidity 中，可以使用 `address payable` 类型来表示一个既可以接收以太币又可以发送以太币的地址。

```solidity
address payable myAddress = payable(0x123);
```



在上面的示例中，我们将地址 `0x123` 转换为 `address payable` 类型，并将其存储在名为 `myAddress` 的变量中。

请注意，只有具有 `payable` 函数的地址才能被转换为 `address payable` 类型。

### 总结

通过使用 `call()` 函数和正确的函数参数编码方式，Solidity 可以方便地处理智能合约之间的函数调用。程序员可以使用这些工具来执行复杂的逻辑或转移场景，并确保正确地处理返回值和错误情况。通过使用 `address payable` 类型，程序员可以轻松地实现与其他合约交互并处理以太币转移。



## delegatecall() 函数

> 本文介绍了 Solidity 中的 `delegatecall()` 函数及其使用。

delegatecall 是类似于调用的低级函数。

当合约A对合约B执行delegatecall时，执行B的代码 与合约 A 的存储，msg.sender 和 msg.value。

### 示例

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

// NOTE: Deploy this contract first
contract B {
    // NOTE: storage layout must be the same as contract A
    uint public num;
    address public sender;
    uint public value;

    function setVars(uint _num) public payable {
        num = _num;
        sender = msg.sender;
        value = msg.value;
    }
}

contract A {
    uint public num;
    address public sender;
    uint public value;

    function setVars(address _contract, uint _num) public payable {
        // A's storage is set, B is not modified.
        (bool success, bytes memory data) = _contract.delegatecall(
            abi.encodeWithSignature("setVars(uint256)", _num)
        );
    }
}
```



在上面的示例中，我们定义了两个智能合约 `A` 和 `B`。`A` 合约包含一个名为 `foo()` 的函数，该函数接受两个数字参数并返回它们的总和。`B` 合约包含一个名为 `bar()` 的函数，该函数向另一个合约地址发送一个 `delegatecall()`，并将 `foo()` 函数的输入参数 `_i` 和 `_j` 作为参数传递。`bar()` 函数将返回 `foo()` 函数返回值的总和。

请注意，我们使用了 `delegatecall()` 函数来实现这个过程，并使用 `abi.encodeWithSignature()` 函数对参数进行编码。

### 详解

#### `delegatecall()` 函数概述

`delegatecall()` 是 Solidity 中的一个特殊函数，用于在当前合约的上下文中执行其他合约的代码。与 `call()` 不同，`delegatecall()` 将使用当前合约的存储器、状态变量和 ETH 余额。这意味着我们可以将另一个合约的代码视为当前合约的一部分，并且可以使用当前合约的所有资源。

#### 函数编码

在使用 `delegatecall()` 函数调用其他合约中的函数时，我们需要对函数参数进行编码。Solidity 提供了多种编码函数，可以根据不同的参数类型来选择使用适当的函数。例如，我们可以使用 `abi.encodeWithSignature()` 函数对数字参数进行编码。

```solidity
bytes memory payload = abi.encodeWithSignature("foo(uint256,uint256)", _i, _j);
```



在上面的示例中，我们使用 `abi.encodeWithSignature()` 函数对 `_i` 和 `_j` 进行编码，并将编码后的字节数组存储在名为 `payload` 的变量中。

请注意，使用错误的编码方式可能会导致调用失败或产生错误的返回值。

#### `require()` 函数

使用 `require()` 函数来检查条件是否满足，并在条件不满足时抛出异常。

```solidity
require(success);
```



在上面的示例中，我们使用 `require()` 函数来检查 `delegatecall()` 是否成功，并在不成功时抛出异常。

### 总结

通过使用 `delegatecall()` 函数和正确的函数参数编码方式，Solidity 可以方便地处理智能合约之间的代码共享。程序员可以使用这些工具来执行复杂的逻辑或转移场景，并确保正确地处理返回值和错误情况。通过使用 `require()` 函数，程序员可以轻松地检查条件是否满足，并在必要时抛出异常。



​		

## payable 函数

> 本文介绍了 Solidity 中的 `payable` 函数修饰符，它允许合约接收以太币。

声明为 payable 的函数和地址可以将以太币接收到合约中。

### 示例

```solidity
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.17;

contract Payable {
    // Payable地址可以接收以太币
    address payable public owner;

    // Payable构造函数可以接收以太币
    constructor() payable {
        owner = payable(msg.sender);
    }

    // 存入以太币到智能合约的函数。
    // 与一些以太币一起调用此函数。
    // 智能合约的余额将自动更新。
    function deposit() public payable {}

    // 与一些以太币一起调用此函数。
    // 由于此函数不可支付，因此该函数将抛出错误。
    function notPayable() public {}

    // 从智能合约中提取所有以太币的函数。
    function withdraw() public {
        // 获取存储在此合约中的以太币数量
        uint amount = address(this).balance;

        // 将所有以太币发送给拥有者
        // 由于所有者的地址是可支付的，因此其可以接收以太币
        (bool success, ) = owner.call{value: amount}("");
        require(success, "Failed to send Ether");
    }

    // 将以太币从此合约转移到输入地址的函数
    function transfer(address payable _to, uint _amount) public {
        // 注意，“to”被声明为payable
        (bool success, ) = _to.call{value: _amount}("");
        require(success, "Failed to send Ether");
    }
}
```



在上面的示例中，我们定义了一个名为 `ReceiveEther` 的合约，并使用 `receive()` 函数作为其默认函数。如果有人向该合约发送以太币，则该函数将被调用。

我们还使用了 `payable` 修饰符来标识 `sendEther()` 函数，该函数允许向合约发送以太币。通过 `getBalance()` 函数，我们可以获取该合约的余额。

### 详解

#### `receive()` 函数

当有人向合约发送以太币时，默认函数将被调用。默认函数是没有名称和参数的函数，如下所示：

```solidity
receive() external payable {
    // 处理接收到的以太币
}
```



请注意，如果合约没有定义 `receive()` 函数，并且有人向其发送以太币，则将会抛出异常并返还所有的以太币。

#### `payable` 修饰符

使用 `payable` 修饰符修饰一个函数可以使该函数接收以太币。

```solidity
function myFunction() external payable {
    // 处理接收到的以太币
}
```



在上面的示例中，我们使用 `payable` 修饰符来标识 `myFunction()` 函数，该函数允许接收以太币。

请注意，只有具有 `payable` 修饰符的函数才能接收以太币。

#### 合约余额

要获取合约的当前余额，可以使用 `address(this).balance`。

```solidity
function getBalance() external view returns (uint) {
    return address(this).balance;
}
```



在上面的示例中，我们定义了一个名为 `getBalance()` 的函数，该函数返回该合约的余额。请注意，我们使用 `view` 关键字来标识该函数不会修改合约状态。

### 总结

通过使用 `payable` 修饰符以及默认函数，Solidity 可以方便地处理合约接收以太币的情形。程序员可以使用这些工具来执行复杂的转账逻辑或支付场景，并在需要时获取当前合约的余额信息。





## Solidity中的引用类型

**引用类型(Reference Type)**：包括数组（`array`），结构体（`struct`）和映射（`mapping`），这类变量占空间大，赋值时候直接传递地址（类似指针）。由于这类变量比较复杂，占用存储空间大，我们在使用时必须要声明数据存储的位置。

### 数据位置

solidity数据存储位置有三类：`storage`，`memory`和`calldata`。不同存储位置的`gas`成本不同。`storage`类型的数据存在链上，类似计算机的硬盘，消耗`gas`多；`memory`和`calldata`类型的临时存在内存里，消耗`gas`少。大致用法：

1. `storage`：合约里的状态变量默认都是`storage`，存储在链上。
2. `memory`：函数里的参数和临时变量一般用`memory`，存储在内存中，不上链。
3. `calldata`：和`memory`类似，存储在内存中，不上链。与`memory`的不同点在于`calldata`变量不能修改（`immutable`），一般用于函数的参数。例子：

```solidity
    function fCalldata(uint[] calldata _x) public pure returns(uint[] calldata){
        //参数为calldata数组，不能被修改
        // _x[0] = 0 //这样修改会报错
        return(_x);
    }
```



**Example:** ![5-1.png](https://www.wtf.academy/assets/images/5-1-9d00a21842c77b3911aaf419f67ad691.png)

### 数据位置和赋值规则

在不同存储类型相互赋值时候，有时会产生独立的副本（修改新变量不会影响原变量），有时会产生引用（修改新变量会影响原变量）。规则如下：

1. `storage`（合约的状态变量）赋值给本地`storage`（函数里的）时候，会创建引用，改变新变量会影响原变量。例子：

```solidity
    uint[] x = [1,2,3]; // 状态变量：数组 x

    function fStorage() public{
        //声明一个storage的变量 xStorage，指向x。修改xStorage也会影响x
        uint[] storage xStorage = x;
        xStorage[0] = 100;
    }
```



**Example:** ![5-2.png](https://www.wtf.academy/assets/images/5-2-91bae5b0b86b0e55210cac541a6edee5.png)

1. `storage`赋值给`memory`，会创建独立的复本，修改其中一个不会影响另一个；反之亦然。例子：

```solidity
    uint[] x = [1,2,3]; // 状态变量：数组 x
    
    function fMemory() public view{
        //声明一个Memory的变量xMemory，复制x。修改xMemory不会影响x
        uint[] memory xMemory = x;
        xMemory[0] = 100;
        xMemory[1] = 200;
        uint[] memory xMemory2 = x;
        xMemory2[0] = 300;
    }
```



**Example:** ![5-3.png](https://www.wtf.academy/assets/images/5-3-979f3cbffbbe20ff5df5c143384610e4.png)

1. `memory`赋值给`memory`，会创建引用，改变新变量会影响原变量。
2. 其他情况，变量赋值给`storage`，会创建独立的复本，修改其中一个不会影响另一个。

### 变量的作用域

`Solidity`中变量按作用域划分有三种，分别是状态变量（state variable），局部变量（local variable）和全局变量(global variable)

#### 1. 状态变量

状态变量是数据存储在链上的变量，所有合约内函数都可以访问 ，`gas`消耗高。状态变量在合约内、函数外声明：

```solidity
contract Variables {
    uint public x = 1;
    uint public y;
    string public z;
```



我们可以在函数里更改状态变量的值：

```solidity
    function foo() external{
        // 可以在函数里更改状态变量的值
        x = 5;
        y = 2;
        z = "0xAA";
    }
```



#### 2. 局部变量

局部变量是仅在函数执行过程中有效的变量，函数退出后，变量无效。局部变量的数据存储在内存里，不上链，`gas`低。局部变量在函数内声明：

```solidity
    function bar() external pure returns(uint){
        uint xx = 1;
        uint yy = 3;
        uint zz = xx + yy;
        return(zz);
    }
```



#### 3. 全局变量

全局变量是全局范围工作的变量，都是`solidity`预留关键字。他们可以在函数内不声明直接使用：

```solidity
    function global() external view returns(address, uint, bytes memory){
        address sender = msg.sender;
        uint blockNum = block.number;
        bytes memory data = msg.data;
        return(sender, blockNum, data);
    }
```



在上面例子里，我们使用了3个常用的全局变量：`msg.sender`, `block.number`和`msg.data`，他们分别代表请求发起地址，当前区块高度，和请求数据。下面是一些常用的全局变量，更完整的列表请看这个[链接](https://learnblockchain.cn/docs/solidity/units-and-global-variables.html#special-variables-and-functions)：

- `blockhash(uint blockNumber)`: (`bytes32`)给定区块的哈希值 – 只适用于256最近区块, 不包含当前区块。
- `block.coinbase`: (`address payable`) 当前区块矿工的地址
- `block.gaslimit`: (`uint`) 当前区块的gaslimit
- `block.number`: (`uint`) 当前区块的number
- `block.timestamp`: (`uint`) 当前区块的时间戳，为unix纪元以来的秒
- `gasleft()`: (`uint256`) 剩余 gas
- `msg.data`: (`bytes calldata`) 完整call data
- `msg.sender`: (`address payable`) 消息发送者 (当前 caller)
- `msg.sig`: (`bytes4`) calldata的前四个字节 (function identifier)
- `msg.value`: (`uint`) 当前交易发送的`wei`值

**Example:** ![5-4.png](https://www.wtf.academy/assets/images/5-4-5ee425310e1666a20575f2a8330c55cb.png)

### 总结

在这一讲，我们介绍了`solidity`中的引用类型，数据位置和变量的作用域。重点是`storage`, `memory`和`calldata`三个关键字的用法。他们出现的原因是为了节省链上有限的存储空间和降低`gas`。下一讲我们会介绍引用类型中的数组。



## 引用类型

### 数组 array[]

数组（`Array`）是`solidity`常用的一种变量类型，用来存储一组数据（整数，字节，地址等等）。数组分为固定长度数组和可变长度数组两种：

- 固定长度数组：在声明时指定数组的长度。用`T[k]`的格式声明，其中`T`是元素的类型，`k`是长度，例如：

```solidity
    // 固定长度 Array
    uint[8] array1;
    bytes1[5] array2;
    address[100] array3;
```



- 可变长度数组（动态数组）：在声明时不指定数组的长度。用`T[]`的格式声明，其中`T`是元素的类型，例如（`bytes`比较特殊，是数组，但是不用加`[]`）：

```solidity
    // 可变长度 Array
    uint[] array4;
    bytes1[] array5;
    address[] array6;
    bytes array7;
```



#### 创建数组的规则

在solidity里，创建数组有一些规则：

- 对于`memory`修饰的`动态数组`，可以用`new`操作符来创建，但是必须声明长度，并且声明后长度不能改变。例子：

```solidity
    // memory动态数组
    uint[] memory array8 = new uint[](5);
    bytes memory array9 = new bytes(9);
```



- 数组字面常数(Array Literals)是写作表达式形式的数组，用方括号包着来初始化array的一种方式，并且里面每一个元素的type是以第一个元素为准的，例如`[1,2,3]`里面所有的元素都是uint8类型，因为在solidity中如果一个值没有指定type的话，默认就是最小单位的该type，这里int的默认最小单位类型就是uint8。而`[uint(1),2,3]`里面的元素都是uint类型，因为第一个元素指定了是uint类型了，我们都以第一个元素为准。下面的合约中，对于f函数里面的调用，如果我们没有显式对第一个元素进行uint强转的话，是会报错的，因为如上所述我们其实是传入了uint8类型的array，可是g函数需要的却是uint类型的array，就会报错了。

```solidity
// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.16 <0.9.0;
contract C {
    function f() public pure {
        g([uint(1), 2, 3]);
    }
    function g(uint[3] memory) public pure {
        // ...
    }
}
```



- 如果创建的是动态数组，你需要一个一个元素的赋值。

```solidity
    uint[] memory x = new uint[](3);
    x[0] = 1;
    x[1] = 3;
    x[2] = 4;
```



#### 数组成员

- `length`: 数组有一个包含元素数量的`length`成员，`memory`数组的长度在创建后是固定的。
- `push()`: `动态数组`和`bytes`拥有`push()`成员，可以在数组最后添加一个`0`元素。
- `push(x)`: `动态数组`和`bytes`拥有`push(x)`成员，可以在数组最后添加一个`x`元素。
- `pop()`: `动态数组`和`bytes`拥有`pop()`成员，可以移除数组最后一个元素。

**Example:** ![6-1.png](https://www.wtf.academy/assets/images/6-1-ff58f00a7e037fcd318401ca2bc350b6.png)

### 结构体 struct

`Solidity`支持通过构造结构体的形式定义新的类型。创建结构体的方法：

```solidity
    // 结构体
    struct Student{
        uint256 id;
        uint256 score; 
    }
```



```solidity
    Student student; // 初始一个student结构体
```



给结构体赋值的两种方法：

```solidity
    //  给结构体赋值
    // 方法1:在函数中创建一个storage的struct引用
    function initStudent1() external{
        Student storage _student = student; // assign a copy of student
        _student.id = 11;
        _student.score = 100;
    }
```



**Example:** ![6-2.png](https://www.wtf.academy/assets/images/6-2-991e08767256fcc39717f429da21f05d.png)

```solidity
     // 方法2:直接引用状态变量的struct
    function initStudent2() external{
        student.id = 1;
        student.score = 80;
    }
```



**Example:** ![6-3.png](https://www.wtf.academy/assets/images/6-3-7ccb3cbebd7eff492292a171a8de1852.png)

### 总结

这一讲，我们介绍了solidity中数组（`array`）和结构体（`struct`）的基本用法。下一讲我们将介绍solidity中的哈希表——映射（`mapping`）。



## 映射类型

我们将介绍solidity中的哈希表：映射（`Mapping`）类型。

### 映射Mapping

在映射中，人们可以通过键（`Key`）来查询对应的值（`Value`），比如：通过一个人的`id`来查询他的钱包地址。

声明映射的格式为`mapping(_KeyType => _ValueType)`，其中`_KeyType`和`_ValueType`分别是`Key`和`Value`的变量类型。例子：

```solidity
    mapping(uint => address) public idToAddress; // id映射到地址
    mapping(address => address) public swapPair; // 币对的映射，地址到地址
```



### 映射的规则

- **规则1**：映射的`_KeyType`只能选择`solidity`默认的类型，比如`uint`，`address`等，不能用自定义的结构体。而`_ValueType`可以使用自定义的类型。下面这个例子会报错，因为`_KeyType`使用了我们自定义的结构体：

```solidity
    // 我们定义一个结构体 Struct
    struct Student{
        uint256 id;
        uint256 score; 
    }
     mapping(Student => uint) public testVar;
```



- **规则2**：映射的存储位置必须是`storage`，因此可以用于合约的状态变量，函数中的`storage`变量，和library函数的参数（见[例子](https://github.com/ethereum/solidity/issues/4635)）。不能用于`public`函数的参数或返回结果中，因为`mapping`记录的是一种关系 (key - value pair)。
- **规则3**：如果映射声明为`public`，那么`solidity`会自动给你创建一个`getter`函数，可以通过`Key`来查询对应的`Value`。
- **规则4**：给映射新增的键值对的语法为`_Var[_Key] = _Value`，其中`_Var`是映射变量名，`_Key`和`_Value`对应新增的键值对。例子：

```solidity
    function writeMap (uint _Key, address _Value) public{
        idToAddress[_Key] = _Value;
    }
```



### 映射的原理

- **原理1**: 映射不储存任何键（`Key`）的资讯，也没有length的资讯。
- **原理2**: 映射使用`keccak256(key)`当成offset存取value。
- **原理3**: 因为Ethereum会定义所有未使用的空间为0，所以未赋值（`Value`）的键（`Key`）初始值都是0。

### 在Remix上验证 (以 `Mapping.sol`为例)

- 映射示例 1 部署

  ![7-1](https://www.wtf.academy/assets/images/7-1-2768f65eec9dbbc8771275b45c937e96.jpg)

- 映射示例 2 初始值

  ![7-2](https://www.wtf.academy/assets/images/7-2-886db6cf3743df280acac78c151971f3.jpg)

- 映射示例 3 key-value pair

  ![7-3](https://www.wtf.academy/assets/images/7-3-88745249067310f5e280dd60b2560adb.jpg)

### 总结

这一讲，我们介绍了`solidity`中哈希表——映射（`Mapping`）的用法。至此，我们已经学习了所有常用变量种类，之后我们会学习控制流`if-else`,` while`等。



## 变量初始值

在`solidity`中，声明但没赋值的变量都有它的初始值或默认值。这一讲，我们将介绍常用变量的初始值。

### 值类型初始值

- `boolean`: `false`

- `string`: `""`

- `int`: `0`

- `uint`: `0`

- `enum`: 枚举中的第一个元素

- `address`: `0x0000000000000000000000000000000000000000` (或 `address(0)`)

- ```
  function
  ```

  - `internal`: 空白方程
  - `external`: 空白方程

可以用`public`变量的`getter`函数验证上面写的初始值是否正确：

```solidity
    bool public _bool; // false
    string public _string; // ""
    int public _int; // 0
    uint public _uint; // 0
    address public _address; // 0x0000000000000000000000000000000000000000

    enum ActionSet { Buy, Hold, Sell}
    ActionSet public _enum; // 第一个元素 0

    function fi() internal{} // internal空白方程 
    function fe() external{} // external空白方程 
```



### 引用类型初始值

- 映射`mapping`: 所有元素都为其默认值的`mapping`
- 结构体`struct`: 所有成员设为其默认值的结构体
- 数组`array`
  - 动态数组: `[]`
  - 静态数组（定长）: 所有成员设为其默认值的静态数组

可以用`public`变量的`getter`函数验证上面写的初始值是否正确：

```solidity
    // Reference Types
    uint[8] public _staticArray; // 所有成员设为其默认值的静态数组[0,0,0,0,0,0,0,0]
    uint[] public _dynamicArray; // `[]`
    mapping(uint => address) public _mapping; // 所有元素都为其默认值的mapping
    // 所有成员设为其默认值的结构体 0, 0
    struct Student{
        uint256 id;
        uint256 score; 
    }
    Student public student;
```



### `delete`操作符

`delete a`会让变量`a`的值变为初始值。

```solidity
    // delete操作符
    bool public _bool2 = true; 
    function d() external {
        delete _bool2; // delete 会让_bool2变为默认值，false
    }
```



### 在remix上验证

- 部署合约查看值类型、引用类型的初始值 ![img](https://www.wtf.academy/assets/images/8-1-bf8a5eafba9f2a6be29c8a116a5465bc.png)
- 值类型、引用类型delete操作后的默认值 ![img](https://www.wtf.academy/assets/images/8-2-968b7c57cb793dc524a5665dfae26624.png)

### 总结

这一讲，我们介绍了`solidity`中变量的初始值。变量被声明但没有赋值的时候，它的值默认为初始值。不同类型的变量初始值不同，`delete`操作符可以删除一个变量的值并代替为初始值。



## 常数

我们介绍`solidity`中两个关键字，`constant`（常量）和`immutable`（不变量）。状态变量声明这个两个关键字之后，不能在合约后更改数值；并且还可以节省`gas`。另外，只有数值变量可以声明`constant`和`immutable`；`string`和`bytes`可以声明为`constant`，但不能为`immutable`。

### constant和immutable

#### constant

`constant`变量必须在声明的时候初始化，之后再也不能改变。尝试改变的话，编译不通过。

```solidity
    // constant变量必须在声明的时候初始化，之后不能改变
    uint256 constant CONSTANT_NUM = 10;
    string constant CONSTANT_STRING = "0xAA";
    bytes constant CONSTANT_BYTES = "WTF";
    address constant CONSTANT_ADDRESS = 0x0000000000000000000000000000000000000000;
```



#### immutable

`immutable`变量可以在声明时或构造函数中初始化，因此更加灵活。

```solidity
    // immutable变量可以在constructor里初始化，之后不能改变
    uint256 public immutable IMMUTABLE_NUM = 9999999999;
    address public immutable IMMUTABLE_ADDRESS;
    uint256 public immutable IMMUTABLE_BLOCK;
    uint256 public immutable IMMUTABLE_TEST;
```



你可以使用全局变量例如`address(this)`，`block.number` ，或者自定义的函数给`immutable`变量初始化。在下面这个例子，我们利用了`test()`函数给`IMMUTABLE_TEST`初始化为`9`：

```solidity
    // 利用constructor初始化immutable变量，因此可以利用
    constructor(){
        IMMUTABLE_ADDRESS = address(this);
        IMMUTABLE_BLOCK = block.number;
        IMMUTABLE_TEST = test();
    }

    function test() public pure returns(uint256){
        uint256 what = 9;
        return(what);
    }
```



### 在remix上验证

1. 部署好合约之后，通过remix上的`getter`函数，能获取到`constant`和`immutable`变量初始化好的值。

   ![9-1.png](https://www.wtf.academy/assets/images/9-1-4dd7d40c9799d42c60e4793394a4eb5e.png)

2. `constant`变量初始化之后，尝试改变它的值，会编译不通过并抛出`TypeError: Cannot assign to a constant variable.`的错误。

![9-2.png](https://www.wtf.academy/assets/images/9-2-5b85f9969dff8fbeb78cac9f8d4089ce.png)

1. `immutable`变量初始化之后，尝试改变它的值，会编译不通过并抛出`TypeError: Immutable state variable already initialized.`的错误。

   ![9-3.png](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAcEAAAB4CAIAAAAFa962AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAEXRFWHRTb2Z0d2FyZQBTbmlwYXN0ZV0Xzt0AACAASURBVHic7Z15VJTX+ce/SfprZRtkUBYRIggMm0GQRUWjwqggR0RqYionUUwV1NSqaUFNqsZGjTZRY6uAxqjNQWticTsKElxSg5XFLWEbwBkFAUEYnGFrWpP8/nhneWdlGAcY8fmcnJOZ+9733jsDfnme5973eV7wC5iC5x6HYS/U1nUN9CoIfSxdkpB+5B9qjcsWvrH/QPaArIcgGF4c6AUQBIDE9AtblyrfRnz41YEPo3T2jvrTkYtnT1zMWu/WD0sjCL38YqAXoIQ7bnKMtwUAoLvqwtVisazdc9qMcCdlt46q66dvSPt/eUSfkZh+IdaxcO9+ZUvB+/mxealbl15cv1+z+7T1K8NQuHPe+stYtvCN/lsmQWjDbDSU6zPZ5VHOsUoxI6YzQ9qOldTIL5JuGs7CiLVrXhbuPPrlkWdkiqXpsaOF52ZsKFBpzVx/YuzReV+l1ry245LaDR521lLBxcummJsgnhqz8eXFlafPVDKmp/iGqAncUZ7GDOPsNDxorJ/+PoGBvkOHcowZnTA5UanRHp1FJ7I0r+xfdu4uZ+xryRp3jHDoj4URhGGYjR1qInx9PYODA+zsbC9d/rfWDjOmTw4K8isu/k5Xh75l+OvfJgTayN7UnszM3ASAsewCZM3tpQcnFQgBwDf5TlDbzlt2a151A4D2OyzTz+PAgrfD5AMJ//Xe3Ar2IIFrkgPXAEB7UfZHSx4x89rlZwoCk6d7sKf2Tb7zKhTL2BS7ZS6+Djx3RTaub/KdV+Uhx/Y7O49+CT1T6PoUmHoyeXxL9peYzixY2R9A5BQva+GV9y9q/bKybglj541NBLQoLEGYCeaoodxx7o4QF9YoW6y9xyd6AwA6a3Pk5qpWrly5bmk5JDg4AICmSjICeutW+QAK6KN/vTepQqV5YcTaNQFtJzM/2gQAU08mv/0t5AJkE7gm6M7OzMwjmHoyefqSiJIjBUIAm2LfDpN8HXj0CnucIwUfHSnQ42i7zU12E/7rvcAKbIrdMjd26qZzV9S7sPFNvvOqXVH2ewq9AwDdU+j7FLAJS3i7vfRgYIFwYcTaNdNfXyi7NyLS16qj4p6uJey/fW8e3yUSYLvzXsOtOiqvalddguh3zMaXV8D1mext0VFVpZDQmst5WceY/65XwS0mzoer++6ffv75/PkrlZU1wcEBkdMmsC9N50965RWfmzfL8r6+2nfL18OmsECbB1/PrVBr9pj0sk176debZG+vnCptt3k5ZKHsbe1JmdxcufMANkNZG9EjeZvQOxhzFYDocTtsHRbq6+txIMitvfRLFQHV21/vp1CapUfEbbCxc5c1j7LnoKm+QH0wNpyhiqAOsx0fdGfenD8PzE+QIDQxMw3l+syZ6Wb9sFzHDpK0uFwMK2s9Ggq5jJaWCtgyOp0/KTDQ986diq/zvzX5qg3Dw8UW7Y9rNdrdhtngkVioeK+qMtrZdO69kw/c5iZvuZO85c6C1/WqoYL2lhb5FAUfBfawI6S+qp7o4VMoL1VkBspDB73l4p8XRs2edyvwxOk/TTZqAIIwPWaloSP5M92sH5ZnXX6gqwfX1sKQgX76+ee8vKsKGY2cNiHwFZ8BFVAAwnqJqiEpo7alHcO5Hor3C7l2aG8T9TTcpnPvBWa+F5h5sAiBa2KnmnSpWlbV2/6GfYp7rVI4ukTo6yJ9XKPaUP2o09pnsu7DowTRr5iPhnJC4/wcO2tzdAuoppuvB4WMhoa8Mm5cwM1bZQMqoACwSViLkdNP+qo1C7+9324TMH0T827460sCbIS3DD82JKyXqLw/Im6Djcek4Ybd3dLWDjuX4QCwMGLt3JFqq3r9gLZxtE1h3KcouFTRae0bEanj8tKxo9BSr362iSDMCXPZU+KOC/S2AuAW8xu5pSbbPuKExo33tmKauqsu5BXr2VFS5aeff8698K+mphYAt26Xm3zNvaYiMxDJd17dcudV5r1sc/xIwUfuQ7fMTd4yFwAraqkblU15tN/ZefQKe5aTHlvmJmy5A6htgmvh0Zf5D+SdH3y9s3T8mqGyK0cKPgLWrpGNo3oqQNsUvf8UAHDpm+p3wr0io3BJyyZRYpAH7mbTpjxh1rxAz8uDnpcfUJamH5037PZHGmfpl6YfnYdzM5bJNFT5vPzbf7kY2bY1cetFel6eMAPMx5cnnlOYs/TvbFaNiiZvnedx78QybUaosK2Dw4ua1j+rI4geIA0lBpysZTPPNYXHquQc4Q8v2qHtYXkAl7fuKUL4Gso5QpgF5hIPJZ5vspbNZL8teP81fYdGL/55IRM+pZwjxIBDGko8M5BiEmYI7SkBgMOwF5pbfu7TKWbwg/Lyb/XpFARB9D8UDyUIgjAe0lCCIAjjUYmHcl560eIFfb27f4b0x5/6dkUEQRDPDkoNfdVmyBYXzn/1RgUtX3xhX3PHF62dfb4ugiCIZwGlhvoP+cXR1q70Rx16ek+3HTKTM+SL1j5ZyjvL3xw71g/Akyc/nvhnTv5F5emWESMcfv+7JHv7oQBqaxs2f/jXPlnBs8+MVZ/MepndUH9+9c48BL/5QeI4VOzd+Fk1AMz+/a6p7tKKvRs/c1/1yayXmT4A041Tf371zjz+mt2xkLfLbsG5dz/Fmt2xLuqz3r+yavdZ5qVX4ocrQiykJVkbsm7KrvJVb1Hr7H1PviolzCAan6KHTy069+6n+fIZJ0v3bvysWtenqPvt5hRfKBbJX7M71kVlzSbDZcHeuCCbrluZR46qHtbyXL0wOciy/daZzbvqVS4smPuXaCfcL/rjn26YejFEn6DvbJOvxf9ZvfDCjS79tqlp4EdFODkN37BpV0ND8zvL34yL4zc0NpeXVzOX5v06prRUkLZue98v5Nkmb/e7ebq0iTNqPA/VAoDnaK9yk4svH3n5AFy4PVZIyd+5Kh/QKX/B471xo6R+nHewF26yLilEcPbvd03dnFjfs1pJKzS1VW//bvuA2cg/a/gdHPkivRz1J1M0lgj+hmSXmlsPEaT2tbos2BvnWVN9H15qE0f9eVk0qm+1OwX1yYKIPkHfntLbw6wS7a36Zx35Fwve37CzoaEZwKUr1wEE+HsxlyZOCC4tFfxt3xf9s5LBiAuX0y26D6+QYABeIaNaSyqkHI47gh3tILpf7x4wGwD4XvYlFSJwHXnGzsML9sK961nVIs6o8doHOVtx39jB9dN2r9ou/E0DV+7K4UjrRWAWGTzeW3yjpJszXMO+fipcFiywKXjryNEm9Queq/ncgvTNu9rULyyYGyE+88c/GZCphTAn9Gno/f/++CN+7gcjVA9+fl5Dh3IqBYYnAya0Iq7IuYfhLoxkVJQo2rvFOdUiO0cvYEYAt7pE4198b/AKGcVpa6pGvVhqwei1OrzfTnq5u7rE5C4zgKbrVdA+qVbaqs9XgesK8IK92qqvm3499UdXnNRasKRm15G/HdV24ehJdb9ehdd3nzp45u+/p+Pc5oY+X/7JTwOjn5FTxwMoLasGMMLZAYC7+8jP9m+DtlApYSiCm9ULps7gOXq1VX8Bx0nKC2cr2j4cz5vNtbt3XoBZxk8QPN7bQnT1LIDrVQmq7rzLrF2fMCNLS7K+EBgwGMd3xa5PZK8N8+urswpbP1CLIejtX3LPPma2l+Oo1tLP4Biuv/OU9/76bqilSpP0u0/e+vQbw+YiBjE9POv5pN9VlB8VERDAKy0VMMFQAJaWFs5ODr9dug6AWqiUMAhZAPTm9aqENxdwW69+BvwWABMAFQN5peLNC8JRlV2Np/BnecFenPpv8wGguuSeNEQefgVU46GJmwHTx0MB4GxF2yez+Pi0p36yAKjgZvWChDftxN9mAYk93PLNlt8NtFx+uSr+ywFeAqENfb58+08/3//hSb8tBfLto4aGJnb0s6ur+0R2LvNaLVRK9IrqknvgiCuYzWt23DO/upUDuYttwXU1ZnCvkFEcqVRW/EPQ1Kp9nLOfnqvneAf30c8vr1Qe2zWIm9erwGmrlu3a2znqWdWU9/565tRBlf/IrSYA6LdDzz7uHqL3yL1p8fPziovjNzQ0sY8uNTQ2Axjh7KAwPJ/874lYLNE+BKEfwWcbVjMvmloxinXh7KermR3terEUOnapu8V1eoYOHu9toeKAA9C2Ue7lyAW0Fhw0BflXbkyeOkNfj25xHeAoe1Od9f4q5kWTGN76bjMDO5QwU3TaoS8BG11sd7jZWb7YHzo6YoTDwjcTurv+89nnx9nt5eXVjx9LJ06Q7RVETh3/v/89Ka8gR76Pya8WwWVSouxrn7Fqqrv03nU9cUxesBen+0bGu6tWy/87V4+XvTTkbPasEAtplaEhy95z83oV1zdA/q63n8KseX33qYNnTm1cPNDrINTQaYf+CBx41PEi0N0vO0sJ8TOZI/SbNzGWElpbH3/610MNDc2ffX78979LYvaUFI39sKRnEdYZe8YkrD+/emeeK0f7uU9XR3tAR3mqs59mOG5OSdwdkggYEJ105XDU5Cm/WhQ71ZePPIC9pyQ69+6GfFY3FdOVdZZeV3tPVGcVYtdUSKV6PsWM4QZVh31Kov68LFr+vENQ8rKgZNzPTf/bUfkpetmFuL/8HbIT9RH8DclesipZNmF/+XsY2qszV+TLKzDWiqXw4Li9kgQc6oflE4aizH23bLj1L1584a9N7Xp6z7Id8qrNkLUPHvfL2voPyn1HmD/M2QDh6bdXkYaaE0o79ErHD7tdh6YMt9bTu+nJT6vvG1xXkyAIkzF+Cs8S0u9OkoCaGUoNrej+38wqPVV0CWIg0UgFIIf1AP6gJWnjmTludCLVPKE89gD58gRBGAvlYCYIgjAeqkkn4z/d3YNgCoIg+hmyQwmCIIyHNJQgCMJ4SEMJgiCMhzSUIIh+JjH9wtal/TpjxIdfHfgwqk+GNqM9Je64yTHezEN43VUXrhYzZ/k9QxJD1ZJgsK4SqsxK2xfnzm6oO5Oy7TxCF29PCkPZrrS9AgBISM3ge0jKdqXtHZ22L86d6QMw3WzrzqRsOx+9LiMe8nbZLTi1fAfWZcRrpGMS5adsz2Ze8pI+Xh1uKSk8lHaoWHY1WvUWtc4+IvmqlDCDaHyKnmAmYo2vNrVyVX4rtq/0t9W9fsUV4anlO3KV34AHazbWZ2S+N8121R8He2H9yny3dTHIWVR7W619gsOyZPuazIqv/92/60lMvxDrWLh3f0/9fvJ896GzyOlqtnZDzzpBPHkMqv/OrREZMGnB+/mxealbl15c3+O8vcVsNJTrM9nlUc6xSjEjpjND2o6V1ACoKcmqYXXzDEkMRRsJqA7Ob19+Xpc22bpH+EFQDvg5q9ZTcg2IxvlcAK7DbNEDudtScgGd8hca4YOiwrownzAeilmXFCKYkJrB355Up1RYXUjKNLVVP7MCXYWFZfbhvFkAS3DZUydlOLjKhayraM8fPi8Ho4AZ252V0ymmjl6XEf/x4lqmG6AiqQoSUjP4HqL8lDQ1fZT/3Urp3acY9CxNjx0tPDdjg0oa9R7k0iRkrj8x9ui8r1JrXttxyaQDm40vL648faaS0UbxDVETuKM8NTtxQv24HVVVNZpXCH24DrPtEorACw8FwAt3by0sk9hyRiPUiQuhqM4jMAEAonn2hWVC2Dv5GTuPXxgPooJDAqGte4T2QbJLDTEajCEhwL2u9FCRQOIaEK196h17yiTu/FT1q8Wfp+ULbf0XJ4Wq35ErEMJymJveaf2c7dFVdFbTwHQdZgvhZRJQVaJSoz06i05kmWCojmxuzgeGGaEy9i87d5cz9rVkE0zOxmzsUEPw9Pa26q4S9Vn2ycFMa+lZ6ZTZrgAifFpLj2CKrPhFV8tZARY684DRgfaCs4Jh4e56x9EHL9zdVnxNgLoWiSUvPBTlGsam34op7l2Csz0ZoUYQzfOQSE+jGOKksMAE5GrzmsuLBBJ/nnMoatUuZJeK+HEOroDKwnhJEz1Qd0bd8NTEMmx2wuflWmb0mLaCl9u3MmrzxmGe/CfWzHbYx34QEqN8NlaZ6Mx5je+iVxSVJjtZ44xszRTizTEhlgA6S5Q+PmuK+4JtG5VJidhTPP7u+/SdP2iZQuWWyCle1sIr77PqTP3k+e5DLyZHx5iHMWMAAB12Vz+xkNdof+L5bgvT4eGlEbeuAgAmd8REMiowRN2Xd++e/FabPOcH5+YH1ioVwrJuCWPnjU0EVEQ8cvOBteFWd7MXLMuEEZijhnLHuTtCXKhhbXq6cvGwnCKhRlJeJFjIn+XnzBMLPocz6wnf7FLxxxF+CcO4otPlmGP8BKERPpbCy9kACirnq7rzrnEZ++IAAJLCQwrXWB+2/qsz9sleG+DXzwp0lVQeEgCCO3Vx8WruvOrADjrS9HOdeepTq8dhPeL3ZcTLXsv8+vK9aafWZcTzMzL4qhHP7B17nLev9F+dsc/AuATzL1mlSXr7I/2O59gP7CoXlfwDAH41fd+YmA/abm9sB6Nuw2sPL2puhCweyuC8xnfRK505iypuQxYPZQ1mFZI85vF332/b+YPzGt9FbzqU/ru5ETZvHObZfff9tp0/MFOs+0Cmic5rfJVTsJnvppxCjYhIX6uOinvsphdrPhlRo9uXtx7TYnNpRM5VWCeIJ0d2OF61bgJw1TrnqjXcuye/pfbUyn+D3mrruDTi6lVdX9j+2/fm8V0iARO68+anoVyfyd4WHVV31CWU6+Pv1F114cGALOrZRhYALS6onL94oX3r5b3ACgCMv9kCnL/Tun3hRFQeF8CoMiCyWcJ4tnXf5AKAoFAkCZeHXwG1oOR2wNTx0IQAhXmbKxDG8+URXqNgpo5ep5BLBdriofIYcbRMSZV9yvempcj2r1Zn7FPZZ9PGpQ1Lev0P+/ZGhUn9Q2lNZ4inhTPaG2Hj83JnSaaGuuFXAZ5Wohxt6gaAZUs21nfilSGOQON8O/eu2sMyA/OHr79pDomxG4t22QiW9gETmhu1bEk5+MyvvX1co3mUPQdN9b0pKNnxvRNje3bcsugY023jjqaenHcn7//i6i/1dOAM9VTVUGO+eRZmpqFcnzkz3awflmfdUHfYPQPdrMkIfToEhSKEc0pzAT+AHffMFbTGT2wpLAZc0WMEUAe8cHdbiegu86a8sRX+w9wAdZMze8cpXsY0tR2npyaa54HWUrlet0jAcw5Vc8wBMH8zJJV1gLNqe6gTFxA3CgBlgfrc/KJpSb3Q4txtKbngJX28On7drFyW9cooafS6jPj5iwuL9djgxtihmO+2LsZB+barFQAmWNgBrVp6/9LeUkurgrZ6mTOO47XbjgOAs4sVLB0WHWb/RsjCAo07Kw6v8V2UHBKSDJUwwvHabcC6mJB1MVCNCfQDv7z1wbCgjS0xGwGg4/u+3aSSY1YaOpLPCOhlDWOT6+PvhKZiMkKfDubfMxiNY8c9s3ekME5oXYsEw7Tf3NWiHkZkExrhY6nigAPQFpfkOdubvJ7SrEBXAIpwAQCoHwwAwEhtV1FhMRCm0u4XxrMFE4VgUfz5ZX5GLwOajAHu5KfxxyNXIIzna/ujoqT31tAEh2UxDqKckn8werfGd5GWfdinorG+E56th5drmrQA0LizYhsAJnSw7z9Nim7Ha7cdr5UtKdnt0b/l8nqvVQo/lwigD2ub//LWByMAJjD6MOiRPITKQvrYtJvSZrMvD05onJ9jZ22OpoACXPfh1p21N2k/vt/IFQjhOkW+VT0rje8hERXoiWP6hfFsu4r2LE9Jkf93qg7uPI1q9Qlzwi0llUUm3WZJCHCH8BRr6j1lEs2DAX4rtse7SgqPa1iCCakr/W1F+dqcdIHQ1n+O9l1+7cya7W+r7YtitqdKjQ4vaMdtyFB0tjJ/2SY4xCu2cf4tqemy8pzwK0DNUG2vvA93Pxum/7Jkt6E9TnG8TWTpFr/mV/p7NUk6tbY31qu2F1yq6LT2jYjU6Phi+2NYu/+gL/97bxG91KGldenYUWipV/tbFbn5QN6Fo9mbI4ybyVzsUO64QG8rAG4xv5H7DZ21OcxpJ67PZG+LpuJK8uN7hHWomzEJ686kbDvvxtF+7tPN2R5o0T4SsyWSlBGeBBgQnXTjqGuHIi4JsPeUhKeWp7GlRMV0Ze3h6GrXxM/ZHrI4rAxm/z08FI3qU7OE0jJs5T7GHJUUHkrRHqnMPl04ke2bs/eUZPFNtScIFF+U2jF+Ax8T6B3Ha3P8QmIU3nROc4xsp/CHr7+o9Uwes+4wgOaczNoJyUOYC7c3CnwO89YdBtBZkimwTx7Z0xzt/1gkeOMwMxQA5T672r5/jnxzSW3fvySTHX699E31O+FekVG4xNqaB4Cmg8MebmyZvLENUNuX14Lj2w3B8oV7vdXgpdiyV9mUR8f3TuqbS4lBHribrX6y6lL9o7WwsvaNiESBEYFRysEMAA7DXqit6+rTKeJmTzxz9lqfTkEQ5s/S9KPzhvUY5+2zqXFuxjLN06mJ6RdiR/ccfdaO+fjyBEEMfpiD7u8Y6zgbT/LWeR73TmgRUCDZfzRwN99IWTcXX54g9KORCkDOgD2HThhH1rKZSL8QuxQFJn90XTcRH/KHF+1YojFjxIdfrQjjwOgD9iBfnoF8eYIgjIN8eYIgCOMhDSUIgjAe0lCCIAjjIQ0lCIIwHtJQgiAI4yENJQiCMB4zOh+qvZ4SAIzk/8bPUfaaiinp4zmtp9T7KVS/K0VdEAZ2fST51NHrMqZJ5eOofZ8mYuR8YQRGHD8+ROPKfyauamA+n7Ty5Zzcl4yeghPdFONqlXPAegDymMt/hUycNGDgMRsN1VVPCSP5v/FDcR5TVUn1EqHOc1xPqXdTzErbF8eVFTviJX28euXHYJVXYtVBSkhNSziveoZ/VlofCKhehlzb7QH86L/kvlFpCYk+xWx8eV31lLjWVuiWyA1PsaRbx/2EHp6Hekq9mcJvxRT3rqIjMhEUHDpexBQvAXhJ88Ns684o9TF7h9pDUNHr4tzZHYjnHbOxQ3Uhrix76BY+czIuXC0Wj+SHcjuqrpMR2nsGez2l3kzBpItmZZkqlhcvQYSPpaTwuO64QUJqvKvw1HJTZ2BiMXK+MIJJEd2o1a9XxbUj5tfNHOZ1p4OKk86+BG7B7qFqSSU50U0xPp09BAdCF29PGnb5UMs0WXBDkftK1REJXbw9iVd5KO0QFm9PGlZZZh/ub4u6M6cQF++q6lIoS0yz02ix4iqsuI3fiu0rOd+kCAJkt6iGdJK35iWM6ijcm7ChD7ORGoI5aqhaPaWay3k1niGJM2d4A03FeadJQY1jUNdT6vUU4kZtA/YQzYhI49sXHkozKKKXmH4hdrRqkwEPZTs3jKl8+fjxl+DaEfPrholhHteKdHd27Yj5dbPkmkdOEQCMnC+MWQKZjKpe0oQT3RTj86uC3Y4GpDX3iE/CqeXas/Rr7R/OOZOSH5DBj5tWtmtP2eKVyqowHvETi/Ys31GuMpR6XCVjHZRa6RqX4So8tTwlF7PS9sVpxFXMAfPTUI16Stxxk2O8UXUhr5gbkhg6I9FVW6J7Qg+Dv56SUVP0Flv/MFtImnvuCADIWjbTiArAjSNkVmGd9feNzWO4PwI6jUSOfyen06FArpIPrjlIf93p6mpdVoeRE5s5jSN0CajrfGGAsxbLVAeSwkM7WD9WLVn61fvnn4drACC8vFdQnsCumCA8Jdu7Exy6Jgyf6OQHlCcEuHcV7VHEVa4Jw1XKYSnM1bvNXfBx5gGy34rM9TOMzRJiWsxMQzXrKckSMOcViwFxSRZCEkPdQ7kPaGveCAZtPSUjpuCy/jUyiBsFqGuRwF7XLZKyXWmNczKSUhuLDdhcNs4OVYVj+z99GmrbCamt0nmv+4UEnbbOQN2PthxI6/5P+21WzQFWkFbaDLwdwvymOdvD0kOeD5tBqHyprEAjOPSHlH5cnOGYlYZqq6fEtbZGd4NCMcUdHbAYiLUNCgZpPaXeTqFhJodG+FhKKuuA4ofiJI1DBWyyd5ziZcR/vLj2Dz2FC4yzQ5Xo1UEAgFRiBdcnHMVndX1iC6vaRgAvSaS69bfTIefALwJW3Y/BUx2Tekr8nO3RJaiV/SoK9vT4fZovZrMvr6ueUs3DJliMcJfFxj0D3azR3UZGaF/zLNVT6v0U5UUCiWXYwhVMFU9mL/6bQ8UAzp8tk9j6r05LUIyWqnwNAMjdtqsQYSvXaXw00xLWHmBlVVumT+OkZVZSq+YAmQH3o390M6fRtqwOAB6IuHBumBim69Yh1/7pAJ/7MdE/slujUrMvHM27sHWpAesTNLbClsMY2rPSFMdpDYVVeCq7VKT8WfSC5K15F47mpSf29j6TYy52qO56Sg/yL1jPmTk+0ZtpFRfS4VDdPI/1lGT0aoriz9OA7UmydoniNChjqiekZvAzMviK/mozCQ4dL/JJilPZ+jAFUokVfBrmr2LecZUbPmGP50+Umw0+9+f7yLfs66xzrj2ZP1E4fyIA1X38oqHHAeUlzX152b3357s6GHfkPje/aFoS851LCg+dQVJPeYjrWiQIUxSkEuWnpMl8lPPblyNtXy9/3EDN4w7A2sN/KdCPuZy1QDmYAcrBTBDPHkwK+nsnZq4fWA01H1+eIAjCYKIi/DjoKDw3sAIK8/HlCUI/VE+JULA0/eg8D5jDAXuQL89AvjxBEMZBvjxBEITxkIYSBEEYD2koQRCE8ZCGEgRBGA9pKEEQhPGQhhLEYCZy84HszRHK98lbzeH5yMGEGZ0PNaie0kNKfKeP57KeErv8kQJZiST1L4T10KrKJdmqlBmCDZ7drIncfGBt+KMTM1mHKDPPFX21InvzPXM4WTk4MBsN1VtPyarqetYNKcAJjRs/Z5z09I0BKKn1TPBc1lMq/jyt+HP54Fqqnmk5hK9WNEmBPH+V34rtK/symZDpxtdTdA9Rqe+Eo2iH2qOQBe9nRGSnLRUOmwAABc1JREFUrkhPLuhdIj5CB2bjy+uqp+Tp5AhxmUw0pcXlYmtvb88BW+UzynNVT8kQXIfZQnh5kNdEWjpvrLXwyvsXNS5c3PG3ws7R/NTIAVjUIMRs7FA9dHYo3XpxRweG23EBSn/XO56bekoG4zFtBS+332XUb8X2lf6MuR8mTzysDH2wrqrEQ1TjFUxqd1bEQ5GYil3kOTHIo7Noh/Ycppe+qX4n3CsyCpdUFDYx/ULsaOntj17bcckkH/b5wBw1VKWekrijw8ot2LMyvwaQ5w8d0NU9swzyekq6cVckslP49UxmP//VGfuedvCo1OzUsdYqTZ1FO5Zosf4YmDTYWn15vxXbV/q3yhL3qVQ0mZWWFCZWJotjEBz6Q8oh3b58sv9oPLqlaxkXC8pTxtp7Aro6EAZjfhqqVk9JXHm62DoxdEZiKAA0VdV2OA0fyOU9izwX9ZR0ozUpiVLL/Fdn7FM1+nrDxR0JJpIhXri7rShfnvk0+3ThxNXsv0PuvFmA4VtbkS7DIa3Wn2nX0SUCYO8sPW3u/ecTM9NQzXpKAGpKshS/C54hiZTH3liej3pKvYFR0uh1GfHzFxcWG7PD01s7VDejHSxVTGYAEtn/mSzFMlvehH9dCFNgVhqqrZ6SKp6uXDwspzz2RvJ81FPqNbkCYTxfm+IbgOns0LvNXcA1XXn8mBMXTGB0dVpCj+n+LtU/Whs+1BPQE9lsqqfjTSbAbPblddVTYuE5bUa4k7iQzof2A89wPaVew0ua6IG6UoOqxpuI8sZWWDLHJBQICkUSd35qtP47ix+qOmGCxlZoPQWRWXYXo4KSdQwTFeHH6WxVN0YS0w2up0QoMBc7VHc9JU5o3HhvKwDAw/KsYySg+niO6ynphu0gMx+Etf1tgvGNgakPKvt6ZdHY8r1pe1ZsXymvOKTcmld9iEBStou9uZS77UzgvjjZFj97Xz7rljB23thEQEuIM3KKl7W0+pK6BX2vVYrRnFFByQAdHTUYysEMUA5mYlASlZqdOrZJs6h9VGp2qle5tqBt5OYDa8Ot7mreQujGfHx5giBMCnOWPkHNN4/4MGUsCg9r2/WKiPS1gvT2VySgvcFcfHmC0A/VUzKCSxuWYPOBdzZH7Fc8HZ8cG9Zybobmw/LJW/MSRoEO2Pce8uUB8uUJgjAW8uUJgiCMh3z5fsLJyWnpkgTN9v0HyA8liGcY0tD+I/3IP9Rali18Y0BWQhCEqSBfniAIwnhIQwmCIIyHfPl+5O2/XIx3BzoLdy5cf3mgF0MQhCkwHw1lFU0Cmorz8pUP87Ie95Q9APpscvCPUQcR9acj63+7PuryVsrcSBCDAPPR0Af5imfhPUMSQ0M8a5h6SvCcNt67vTzrzANGTGOmdTzTZekufitYGWbnRdlvCWJQYJbxUHFHByzsuAAAro+/U3fVHUY0pcXlYji5h3IHcnUEQRAKzFFDue7DrTsf3RWrvwY4oX5cwMKWNJQgCPPAfHx5eRJ7ABAXHmMFPds7xPKrncXXq/zGj7DlmF0eX8O5XP9wTXDQ28DBgV4JQRBPjTlpqLjy9LFKAOD6zPnNjFGsbSXuuMkx3t2Fx/JqwAn1Q6fkmRVQADiSPPtIyp4TF8+Kqk7cGOjFEATxVJijLw9xZdlDOLqOlL118ovhiLKOMVtMHFurAVyZSViYefZE0J15UbP/+N1AL4UgiKfELDUUANAhlQIQix51QLGnBHCtrSC+90wXVJrm4gTRLXLkCWJQYJYa6hkS7tTdIJICgLihodPCe5IPFwA4oZPcrB8+fKYllCCIwYTZxEM9QxKVR5bEhceuyoVSWnzmOuLGy+os6a36SRAE0c+YjYayi8irIy0+k1fcn4shCIIwDLP05Qc1UZN41tK26oFeBkEQJsFs7NDnAWXOEXpYniAGCaSh/cjBP0bRdjxBDC5IQ/sPylpPEIMPqusJ9EtdT4IgBiW0p0QQBGE8pKEEQRDG8/9Vm4UekzBIrQAAAABJRU5ErkJggg==)

### 总结

这一讲，我们介绍`solidity`中两个关键字，`constant`（常量）和`immutable`（不变量），让不应该变的变量保持不变。这样的做法能在节省`gas`的同时提升合约的安全性。



## 控制流

`Solidity`的控制流与其他语言类似，主要包含以下几种：

### 条件判断

1. `if-else`

```solidity
function ifElseTest(uint256 _number) public pure returns(bool){
    if(_number == 0){
    return(true);
    }else{
    return(false);
    }
}
```



### 循环

1. `for循环`

```solidity
function forLoopTest() public pure returns(uint256){
    uint sum = 0;
    for(uint i = 0; i < 10; i++){
    sum += i;
    }
    return(sum);
}
```



1. `while循环`

```solidity
function whileTest() public pure returns(uint256){
    uint sum = 0;
    uint i = 0;
    while(i < 10){
    sum += i;
    i++;
    }
    return(sum);
}
```



1. `do-while循环`

```solidity
function doWhileTest() public pure returns(uint256){
    uint sum = 0;
    uint i = 0;
    do{
    sum += i;
    i++;
    }while(i < 10);
    return(sum);
}
```



1. `三元运算符` 三元运算符是`solidity`中唯一一个接受三个操作数的运算符，规则`条件? 条件为真的表达式:条件为假的表达式`。 此运算符经常用作 if 语句的快捷方式。

```solidity
// 三元运算符 ternary/conditional operator
function ternaryTest(uint256 x, uint256 y) public pure returns(uint256){
    // return the max of x and y
    return x >= y ? x: y; 
}
```



另外还有`continue`（立即进入下一个循环）和`break`（跳出当前循环）关键字可以使用。

### 用`solidity`实现插入排序

#### 写在前面：90%以上的人用`solidity`写插入算法都会出错。

### 插入排序

排序算法解决的问题是将无序的一组数字，例如`[2, 5, 3, 1]`，从小到大依次排列好。插入排序（`InsertionSort`）是最简单的一种排序算法，也是很多人学习的第一个算法。它的思路很简答，从前往后，依次将每一个数和排在他前面的数字比大小，如果比前面的数字小，就互换位置。示意图：

![插入排序](https://i.pinimg.com/originals/92/b0/34/92b034385c440e08bc8551c97df0a2e3.gif)

### `python`代码

我们可以先看一下插入排序的python代码：

```python
# Python program for implementation of Insertion Sort
def insertionSort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i-1
        while j >=0 and key < arr[j] :
                arr[j+1] = arr[j]
                j -= 1
        arr[j+1] = key
```



### 改写成`solidity`后有`BUG`！

一共8行`python`代码就可以完成插入排序，非常简单。那么我们将它改写成`solidity`代码，将函数，变量，循环等等都做了相应的转换，只需要9行代码：

```solidity
    // 插入排序 错误版
    function insertionSortWrong(uint[] memory a) public pure returns(uint[] memory) {
        
        for (uint i = 1;i < a.length;i++){
            uint temp = a[i];
            uint j=i-1;
            while( (j >= 0) && (temp < a[j])){
                a[j+1] = a[j];
                j--;
            }
            a[j+1] = temp;
        }
        return(a);
    }
```



那我们把改好的放到`remix`上去跑，输入`[2, 5, 3, 1]`。BOOM！有`bug`！改了半天，没找到`bug`在哪。我又去`google`搜”solidity insertion sort”，然后发现网上用`solidity`写的插入算法教程都是错的，比如：[Sorting in Solidity without Comparison](https://medium.com/coinmonks/sorting-in-solidity-without-comparison-4eb47e04ff0d)

Remix decoded output 出现错误内容 ![10-1](https://www.wtf.academy/assets/images/10-1-e9590da7aad6c176501b7fc5abe3372f.jpg)

### 正确的solidity插入排序

花了几个小时，在`Dapp-Learning`社群一个朋友的帮助下，终于找到了`bug`所在。`solidity`中最常用的变量类型是`uint`，也就是正整数，取到负值的话，会报`underflow`错误。而在插入算法中，变量`j`有可能会取到`-1`，引起报错。

这里，我们需要把`j`加1，让它无法取到负值。正确代码：

```solidity
    // 插入排序 正确版
    function insertionSort(uint[] memory a) public pure returns(uint[] memory) {
        // note that uint can not take negative value
        for (uint i = 1;i < a.length;i++){
            uint temp = a[i];
            uint j=i;
            while( (j >= 1) && (temp < a[j-1])){
                a[j] = a[j-1];
                j--;
            }
            a[j] = temp;
        }
        return(a);
    }
```



运行后的结果：

!["输入[2,5,3,1] 输出[1,2,3,5] "](https://images.mirror-media.xyz/publication-images/S-i6rwCMeXoi8eNJ0fRdB.png?height=300&width=554)

### 总结

这一讲，我们介绍了`solidity`中控制流，并且用`solidity`写了插入排序。看起来很简单，但实际很难。这就是`solidity`，坑很多，每个月都有项目因为这些小`bug`损失几千万甚至上亿美元。掌握好基础，不断练习，才能写出更好的`solidity`代码。



## 构造函数

构造函数（`constructor`）是一种特殊的函数，每个合约可以定义一个，并在部署合约的时候自动运行一次。它可以用来初始化合约的一些参数，例如初始化合约的`owner`地址：

```solidity
   address owner; // 定义owner变量

   // 构造函数
   constructor() {
      owner = msg.sender; // 在部署合约的时候，将owner设置为部署者的地址
   }
```



**注意**⚠️：构造函数在不同的solidity版本中的语法并不一致，在Solidity 0.4.22之前，构造函数不使用 `constructor` 而是使用与合约名同名的函数作为构造函数而使用，由于这种旧写法容易使开发者在书写时发生疏漏（例如合约名叫 `Parents`，构造函数名写成 `parents`），使得构造函数变成普通函数，引发漏洞，所以0.4.22版本及之后，采用了全新的 `constructor` 写法。

构造函数的旧写法代码示例：

```solidity
pragma solidity =0.4.21;
contract Parents {
    // 与合约名Parents同名的函数就是构造函数
    function Parents () public {
    }
}
```



## 修饰器

修饰器（`modifier`）是`solidity`特有的语法，类似于面向对象编程中的`decorator`，声明函数拥有的特性，并减少代码冗余。它就像钢铁侠的智能盔甲，穿上它的函数会带有某些特定的行为。`modifier`的主要使用场景是运行函数前的检查，例如地址，变量，余额等。

![钢铁侠的modifier](https://images.mirror-media.xyz/publication-images/nVwXsOVmrYu8rqvKKPMpg.jpg?height=630&width=1200)

我们来定义一个叫做onlyOwner的modifier：

```solidity
   // 定义modifier
   modifier onlyOwner {
      require(msg.sender == owner); // 检查调用者是否为owner地址
      _; // 如果是的话，继续运行函数主体；否则报错并revert交易
   }
```



代有`onlyOwner`修饰符的函数只能被`owner`地址调用，比如下面这个例子：

```solidity
   function changeOwner(address _newOwner) external onlyOwner{
      owner = _newOwner; // 只有owner地址运行这个函数，并改变owner
   }
```



我们定义了一个`changeOwner`函数，运行他可以改变合约的`owner`，但是由于`onlyOwner`修饰符的存在，只有原先的`owner`可以调用，别人调用就会报错。这也是最常用的控制智能合约权限的方法。

### OppenZepplin的Ownable标准实现：

`OppenZepplin`是一个维护`solidity`标准化代码库的组织，他的`Ownable`标准实现如下： https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol

### Remix 演示示例

以 `Owner.sol` 为例。

1. 在 Remix 上编译部署代码。
2. 点击 `owner` 按钮查看当前 owner 变量。 ![img](https://www.wtf.academy/assets/images/11-1-158ba3a195f7ecc313538aae20c45658.jpg)
3. 以 owner 地址的用户身份，调用 `changeOwner` 函数，交易成功。 ![img](https://www.wtf.academy/assets/images/11-2-4127c92edede8fbe048358b699b57589.jpg)
4. 以非 owner 地址的用户身份，调用 `changeOwner` 函数，交易失败，因为modifier onlyOwner 的检查语句不满足。 ![img](https://www.wtf.academy/assets/images/11-3-c6c793034d8354ecf203513b644321df.jpg)

### 总结

这一讲，我们介绍了`solidity`中的构造函数和修饰符，并举了一个控制合约权限的`Ownable`合约。



## 事件

`Solidity`中的事件（`event`）是`EVM`上日志的抽象，它具有两个特点：

- 响应：应用程序（[`ether.js`](https://learnblockchain.cn/docs/ethers.js/api-contract.html#id18)）可以通过`RPC`接口订阅和监听这些事件，并在前端做响应。
- 经济：事件是`EVM`上比较经济的存储数据的方式，每个大概消耗2,000 `gas`；相比之下，链上存储一个新变量至少需要20,000 `gas`。

### 规则

事件的声明由`event`关键字开头，然后跟事件名称，括号里面写好事件需要记录的变量类型和变量名。以`ERC20`代币合约的`Transfer`事件为例：

```solidity
event Transfer(address indexed from, address indexed to, uint256 value);
```



我们可以看到，`Transfer`事件共记录了3个变量`from`，`to`和`value`，分别对应代币的转账地址，接收地址和转账数量。

同时`from`和`to`前面带着`indexed`关键字，每个`indexed`标记的变量可以理解为检索事件的索引“键”，在以太坊上单独作为一个`topic`进行存储和索引，程序可以轻松的筛选出特定转账地址和接收地址的转账事件。每个事件最多有3个带`indexed`的变量。每个 `indexed` 变量的大小为固定的256比特。事件的哈希以及这三个带`indexed`的变量在`EVM`日志中通常被存储为`topic`。其中`topic[0]`是此事件的`keccak256`哈希，`topic[1]`到`topic[3]`存储了带`indexed`变量的`keccak256`哈希。 ![img](https://www.wtf.academy/assets/images/12-3-b08311699b4378c7b077f1cd966b51e2.jpg)

`value` 不带 `indexed` 关键字，会存储在事件的 `data` 部分中，可以理解为事件的“值”。`data` 部分的变量不能被直接检索，但可以存储任意大小的数据。因此一般 `data` 部分可以用来存储复杂的数据结构，例如数组和字符串等等，因为这些数据超过了256比特，即使存储在事件的 `topic` 部分中，也是以哈希的方式存储。另外，`data` 部分的变量在存储上消耗的gas相比于 `topic` 更少。

我们可以在函数里释放事件。在下面的例子中，每次用`_transfer()`函数进行转账操作的时候，都会释放`Transfer`事件，并记录相应的变量。

```solidity
    // 定义_transfer函数，执行转账逻辑
    function _transfer(
        address from,
        address to,
        uint256 amount
    ) external {

        _balances[from] = 10000000; // 给转账地址一些初始代币

        _balances[from] -=  amount; // from地址减去转账数量
        _balances[to] += amount; // to地址加上转账数量

        // 释放事件
        emit Transfer(from, to, amount);
    }
```



### Remix 演示

以 `Event.sol` 合约为例，编译部署。

然后调用 `_transfer` 函数。 ![img](https://www.wtf.academy/assets/images/12-1-21d3090d03ff4dbb241e5810f2177fe8.jpg)

点击右侧的交易查看详情，可以看到日志的具体内容。 ![img](https://www.wtf.academy/assets/images/12-2-4faa09c9994dc41555b86c1f023b4c38.jpg)

### 在etherscan上查询事件

我们尝试用`_transfer()`函数在`Rinkeby`测试网络上转账100代币，可以在`etherscan`上查询到相应的`tx`：[网址](https://rinkeby.etherscan.io/tx/0x8cf87215b23055896d93004112bbd8ab754f081b4491cb48c37592ca8f8a36c7)。

点击`Logs`按钮，就能看到事件明细：

![Event明细](https://images.mirror-media.xyz/publication-images/gx6_wDMYEl8_Gc_JkTIKn.png?height=980&width=1772)

`Topics`里面有三个元素，`[0]`是这个事件的哈希，`[1]`和`[2]`是我们定义的两个`indexed`变量的信息，即转账的转出地址和接收地址。`Data`里面是剩下的不带`indexed`的变量，也就是转账数量。

### 总结

这一讲，我们介绍了如何使用和查询`solidity`中的事件。很多链上分析工具包括`Nansen`和`Dune Analysis`都是基于事件工作的。





## 继承

这一讲，我们介绍`solidity`中的继承（`inheritance`），包括简单继承，多重继承，以及修饰器（`modifier`）和构造函数（`constructor`）的继承。

### 规则

- `virtual`: 父合约中的函数，如果希望子合约重写，需要加上`virtual`关键字。
- `override`：子合约重写了父合约中的函数，需要加上`override`关键字。

### 简单继承

我们先写一个简单的爷爷合约`Yeye`，里面包含1个`Log`事件和3个`function`: `hip()`, `pop()`, `yeye()`，输出都是”Yeye”。

```solidity
contract Yeye {
    event Log(string msg);

    // 定义3个function: hip(), pop(), man()，Log值为Yeye。
    function hip() public virtual{
        emit Log("Yeye");
    }

    function pop() public virtual{
        emit Log("Yeye");
    }

    function yeye() public virtual {
        emit Log("Yeye");
    }
}
```



我们再定义一个爸爸合约`Baba`，让他继承`Yeye`合约，语法就是`contract Baba is Yeye`，非常直观。在`Baba`合约里，我们重写一下`hip()`和`pop()`这两个函数，加上`override`关键字，并将他们的输出改为`”Baba”`；并且加一个新的函数`baba`，输出也是`”Baba”`。

```solidity
contract Baba is Yeye{
    // 继承两个function: hip()和pop()，输出改为Baba。
    function hip() public virtual override{
        emit Log("Baba");
    }

    function pop() public virtual override{
        emit Log("Baba");
    }

    function baba() public virtual{
        emit Log("Baba");
    }
}
```



我们部署合约，可以看到`Baba`合约里有4个函数，其中`hip()`和`pop()`的输出被成功改写成`”Baba”`，而继承来的`yeye()`的输出仍然是`”Yeye”`。

### 多重继承

`solidity`的合约可以继承多个合约。规则：

继承时要按辈分最高到最低的顺序排。比如我们写一个`Erzi`合约，继承`Yeye`合约和`Baba`合约，那么就要写成`contract Erzi is Yeye, Baba`，而不能写成`contract Erzi is Baba, Yeye`，不然就会报错。 如果某一个函数在多个继承的合约里都存在，比如例子中的`hip()`和`pop()`，在子合约里必须重写，不然会报错。 重写在多个父合约中都重名的函数时，`override`关键字后面要加上所有父合约名字，例如`override(Yeye, Baba)`。 例子：

```solidity
contract Erzi is Yeye, Baba{
    // 继承两个function: hip()和pop()，输出值为Erzi。
    function hip() public virtual override(Yeye, Baba){
        emit Log("Erzi");
    }

    function pop() public virtual override(Yeye, Baba) {
        emit Log("Erzi");
    }
```



我们可以看到，`Erzi`合约里面重写了`hip()`和`pop()`两个函数，将输出改为`”Erzi”`，并且还分别从`Yeye`和`Baba`合约继承了`yeye()`和`baba()`两个函数。

### 修饰器的继承

`Solidity`中的修饰器（`Modifier`）同样可以继承，用法与函数继承类似，在相应的地方加`virtual`和`override`关键字即可。

```solidity
contract Base1 {
    modifier exactDividedBy2And3(uint _a) virtual {
        require(_a % 2 == 0 && _a % 3 == 0);
        _;
    }
}

contract Identifier is Base1 {

    //计算一个数分别被2除和被3除的值，但是传入的参数必须是2和3的倍数
    function getExactDividedBy2And3(uint _dividend) public exactDividedBy2And3(_dividend) pure returns(uint, uint) {
        return getExactDividedBy2And3WithoutModifier(_dividend);
    }

    //计算一个数分别被2除和被3除的值
    function getExactDividedBy2And3WithoutModifier(uint _dividend) public pure returns(uint, uint){
        uint div2 = _dividend / 2;
        uint div3 = _dividend / 3;
        return (div2, div3);
    }
}
```



`Identifier`合约可以直接在代码中使用父合约中的`exactDividedBy2And3`修饰器，也可以利用`override`关键字重写修饰器：

```solidity
    modifier exactDividedBy2And3(uint _a) override {
        _;
        require(_a % 2 == 0 && _a % 3 == 0);
    }
```



### 构造函数的继承

子合约有两种方法继承父合约的构造函数。举个简单的例子，父合约`A`里面有一个状态变量`a`，并由构造函数的参数来确定：

```solidity
// 构造函数的继承
abstract contract A {
    uint public a;

    constructor(uint _a) {
        a = _a;
    }
}
```



1. 在继承时声明父构造函数的参数，例如：`contract B is A(1)`
2. 在子合约的构造函数中声明构造函数的参数，例如：

```solidity
contract C is A {
    constructor(uint _c) A(_c * _c) {}
}
```



### 调用父合约的函数

子合约有两种方式调用父合约的函数，直接调用和利用`super`关键字。

1. 直接调用：子合约可以直接用`父合约名.函数名()`的方式来调用父合约函数，例如`Yeye.pop()`。

```solidity
    function callParent() public{
        Yeye.pop();
    }
```



1. `super`关键字：子合约可以利用`super.函数名()`来调用最近的父合约函数。`solidity`继承关系按声明时从右到左的顺序是：`contract Erzi is Yeye, Baba`，那么`Baba`是最近的父合约，`super.pop()`将调用`Baba.pop()`而不是`Yeye.pop()`：

```solidity
    function callParentSuper() public{
        // 将调用最近的父合约函数，Baba.pop()
        super.pop();
    }
```



### 在Remix上验证

- 合约简单继承示例, 可以观察到Baba合约多了Yeye的函数 ![13-1](https://www.wtf.academy/assets/images/13-1-42f0a6c7cc188762c41239403eb84e8b.png)![13-2](https://www.wtf.academy/assets/images/13-2-9c0be37c4fab16f90c39580cbbead5ed.png)
- 合约多重继承可以参考简单继承的操作步骤来增加部署Erzi合约，然后观察暴露的函数以及尝试调用来查看日志
- 修饰器继承示例 ![13-3](https://www.wtf.academy/assets/images/13-3-7fb3ed386135bd918b84cd92949884a4.png)![13-4](https://www.wtf.academy/assets/images/13-4-c578cff17c65f768d1505da77c3cac0c.png)![13-5](https://www.wtf.academy/assets/images/13-5-58a3d5a358dbda0ffb40afb626801005.png)
- 构造函数继承示例 ![13-6](https://www.wtf.academy/assets/images/13-6-099cd67439dcb0194684557cc1e29289.png)![13-7](https://www.wtf.academy/assets/images/13-7-2c772dcd6711e67afd51118ae7ded35e.png)
- 调用父合约示例 ![13-8](https://www.wtf.academy/assets/images/13-8-dcc83777980c789aec12ff8467b8d51f.png)![13-9](https://www.wtf.academy/assets/images/13-9-49f35bff8cf0343cbbce2dd8fe9d3c59.png)

### 总结

这一讲，我们介绍了`solidity`继承的基本用法，包括简单继承，多重继承，修饰器和构造函数的继承，以及调用父合约中的函数。





## 抽象合约和接口

​	这一讲，我们用`ERC721`的接口合约为例介绍`solidity`中的抽象合约（`abstract`）和接口（`interface`），帮助大家更好的理解`ERC721`标准。

### 抽象合约

如果一个智能合约里至少有一个未实现的函数，即某个函数缺少主体`{}`中的内容，则必须将该合约标为`abstract`，不然编译会报错；另外，未实现的函数需要加`virtual`，以便子合约重写。拿我们之前的[插入排序合约](https://github.com/AmazingAng/WTFSolidity/tree/main/07_InsertionSort)为例，如果我们还没想好具体怎么实现插入排序函数，那么可以把合约标为`abstract`，之后让别人补写上。

```solidity
abstract contract InsertionSort{
    function insertionSort(uint[] memory a) public pure virtual returns(uint[] memory);
}
```

**注意：**被标记为 abstract 的合约不能被部署。因为 abstract 合约是一种未实现完整的合约，其中至少有一个函数被标记为 abstract，这意味着该函数的实现必须由子合约提供。因此，如果要部署一个 abstract 合约，必须先实现所有 abstract 函数的子合约，并在合约部署时同时部署这些子合约，否则无法成功部署 abstract 合约。

需要注意的是，子合约实现所有 abstract 函数后，abstract 合约才可以被实例化。而如果一个合约被标记为 abstract，意味着它不会被编译成字节码，也不能被部署到区块链上。

### 接口

接口类似于抽象合约，但它不实现任何功能。接口的规则：

1. 不能包含状态变量
2. 不能包含构造函数
3. 不能继承除接口外的其他合约
4. 所有函数都必须是external且不能有函数体
5. 继承接口的合约必须实现接口定义的所有功能

虽然接口不实现任何功能，但它非常重要。接口是智能合约的骨架，定义了合约的功能以及如何触发它们：如果智能合约实现了某种接口（比如`ERC20`或`ERC721`），其他Dapps和智能合约就知道如何与它交互。因为接口提供了两个重要的信息：

1. 合约里每个函数的`bytes4`选择器，以及基于它们的函数签名`函数名(每个参数类型）`。
2. 接口id（更多信息见[EIP165](https://eips.ethereum.org/EIPS/eip-165)）

另外，接口与合约`ABI`（Application Binary Interface）等价，可以相互转换：编译接口可以得到合约的`ABI`，利用[abi-to-sol工具](https://gnidan.github.io/abi-to-sol/)也可以将`ABI json`文件转换为`接口sol`文件。

我们以`ERC721`接口合约`IERC721`为例，它定义了3个`event`和9个`function`，所有`ERC721`标准的NFT都实现了这些函数。我们可以看到，接口和常规合约的区别在于每个函数都以`;`代替函数体`{ }`结尾。

```solidity
interface IERC721 is IERC165 {
    event Transfer(address indexed from, address indexed to, uint256 indexed tokenId);
    event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId);
    event ApprovalForAll(address indexed owner, address indexed operator, bool approved);
    
    function balanceOf(address owner) external view returns (uint256 balance);

    function ownerOf(uint256 tokenId) external view returns (address owner);

    function safeTransferFrom(address from, address to, uint256 tokenId) external;

    function transferFrom(address from, address to, uint256 tokenId) external;

    function approve(address to, uint256 tokenId) external;

    function getApproved(uint256 tokenId) external view returns (address operator);

    function setApprovalForAll(address operator, bool _approved) external;

    function isApprovedForAll(address owner, address operator) external view returns (bool);

    function safeTransferFrom( address from, address to, uint256 tokenId, bytes calldata data) external;
}
```



### IERC721事件

`IERC721`包含3个事件，其中`Transfer`和`Approval`事件在`ERC20`中也有。

- `Transfer`事件：在转账时被释放，记录代币的发出地址`from`，接收地址`to`和`tokenid`。
- `Approval`事件：在授权时释放，记录授权地址`owner`，被授权地址`approved`和`tokenid`。
- `ApprovalForAll`事件：在批量授权时释放，记录批量授权的发出地址`owner`，被授权地址`operator`和授权与否的`approved`。

### IERC721函数

- `balanceOf`：返回某地址的NFT持有量`balance`。
- `ownerOf`：返回某`tokenId`的主人`owner`。
- `transferFrom`：普通转账，参数为转出地址`from`，接收地址`to`和`tokenId`。
- `safeTransferFrom`：安全转账（如果接收方是合约地址，会要求实现`ERC721Receiver`接口）。参数为转出地址`from`，接收地址`to`和`tokenId`。
- `approve`：授权另一个地址使用你的NFT。参数为被授权地址`approve`和`tokenId`。
- `getApproved`：查询`tokenId`被批准给了哪个地址。
- `setApprovalForAll`：将自己持有的该系列NFT批量授权给某个地址`operator`。
- `isApprovedForAll`：查询某地址的NFT是否批量授权给了另一个`operator`地址。
- `safeTransferFrom`：安全转账的重载函数，参数里面包含了`data`。

### 什么时候使用接口？

如果我们知道一个合约实现了`IERC721`接口，我们不需要知道它具体代码实现，就可以与它交互。

无聊猿`BAYC`属于`ERC721`代币，实现了`IERC721`接口的功能。我们不需要知道它的源代码，只需知道它的合约地址，用`IERC721`接口就可以与它交互，比如用`balanceOf()`来查询某个地址的`BAYC`余额，用`safeTransferFrom()`来转账`BAYC`。

```solidity
contract interactBAYC {
    // 利用BAYC地址创建接口合约变量（ETH主网）
    IERC721 BAYC = IERC721(0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D);

    // 通过接口调用BAYC的balanceOf()查询持仓量
    function balanceOfBAYC(address owner) external view returns (uint256 balance){
        return BAYC.balanceOf(owner);
    }

    // 通过接口调用BAYC的safeTransferFrom()安全转账
    function safeTransferFromBAYC(address from, address to, uint256 tokenId) external{
        BAYC.safeTransferFrom(from, to, tokenId);
    }
}
```



### 在Remix上验证

- 抽象合约示例（简单的演示代码如图所示） ![14-1](https://www.wtf.academy/assets/images/14-1-044a8470458eea92577e72cdbdd8dd24.png)
- 接口示例（简单的演示代码如图所示） ![14-2](https://www.wtf.academy/assets/images/14-2-f9d96ce31ea1e53ff8631a02022a2929.png)

### 总结

这一讲，我介绍了`solidity`中的抽象合约（`abstract`）和接口（`interface`），他们都可以写模版并且减少代码冗余。我们还讲了`ERC721`接口合约`IERC721`，以及如何利用它与无聊猿`BAYC`合约进行交互。





## 异常

​	介绍`solidity`三种抛出异常的方法：`error`，`require`和`assert`，并比较三种方法的`gas`消耗。

​	写智能合约经常会出`bug`，`solidity`中的异常命令帮助我们`debug`。

### Error

`error`是`solidity 0.8版本`新加的内容，方便且高效（省`gas`）地向用户解释操作失败的原因。人们可以在`contract`之外定义异常。下面，我们定义一个`TransferNotOwner`异常，当用户不是代币`owner`的时候尝试转账，会抛出错误：

```solidity
error TransferNotOwner(); // 自定义error
```



在执行当中，`error`必须搭配`revert`（回退）命令使用。

```solidity
    function transferOwner1(uint256 tokenId, address newOwner) public {
        if(_owners[tokenId] != msg.sender){
            revert TransferNotOwner();
        }
        _owners[tokenId] = newOwner;
    }
```



我们定义了一个`transferOwner1()`函数，它会检查代币的`owner`是不是发起人，如果不是，就会抛出`TransferNotOwner`异常；如果是的话，就会转账。



在 Solidity 中，Error 可以带有参数。Solidity 提供了一种称为 Error 的特殊类型，可以用于在合约中抛出错误并在外部代码中捕获和处理。可以在 Error 类型中定义参数，以便在抛出错误时提供更具体的错误信息。例如：

```solidity
error InsufficientBalance(uint256 available, uint256 required);

function withdraw(uint256 amount) public {
    if (balance < amount) {
        revert InsufficientBalance({available: balance, required: amount});
    }
    // ...
}
```

在上面的代码中，InsufficientBalance 是一个 Error 类型，带有两个参数 available 和 required，表示可用余额和所需金额。在 withdraw 函数中，如果合约余额不足，则会抛出 InsufficientBalance 错误，并提供可用余额和所需金额作为参数，以便在外部代码中更好地理解错误原因。



### Require

`require`命令是`solidity 0.8版本`之前抛出异常的常用方法，目前很多主流合约仍然还在使用它。它很好用，唯一的缺点就是`gas`随着描述异常的字符串长度增加，比`error`命令要高。使用方法：`require(检查条件，"异常的描述")`，当检查条件不成立的时候，就会抛出异常。

我们用`require`命令重写一下上面的`transferOwner`函数：

```solidity
    function transferOwner2(uint256 tokenId, address newOwner) public {
        require(_owners[tokenId] == msg.sender, "Transfer Not Owner");
        _owners[tokenId] = newOwner;
    }
```



### Assert

`assert`命令一般用于程序员写程序`debug`，因为它不能解释抛出异常的原因（比`require`少个字符串）。它的用法很简单，`assert(检查条件）`，当检查条件不成立的时候，就会抛出异常。

我们用`assert`命令重写一下上面的`transferOwner`函数：

```solidity
    function transferOwner3(uint256 tokenId, address newOwner) public {
        assert(_owners[tokenId] == msg.sender);
        _owners[tokenId] = newOwner;
    }
```



### 在remix上验证

1. 输入任意`uint256`数字和非0地址，调用`transferOwner1`，也就是`error`方法，控制台抛出了异常并显示我们自定义的`TransferNotOwner`。 ![13 1.png](https://www.wtf.academy/assets/images/15-1-108068d779547bb5f2bbe63c4e350fab.png)
2. 输入任意`uint256`数字和非0地址，调用`transferOwner2`，也就是`require`方法，控制台抛出了异常并打印出`require`中的字符串。 ![13 2.png](https://www.wtf.academy/assets/images/15-2-5cd86c90ad4a466946c842c346a5ee18.png)
3. 输入任意`uint256`数字和非0地址，调用`transferOwner3`，也就是`assert`方法，控制台只抛出了异常。 ![13 3.png](https://www.wtf.academy/assets/images/15-3-390b3562e3410dd9f6256b66e8d2610f.png)

### 三种方法的gas比较

我们比较一下三种抛出异常的`gas`消耗，通过remix控制台的Debug按钮，能查到每次函数调用的`gas`消耗分别如下：

1. **`error`方法`gas`消耗**：24445
2. **`require`方法`gas`消耗**：24743
3. **`assert`方法`gas`消耗**：24446

我们可以看到，`error`方法`gas`最少，其次是`assert`，`require`方法消耗`gas`最多！因此，`error`既可以告知用户抛出异常的原因，又能省`gas`，大家要多用！（注意，由于部署测试时间的不同，每个函数的`gas`消耗会有所不同，但是比较结果会是一致的。）

### 总结

这一讲，我们介绍`solidity`三种抛出异常的方法：`error`，`require`和`assert`，并比较了三种方法的`gas`消耗。结论：`error`既可以告知用户抛出异常的原因，又能省`gas`。



## 重载

`solidity`中允许函数进行重载（`overloading`），即名字相同但输入参数类型不同的函数可以同时存在，他们被视为不同的函数。注意，`solidity`不允许修饰器（`modifier`）重载。

### 函数重载

举个例子，我们可以定义两个都叫`saySomething()`的函数，一个没有任何参数，输出`"Nothing"`；另一个接收一个`string`参数，输出这个`string`。

```solidity
function saySomething() public pure returns(string memory){
    return("Nothing");
}

function saySomething(string memory something) public pure returns(string memory){
    return(something);
}
```



最终重载函数在经过编译器编译后，由于不同的参数类型，都变成了不同的函数选择器（selector）。关于函数选择器的具体内容可参考[Solidity极简入门: 29. 函数选择器Selector](https://github.com/AmazingAng/WTFSolidity/tree/main/29_Selector)。

以 `Overloading.sol` 合约为例，在 Remix 上编译部署后，分别调用重载函数 `saySomething()` 和 `saySomething(string memory something)`，可以看到他们返回了不同的结果，被区分为不同的函数。 ![img](https://www.wtf.academy/assets/images/16-1-02e5e7643e93251800ec337e341a58a4.jpg)

### 实参匹配（Argument Matching）

在调用重载函数时，会把输入的实际参数和函数参数的变量类型做匹配。 如果出现多个匹配的重载函数，则会报错。下面这个例子有两个叫`f()`的函数，一个参数为`uint8`，另一个为`uint256`：

```solidity
    function f(uint8 _in) public pure returns (uint8 out) {
        out = _in;
    }

    function f(uint256 _in) public pure returns (uint256 out) {
        out = _in;
    }
```



我们调用`f(50)`，因为`50`既可以被转换为`uint8`，也可以被转换为`uint256`，因此会报错。

### 总结

这一讲，我们介绍了`solidity`中函数重载的基本用法：名字相同但输入参数类型不同的函数可以同时存在，他们被视为不同的函数。



## ABI 编码

### 代码

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

interface IERC20 {
    function transfer(address, uint) external;
}

contract Token {
    function transfer(address, uint) external {}
}

contract AbiEncode {
    function test(address _contract, bytes calldata data) external {
        (bool ok, ) = _contract.call(data);
        require(ok, "call failed");
    }

    function encodeWithSignature(
        address to,
        uint amount
    ) external pure returns (bytes memory) {
        // Typo is not checked - "transfer(address, uint)"
        return abi.encodeWithSignature("transfer(address,uint256)", to, amount);
    }

    function encodeWithSelector(
        address to,
        uint amount
    ) external pure returns (bytes memory) {
        // Type is not checked - (IERC20.transfer.selector, true, amount)
        return abi.encodeWithSelector(IERC20.transfer.selector, to, amount);
    }

    function encodeCall(address to, uint amount) external pure returns (bytes memory) {
        // Typo and type errors will not compile
        return abi.encodeCall(IERC20.transfer, (to, amount));
    }
}
```



### 描述

在Solidity中，`abi.encode`函数可用于将数据编码为ABI（应用二进制接口）格式。 ABI是一种标准化的接口规范，用于在不同的智能合约之间传递数据。

在此示例中，我们定义了一个名为`AbiEncode`的合约，其中包含一个名为`encodeData`的函数。该函数接受两个参数-一个整数和一个布尔值，并使用`abi.encode`将它们编码为ABI格式。然后，该函数返回一个`bytes`类型的结果，其中包含已编码的数据。

请注意，您可以使用`abi.encodePacked`和`abi.encodeWithSignature`等其他编码函数，具体取决于您需要对数据执行的操作。





## ABI Decode

本页面介绍了如何使用 JavaScript 和 web3.js 库解码以太坊智能合约的 ABI（Application Binary Interface）编码。

### 什么是 ABI？

ABI 定义了智能合约与外部世界进行通信的标准接口。它详细描述了如何调用合约中的每个函数以及函数参数的类型和顺序。通过使用 ABI，我们可以在不需要访问源代码的情况下与智能合约进行交互。

### 解码 ABI 编码

假设您有一个 ABI 编码的返回值，并且需要将其转换为易于阅读的格式。这里提供了一个 JavaScript 函数，它使用 web3.js 库来解码 ABI 编码：

```solidity
function decodeReturnValue(returnValue, outputTypes) {
    const abiDecoder = require('abi-decoder');
    abiDecoder.addABI(JSON.parse(outputTypes));
    const decodedData = abiDecoder.decodeMethod(returnValue);
    return decodedData.params.map((param) => param.value);
}
```



该函数接受两个参数：

- `returnValue`：一个 ABI 编码的返回值。
- `outputTypes`：包含函数输出参数类型的字符串，示例：`"[ { 'name': 'myString', 'type': 'string' }, { 'name': 'myInt', 'type': 'uint256' } ]"`。

该函数返回一个数组，其中包含已解码的值。

### 示例

假设您有一个智能合约函数，返回以下 ABI 编码的字符串：

```solidity
0x0000000000000000000000000000000000000000000000000000000000000037
0000000000000000000000000000000000000000000000000000000000000005
48656c6c6f
```



此编码的输出类型为：

```solidity
[
    {
        "name": "myUint",
        "type": "uint256"
    },
    {
        "name": "myString",
        "type": "string"
    }
]
```



使用上面提供的 JavaScript 函数，您可以将该编码解码如下：

```solidity
const returnValue = "0x0000000000000000000000000000000000000000000000000000000000000037000000000000000000000000000000000000000000000000000000000000000548656c6c6f";
const outputTypes = '[
    { "name": "myUint", "type": "uint256" },
    { "name": "myString", "type": "string" }
]';
const decoded = decodeReturnValue(returnValue, outputTypes);
console.log(decoded); // [55, "Hello"]
```



以上示例代码将打印出 `[55, "Hello"]`。

### 结论

在与以太坊智能合约进行交互时，了解 ABI 是非常重要的。使用 web3.js 库和上述方法，您可以轻松地解码 ABI 编码并与智能合约交互。



## 重载

`solidity`中允许函数进行重载（`overloading`），即名字相同但输入参数类型不同的函数可以同时存在，他们被视为不同的函数。注意，`solidity`不允许修饰器（`modifier`）重载。

### 函数重载

举个例子，我们可以定义两个都叫`saySomething()`的函数，一个没有任何参数，输出`"Nothing"`；另一个接收一个`string`参数，输出这个`string`。

```solidity
function saySomething() public pure returns(string memory){
    return("Nothing");
}

function saySomething(string memory something) public pure returns(string memory){
    return(something);
}
```



最终重载函数在经过编译器编译后，由于不同的参数类型，都变成了不同的函数选择器（selector）。关于函数选择器的具体内容可参考[Solidity极简入门: 29. 函数选择器Selector](https://github.com/AmazingAng/WTFSolidity/tree/main/29_Selector)。

以 `Overloading.sol` 合约为例，在 Remix 上编译部署后，分别调用重载函数 `saySomething()` 和 `saySomething(string memory something)`，可以看到他们返回了不同的结果，被区分为不同的函数。 ![img](https://www.wtf.academy/assets/images/16-1-02e5e7643e93251800ec337e341a58a4.jpg)

### 实参匹配（Argument Matching）

在调用重载函数时，会把输入的实际参数和函数参数的变量类型做匹配。 如果出现多个匹配的重载函数，则会报错。下面这个例子有两个叫`f()`的函数，一个参数为`uint8`，另一个为`uint256`：

```solidity
    function f(uint8 _in) public pure returns (uint8 out) {
        out = _in;
    }

    function f(uint256 _in) public pure returns (uint256 out) {
        out = _in;
    }
```

因为参数类型不同，所以函数选择器不同，但是当我们调用`f(50)`时，因为`50`既可以被转换为`uint8`，也可以被转换为`uint256`，因此会报错。

### 总结

这一讲，我们介绍了`solidity`中函数重载的基本用法：名字相同但输入参数类型不同的函数可以同时存在，他们被视为不同的函数。



## 库函数

库函数是一种特殊的合约，为了提升`solidity`代码的复用性和减少`gas`而存在。库合约一般都是一些好用的函数合集（`库函数`），由大神或者项目方创作，咱们站在巨人的肩膀上，会用就行了。

![库合约：站在巨人的肩膀上](https://images.mirror-media.xyz/publication-images/HJC0UjkALdrL8a2BmAE2J.jpeg?height=300&width=388)

他和普通合约主要有以下几点不同：

1. 不能存在状态变量
2. 不能够继承或被继承
3. 不能接收以太币
4. 不可以被销毁

## String库合约

`String库合约`是将`uint256`类型转换为相应的`string`类型的代码库，样例代码如下：

```solidity
library Strings {
    bytes16 private constant _HEX_SYMBOLS = "0123456789abcdef";

    /**
     * @dev Converts a `uint256` to its ASCII `string` decimal representation.
     */
    function toString(uint256 value) public pure returns (string memory) {
        // Inspired by OraclizeAPI's implementation - MIT licence
        // https://github.com/oraclize/ethereum-api/blob/b42146b063c7d6ee1358846c198246239e9360e8/oraclizeAPI_0.4.25.sol

        if (value == 0) {
            return "0";
        }
        uint256 temp = value;
        uint256 digits;
        while (temp != 0) {
            digits++;
            temp /= 10;
        }
        bytes memory buffer = new bytes(digits);
        while (value != 0) {
            digits -= 1;
            buffer[digits] = bytes1(uint8(48 + uint256(value % 10)));
            value /= 10;
        }
        return string(buffer);
    }

    /**
     * @dev Converts a `uint256` to its ASCII `string` hexadecimal representation.
     */
    function toHexString(uint256 value) public pure returns (string memory) {
        if (value == 0) {
            return "0x00";
        }
        uint256 temp = value;
        uint256 length = 0;
        while (temp != 0) {
            length++;
            temp >>= 8;
        }
        return toHexString(value, length);
    }

    /**
     * @dev Converts a `uint256` to its ASCII `string` hexadecimal representation with fixed length.
     */
    function toHexString(uint256 value, uint256 length) public pure returns (string memory) {
        bytes memory buffer = new bytes(2 * length + 2);
        buffer[0] = "0";
        buffer[1] = "x";
        for (uint256 i = 2 * length + 1; i > 1; --i) {
            buffer[i] = _HEX_SYMBOLS[value & 0xf];
            value >>= 4;
        }
        require(value == 0, "Strings: hex length insufficient");
        return string(buffer);
    }
}
```



他主要包含两个函数，`toString()`将`uint256`转为`string`，`toHexString()`将`uint256`转换为`16进制`，在转换为`string`。

### 如何使用库合约

我们用String库函数的toHexString()来演示两种使用库合约中函数的办法。

**1. 利用using for指令**

指令`using A for B;`可用于附加库函数（从库 A）到任何类型（B）。添加完指令后，库`A`中的函数会自动添加为`B`类型变量的成员，可以直接调用。注意：在调用的时候，这个变量会被当作第一个参数传递给函数：

```solidity
    // 利用using for指令
    using Strings for uint256;
    function getString1(uint256 _number) public pure returns(string memory){
        // 库函数会自动添加为uint256型变量的成员
        return _number.toHexString();
    }
```



**2. 通过库合约名称调用库函数**

```solidity
    // 直接通过库合约名调用
    function getString2(uint256 _number) public pure returns(string memory){
        return Strings.toHexString(_number);
    }
```



我们部署合约并输入`170`测试一下，两种方法均能返回正确的`16进制string` “0xaa”。证明我们调用库函数成功！

![成功调用库函数](https://images.mirror-media.xyz/publication-images/bzB_JDC9f5VWHRjsjQyQa.png?height=750&width=580)

### 总结

这一讲，我们用`ERC721`的引用的库函数`String`为例介绍`solidity`中的库函数（`Library`）。99%的开发者都不需要自己去写库合约，会用大神写的就可以了。我们只需要知道什么情况该用什么库合约。常用的有：

1. [String](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/4a9cc8b4918ef3736229a5cc5a310bdc17bf759f/contracts/utils/Strings.sol)：将`uint256`转换为`String`
2. [Address](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/4a9cc8b4918ef3736229a5cc5a310bdc17bf759f/contracts/utils/Address.sol)：判断某个地址是否为合约地址
3. [Create2](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/4a9cc8b4918ef3736229a5cc5a310bdc17bf759f/contracts/utils/Create2.sol)：更安全的使用`Create2 EVM opcode`
4. [Arrays](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/4a9cc8b4918ef3736229a5cc5a310bdc17bf759f/contracts/utils/Arrays.sol)：跟数组相关的库函数



## `import`用法

- 通过源文件相对位置导入，例子：

```text
文件结构
├── Import.sol
└── Yeye.sol

// 通过文件相对位置import
import './Yeye.sol';
```



- 通过源文件网址导入网上的合约，例子：

```text
// 通过网址引用
import 'https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/utils/Address.sol';
```



- 通过`npm`的目录导入，例子：

```solidity
import '@openzeppelin/contracts/access/Ownable.sol';
```



- 通过`全局符号`导入特定的合约，例子：

```solidity
import {Yeye} from './Yeye.sol';
```



- 引用(`import`)在代码中的位置为：在声明版本号之后，在其余代码之前。

### 测试导入结果

我们可以用下面这段代码测试是否成功导入了外部源代码：

```solidity
contract Import {
    // 成功导入Address库
    using Address for address;
    // 声明yeye变量
    Yeye yeye = new Yeye();

    // 测试是否能调用yeye的函数
    function test() external{
        yeye.hip();
    }
}
```



![result](https://www.wtf.academy/assets/images/18-1-be3039b3dda4b85f9a3197fbe6102abb.png)

### 总结

这一讲，我们介绍了利用`import`关键字导入外部源代码的方法。通过`import`关键字，可以引用我们写的其他文件中的合约或者函数，也可以直接导入别人写好的代码，非常方便。





## 接收ETH函数 receive

`receive()`只用于处理接收`ETH`。一个合约最多有一个`receive()`函数，声明方式与一般函数不一样，不需要`function`关键字：`receive() external payable { ... }`。`receive()`函数不能有任何的参数，不能返回任何值，必须包含`external`和`payable`。

当合约接收ETH的时候，`receive()`会被触发。`receive()`最好不要执行太多的逻辑因为如果别人用`send`和`transfer`方法发送`ETH`的话，`gas`会限制在`2300`，`receive()`太复杂可能会触发`Out of Gas`报错；如果用`call`就可以自定义`gas`执行更复杂的逻辑（这三种发送ETH的方法我们之后会讲到）。

我们可以在`receive()`里发送一个`event`，例如：

```solidity
    // 定义事件
    event Received(address Sender, uint Value);
    // 接收ETH时释放Received事件
    receive() external payable {
        emit Received(msg.sender, msg.value);
    }
```



有些恶意合约，会在`receive()` 函数（老版本的话，就是 `fallback()` 函数）嵌入恶意消耗`gas`的内容或者使得执行故意失败的代码，导致一些包含退款和转账逻辑的合约不能正常工作，因此写包含退款等逻辑的合约时候，一定要注意这种情况。

## 回退函数 fallback

`fallback()`函数会在调用合约不存在的函数时被触发。可用于接收ETH，也可以用于代理合约`proxy contract`。`fallback()`声明时不需要`function`关键字，必须由`external`修饰，一般也会用`payable`修饰，用于接收ETH:`fallback() external payable { ... }`。

我们定义一个`fallback()`函数，被触发时候会释放`fallbackCalled`事件，并输出`msg.sender`，`msg.value`和`msg.data`:

```solidity
    // fallback
    fallback() external payable{
        emit fallbackCalled(msg.sender, msg.value, msg.data);
    }
```



### receive和fallback的区别

`receive`和`fallback`都能够用于接收`ETH`，他们触发的规则如下：

```text
触发fallback() 还是 receive()?
           接收ETH
              |
         msg.data是空？
            /  \
          是    否
          /      \
receive()存在?   fallback()
        / \
       是  否
      /     \
receive()   fallback()
```



简单来说，合约接收`ETH`时，`msg.data`为空且存在`receive()`时，会触发`receive()`；`msg.data`不为空或不存在`receive()`时，会触发`fallback()`，此时`fallback()`必须为`payable`。

`receive()`和`payable fallback()`均不存在的时候，向合约**直接**发送`ETH`将会报错（你仍可以通过带有`payable`的函数向合约发送`ETH`）。

### Remix 演示

1. 首先在 Remix 上部署合约 "Fallback.sol"。
2. "VALUE" 栏中填入要发送给合约的金额（单位是 Wei），然后点击 "Transact"。![img](https://www.wtf.academy/assets/images/19-1-4ba34e6d9cbb74a98a3c8affd59bc583.jpg)
3. 可以看到交易成功，并且触发了 "receivedCalled" 事件。![img](https://www.wtf.academy/assets/images/19-2-b933741438ce18210739446f85b8e3c4.jpg)
4. "VALUE" 栏中填入要发送给合约的金额（单位是 Wei），"CALLDATA" 栏中填入随意编写的`msg.data`，然后点击 "Transact"。 ![img](https://www.wtf.academy/assets/images/19-3-83c411c3270d886d6ea0535c4cc9660d.jpg)
5. 可以看到交易成功，并且触发了 "fallbackCalled" 事件。![img](https://www.wtf.academy/assets/images/19-4-a6bbcb103838f43fe8987b95606b8e27.jpg)

### 总结

这一讲，我介绍了`Solidity`中的两种特殊函数，`receive()`和`fallback()`，他们主要在两种情况下被使用，他们主要用于处理接收`ETH`和代理合约`proxy contract`。

## 发送ETH

### 接收ETH合约

我们先部署一个接收`ETH`合约`ReceiveETH`。`ReceiveETH`合约里有一个事件`Log`，记录收到的`ETH`数量和`gas`剩余。还有两个函数，一个是`receive()`函数，收到`ETH`被触发，并发送`Log`事件；另一个是查询合约`ETH`余额的`getBalance()`函数。

```solidity
contract ReceiveETH {
    // 收到eth事件，记录amount和gas
    event Log(uint amount, uint gas);
    
    // receive方法，接收eth时被触发
    receive() external payable{
        emit Log(msg.value, gasleft());
    }
    
    // 返回合约ETH余额
    function getBalance() view public returns(uint) {
        return address(this).balance;
    }
}
```



部署`ReceiveETH`合约后，运行`getBalance()`函数，可以看到当前合约的`ETH`余额为`0`。

![20-1](https://www.wtf.academy/assets/images/20-1-b18baa5867c909e527eca6852945ad46.png)

### 发送ETH合约

我们将实现三种方法向`ReceiveETH`合约发送`ETH`。首先，先在发送ETH合约`SendETH`中实现`payable`的`构造函数`和`receive()`，让我们能够在部署时和部署后向合约转账。

```solidity
contract SendETH {
    // 构造函数，payable使得部署的时候可以转eth进去
    constructor() payable{}
    // receive方法，接收eth时被触发
    receive() external payable{}
}
```



### transfer

- 用法是`接收方地址.transfer(发送ETH数额)`。
- `transfer()`的`gas`限制是`2300`，足够用于转账，但对方合约的`fallback()`或`receive()`函数不能实现太复杂的逻辑。
- `transfer()`如果转账失败，会自动`revert`（回滚交易）。

代码样例，注意里面的`_to`填`ReceiveETH`合约的地址，`amount`是`ETH`转账金额：

```solidity
// 用transfer()发送ETH
function transferETH(address payable _to, uint256 amount) external payable{
    _to.transfer(amount);
}
```



部署`SendETH`合约后，对`ReceiveETH`合约发送ETH，此时`amount`为10，`value`为0，`amount`>`value`，转账失败，发生`revert`。

![20-2](https://www.wtf.academy/assets/images/20-2-572c8ac0dfa42d4ea7fc62de0ff1c5af.png)

此时`amount`为10，`value`为10，`amount`<=`value`，转账成功。

![20-3](https://www.wtf.academy/assets/images/20-3-c48a1c9f41ff2a53095bbf4d0b7767b7.png)

在`ReceiveETH`合约中，运行`getBalance()`函数，可以看到当前合约的`ETH`余额为`10`。

![20-4](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAhwAAACcCAYAAAA00XKNAAAgAElEQVR4nO3dfVCUV4Lv8W9osLXV5iW2gGkVAQFRUPEF8YWAxEGjoxONrsZkJrmbnZs7qYy7t+7sVN2aqbq7e+tWzdRWbWW3MsnNZK7JJDGJmBiNRlklGBQVxTfeFIwEY0cwHWlptWML3bl/dACRBhukfcvvU2WpT5/n9DlNdz+/5zznOTwUnzDz+4dCQggLCyMkJAQRERGRgeT1egkBFDZEREQkaEJCQnyBQ2FDREREgklJQ0RERIJOgUNERESCToFDREREgk6BQ0RERIJOgUNERESCToFDREREgk6BQ0RERIJOgUNERESCToFDREREgk6BQ0RERIJOgUNERESCToFDREREgi70bjdARETkx2z8qCjGJk4BU1S3x64DZy9c5WxVFbSeu/ONG0AKHCIiIndJbnwoYxespbfDcfxYOJWcwsEPP4HWL+5c4waYAoeIiMhd8nBsLBDKwboWsJ/q2D7BAuFJmZxthljPF6RYEmHFT+/r0KE5HCIiInfZqSYXp6r2d/xxNe0HwOaCXR9/wnX7CVLCIeNnPwVG3t3G9tNdHeHIjoa01c8Dpi7bm1wedhR9gau+sNdyABtPuLDveaPj/5kJUUydk4chMhYAVyuU1zdTWbQHWm0smwTWvF/7bc8rRY1QVcCLT8xgo2MybXve4Kmf57Hl60RsRf/X7z6ZkZDw82fZ8NdzLHukKKC6GZPV7XEbYD5Rg3lyqt/9b+zvhJNvELn6eba8fAI43K3Mi0/MoJgsajb/e691ATw124J72ho+fP0wuA8Avb/e7SqdULL+ox9a3mmsCeYvzscUk4gHAzVNbkq27wNXNTEhsOKZfHY1J1L3yXrA1bFfTAis+EU+2xrjOLvzTcwhbnJnTcQ6ZQaEmfF4odzmpHzbXmg90+U5rWGwcEUedUMm+m1ToGUC0Vv/2uWmRJE673EwReHyQmlNM3XFn4K3OeAy/n4GHi+cuejis13VeOwHOrZbgFXP5YM5uUtb7Vc8FJefw36iEHD32q/4EDAvzuP4J7VkR9uwrn6eDX/9EhxFfssvGm9g0OMvsOXlQ8DhgD9Xu1pnUrftNcDTrVwk8NTTOWy0JXb5TFvCIDcvC0tiOhiMeLxwzOakrOgwODtf957acNbhYdv2Q3DxMM/kxPFtylJ2vL4HvBXd+jRi4Qu8XfAFS6Kr+SwkA9exrb2+biJ9MQTInjmJhyfMBAYDMCjM0Ps+odA4dCSHP6tizhNRWKJGA+OAb4Ld3AEXcOBIedjIlYT52A7tB1r8lskYF8WZIZm01OwC2gKq1wZsefkA7QdOUxgsmpLAisULeXtjG1wo8lvOn6fmxmGcupSPSxppOvUOBnczYy1m5udl4VmyjJrNbwDuHg+WN3MATZUHSMuaiK04vdsXFEBqRgLHzpvBcQAe6flAfKObQ1IXe3Z3/LOn4DAhutdmB8wKRE6cCUDktGQc+30HsZILUPJyZ/uWTQLyfn3L198CLFmZR4kzkcrXNmLGzooFGXhW5lH6VgtNXhvlWwvJfjoW26TFuKoKOvZdlJdMpTeZs/+5FXCz6icTqYuYy873DuB2VBMfEcqiZY/hWrKQms2dYWVBShRJC5bjchnA679dgZQJxK36BzbfQWvBGt7e2YDzdAFjTbBg6VzaFq6h/lPfgTaQMtD9PR8zzER2ZgrPrZ7BloMJ2A+/06V97Qd2AJPRQGZCHKvmZlE24XnK399Cb+/JWbMs1AyeCPjeA5FA0pwU6rbt4eZwEAnEZ+Vgo+sXZSDv/ekJBuoic/wGmVnJBnh4Itg6w1GqCXKfXkmlcyRb3t2L21FNjCmUBXkZJPwijw0FMdDUWdfNbYg0GliSPZElK3PYtt7DrpKjrBhbS/zCedR/Wt3RtyQjxOctZ0P5VWgqxBNuIDN7NMXHEoCuAVekv+anD8UydUFAZT0/fOwyYiDjqbVBbFXPwkNg4aJsDl9LpL7oQ2489g8BFmRPwhY5m6Of7ALvl7esL6BLKnOsQ5m1/Bc8NjWF+AVrgfBuZRZPjiX9J2t5Yl4Kllk/p7+DJ65W2HX4DGZHNZHjxwW8X2YkmKbm8EFxI00nCsDdjAeotzvZ8H4hNUXvcauzPH8qT7iIx4Zx8sRujyWFgDF5MscrbNx4tn6/SEs2UG+Io37XHqZMHAok3FZ908dD/dAUKrfshVY7zlYo3XmUtKE2SPYFmzIHOPZ/xIK5sWCaAUDuGANtKTmUFNaCtwGADSXVlLz/Hm5HBeCh/pIb25HtxFsNQErnkw438fan52gu6yHABVpmgPoXnzKZ4lNtOE9vB9ycdbmp/LSIWeOvQmROwGX8abriYmPRUeyfv8eCWeG9lnW5PRTXnKHknXfIjGomMuuxHsu2B8/jJxu58X2cOc4A0d33m5VswDMsBX+jFLcS6YXUnBRuHj2LBMZm5kBr1/Kzc9Ipd8VS8v7GjvdCk8vN258cwHRmD5k/mYgvCvrncHso3VXB2BAbjEugyQvHdxYyP8GNMWU5AEYg+ycZlDpicRz4CIDaWg/JYY2QPLnPfRTpyZDhvrtQNh36hk0b3mXThnf5rnaX37KnG+D6pS+5fs3d8QdvYCfyA2Vx7iSGWKeRnRje5dg/BFicM4moCQtIjxmKNXdJQPUFFDjGJo+DkKEAZMcbu4WOxZNjscx6kvaQERcXDsQG2qdu3ACtbYT2IbMkTbZSd8WMq+pAt8dcAM7mbtsDUecFV+0JpqRZuPmLLW2yidpWK9Se6Ffdd5MRiE+fycGKq1SeqiCZhtv+co2xxmG7YABv5zB3nRcMF84RM6rzdq8dR5zE2g+Qtmgm8SFmUh9fxs5jHmgq7Cjj8v3Quj5BiIGrboCrHZt2HbbhPFNIbwe/QMoMWP9CDbS1dX0etxsiacMYHxt4mV7sr3ASeeULLJMTb1m20gXOmr2kpZjxRYvu4qOhyRQLpxs7ttkAKmtJnZ3IjeGgPRjU1nxDvwL8KRfTYr+B6Hldts9KNlBjSIHGzslwqSFgTEim7HgjYO9e14EKkiKdEJ3R63NeB2hzd5wDlV4AV/kWFub4Qu/CSWYccVkc/+Qo7e+5esDQeI74hP5/j4n05Mo1D1cuf8OVy9/gafV/xeDsddjwwcdseOtPbHjrT+x8609w9c5OFv3m/Dnw+j7n7cf+IYSzOGcSw5J9IzXXgYvnu38+/QkocOwqroJLVR3/vzF03Bw2Gq/D4e37gf7dL2wAssdbcMakYD8ZeB3myFi+vQT9vTbfm5qjZ7p9sUUCMWlZHK92cj8OuU6JhKaYZBxHarEBzupDTEm30tu8jVsxRViwN7u4+cDuarYTFdFZrwso2XGYbMs3zH9+DaUOK/Z9G3utO95swDp1IVU1LqC23228HYH0r6mhmjnJJgyWuQCYwyD18SxwDcU8fHDAZXpjB7jUjCUysJ+V81sbkWbo6STAYjVhv2ICd9fPzpEDzd3CwaxkA8dIwXNyT0DPfbOTrUDNgS5Bpj3ElOxvBDpPDEZYwBkSDo3+TxbsDjC3OiG6+9oF7YwhkDkzDltonO+U8QcfH7BjdRxlyeKZxM5dzI7Pm8G1r8u+TnsjsRYDPQU1kQfd7pMt2Pa92yV0LH1qbZewsXVvI9+d3BRQfQGNIdi9sL1gF4tXAhGTOp548sq1hEcZuDFsFG7aD5fLAu6QFXhxXRbQOZHS7vKwpbABLuzutZwTePv9WrjgOzO2OwK7rJFmhrR1y7ts622OyHEHTD9fi3VSOrYLvm1TrNAUnojjSNd5HYHUvWqyCSZ3ndxW/BUBTfJs5+/16OKr3vdPzUig9Muh4D4EQM0RO1On2TluzQXb9oDbcTPP9923tX3ffRiwxgVTqvZhmraS47sb6DaaAaQCuetW0n6gLLV5sO//qN9tGwi36t+OYy6WhBfxwuq5EJKBywsf72/kKY4CkwMucytOR6PvSB0Ahx0ie7nkZzaPpO4S3HySUOOGKcf2kDp7FTWb92LBxdjZj7FjfyPZfkYcAv1clZbYmPPLRmqi58GFQrInmThGCtRuhNS4rv0EuNj9vQFwGeC7q1iiojpa47cNDg/btp4Ad2cbXEDJJ/vIfnY0xY1RuCre7la/85KNERHge/8N/ImMyP1g98kW8nmX2GzfVIkhw41AZ9i4UrOJQOdsBnzRwl/oCI8ydjzen7AB0ATsWn8UqMUELMlP5uyQDJynTnDjmeSN5dq1AVzpHF63RJr8fA12V3MFjhQUceMsX9/L5f+LzQ3UVxwiLS+jY/Jo8pR0PvsytOOA3Ze6d9S4+LZsS5f9rvbx0py/16PdM/nJQM/DzEkhQPJk6rY20P4aH3fDrC+rSZoyjzqbgf5efjA81H1b6EPd32a+OTf5uC80kz0vjpKGuI75G+1qAdv6QsBIpBEW5Exk6DMrKX2r/3eZ3K5b9c8FbNxTDXuqMRhNeNwujACJc/tU5lbMkYEP9UdaoLeRK1OEBY8X/P3MD5bZefSXjdRYc5kdUcyx1kRfMPAzcTnQz1W9F2ad2MuU7DV8XbAXy4x5bNnXftmka+AwAzxshovdn284wJCh2Js7vwNubMMIIyx6fCYnHVY8tqPd9m9yAd81U3O6rVsbAa67YdBtXoYTeRCUnGzhiXH7GTQ6u2PbiQtwpeY/CTRsQB9ndvoLHdD/sAG+pjqdbsCOEyj50M6CF0ZSOS0H15F3/Jbzx+loZMQ48J37934w8njB6WzpsS5/Kms9LMtuwDh5IhNqKnCPm0jd5s4Ddl/qvtwKTmfgz+1Pr69HW1z3bTdIm2zCFGblxRUAXUda0rxQZ5zZcYtsX7gu2bFEmWiia2AxRVlobu56C+z0pfnsODMU187XWPHMY9Q9+hhNxeu77OcBnE7fgcAJlH24h8yXYikdMxm+uvOBI9D+tfO4fdseAXh4JPYT3a/VBlLmZlaAESOxnw5sRC8qOoEzToDGWxXtpt4LUw/vJjfrWSzDuCEYdNeXz1VJmZ0Fk84wNu8xKltHw+nul9S+tUOatwVio/wGDkskOMPMcKGzXze2wQmUb93OnJ8/S92YXPiq/yN3Ij9W7RNEbwwbADOi4bsFq6nf9S493bl6sz4v/NUeOtrndNxO2PCnzguO43vJzIiiL3dN1J2wkTTMiWlS90sMRgCT+bbaZQMc1YeYkmYhddpEalosYDt0y/3uNe1zTzYeaObt9e91+fPh+veIaaklclryLevxp8nWgDXaAyGdd/QkhYAnejRNts7r8Auy46gZlEz9zt00eT1UFu5mySQ67hoAIKT3e9PvhkD6FxMNhHQNfGmTTNQTC3W1AZfpzbR0M47BcdhP3HoCWZoJTMkzqTzlpKcg7rpkxxAC4P81LzvmJDXiDOWuBDi922+ZvrJ5wXl0L1GT4igracBfSKnxgvtMLXOmxeJvHkVaVjp1F81wofvoRUfbHWA8c5QpmQn0dX7SICP09JqI/Bi0h40b52zYz35D+6iGv5tIetOvlUbtXthcsIujx0oo3LRrwMJGu/KDdlLDbBinzgx4nzIHuI7t4W9yY4mZvBKMURiAeIuZZ1bnk7boWX6IHv1Wc8TO9HA7kdPyOF5ppy8jJPeKKWMM2MITsZfX4nTau/xpctppqtzLlIlm+nOLbPlpiL96irRl8yDMgjkMspdlUXnVCqd94WzReAOkLab4k1rw+g6uJU2eLncNGIHnV8wkbeGzGIclAAZijAamL87ijMsCtruzrG8g/VsydSLZqxZjiEjvmABtnbucg4dbOtZxCaSMPzEmI6vyMrA8uoZt+5rB0fPETVMY5KYmkP3005Tao3Ac6Pns3n3tKpERAKP9Pm7zwvq/7uT4x+/Q02XH/vj4iJMP1r8JX/UcYvbvqWCKsZHs1cswRqYDBmJMRp75aRauhBzKdldzq8/hsdIKpo5ygjW3T+0bOtyCo58jQyIPgsWzRnebILp95wfYSv7aZSJp1Ky/Cai+fq802uKFikNH+rt7r+q8MP34XmZPX0PxiWSgtsdJkjcuorVhXwOZje/wszl5GHKeBnzrepTVN1NZ9BHtt/H5m1gGXRdO8qd9nsPZMTm4T1T7LRNI3f4mjQaysNntMgKpmTPZ9WUoeP2fFVaecDE/y0Zx8mSo7dvdN3ZgW0ER8xeHkv3Cqo6VOEsLigAbqSbf4kofVrqhqetB5uMDdn4+6gDTf5pFecEZPis8xKw8E9nPLgSDAY8X36qeHxR1BJWbV9i04nvtb5xMHEiZF5+YQWVEFiXrPyI72kba6ud5pailY3XM9sfs2HrtH8CWomoWLDTzwjPzICQHuws27G/AUdF5wA+kTHtbb3zPt680+uH7FV1WGm33Yl4s3LDSpv2Kh41l57CfKKC3W1gbv7ZjmekGoxXcDX7LuNwebryDxJ++fq48gMvZe4CpcYF9fQG5eVk8vzYLDDmdK42+VdRlpdGelDlg6pmjTJmTw/EPzAQamiJHjObgBQ+aMCp3wrDBBhje85LlwwFC7uzi4B6P73vj5gmiu0+28BjvYp27FkICP5F/KD5h5veDhwwJTmtF5J5nBZb9cjGv7Df1Grh/TPSaSDA8OWc0wyY9yZsljXDyfQAWpw/FkvXLgOs47YLStz8B7sxI76zUWKq+m8SVL4u5eYJoxthwGobPprnqMwJZl0e/LVbkR84GOOtOkBS3jLqq/t+h9CAZPwbqQ6xQ0/fJ0yJ98VnFVbIH7+ry+1UABg0yQEgo16+10fHrDq62UfrZCe5U2AA4WNNIT5cVj55tAXYEXJcCh4hQdsCG5YlG6ojjflzIbqBFRVv57Ehzr3NqRAbCd0DhoSo41Lm4ZhSw9KlFNA5PofCtQ8DAzpO8WxQ4RIQ6N9S9f3cXVbuXfHjYBuhSigRHSowJDLN7fNwEENbzCrr3KwUOERGRO+BiYyPDJrUxKykckjJvWd7eDHDr38J6v9CkURERkTtk/KgoxiZOAVPPIxjXgbMXrnK2qgpa+/d7ye5FChwiIiISdP1a+EtERESkLxQ4REREJOgUOERERCToFDhEREQk6BQ4REREJOgUOERERCToFDhEREQk6BQ4REREJOgUOERERCToFDhEREQk6BQ4REREJOgUOERERCToFDhEREQk6BQ4REREJOgUOERERCToFDhEREQk6BQ4REREJOgUOERERCToFDhEREQk6BQ4REREJOgUOERERCToFDhEREQk6BQ4REREJOgUOERERCToFDhEREQk6BQ4REREJOgUOERERCToFDhEREQk6BQ4REREJOgUOERERCToFDhEREQk6BQ4REREJOgUOERERCToFDhEREQk6BQ4REREJOgUOERERCToFDhEREQk6BQ4REREJOgUOERERCToFDhEREQk6BQ4REREJOgUOERERCToFDhEREQk6EL7u6MhPIpBo+IIMQ0byPbIPcTrusL18w14WprvdlNEROQ+168RDkN4FIPjUxU2HnAhpmEMjk/FEB51t5siIiL3uX4FjkGj4iBEV2N+FEJCfD9vERGR29Cv1KCRjR8X/bxFROR2aZhCREREgk6BQ0RERIJOgUNERESCToFDREREgk6BQ0RERIJOgUNERESCToFDREREgk6BQ0RERIJOgUNERESCToFDREREgq7fvy32fvCX59L5NuFRfvu7CuBzADb+LcTN++duZS+64P8db6Tg9fcBxy3r/lM+TF/zP5m59zL85T8GuOUiIiIPlgc6cMSNHM5wqwWI7LL9MvDHHefgXBkAc0cNIXd2Outmj6b08mrOv/fqnW+siIjIA+yBDhy9KbzUCvsrfP8Gfre3jKV/eImVE2J5+e42TURE5IFzzwaOdVNg5dPPMmhEPNc9UFDnYG1EI+XhqfzqV4VAKSuj4YWXnmR4bCoYQmm4DH+/uYL/8tkmlr75EmBhOHDozQwuk0Hee/XAm36f7/IFwNPG9dY2APKj4elVeYybMI1BP/y21NJvr/EPr5TCl5/7reN3j8WSm5fP8JFjwBDK5Vb4495GCv/qu0xT9Ns5XJyQz9cfVTDn8dEwOJLz1+BXW+o4v+MdgG59Ou+CV/fWU/jeFlZGO/z29/xnmwb0tRcRERlo9+Sk0aXA2ueexj0invVH7OzcvJ2l0VdgZGpHmenAupd+xvXodF7d18j6dzbxcEsNf1iTTkF0Pr9/vZDLZ0o5D/z+9Rr+9+ub4HiJ3+ebMw6W/jaPy4ZYXj30FQCjLsCIxNHs/OIyv3/nc0q3bWdO+Hes+/mjPbY7PXEItYzi1eI6Xn19E9iO8vfzY2F2fkeZUcC4ham8us9B6bbtjDI4+JdlScCjzAF+85vVYE1n/XEH69/ZDrYKRo0ZyXQcPfaX6PyemiQiInJPuCdHOBbmA+FjeLniClv/wzch8/LhMtb+038DYgFYOw+wJvG3Oxo5/8GffTvuruC51/6Oy0uSKPxLIf84z8J1oHD/NaCio/7hwKE18bCmc/LodeCPBx1QuAWA9cD6dZ2jIYXAvgnDSI59FJgDlHZr96rX6oH/0/H/lJYKcn8zDiZYYH9nuV99buf8B766i8bBqImLYfZo1g4HRsR36feru33zTP6tl/6OWpLE+b8UBvjqioiI3Hn3ZOAYYYXLDGZrdX3HtpcvwFpHI4T7AscjSTCIYXy8aBgs6nrXSe6Ia7zbS/03TxodBazKied3s9Ih7O/Y+h9/JBn4l5ceJS59DoQN7tzZ1XO9v5kVycJVTzI8PBYMN7609o5/fQucr+q8C+ZicxkPsxiGh3b2+2Q9N7ud/oqIiNxt92TgCNTNwaFdpaPtlvveOGkUoHJ/BX/618EsTEplK5n8bk0ZcdPyKLVdY+fBMmg+x+/zRkNspt/68oGVaxZz0TSa9WXnqK+qYH7Yd+Q+l9el3HWA6mt97KnP7fRXRETkbronA8e3NojjGksnjmTrD1cK1kUDkbHg7VrmyohhlH7QGRxGRcP5C523wQ4CiA6FCwE+uQEglFHWTC4C/7CpHo5vZzowaHnnHBI8vr/yhw+hEJgBEB7Jzi/bePV13yWPVcsBfkYg63p06feEkWzd4f+xW/VXRETkXnRPBo6dhTD98a9Yl57EIy+9xMNfHmLh/HQYHNtxSePdQkjPqeGfZ2Sw87+/RMPBChZOCiVuRjp5mxxQ+Cbnv64heUI+//ZSEte/epLfnv0O2A5AfkQYzE4HIN4ES2cmwYgkSk9eA0ppqIW0ifn8y5Px1JseZdWCSAhPglbf89fuhulrHPxtSixzf/k0W042svRCIwutFs4//Syzr50k+dHZfep3e5/WpWfwyEsvwclD5M8czRZPPO/+4Y+37K+IiMi9yhAZ9cj/Cg0L69NOg0aNDVJzfGoBU1MF6YljmZ5oZVxyEgVfeUlv+5Lzgy1s336Gc5zj66pTzBhrYnryGObMSMI0Ko795zwUbyuHq1/zTcU15kw2kWi1Mm5sLJc8EUy8Xkr02Fzmjw9n/rRU5k9LZWp6Kp6IaDbVtvDnP2wBLlJeC7NGXmN6SjwzZiRRds3CiPNHuBhhZfv2M5Rxjmyzk8SEJBLHRvNPl4di2vUmU5PHkj0pnqEJSZQXf8u48W38+Svg2CF+MXcM31kSKfi4ETgFwMoMMI3N5a9VDs6dOc7lqlNMn/AwmePHMHVKCpeHRFNcaaO46ixfVx3vtb/B1Np4Nqj1i4jIg+2h+ISZ3w8eMqRPOw2dlh2k5vRsOvCnf11NMan89n+8CXSfWCnBc/WI/1uKRUREAnFPXlJZCvzjy09zuHkU+6vrGHGpvuOSR8FeOwobIiIi95d7MnCUA4cPVjBjdiRzlmQAGVxuhVeP2Cn/i1bVFBERud/cN5dU5O7SJRUREbkd9+TS5iIiIvJgUeAQERGRoFPgEBERkaBT4BAREZGgU+AQERGRoFPgEBERkaBT4BAREZGgU+AQERGRoOtX4PC6rgx0O+Qepp+3iIjcrn4FjuvnG8DrHei2yL3I6/X9vEVERG5DvwKHp6WZa/U1OvN9wHldV7hWX4OnpfluN0VERO5z/f7lbZ6WZr7TgUhEREQCoEmjIiIiEnQKHCIiIhJ0ChwiIiISdAocIiIiEnT9njQKsPfS1wPVDrlPzIt45G43QURE7kMa4RAREZGgu60RjnY6633waTRLRERuh0Y4REREJOgUOERERCToFDhEREQk6BQ4REREJOgUOERERCToFDhEREQk6BQ4REREJOgUOERERCToBmThr/5Ykh7L2OzFYDDh9MC2EhuOii2AZ0DqTwVy161k44lw7HveCGif3FQLp4fNw3boo45tljCYPScDa2o6hJnxeKHc5qR8215oPQNAdjSkrX4eMHWpzwZsefkAcBh+eHTB7IlYM7LAYMLlgc+r7NSXFIK3OaA2mkNg2U8ycCbP7VJ3u7EmmL84H1NMIh4M1DS5Kdm+D1zVAdUvIiISDHclcCxLN2PJXU5xVQvNh4vJnhHOU7lZrA9bg+vIOwPyHDVAzcsFfdrHOtLIhUhr17bmTaQuYgY73zuA21FNfEQoi5Y9hmvJQmo2rwdcADiBt9+vhQuFPdb/1OPpNMXm8Mamw7ibDhEfaeTR/HmcnZSHp+LWbc20Gpn++EpcnnD8BTMLsGRlHiXORCpf24gZOysWZOBZmUfpWy34IpCIiMidd8cvqVgBa+Y8ys8bqCn6iCbnGbYUHYXzR8nMiAIS7nSTerW+qJqS99/E7agAPNRfcmM7sp14qwFICbiezEhwJGSw7b2juJsO+OpyuFj/fiGeqo9uuT+AcZiBjWVOzmx7A3B3e3z6eKgfmkLllr3QasfZCqU7j5I21AbJMwNuq4iIyEC74yMcj5gBk4WTR5tpHx1wA031J4idOwPMo8kecoa01c9T/JWJms3/7reeZZPAMePXlKz/iPYz92dyrJwdt5yS9R9hwcaq5/J55bAZqgo6ypuP7GNsdgYYTNRd8rCrYC+prgpy13LZZu4AAASKSURBVK0EYskFctf9uuNyiKf1MP4O7n2VNNFK5TdmcB3t/qDXN1rx4hMzqIzI6tKnG5WccgFbmRDt/zlirHGUXzCAt/PySZ0XFlw4R8yoyTTV3nY3RERE+uWOBw5TBIARt/tql+1tbheRABFDB+L47lfqEChPnsG2Pxdi8TawYnkOX+fnULO5mpqXC3gmx8qRyOU9hpx2sXHpHGwCONWxLRRYkjoU67JnwWimscXDts9O4LHtA8BsiaXpGxfZ8aGk5q4BkwVbi4dt2w/BRd88jFc2H+bmORl9YYqwYG92cfPlFleznagIE039rllEROT23PHAYTYDGP0+ZgQwmyipgpKXA5vo2ReNBij/8Ch4G7ADjSf3MmJGOjAaaAiojmWTzFwdN4/jG6tpH6EB34TQpmEWSjbvwehuZmFmLH/zRA4b3gkFxx4AMiPAEb2UDVsrMLkbWTB3NEtWzmXbeg+4/Yx89IPn++7b2r5vG5C6RURE+uuOz+FwOqGnIQw3gNPl97GB4LgCeBs7N3g9RA4D33TLW8uOMWDJXcWHxd/AhaKO7XWX4MNdRyn/5D2c9lrsTjvbdlUQ2VKNZXJiR7nQMSZKNjfgtFfQ5LSz7dOjjHVVY85IH5gOAoaHum8Lfeiu3YwkIiIC3IXA4boE4MZo7DrKEWo0+cYLLl31s9fdl2qCtJ8tZ1sluG6a5Nnkhqaao/juVfFxAFx2Yon03SrrvuLE7gTcDd3KGI0DEwhcl+xYokyAoct2U5SF5kvBC3IiIiK3cscDR70TcDYyIT6K9nUrjEBM/GRsTsD5ReCVhcCNV4WGDou67fYNGgQ3r6dhDYPclfns+iqKpj0b8btWSEjXg7wRYJARu8N3oP/6qy+wDPOAcXRHmUiA4Wbc7oG55NFka8Aa7YGQiR3bkkLAEz2aJltg63yIiIgEwx0PHHbAdvgA00d5SM1bTow5gWV5GbhHZVB+uBGwkR0NL657ntQnft1jPU1fQ9IwJ+bJMzCGGFmUGkvbqIzbatu3jY0kjfRgsGRhDANCTMSEwLKn8il2JlL36XvcOIrRbkmKkWXPvYBlfB6EmTGFwbLZyThGTsZ+whegDtZ6iHFUM31pBhjjMIfBkgXpnDVNxHm04rba3a78NMRfPUXasnkQZsEcBtnLsqi8aoXThwbkOURERPrjrlzc31LlZEnIR+TOzYdJi3G0wofFNlxVWwKuo8wB1kN7eCY7H3L+K+Xn3Qw6WAjTlva7XZ/Xelgxbi8vrJ6Hh4m8trOBTONWiEgmNwJy1z3bpfwrRY1QVcCOU27mG7ewIjsHw+O+MmcdHrZtOAQO310nDmDLB3vIXdJG5i8XQ4jBV6bgQMeE0VvdFvviEzNgTFbn/9dlAVkd7bAD2wqKmL84lOwXVnWsNFpaUOS3PhERkTvlofiEmd8PHjKkXzvvvfQ1APMiHhnINsk9SD9rERG5HfrlbSIiIhJ0ChwiIiISdAocIiIiEnQKHCIiIhJ0A3KXSvuEQhERERF/NMIhIiIiQXdbIxy6RVJEREQCoREOERERCbr/D7f4riYPT5kEAAAAAElFTkSuQmCC)

### send

- 用法是`接收方地址.send(发送ETH数额)`。
- `send()`的`gas`限制是`2300`，足够用于转账，但对方合约的`fallback()`或`receive()`函数不能实现太复杂的逻辑。
- `send()`如果转账失败，不会`revert`。
- `send()`的返回值是`bool`，代表着转账成功或失败，需要额外代码处理一下。

代码样例：

```solidity
// send()发送ETH
function sendETH(address payable _to, uint256 amount) external payable{
    // 处理下send的返回值，如果失败，revert交易并发送error
    bool success = _to.send(amount);
    if(!success){
        revert SendFailed();
    }
}
```



对`ReceiveETH`合约发送ETH，此时`amount`为10，`value`为0，`amount`>`value`，转账失败，因为经过处理，所以发生`revert`。

![20-5](https://www.wtf.academy/assets/images/20-5-cb457285c7185c438995bfcc95b6a01d.png)

此时`amount`为10，`value`为11，`amount`<=`value`，转账成功。

![20-6](https://www.wtf.academy/assets/images/20-6-1ae2f81d902c618059d813e5b16cbe4c.png)

### call

- 用法是`接收方地址.call{value: 发送ETH数额}("")`。
- `call()`没有`gas`限制，可以支持对方合约`fallback()`或`receive()`函数实现复杂逻辑。
- `call()`如果转账失败，不会`revert`。
- `call()`的返回值是`(bool, data)`，其中`bool`代表着转账成功或失败，需要额外代码处理一下。

代码样例：

```solidity
// call()发送ETH
function callETH(address payable _to, uint256 amount) external payable{
    // 处理下call的返回值，如果失败，revert交易并发送error
    (bool success,) = _to.call{value: amount}("");
    if(!success){
        revert CallFailed();
    }
}
```



对`ReceiveETH`合约发送ETH，此时`amount`为10，`value`为0，`amount`>`value`，转账失败，因为经过处理，所以发生`revert`。

![20-7](https://www.wtf.academy/assets/images/20-7-bbfe1e7134676767c0a6c9612165ea9e.png)

此时`amount`为10，`value`为11，`amount`<=`value`，转账成功。

![20-8](https://www.wtf.academy/assets/images/20-8-5c25a6d4556ce624ff27752f24e85d4a.png)

运行三种方法，可以看到，他们都可以成功地向`ReceiveETH`合约发送`ETH`。

### 总结

这一讲，我们介绍`solidity`三种发送`ETH`的方法：`transfer`，`send`和`call`。

- `call`没有`gas`限制，最为灵活，是最提倡的方法；
- `transfer`有`2300 gas`限制，但是发送失败会自动`revert`交易，是次优选择；
- `send`有`2300 gas`限制，而且发送失败不会自动`revert`交易，几乎没有人用它。





## 调用已部署合约

开发者写智能合约来调用其他合约，这让以太坊网络上的程序可以复用，从而建立繁荣的生态。很多`web3`项目依赖于调用其他合约，比如收益农场（`yield farming`）。这一讲，我们介绍如何在已知合约代码（或接口）和地址情况下调用目标合约的函数。

### 目标合约

我们先写一个简单的合约`OtherContract`来调用。

```solidity
contract OtherContract {
    uint256 private _x = 0; // 状态变量_x
    // 收到eth的事件，记录amount和gas
    event Log(uint amount, uint gas);
    
    // 返回合约ETH余额
    function getBalance() view public returns(uint) {
        return address(this).balance;
    }

    // 可以调整状态变量_x的函数，并且可以往合约转ETH (payable)
    function setX(uint256 x) external payable{
        _x = x;
        // 如果转入ETH，则释放Log事件
        if(msg.value > 0){
            emit Log(msg.value, gasleft());
        }
    }

    // 读取_x
    function getX() external view returns(uint x){
        x = _x;
    }
}
```



这个合约包含一个状态变量`_x`，一个事件`Log`在收到`ETH`时触发，三个函数：

- `getBalance()`: 返回合约`ETH`余额。
- `setX()`: `external payable`函数，可以设置`_x`的值，并向合约发送`ETH`。
- `getX()`: 读取`_x`的值。

### 调用`OtherContract`合约

我们可以利用合约的地址和合约代码（或接口）来创建合约的引用：`_Name(_Address)`，其中`_Name`是合约名，`_Address`是合约地址。然后用合约的引用来调用它的函数：`_Name(_Address).f()`，其中`f()`是要调用的函数。

下面我们介绍4个调用合约的例子，在remix中编译合约后，分别部署`OtherContract`和`CallContract`：

![deploy contract0 in remix](https://www.wtf.academy/assets/images/21-1-9c522c370dfc53d1a0c273716f949c9e.png)

![deploy contract1 in remix](https://www.wtf.academy/assets/images/21-2-a3c672e6dca937bf09dc3dfe5a421534.png)

![deploy contract2 in remix](https://www.wtf.academy/assets/images/21-3-dd0cfc401d8462761c9b740ec21aa994.png)

#### 1. 传入合约地址

我们可以在函数里传入目标合约地址，生成目标合约的引用，然后调用目标函数。以调用`OtherContract`合约的`setX`函数为例，我们在新合约中写一个`callSetX`函数，传入已部署好的`OtherContract`合约地址`_Address`和`setX`的参数`x`：

```solidity
    function callSetX(address _Address, uint256 x) external{
        OtherContract(_Address).setX(x);
    }
```



复制`OtherContract`合约的地址，填入`callSetX`函数的参数中，成功调用后，调用`OtherContract`合约中的`getX`验证`x`变为123

![call contract1 in remix](https://www.wtf.academy/assets/images/21-4-89e705ffc18c8f90063c922e7504b31e.png)

![call contract2 in remix](https://www.wtf.academy/assets/images/21-5-52866e87f467b4ebad52d6d00d4d2744.png)

#### 2. 传入合约变量

我们可以直接在函数里传入合约的引用，只需要把上面参数的`address`类型改为目标合约名，比如`OtherContract`。下面例子实现了调用目标合约的`getX()`函数。

**注意**该函数参数`OtherContract _Address`底层类型仍然是`address`，生成的`ABI`中、调用`callGetX`时传入的参数都是`address`类型

```solidity
    function callGetX(OtherContract _Address) external view returns(uint x){
        x = _Address.getX();
    }
```



复制`OtherContract`合约的地址，填入`callGetX`函数的参数中，调用后成功获取`x`的值

![call contract3 in remix](https://www.wtf.academy/assets/images/21-6-615b6ab5f73c18a1c4a7a7d0be5f7228.png)

#### 3. 创建合约变量

我们可以创建合约变量，然后通过它来调用目标函数。下面例子，我们给变量`oc`存储了`OtherContract`合约的引用：

```solidity
    function callGetX2(address _Address) external view returns(uint x){
        OtherContract oc = OtherContract(_Address);
        x = oc.getX();
    }
```



复制`OtherContract`合约的地址，填入`callGetX2`函数的参数中，调用后成功获取`x`的值

![call contract4 in remix](https://www.wtf.academy/assets/images/21-7-ab9a5e3d84b27006392eb368b1e93d2d.png)

#### 4. 调用合约并发送`ETH`

如果目标合约的函数是`payable`的，那么我们可以通过调用它来给合约转账：`_Name(_Address).f{value: _Value}()`，其中`_Name`是合约名，`_Address`是合约地址，`f`是目标函数名，`_Value`是要转的`ETH`数额（以`wei`为单位）。

`OtherContract`合约的`setX`函数是`payable`的，在下面这个例子中我们通过调用`setX`来往目标合约转账。

```solidity
    function setXTransferETH(address otherContract, uint256 x) payable external{
        OtherContract(otherContract).setX{value: msg.value}(x);
    }
```



复制`OtherContract`合约的地址，填入`setXTransferETH`函数的参数中，并转入10ETH

![call contract5 in remix](https://www.wtf.academy/assets/images/21-8-3566ee52a32b536dded77112c6599bdb.png)

转账后，我们可以通过`Log`事件和`getBalance()`函数观察目标合约`ETH`余额的变化。

![call contract6 in remix](https://www.wtf.academy/assets/images/21-9-d90c3bad37dd4d77acbd2ea8b695242e.png)

### 总结

这一讲，我们介绍了如何通过目标合约代码（或接口）和地址来创建合约的引用，从而调用目标合约的函数。



