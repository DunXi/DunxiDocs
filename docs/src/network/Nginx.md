# NGINX

## nginx简介

### 1.什么是nginx

Nginx（“engine x”）是一个高性能的HTTP和反向代理服务器，特点是占用内存少，并发能力强，事实上nginx的并发能力确实在同类型的网页服务器中表现较好

Nginx专为性能优化而开发，性能是其最重要的考量，实现上非常注重效率，能经受高负载的考验，有报告表名能支持高达50000个并发连接数。

### 2.反向代理

#### 	1）正向代理

​		在客户端（浏览器）配置代理服务器，通过代理服务器进行互联网访问

![image-20221102144216111](https://bed-1309358403.cos.ap-shanghai.myqcloud.com/img/image-20221102144216111.png)

#### 	2）反向代理

​	反向代理，其实客户端对代理是无感知的，因为客户端不需要任何配置就可以访问，我们只需要将请求发送到反向代理服务器，由反向代理服务器去选择目标服务器获取数据后，在返回给客户端，此时反向代理服务器和目标服务器对外就是一个服务器，暴露的代理服务器地址，隐藏真实服务器地址。

![image-20221102151417473](https://bed-1309358403.cos.ap-shanghai.myqcloud.com/img/image-20221102151417473.png)

### 3.负载均衡

​	单个服务器解决不了，我们增加服务器的数量，然后将请求分发到各个服务器上，将原先请求集中到单个服务器上的情况改为请求分发到多个服务器上，将负载分发到不同服务器，也就是我们所说的负载均衡。

![image-20221102154927525](https://bed-1309358403.cos.ap-shanghai.myqcloud.com/img/image-20221102154927525.png)



### 4.动静分离

​	为了加快网站的解析速度，可以把动态页面和静态页面由不同的服务器来解析，加快解析速度。降低原来单个服务器的压力。

![image-20221102155427925](https://bed-1309358403.cos.ap-shanghai.myqcloud.com/img/image-20221102155427925.png)



## nginx安装

nginx官网下载安装包

nginx.org

### 依赖环境

![image-20221104141846441](https://bed-1309358403.cos.ap-shanghai.myqcloud.com/img/image-20221104141846441.png)

1. 安装pcre

   wget http://downloads.sourceforge.net/project/pcre/pcre/8.37/pcre-8.37.tar.gz

   tar.gz格式
   方式一：利用前面已经打包好的tar文件，直接用压缩命令。

   压缩：gzip [原文件名].tar
   解压：gunzip [原文件名].tar.gz

   方式二：一次性打包并压缩、解压并解包

   打包并压缩： tar -zcvf [目标文件名].tar.gz [原文件名/目录名]
   解压并解包： tar -zxvf [原文件名].tar.gz
   注：z代表用gzip算法来压缩/解压。

### **Nginx安装步骤**

#### **一、安装nginx依赖**

yum -y install openssl openssl-devel make zlib zlib-devel gcc gcc-c++ libtool   pcre pcre-devel

#### **二、下载nginx安装包**

cd /opt

wget http://nginx.org/download/nginx-1.13.7.tar.gz

 

#### 三、解压nginx安装包

cd /opt

mkdir nginx

cd nginx

tar  -xvf  nginx-1.13.7.tar.gz

 

#### **四、安装nginx**

\#进入nginx目录

cd  /opt/nginx-1.13.7 

\#编译

./configure --prefix=/opt/nginx-1.13.7

 

\#执行make命令(要是执行不成功请检查最开始安装的四个依赖有没有安装成功)

make

\#执行make install命令

make install

 

创建目录logs

cd  /opt/nginx-1.13.7

mkdir  logs  

新建access.log，error.log文件  

touch access.log  

touch error.log

 

#### **五、启动nginx**

\#进入nginx 启动目录

cd /opt/nginx-1.13.7/sbin

\# 默认配置文件启动

./nginx

 

\# 指定配置文件启动

./nginx -c  /opt/nginx-1.13.7/conf/nginx.conf

 

安装成功：浏览器输入ip.index.html (如http://192.168.14.110/index.html) 显示欢迎Welcome to nginx!



![image-20221111133145975](https://bed-1309358403.cos.ap-shanghai.myqcloud.com/img/image-20221111133145975.png)

![image-20221111133238614](https://bed-1309358403.cos.ap-shanghai.myqcloud.com/img/image-20221111133238614.png)



## nginx常用命令

### 1. 使用命令前提条件，必须进入nginx目录

/usr/local/nginx/sbin

2.查看nginx的版本号

​	./nginx -v

![image-20221111133720220](https://bed-1309358403.cos.ap-shanghai.myqcloud.com/img/image-20221111133720220.png)

3.启动nginx

​	./nginx

4.关闭nginx

 ./nginx -s stop

5.重新加载nginx

​	./nginx -s reload



## nginx配置文件

### 1.nginx配置文件位置

#### ![image-20221111134431540](https://bed-1309358403.cos.ap-shanghai.myqcloud.com/img/image-20221111134431540.png)

配置文件：

/usr/local/nginx/conf/nginx.conf



![image-20221114144313875](https://bed-1309358403.cos.ap-shanghai.myqcloud.com/img/image-20221114144313875.png)

2.nginx配置文件组成

1. nginx配置文件有三部分组成

第一部分 全局块

​	从配置文件开始到events块之间的内容，主要会设置一些影响nginx服务器整体运行的配置指令，主要包括配置运行Nginx服务器的用户（组）、允许生成的worker process数 ，进程 PID 存放路径、日志存放路径和类型以及配置文件的引入等。

​	比如上面第一行配置的：

```txt
worker_processes 1;
```

​	这是Nginx服务器并发处理服务的关键配置，worker_processes 值越大，可以支持的并发处理量也越多，但是会受到硬件、软件等设备的制约。



第二部分 events 块

​	events块 设计的指令主要影响 nginx服务器与用户的网络连接

​	比如：worker_connections 1024; 支持的最大连接数量



第三部分 http 块

Nginx服务器配置中最频繁的部分。

http块也可以包括http全局块 server 块





## nginx配置实例

### 1.反向代理实例1

 1. 实现效果

     1. 打开浏览器，在浏览器中输入www.123.com	，跳转到linux系统中的Tomcat主页面中

     2. 准备工作

        1）在linux系统中安装Tomcat，使用默认端口8080

        ![image-20221111141509638](https://bed-1309358403.cos.ap-shanghai.myqcloud.com/img/image-20221111141509638.png)

        第一步 在Windows系统中的host文件中配置域名对应IP的对应关系配置

        ![image-20221111141731745](https://bed-1309358403.cos.ap-shanghai.myqcloud.com/img/image-20221111141731745.png)

        第二部 在nginx.conf配置文件中配置反向代理

        ![image-20221111144501751](https://bed-1309358403.cos.ap-shanghai.myqcloud.com/img/image-20221111144501751.png)

## 反向代理实例2

    	使用nginx反向代理，根据访问的路径跳转到不同端口的服务中，
    
    ​	nginx监听端口为9001
    
    ​	访问 http://127.0.0.1:9001/edu/直接跳转到 127.0.0.1:8080
    ​	访问 http://127.0.0.1:9001/vod/直接跳转到 127.0.0.1:8081


​    

​    

  

​    


​    
# Tomcat

​    ![image-20221112234604832](https://bed-1309358403.cos.ap-shanghai.myqcloud.com/img/image-20221112234604832.png)
​    最原始的启动方法，将jar程序放到WebApps文件夹下  再去启动Tomcat就可以启动服务了



## ubuntu下Nginx

主程序

**/etc/init.d/nginx restart** 

```shell
/etc/init.d/nginx restart
```

/usr/sbin

````nginx

http{
 
    server{
        listen 443 ssl;
        #对应你的域名
        server_name test.com;
        ssl_certificate /usr/local/nginx/cert/ssl.crt;
        ssl_certificate_key /usr/local/nginx/cert/ssl.key;
        ssl_session_timeout 5m;
        ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
        ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;
        ssl_prefer_server_ciphers on;
        #如果是静态文件,直接指向目录,如果是动态应用,用proxy_pass转发一下
        location / {
                root /usr/local/service/ROOT;
                index index.html;
        }
    }
    #监听80端口,并重定向到443
    server{
        listen 80;
        server_name test.com;
        rewrite ^/(.*)$ https://test.com:443/$1 permanent;
    }
}
````

![image-20230105220412632](https://bed-1309358403.cos.ap-shanghai.myqcloud.com/img/2023/01/05/20230105220412.png)

卸载 安装

````nginx
events {
	worker_connections 768;
	# multi_accept on;
}

http {

	##
	# Basic Settings
	##
	

	sendfile on;
	tcp_nopush on;
	tcp_nodelay on;
	keepalive_timeout 65;
	types_hash_max_size 2048;
	# server_tokens off;

	# server_names_hash_bucket_size 64;
	# server_name_in_redirect off;

	include /etc/nginx/mime.types;
	default_type application/octet-stream;

	##
	# SSL Settings
	##

	ssl_protocols TLSv1 TLSv1.1 TLSv1.2 TLSv1.3; # Dropping SSLv3, ref: POODLE
	ssl_prefer_server_ciphers on;

	##
	# Logging Settings
	##

	access_log /var/log/nginx/access.log;
	error_log /var/log/nginx/error.log;


	gzip on;


	# server {
	# 	listen 80;
	# 	server_name azhiyuan.com.cn;
	# 	location / {
	# 		root /usr/share/nginx/app/;
	# 		index index.html index.htm;
	# 	}
	# }
	server{
        listen 80;
        server_name azhiyuan.com.cn;
				rewrite ^(.*)$ https://azhiyuan.com.cn permanent;
				
  }
	server{
        listen 80;
        server_name www.azhiyuan.com.cn;
				rewrite ^(.*)$ https://azhiyuan.com.cn permanent;
				
  }
server {
		listen 80;
		server_name opt.azhiyuan.com.cn;
		location / {
			root /usr/share/nginx/consultant/;
			index index.html index.htm;
		}
	}
	server {
		listen 80;
		server_name admin.azhiyuan.com.cn;
		location / {
			root /usr/share/nginx/admin/;
			index index.html index.htm;
		}
	}

	server{
        listen 443 ssl;
        #对应你的域名
        server_name azhiyuan.com.cn;
        ssl_certificate /usr/local/nginx/cert/azhiyuan.com.cn_bundle.pem;
        ssl_certificate_key /usr/local/nginx/cert/azhiyuan.com.cn.key;
        ssl_session_timeout 5m;
        ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
        ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;
        ssl_prefer_server_ciphers on;
        #如果是静态文件,直接指向目录,如果是动态应用,用proxy_pass转发一下
        location / {
                root /usr/share/nginx/app/;
                index index.html;
        }
  }
	server{
        listen 443 ssl;
        #对应你的域名
        server_name www.azhiyuan.com.cn;
        ssl_certificate /usr/local/nginx/cert/azhiyuan.com.cn_bundle.pem;
        ssl_certificate_key /usr/local/nginx/cert/azhiyuan.com.cn.key;
        ssl_session_timeout 5m;
        ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
        ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;
        ssl_prefer_server_ciphers on;
        #如果是静态文件,直接指向目录,如果是动态应用,用proxy_pass转发一下
        location / {
                root /usr/share/nginx/app/;
                index index.html;
        }
  }

	

}

````



#### ubuntu中nginx的静态页面路径

```shell
/usr/share/ngixn
```



![image-20230107114214618](https://bed-1309358403.cos.ap-shanghai.myqcloud.com/img/2023/01/07/20230107114214.png)