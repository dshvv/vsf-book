const sidebar = require('../../utils/sidebar');
const { path } = require('@vuepress/utils')

module.exports = {
  port: '80',
  lang: 'zh-CN',
  title: 'VSchemaForm',
  description: 'VSchemaForm示例',
  base: '/vsf-book/dist/',
  dest: './dist',
  clientAppEnhanceFiles: path.resolve(__dirname, './clientAppEnhance.js'), // 项目增强
  themeConfig: {
    sidebar,
    navbar: [
      {
        text: '博客',
        link: 'https://www.cnblogs.com/dshvv',
      },
      {
        text: '语雀',
        link: 'https://www.yuque.com/dingshaohua',
      },
      {
        text: '关于我',
        link: 'https://www.baidu.com/s?wd=甲乙丙丁少',
      }
    ]
  },
  plugins: [
    [
      '@vuepress/register-components',
      {
        componentsDir: path.resolve(__dirname, './components'),
      },
    ]
  ],
  markdown: {
    importCode: {
      handleImportPath: (str) =>str.replace(/^@cmp/, path.resolve(__dirname, './components'))
    },
  },
  bundlerConfig: {
    less:{
      javascriptEnabled: true,
    }
  },
}