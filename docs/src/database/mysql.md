# MySQL数据库

*(基于《MySQL必知必会》整理)*

## 一、基础概念

### 1. 数据库基础

- **数据库**：保存有组织的数据的容器
- **表**：某种特定类型数据的结构化清单
- **列**：表中的一个字段，所有表都是由一个或多个列组成
- **行**：表中的一个记录
- **主键**：一列(或一组列)，其值能唯一区分表中每个行

### 2. SQL基础

- **SQL (Structured Query Language)**：结构化查询语言，用于管理数据库
- **DDL (Data Definition Language)**：数据定义语言，如CREATE, ALTER, DROP
- **DML (Data Manipulation Language)**：数据操作语言，如SELECT, INSERT, UPDATE, DELETE
- **DCL (Data Control Language)**：数据控制语言，如GRANT, REVOKE

## 二、数据库与表操作

### 1. 数据库操作

```sql
-- 创建数据库
CREATE DATABASE database_name;

-- 选择数据库
USE database_name;

-- 查看数据库
SHOW DATABASES;

-- 删除数据库
DROP DATABASE database_name;
```

### 2. 表操作

```sql
-- 创建表
CREATE TABLE table_name (
  column1 datatype constraints,
  column2 datatype constraints,
  ...
) ENGINE=InnoDB;  -- 指定存储引擎

-- 查看表
SHOW TABLES;
DESCRIBE table_name;

-- 修改表
ALTER TABLE table_name ADD column_name datatype;
ALTER TABLE table_name DROP COLUMN column_name;
ALTER TABLE table_name MODIFY COLUMN column_name new_datatype;

-- 重命名表
RENAME TABLE old_name TO new_name;

-- 删除表
DROP TABLE table_name;
```

### 3. 数据类型

- **数值类型**：INT, DECIMAL, FLOAT, DOUBLE
- **字符串类型**：CHAR, VARCHAR, TEXT, BLOB
- **日期时间类型**：DATE, TIME, DATETIME, TIMESTAMP, YEAR
- **AUTO_INCREMENT**：自动增长列
- **DEFAULT**：指定默认值
- **NULL/NOT NULL**：允许/不允许为空

## 三、数据操作

### 1. 插入数据

```sql
-- 插入完整行
INSERT INTO table_name VALUES(value1, value2, ...);

-- 插入特定列
INSERT INTO table_name(column1, column2) VALUES(value1, value2);

-- 插入多行
INSERT INTO table_name VALUES(...), (...), (...);

-- 插入检索数据
INSERT INTO table_name(column1, column2)
SELECT column1, column2 FROM another_table;
```

### 2. 更新数据

```sql
UPDATE table_name
SET column1 = value1, column2 = value2
WHERE condition;
```

### 3. 删除数据

```sql
-- 删除特定行
DELETE FROM table_name WHERE condition;

-- 删除表所有数据(保留表结构)
TRUNCATE TABLE table_name;
```

## 四、数据查询

### 1. 基础查询

```sql
-- 检索单个/多个列
SELECT column1 FROM table_name;
SELECT column1, column2 FROM table_name;

-- 检索所有列
SELECT * FROM table_name;

-- 检索不同行
SELECT DISTINCT column1 FROM table_name;

-- 限制结果
SELECT column1 FROM table_name LIMIT 5;
SELECT column1 FROM table_name LIMIT 5 OFFSET 3; -- 从第4行开始取5行
```

### 2. 排序

```sql
-- 单列排序
SELECT column1 FROM table_name ORDER BY column1;

-- 多列排序
SELECT column1, column2 FROM table_name ORDER BY column1, column2;

-- 指定排序方向
SELECT column1 FROM table_name ORDER BY column1 DESC; -- 降序
SELECT column1 FROM table_name ORDER BY column1 ASC;  -- 升序(默认)
```

### 3. 过滤数据

```sql
-- WHERE子句
SELECT column1 FROM table_name WHERE condition;

-- 检查单个值
WHERE column = value;

-- 不匹配检查
WHERE column <> value;
WHERE column != value;

-- 范围值检查
WHERE column BETWEEN value1 AND value2;

-- 空值检查
WHERE column IS NULL;
WHERE column IS NOT NULL;

-- IN操作符
WHERE column IN (value1, value2, ...);

-- NOT操作符
WHERE NOT column = value;
```

### 4. 通配符过滤

