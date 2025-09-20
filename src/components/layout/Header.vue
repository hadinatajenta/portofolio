<template>
  <header class="fixed top-0 w-full z-50 bg-black/30 backdrop-blur-md border-b border-white/10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <router-link to="/" class="text-xl font-bold text-purple-300 hover:text-purple-400 transition-colors">
          E
        </router-link>

        <!-- Desktop Menu -->
        <nav class="hidden md:flex space-x-8">
          <router-link
            v-for="menu in menus"
            :key="menu.index"
            :to="menu.route"
            class="text-sm font-medium text-gray-300 hover:text-purple-300 transition-colors relative group"
          >
            {{ menu.name }}
            <span
              class="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-400 transition-all group-hover:w-full"
            ></span>
          </router-link>
        </nav>

        <!-- Mobile Button -->
        <button
          @click="isOpen = !isOpen"
          class="md:hidden text-gray-300 hover:text-purple-300 focus:outline-none"
        >
          <svg
            v-if="!isOpen"
            class="w-6 h-6"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg
            v-else
            class="w-6 h-6"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div
      v-if="isOpen"
      class="md:hidden bg-black/80 backdrop-blur-md border-t border-white/10"
    >
      <nav class="px-4 py-3 space-y-2">
        <router-link
          v-for="menu in menus"
          :key="menu.index"
          :to="menu.route"
          class="block text-gray-300 hover:text-purple-300 text-base transition-colors"
          @click="isOpen = false"
        >
          {{ menu.name }}
        </router-link>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";

const isOpen = ref(false);

const menus = ref([
  { index: 1, route: "/", name: "Home" },
  { index: 2, route: "/projects", name: "Projects" },
  { index: 3, route: "/experience", name: "Experience" },
  { index: 4, route: "/service", name: "Service" },
]);
</script>

<style scoped>
header {
  font-family: 'Inter', sans-serif;
}
</style>
