import { computed, ref } from 'vue'

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

const PROJECTS_DATA = [
  {
    id: 5,
    title: 'Merchant Management System',
    stack: ['Go (Gin, Echo)', 'PHP (Laravel)', 'Node.js', 'Vue.js 3', 'RabbitMQ', 'Redis', 'MinIO'],
    type: 'Backend',
    domain: 'Fintech',
    shortDescription: 'Internal microservices handling merchant onboarding, EDC registration, QRIS flows, and corrective maintenance for operational teams.',
    description: 'Developed and maintained multiple MMS microservices used by operational teams to manage the full merchant lifecycle — from onboarding and outlet creation to EDC registration, QRIS parent setup, and corrective maintenance (settlement and non-settlement).',
    whyItMatters: 'These services directly support daily operations for merchant acquisition teams, reducing manual coordination and enabling faster onboarding across branches.',
    myRole: 'Backend Developer — built and maintained Go and Laravel microservices, designed API contracts, implemented async pipelines, and handled cross-system integrations.',
    architecture: {
      system: 'Distributed microservices using Go (Gin/Echo), Laravel, and Node.js. Services communicate via REST APIs and RabbitMQ for async processing. Redis for caching, MinIO for file storage.',
      why: 'Microservices were required to isolate merchant lifecycle stages (onboarding, EDC, QRIS) into independently deployable units, each owned by separate squads.',
      tradeoff: 'Cross-service data consistency required careful orchestration — eventual consistency via message queues introduced debugging complexity for failed merchant registrations.'
    },
    impact: [
      { context: 'Merchant onboarding pipeline', result: 'Reduced processing overhead through async RabbitMQ pipelines' },
      { context: 'Data retrieval on frequently accessed workflows', result: 'Improved with Redis caching strategies' }
    ],
    link: null,
    isPrivate: true,
    status: 'In production',
    year: 2024,
    featured: true,
    highlights: [
      'Integrated with Way4, Fraud Monitoring, Soundbox, and PTEN (IN/OUT) systems via secure APIs.',
      'Engineered async processing pipelines using RabbitMQ to decouple service dependencies.',
      'Deployed on Red Hat OpenShift with CI/CD via Bamboo, Bitbucket, and Nexus.',
      'Maintained code quality through SonarQube analysis and SAST compliance.'
    ],
    artifacts: {
      code: [],
      design: [
        { id: 'mms-d1', title: 'Merchant Dashboard UI', figmaUrl: null, thumbnail: null, lastUpdated: null, description: 'Placeholder — replace with Figma link and screenshot' },
        { id: 'mms-d2', title: 'Onboarding Flow Wireframes', figmaUrl: null, thumbnail: null, lastUpdated: null, description: 'Placeholder — replace with Figma link and screenshot' }
      ],
      diagrams: [
        { id: 'mms-dg1', title: 'Microservices Architecture Overview', type: 'UML', imageUrl: null, description: 'Placeholder — replace with architecture diagram' },
        { id: 'mms-dg2', title: 'Merchant Onboarding Flow', type: 'Flow', imageUrl: null, description: 'Placeholder — replace with flow diagram' },
        { id: 'mms-dg3', title: 'MMS Database Schema', type: 'ERD', imageUrl: null, description: 'Placeholder — replace with ERD image' }
      ],
      docs: [
        { id: 'mms-doc1', title: 'API Contract: Merchant Onboarding', preview: 'API specifications for the merchant onboarding endpoint — request schema, validation rules, and error codes.', lastUpdated: null, url: null }
      ]
    }
  },
  {
    id: 3,
    title: 'Andalasnet News Portal',
    stack: ['Laravel 9', 'MySQL', 'Bootstrap', 'CKEditor'],
    type: 'Fullstack',
    domain: 'Media',
    shortDescription: 'Custom-built online news portal and CMS for PT Andalas Media Group, handling article management, ad placement, and multi-role publishing.',
    description: 'Built a fully custom online news portal from scratch because client requirements — multi-level author roles, ad scheduling with printable invoices, and custom layout templates — could not be fulfilled by WordPress or other off-the-shelf CMS platforms.',
    whyItMatters: 'Gave a regional media company full ownership of their publishing workflow without dependency on third-party CMS limitations or licensing costs.',
    myRole: 'Sole developer — handled everything from requirement gathering, database design, and UI to backend logic, deployment on shared hosting, and ongoing maintenance.',
    architecture: {
      system: 'Monolithic Laravel 9 application with Blade templates, MySQL database, and CKEditor for rich content editing. Role-based access for admins, editors, and authors.',
      why: 'A monolith was the right choice given the single-developer team, shared hosting constraints, and the need for rapid iteration with the client.',
      tradeoff: 'Shared hosting (Niagahoster/HPanel) limited scaling options — no queue workers or background jobs, so all processing had to be synchronous.'
    },
    impact: [
      { context: 'Published articles', result: '500+ articles in production without major incidents' },
      { context: 'Client workflow', result: 'End-to-end publishing managed independently by the client team' }
    ],
    link: 'https://andalasnet.com',
    isPrivate: false,
    status: 'In production',
    year: 2023,
    featured: true,
    highlights: [
      'Complete CMS with article management, categories, and multi-level author roles.',
      'Advertisement placement, banner schedules, pricing configurations, and printable invoices.',
      'SEO-friendly article structure and analytics pages for content performance tracking.',
      'Maintained production stability with 500+ published articles without major incidents.'
    ],
    artifacts: {
      code: [],
      design: [
        { id: 'and-d1', title: 'News Portal Homepage Design', figmaUrl: null, thumbnail: null, lastUpdated: null, description: 'Placeholder — replace with Figma link and screenshot' },
        { id: 'and-d2', title: 'Admin CMS Dashboard Layout', figmaUrl: null, thumbnail: null, lastUpdated: null, description: 'Placeholder — replace with Figma link and screenshot' }
      ],
      diagrams: [
        { id: 'and-dg1', title: 'CMS Database Schema', type: 'ERD', imageUrl: null, description: 'Placeholder — replace with ERD image' },
        { id: 'and-dg2', title: 'Article Publishing Workflow', type: 'Flow', imageUrl: null, description: 'Placeholder — replace with flow diagram' }
      ],
      docs: []
    }
  },
  {
    id: 1,
    title: 'Portfolio Website',
    stack: ['Vue 3', 'TailwindCSS'],
    type: 'Fullstack',
    domain: null,
    shortDescription: 'Personal portfolio built with Vue 3 and TailwindCSS, designed for component modularity and fast iteration.',
    description: 'Built a modular Vue 3 portfolio with composable-driven state management, component-first architecture, and a monochrome design system.',
    whyItMatters: 'Serves as a living showcase of frontend architecture skills and professional presentation for clients and recruiters.',
    myRole: 'Sole developer — design system, frontend architecture, composable state management, and deployment.',
    architecture: {
      system: 'Vue 3 SPA with composable-based state management (no Vuex/Pinia needed for this scale). TailwindCSS utility classes with scoped overrides.',
      why: 'Composables were chosen over Pinia to keep the dependency tree minimal for a static content site that does not need centralized reactive store.',
      tradeoff: 'No SSR — vite-ssg was added later to address SEO limitations of a plain SPA and ensure all routes are prerendered as static HTML.'
    },
    impact: [],
    link: 'https://github.com/hadinatajenta/portofolio',
    isPrivate: false,
    status: 'Live',
    year: 2024,
    featured: false,
    highlights: [
      'Composable-driven data layer for centralized content management.',
      'Monochrome design system with consistent spacing and typography.',
      'Modular component architecture for easy section additions.'
    ],
    artifacts: {
      code: [
        {
          id: 'portfolio-repo',
          title: 'hadinatajenta/portofolio',
          repoUrl: 'https://github.com/hadinatajenta/portofolio',
          branch: 'main',
          lastCommit: 'Apr 2024',
          status: 'Active',
          visibility: 'Public',
          description: 'Vue 3 + TailwindCSS personal portfolio with vite-ssg prerendering'
        }
      ],
      design: [
        { id: 'port-d1', title: 'Portfolio Design System', figmaUrl: null, thumbnail: null, lastUpdated: null, description: 'Placeholder — replace with Figma link and screenshot' }
      ],
      diagrams: [],
      docs: []
    }
  },
  {
    id: 2,
    title: 'Vue Kanji',
    stack: ['Vue 3', 'API Integration', 'Pinia'],
    type: 'Fullstack',
    domain: 'EdTech',
    shortDescription: 'Interactive Kanji learning app with spaced repetition, search, and curated JLPT-level content.',
    description: 'Designed to help learners move from recognition to recall. Integrates KanjiAPI.dev for kanji data, implements custom study playlists, and tracks sessions with local-first persistence.',
    whyItMatters: 'Provides a free, focused alternative to paid Kanji apps by combining API-driven content with practical study features.',
    myRole: 'Sole developer — product concept, UX design, API integration, and frontend implementation.',
    architecture: {
      system: 'Vue 3 SPA with Pinia for state management and KanjiAPI.dev as the external data source. Local storage for session persistence.',
      why: 'Pinia was used here (unlike the portfolio) because the study session state required centralized management across multiple views.',
      tradeoff: 'Relies entirely on KanjiAPI.dev availability — no local fallback data if the API is unreachable.'
    },
    impact: [],
    link: 'https://github.com/hadinatajenta/vue-kanji',
    isPrivate: false,
    status: 'Live',
    year: 2023,
    featured: false,
    highlights: [
      'Adaptive review sessions driven by interval scheduling.',
      'Keyword search with phonetic and JLPT-level filters.',
      'Streamlined for offline-first learning on mobile devices.'
    ],
    artifacts: {
      code: [
        {
          id: 'vk-repo',
          title: 'hadinatajenta/vue-kanji',
          repoUrl: 'https://github.com/hadinatajenta/vue-kanji',
          branch: 'main',
          lastCommit: '2023',
          status: 'Active',
          visibility: 'Public',
          description: 'Vue 3 + Pinia Kanji learning app with KanjiAPI.dev integration'
        }
      ],
      design: [],
      diagrams: [],
      docs: []
    }
  },
  {
    id: 4,
    title: 'SIG Palembang',
    stack: ['Laravel', 'Leaflet JS', 'MySQL', 'jQuery', 'Bootstrap'],
    type: 'Fullstack',
    domain: 'GIS / Healthcare',
    shortDescription: 'Web-based GIS application mapping healthcare facilities in Palembang with interactive layers and coordinate-based inputs.',
    description: 'Developed as a final project for the Geographic Information System course. Maps hospitals, puskesmas, and medical facilities with custom layers, coordinate inputs, and detailed facility info.',
    whyItMatters: 'Demonstrated practical application of GIS concepts by creating a usable tool for visualizing healthcare accessibility in a real city.',
    myRole: 'Full stack GIS developer — built mapping integration with Leaflet.js, backend services with Laravel, and the data entry UI.',
    architecture: {
      system: 'Laravel monolith with Leaflet.js for frontend mapping. MySQL stores facility data and coordinates. jQuery handles dynamic UI interactions.',
      why: 'Leaflet.js was chosen for its lightweight mapping library that runs well without a paid Google Maps API key.',
      tradeoff: 'Data entry was manual (lat/lng input) — no geocoding API integration, so new facilities required exact coordinates.'
    },
    impact: [],
    link: 'https://github.com/hadinatajenta/TUBES-SIG',
    isPrivate: false,
    status: 'Completed',
    year: 2023,
    featured: false,
    highlights: [
      'Interactive map with custom markers, area boundaries, and facility detail panels.',
      'Coordinate-based data entry for hospitals and medical service locations.',
      'Data-driven visualization supporting local healthcare infrastructure mapping.'
    ],
    artifacts: {
      code: [
        {
          id: 'sig-repo',
          title: 'hadinatajenta/TUBES-SIG',
          repoUrl: 'https://github.com/hadinatajenta/TUBES-SIG',
          branch: 'main',
          lastCommit: '2023',
          status: 'Completed',
          visibility: 'Public',
          description: 'Laravel + Leaflet.js GIS application for healthcare facility mapping'
        }
      ],
      design: [
        { id: 'sig-d1', title: 'GIS Map Interface Design', figmaUrl: null, thumbnail: null, lastUpdated: null, description: 'Placeholder — replace with Figma link and screenshot' }
      ],
      diagrams: [
        { id: 'sig-dg1', title: 'Database Schema — Healthcare Facilities', type: 'ERD', imageUrl: null, description: 'Placeholder — replace with ERD image' }
      ],
      docs: []
    }
  },
  {
    id: 6,
    title: 'NGO Basmi Platform',
    stack: ['Laravel', 'MySQL', 'Bootstrap'],
    type: 'Fullstack',
    domain: 'Non-profit',
    shortDescription: 'Web platform for advertising management, staff coordination, and scheduling built for NGO Basmi.',
    description: 'Built a web platform using Modified Waterfall methodology to ensure strict adherence to client constraints. Features include ad management, staff scheduling, and internal coordination tools.',
    whyItMatters: 'Provided a non-profit organization with a structured internal tool that replaced manual coordination processes.',
    myRole: 'Sole developer — requirements gathering, Modified Waterfall planning, full application development, and delivery.',
    architecture: {
      system: 'Laravel monolith with Bootstrap UI. MySQL for persistent data. Standard MVC pattern.',
      why: 'Modified Waterfall was chosen because the client had fixed requirements and a strict delivery timeline — agile iteration was not feasible.',
      tradeoff: 'Fixed-scope methodology meant late requirement changes were difficult to accommodate without renegotiating the timeline.'
    },
    impact: [],
    link: null,
    isPrivate: true,
    status: 'Launched',
    year: 2023,
    featured: false,
    highlights: [
      'Structured development ensuring clear client expectations at each phase.',
      'Staff coordination and scheduling system with role-based access.',
      'Custom ad management tooling integrated into the daily workflow.'
    ],
    artifacts: {
      code: [],
      design: [
        { id: 'basmi-d1', title: 'Platform UI Design', figmaUrl: null, thumbnail: null, lastUpdated: null, description: 'Placeholder — replace with Figma link and screenshot' }
      ],
      diagrams: [
        { id: 'basmi-dg1', title: 'Staff Scheduling Flow', type: 'Flow', imageUrl: null, description: 'Placeholder — replace with flow diagram' }
      ],
      docs: []
    }
  },
  {
    id: 7,
    title: 'Inventory Lending System',
    stack: ['Laravel', 'MySQL', 'Bootstrap'],
    type: 'Fullstack',
    domain: 'Education',
    shortDescription: 'Digitized lending and tracking system for school equipment at SMPN 28 Bandar Lampung.',
    description: "Developed to modernize the school's previously manual inventory lending process. Staff can now track equipment availability, lending history, and returns through a simple web interface.",
    whyItMatters: 'Directly reduced administrative burden for school staff by replacing paper-based tracking with a searchable digital system.',
    myRole: 'Sole developer — requirements analysis with school staff, application development, and on-site deployment.',
    architecture: {
      system: 'Laravel monolith with Bootstrap UI. MySQL database tracking items, borrowers, and lending history.',
      why: 'A simple monolith was appropriate for a single-user school environment with no scaling requirements.',
      tradeoff: 'No multi-tenant support — the system is purpose-built for one school and would need refactoring to serve multiple institutions.'
    },
    impact: [
      { context: 'Manual inventory processing', result: 'Reduced dependency by approximately 70%' },
      { context: 'Equipment tracking accuracy', result: 'Significantly improved through digital audit trail' }
    ],
    link: null,
    isPrivate: true,
    status: 'Launched',
    year: 2023,
    featured: false,
    highlights: [
      'Reduced manual processing dependency by approximately 70%.',
      'Digital audit trail replacing paper-based equipment tracking.',
      'Minimal, user-friendly interface designed for non-technical school staff.'
    ],
    artifacts: {
      code: [],
      design: [],
      diagrams: [
        { id: 'inv-dg1', title: 'Inventory Database Schema', type: 'ERD', imageUrl: null, description: 'Placeholder — replace with ERD image' }
      ],
      docs: []
    }
  },
  {
    id: 8,
    title: 'Auth Service — Centralized IAM Microservice',
    stack: ['Go', 'Gin', 'PostgreSQL', 'JWT', 'GORM', 'Prometheus', 'Docker', 'Swagger'],
    type: 'Full-Stack',
    domain: 'Security / Identity & Access Management',
    shortDescription: 'Production-grade centralized Identity & Access Management microservice with JWT authentication, RBAC, service account API keys, audit logging, and an admin dashboard.',
    description: 'Built a comprehensive IAM microservice that serves as the single source of truth for user authentication, role-based access control, and service-to-service authorization across internal applications. Features include JWT-based stateless auth with refresh token sessions, granular RBAC with in-memory permission caching for O(1) lookups, machine-to-machine API key authentication (service accounts), a full audit trail of security-sensitive operations, Prometheus metrics instrumentation, and a React-based admin dashboard for managing users, roles, permissions, and menus.',
    whyItMatters: 'Eliminates duplicated auth logic across services by centralizing identity management — a pattern used in enterprise platforms like Keycloak and Auth0, but built from scratch to deeply understand the internals of token-based authentication, session management, and authorization enforcement.',
    myRole: 'Sole developer — designed the Clean Architecture (Handler → Service → Repository), implemented the full authentication lifecycle (login, refresh, introspect, logout), built RBAC enforcement middleware, created the service account module, and developed the React admin frontend.',
    architecture: {
      system: 'Go/Gin microservice following Clean Architecture with strict layering: HTTP middleware stack (CORS, rate limiting, audit, auth, RBAC) → Handler → Service → Repository → PostgreSQL. In-memory set-based cache for permission lookups. React (Vite) admin dashboard consuming the REST API.',
      why: 'Go was chosen for high concurrency and low-latency auth operations. Clean Architecture enables independent testing of each layer. In-memory caching avoids DB round-trips on every permission check. GORM provides type-safe queries while PostgreSQL ensures ACID compliance for session and audit data.',
      tradeoff: 'In-memory permission cache is not distributed — scaling to multiple instances requires migrating to Redis. No OAuth2/OIDC provider support yet. Refresh tokens have a fixed 7-day TTL with no sliding window.'
    },
    impact: [
      { context: 'Auth logic across internal services', result: 'Centralized — eliminated redundant user/permission tables' },
      { context: 'RBAC enforcement latency', result: 'Sub-millisecond via in-memory permission caching' },
      { context: 'Security operations', result: 'Full audit trail enabling compliance review and incident investigation' }
    ],
    link: 'https://github.com/hadinatajenta/go-mini-iam-service',
    isPrivate: false,
    status: 'Completed',
    year: 2026,
    featured: true,
    highlights: [
      'JWT authentication with 15-min access tokens, 7-day refresh tokens, and account lockout after 5 failed attempts.',
      'Granular RBAC with in-memory permission cache achieving O(1) authorization checks.',
      'Service account module for M2M authentication with cryptographically secure API keys (sk_live_ format).',
      'Comprehensive audit logging middleware tracking all security-sensitive mutations.',
      'Prometheus metrics instrumentation (login counters, request latency histograms).',
      'RFC 7662-inspired token introspection endpoint for internal service token verification.',
      'React admin dashboard with user, role, permission, and menu management.',
      'Hierarchical menu system with role-based visibility for frontend navigation.'
    ],
    artifacts: {
      code: [
        {
          id: 'iam-repo',
          title: 'hadinatajenta/go-mini-iam-service',
          repoUrl: 'https://github.com/hadinatajenta/go-mini-iam-service',
          branch: 'main',
          lastCommit: 'Apr 2026',
          status: 'Active',
          visibility: 'Public',
          description: 'Go/Gin IAM microservice — JWT auth, RBAC, service accounts, audit logging, Prometheus metrics'
        }
      ],
      design: [
        { id: 'iam-d1', title: 'Admin Dashboard — React Frontend', figmaUrl: null, thumbnail: null, lastUpdated: null, description: 'Placeholder — replace with Figma link and screenshot' }
      ],
      diagrams: [
        { id: 'iam-dg1', title: 'IAM Database Schema', type: 'ERD', imageUrl: null, description: 'Placeholder — replace with ERD image' },
        { id: 'iam-dg2', title: 'Authentication Flow', type: 'Sequence', imageUrl: null, description: 'Placeholder — replace with sequence diagram' },
        { id: 'iam-dg3', title: 'RBAC Architecture', type: 'UML', imageUrl: null, description: 'Placeholder — replace with UML diagram' }
      ],
      docs: [
        { id: 'iam-doc1', title: 'API Reference — Authentication Endpoints', preview: 'Covers login, refresh, logout, and token introspection endpoints. Includes request schema, response format, and error codes for each operation.', lastUpdated: 'Apr 2026', url: null },
        { id: 'iam-doc2', title: 'RBAC Implementation Guide', preview: 'Explains how the in-memory permission cache is built at startup, how invalidation works on role changes, and how to add new permissions to the system.', lastUpdated: 'Apr 2026', url: null }
      ]
    }
  }
]

// State (global singleton)
const projects = ref(PROJECTS_DATA)
const selectedFilter = ref('All')
const selectedProject = ref(null)

/**
 * Composable for managing projects data, filtering, and artifact lookup.
 * Centralizes state and computed properties for the projects views.
 */
export function useProjectsData() {
  // Filter categories based on technical type
  const typeFilters = computed(() => {
    const types = new Set(projects.value.map((p) => p.type))
    return ['All', ...Array.from(types).sort()]
  })

  // All unique statuses
  const statusFilters = computed(() => {
    const statuses = new Set(projects.value.map((p) => p.status))
    return ['All', ...Array.from(statuses).sort()]
  })

  // Stack-based filters
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

  // Landing page compatibility
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
    typeFilters,
    statusFilters,
    stackFilters,
    filteredProjects,
    featuredProjects,
    featuredProjectsFull,
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
