function sidebarDatabase() {
  return [
    {
      text: 'MySql',
      items: [
        { text: 'mysql基础', link: '/database/mysql/mysql-base' }
        // { text: 'navicat安装', link: '/database/mysql/navicat' }
      ]
    }
  ]
}

function sidebarJava() {
  return [
    {
      text: 'Java',
      items: [
        { text: 'java笔记', link: '/java/Java笔记' },
        { text: '科学编程学习法', link: '/java/科学编程学习法' }
      ]
    },
    // {
    //   text: 'Gradle',
    //   items: [{ text: 'Gradle', link: '/java/Gradle' }]
    // },
    {
      text: 'Spring全家桶',
      items: [
        { text: 'Spring', link: '/java/spring/Spring' },
        { text: 'SpringMVC', link: '/java/spring/SpringMVC' },
        { text: 'Mybatis', link: '/java/spring/Mybatis' },
        { text: 'SSM整合', link: '/java/spring/SSM整合' },
        { text: 'MyBatis Plus', link: '/java/spring/MybatisPlus' },
        { text: 'SpringBoot', link: '/java/spring/SpringBoot' },
        { text: 'Spring Security+JWT', link: '/java/spring/SpringSecurityJWT' }
      ]
    },
    {
      text: '项目实战',
      items: [
        {text: '前后端分离博客系统', link: '/java/spring/前后端分离博客系统'}
      ]
    }
  ]
}

function sidebarSpring() {
  return [
    {
      text: 'springcloud',
      items: [
        { text: 'SpringCloud', link: '/spring/springcloud/SpringCloud' },
        { text: 'nacos', link: '/spring/springcloud/nacos' },
        { text: 'sentinel', link: '/spring/springcloud/sentinel' },
        { text: 'gateway', link: '/spring/springcloud/springcloudgateway' }
      ]
    },
    {
      text: 'springboot',
      items: [{ text: 'springboot', link: '/spring/springboot/SpringBoot' },
        { text: 'rabbitMQ', link: '/spring/springboot/rabbitMQ' }]
    }
  ]
}
function sidebarFrontend() {
  return [
    {
      text: 'JavaScript',
      items: [{ text: 'JavaScript基础', link: '/frontend/js/' }]
    },
    {
      text: 'Vue',
      items: [
        { text: '快速开始', link: '/frontend/vue/quick-start' },
        { text: '代码规范', link: '/frontend/vue/code-standard' },
        { text: '通用API', link: '/frontend/vue/api/general' }
      ]
    }
  ]
}

function sidebarNetwork() {
  return [

    {
      text: 'NetWork',
      items: [
        { text: 'IPv6', link: '/network/IPV6' },
        { text: 'Linux', link: '/network/Linux' },
        { text: '计算机网络', link: '/network/计算机网络' },
        { text: '数据通信技术', link: '/network/数据通信技术' }
      ]
    }
  ]
}

function sidebarFrameWork() {
  return [

    {
      text: '架构师',
      items: [
        { text: '总体架构设计', link: '/framework/overall' }
      ]
    }
  ]
}
export default {
  '/database/': sidebarDatabase(),
  '/java/': sidebarJava(),
  '/frontend/': sidebarFrontend(),
  '/spring': sidebarSpring(),
  '/network': sidebarNetwork(),
  '/framework':sidebarFrameWork()
}
