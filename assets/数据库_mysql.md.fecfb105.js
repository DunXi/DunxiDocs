import{_ as e,c as a,o as r,e as t}from"./app.47ebe88d.js";const p=JSON.parse('{"title":"MySQL","description":"","frontmatter":{},"headers":[{"level":3,"title":"新建数据库","slug":"新建数据库","link":"#新建数据库","children":[]},{"level":3,"title":"选择bookstore数据库","slug":"选择bookstore数据库","link":"#选择bookstore数据库","children":[]},{"level":3,"title":"创建数据库表 book","slug":"创建数据库表-book","link":"#创建数据库表-book","children":[]},{"level":2,"title":"-- use bookstore;","slug":"use-bookstore","link":"#use-bookstore","children":[{"level":3,"title":"插入数据","slug":"插入数据","link":"#插入数据","children":[]}]},{"level":2,"title":"-- use bookstore;","slug":"use-bookstore-1","link":"#use-bookstore-1","children":[{"level":3,"title":"删除数据库表","slug":"删除数据库表","link":"#删除数据库表","children":[]},{"level":3,"title":"查看数据表的索引信息","slug":"查看数据表的索引信息","link":"#查看数据表的索引信息","children":[]},{"level":3,"title":"修改book表，为其添加替代件约束（UNIQUE），索引的名字为（u_idx）","slug":"修改book表-为其添加替代件约束-unique-索引的名字为-u-idx","link":"#修改book表-为其添加替代件约束-unique-索引的名字为-u-idx","children":[]},{"level":3,"title":"删除某个索引","slug":"删除某个索引","link":"#删除某个索引","children":[]},{"level":3,"title":"在创建表的时候创建外键约束 不指定约束名","slug":"在创建表的时候创建外键约束-不指定约束名","link":"#在创建表的时候创建外键约束-不指定约束名","children":[]},{"level":3,"title":"删除数据库表","slug":"删除数据库表-1","link":"#删除数据库表-1","children":[]},{"level":3,"title":"指定外检约束名字 创建外键","slug":"指定外检约束名字-创建外键","link":"#指定外检约束名字-创建外键","children":[]},{"level":3,"title":"指定外键约束动作 限制操作（update delete）","slug":"指定外键约束动作-限制操作-update-delete","link":"#指定外键约束动作-限制操作-update-delete","children":[]},{"level":3,"title":"为sell 表添加用户号外键约束，指定参照动作为restrict","slug":"为sell-表添加用户号外键约束-指定参照动作为restrict","link":"#为sell-表添加用户号外键约束-指定参照动作为restrict","children":[]}]}],"relativePath":"数据库/mysql.md","lastUpdated":1680095456000}'),l={name:"数据库/mysql.md"},o=t('<h1 id="mysql" tabindex="-1">MySQL <a class="header-anchor" href="#mysql" aria-hidden="true">#</a></h1><h3 id="新建数据库" tabindex="-1">新建数据库 <a class="header-anchor" href="#新建数据库" aria-hidden="true">#</a></h3><p>-- create database bookstore;</p><h3 id="选择bookstore数据库" tabindex="-1">选择bookstore数据库 <a class="header-anchor" href="#选择bookstore数据库" aria-hidden="true">#</a></h3><p>use bookstore;</p><h3 id="创建数据库表-book" tabindex="-1">创建数据库表 book <a class="header-anchor" href="#创建数据库表-book" aria-hidden="true">#</a></h3><p>-- create table book ( -- 图书编号 char(10) not null primary key, -- 类别 varchar(8) not null default &#39;计算机&#39;, -- 书名 varchar(40) not null, -- 出版时间 date not null, -- 单价 float(5,2) null, -- 数量 int , -- 封面图片 varchar(40) -- );</p><p>-- use bookstore;</p><p>-- create table members ( -- 用户号 char(8) not null primary key, -- 姓名 char(5) not null, -- 性别 char(1), -- 密码 varchar(20) default &#39;080100&#39;, -- 联系电话 char(11), -- 注册时间 datetime -- );</p><h2 id="use-bookstore" tabindex="-1">-- use bookstore; <a class="header-anchor" href="#use-bookstore" aria-hidden="true">#</a></h2><p>-- create table sell( -- 订单号 int primary key auto_increment, -- 用户号 char(10), -- 图书编号 char(10), -- 订购册数 int, -- 订购单价 float(5,2), -- 订购时间 datetime, -- 是否发货 char(5), -- 是否收货 char(5), -- 是否结清 char(5) -- );</p><p>-- use bookstore;</p><h3 id="插入数据" tabindex="-1">插入数据 <a class="header-anchor" href="#插入数据" aria-hidden="true">#</a></h3><p>-- insert into sell values (null,&#39;10001&#39;,&#39;1001&#39;,10,100.1,&#39;2023-10-1&#39;,&#39;是&#39;,&#39;否&#39;,&#39;否&#39;);</p><h2 id="use-bookstore-1" tabindex="-1">-- use bookstore; <a class="header-anchor" href="#use-bookstore-1" aria-hidden="true">#</a></h2><p>-- create table cj ( -- 学号 char(6) not null, -- 课程号 char(3) not null, -- 成绩 int, -- primary key(学号,课程号) -- );</p><p>-- create table book_copy1 ( -- 图书编号 varchar(20) not null primary key , -- 书名 varchar(20) not null unique, -- 出版日期 date null -- );</p><h3 id="删除数据库表" tabindex="-1">删除数据库表 <a class="header-anchor" href="#删除数据库表" aria-hidden="true">#</a></h3><p>-- drop table book_copy1;</p><h3 id="查看数据表的索引信息" tabindex="-1">查看数据表的索引信息 <a class="header-anchor" href="#查看数据表的索引信息" aria-hidden="true">#</a></h3><p>-- show index from book_copy1;</p><h3 id="修改book表-为其添加替代件约束-unique-索引的名字为-u-idx" tabindex="-1">修改book表，为其添加替代件约束（UNIQUE），索引的名字为（u_idx） <a class="header-anchor" href="#修改book表-为其添加替代件约束-unique-索引的名字为-u-idx" aria-hidden="true">#</a></h3><p>-- alter table book add unique u_idx(书名);</p><h3 id="删除某个索引" tabindex="-1">删除某个索引 <a class="header-anchor" href="#删除某个索引" aria-hidden="true">#</a></h3><p>-- alter table book drop index u_idx;</p><h3 id="在创建表的时候创建外键约束-不指定约束名" tabindex="-1">在创建表的时候创建外键约束 不指定约束名 <a class="header-anchor" href="#在创建表的时候创建外键约束-不指定约束名" aria-hidden="true">#</a></h3><p>-- create table book_ref( -- 图书编号 varchar(20) primary key, -- 书名 varchar(20) not null, -- 出版日期 date null, -- foreign key(图书编号) references book(图书编号) -- );</p><h3 id="删除数据库表-1" tabindex="-1">删除数据库表 <a class="header-anchor" href="#删除数据库表-1" aria-hidden="true">#</a></h3><p>-- drop table book_ref</p><h3 id="指定外检约束名字-创建外键" tabindex="-1">指定外检约束名字 创建外键 <a class="header-anchor" href="#指定外检约束名字-创建外键" aria-hidden="true">#</a></h3><p>-- create table book_ref( -- 图书编号 varchar(20) primary key, -- 书名 varchar(20) not null, -- 出版日期 date null, -- constraint fk_bookid foreign key(图书编号) references book(图书编号) -- );</p><h3 id="指定外键约束动作-限制操作-update-delete" tabindex="-1">指定外键约束动作 限制操作（update delete） <a class="header-anchor" href="#指定外键约束动作-限制操作-update-delete" aria-hidden="true">#</a></h3><p>-- create table book_ref( -- 图书编号 varchar(20) primary key, -- 书名 varchar(20) not null, -- 出版日期 date null, -- constraint fk_bookid foreign key (图书编号) -- references book(图书编号) -- on delete restrict -- on update restrict -- );</p><h3 id="为sell-表添加用户号外键约束-指定参照动作为restrict" tabindex="-1">为sell 表添加用户号外键约束，指定参照动作为restrict <a class="header-anchor" href="#为sell-表添加用户号外键约束-指定参照动作为restrict" aria-hidden="true">#</a></h3><p>alter table sell add constraint fk_1 foreign key(用户号) REFERENCES members(用户号) on delete restrict on update restrict;</p>',35),i=[o];function n(d,s,h,c,u,b){return r(),a("div",null,i)}const f=e(l,[["render",n]]);export{p as __pageData,f as default};
