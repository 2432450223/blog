import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "🦈",
  description: "A VitePress Site",
  lastUpdated: true, // 使用默认的显示方式
  // lastUpdated: '最后更新于 {YYYY}-{MM}-{DD}', // 自定义显示方式
  themeConfig: {
    lastUpdated: {
      text:'Updated at',
      formatOptions:{
        dataStyle:'short',
        timeStyle:'short'
      }
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: 'npm', link: '/npm' },
      { text: 'node.js', link: '/node.js' },
      { text: 'Members', link: '/members' },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: 'npm',
        items: [
          { text: 'npm常用指令', link: '/npm' },
          // { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: 'node.js',
        items: [
          { text: '原生node.js', link: '/node.js' },
          // { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: '团队成员',
        items: [
          { text: '团队成员', link: '/members' },
          // { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    footer:{
      message:'仅供学习交流，切勿进行商务用途。',
      copyright:'Copyright © 2023-present Yu'
    }
  }
})
