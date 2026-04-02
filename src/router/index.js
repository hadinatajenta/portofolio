import { createWebHistory, createRouter } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import Experience from '../views/Experience.vue'
import Projects from '../views/Projects.vue'
import Contact from '../views/Contact.vue'

const routes = [
  { path: '/', component: LandingPage , name: "home"},
  { path: '/experience', component: Experience , name: "experience"},
  { path: '/projects', component: Projects, name: "projects" },
  { path: '/contact', component: Contact, name: "contact" },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
