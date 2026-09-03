import { computed, ref } from 'vue'
import { localDb } from '../data/localDb'

/**
 * Returns a concise artifact-count string for a project card.
 * e.g. "1 repo · 2 designs · 3 diagrams"
 */
export function getArtifactSummary(project) {
  const a = project.artifacts ?? {}
  const parts = []
  const isReal = (item) => {
    if (!item) return false
    const desc = (item.description || '').toLowerCase()
    return !desc.includes('placeholder') && !desc.includes('replace with')
  }
  const code = (a.code ?? []).filter((item) => item.repoUrl && isReal(item))
  const design = (a.design ?? []).filter((item) => (item.thumbnail || item.figmaUrl) && isReal(item))
  const diagrams = (a.diagrams ?? []).filter((item) => item.imageUrl && isReal(item))
  const docs = (a.docs ?? []).filter((item) => item.title && (item.preview || item.url) && isReal(item))

  if (code.length) parts.push(`${code.length} repo${code.length > 1 ? 's' : ''}`)
  if (design.length) parts.push(`${design.length} design${design.length > 1 ? 's' : ''}`)
  if (diagrams.length) parts.push(`${diagrams.length} diagram${diagrams.length > 1 ? 's' : ''}`)
  if (docs.length) parts.push(`${docs.length} doc${docs.length > 1 ? 's' : ''}`)
  return parts.join(' · ') || null
}

const fallbackProjects = Array.isArray(localDb?.projects) ? localDb.projects : []
const projects = ref(fallbackProjects)
const selectedFilter = ref('All')
const selectedProject = ref(null)
const isLoading = ref(false)
const hasLoaded = ref(true)
const error = ref(null)

async function loadProjects() {
  return projects.value
}

/**
 * Composable for managing projects data, filtering, and artifact lookup.
 * Centralizes state and computed properties for the projects views.
 */
export function useProjectsData() {

  const typeFilters = computed(() => {
    const types = new Set(projects.value.map((p) => p.type))
    return ['All', ...Array.from(types).sort()]
  })

  const statusFilters = computed(() => {
    const statuses = new Set(projects.value.map((p) => p.status))
    return ['All', ...Array.from(statuses).sort()]
  })

  const stackFilters = computed(() => {
    const stacks = new Set()
    projects.value.forEach((project) => {
      project.stack.forEach((tech) => stacks.add(tech))
    })
    return ['All', ...Array.from(stacks).sort()]
  })

  const filteredProjects = computed(() => {
    if (selectedFilter.value === 'All') {
      return projects.value
    }

    return projects.value.filter(
      (project) =>
        project.type === selectedFilter.value ||
        project.stack.includes(selectedFilter.value)
    )
  })

  const featuredProjectsFull = computed(() => {
    return projects.value.filter((project) => project.featured)
  })

  const featuredProjects = computed(() => {
    return projects.value
      .filter((project) => project.featured)
      .map((project) => ({
        id: project.id,
        name: project.title,
        description: project.shortDescription,
        tags: project.stack,
        link: project.link
      }))
  })

  const projectStats = computed(() => {
    const total = projects.value.length
    const live = projects.value.filter((project) => !project.isPrivate).length
    const confidential = projects.value.filter((project) => project.isPrivate).length

    return { total, live, confidential }
  })

  const setFilter = (filter) => {
    selectedFilter.value = filter
  }

  const isActiveFilter = (filter) => {
    return selectedFilter.value === filter
  }

  const selectFeaturedProject = () => {
    const featured = projects.value.find((project) => project.featured)
    if (featured) {
      selectedProject.value = featured
    }
  }

  const selectProject = (project) => {
    selectedProject.value = project
  }

  const clearSelection = () => {
    selectedProject.value = null
  }

  const openProjectLink = (url) => {
    if (!url) return
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const getProjectById = (id) => {
    return projects.value.find((project) => project.id === Number(id)) || null
  }

  return {
    projects,
    selectedFilter,
    selectedProject,
    isLoading,
    hasLoaded,
    error,
    typeFilters,
    statusFilters,
    stackFilters,
    filteredProjects,
    featuredProjects,
    featuredProjectsFull,
    projectStats,
    setFilter,
    isActiveFilter,
    selectFeaturedProject,
    selectProject,
    clearSelection,
    openProjectLink,
    getProjectById,
    loadProjects
  }
}
