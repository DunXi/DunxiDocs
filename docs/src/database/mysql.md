# MySQL
### 新建数据库
-- create database bookstore;

### 选择bookstore数据库
use bookstore;

### 创建数据库表 book
-- create table book (
-- 	图书编号 char(10) not null primary key,
-- 	类别 varchar(8) not null default '计算机',
-- 	书名 varchar(40) not null,
-- 	出版时间 date not null,
-- 	单价 float(5,2) null,
-- 	数量 int ,
-- 	封面图片 varchar(40)
-- );


-- use bookstore;

-- create table members (
-- 	用户号 char(8) not null primary key,
-- 	姓名 char(5) not null,
-- 	性别 char(1),
-- 	密码 varchar(20) default '080100',
-- 	联系电话 char(11),
-- 	注册时间 datetime
-- );

-- use bookstore;
-- 
-- create table sell(
-- 	订单号 int primary key auto_increment,
-- 	用户号 char(10),
-- 	图书编号 char(10),
-- 	订购册数 int,
-- 	订购单价 float(5,2),
-- 	订购时间 datetime,
-- 	是否发货 char(5),
-- 	是否收货 char(5),
-- 	是否结清 char(5)
-- );


-- use bookstore;

### 插入数据
-- insert into sell values (null,'10001','1001',10,100.1,'2023-10-1','是','否','否');

-- use bookstore;
-- 
-- create table cj (
-- 	学号 char(6) not null,
-- 	课程号 char(3) not null,
-- 	成绩 int,
-- 	primary key(学号,课程号)
-- );

-- create table book_copy1 (
-- 	图书编号 varchar(20) not null primary key , 
-- 	书名 varchar(20) not null unique,
-- 	出版日期 date null
-- );


### 删除数据库表

-- drop table book_copy1;

### 查看数据表的索引信息
-- show index from book_copy1;

### 修改book表，为其添加替代件约束（UNIQUE），索引的名字为（u_idx）
-- alter table book add unique u_idx(书名);


### 删除某个索引
-- alter table book drop index u_idx;

### 在创建表的时候创建外键约束 不指定约束名
-- create table book_ref(
-- 	图书编号 varchar(20) primary key,
-- 	书名 varchar(20) not null,
-- 	出版日期 date null,
-- 	foreign key(图书编号)	references book(图书编号)
-- );


### 删除数据库表
-- drop table book_ref

### 指定外检约束名字 创建外键
-- create table book_ref(
-- 	图书编号 varchar(20) primary key,
-- 	书名 varchar(20) not null,
-- 	出版日期 date null,
-- 	constraint fk_bookid foreign key(图书编号)	references book(图书编号)
-- );

### 指定外键约束动作 限制操作（update delete）
-- create table book_ref(
-- 	图书编号 varchar(20) primary key,
-- 	书名 varchar(20) not null,
-- 	出版日期 date null,
-- 	constraint fk_bookid foreign key (图书编号)
-- 		references book(图书编号)
-- 		on delete restrict
-- 		on update restrict
-- );


### 为sell 表添加用户号外键约束，指定参照动作为restrict

alter table sell add constraint fk_1 foreign key(用户号)
	REFERENCES members(用户号) on delete restrict on update restrict;






