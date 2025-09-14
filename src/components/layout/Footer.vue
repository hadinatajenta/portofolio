<template>
  <footer class="w-full py-8 text-white mt-12">
    <div class="container mx-auto px-4">
      <div class="glass-container max-w-4xl mx-auto">
        <div class="flex flex-col md:flex-row justify-between items-center p-6">
          <div class="text-center md:text-left mb-6 md:mb-0">
            <h3 class="text-xl font-semibold mb-2">{{name}}</h3>
            <p class="text-sm opacity-80">Creating digital experiences</p>
          </div>

          <div class="mb-6 md:mb-0">
            <h4 class="text-sm font-medium mb-3 text-center md:text-left">Quick Links</h4>
            <div class="flex flex-wrap justify-center md:justify-start gap-4">
              <router-link v-for="menu in menus" :key="menu.index" :to="menu.route"
                class="text-sm hover:text-purple-300 transition-colors duration-300">
                {{ menu.name }}
              </router-link>
            </div>
          </div>

          <div>
            <h4 class="text-sm font-medium mb-3 text-center md:text-left">Connect with me</h4>
            <div class="flex justify-center md:justify-start space-x-4">
              <a v-for="social in socials" :key="social.name" :href="social.url" target="_blank" class="social-icon"
                :aria-label="social.name" v-html="social.svg">
              </a>
            </div>
          </div>
        </div>

        <div class="border-t border-white border-opacity-20 mx-6"></div>

        <div class="text-center py-4 text-sm opacity-75">
          &copy; {{ new Date().getFullYear() }} {{ name }}. All rights reserved.
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'

const name = ref('Hadinata')
const menus = ref([
  {
    index: 1,
    route: "/",
    name: "Home"
  },
  {
    index: 2,
    route: "/about",
    name: "About"
  },
  {
    index: 3,
    route: "/experience",
    name: "Experience"
  }
])

const socials = ref([
  {
    name: 'GitHub',
    url: 'https://github.com/hadinatajenta',
    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/hadinata-jenta',
    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>'
  },
  {
    name: 'Mail',
    url: 'mailto:hadinatajenta122@gmail.com',
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="main-grid-item-icon" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>'
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/nathadiii',
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="main-grid-item-icon" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>'
  }
])
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
  overflow: hidden;
}

.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.social-icon:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

@media (max-width: 768px) {
  .glass-container {
    border-radius: 16px;
  }
}
</style>