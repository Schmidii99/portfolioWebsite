import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView, },
    { path: '/project/floslabs', name: 'floslabs', component: () => import('../views/projects/floslabs.vue'), },

    { path: '/:pathMatch(.*)*', component: NotFoundView },
  ],
})

export default router
