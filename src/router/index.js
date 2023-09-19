import { createRouter, createWebHistory } from 'vue-router'
import Overview from '../views/Overview.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'overview',
      component: Overview
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('../views/Products.vue')
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
  ]
})

export default router
