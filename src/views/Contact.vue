<template>
  <DefaultLayout>
    <section class="min-h-[70vh] flex items-center justify-center py-12">
      <div class="w-full max-w-5xl">
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          <!-- Visual Section -->
          <div class="relative group order-2 lg:order-1">
            <div
              class="absolute -inset-4 bg-black/5 rounded-3xl -rotate-2 transition-transform group-hover:rotate-0 duration-500">
            </div>
            <div class="relative aspect-[4/5] overflow-hidden rounded-2xl border-2 border-black/10 shadow-2xl">
              <img src="/img/contact.jpg" alt="Contact"
                class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105" />
            </div>
            <!-- Decorative element -->
            <div class="absolute -bottom-6 -right-6 w-24 h-24 bg-black/5 rounded-full blur-2xl"></div>
          </div>

          <!-- Content Section -->
          <div class="space-y-12 order-1 lg:order-2">
            <div class="space-y-6">
              <h1 class="text-5xl sm:text-7xl font-bold tracking-tight text-black leading-none">
                Let's <br /> <span class="text-black/40">connect.</span>
              </h1>
              <p class="text-xl text-black/60 max-w-md leading-relaxed">
                I'm currently available for new projects and collaborations. Choose your preferred way to reach out.
              </p>
            </div>

            <div class="flex flex-col gap-4">
              <a v-for="method in contactMethods" :key="method.id" :href="method.link" target="_blank"
                rel="noopener noreferrer"
                class="group flex items-center justify-between p-6 rounded-2xl border-2 border-black/5 bg-white hover:border-black hover:shadow-xl transition-all duration-300 active:scale-[0.98]">
                <div class="flex items-center gap-5">
                  <div
                    class="w-12 h-12 flex items-center justify-center rounded-xl bg-black/5 group-hover:bg-black group-hover:text-white transition-colors duration-300">
                    <span v-if="method.id === 'whatsapp'" class="text-2xl">💬</span>
                    <span v-else-if="method.id === 'linkedin'" class="text-2xl">🔗</span>
                    <span v-else class="text-2xl">📧</span>
                  </div>
                  <div>
                    <h3 class="font-bold text-black text-lg leading-tight">{{ method.title }}</h3>
                    <p class="text-black/50 text-sm font-medium">{{ method.description }}</p>
                  </div>
                </div>
                <div
                  class="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  <svg class="w-6 h-6 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    stroke-width="2.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </a>
            </div>

            <!-- Subtle footer note -->
            <p class="text-xs font-bold uppercase tracking-widest text-black/20 pt-4">
              DKI JAKARTA, Indonesia • Available Worldwide
            </p>
          </div>

        </div>
      </div>
    </section>
  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from '../layouts/DefaultLayout.vue'
import { useContactData } from '../composables/useContactData'

const { contactMethods } = useContactData()
</script>

<style scoped>
/* Focus on typography and minimalist spacing */
</style>
