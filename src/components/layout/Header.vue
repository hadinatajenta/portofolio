<template>
  <header class="sticky top-0 inset-x-0 z-50 bg-[var(--color-backdrop)] border-b border-[var(--color-border)] backdrop-blur-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between gap-4">
        <router-link to="/" class="flex items-center gap-2 text-lg text-[var(--color-text)] transition hover:opacity-70 font-dot">
          <span class="tracking-wide font-bold text-base sm:text-xl text-[var(--color-text)]">Hadinata Jenta</span>
        </router-link>

        <nav class="hidden md:flex items-center gap-8">
          <router-link v-for="menu in menus" :key="menu.index" :to="menu.route"
            class="group text-sm font-medium transition-colors relative px-1 py-1 text-[var(--color-text-secondary)] hover:text-[var(--color-text)]"
            :class="{ 'text-[var(--color-text)] font-semibold': isActive(menu.route) }">
            {{ menu.name }}
            <span
              class="absolute left-0 right-0 bottom-0 h-0.5 origin-left rounded-full bg-[var(--color-text)] transition-transform duration-200"
              :class="isActive(menu.route) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-50'"></span>
          </router-link>
        </nav>

        <div class="hidden md:flex">
          <router-link to="/contact"
            class="inline-flex items-center gap-2 rounded-lg border border-[var(--color-btn-bg)] bg-[var(--color-btn-bg)] px-5 py-2.5 text-xs font-semibold text-[var(--color-btn-text)] transition hover:opacity-80">
            Let's Talk
          </router-link>
        </div>

        <div class="flex items-center gap-2 md:hidden">
          <!-- Mobile Theme Toggle in Navbar -->
          <button
            type="button"
            class="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--color-border)] bg-transparent text-[var(--color-text)] transition hover:border-[var(--color-border-hover)] hover:bg-[var(--color-surface-hover)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-border-strong)]"
            :aria-label="isDark ? 'Switch to light theme' : 'Switch to dark theme'"
            @click="toggleTheme"
          >
            <!-- Sun Icon (when Dark, click to go light) -->
            <svg v-if="isDark" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
            <!-- Moon Icon (when Light, click to go dark) -->
            <svg v-else class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </button>

          <!-- Mobile Menu Hamburger Button -->
          <button type="button"
            class="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--color-border)] bg-transparent text-[var(--color-text)] transition hover:border-[var(--color-border-hover)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-border-hover)]"
            @click="toggleMenu" :aria-expanded="isOpen" aria-controls="mobile-navigation">
            <span class="sr-only">Toggle navigation</span>
            <svg v-if="!isOpen" class="h-5 w-5" viewBox="0 0 24 24" stroke="currentColor" fill="none">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7h16M4 12h16M4 17h16" />
            </svg>
            <svg v-else class="h-5 w-5" viewBox="0 0 24 24" stroke="currentColor" fill="none">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <transition name="mobile-menu">
      <div v-if="isOpen" id="mobile-navigation" class="md:hidden border-t border-[var(--color-border)] bg-[var(--color-backdrop)] backdrop-blur-sm">
        <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-2">
          <router-link v-for="menu in menus" :key="menu.index" :to="menu.route"
            class="flex items-center justify-between rounded-lg px-4 py-3 text-sm font-medium transition hover:bg-[var(--color-surface-hover)]"
            :class="isActive(menu.route) ? 'text-[var(--color-text)] bg-[var(--color-surface-hover)] font-semibold' : 'text-[var(--color-text-secondary)]'" @click="closeMenu">
            <span>{{ menu.name }}</span>
            <svg class="h-4 w-4 text-[var(--color-text-tertiary)]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd" />
            </svg>
          </router-link>

          <!-- Appearance toggle in menu drawer -->
          <button
            type="button"
            class="w-full flex items-center justify-between rounded-lg px-4 py-3 text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition hover:bg-[var(--color-surface-hover)] border border-[var(--color-border)]"
            @click="toggleTheme"
          >
            <span class="flex items-center gap-2">
              <svg v-if="isDark" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
              <svg v-else class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
              Appearance
            </span>
            <span class="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-text)] font-mono uppercase">
              <span class="h-2 w-2 rounded-full" :class="isDark ? 'bg-indigo-400' : 'bg-amber-400'"></span>
              {{ isDark ? 'Dark' : 'Light' }}
            </span>
          </button>

          <router-link to="/contact"
            class="flex items-center justify-center rounded-lg border border-[var(--color-btn-bg)] bg-[var(--color-btn-bg)] px-4 py-3 text-sm font-semibold text-[var(--color-btn-text)] transition hover:opacity-80 mt-2"
            @click="closeMenu">
            Let's Talk
          </router-link>
        </nav>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";
import { useTheme } from "../../composables/useTheme";

const { isDark, toggleTheme } = useTheme();
const isOpen = ref(false);
const route = useRoute();

const menus = [
  { index: 1, route: "/", name: "Home" },
  { index: 2, route: "/projects", name: "Projects" },
  { index: 3, route: "/experience", name: "Experience" },
  { index: 4, route: "/contact", name: "Contact" }
];

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

const closeMenu = () => {
  isOpen.value = false;
};

const isActive = (path) => route.path === path || route.path.startsWith(`${path}/`);

const onKeydown = (e) => {
  if (e.key === "Escape" && isOpen.value) {
    closeMenu();
  }
};

onMounted(() => {
  window.addEventListener("keydown", onKeydown);
});

onUnmounted(() => {
  window.removeEventListener("keydown", onKeydown);
});

watch(
  () => route.fullPath,
  () => {
    closeMenu();
  }
);
</script>

<style scoped>
header {
  font-family: 'Inter', sans-serif;
}

.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

.mobile-menu-enter-to,
.mobile-menu-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
