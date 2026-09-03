<template>
  <button
    type="button"
    class="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[999] flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-btn-bg)] text-[var(--color-btn-text)] shadow-lg transition-transform hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-border-strong)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]"
    :aria-label="isDark ? 'Switch to light theme' : 'Switch to dark theme'"
    @click="toggleTheme"
  >
    <div class="relative flex h-6 w-6 items-center justify-center overflow-hidden">
      <!-- Sun Icon (Light Mode) -->
      <svg
        class="absolute h-full w-full transition-all duration-500 ease-in-out"
        :class="isDark ? '-translate-y-10 opacity-0 rotate-90' : 'translate-y-0 opacity-100 rotate-0'"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      </svg>
      
      <!-- Moon Icon (Dark Mode) -->
      <svg
        class="absolute h-full w-full transition-all duration-500 ease-in-out"
        :class="isDark ? 'translate-y-0 opacity-100 rotate-0' : 'translate-y-10 opacity-0 -rotate-90'"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    </div>
  </button>
</template>

<script setup>
import { useTheme } from '../../composables/useTheme'

const { isDark, toggleTheme } = useTheme()
</script>
