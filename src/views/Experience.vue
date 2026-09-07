<template>
  <DefaultLayout>
    <section class="space-y-12">
      <div class="space-y-4 sm:space-y-6">
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-[var(--color-text)]">
          Hadinata Jenta — Work History
        </h1>
        <p class="max-w-2xl text-base sm:text-lg text-[var(--color-text-secondary)]">
          Full-time roles, freelance partnerships, and short-term contracts — from backend engineering at
          Bank Rakyat Indonesia (BRI) to teaching at Sumatera Institute of Technology (ITERA).
        </p>
      </div>

      <div class="space-y-6 sm:space-y-8">
        <article v-for="(item, index) in experiences" :key="index"
          class="group relative rounded-2xl border-2 border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-6 sm:p-8 transition-all duration-300 hover:border-[var(--color-border-hover)] hover:shadow-lg space-y-5">
          
          <!-- Role Header -->
          <div class="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4">
            <div>
              <h2 class="text-xl sm:text-2xl font-bold text-[var(--color-text)]">
                {{ item.title }}
              </h2>
              <p class="text-sm sm:text-base font-medium text-[var(--color-text-secondary)] mt-0.5">
                {{ item.company }}
              </p>
            </div>
            <div class="flex-shrink-0">
              <time
                :datetime="item.dateEnd ? item.dateStart + '/' + item.dateEnd : item.dateStart"
                class="text-xs sm:text-sm font-bold text-[var(--color-text-tertiary)] uppercase tracking-wider font-dot"
              >
                {{ item.period }}
              </time>
            </div>
          </div>

          <!-- Tech Stack Badges (Instant Recruiter Scannability) -->
          <div v-if="item.tags" class="flex flex-wrap items-center gap-1.5 pt-0.5 pb-1 border-b border-[var(--color-border)]">
            <span v-for="tag in item.tags" :key="tag"
              class="inline-flex items-center text-[11px] sm:text-xs font-semibold uppercase tracking-wide px-2.5 py-1 rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-secondary)] font-dot transition-colors group-hover:border-[var(--color-border-strong)]">
              {{ tag }}
            </span>
          </div>

          <!-- Description -->
          <p class="text-sm sm:text-base leading-relaxed text-[var(--color-text-secondary)]">
            {{ item.description }}
          </p>

          <!-- Key Highlights -->
          <div v-if="item.highlights" class="space-y-2.5 pt-1">
            <p class="text-[11px] font-bold uppercase tracking-widest text-[var(--color-text-muted)] font-dot">Key Responsibilities &amp; Impact</p>
            <ul class="ml-1 space-y-2 text-sm text-[var(--color-text-secondary)]">
              <li v-for="(highlight, idx) in item.highlights" :key="idx" class="flex gap-3">
                <span class="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--color-text-tertiary)] flex-shrink-0"></span>
                <span class="leading-relaxed">{{ highlight }}</span>
              </li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  </DefaultLayout>
</template>

<script setup>
import { useHead } from '@unhead/vue'
import DefaultLayout from '../layouts/DefaultLayout.vue'
import { useExperienceData } from '../composables/useExperienceData'

const { experiences } = useExperienceData()

useHead({
  title: 'Experience — Hadinata Jenta',
  meta: [
    {
      name: 'description',
      content: 'Work history of Hadinata Jenta — Backend Developer at Bank Rakyat Indonesia (BRI), Lecturer Assistant at Sumatera Institute of Technology (ITERA), and Full Stack Developer across startups and freelance projects.'
    },
    { property: 'og:title', content: 'Experience — Hadinata Jenta' },
    { property: 'og:description', content: 'Work history of Hadinata Jenta — backend engineering at BRI, teaching at ITERA, and full-stack freelance development.' },
    { property: 'og:url', content: 'https://hadinata.me/experience' },
    { name: 'twitter:title', content: 'Experience — Hadinata Jenta' },
    { name: 'twitter:description', content: 'Work history of Hadinata Jenta — Backend Developer at BRI and Full Stack Developer.' },
  ],
  link: [
    { rel: 'canonical', href: 'https://hadinata.me/experience' }
  ],
  script: [
    {
      key: 'work-history-schema',
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ProfilePage',
        mainEntity: {
          '@type': 'Person',
          name: 'Hadinata Jenta',
          url: 'https://hadinata.me',
          worksFor: {
            '@type': 'Organization',
            name: 'Bank Rakyat Indonesia (BRI)'
          },
          alumniOf: {
            '@type': 'EducationalOrganization',
            name: 'Sumatera Institute of Technology (ITERA)',
            sameAs: 'https://itera.ac.id'
          }
        }
      })
    }
  ]
})
</script>

<style scoped>
.tag-pill {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.4rem 0.9rem;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  border-width: 2px;
  transition: border 0.2s ease, background 0.2s ease, color 0.2s ease;
}

.tag-pill:hover {
}

@media (max-width: 640px) {
  .tag-pill {
    padding: 0.35rem 0.8rem;
    font-size: 0.65rem;
  }
}
</style>