```sql
-- LIKE操作符
WHERE column LIKE 'pattern';

-- 百分号(%)通配符 - 匹配0或多个字符
WHERE column LIKE 'jet%';

-- 下划线(_)通配符 - 匹配单个字符
WHERE column LIKE '_eton';

-- 转义特殊字符
WHERE column LIKE '%\\_%' ESCAPE '\\';
```

### 5. 正则表达式

```sql
-- 基本字符匹配
WHERE column REGEXP 'pattern';

-- OR匹配
WHERE column REGEXP '1000|2000';

-- 匹配几个字符之一
WHERE column REGEXP '[123] Ton';

-- 匹配范围
WHERE column REGEXP '[0-9]';

-- 匹配特殊字符
WHERE column REGEXP '\\.';

-- 匹配多个实例
WHERE column REGEXP 'stick?';  -- ?匹配0或1个
WHERE column REGEXP 'sticks*'; -- *匹配0或多个
WHERE column REGEXP 'sticks+'; -- +匹配1或多个

-- 定位符
WHERE column REGEXP '^start';  -- 以start开头
WHERE column REGEXP 'end$';    -- 以end结尾
```

## 五、高级查询技术

### 1. 计算字段

```sql
-- 拼接字段
SELECT CONCAT(column1, '(', column2, ')') AS new_column FROM table_name;

-- 执行算术计算
SELECT column1 * column2 AS result FROM table_name;

-- 使用AS指定别名
SELECT column1 AS alias_name FROM table_name;
```

### 2. 数据处理函数

#### 文本处理函数

- `LEFT()`, `RIGHT()` - 返回串左边/右边的字符
- `LENGTH()` - 返回串的长度
- `LOCATE()` - 找出串的一个子串
- `LOWER()`, `UPPER()` - 将文本转换为小写/大写
- `LTRIM()`, `RTRIM()`, `TRIM()` - 去掉串左/右/两边的空格
- `SOUNDEX()` - 返回串的SOUNDEX值
- `SUBSTRING()` - 返回子串的字符

#### 日期和时间处理函数

- `ADDDATE()`, `ADDTIME()` - 增加一个日期/时间
- `CURDATE()`, `CURTIME()` - 返回当前日期/时间
- `DATE()`, `TIME()` - 返回日期时间的日期/时间部分
- `DATEDIFF()` - 计算两个日期之差
- `DATE_ADD()`, `DATE_SUB()` - 日期加减
- `DATE_FORMAT()` - 返回格式化的日期或时间串
- `DAY()`, `MONTH()`, `YEAR()` - 返回日期的天/月/年部分
- `DAYOFWEEK()` - 返回日期对应的星期几
- `HOUR()`, `MINUTE()`, `SECOND()` - 返回时间的时/分/秒部分
- `NOW()` - 返回当前日期和时间

#### 数值处理函数

- `ABS()` - 返回一个数的绝对值
- `COS()`, `SIN()`, `TAN()` - 三角函数
- `EXP()` - 返回一个数的指数值
- `MOD()` - 返回除操作的余数
- `PI()` - 返回圆周率
- `RAND()` - 返回一个随机数
- `SQRT()` - 返回一个数的平方根

### 3. 汇总数据

```sql
-- 聚集函数
SELECT AVG(column) AS avg_value FROM table_name;  -- 平均值
SELECT COUNT(*) AS num_items FROM table_name;     -- 行数
SELECT MAX(column) AS max_value FROM table_name;  -- 最大值
SELECT MIN(column) AS min_value FROM table_name;  -- 最小值
SELECT SUM(column) AS sum_value FROM table_name;  -- 求和

-- 聚集不同值
SELECT AVG(DISTINCT column) FROM table_name;

-- 组合聚集函数
SELECT COUNT(*) AS num_items,
       MIN(column) AS min_price,
       MAX(column) AS max_price,
       AVG(column) AS avg_price
FROM table_name;
```

### 4. 分组数据

```sql
-- 创建分组
SELECT column1, COUNT(*) AS count
FROM table_name
GROUP BY column1;

-- 过滤分组
SELECT column1, COUNT(*) AS count
FROM table_name
GROUP BY column1
HAVING COUNT(*) >= 2;

-- 分组和排序
SELECT column1, COUNT(*) AS count
FROM table_name
GROUP BY column1
ORDER BY count DESC;

-- SELECT子句顺序
SELECT -> FROM -> WHERE -> GROUP BY -> HAVING -> ORDER BY -> LIMIT
```

