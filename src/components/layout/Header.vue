<template>
  <header class="w-full py-3 text-white sticky top-0 z-50">
    <div class="container mx-auto px-4">
      <div class="glass-container">
        <nav class="nav-items">
          <router-link v-for="menu in menus" :key="menu.index" :to="menu.route" class="glass-nav-item"
            :class="{ 'active-nav-item': isActiveRoute(menu.route) }">
            {{ menu.name }}
          </router-link>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const menus = ref([
  {
    index: 1,
    route: "/",
    name: "Home"
  },
  {
    index: 2,
    route: "/projects",
    name: "Project"
  },
  {
    index: 3,
    route: "/experience",
    name: "Experience"
  },
])

const isActiveRoute = (routePath) => {
  return route.path === routePath
}
</script>

<style scoped>
.glass-container {
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  background: linear-gradient(125deg,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(255, 255, 255, 0.05) 40%,
      rgba(255, 255, 255, 0.05) 60%,
      rgba(255, 255, 255, 0.1) 100%);
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.3),
    inset 0 1px 1px rgba(255, 255, 255, 0.15),
    inset 0 10px 20px rgba(255, 255, 255, 0.05);
  border-radius: 24px;
  padding: 6px;
  position: relative;
  overflow: hidden;
}

.nav-items {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 2;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 20px;
  padding: 4px;
  flex-wrap: wrap;
  gap: 4px;
}

.glass-nav-item {
  position: relative;
  overflow: hidden;
  padding: 0.75rem 1.25rem;
  border-radius: 16px;
  color: white;
  font-weight: 500;
  font-size: 0.95rem;
  text-decoration: none;
  transition: all 0.4s ease;
  z-index: 1;
  text-align: center;
  min-width: 90px;
  cursor: pointer;
  flex: 1;
  max-width: 160px;
}

.glass-nav-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.15), transparent);
  transition: left 0.7s ease;
  z-index: -1;
}

.glass-nav-item:hover {
  background: rgba(255, 255, 255, 0.12);
  box-shadow:
    0 4px 15px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}

.glass-nav-item:hover::before {
  left: 100%;
}

.active-nav-item {
  background: linear-gradient(45deg,
      rgba(255, 255, 255, 0.15),
      rgba(255, 255, 255, 0.05)) !important;
  box-shadow:
    inset 0 1px 1px rgba(255, 255, 255, 0.1),
    0 2px 5px rgba(0, 0, 0, 0.2) !important;
}

@media (max-width: 768px) {
  header {
    position: fixed;
    bottom: 0;
    top: auto;
    /* reset biar ga nempel atas */
    width: 100%;
    z-index: 50;
    padding-top: 0.3rem;
    padding-bottom: 0.3rem;
  }

  .glass-container {
    border-radius: 16px;
    padding: 4px;
  }

  .nav-items {
    border-radius: 14px;
    gap: 2px;
  }

  .glass-nav-item {
    padding: 0.6rem 0.8rem;
    font-size: 0.85rem;
    min-width: 70px;
    border-radius: 12px;
  }
}


@media (max-width: 480px) {
  header {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }

  .glass-container {
    border-radius: 12px;
  }

  .nav-items {
    border-radius: 10px;
    padding: 2px;
  }

  .glass-nav-item {
    padding: 0.5rem 0.6rem;
    font-size: 0.8rem;
    min-width: 60px;
    border-radius: 10px;
  }
}

@keyframes slide-down {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.sticky-header {
  position: sticky;
  top: 0;
  backdrop-filter: blur(10px);
  background: rgba(26, 26, 26, 0.8);
}
</style>