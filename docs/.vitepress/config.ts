const sidebar = {
  '/': [
    { text: '快速开始', link: '/' },
    {
      text: '通用',
      children: [{ text: 'Button 按钮', link: '/components/button/' }],
    },
    { text: '导航' },
    { text: '反馈' },
    { text: '数据录入' },
    { text: '数据展示' },
    { text: '布局' },
  ],
};
const config = {
  themeConfig: {
    sidebar,

    repo: 'wushijiang13/vue3-vite-cli',
    repoLabel: 'GitHub',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: '欢迎帮助我们改善页面!',
    lastUpdated: '最近更新时间',
    nav: [
      { text: '入门', link: '/getting/why.html' },
      { text: '模板', link: '/template/template-vue3-ts-initial.html' },
      { text: '相关文档', link: '/documentation/vue.html' },
      { text: '码云', link: 'https://gitee.com/wushijiang13/vue3-vite-cli' },
    ],
  },
  title: 'Vue3-Vite-Cli 中文文档',
  //首页的描述
  description:
    '基于vite为基础搭建的风格脚手架,提供多种模板以便于更高效的解决业务需求！',
  lang: 'zh-CN',
  head: [['link', { rel: 'icon', type: 'image/svg+xml', href: 'logo.jpeg' }]],
  markdown: {
    config: (md) => {
      // 添加DemoBlock插槽
      const { demoBlockPlugin } = require('vitepress-theme-demoblock');
      md.use(demoBlockPlugin);
    },
  },
};
export default config;
