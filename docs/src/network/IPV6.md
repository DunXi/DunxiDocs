# IPV6技术

为了解决ipv4地址不够用的问题

![image-20230209114838446](https://bed-1309358403.cos.ap-shanghai.myqcloud.com/img/image-20230209114838446.png)

## IPv6地址

ipv6地址的长度为128bit。**一般用冒号分割为8段**，每一段16bit，每一段内用十六进制表示，一个16进制数可以转换为4位二进制数。

IPv6地址中的字母大小写不敏感，A等同于a

ipv6也用IPv6/子网号



### 地址转换

05AD

0000 0101 1010 1101

CDEF

1100 1101 1110 1111

0DB8

0000 1101 1011 1000

| 十六进制 | 二进制 |
| -------- | ------ |
| 0        | 0000   |
| 1        | 0001   |
| 2        | 0010   |
| 3        | 0011   |
| 4        | 0100   |
| 5        | 0101   |
| 6        | 0110   |
| 7        | 0111   |
| 8        | 1000   |
| 9        | 1001   |
| A        | 1010   |
| B        | 1011   |
| C        | 1100   |
| D        | 1101   |
| E        | 1110   |
| F        | 1111   |



## IPv6地址缩写规范

​	为了书写方便，IPv6技术可以采用以下规则进行缩写。

- 每组16bit的单元的前导0可以省略，但是如果16bit单元的所有bit都为0，那么至少要保留一个0字符，拖尾的0不能被省略。

- 一个或多个连续的16bit字符为0时，可用"::"表示，但整个IPv6地址缩写中只允许有一个"::"。

  注意：如果整个IPv6地址中写了多个"::"则可能出现不确定每个符号缩减了几个0，只能表知道这几个符号一共缩减了几个0.



## IPv6地址分类

​	ipv6地址里面没有广播地址

### 组播地址

### 单播地址

#### 	全球单播地址

​		2000::/3

#### 	唯一本地地址

​		FD00::/8

#### 	链路本地地址

​		FE80::/10

#### 	特殊地址

#### 	其他单播地址

### 任博地址



## IPv6单播地址结构

​	一个IPv6单播地址可以分为两种结构

- 网络前缀：相当于IPv4中的网络位
  - n bit

- 接口标识：相当于主机位
  - 128 - n bit



### IPv6单播地址接口标识

- 接口标识可以通过三种方法生成
  - 手工配置
  - 系统自动生成
  - 通过IEEE EUI-64规范生成
- 其中EUI-64规范最为常用，此规范将接口的Mac地址转换为IPv6接口标识。
  - EUI-64
    - 将Mac地址第7bit取反
    - 在Mac地址中间加入FFFE,然后转成16进制

#### EUI-64练习

72DE-9862-2A3F

0111 0010 1101 1110 1001 1000   1111 1111 1111 1110   0110 0010 0010 1010 0011 11111

70 DE 98 FF FE 62 2a 3f



DB 86 9c FFFE 88 ef aa

1101 1001 - 1000 0110 - 1001 1100 -11111111-11111110- 1000 1000- 1110 1111 - 1010 1010

D9 86 9c ff fe 88 ef aa

冒号分十六进制

D986:9CFF:FE88:EFAA



## IPv6组播地址

​	ipv6组播地址表示多个接口，一般用于一对多的通信场景。

​	ipv6组播地址只可以作为ipv6报文的目的地址。组播



### 被请求节点的组播地址

​	当一个节点有了单播或任播地址，就会对应生成一个被请求节点组播地址，并且两端设备会加入加入到同一个组播组。该地址主要用于**邻居发现**（相当于ipv4中的arp）和**地址重复检测**（相当于ipv4中的免费arp）功能。被请求节点组播地址的有效范围为本地链路范围。

#### 生成方法

​	前104bit固定（**FF02开头**），后24bit由单播地址的后24bit拷贝而来。

### IPv6组播Mac

组播Mac的前16bit为“33:33”，是专门为ipv6组播预留的Mac地址前缀。后32bit从组播ipv6地址的后32bit直接映射而来。



## IPv6任播地址

​	任播地址标识一组网络，不常用





## IPv6单播地址的业务流程（重点）

​	一个接口在发送IPv6报文之前要经历地址配置、DAD、地址解析这三个阶段，NDP

1. 配置地址
   1. 全球单播地址
      1. 手工配置
      2. 无状态
      3. 有状态
   2. 链路本地地址
      1. 手工配置
      2. 自动生成
2. DAD检测重复（检测是否存在重复IP）
3. 地址解析（相当于ARP求Mac地址）来获取对方的Mac地址



开启ipv6

![image-20230216113552117](https://bed-1309358403.cos.ap-shanghai.myqcloud.com/img/image-20230216113552117.png)

接口开启ipv6功能

![image-20230216113922788](https://bed-1309358403.cos.ap-shanghai.myqcloud.com/img/image-20230216113922788.png)

查看ipv6路由表

![image-20230216113825396](https://bed-1309358403.cos.ap-shanghai.myqcloud.com/img/image-20230216113825396.png)



### 地址解析

#### 检测是否通信 ping ipv6

ping+ipv6地址

ping 2000::1



### 地址配置

#### 有状态地址配置

通过DHCPv6报文交互，DHCPv6服务器端自动





#### 无状态地址配置

NDP使用的IPv6报文

| ICMPv6 Type | 报文名称         |
| ----------- | ---------------- |
| 133         | 路由器请求（RS） |
| 134         | 路由器通告（RA） |
| 135         | 邻居请求（NS）   |
| 136         | 邻居通告（NA）   |

​	PC在没有IP地址的时候会向路由器发送RS请求，路由器在收到RS请求之后会回复给PC一份RA报文，携带网络前缀，PC在收到网络前缀之后会通过EUI-64自动生成接口标识



服务器

> Undo ipv6 nd ra halt   允许接受RA报文



客户端

> ipv6 address auto link-local 自动生成链路本地地址
>
> ipv6 address auto global 自动生成全球单播地址



#### 有状态（DHCPv6）

#### DHCP（V4）

1. 路由器开启DHCP功能

>  dhcp enable  

2. 创建地址池

> ip pool 1
>
3. 设置地址池IP地址范围

​		mask 表示掩码长度

> network 192.169.1.0 mask 24

4. 设置网关地址

> Gateway-list 192.168.1.254

5. 设置接口IP地址（网关）

> ip address 192.168.1.254

6. 使能全局地址池

> dhcp select global



#### DHCPV6

##### 服务器：

###### 开启DHCP功能

> dhcp enable

###### 创建一个DHCPv6地址池

> dhcpv6 pool 1

###### 规定地址池ipv6的范围

> address prefix 2002::/64

###### 将网关地址排除

> []excluded-address 2002::2

###### 调用DHCPv6地址池

> [huawei-GigabitEthernet0/0/0]dhcpv6 server 1

##### 客户端：

###### 开启dhcp功能

> [Huawei]dhcp enable

###### 配置自动获取dhcp

> ipv6 address auto dhcp

### DAD

![f6780957c755995fd17b1b72c630d3a3](https://bed-1309358403.cos.ap-shanghai.myqcloud.com/img/f6780957c755995fd17b1b72c630d3a3.jpeg)

1. PC配置IP地址之后，会发送NS报文检测IP地址是否重复
2. NS报文中携带着源IP地址::,目的IP地址为 自己配置的全球单播地址所对应的被请求节点组播地址，并且携带上自己配置的全球单播地址（需要检测的IP地址）
3. 由于R1的IP地址和PC相同，因此被请求节点的组播地址相同，并且和PC会加入到同一个组播组，所以R1能收到这个NS报文，并且发现NS报文中需要检测的IP地址与自己的IP地址想通
4. R1回复NA报文给，源IP地址为自己的地址，目的IP地址由于不知道，因此目的地址为FF02::1（所有节点组播地址），整个组播组中的设备都能收到该报文。  
5. PC收到之后发现NA中的IP地址与自己的重复，因此会将2001::FFFF标识为重复，使用其他IP地址。



## IPv6过渡技术

- 双栈技术
- 隧道技术
- 转换技术

![image-20230302113428273](https://bed-1309358403.cos.ap-shanghai.myqcloud.com/img/image-20230302113428273.png)





| IPv6地址或前缀 | 含义                                           |
| -------------- | ---------------------------------------------- |
| 2001::/16      | 用于IPv6 Internet,类似于IPv4公网地址           |
| 2002::/16      | 用于6to4隧道                                   |
| FE80::/10      | 链路本地地址前缀，用于本地链路地址范围内的通信 |
| FF00::/8       | 组播地址前缀，用于ipv6组播                     |
| ::/128         | 未指定地址，类似于ipv4中的0.0.0.0              |
| ::1/128        | 环回地址，类似于ipv4中的127.0.0.1              |



## 路由

Ipv6 route-static  目的网段（最终去的地方）

对方掩码  出接口（接口名称）  下一跳（ip地址）



## OSPF

距离矢量：只知道距离和方向，不知道网络的具体细节，RIP（容易产生环路）、BGP增强型距离矢量（水平分割）

链路状态：知道网络的细节  OSPF、ISIS

- Hello :建立邻居关系
- DD 数据库描述报文
- LSR 链路状态请求报文
- LSU：链路状态更新报文
- LSACK：确认报文

### Router ID：

#### 	生成方法：

​		手动配置

​		自动生成

​			Loopback：IP地址最大的作为Router ID 

​			物理接口：IP地址最大的作为Router ID

### Hello字段

​	Network mask： 发送Hello的接口掩码

​	Hello Interval： Hello 报文发送时间间隔：默认10s

​	Router Dead Interval： 死亡时间：4倍于Hello间隔，默认40s

​	Designated Router： DR 指定路由器

​	Backup Designated Router： BDR 备份指定路由器

​	Router Priority: DR优先级（0-255）



### 网络类型

以太网（只要有MAC地址）

广域网协议PPP、HDLC

ATM、帧中继



网络层（OSPF）：广播网络类型（BMA）  P2P（点对点） 	NBMA  	P2MP

数据链路层：             以太网                 		 PPP、HDLC       ATM、帧中继

特殊：P2MP 没有任何一种数据链路层协议对应



DR、BDR、DR other

DR other 只能与DR、BDR建立邻接关系

DR other 与 DR other 之间建立邻居关系

BDR 与 DR 之间建立邻接关系



选举DR、BDR



每个设备都会为每个链路产生一个Link-LSA，仅在始发链路内泛洪。

#### Link-LSA的作用：

- 向该链路上其他路由器通告本接口的链路本地地址
- 向该链路上其他路由器通告本接口的IPv6前缀列表
- 向该链路上其他路由器通告本链路始发的Network-LSA中设置的可选项



在OSPFv2中，可以通过type1和type2的LSA来描述拓扑信息和网段信息，而OSPFv3的此两类LSA进包含拓扑信息



OSPF用于IP网络中，TCP/IP协议栈中，属于网络层

ISIS即可用于CLNP网络中也可以用于IP网络中，OSI协议栈，属于数据链路层



## ISIS

49.0001     .0000.0000.001         .00

区域ID        	system ID(Router ID)             SEL（IP）



### 路由器的分类以及邻居建立要求：

Level 1：Level-1只能与属于同一区域的Level-1和Level1-2路由器建立邻居关系

Level 2：可以与相同或不同区域的Level2、Level1-2建立邻居关系

Level 1-2（默认）：可以与相同区域的Level1，不同区域的Level2、Level1-2建立邻居关系



#### 配置

1. 配置IP地址
2. 配置ISIS
   1. ISIS 1 进入isis视图
   2. [Huawei-isis-1]is-Level xxx 更改路由器类型
   3. [Huawei-isis-1]Network-entity xxx 配置net地址
   4. [Huawei-Ethernet0/0/0]isis enable  接口开启isis



OSPF划分区域： 接口

ISIS划分区域 路由器  Level2、Level1-2





