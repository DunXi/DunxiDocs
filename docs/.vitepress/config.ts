import { defineConfig } from 'vitepress'
import nav from './config/nav'
import sidebar from './config/sidebar'
export default defineConfig({
    base: '/DunxiDocs/',
    //页面图标
    head: [['link', { rel: 'icon', href: './favicon.ico' }]],
    //资源目录
    srcDir: './src',
    //语言
    lang: 'zh-CN',
    //标题
    title: 'DunxiDocs',
    //seo优化
    // description: 'Vite & Vue powered static site generator.',
    //最后更新时间
    lastUpdated: true,
    //生成干净的url
    cleanUrls: true,
    //代码行
    markdown: {
        lineNumbers: true,
        theme: 'github-dark'
    },
    themeConfig: {
        outline: [2,3],
        //导航
        nav,
        //侧边栏
        sidebar,
        //页脚
        footer: {
            message: 'Released under the Mit License."',
            copyright: 'Copyright © 2021-present Zang DunXi'
        }
    }


})

