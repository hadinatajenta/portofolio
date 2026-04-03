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
          ? 'border-black bg-black text-white'
          : 'border-black/10 text-black/50 hover:border-black/20 hover:text-black/70'"
        @click="setFilter(filter)"
      >
        {{ filter }}
      </button>
      <span class="text-xs text-black/40 ml-2">{{ filteredProjects.length }} projects</span>
    </div>

    <!-- Archive Grid -->
    <div class="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      <article
        v-for="project in filteredProjects"
        :key="project.id"
        class="group flex flex-col rounded-xl border-2 border-black/8 bg-white p-6 transition-all duration-300 hover:border-black/20 hover:shadow-md cursor-pointer"
        @click="$emit('select', project)"
      >
        <!-- Type & Year -->
        <div class="flex items-center justify-between text-[11px] uppercase tracking-wide text-black/40">
          <span class="flex items-center gap-2">
            <span class="h-1.5 w-1.5 rounded-full" :class="project.isPrivate ? 'bg-amber-500' : 'bg-emerald-500'"></span>
            <span class="font-semibold">{{ project.type }}</span>
            <span v-if="project.domain" class="font-normal">· {{ project.domain }}</span>
          </span>
          <span>{{ project.year }}</span>
        </div>

        <!-- Title & Description -->
        <h3 class="mt-4 text-lg font-bold text-black group-hover:text-black/80 transition-colors">{{ project.title }}</h3>
        <p class="mt-2 text-sm leading-relaxed text-black/55 line-clamp-2 flex-grow">{{ project.shortDescription }}</p>

        <!-- Role -->
        <p class="mt-3 text-[11px] text-black/40">
          <span class="font-bold uppercase tracking-wider">Role:</span> {{ project.myRole.split('—')[0] }}
        </p>

        <!-- Stack -->
        <div class="mt-4 flex flex-wrap gap-1.5 pt-3 border-t border-black/6">
          <span
            v-for="tech in project.stack.slice(0, 4)"
            :key="tech"
            class="rounded-full bg-black/4 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-black/50"
          >
            {{ tech }}
          </span>
          <span v-if="project.stack.length > 4" class="rounded-full bg-black/4 px-2 py-0.5 text-[10px] font-semibold text-black/40">
            +{{ project.stack.length - 4 }}
          </span>
        </div>

        <!-- Footer -->
        <div class="mt-4 flex items-center justify-between">
          <span class="text-xs font-semibold text-black/60 group-hover:text-black transition-colors inline-flex items-center gap-1.5">
            Details
            <svg class="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
          <span v-if="project.link" class="text-[10px] font-semibold uppercase tracking-wide text-emerald-600">Live</span>
          <span v-else class="text-[10px] font-semibold uppercase tracking-wide text-black/30">Private</span>
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
