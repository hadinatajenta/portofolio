<template>
  <DefaultLayout>
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 sm:pt-24 pb-12">
      <div class="grid lg:grid-cols-12 gap-16 lg:gap-24">

        <!-- Left Column: Typography & Small Image -->
        <div class="lg:col-span-5 flex flex-col justify-between">
          <div>
            <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[var(--color-text)] leading-none">
              Contact<span class="text-[var(--color-text-muted)] font-dot">.</span>
            </h1>
            <p class="mt-8 text-lg sm:text-xl text-[var(--color-text-secondary)] leading-relaxed max-w-md">
              Let's connect — I'm currently available for freelance projects, backend development, and collaborations.
            </p>
            <p class="text-xs font-bold uppercase tracking-widest text-[var(--color-text-tertiary)] pt-12">
              DKI JAKARTA, Indonesia • Available Worldwide
            </p>
          </div>

          <img src="/img/contact.jpg" alt="Hadinata Jenta"
            class="w-32 h-40 object-cover grayscale opacity-80 mt-16 hidden lg:block rounded-sm" />
        </div>

        <!-- Right Column: Border-separated contact list -->
        <div class="lg:col-span-7 flex flex-col justify-center">
          <div class="border-t border-[var(--color-border)]"></div>

          <a v-for="method in contactMethods" :key="method.id" :href="method.link" target="_blank"
            rel="noopener noreferrer"
            class="group flex items-center justify-between py-10 sm:py-12 border-b border-[var(--color-border)] hover:border-[var(--color-text)] transition-colors duration-300">
            <div>
              <h3
                class="text-3xl sm:text-4xl font-bold text-[var(--color-text)] group-hover:text-[var(--color-text-secondary)] transition-colors">
                {{ method.title }}</h3>
              <p class="text-sm sm:text-base text-[var(--color-text-secondary)] font-dot mt-3">{{
                getDisplayValue(method) }}</p>
            </div>
            <div class="transform group-hover:translate-x-4 transition-transform duration-300">
              <svg class="w-8 h-8 text-[var(--color-text)]" viewBox="0 0 24 24" fill="none" stroke="currentColor"
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

const getDisplayValue = (method) => {
  if (method.id === 'linkedin') return 'linkedin.com/in/hadinatajenta'
  if (method.id === 'whatsapp') return '+62 898-2681-391'
  return method.description
}

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
