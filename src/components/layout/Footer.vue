<template>
  <footer class="relative overflow-hidden bg-white border-t border-black/10 pt-20 text-black">
    <div class="relative mx-auto max-w-6xl px-6 pb-16">
      <div class="rounded-2xl border-2 border-black bg-black/5 px-8 py-10">
        <div class="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div class="space-y-3 text-center md:text-left">
            <span class="inline-flex items-center justify-center rounded-lg border-2 border-black bg-black px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">
              {{ ctaBadge }}
            </span>
            <h3 class="text-3xl font-bold leading-tight sm:text-4xl">
              {{ ctaTitle }}
            </h3>
            <p class="mx-auto max-w-xl text-base text-black/60 md:mx-0">
              {{ ctaDescription }}
            </p>
          </div>
          <router-link
            to="/contact"
            class="inline-flex w-full items-center justify-center gap-2 rounded-lg border-2 border-black bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-black/80 md:w-auto"
          >
            {{ ctaButtonLabel }}
            <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H7" />
            </svg>
          </router-link>
        </div>
      </div>

      <div class="mt-14 grid gap-12 lg:grid-cols-[1.3fr_1fr]">
        <div class="space-y-6">
          <div class="flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:gap-5">
            <div class="flex h-12 w-12 items-center justify-center rounded-full bg-black text-lg font-semibold text-white sm:h-14 sm:w-14">
              {{ initials }}
            </div>
            <div class="text-center sm:text-left">
              <p class="text-base font-semibold sm:text-lg">{{ name }}</p>
              <p class="text-sm text-black/60">{{ role }}</p>
            </div>
          </div>
          <p class="mx-auto max-w-xl text-base leading-relaxed text-black/60 sm:mx-0">
            {{ intro }}
          </p>
          <ul class="grid gap-3 sm:grid-cols-3">
            <li
              v-for="highlight in highlights"
              :key="highlight.label"
              class="rounded-lg border-2 border-black/10 bg-black/5 px-4 py-4 text-center sm:text-left"
            >
              <p class="text-xl font-bold text-black">{{ highlight.value }}</p>
              <p class="text-xs uppercase tracking-wider text-black/50">{{ highlight.label }}</p>
            </li>
          </ul>
        </div>

        <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-1">
          <div class="space-y-4">
            <h4 class="text-xs font-semibold uppercase tracking-wider text-black/50">Quick links</h4>
            <nav class="flex flex-col gap-2 text-sm text-black">
              <router-link
                v-for="menu in menus"
                :key="menu.index"
                :to="menu.route"
                class="group inline-flex items-center justify-between rounded-lg border-2 border-black/10 px-4 py-2 transition hover:border-black hover:bg-black/5"
              >
                <span class="transition group-hover:text-black">{{ menu.name }}</span>
                <svg class="h-4 w-4 text-black/40 transition group-hover:text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </router-link>
            </nav>
          </div>

          <div class="space-y-4">
            <h4 class="text-xs font-semibold uppercase tracking-wider text-black/50">Connect</h4>
            <div class="flex flex-wrap gap-3">
              <a
                v-for="social in socials"
                :key="social.name"
                :href="social.url"
                target="_blank"
                rel="noopener"
                class="social-icon"
                :aria-label="social.name"
                v-html="social.svg"
              ></a>
            </div>
            <div v-if="contactChips.length" class="flex flex-wrap gap-2">
              <a
                v-for="chip in contactChips"
                :key="chip.label"
                :href="chip.url"
                target="_blank"
                rel="noopener"
                class="contact-chip"
              >
                {{ chip.label }}
              </a>
            </div>
            <div class="rounded-2xl border border-white/10 bg-white/[0.07] px-4 py-4">
              <p class="text-[11px] uppercase tracking-[0.26em] text-gray-400">Based in</p>
              <p class="text-sm font-semibold text-white">{{ location }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-center text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <p>&copy; {{ currentYear }} {{ name }}. All rights reserved.</p>
        <p class="text-gray-400">Crafted with care across product, engineering, and collaboration.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useFooterData } from '../../composables/useFooterData'

// Composables
const {
  name,
  role,
  location,
  intro,
  ctaBadge,
  ctaTitle,
  ctaDescription,
  ctaButtonLabel,
  highlights,
  menus,
  socials,
  initials,
  contactChips,
  currentYear
} = useFooterData()
</script>

<style scoped>
.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 999px;
  border: 2px solid rgba(0, 0, 0, 0.12);
  background: rgba(0, 0, 0, 0.05);
  transition: border 0.3s ease, transform 0.3s ease;
}

.social-icon:hover {
  border-color: #000000;
  transform: translateY(-2px);
}

.contact-chip {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.45rem 1rem;
  border-radius: 999px;
  border: 2px solid #000000;
  color: #000000;
  background: rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.contact-chip:hover {
  border-color: #000000;
  color: #000000;
  background: rgba(0, 0, 0, 0.1);
}
</style>
