import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('../pages/home/Home')
  },
  {
    path: '/category',
    component: () => import('../pages/category/Category')
  },
  {
    path: '/cart',
    component: () => import('../pages/cart/Cart')
  },
  {
    path: '/profile',
    component: () => import('../pages/profile/Profile')
  },
]
const router = new VueRouter({
  routes,
  mode: "history"
})

export default router