### 5. 子查询

```sql
-- 作为条件
SELECT column1
FROM table1
WHERE column2 IN (SELECT column2 FROM table2 WHERE condition);

-- 作为计算字段
SELECT column1,
       (SELECT COUNT(*) FROM table2 WHERE table2.id = table1.id) AS count
FROM table1;
```

### 6. 联结表

```sql
-- 等值联结(内联结)
SELECT table1.column1, table2.column2
FROM table1, table2
WHERE table1.id = table2.id;

-- 内部联结(INNER JOIN)
SELECT table1.column1, table2.column2
FROM table1 INNER JOIN table2
ON table1.id = table2.id;

-- 联结多个表
SELECT t1.c1, t2.c2, t3.c3
FROM t1 INNER JOIN t2 ON t1.id = t2.id
        INNER JOIN t3 ON t2.id = t3.id;

-- 表别名
SELECT t1.c1, t2.c2
FROM table1 AS t1, table2 AS t2
WHERE t1.id = t2.id;
```

### 7. 高级联结

```sql
-- 自联结
SELECT t1.column1, t2.column2
FROM table AS t1, table AS t2
WHERE t1.id = t2.related_id
AND t2.column3 = 'value';

-- 自然联结
SELECT c.*, o.order_num
FROM customers AS c, orders AS o
WHERE c.cust_id = o.cust_id;

-- 外部联结
SELECT table1.column1, table2.column2
FROM table1 LEFT OUTER JOIN table2
ON table1.id = table2.id;
```

### 8. 组合查询

```sql
-- 使用UNION
SELECT column1 FROM table1 WHERE condition
UNION
SELECT column1 FROM table2 WHERE condition;

-- 包含重复行
SELECT column1 FROM table1 WHERE condition
UNION ALL
SELECT column1 FROM table2 WHERE condition;

-- 对组合查询结果排序
SELECT column1 FROM table1 WHERE condition
UNION
SELECT column1 FROM table2 WHERE condition
ORDER BY column1;
```

### 9. 全文本搜索

```sql
-- 启用全文本搜索(创建表时)
CREATE TABLE table_name (
  id INT NOT NULL AUTO_INCREMENT,
  content TEXT,
  FULLTEXT(content)
) ENGINE=MyISAM;

-- 进行全文本搜索
SELECT column1
FROM table_name
WHERE MATCH(content) AGAINST('search_text');

-- 使用查询扩展
SELECT column1
FROM table_name
WHERE MATCH(content) AGAINST('search_text' WITH QUERY EXPANSION);

-- 布尔文本搜索
SELECT column1
FROM table_name
WHERE MATCH(content) AGAINST('+search -text' IN BOOLEAN MODE);
```

## 六、视图、存储过程和触发器

### 1. 视图

```sql
-- 创建视图
CREATE VIEW view_name AS
SELECT column1, column2
FROM table_name
WHERE condition;

-- 查看视图
SHOW CREATE VIEW view_name;

-- 使用视图
SELECT * FROM view_name;

-- 删除视图
DROP VIEW view_name;

-- 更新视图(某些视图可更新)
CREATE OR REPLACE VIEW view_name AS
SELECT column1, column2
FROM table_name
WHERE condition;
```

### 2. 存储过程

```sql
-- 创建存储过程
DELIMITER //
CREATE PROCEDURE procedure_name()
BEGIN
  SELECT * FROM table_name;
END //
DELIMITER ;

-- 执行存储过程
CALL procedure_name();

-- 使用参数
DELIMITER //
CREATE PROCEDURE procedure_name(IN param1 INT)
BEGIN
  SELECT * FROM table_name WHERE id = param1;
END //
DELIMITER ;

-- 删除存储过程
DROP PROCEDURE IF EXISTS procedure_name;
```

### 3. 游标

```sql
DELIMITER //
CREATE PROCEDURE procedure_name()
BEGIN
  DECLARE done INT DEFAULT 0;
  DECLARE var1 INT;
  
  -- 声明游标
  DECLARE cursor_name CURSOR FOR
  SELECT column1 FROM table_name;
  
  -- 声明继续处理
  DECLARE CONTINUE HANDLER FOR SQLSTATE '02000' SET done = 1;
  
  -- 打开游标
  OPEN cursor_name;
  
  -- 循环处理
  REPEAT
    FETCH cursor_name INTO var1;
    IF NOT done THEN
      -- 处理数据
    END IF;
  UNTIL done END REPEAT;
  
  -- 关闭游标
  CLOSE cursor_name;
END //
DELIMITER ;
```

