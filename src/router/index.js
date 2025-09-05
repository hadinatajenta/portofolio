import { createWebHistory, createRouter } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import Experience from '../views/Experience.vue'
import Contact from '../views/Contact.vue'
import AboutMe from '../views/AboutMe.vue'

const routes = [
  { path: '/', component: LandingPage , name: "home"},
  { path: '/experience', component: Experience , name: "experience"},
  { path: '/contact', component: Contact , name: "contact"},
  { path: '/about', component: AboutMe, name: "about" },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router