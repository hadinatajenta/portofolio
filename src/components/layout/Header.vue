<template>
  <header class="w-full py-3 text-white sticky top-0 z-50">
    <div class="container mx-auto px-4">
      <div class="glass-container">
        <nav class="nav-items">
          <router-link v-for="menu in menus" :key="menu.index" :to="menu.route" class="glass-nav-item"
            :class="{ 'active-nav-item': isActiveRoute(menu.route) }">
            <span class="nav-text">{{ menu.name }}</span>
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
    name: "Home",
  },
  {
    index: 2,
    route: "/projects",
    name: "Projects",
  },
  {
    index: 3,
    route: "/experience",
    name: "Experience",
  }
])

const isActiveRoute = (routePath) => {
  return route.path === routePath
}
</script>

<style scoped>
.glass-container {
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  background: rgba(39, 8, 58, 0.7);
  border: 1px solid rgba(136, 58, 234, 0.3);
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.4),
    inset 0 1px 1px rgba(255, 255, 255, 0.1),
    inset 0 10px 20px rgba(136, 58, 234, 0.1);
  border-radius: 18px;
  padding: 6px;
  position: relative;
  overflow: hidden;
}

.glass-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, 
    rgba(136, 58, 234, 0) 0%, 
    rgba(136, 58, 234, 0.4) 50%, 
    rgba(136, 58, 234, 0) 100%);
}

.nav-items {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 2;
  background: rgba(26, 26, 26, 0.2);
  border-radius: 16px;
  padding: 4px;
  flex-wrap: wrap;
  gap: 4px;
}

.glass-nav-item {
  position: relative;
  overflow: hidden;
  padding: 0.75rem 1.25rem;
  border-radius: 14px;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 500;
  font-size: 0.95rem;
  text-decoration: none;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  z-index: 1;
  text-align: center;
  min-width: 90px;
  cursor: pointer;
  flex: 1;
  max-width: 160px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.glass-nav-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, 
    transparent, 
    rgba(136, 58, 234, 0.2), 
    transparent);
  transition: left 0.7s ease;
  z-index: -1;
}

.glass-nav-item:hover {
  background: rgba(136, 58, 234, 0.2);
  box-shadow:
    0 4px 15px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
  color: #fff;
}

.glass-nav-item:hover::before {
  left: 100%;
}

.active-nav-item {
  background: linear-gradient(45deg,
      rgba(136, 58, 234, 0.25),
      rgba(76, 201, 240, 0.2)) !important;
  box-shadow:
    inset 0 1px 1px rgba(255, 255, 255, 0.1),
    0 2px 8px rgba(136, 58, 234, 0.3) !important;
  color: #fff !important;
}

.nav-icon {
  font-size: 1.1rem;
  opacity: 0.9;
}

.nav-text {
  font-size: 0.85rem;
}

@media (max-width: 768px) {
  header {
    position: sticky;
    top: 0;
    padding: 0.5rem;
  }

  .glass-container {
    border-radius: 16px;
    padding: 5px;
  }

  .nav-items {
    border-radius: 14px;
    gap: 3px;
    padding: 3px;
  }

  .glass-nav-item {
    padding: 0.6rem 0.5rem;
    font-size: 0.8rem;
    min-width: 70px;
    border-radius: 12px;
    flex-direction: row;
    gap: 6px;
    justify-content: center;
  }

  .nav-icon {
    font-size: 1rem;
  }

  .nav-text {
    font-size: 0.75rem;
  }
}

@media (max-width: 480px) {
  header {
    padding: 0.3rem;
  }

  .glass-container {
    border-radius: 14px;
    padding: 4px;
  }

  .nav-items {
    border-radius: 12px;
    padding: 2px;
  }

  .glass-nav-item {
    padding: 0.5rem 0.4rem;
    font-size: 0.75rem;
    min-width: 60px;
    border-radius: 10px;
  }

  .nav-icon {
    font-size: 0.9rem;
  }

  .nav-text {
    font-size: 0.7rem;
  }
}

/* Animation for header appearance */
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

</style>