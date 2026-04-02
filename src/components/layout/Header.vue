<template>
  <header class="sticky top-0 inset-x-0 z-50 bg-white/95 border-b border-black/5 backdrop-blur-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between gap-4">
        <router-link
          to="/"
          class="flex items-center gap-2 text-lg font-bold text-black transition hover:text-black/70"
        >
          <span class="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white text-sm font-bold">E</span>
          <span class="hidden sm:block tracking-wide font-semibold text-sm text-black">Erendt</span>
        </router-link>

        <nav class="hidden md:flex items-center gap-8">
          <router-link
            v-for="menu in menus"
            :key="menu.index"
            :to="menu.route"
            class="group text-sm font-medium transition-colors relative px-1 py-1 text-black/60 hover:text-black"
            :class="{ 'text-black font-semibold': isActive(menu.route) }"
          >
            {{ menu.name }}
            <span
              class="absolute left-0 right-0 bottom-0 h-0.5 origin-left rounded-full bg-black transition-transform duration-200"
              :class="isActive(menu.route) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-50'"
            ></span>
          </router-link>
        </nav>

        <div class="hidden md:flex">
          <router-link
            to="/contact"
            class="inline-flex items-center gap-2 rounded-lg border border-black bg-black px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-black/80"
          >
            Let's Talk
          </router-link>
        </div>

        <button
          type="button"
          class="md:hidden inline-flex items-center justify-center rounded-lg border border-black/10 bg-white p-2 text-black transition hover:border-black/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
          @click="toggleMenu"
          :aria-expanded="isOpen"
          aria-controls="mobile-navigation"
        >
          <span class="sr-only">Toggle navigation</span>
          <svg v-if="!isOpen" class="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" fill="none">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7h16M4 12h16M4 17h16" />
          </svg>
          <svg v-else class="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" fill="none">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <transition name="mobile-menu">
      <div
        v-if="isOpen"
        id="mobile-navigation"
        class="md:hidden border-t border-black/5 bg-white/95 backdrop-blur-sm"
      >
        <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-2">
          <router-link
            v-for="menu in menus"
            :key="menu.index"
            :to="menu.route"
            class="flex items-center justify-between rounded-lg px-4 py-3 text-sm font-medium transition hover:bg-black/5"
            :class="isActive(menu.route) ? 'text-black bg-black/5 font-semibold' : 'text-black/60'"
            @click="closeMenu"
          >
            <span>{{ menu.name }}</span>
            <svg
              class="h-4 w-4 text-black/40"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </router-link>
          <router-link
            to="/contact"
            class="flex items-center justify-center rounded-lg border border-black bg-black px-4 py-3 text-sm font-semibold text-white transition hover:bg-black/80 mt-2"
            @click="closeMenu"
          >
            Let's Talk
          </router-link>
        </nav>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

const isOpen = ref(false);
const route = useRoute();

const menus = [
  { index: 1, route: "/", name: "Home" },
  { index: 2, route: "/projects", name: "Projects" },
  { index: 3, route: "/experience", name: "Experience" },
  { index: 4, route: "/service", name: "Service" },
];

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

const closeMenu = () => {
  isOpen.value = false;
};

const isActive = (path) => route.path === path || route.path.startsWith(`${path}/`);

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
