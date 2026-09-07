import { ViteSSG } from 'vite-ssg'
import './style.css'
import App from './App.vue'
import { routes } from './router/index'
import db from '../db.json'

export const createApp = ViteSSG(App, {
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0, left: 0 }
  },
})

const PROJECT_IDS = Array.isArray(db?.projects)
  ? db.projects.map((project) => project.id).filter((id) => Number.isInteger(id))
  : []

/**
 * Tells vite-ssg which concrete paths to prerender for dynamic routes.
 * Called at build time — resolves /projects/:id into /projects/1, /projects/2, etc.
 */
export function includedRoutes(paths) {
  return paths.flatMap((path) => {
    if (path === '/projects/:id') {
      return PROJECT_IDS.map((id) => `/projects/${id}`)
    }
    if (path.includes(':pathMatch')) {
      return []
    }
    return [path]
  })
}
