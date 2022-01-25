import { defineConfig } from "vuepress/config";

export default defineConfig({
  title: 'cxb',
  description: 'notes',
  base: '/notes/',
  dest: 'dist',
  themeConfig: {
    lastUpdated: '上次更新',
    editLinkText: '在 GitHub 上编辑此页',
    // nav: [
    //   { text: 'Home', link: '/' },
    //   { text: 'Guide', link: '/guide/' },
    //   { text: 'External', link: 'https://google.com' },
    // ],
    sidebar: [
      {
        title: '面试题',
        path: '/面试题/',
        collapsable: false,
        children: [
          '/面试题/HTML/',
          '/面试题/CSS/',
          '/面试题/JS/',
          '/面试题/TS/',
          '/面试题/React/',
          '/面试题/Vue/',
          '/面试题/Webpack/',
          '/面试题/网络/',
          '/面试题/手写系列/',
          '/面试题/通用/',
        ]
      },
    ],
  },
});