### 4. 触发器

```sql
-- 创建触发器
CREATE TRIGGER trigger_name BEFORE INSERT ON table_name
FOR EACH ROW SET NEW.date = NOW();

-- DELETE触发器
CREATE TRIGGER trigger_name AFTER DELETE ON table_name
FOR EACH ROW
BEGIN
  INSERT INTO audit_table VALUES(OLD.id, NOW());
END;

-- UPDATE触发器
CREATE TRIGGER trigger_name BEFORE UPDATE ON table_name
FOR EACH ROW SET NEW.update_time = NOW();

-- 删除触发器
DROP TRIGGER trigger_name;
```

## 七、事务与安全

### 1. 事务处理

```sql
-- 开始事务
START TRANSACTION;

-- 回滚
ROLLBACK;

-- 提交
COMMIT;

-- 保留点
SAVEPOINT savepoint_name;
ROLLBACK TO savepoint_name;
```

### 2. 安全管理

```sql
-- 创建用户账号
CREATE USER 'username'@'host' IDENTIFIED BY 'password';

-- 重命名用户
RENAME USER 'old_name'@'host' TO 'new_name'@'host';

-- 删除用户账号
DROP USER 'username'@'host';

-- 设置访问权限
GRANT SELECT, INSERT ON database.* TO 'username'@'host';
GRANT ALL PRIVILEGES ON *.* TO 'username'@'host' WITH GRANT OPTION;

-- 撤销权限
REVOKE SELECT ON database.* FROM 'username'@'host';

-- 刷新权限
FLUSH PRIVILEGES;

-- 更改口令
SET PASSWORD FOR 'username'@'host' = PASSWORD('new_password');
```

## 八、性能优化与维护

### 1. 索引

```sql
-- 创建索引
CREATE INDEX index_name ON table_name(column_name);

-- 创建唯一索引
CREATE UNIQUE INDEX index_name ON table_name(column_name);

-- 删除索引
DROP INDEX index_name ON table_name;
```

### 2. 存储引擎

- **InnoDB**：支持事务、外键，行级锁
- **MyISAM**：不支持事务，表级锁，全文索引
- **MEMORY**：内存存储，临时表
- **ARCHIVE**：适合归档数据，高压缩比

### 3. 数据库维护

```sql
-- 备份数据
mysqldump -u username -p database_name > backup.sql

-- 恢复数据
mysql -u username -p database_name < backup.sql

-- 检查表
CHECK TABLE table_name;

-- 修复表
REPAIR TABLE table_name;

-- 优化表
OPTIMIZE TABLE table_name;

-- 分析表
ANALYZE TABLE table_name;
```

### 4. 日志文件

- **错误日志**：记录MySQL启动、运行或停止时出现的问题
- **查询日志**：记录所有查询
- **慢查询日志**：记录执行时间超过指定值的查询
- **二进制日志**：记录所有更改数据的查询，用于复制和恢复

### 5. 全球化和本地化

```sql
-- 查看可用字符集
SHOW CHARACTER SET;

-- 查看可用校对
SHOW COLLATION;

-- 指定字符集和校对
CREATE DATABASE database_name
CHARACTER SET utf8
COLLATE utf8_general_ci;

CREATE TABLE table_name (
  column VARCHAR(10)
) CHARACTER SET utf8 COLLATE utf8_general_ci;
```

## 九、性能优化技巧

1. **索引优化**
   - 为经常用于WHERE、JOIN和ORDER BY的列创建索引
   - 避免过度索引，因为索引会降低INSERT、UPDATE和DELETE的性能
   - 考虑使用复合索引，但注意最左前缀原则
2. **查询优化**
   - 避免在WHERE子句中对字段进行函数操作
   - 使用LIMIT限制返回的行数
   - 尽量避免SELECT *，只选择需要的列
   - 使用JOIN代替子查询（通常更高效）
   - 考虑使用EXPLAIN分析查询计划
3. **表结构优化**
   - 选择合适的数据类型
   - 使用NOT NULL约束，除非需要存储NULL
   - 考虑分区表，以提高大型表的查询性能
   - 定期执行ANALYZE TABLE和OPTIMIZE TABLE
