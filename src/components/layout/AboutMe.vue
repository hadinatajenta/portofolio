<template>
  <section class="w-full py-12 px-4 md:px-8 lg:px-16">
    <MacCard title="About Me" class="animate-fade-in">
      <div class="flex flex-col lg:flex-row gap-8 lg:gap-12">
        <!-- Left Column: Text Content -->
        <div class="w-full lg:w-1/2 flex flex-col justify-center">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span class="text-black">Hi, I'm {{ name }}</span>
          </h1>

          <p class="text-lg md:text-xl text-black/70 mb-6 leading-relaxed">
            Fullstack Developer focused on backend development, distributed systems, and scalable architecture with 6+ years of experience.
            Experienced in building microservices with <span class="text-black font-semibold">Go, Laravel, and Node.js</span>,
            optimizing database performance, and integrating services across high-traffic environments. Hands-on experience with
            financial-grade systems at BRI that required secure coding, structured QA cycles, and reliable release processes.
          </p>


          <div class="flex flex-wrap gap-4 mt-2">
            <a href="/Hadinata_Jenta_Latest.pdf" download
              class="group relative inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-black text-white font-semibold shadow-md transition-all duration-300 hover:bg-black/80 hover:shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Download Resume</span>
            </a>

            <router-link to="/contact"
              class="group relative inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-black text-black font-semibold transition-all duration-300 hover:bg-black/5">
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
            <div class="w-90 aspect-square overflow-hidden rounded-lg border-2 border-black/20">
              <img src="/img/5357.jpg" alt="photo" class="w-full h-full object-cover object-top" />
            </div>
          </div>
        </div>
      </div>
    </MacCard>
  </section>
</template>

<script setup>
import MacCard from '../common/BaseCard.vue'
import { useAboutData } from '../../composables/useAboutData'

const { name, bio, skills } = useAboutData()
</script>

<style scoped>
.animate-fade-in {
  animation: fade-in 1s ease forwards;
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
