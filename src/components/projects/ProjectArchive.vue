<template>
  <section class="space-y-8">
    <!-- Filter Bar -->
    <div class="flex flex-wrap items-center gap-3">
      <button
        v-for="filter in typeFilters"
        :key="filter"
        type="button"
        class="rounded-full border-2 px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-all duration-200"
        :class="isActiveFilter(filter)
          ? 'border-[var(--color-border-strong)] bg-[var(--color-text)] text-[var(--color-bg)]'
          : 'border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-border-hover)] hover:text-[var(--color-text)]'"
        @click="setFilter(filter)"
      >
        {{ filter }}
      </button>
      <span class="text-xs text-[var(--color-text-muted)] ml-2">{{ filteredProjects.length }} projects</span>
    </div>

    <!-- Archive Grid -->
    <div class="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      <article
        v-for="project in filteredProjects"
        :key="project.id"
        class="group flex flex-col rounded-xl border-2 border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-all duration-300 hover:border-[var(--color-border-hover)] hover:shadow-md cursor-pointer"
        @click="$emit('select', project)"
      >
        <!-- Type & Year -->
        <div class="flex items-center justify-between text-[11px] uppercase tracking-wide text-[var(--color-text-muted)]">
          <span class="flex items-center gap-2">
            <span class="h-1.5 w-1.5 rounded-full" :class="project.isPrivate ? 'bg-amber-400' : 'bg-emerald-400'"></span>
            <span class="font-semibold">{{ project.type }}</span>
            <span v-if="project.domain" class="font-normal">· {{ project.domain }}</span>
          </span>
          <span>{{ project.year }}</span>
        </div>

        <!-- Title & Description -->
        <h3 class="mt-4 text-lg font-bold text-[var(--color-text)] group-hover:text-[var(--color-text-secondary)] transition-colors">{{ project.title }}</h3>
        <p class="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)] line-clamp-2 flex-grow">{{ project.shortDescription }}</p>

        <!-- Role -->
        <p class="mt-3 text-[11px] text-[var(--color-text-muted)]">
          <span class="font-bold uppercase tracking-wider">Role:</span> {{ project.myRole.split('—')[0] }}
        </p>

        <!-- Stack -->
        <div class="mt-4 flex flex-wrap gap-1.5 pt-3 border-t border-[var(--color-border)]">
          <span
            v-for="tech in project.stack.slice(0, 4)"
            :key="tech"
            class="rounded-full bg-[var(--color-surface-hover)] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[var(--color-text-secondary)] border border-[var(--color-border)]"
          >
            {{ tech }}
          </span>
          <span v-if="project.stack.length > 4" class="rounded-full bg-[var(--color-surface-hover)] px-2 py-0.5 text-[10px] font-semibold text-[var(--color-text-muted)] border border-[var(--color-border)]">
            +{{ project.stack.length - 4 }}
          </span>
        </div>

        <!-- Footer -->
        <div class="mt-4 flex items-center justify-between">
          <span class="text-xs font-semibold text-[var(--color-text-secondary)] group-hover:text-[var(--color-text)] transition-colors inline-flex items-center gap-1.5">
            Details
            <svg class="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
          <span v-if="project.link" class="text-[10px] font-semibold uppercase tracking-wide text-emerald-600 dark:text-emerald-400">Live</span>
          <span v-else class="text-[10px] font-semibold uppercase tracking-wide text-[var(--color-text-muted)]">Private</span>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
import { useProjectsData } from '../../composables/useProjectsData'

const { typeFilters, filteredProjects, setFilter, isActiveFilter } = useProjectsData()

defineEmits(['select'])
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
