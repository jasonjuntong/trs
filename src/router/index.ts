import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import useAuthStore from '@/stores/auth.ts';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/signin',
      name: 'signIn',
      component: () => import('../views/SignInView.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/SignUpView.vue')
    },
  ],
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  if (authStore.session && authStore.user) {
    if(to.path === '/signin') {
      next('/')
    } else {
      next()
    }
  } else {
    if (to.path !== '/signin' && to.path !== '/signup') {
      next('/signin')
    } else {
      next()
    }
  }

})

export default router
