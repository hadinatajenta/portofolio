import { computed, ref } from 'vue'
import { apiGet } from '../services/apiClient'
import { localDb } from '../data/localDb'

/**
 * Returns a concise artifact-count string for a project card.
 * e.g. "1 repo · 2 designs · 3 diagrams"
 */
export function getArtifactSummary(project) {
  const a = project.artifacts ?? {}
  const parts = []
  if (a.code?.length) parts.push(`${a.code.length} repo${a.code.length > 1 ? 's' : ''}`)
  if (a.design?.length) parts.push(`${a.design.length} design${a.design.length > 1 ? 's' : ''}`)
  if (a.diagrams?.length) parts.push(`${a.diagrams.length} diagram${a.diagrams.length > 1 ? 's' : ''}`)
  if (a.docs?.length) parts.push(`${a.docs.length} doc${a.docs.length > 1 ? 's' : ''}`)
  return parts.join(' · ') || null
}

const fallbackProjects = Array.isArray(localDb?.projects) ? localDb.projects : []
const projects = ref(fallbackProjects)
const selectedFilter = ref('All')
const selectedProject = ref(null)
const isLoading = ref(false)
const hasLoaded = ref(false)
const error = ref(null)

let loadPromise = null

async function loadProjects(force = false) {
  if (!force && hasLoaded.value) return projects.value
  if (!force && loadPromise) return loadPromise

  isLoading.value = true
  error.value = null

  loadPromise = apiGet('/projects')
    .then((result) => {
      projects.value = Array.isArray(result) ? result : []
      hasLoaded.value = true
      return projects.value
    })
    .catch((err) => {
      error.value = err
      throw err
    })
    .finally(() => {
      isLoading.value = false
      loadPromise = null
    })

  return loadPromise
}

function ensureLoadedClientSide() {
  if (typeof window !== 'undefined' && !hasLoaded.value && !loadPromise) {
    void loadProjects()
  }
}

/**
 * Composable for managing projects data, filtering, and artifact lookup.
 * Centralizes state and computed properties for the projects views.
 */
export function useProjectsData() {
  ensureLoadedClientSide()

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
