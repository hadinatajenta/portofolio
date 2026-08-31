<template>
  <DefaultLayout>

    <!-- Loading -->
    <div v-if="isLoading && !project" class="flex flex-col items-center justify-center min-h-[40vh] gap-4 text-center">
      <p class="text-lg font-semibold text-[var(--color-text-tertiary)]">Loading project...</p>
    </div>

    <!-- Not Found -->
    <div v-else-if="!project" class="flex flex-col items-center justify-center min-h-[40vh] gap-4 text-center">
      <p class="text-4xl font-bold text-[var(--color-border)]">404</p>
      <p class="text-lg font-semibold text-[var(--color-text)]">Project not found</p>
      <router-link
        :to="{ name: 'projects' }"
        class="text-sm font-semibold text-[var(--color-text)] underline underline-offset-4 hover:text-[var(--color-text-secondary)] transition-colors"
      >
        ← Back to Projects
      </router-link>
    </div>

    <template v-else>
      <!-- Page Header -->
      <div class="pb-6 mb-8 border-b border-[var(--color-border)]">
        <router-link
          :to="{ name: 'projects' }"
          class="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-text-tertiary)] hover:text-[var(--color-text)] transition-colors mb-4"
        >
          <svg class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          All Projects
        </router-link>

        <div class="space-y-3 sm:space-y-0 sm:flex sm:items-start sm:justify-between sm:gap-4">
          <div class="space-y-1.5 min-w-0">
            <div class="flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-wide text-[var(--color-text-muted)]">
              <span class="flex items-center gap-1.5">
                <span class="h-1.5 w-1.5 rounded-full" :class="project.isPrivate ? 'bg-amber-400' : 'bg-emerald-400'"></span>
                {{ project.type }}
              </span>
              <span v-if="project.domain">· {{ project.domain }}</span>
              <span>· {{ project.year }}</span>
            </div>
            <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--color-text)] leading-tight">{{ project.title }}</h1>
          </div>

          <div class="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <span class="text-[10px] sm:text-xs font-bold uppercase tracking-wide px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full border" :class="statusBadgeClass">
              {{ project.status }}
            </span>
            <a
              v-if="project.link"
              :href="project.link"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1.5 rounded-lg border-2 border-[var(--color-btn-bg)] bg-[var(--color-btn-bg)] px-3 sm:px-4 py-1.5 sm:py-2 text-xs font-semibold text-[var(--color-btn-text)] transition hover:opacity-80"
            >
              Visit
              <svg class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14 3h7m0 0v7m0-7L10 14" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 10v11h11" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Body -->
      <div class="flex flex-col md:flex-row gap-4 md:gap-8 items-start">

        <!-- Sidebar Nav -->
        <ProjectSidebar
          :sections="availableSections"
          :active="activeSection"
          @select="setSection"
        />

        <!-- Content -->
        <main class="flex-1 min-w-0">
          <SectionOverview
            v-if="activeSection === 'overview'"
            :project="project"
            :artifact-counts="artifactCounts"
            @navigate="setSection"
          />
          <SectionCode
            v-else-if="activeSection === 'code'"
            :items="artifacts.code"
          />
          <SectionDesign
            v-else-if="activeSection === 'design'"
            :items="artifacts.design"
          />
          <SectionDiagrams
            v-else-if="activeSection === 'diagrams'"
            :items="artifacts.diagrams"
          />
          <SectionDocs
            v-else-if="activeSection === 'docs'"
            :items="artifacts.docs"
          />
        </main>

      </div>
    </template>

  </DefaultLayout>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useHead } from '@unhead/vue'
import DefaultLayout from '../layouts/DefaultLayout.vue'
import ProjectSidebar from '../components/projects/detail/ProjectSidebar.vue'
import SectionOverview from '../components/projects/detail/sections/SectionOverview.vue'
import SectionCode from '../components/projects/detail/sections/SectionCode.vue'
import SectionDesign from '../components/projects/detail/sections/SectionDesign.vue'
import SectionDiagrams from '../components/projects/detail/sections/SectionDiagrams.vue'
import SectionDocs from '../components/projects/detail/sections/SectionDocs.vue'
import { useProjectsData } from '../composables/useProjectsData'

const route = useRoute()
const { getProjectById, isLoading } = useProjectsData()

const project = computed(() => getProjectById(parseInt(route.params.id)))

const artifacts = computed(() => ({
  code: project.value?.artifacts?.code ?? [],
  design: project.value?.artifacts?.design ?? [],
  diagrams: project.value?.artifacts?.diagrams ?? [],
  docs: project.value?.artifacts?.docs ?? []
}))

const artifactCounts = computed(() => ({
  code: artifacts.value.code.length,
  design: artifacts.value.design.length,
  diagrams: artifacts.value.diagrams.length,
  docs: artifacts.value.docs.length
}))

// Only show sidebar sections that have content
const availableSections = computed(() => {
  if (!project.value) return []
  const sections = [{ id: 'overview', label: 'Overview' }]
  if (artifacts.value.code.length > 0) sections.push({ id: 'code', label: 'Code' })
  if (artifacts.value.design.length > 0) sections.push({ id: 'design', label: 'Design' })
  if (artifacts.value.diagrams.length > 0) sections.push({ id: 'diagrams', label: 'Diagrams' })
  if (artifacts.value.docs.length > 0) sections.push({ id: 'docs', label: 'Docs' })
  return sections
})

const activeSection = ref('overview')
const setSection = (id) => { activeSection.value = id }

const statusBadgeClass = computed(() => {
  const s = project.value?.status
  if (s === 'In production' || s === 'Live') return 'border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400'
  if (s === 'Launched') return 'border-sky-200 bg-sky-50 text-sky-700 dark:border-sky-800 dark:bg-sky-900/30 dark:text-sky-400'
  return 'border-[var(--color-border)] bg-[var(--color-surface-hover)] text-[var(--color-text-secondary)]'
})

useHead({
  title: computed(() => project.value ? `${project.value.title} — Hadinata Jenta` : 'Project — Hadinata Jenta'),
  meta: [
    {
      name: 'description',
      content: computed(() => project.value?.shortDescription ?? 'Project detail — Hadinata Jenta')
    }
  ]
})
</script>
