import { ViteSSG } from 'vite-ssg'
import './style.css'
import App from './App.vue'
import { routes } from './router/index'

export const createApp = ViteSSG(App, { routes })

// All project IDs — must stay in sync with PROJECTS_DATA in useProjectsData.js
const PROJECT_IDS = [1, 2, 3, 4, 5, 6, 7, 8]

/**
 * Tells vite-ssg which concrete paths to prerender for dynamic routes.
 * Called at build time — resolves /projects/:id into /projects/1, /projects/2, etc.
 */
export function includedRoutes(paths) {
  return paths.flatMap((path) =>
    path === '/projects/:id'
      ? PROJECT_IDS.map((id) => `/projects/${id}`)
      : [path]
  )
}

