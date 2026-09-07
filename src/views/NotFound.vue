<template>
  <DefaultLayout>
    <div class="py-12 sm:py-20 lg:py-24 max-w-3xl mx-auto text-center space-y-8 sm:space-y-10">

      <!-- Status Indicator Pill -->
      <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--color-surface-subtle)] border border-[var(--color-border)] text-xs font-mono font-medium text-[var(--color-text-secondary)]">
        <span class="relative flex h-2 w-2">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
        </span>
        HTTP 404 · Route Unresolved
      </div>

      <!-- Hero Heading with DotGothic16 404 -->
      <div class="space-y-3">
        <p class="text-7xl sm:text-8xl lg:text-9xl font-bold font-dot text-[var(--color-text)] tracking-tight leading-none select-none">
          404<span class="text-[var(--color-text-tertiary)] animate-pulse">_</span>
        </p>
        <h1 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-text)] tracking-tight">
          Route Not Found
        </h1>
        <p class="text-sm sm:text-base text-[var(--color-text-secondary)] max-w-xl mx-auto leading-relaxed">
          The requested path could not be resolved by the system router. It may have been moved, renamed, or never existed in the service registry.
        </p>
      </div>

      <!-- Minimal Diagnostic Terminal Card -->
      <div class="text-left rounded-2xl border-2 border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-4 sm:p-6 font-mono text-xs sm:text-sm text-[var(--color-text-secondary)] shadow-sm max-w-xl mx-auto space-y-3">
        <div class="flex items-center justify-between pb-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-tertiary)]">
          <div class="flex items-center gap-2">
            <span class="h-2.5 w-2.5 rounded-full bg-red-400/80"></span>
            <span class="h-2.5 w-2.5 rounded-full bg-amber-400/80"></span>
            <span class="h-2.5 w-2.5 rounded-full bg-emerald-400/80"></span>
            <span class="ml-2 font-medium">dispatcher.log</span>
          </div>
          <span class="text-[10px] uppercase tracking-wider font-semibold text-[var(--color-text-muted)]">GET</span>
        </div>
        <div class="space-y-1.5 font-mono">
          <p class="text-[var(--color-text)] break-all">
            <span class="text-[var(--color-text-tertiary)]">$</span> resolve_path --url="{{ currentRoutePath }}"
          </p>
          <p class="text-red-500 dark:text-red-400 font-medium">
            [error] status: 404 Not Found (no matching route handler)
          </p>
          <p class="text-[var(--color-text-tertiary)] text-[11px] sm:text-xs">
            fallback: redirect traffic to healthy endpoints
          </p>
        </div>
      </div>

      <!-- Action CTAs -->
      <div class="flex flex-wrap items-center justify-center gap-3 pt-2">
        <BaseButton to="/" label="Return to Home" />
        <router-link
          to="/projects"
          class="inline-flex items-center gap-2 rounded-lg border-2 border-[var(--color-border-strong)] px-5 sm:px-6 py-2.5 sm:py-3 text-sm font-semibold text-[var(--color-text)] transition hover:bg-[var(--color-surface-hover)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-border-strong)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]"
        >
          View Projects
          <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H7" />
          </svg>
        </router-link>
        <router-link
          to="/contact"
          class="inline-flex items-center gap-2 rounded-lg border-2 border-[var(--color-border)] px-5 sm:px-6 py-2.5 sm:py-3 text-sm font-semibold text-[var(--color-text-secondary)] transition hover:border-[var(--color-border-strong)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface-hover)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-border-strong)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]"
        >
          Contact Me
        </router-link>
      </div>

      <!-- Quick Navigation Shortcuts -->
      <div class="pt-8 border-t border-[var(--color-border)] max-w-lg mx-auto">
        <p class="text-xs uppercase tracking-widest font-semibold text-[var(--color-text-tertiary)] font-dot mb-3">
          Available Sections
        </p>
        <div class="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm font-medium text-[var(--color-text-secondary)]">
          <router-link to="/" class="hover:text-[var(--color-text)] transition-colors">/home</router-link>
          <span class="text-[var(--color-border)]">•</span>
          <router-link to="/projects" class="hover:text-[var(--color-text)] transition-colors">/projects</router-link>
          <span class="text-[var(--color-border)]">•</span>
          <router-link to="/experience" class="hover:text-[var(--color-text)] transition-colors">/experience</router-link>
          <span class="text-[var(--color-border)]">•</span>
          <router-link to="/contact" class="hover:text-[var(--color-text)] transition-colors">/contact</router-link>
        </div>
      </div>

    </div>
  </DefaultLayout>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useHead } from '@unhead/vue'
import DefaultLayout from '../layouts/DefaultLayout.vue'
import BaseButton from '../components/common/BaseButton.vue'

const route = useRoute()
const currentRoutePath = computed(() => route?.fullPath || '/unknown-path')

useHead({
  title: '404: Page Not Found — Hadinata Jenta',
  meta: [
    { name: 'robots', content: 'noindex, nofollow' },
    {
      name: 'description',
      content: 'The page you are looking for does not exist on Hadinata Jenta portfolio.'
    }
  ]
})
</script>
