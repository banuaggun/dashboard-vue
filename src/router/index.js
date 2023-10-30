import { createRouter, createWebHistory } from 'vue-router'
import Overview from '../views/Overview.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/overview'
    },
    {
      path: '/overview',
      name: 'overview',
      component: Overview
    },
    {
      path:'/profile',
      name:'profile',
      component: () => import('../views/Profile.vue')
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('../views/Products.vue')
    },
    {
      path:'/add-product',
      name:'AddProduct',
      component: () => import('../components/AddProduct.vue')
    },
    {
      path: '/statistics',
      name: 'statistics',
      component: () => import('../views/Statistics.vue')
    },
    {
      path: '/signout',
      name: 'signout',
      component: () => import('../views/SignOut.vue')
    }
  ],
  linkActiveClass: 'active'
})

export default router
