<template>
  <section class="w-full py-12 px-4 md:px-8 lg:px-16">
    <MacCard title="About Me" class="animate-fade-in">
      <div class="flex flex-col lg:flex-row gap-8 lg:gap-12">
        <!-- Left Column: Text Content -->
        <div class="w-full lg:w-1/2 flex flex-col justify-center">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
            <span
              class="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent drop-shadow-lg">
              Hi, I'm
            </span>
            <span class="text-white">{{ name }}</span>
          </h1>

          <p class="text-lg md:text-xl text-purple-200 mb-6 leading-relaxed">
            Full Stack Developer with 3+ years building scalable web & microservice apps.
            Skilled in
            <span
              class="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent font-semibold">
              Laravel, Go, Vue, React, and Node.js
            </span>
            — from banking systems at BRI to freelance projects in NGOs, media, and education.
            Quick to adapt, clean code minded, and always pushing practical solutions.
          </p>


          <div class="flex flex-wrap gap-4 mt-2">
            <a href="#"
              class="group relative inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <svg xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Download Resume</span>
            </a>

            <router-link to="/contact"
              class="group relative inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-purple-400 text-purple-300 font-semibold transition-all duration-300 hover:bg-purple-500 hover:text-white hover:scale-105">
              <svg xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Get In Touch</span>
            </router-link>
          </div>
        </div>

        <div class="w-full lg:w-1/2 flex flex-col items-center">
          <div class="relative mb-8">
            <div class="w-90 aspect-square overflow-hidden rounded-lg">
              <img src="/img/5357.jpg" alt="photo" class="w-full h-full object-cover object-top" />
            </div>
            <div
              class="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full opacity-20 blur-xl z-0">
            </div>
            <div
              class="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-tr from-indigo-500 to-purple-400 rounded-full opacity-20 blur-xl z-0">
            </div>
          </div>
        </div>
      </div>
    </MacCard>
  </section>
</template>

<script setup>
import MacCard from '../common/BaseCard.vue'
import { ref } from 'vue'

const name = ref('Hadinata')
const skills = ref([
  'Vue.js', 'React', 'JavaScript', 'TypeScript',
  'Tailwind CSS', 'Node.js', 'Git', 'Responsive Design',
  'UI/UX Design', 'REST APIs', 'Vite', 'Webpack'
])
</script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(16px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.8s ease-out both;
}


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
  border-radius: 16px;
}

.profile-image-container {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  box-shadow:
    0 10px 25px rgba(0, 0, 0, 0.2),
    0 5px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.profile-image-container:hover {
  transform: translateY(-5px);
}

.profile-image-container::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(45deg,
      rgba(90, 36, 130, 0.2) 0%,
      rgba(112, 26, 117, 0.1) 50%,
      rgba(58, 12, 163, 0.2) 100%);
  z-index: 1;
}

.skill-pill {
  display: inline-block;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: #e9d5ff;
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.875rem;
  transition: all 0.3s ease;
}

.skill-pill:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.cta-btn {
  display: inline-flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
  text-decoration: none;
}

.cta-btn.primary {
  background: linear-gradient(45deg, #8b5cf6, #ec4899);
  color: white;
  box-shadow: 0 4px 6px rgba(139, 92, 246, 0.3);
}

.cta-btn.primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(139, 92, 246, 0.4);
}

.cta-btn.secondary {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  backdrop-filter: blur(10px);
}

.cta-btn.secondary:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

/* Responsive adjustments */
@media (max-width: 1024px) {
  .text-6xl {
    font-size: 3.5rem;
  }
}

@media (max-width: 768px) {
  .text-6xl {
    font-size: 3rem;
  }

  .glass-container {
    border-radius: 12px;
  }
}

@media (max-width: 640px) {
  .text-6xl {
    font-size: 2.5rem;
  }

  .cta-btn {
    padding: 0.6rem 1.2rem;
    font-size: 0.875rem;
  }
}
</style>