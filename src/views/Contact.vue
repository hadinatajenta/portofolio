<template>
  <DefaultLayout>
    <div class="max-w-5xl mx-auto py-6 sm:py-12 lg:py-16">
      <div class="grid lg:grid-cols-12 gap-10 lg:gap-16">

        <!-- Left Column: Typography & Availability Info -->
        <div class="lg:col-span-5 flex flex-col justify-between">
          <div>
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--color-text)] leading-none">
              Contact<span class="text-[var(--color-text-muted)] font-dot">.</span>
            </h1>
            <p class="mt-6 sm:mt-8 text-base sm:text-lg text-[var(--color-text-secondary)] leading-relaxed max-w-md">
              Let's connect — I'm currently available for freelance projects, backend development, and collaborations.
            </p>
          </div>

          <!-- Availability & Location Details -->
          <div class="mt-10 lg:mt-16 pt-8 border-t border-[var(--color-border)] space-y-4">
            <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] text-xs text-[var(--color-text-secondary)] font-medium">
              <span class="relative flex h-2 w-2">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Available for new projects
            </div>

            <div class="space-y-1 text-xs text-[var(--color-text-tertiary)]">
              <p class="font-medium text-[var(--color-text-secondary)]">DKI Jakarta, Indonesia • GMT+7</p>
              <p>Available for remote worldwide &amp; local consultations</p>
            </div>
          </div>
        </div>

        <!-- Right Column: Border-separated contact list -->
        <div class="lg:col-span-7 flex flex-col justify-center">
          <div class="border-t border-[var(--color-border)]"></div>

          <a v-for="method in contactMethods" :key="method.id" :href="method.link" target="_blank"
            rel="noopener noreferrer"
            class="group flex items-center justify-between py-6 sm:py-8 lg:py-10 border-b border-[var(--color-border)] hover:border-[var(--color-text)] transition-colors duration-300">
            <div>
              <h3
                class="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-text)] group-hover:text-[var(--color-text-secondary)] transition-colors">
                {{ method.title }}</h3>
              <p class="text-sm sm:text-base text-[var(--color-text-secondary)] font-mono tracking-tight mt-2 sm:mt-2.5">{{
                method.description }}</p>
            </div>
            <div class="transform group-hover:translate-x-3 transition-transform duration-300">
              <svg class="w-6 h-6 sm:w-8 sm:h-8 text-[var(--color-text)]" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="2" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </a>
        </div>

      </div>
    </div>
  </DefaultLayout>
</template>

<script setup>
import { useHead } from '@unhead/vue'
import DefaultLayout from '../layouts/DefaultLayout.vue'
import { useContactData } from '../composables/useContactData'

const { contactMethods } = useContactData()

useHead({
  title: 'Contact — Hadinata Jenta',
  meta: [
    {
      name: 'description',
      content: 'Get in touch with Hadinata Jenta for backend development, freelance projects, or collaboration. Reach out via Email, WhatsApp, or LinkedIn.'
    },
    { property: 'og:title', content: 'Contact — Hadinata Jenta' },
    { property: 'og:description', content: 'Get in touch with Hadinata Jenta for backend development, freelance, or collaboration.' },
    { property: 'og:url', content: 'https://hadinata.me/contact' },
    { name: 'twitter:title', content: 'Contact — Hadinata Jenta' },
    { name: 'twitter:description', content: 'Reach out to Hadinata Jenta via Email, WhatsApp, or LinkedIn.' },
  ],
  link: [
    { rel: 'canonical', href: 'https://hadinata.me/contact' }
  ]
})
</script>
