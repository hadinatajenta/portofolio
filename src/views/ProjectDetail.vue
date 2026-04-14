<template>
  <DefaultLayout>

    <!-- Not Found -->
    <div v-if="!project" class="flex flex-col items-center justify-center min-h-[40vh] gap-4 text-center">
      <p class="text-4xl font-bold text-black/10">404</p>
      <p class="text-lg font-semibold text-black">Project not found</p>
      <router-link
        :to="{ name: 'projects' }"
        class="text-sm font-semibold text-black underline underline-offset-4 hover:text-black/60 transition-colors"
      >
        ← Back to Projects
      </router-link>
    </div>

    <template v-else>
      <!-- Page Header -->
      <div class="pb-6 mb-8 border-b border-black/8">
        <router-link
          :to="{ name: 'projects' }"
          class="inline-flex items-center gap-1.5 text-xs font-semibold text-black/40 hover:text-black transition-colors mb-4"
        >
          <svg class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          All Projects
        </router-link>

        <div class="flex items-start justify-between gap-4 flex-wrap">
          <div class="space-y-1.5">
            <div class="flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-wide text-black/35">
              <span class="flex items-center gap-1.5">
                <span class="h-1.5 w-1.5 rounded-full" :class="project.isPrivate ? 'bg-amber-400' : 'bg-emerald-400'"></span>
                {{ project.type }}
              </span>
              <span v-if="project.domain">· {{ project.domain }}</span>
              <span>· {{ project.year }}</span>
            </div>
            <h1 class="text-3xl sm:text-4xl font-bold text-black leading-tight">{{ project.title }}</h1>
          </div>

          <div class="flex items-center gap-3 flex-shrink-0">
            <span class="text-xs font-bold uppercase tracking-wide px-3 py-1.5 rounded-full border" :class="statusBadgeClass">
              {{ project.status }}
            </span>
            <a
              v-if="project.link"
              :href="project.link"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1.5 rounded-lg border-2 border-black bg-black px-4 py-2 text-xs font-semibold text-white transition hover:bg-black/80"
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
      <div class="flex gap-8 items-start">

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
const { getProjectById } = useProjectsData()

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
  if (s === 'In production' || s === 'Live') return 'border-emerald-200 bg-emerald-50 text-emerald-700'
  if (s === 'Launched') return 'border-sky-200 bg-sky-50 text-sky-700'
  return 'border-black/10 bg-black/[0.02] text-black/50'
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
