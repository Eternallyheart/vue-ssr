import Vue from 'vue'
import App from './App.vue'
// 6.引入 router 组件
import router from './router'
import './registerServiceWorker'
import './plugins/vant.js'

import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:5000/'
Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
  // 7.注册路由
  router,
  render: h => h(App)
}).$mount('#app')
