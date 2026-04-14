<template>
  <DefaultLayout>
    <div class="space-y-16">
      <!-- Hero: Positioning statement + stats -->
      <ProjectHero />

      <!-- Featured Projects -->
      <section class="space-y-8">
        <div class="space-y-1">
          <h2 class="text-2xl font-bold text-black">Featured Work</h2>
          <p class="text-sm text-black/50">Highest-impact projects with engineering depth.</p>
        </div>
        <div class="grid gap-8 lg:grid-cols-2">
          <FeaturedProjectCard
            v-for="project in featuredProjectsFull"
            :key="project.id"
            :project="project"
            @select="openModal"
            @open-link="openLink"
          />
        </div>
      </section>

      <!-- All Projects Archive -->
      <section class="space-y-6">
        <div class="space-y-1">
          <h2 class="text-2xl font-bold text-black">All Projects</h2>
          <p class="text-sm text-black/50">Filter by engineering type to find relevant work.</p>
        </div>
        <ProjectArchive @select="openModal" />
      </section>
    </div>

    <!-- Modal -->
    <ProjectModal
      :project="selectedProject"
      @close="closeModal"
    />
  </DefaultLayout>
</template>

<script setup>
import { useHead } from '@unhead/vue'
import { onBeforeUnmount, watch } from 'vue'
import DefaultLayout from '../layouts/DefaultLayout.vue'
import ProjectHero from '../components/projects/ProjectHero.vue'
import FeaturedProjectCard from '../components/projects/FeaturedProjectCard.vue'
import ProjectArchive from '../components/projects/ProjectArchive.vue'
import ProjectModal from '../components/projects/ProjectModal.vue'
import { useProjectsData } from '../composables/useProjectsData'
import { useDocumentScroll } from '../composables/useDocumentScroll'

const {
  selectedProject,
  featuredProjectsFull,
  selectProject,
  clearSelection,
  openProjectLink
} = useProjectsData()

const { toggleScroll } = useDocumentScroll()

const openModal = (project) => {
  selectProject(project)
}

const closeModal = () => {
  clearSelection()
}

const openLink = (url) => {
  openProjectLink(url)
}

watch(selectedProject, (value) => {
  toggleScroll(Boolean(value))
})

onBeforeUnmount(() => {
  toggleScroll(false)
})

useHead({
  title: 'Projects — Hadinata Jenta',
  meta: [
    {
      name: 'description',
      content: 'Engineering projects by Hadinata Jenta — distributed systems, microservices, web platforms, and backend applications built with Go, Laravel, Vue.js, and more.'
    },
    { property: 'og:title', content: 'Projects — Hadinata Jenta' },
    { property: 'og:description', content: 'Engineering projects by Hadinata Jenta — distributed systems, microservices, and backend applications.' },
    { property: 'og:url', content: 'https://hadinata.vercel.app/projects' },
    { name: 'twitter:title', content: 'Projects — Hadinata Jenta' },
    { name: 'twitter:description', content: 'Engineering projects by Hadinata Jenta — microservices, backend systems, and web platforms.' },
  ],
  link: [
    { rel: 'canonical', href: 'https://hadinata.vercel.app/projects' }
  ]
})
</script>
