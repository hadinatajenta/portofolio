<template>
  <DefaultLayout>
    <div class="space-y-10">

      <!-- Page Header -->
      <section class="space-y-5">
        <div class="flex items-end justify-between gap-4 flex-wrap">
          <div class="space-y-1">
            <p class="text-xs font-bold uppercase tracking-widest text-black/30">Hadinata Jenta · Engineering Portfolio</p>
            <h1 class="text-4xl sm:text-5xl font-bold leading-tight text-black">
              Systems I've built, decisions I've made.
            </h1>
          </div>
          <div class="hidden sm:flex items-center gap-6 text-center">
            <div v-for="stat in stats" :key="stat.label">
              <p class="text-2xl font-bold text-black">{{ stat.value }}</p>
              <p class="text-xs font-semibold uppercase tracking-wide text-black/40 mt-0.5">{{ stat.label }}</p>
            </div>
          </div>
        </div>
        <p class="text-base text-black/60 max-w-2xl leading-relaxed">
          Each project reflects a real engineering problem — with context on what was built, why, and the trade-offs made along the way.
        </p>
      </section>

      <!-- Control Bar -->
      <ProjectControlBar
        v-model:search="search"
        v-model:filterType="filterType"
        v-model:filterStatus="filterStatus"
        v-model:sortBy="sortBy"
        v-model:viewMode="viewMode"
        :types="allTypes"
        :statuses="allStatuses"
        :count="processedProjects.length"
      />

      <!-- Empty state -->
      <div v-if="processedProjects.length === 0" class="flex flex-col items-center justify-center py-20 gap-3 text-center">
        <p class="text-2xl font-bold text-black/20">No projects match</p>
        <p class="text-sm text-black/40">Try adjusting your filters or search term.</p>
        <button type="button" class="mt-2 text-sm font-semibold text-black underline underline-offset-4" @click="resetFilters">
          Clear all filters
        </button>
      </div>

      <!-- Grid View -->
      <div v-else-if="viewMode === 'grid'" class="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        <ProjectCard v-for="project in processedProjects" :key="project.id" :project="project" />
      </div>

      <!-- Table View -->
      <div v-else class="overflow-x-auto rounded-xl border border-black/8">
        <table class="w-full text-sm">
          <thead>
            <tr class="border-b border-black/8 text-left">
              <th class="px-5 py-3.5 text-[11px] font-bold uppercase tracking-wider text-black/40 w-[35%]">Project</th>
              <th class="px-5 py-3.5 text-[11px] font-bold uppercase tracking-wider text-black/40 hidden md:table-cell">Stack</th>
              <th class="px-5 py-3.5 text-[11px] font-bold uppercase tracking-wider text-black/40 hidden lg:table-cell">Artifacts</th>
              <th class="px-5 py-3.5 text-[11px] font-bold uppercase tracking-wider text-black/40">Status</th>
              <th class="px-5 py-3.5 text-[11px] font-bold uppercase tracking-wider text-black/40 text-right">Year</th>
              <th class="w-10"></th>
            </tr>
          </thead>
          <tbody>
            <ProjectTableRow v-for="project in processedProjects" :key="project.id" :project="project" />
          </tbody>
        </table>
      </div>

    </div>
  </DefaultLayout>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useHead } from '@unhead/vue'
import DefaultLayout from '../layouts/DefaultLayout.vue'
import ProjectCard from '../components/projects/ProjectCard.vue'
import ProjectControlBar from '../components/projects/ProjectControlBar.vue'
import ProjectTableRow from '../components/projects/ProjectTableRow.vue'
import { useProjectsData } from '../composables/useProjectsData'

const { projects, projectStats } = useProjectsData()

// Control bar state
const search = ref('')
const filterType = ref('All')
const filterStatus = ref('All')
const sortBy = ref('year')
const viewMode = ref('grid')

// Unique values for filters
const allTypes = computed(() => ['All', ...new Set(projects.value.map((p) => p.type)).values()].sort((a, b) => a === 'All' ? -1 : a.localeCompare(b)))
const allStatuses = computed(() => ['All', ...new Set(projects.value.map((p) => p.status)).values()].sort((a, b) => a === 'All' ? -1 : a.localeCompare(b)))

// Stats for the header
const stats = computed(() => [
  { label: 'Projects', value: projectStats.value.total },
  { label: 'Open Source', value: projectStats.value.live },
  { label: 'Confidential', value: projectStats.value.confidential }
])

// Filtered + sorted list
const processedProjects = computed(() => {
  let result = projects.value

  if (search.value.trim()) {
    const q = search.value.toLowerCase()
    result = result.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q) ||
        p.stack.some((t) => t.toLowerCase().includes(q))
    )
  }

  if (filterType.value !== 'All') {
    result = result.filter((p) => p.type === filterType.value)
  }

  if (filterStatus.value !== 'All') {
    result = result.filter((p) => p.status === filterStatus.value)
  }

  if (sortBy.value === 'year') return [...result].sort((a, b) => b.year - a.year)
  if (sortBy.value === 'name') return [...result].sort((a, b) => a.title.localeCompare(b.title))
  return result
})

const resetFilters = () => {
  search.value = ''
  filterType.value = 'All'
  filterStatus.value = 'All'
  sortBy.value = 'year'
}

useHead({
  title: 'Projects — Hadinata Jenta',
  meta: [
    {
      name: 'description',
      content: 'Engineering projects by Hadinata Jenta — distributed systems, microservices, web platforms, and backend applications built with Go, Laravel, Vue.js, and more.'
    },
    { property: 'og:title', content: 'Projects — Hadinata Jenta' },
    { property: 'og:url', content: 'https://hadinata.vercel.app/projects' },
  ],
  link: [{ rel: 'canonical', href: 'https://hadinata.vercel.app/projects' }]
})
</script>
