import Vue from 'vue'
// 1.引入 vue-router
import Router from 'vue-router'
// 3.引入 模块 home
// import Home from '@/views/home'
const Home = () => import(/* webpackChunkName: "home" */ '@/views/home')
const Friends = () => import(/* webpackChunkName: "home" */ '@/views/friends')
const Cart = () => import(/* webpackChunkName: "home" */ '@/views/cart')
const Set = () => import(/* webpackChunkName: "home" */ '@/views/set')
// import Friends from '@/views/friends'
// import Cart from '@/views/cart'
// import Set from '@/views/set'

// import News from '@/views/home/news'
// import NewOne from '@/views/home/news/new'
const News = () => import(/* webpackChunkName: "news" */ '@/views/home/news')
const NewOne = () => import(/* webpackChunkName: "news" */ '@/views/home/news/new')

// import Photo from '@/views/home/photo'
// import Photoinfo from '@/views/home/photo/photoinfo'
const Photo = () => import(/* webpackChunkName: "photo" */ '@/views/home/photo')
const Photoinfo = () => import(/* webpackChunkName: "photo" */ '@/views/home/photo/photoinfo')

// import Goods from '@/views/home/goods'
// import Goodinfo from '@/views/home/goods/goodinfo'
const Goods = () => import(/* webpackChunkName: "goods" */ '@/views/home/goods')
const Goodinfo = () => import(/* webpackChunkName: "goods" */ '@/views/home/goods/goodinfo')

// 2,注册 router
Vue.use(Router)
// 4.实例化 路由对象
export default new Router({
  // 5.创建路由规则
  routes: [{
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
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
  }, {
    path: '/home/newslist',
    component: News
  },
  {
    path: '/home/photolist',
    component: Photo
  },
  {
    path: '/home/goodslist',
    component: Goods
  },
  {
    path: '/home/newslist',
    component: News
  },
  {
    path: '/home/newslist',
    component: News
  },
  {
    path: '/home/newslist',
    component: News
  },
  {
    path: '/home/newone/:newid',
    name: 'newone',
    component: NewOne
  },
  {
    path: '/home/photoinfo/:imgid',
    name: 'photoinfo',
    component: Photoinfo
  },
  {
    path: '/home/goodinfo/:id',
    name: 'goodinfo',
    component: Goodinfo
  }
  ]
})
