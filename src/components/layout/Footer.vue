<template>
  <footer class="bg-[#24252a] text-white">
    <div class="max-w-6xl mx-auto px-6 lg:px-8">

      <!-- Top: CTA + Nav -->
      <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-12 py-16 border-b border-white/10">

        <!-- Left: Identity & CTA -->
        <div class="space-y-6 max-w-md">
          <div class="space-y-1">
            <p class="text-lg font-bold tracking-tight text-white">{{ name }}</p>
            <p class="text-sm text-white/50">{{ role }}</p>
          </div>
          <p class="text-sm leading-relaxed text-white/60">{{ intro }}</p>
          <router-link to="/contact"
            class="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white text-[#24252a] text-sm font-semibold transition-all duration-200 hover:bg-white/90 hover:gap-3 active:scale-95">
            {{ ctaButtonLabel }}
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </router-link>
        </div>

        <!-- Right: Quick Links + Connect -->
        <div class="flex flex-col sm:flex-row gap-12">
          <!-- Quick Links -->
          <div class="space-y-4">
            <p class="text-[11px] font-bold uppercase tracking-widest text-white/30">Navigation</p>
            <nav class="flex flex-col gap-2">
              <router-link v-for="menu in menus" :key="menu.index" :to="menu.route"
                class="text-sm text-white/60 hover:text-white transition-colors duration-200">
                {{ menu.name }}
              </router-link>
            </nav>
          </div>

          <!-- Connect -->
          <div class="space-y-4">
            <p class="text-[11px] font-bold uppercase tracking-widest text-white/30">Connect</p>
            <div class="flex flex-col gap-2">
              <a href="https://wa.me/628982681391" target="_blank" rel="noopener noreferrer"
                class="text-sm text-white/60 hover:text-white transition-colors duration-200 flex items-center gap-2">
                <span class="text-base">💬</span> WhatsApp
              </a>
              <a href="https://linkedin.com/in/hadinatajenta" target="_blank" rel="noopener noreferrer"
                class="text-sm text-white/60 hover:text-white transition-colors duration-200 flex items-center gap-2">
                <span class="text-base">🔗</span> LinkedIn
              </a>
              <a href="mailto:hadinatajenta122@gmail.com"
                class="text-sm text-white/60 hover:text-white transition-colors duration-200 flex items-center gap-2">
                <span class="text-base">📧</span> Gmail
              </a>
            </div>
          </div>
        </div>

      </div>

      <!-- Bottom: Copyright -->
      <div class="flex flex-col sm:flex-row items-center justify-between gap-3 py-6 text-xs text-white/30">
        <p>&copy; {{ currentYear }} {{ name }}. All rights reserved.</p>
        <p>DKI JAKARTA, Indonesia • GMT+7</p>
      </div>

    </div>
  </footer>
</template>

<script setup>
import { useFooterData } from '../../composables/useFooterData'

const {
  name,
  role,
  intro,
  ctaButtonLabel,
  menus,
  currentYear
} = useFooterData()
</script>
