import Vue from 'vue'
import VueRouter from 'vue-router'

// 解决路由重复点击报错
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push= function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

Vue.use(VueRouter)

// 懒加载的方式导入路由
const Home = ()=>import("@/views/home/Home")
const Category = ()=>import("@/views/category/Category")
const Cart = ()=>import("@/views/cart/Cart")
const Profile = ()=>import("@/views/profile/Profile")
const Details = ()=>import("@/views/details/Details")


// 配置路由
const routes = [
  {
    // 配置默认路由
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },

  {
    path: '/category',
    component: Category
  },

  {
    path: '/cart',
    component: Cart
  },

  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/details:iid',
    component: Details,
    meta: {
      showNav: true
    }
  }

]

const router = new VueRouter({
  routes,
  // 指定以history模式打开路由
  mode: 'history'
})

export default router
