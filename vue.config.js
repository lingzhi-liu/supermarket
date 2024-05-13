const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'api': '@/api',
        'common': '@/common',
        'components': '@/components',
        'pages': '@/pages',
      }
    }
  }
})
