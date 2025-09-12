import { createRouter, createWebHistory } from 'vue-router'
import {useMenuStore} from "@/stores/menuStore.js";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/home.vue')
    },
    {
      path: '/employee/base',
      name: 'employeebase',
      component: () => import('@/views/employee.vue')
    },
    {
      path: '/employee/all',
      name: 'employeeall',
      component: () => import('@/views/EmployeeAll.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/404'
    },
    {
      path: '/404',
      name: 'NotFound',
      component: () => import('@/views/404.vue')
    }
  ]
})



router.beforeEach((to, from, next) => {
  const menuStore = useMenuStore();
  menuStore.changeActive(to.path)
  next()
})



export default router
