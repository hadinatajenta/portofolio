import { ViteSSG } from 'vite-ssg'
import './style.css'
import App from './App.vue'
import { routes } from './router/index'

export const createApp = ViteSSG(App, { routes })

