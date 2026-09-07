<template>
  <footer class="bg-[var(--color-footer-bg)] text-[var(--color-footer-text)] transition-colors duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Top: 3-column layout (Brand & CTA | Status & Highlights | Navigation & Connect) -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 py-14 sm:py-16 border-b border-[var(--color-footer-text)]/10">

        <!-- Column 1: Identity & Primary CTA -->
        <section class="md:col-span-6 lg:col-span-5 space-y-6">
          <div class="space-y-1.5">
            <p class="text-xl font-bold tracking-tight text-[var(--color-footer-text)]">{{ name }}</p>
            <p class="text-sm font-medium text-[var(--color-footer-text)]/50">{{ role }}</p>
          </div>
          <p class="text-sm leading-relaxed text-[var(--color-footer-text)]/65 max-w-sm">
            {{ intro }}
          </p>
          <div>
            <router-link
              to="/contact"
              class="group inline-flex items-center gap-2.5 px-5 py-2.5 rounded-lg bg-[var(--color-footer-text)] text-[var(--color-footer-bg)] text-sm font-semibold transition-all duration-200 hover:opacity-90 hover:gap-3.5 active:scale-95 shadow-sm"
              :aria-label="`${ctaButtonLabel} - go to contact page`"
            >
              {{ ctaButtonLabel }}
              <svg class="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </router-link>
          </div>
        </section>

        <!-- Column 2: Status & Engineering Highlights -->
        <section class="md:col-span-6 lg:col-span-4 space-y-6">
          <!-- Availability Badge -->
          <div class="space-y-3">
            <p class="text-[11px] font-bold uppercase tracking-widest text-[var(--color-footer-text)]/35 font-dot">
              Current Status
            </p>
            <div class="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[var(--color-footer-text)]/[0.06] border border-[var(--color-footer-text)]/10 text-xs text-[var(--color-footer-text)]/80">
              <span class="relative flex h-2 w-2">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span class="font-medium">{{ ctaBadge || 'Available for selective opportunities' }}</span>
            </div>
          </div>

          <!-- Quick Stats Highlights -->
          <div v-if="highlights && highlights.length" class="space-y-3 pt-1">
            <p class="text-[11px] font-bold uppercase tracking-widest text-[var(--color-footer-text)]/35 font-dot">
              Track Record
            </p>
            <div class="grid grid-cols-3 gap-2.5 sm:gap-3">
              <div
                v-for="(item, idx) in highlights"
                :key="idx"
                class="px-3 py-2.5 rounded-lg bg-[var(--color-footer-text)]/[0.03] border border-[var(--color-footer-text)]/5 space-y-0.5"
              >
                <div class="text-base font-bold text-[var(--color-footer-text)] font-dot tracking-tight">
                  {{ item.value }}
                </div>
                <div class="text-[10px] text-[var(--color-footer-text)]/50 leading-tight">
                  {{ item.label }}
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Column 3: Navigation & Connect -->
        <div class="md:col-span-12 lg:col-span-3 flex flex-row gap-10 sm:gap-14 lg:justify-end">
          <!-- Navigation Links -->
          <div class="space-y-4">
            <p class="text-[11px] font-bold uppercase tracking-widest text-[var(--color-footer-text)]/35 font-dot">Navigation</p>
            <nav aria-label="Footer navigation" class="flex flex-col gap-2.5">
              <router-link
                v-for="menu in menus"
                :key="menu.index"
                :to="menu.route"
                class="text-sm text-[var(--color-footer-text)]/60 hover:text-[var(--color-footer-text)] hover:translate-x-1 transition-all duration-200 inline-flex items-center gap-1.5 w-fit"
              >
                {{ menu.name }}
              </router-link>
            </nav>
          </div>

          <!-- Connect Links -->
          <div class="space-y-4">
            <p class="text-[11px] font-bold uppercase tracking-widest text-[var(--color-footer-text)]/35 font-dot">Connect</p>
            <nav aria-label="Social and contact links" class="flex flex-col gap-2.5">
              <a
                v-for="method in prioritizedContactMethods"
                :key="method.id"
                :href="method.link"
                :target="method.target || (method.id !== 'email' ? '_blank' : undefined)"
                :rel="method.rel || (method.id !== 'email' ? 'noopener noreferrer' : undefined)"
                :aria-label="getAriaLabel(method)"
                class="group text-sm text-[var(--color-footer-text)]/60 hover:text-[var(--color-footer-text)] hover:translate-x-1 transition-all duration-200 flex items-center gap-2.5 w-fit"
              >
                <span class="flex items-center justify-center w-4 h-4 text-[var(--color-footer-text)]/70 group-hover:text-[var(--color-footer-text)] transition-colors flex-shrink-0">
                  <!-- Email (Heroicons EnvelopeIcon) -->
                  <EnvelopeIcon v-if="method.id === 'email'" class="w-4 h-4 stroke-[1.75]" aria-hidden="true" />
                  <!-- LinkedIn -->
                  <svg v-else-if="method.id === 'linkedin'" class="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                  <!-- GitHub -->
                  <svg v-else-if="method.id === 'github'" class="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                  </svg>
                  <!-- WhatsApp -->
                  <svg v-else-if="method.id === 'whatsapp'" class="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.41a8.214 8.214 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.39-4.19-1.14l-.3-.18-3.12.82.83-3.04-.2-.32a8.22 8.22 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.75c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.25-1.5-1.4-1.75-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43-.14-.01-.31-.01-.48-.01s-.44.06-.67.31c-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.28"/>
                  </svg>
                  <!-- Fallback -->
                  <span v-else class="text-sm">{{ method.icon }}</span>
                </span>
                <span>{{ method.title }}</span>
              </a>
            </nav>
          </div>
        </div>

      </div>

      <!-- Bottom: Copyright & Location -->
      <div
        class="flex flex-col sm:flex-row items-center justify-between gap-3 py-6 text-xs text-[var(--color-footer-text)]/40">
        <p>&copy; {{ currentYear }} {{ name }}. All rights reserved.</p>
        <p>DKI Jakarta, Indonesia • GMT+7</p>
      </div>

    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import { useFooterData } from '../../composables/useFooterData'
import { useContactData } from '../../composables/useContactData'
import { EnvelopeIcon } from '@heroicons/vue/24/outline'

const {
  name,
  role,
  intro,
  ctaBadge,
  ctaButtonLabel,
  highlights,
  menus,
  currentYear
} = useFooterData()

const { contactMethods } = useContactData()

const connectOrder = ['email', 'linkedin', 'github', 'whatsapp']
const prioritizedContactMethods = computed(() => {
  return [...contactMethods.value].sort((a, b) => {
    const ai = connectOrder.indexOf(a.id)
    const bi = connectOrder.indexOf(b.id)
    return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi)
  })
})

const getAriaLabel = (method) => {
  switch (method.id) {
    case 'email':
      return `Send email to ${name.value}`
    case 'linkedin':
      return `View ${name.value}'s LinkedIn profile`
    case 'github':
      return `View ${name.value}'s GitHub repositories`
    case 'whatsapp':
      return `Chat with ${name.value} on WhatsApp`
    default:
      return method.title || 'Contact'
  }
}
</script>
