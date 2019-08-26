import Vue from 'vue'
// 1.引入 vue-router
import Router from 'vue-router'
// 3.引入 模块 home
import Home from '@/views/home'
import Friends from '@/views/friends'
import Cart from '@/views/cart'
import Set from '@/views/set'

import News from '@/components/news'
import Photo from '@/components/photo'
import Goods from '@/components/goods'
// 2,注册 router
Vue.use(Router)
// 4.实例化 路由对象
export default new Router({
  // 5.创建路由规则
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home,
      children: [
        { path: '/home/newslist', component: News },
        { path: '/home/photolist', component: Photo },
        { path: '/home/goodslist', component: Goods },
        { path: '/home/newslist', component: News },
        { path: '/home/newslist', component: News },
        { path: '/home/newslist', component: News }
      ]
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/friends',
      component: Friends
    },
    {
      path: '/set',
      component: Set
    }
  ]
})
