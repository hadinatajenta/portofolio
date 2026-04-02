import { computed, ref } from 'vue'

const PROJECTS_DATA = [
  {
    id: 1,
    title: 'Portfolio Website',
    stack: ['Vue 3', 'TailwindCSS', 'GSAP'],
    shortDescription: 'A modern portfolio with immersive hero, dynamic case studies, and component-driven storytelling.',
    description:
      'Built a modular Vue 3 system with CMS-ready blocks, advanced route transitions, and custom motion choreography. Focused on balancing aesthetics with performance budgets.',
    link: 'https://github.com/hadinatajenta/portofolio',
    isPrivate: false,
    type: 'Personal Product',
    role: 'Product design & Frontend engineering',
    scope: 'Design system, frontend architecture, deployment',
    status: 'Live',
    year: 2024,
    featured: true,
    highlights: [
      'Atomic design system with dark-mode first theming.',
      'Declarative animation utilities for repeatable micro-interactions.',
      'Optimised Lighthouse score above 95 across core pages.'
    ]
  },
  {
    id: 2,
    title: 'Vue Kanji',
    stack: ['Vue 3', 'API Integration', 'Pinia'],
    shortDescription: 'Interactive Kanji learning app with spaced repetition, search, and curated content.',
    description:
      'Designed to help learners move from recognition to recall. Integrates KanjiAPI.dev, custom study playlists, and session tracking with local-first persistence.',
    link: 'https://github.com/hadinatajenta/vue-kanji',
    isPrivate: false,
    type: 'Personal Product',
    role: 'Product strategy & Frontend',
    scope: 'UX flows, accessibility audits, API integration',
    status: 'Live',
    year: 2023,
    highlights: [
      'Adaptive review sessions driven by interval scheduling.',
      'Keyword search with phonetic and JLPT-level filters.',
      'Streamlined for offline-first learning on mobile devices.'
    ]
  },
  {
    id: 3,
    title: 'Andalasnet',
    stack: ['Laravel', 'MySQL', 'Redis'],
    shortDescription: 'Regional news platform with editorial workflows, custom CMS, and reader analytics.',
    description:
      'Collaborated with Andalas Media Group to modernise their news operations. Delivered editorial workflow tooling, modular content layouts, and real-time readership dashboards.',
    link: 'https://andalasnet.com',
    isPrivate: false,
    type: 'Client Delivery',
    role: 'Full-stack developer',
    scope: 'Feature discovery, backend services, CMS buildout',
    status: 'In production',
    year: 2023,
    highlights: [
      'Editor-friendly CMS with scheduled publishing and version history.',
      'Edge caching and image optimisation for sub-second article loads.',
      'Live analytics for audience segmentation and ad inventory.'
    ]
  },
  {
    id: 4,
    title: 'SIG Palembang',
    stack: ['Leaflet', 'Laravel', 'MySQL'],
    shortDescription: 'Geographic information system to map Palembang facilities with powerful query tooling.',
    description:
      'Delivered an interactive GIS portal that surfaces critical city data. Built custom layers, geospatial search, and administrative dashboards for data stewardship.',
    link: 'https://github.com/hadinatajenta/TUBES-SIG',
    isPrivate: false,
    type: 'Client Delivery',
    role: 'Backend & mapping engineer',
    scope: 'API design, map rendering, stakeholder training',
    status: 'Launched',
    year: 2023,
    highlights: [
      'Advanced filtering across administrative regions and service types.',
      'Leaflet custom tiles with clustered markers and density views.',
      'Admin console for dataset imports and change approvals.'
    ]
  },
  {
    id: 5,
    title: 'Merchant Management Platform',
    stack: ['Go Gin', 'Laravel', 'Express', 'Vue'],
    shortDescription: 'Microservices platform orchestrating merchant onboarding, settlement, and support flows.',
    description:
      'Multi-team engagement to streamline merchant operations. Built resilient APIs, async workflows, and unified UI for finance, onboarding, and compliance teams.',
    link: null,
    isPrivate: true,
    type: 'Enterprise',
    role: 'Backend architect',
    scope: 'Service mesh, API gateway, observability',
    status: 'Internal',
    year: 2024,
    highlights: [
      'Event-driven onboarding pipeline across five business units.',
      'Unified identity and access controls with audit trails.',
      'Dashboard abstractions for KPI visibility across stakeholders.'
    ]
  },
  {
    id: 6,
    title: 'Operational Dashboard',
    stack: ['Laravel', 'Blade', 'Livewire'],
    shortDescription: 'Administrative dashboard for internal teams, tailored to reporting and daily operations.',
    description:
      'Implemented reusable dashboard widgets, dynamic reporting, and notification pipelines for operational teams requiring at-a-glance health metrics.',
    link: 'https://github.com/hadinatajenta/dashboard-laravel',
    isPrivate: false,
    type: 'Client Delivery',
    role: 'Full-stack developer',
    scope: 'Data modelling, interface design, QA automation',
    status: 'Live',
    year: 2022,
    highlights: [
      'Configurable reporting widgets with export-ready datasets.',
      'Role-based permissions exposed through simple admin tooling.',
      'Automated regression testing suite covering critical workflows.'
    ]
  }
]

/**
 * Composable for managing projects data and filtering logic
 * Centralizes state and computed properties for projects view
 */
export function useProjectsData() {
  // State
  const projects = ref(PROJECTS_DATA)
  const selectedFilter = ref('All')
  const selectedProject = ref(null)

  // Computed
  const filters = computed(() => {
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
    return projects.value.filter((project) =>
      project.stack.includes(selectedFilter.value)
    )
  })

  const projectStats = computed(() => {
    const total = projects.value.length
    const live = projects.value.filter((project) => !project.isPrivate).length
    const privateCount = projects.value.filter((project) => project.isPrivate).length
    const avgYear = Math.round(
      projects.value.reduce((sum, project) => sum + project.year, 0) / total
    )

    return {
      total,
      live,
      privateCount,
      avgYear
    }
  })

  // Methods
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
    return projects.value.find((project) => project.id === id)
  }

  return {
    // State
    projects,
    selectedFilter,
    selectedProject,
    // Computed
    filters,
    filteredProjects,
    projectStats,
    // Methods
    setFilter,
    isActiveFilter,
    selectFeaturedProject,
    selectProject,
    clearSelection,
    openProjectLink,
    getProjectById
  }
}
