import { ref } from 'vue'

const isDark = ref(false)
let mediaListenerAttached = false

export function useTheme() {
  const init = () => {
    // Check localStorage first, otherwise default to system preference
    const saved = typeof localStorage !== 'undefined' ? localStorage.getItem('theme') : null
    if (saved) {
      isDark.value = saved === 'dark'
    } else if (typeof window !== 'undefined' && window.matchMedia) {
      isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
    } else {
      isDark.value = false
    }
    applyTheme()

    // Listen for system theme changes if no explicit user preference is stored
    if (!mediaListenerAttached && typeof window !== 'undefined' && window.matchMedia) {
      mediaListenerAttached = true
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
      const handleSystemThemeChange = (e) => {
        if (!localStorage.getItem('theme')) {
          isDark.value = e.matches
          applyTheme()
        }
      }
      if (mediaQuery.addEventListener) {
        mediaQuery.addEventListener('change', handleSystemThemeChange)
      } else if (mediaQuery.addListener) {
        mediaQuery.addListener(handleSystemThemeChange)
      }
    }
  }

  const applyTheme = () => {
    if (typeof document === 'undefined') return
    document.documentElement.classList.toggle('dark', isDark.value)
    
    // Update theme-color meta tag for mobile browsers
    const metaThemeColor = document.querySelector('meta[name="theme-color"]')
    if (metaThemeColor) {
      metaThemeColor.setAttribute(
        'content', 
        isDark.value ? '#0f0f11' : '#ffffff'
      )
    }
  }

  const toggleTheme = (event) => {
    // Get click position for ripple origin, handle potential null event (e.g. keyboard toggle)
    const x = event?.clientX ?? window.innerWidth / 2
    const y = event?.clientY ?? window.innerHeight / 2
    
    // Calculate max radius to ensure ripple covers the whole screen
    const maxRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    )
    
    // Check for View Transitions API support
    if (document.startViewTransition) {
      document.documentElement.style.setProperty('--ripple-x', `${x}px`)
      document.documentElement.style.setProperty('--ripple-y', `${y}px`)
      document.documentElement.style.setProperty('--ripple-radius', `${maxRadius}px`)
      
      const transition = document.startViewTransition(() => {
        isDark.value = !isDark.value
        applyTheme()
      })
    } else {
      // Fallback if View Transitions API is not supported
      isDark.value = !isDark.value
      applyTheme()
    }
    
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
  }

  return { isDark, toggleTheme, init }
}
