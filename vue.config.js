// vue.config.js
module.exports = {
  // 选项...
  chainWebpack: config => {
    // 发布模式
    config.when(process.env.NODE_ENV === 'production', config => {
      // 配置发布的入口文件
      config
        .entry('app')
        .clear()
        .add('./src/main-prod.js')
      // 配置外部的CDN资源
      config
        .set('externals', {
          vue: 'Vue',
          'vue-router': 'VueRouter',
          axios: 'axios',
          nprogress: 'NProgress',
          moment: 'moment'
        })
      // 配置首页定制  因为引入两个路由引起的问题
      config.plugin('html').tap(args => {
        args[0].isProd = true
        return args
      })
    })
    // 开发模式
    config.when(process.env.NODE_ENV === 'development', config => {
      // 配置开发的入口文件
      config
        .entry('app')
        .clear()
        .add('./src/main-dev.js')
      // 配置首页定制
      config.plugin('html').tap(args => {
        args[0].isProd = false
        return args
      })
    })
  },
  css: {
    loaderOptions: {
      css: {},
      postcss: {
        plugins: [
          require('postcss-px2rem')({
            remUnit: 37.5
          })
        ]
      }
    }
  }
}
