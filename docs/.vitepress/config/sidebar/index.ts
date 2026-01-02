function sidebarDatabase() {
  return [
    {
      text: 'MySql',
      items: [
        { text: 'mysql基础', link: '/database/mysql' }
        // { text: 'navicat安装', link: '/database/mysql/navicat' }
      ]
    }
  ]
}

function sidebarGo() {
  return [
    {
      text: 'Go',
      items: [
        { text: 'Go基础', link: '/go/' }
      ]
    }
  ]
}

function sidebarPython() {
  return [
    {
      text: 'Python',
      items: [
        { text: 'Python笔记', link: '/python/' }
      ]
    }
  ]
}

function sidebarBlockchain() {
  return [
    {
      text: '区块链',
      items: [
        { text: 'Solidity笔记', link: '/blockchain/Solidity' }
      ]
    }
  ]
}

function sidebarJava() {
  return [
    {
      text: 'Java',
      items: [
        { text: 'Java笔记', link: '/java/' },
        { text: '科学编程学习法', link: '/java/科学编程学习法' },
        { text: '软件开发环境安装教程', link: '/java/软件开发环境安装教程' }
        
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
        { text: 'Linux', link: '/network/Linux' },
        { text: 'IPv6', link: '/network/IPV6' },
        { text: '计算机网络', link: '/network/计算机网络' },
        { text: 'Nginx', link: '/network/Nginx' },
        { text: 'Kubernetes', link: '/network/Kubernetes' },
        { text: '数据通信技术', link: '/network/数据通信技术' }
      ]
    }
  ]
}

export default {
  '/database': sidebarDatabase(),
  '/java': sidebarJava(),
  '/python': sidebarPython(),
  '/spring': sidebarSpring(),
  '/network': sidebarNetwork(),
  '/blockchain': sidebarBlockchain(),
  '/go': sidebarGo()
}
