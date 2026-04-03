<template>
  <DefaultLayout>
    <section class="space-y-12">
      <div class="space-y-6">
        <h1 class="text-5xl sm:text-6xl font-bold leading-tight text-black">
          My work history
        </h1>
        <p class="max-w-2xl text-lg text-black/60">
          Full-time roles, freelance partnerships, and short-term contracts spanning six years across startups,
          agencies, and enterprises.
        </p>
      </div>

      <div class="relative space-y-8">
        <div class="relative space-y-12 sm:space-y-16">
          <article v-for="(item, index) in experiences" :key="index"
            class="relative grid gap-8 sm:grid-cols-[200px,1fr]">
            <div class="relative space-y-4">
              <div class="flex flex-col items-start justify-between sm:flex-row sm:items-center sm:gap-4 mb-4">
                <div>
                  <p class="text-xl font-bold text-black">
                    {{ item.title }}
                  </p>
                  <p class="text-sm text-black/60">
                    {{ item.company }}
                  </p>
                </div>
                <div>
                  <time class="text-sm font-bold leading-tight text-black">
                    {{ item.period }}
                  </time>
                </div>
              </div>

              <p class="text-base leading-relaxed text-black/60">
                {{ item.description }}
              </p>

              <div v-if="item.highlights" class="space-y-3">
                <ul class="ml-5 space-y-2 text-sm text-black/60">
                  <li v-for="(highlight, idx) in item.highlights" :key="idx" class="flex gap-3">
                    <span class="mt-1.5 h-1 w-1 rounded-full bg-black flex-shrink-0"></span>
                    <span>{{ highlight }}</span>
                  </li>
                </ul>
              </div>

              <div v-if="item.tags" class="flex flex-wrap gap-2 pt-2">
                <span v-for="tag in item.tags" :key="tag" class="tag-pill">
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
import DefaultLayout from '../layouts/DefaultLayout.vue'
import { useExperienceData } from '../composables/useExperienceData'

const { experiences } = useExperienceData()
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
  background: rgba(0, 0, 0, 0.08);
  border: 2px solid rgba(0, 0, 0, 0.1);
  color: rgba(0, 0, 0, 0.7);
  transition: border 0.2s ease, background 0.2s ease, color 0.2s ease;
}

.tag-pill:hover {
  border-color: rgba(0, 0, 0, 0.2);
  background: rgba(0, 0, 0, 0.12);
  color: rgba(0, 0, 0, 0.9);
}

@media (max-width: 640px) {
  .tag-pill {
    padding: 0.35rem 0.8rem;
    font-size: 0.65rem;
  }
}
</style>
