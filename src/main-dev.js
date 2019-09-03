import Vue from 'vue'
import App from './App.vue'
// 6.引入 router 组件
import router from './router'
import './registerServiceWorker'
import './plugins/vant.js'
import store from './store'

import axios from 'axios'
import 'lib-flexible'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import moment from 'moment'

// axios 请求拦截
axios.interceptors.request.use(function (config) {
  NProgress.start()
  return config
})

// axios 响应拦截
axios.interceptors.response.use(function (response) {
  NProgress.done()
  return response
})

axios.defaults.baseURL = 'http://10.41.151.49:5000/'
Vue.prototype.$http = axios
Vue.config.productionTip = false

Vue.filter('datefmt', (str, arg = 'YYYY-MM-DD HH:MM:SS') => {
  return moment(str).format(arg)
})

new Vue({
  // 7.注册路由
  router,
  store,
  render: h => h(App)
}).$mount('#app')
