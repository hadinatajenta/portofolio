<template>
  <article
    class="group flex flex-col rounded-xl border border-black/8 bg-white p-6 transition-all duration-200 hover:border-black/25 hover:shadow-md cursor-pointer"
    @click="navigate"
  >
    <!-- Type + Year -->
    <div class="flex items-center justify-between text-[11px] uppercase tracking-wide text-black/35">
      <span class="flex items-center gap-2">
        <span class="h-1.5 w-1.5 rounded-full flex-shrink-0" :class="project.isPrivate ? 'bg-amber-400' : 'bg-emerald-400'"></span>
        <span class="font-semibold">{{ project.type }}</span>
        <span v-if="project.domain" class="font-normal">· {{ project.domain }}</span>
      </span>
      <span class="font-medium">{{ project.year }}</span>
    </div>

    <!-- Title + Description -->
    <h3 class="mt-4 text-lg font-bold text-black group-hover:text-black/80 transition-colors leading-snug">
      {{ project.title }}
    </h3>
    <p class="mt-2 text-sm leading-relaxed text-black/55 line-clamp-2 flex-grow">
      {{ project.shortDescription }}
    </p>

    <!-- Artifact Summary -->
    <p v-if="artifactSummary" class="mt-3 text-[11px] font-medium text-black/35 tracking-wide">
      {{ artifactSummary }}
    </p>

    <!-- Stack -->
    <div class="mt-4 flex flex-wrap gap-1.5 pt-3 border-t border-black/6">
      <span
        v-for="tech in project.stack.slice(0, 4)"
        :key="tech"
        class="rounded-full bg-black/[0.04] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-black/50"
      >
        {{ tech }}
      </span>
      <span
        v-if="project.stack.length > 4"
        class="rounded-full bg-black/[0.04] px-2 py-0.5 text-[10px] font-semibold text-black/35"
      >
        +{{ project.stack.length - 4 }}
      </span>
    </div>

    <!-- Footer -->
    <div class="mt-4 flex items-center justify-between">
      <span class="text-xs font-semibold text-black/50 group-hover:text-black transition-colors inline-flex items-center gap-1.5">
        View details
        <svg class="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </span>
      <span
        class="text-[10px] font-bold uppercase tracking-wider"
        :class="statusColor"
      >
        {{ project.status }}
      </span>
    </div>
  </article>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { getArtifactSummary } from '../../composables/useProjectsData'

const props = defineProps({
  project: { type: Object, required: true }
})

const router = useRouter()

const artifactSummary = computed(() => getArtifactSummary(props.project))

const statusColor = computed(() => {
  const s = props.project.status
  if (s === 'In production' || s === 'Live') return 'text-emerald-600'
  if (s === 'Launched') return 'text-sky-600'
  if (s === 'Completed') return 'text-black/40'
  return 'text-black/30'
})

const navigate = () => {
  router.push({ name: 'project-detail', params: { id: props.project.id } })
}
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
