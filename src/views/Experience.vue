<template>
  <DefaultLayout>
    <section class="space-y-12">
      <div class="space-y-6">
        <h1 class="text-5xl sm:text-6xl font-bold leading-tight text-[var(--color-text)]">
          Hadinata Jenta — Work History
        </h1>
        <p class="max-w-2xl text-lg text-[var(--color-text-secondary)]">
          Full-time roles, freelance partnerships, and short-term contracts — from backend engineering at
          Bank Rakyat Indonesia (BRI) to teaching at Sumatera Institute of Technology (ITERA).
        </p>
      </div>

      <div class="relative space-y-8">
        <div class="relative space-y-12 sm:space-y-16">
          <article v-for="(item, index) in experiences" :key="index"
            class="relative grid gap-8 sm:grid-cols-[200px,1fr]">
            <div class="relative space-y-4">
              <div class="flex flex-col items-start justify-between sm:flex-row sm:items-center sm:gap-4 mb-4">
                <div>
                  <p class="text-xl font-bold text-[var(--color-text)]">
                    {{ item.title }}
                  </p>
                  <p class="text-sm text-[var(--color-text-secondary)]">
                    {{ item.company }}
                  </p>
                </div>
                <div>
                  <time
                    :datetime="item.dateEnd ? item.dateStart + '/' + item.dateEnd : item.dateStart"
                    class="text-sm font-bold leading-tight text-[var(--color-text)]"
                  >
                    {{ item.period }}
                  </time>
                </div>
              </div>

              <p class="text-base leading-relaxed text-[var(--color-text-secondary)]">
                {{ item.description }}
              </p>

              <div v-if="item.highlights" class="space-y-3">
                <ul class="ml-5 space-y-2 text-sm text-[var(--color-text-secondary)]">
                  <li v-for="(highlight, idx) in item.highlights" :key="idx" class="flex gap-3">
                    <span class="mt-1.5 h-1 w-1 rounded-full bg-[var(--color-text)] flex-shrink-0"></span>
                    <span>{{ highlight }}</span>
                  </li>
                </ul>
              </div>

              <div v-if="item.tags" class="flex flex-wrap gap-2 pt-2">
                <span v-for="tag in item.tags" :key="tag" class="tag-pill text-[var(--color-text-secondary)] bg-[var(--color-surface-hover)] border-[var(--color-border)] hover:bg-[var(--color-border-hover)] hover:text-[var(--color-text)] hover:border-[var(--color-border-hover)]">
                  {{ tag }}
                </span>
              </div>
            </div>
          </article>
        </div>
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
