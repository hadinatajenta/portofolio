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
    title: 'Andalasnet News Portal',
    stack: ['Laravel 9', 'MySQL', 'Bootstrap', 'CKEditor'],
    shortDescription: 'Custom online news portal and CMS for regional news network.',
    description:
      'Collaborated with Andalas Media Group to modernise their news operations. Built a fully custom online news portal from scratch because client requirements could not be fulfilled by off-the-shelf CMS platforms.',
    link: 'https://andalasnet.com',
    isPrivate: false,
    type: 'Client Delivery',
    role: 'Full-stack developer',
    scope: 'Architecture, UI design, backend, QA, deployment',
    status: 'In production',
    year: 2023,
    featured: true,
    highlights: [
      'Complete CMS with article management, categories, and multi-level author roles.',
      'Advertisement placement, banner schedules, pricing configurations, and printable invoices.',
      'Maintained production stability handling 500+ published articles.'
    ]
  },
  {
    id: 4,
    title: 'SIG Palembang',
    stack: ['Laravel', 'Leaflet JS', 'MySQL', 'jQuery', 'Bootstrap'],
    shortDescription: 'Web-based GIS application for mapping healthcare facilities in Palembang.',
    description:
      'Delivered an interactive GIS portal that maps hospitals, puskesmas, and other medical service locations. Built custom layers and enabled mapping via coordinate inputs.',
    link: 'https://github.com/hadinatajenta/TUBES-SIG',
    isPrivate: false,
    type: 'Academic Project',
    role: 'GIS Web Developer',
    scope: 'Mapping integration, backend services, UI styling',
    status: 'Completed',
    year: 2023,
    highlights: [
      'Add markers via latitude and longitude with area boundary definitions.',
      'Interactive mapping visualization with detailed facility information, contacts and images.',
      'Data-driven mapping platform supporting accurate healthcare visualisations.'
    ]
  },
  {
    id: 5,
    title: 'Merchant Management System',
    stack: ['Go (Gin, Echo)', 'PHP (Laravel)', 'Node.js', 'Vue.js 3', 'RabbitMQ', 'Redis', 'MinIO'],
    shortDescription: 'Microservices platform orchestrating merchant operations for BRI.',
    description:
      'Developed and maintained internal MMS microservices used by operational teams to manage the merchant lifecycle, EDC registration, QRIS flows, and maintenance.',
    link: null,
    isPrivate: true,
    type: 'Enterprise',
    role: 'Backend Developer',
    scope: 'API design, integration, async processing, caching',
    status: 'In production',
    year: 2024,
    featured: true,
    highlights: [
      'Integrated with Way4, Fraud Monitoring, and PTEN systems via secure APIs.',
      'Engineered asynchronous pipelines using RabbitMQ and Redis caching.',
      'Maintained code quality with SonarQube, SAST, and deployed on Red Hat OpenShift.'
    ]
  },
  {
    id: 6,
    title: 'NGO Basmi Platform',
    stack: ['Laravel', 'MySQL', 'Bootstrap'],
    shortDescription: 'Web platform handling advertising, staff management, and scheduling.',
    description:
      'Built a full web platform for NGO Basmi applying a Modified Waterfall development approach to guarantee strict adherence to constraints and requirements from the client.',
    link: null,
    isPrivate: true,
    type: 'Client Delivery',
    role: 'Full Stack Developer',
    scope: 'Backend logic, scheduling system, UI construction',
    status: 'Launched',
    year: 2023,
    highlights: [
      'Systematic development methodology ensuring clear client expectations.',
      'Implemented robust staff coordination and scheduling systems.',
      'Built custom ad management tooling integrated into the workflow.'
    ]
  },
  {
    id: 7,
    title: 'Inventory Lending System',
    stack: ['Laravel', 'MySQL', 'Bootstrap'],
    shortDescription: 'Digitized lending and tracking management system for SMPN 28 Bandar Lampung.',
    description:
      'Developed a system to modernize and automate the previously manual inventory lending processes for the school\'s equipment and facilities.',
    link: null,
    isPrivate: true,
    type: 'Client Delivery',
    role: 'Full Stack Developer',
    scope: 'Requirements analysis, application development, deployment',
    status: 'Launched',
    year: 2023,
    highlights: [
      'Reduced manual processing dependency by approximately 70%.',
      'Significantly improved tracking accuracy and operational efficiency.',
      'Designed a minimal, user-friendly interface for school staff.'
    ]
  }
]

// State (global singleton)
const projects = ref(PROJECTS_DATA)
const selectedFilter = ref('All')
const selectedProject = ref(null)

/**
 * Composable for managing projects data and filtering logic
 * Centralizes state and computed properties for projects view
 */
export function useProjectsData() {
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

  const featuredProjects = computed(() => {
    return projects.value
      .filter((project) => project.featured)
      .map((project) => ({
        id: project.id,
        name: project.title,
        description: project.shortDescription,
        tags: project.stack, // Match the legacy property name for ProjectSection compatibility
        link: project.link
      }))
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
    featuredProjects,
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
