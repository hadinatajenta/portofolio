<template>
  <tr
    class="group border-b border-[var(--color-border)] hover:bg-[var(--color-surface-hover)] transition-colors"
  >
    <!-- Project info -->
    <td class="px-5 py-4 align-top w-[35%]">
      <div class="space-y-1.5">
        <RouterLink
          :to="{ name: 'project-detail', params: { id: project.id } }"
          class="text-sm font-bold text-[var(--color-text)] hover:text-[var(--color-text-secondary)] focus:outline-none focus-visible:underline transition-colors block"
        >
          {{ project.title }}
        </RouterLink>
        <p class="text-xs text-[var(--color-text-secondary)] line-clamp-2 leading-relaxed">
          {{ project.shortDescription }}
        </p>
        <div class="flex items-center gap-2 text-[10px] uppercase tracking-wide text-[var(--color-text-muted)] pt-1">
          <span class="h-1.5 w-1.5 rounded-full flex-shrink-0" :class="project.isPrivate ? 'bg-amber-400' : 'bg-emerald-400'"></span>
          <span class="font-semibold">{{ project.type }}</span>
        </div>
      </div>
    </td>

    <!-- Stack -->
    <td class="px-5 py-4 align-top hidden md:table-cell">
      <div class="flex flex-wrap gap-1">
        <span
          v-for="tech in project.stack.slice(0, 3)"
          :key="tech"
          class="rounded-full bg-[var(--color-surface)] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[var(--color-text-tertiary)] border border-[var(--color-border)] font-dot"
        >
          {{ tech }}
        </span>
        <span
          v-if="project.stack.length > 3"
          class="rounded-full bg-[var(--color-surface)] px-2 py-0.5 text-[10px] font-semibold text-[var(--color-text-muted)] border border-[var(--color-border)] font-dot"
        >
          +{{ project.stack.length - 3 }}
        </span>
      </div>
    </td>

    <!-- Artifacts -->
    <td class="px-5 py-4 align-top hidden lg:table-cell text-xs text-[var(--color-text-secondary)]">
      {{ artifactSummary }}
    </td>

    <!-- Status -->
    <td class="px-5 py-4 align-top">
      <span class="text-[10px] font-bold uppercase tracking-wider" :class="statusColor">
        {{ project.status }}
      </span>
    </td>

    <!-- Year -->
    <td class="px-5 py-4 align-top text-right text-xs font-medium text-[var(--color-text-secondary)]">
      {{ project.year }}
    </td>

    <!-- Arrow -->
    <td class="px-5 py-4 align-middle text-right">
      <RouterLink
        :to="{ name: 'project-detail', params: { id: project.id } }"
        :aria-label="`View details for ${project.title}`"
        class="inline-flex items-center justify-center p-1 rounded hover:bg-[var(--color-surface-hover)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-border-strong)]"
      >
        <svg class="inline-block h-4 w-4 text-[var(--color-border)] group-hover:text-[var(--color-text)] transition-colors group-hover:translate-x-0.5 transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </RouterLink>
    </td>
  </tr>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { getArtifactSummary } from '../../composables/useProjectsData'

const props = defineProps({
  project: { type: Object, required: true }
})

const artifactSummary = computed(() => getArtifactSummary(props.project))

const statusColor = computed(() => {
  const s = props.project.status
  if (s === 'In production' || s === 'Live') return 'text-emerald-600 dark:text-emerald-400'
  if (s === 'Launched') return 'text-sky-600 dark:text-sky-400'
  if (s === 'Completed') return 'text-[var(--color-text-tertiary)]'
  return 'text-[var(--color-text-muted)]'
})
</script>
