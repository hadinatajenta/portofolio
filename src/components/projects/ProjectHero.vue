<template>
  <section class="space-y-4">
    <p class="text-xs font-bold uppercase tracking-widest text-black/30">Hadinata Jenta · Engineering Portfolio</p>
    <h1 class="text-4xl sm:text-5xl font-bold leading-tight text-black max-w-2xl">
      Systems I've built, decisions I've made.
    </h1>
    <p class="text-lg text-black/60 max-w-xl">
      Each project below reflects a real engineering problem — with context on what was built, why, and what I'd do differently.
    </p>
    <div class="flex flex-wrap gap-5 pt-4">
      <div v-for="stat in meaningfulStats" :key="stat.label" class="flex flex-col gap-1">
        <span class="text-2xl font-bold text-black">{{ stat.value }}</span>
        <span class="text-xs font-semibold uppercase tracking-wide text-black/40">{{ stat.label }}</span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useProjectsData } from '../../composables/useProjectsData'

const { projectStats } = useProjectsData()

// Only display stats that add real signal
const meaningfulStats = computed(() => {
  const stats = []
  if (projectStats.value.total > 0) {
    stats.push({ value: projectStats.value.total, label: 'Projects' })
  }
  if (projectStats.value.live > 0) {
    stats.push({ value: projectStats.value.live, label: 'Open source' })
  }
  if (projectStats.value.confidential > 0) {
    stats.push({ value: projectStats.value.confidential, label: 'Confidential' })
  }
  return stats
})
</script>
