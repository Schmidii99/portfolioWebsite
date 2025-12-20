import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import ProjectView from '@/views/ProjectView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView, },
    { path: '/test', name: 'test', component: ProjectView, },
    { path: '/project/test', name: 'project', component: ProjectView, },

    { path: '/:pathMatch(.*)*', component: NotFoundView },
  ],
})

export default router
