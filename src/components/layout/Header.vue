<template>
  <header class="w-full py-2 text-white flex items-center justify-center">
    <div class="glass-container">
      <div class="nav-items gap-2">
        <router-link to="/" class="glass-nav-item" :class="{ active: activeItem === 'home' }"
          @click="setActive('home')">
          Home
        </router-link>
        <router-link to="/about" class="glass-nav-item" :class="{ active: activeItem === 'about' }"
          @click="setActive('about')">
          About
        </router-link>
        <router-link to="/experience" class="glass-nav-item" :class="{ active: activeItem === 'experience' }"
          @click="setActive('experience')">
          Services
        </router-link>
        <router-link to="/contact" class="glass-nav-item" :class="{ active: activeItem === 'contact' }"
          @click="setActive('contact')">
          Contact
        </router-link>
      </div>
    </div>
  </header>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'

const route = useRouter()
const activeItem = computed(()=> route.name)

const setActive = (item) => {
  activeItem.value = item
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
  padding: 4px;
  position: relative;
  overflow: hidden;
}

.glass-container::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  z-index: 1;
  pointer-events: none;
}

.nav-items {
  display: flex;
  position: relative;
  z-index: 2;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 20px;
  padding: 4px;
}

.glass-nav-item {
  position: relative;
  overflow: hidden;
  padding: 0.875rem 1.5rem;
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


.router-link-active {
  background: linear-gradient(45deg,
      rgba(255, 255, 255, 0.15),
      rgba(255, 255, 255, 0.05));
  box-shadow:
    inset 0 1px 1px rgba(255, 255, 255, 0.1),
    0 2px 5px rgba(0, 0, 0, 0.2);
}


</style>