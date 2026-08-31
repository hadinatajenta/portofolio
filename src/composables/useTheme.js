import { ref } from 'vue'

const isDark = ref(false)

export function useTheme() {
  const init = () => {
    // Check localStorage first, otherwise default to light (as per requirements)
    const saved = localStorage.getItem('theme')
    if (saved) {
      isDark.value = saved === 'dark'
    } else {
      isDark.value = false // Default to light
    }
    applyTheme()
  }

  const applyTheme = () => {
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
