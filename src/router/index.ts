import { createRouter, createWebHistory } from 'vue-router'
import ProjectsView from '../views/ProjectsView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import ProjectView from '@/views/ProjectView.vue'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView, },
    { path: '/about/', name: 'about', component: AboutView, },
    { path: '/projects/', name: 'projects', component: ProjectsView, },
    { path: '/project/:projectName', name: 'project', component: ProjectView, },
    { path: '/:pathMatch(.*)*', name: "NotFound", component: NotFoundView },
  ],
})

export default router
