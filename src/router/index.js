import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const Home = () => import('@v/home/Home')
const Category = () => import('@v/category/Category')
const Cart = () => import('@v/cart/Cart')
const Profile = () => import('@v/profile/Profile')
const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'home',
    meta:{
      title:'首页'
    },
    component: Home
  },
  {
    path: '/category',
    name: 'category',
    meta:{
      title:'分类'
    },
    component: Category
  },
  {
    path: '/cart',
    name: 'cart',
    meta:{
      title:'购物车'
    },
    component: Cart
  },
  {
    path: '/profile',
    name: 'profile',
    meta:{
      title:'我的'
    },
    component: Profile
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to,from,next)=>{
  //to 相当于下一个活跃的路由对象
  document.title = to.matched[0].meta.title
  next() // 路由跳转函数
})
export default router