4. **服务器配置优化**
   - 调整缓冲池大小（innodb_buffer_pool_size）
   - 适当配置查询缓存
   - 调整连接数限制
   - 优化临时表使用

## 十、附录

### 1. 常用命令速查

```bash
# 连接MySQL
mysql -u username -p

# 导出数据库
mysqldump -u username -p database_name > file.sql

# 导入数据库
mysql -u username -p database_name < file.sql

# 显示状态
SHOW STATUS;

# 显示变量
SHOW VARIABLES;

# 显示进程
SHOW PROCESSLIST;
```

### 2. MySQL保留字(部分)

ADD, ALL, ALTER, ANALYZE, AND, AS, ASC, ASENSITIVE, BEFORE, BETWEEN, BIGINT, BINARY, BLOB, BOTH, BY, CALL, CASCADE, CASE, CHANGE, CHAR, CHARACTER, CHECK, COLLATE, COLUMN, CONDITION, CONNECTION, CONSTRAINT, CONTINUE, CONVERT, CREATE, CROSS, CURRENT_DATE, CURRENT_TIME, CURRENT_TIMESTAMP, CURRENT_USER, CURSOR, DATABASE, DATABASES, DAY_HOUR, DAY_MICROSECOND, DAY_MINUTE, DAY_SECOND, DEC, DECIMAL, DECLARE, DEFAULT, DELAYED, DELETE, DESC, DESCRIBE, DETERMINISTIC, DISTINCT, DISTINCTROW, DIV, DOUBLE, DROP, DUAL, EACH, ELSE, ELSEIF, ENCLOSED, ESCAPED, EXCEPT, EXISTS, EXIT, EXPLAIN, FALSE, FETCH, FLOAT, FLOAT4, FLOAT8, FOR, FORCE, FOREIGN, FROM, FULLTEXT, FUNCTION, GET, GLOBAL, GRANT, GROUP, HAVING, HIGH_PRIORITY, HOUR_MICROSECOND, HOUR_MINUTE, HOUR_SECOND, IF, IGNORE, IN, INDEX, INFILE, INNER, INOUT, INSENSITIVE, INSERT, INT, INT1, INT2, INT3, INT4, INT8, INTEGER, INTERVAL, INTO, IS, ITERATE, JOIN, KEY, KEYS, KILL, LEADING, LEAVE, LEFT, LIKE, LIMIT, LINEAR, LINES, LOAD, LOCALTIME, LOCALTIMESTAMP, LOCK, LONG, LONGBLOB, LONGTEXT, LOOP, LOW_PRIORITY, MATCH, MAXVALUE, MEDIUMBLOB, MEDIUMINT, MEDIUMTEXT, MIDDLEINT, MINUTE_MICROSECOND, MINUTE_SECOND, MOD, MODIFIES, NATURAL, NOT, NO_WRITE_TO_BINLOG, NULL, NUMERIC, ON, OPTIMIZE, OPTION, OPTIONALLY, OR, ORDER, OUT, OUTER, OUTFILE, PARTITION, PRECISION, PRIMARY, PROCEDURE, PURGE, RANGE, READ, READS, READ_ONLY, READ_WRITE, REAL, REFERENCES, REGEXP, RELEASE, RENAME, REPEAT, REPLACE, REQUIRE, RESIGNAL, RESTRICT, RETURN, REVOKE, RIGHT, RLIKE, SCHEMA, SCHEMAS, SECOND_MICROSECOND, SELECT, SENSITIVE, SEPARATOR, SET, SHOW, SIGNAL, SMALLINT, SPATIAL, SPECIFIC, SQL, SQLEXCEPTION, SQLSTATE, SQLWARNING, SQL_BIG_RESULT, SQL_CALC_FOUND_ROWS, SQL_SMALL_RESULT, SSL, STARTING, STRAIGHT_JOIN, SYSTEM, TABLE, TERMINATED, THEN, TINYBLOB, TINYINT, TINYTEXT, TO, TRAILING, TRIGGER, TRUE, UNDO, UNION, UNIQUE, UNLOCK, UNSIGNED, UPDATE, USAGE, USE, USING, UTC_DATE, UTC_TIME, UTC_TIMESTAMP, VALUES, VARBINARY, VARCHAR, VARCHARACTER, VARYING, WHEN, WHERE, WHILE, WITH, WRITE, X509, XOR, YEAR_MONTH, ZEROFILL
