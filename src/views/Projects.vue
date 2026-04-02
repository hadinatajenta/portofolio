<template>
  <DefaultLayout>
    <section class="space-y-16">
      <div class="relative overflow-hidden rounded-2xl border-2 border-black/10 bg-white px-6 py-12 sm:px-10 lg:px-14">
        <div class="relative grid gap-10 lg:grid-cols-[1.2fr,0.8fr] items-start">
          <div class="space-y-6">
            <span class="inline-flex items-center gap-2 rounded-lg border-2 border-black bg-black px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white">
              Project Archive
            </span>
            <div class="space-y-4">
              <h1 class="text-4xl sm:text-5xl font-bold leading-tight text-black">
                Shipping purposeful products with craftsmanship and care.
              </h1>
              <p class="text-lg text-black/60 max-w-xl">
                A snapshot of products, platforms, and experiments delivered across teams — spanning quick prototypes to full production launches.
              </p>
            </div>
            <div class="flex flex-wrap gap-4 text-sm text-black/70">
              <div class="stat-card">
                <span class="text-2xl font-bold text-black">{{ projectStats.total }}</span>
                <span class="text-xs uppercase tracking-wide text-black/50">Total projects</span>
              </div>
              <div class="stat-card">
                <span class="text-2xl font-bold text-black">{{ projectStats.live }}</span>
                <span class="text-xs uppercase tracking-wide text-black/50">Live in production</span>
              </div>
              <div class="stat-card">
                <span class="text-2xl font-bold text-black">{{ projectStats.confidential }}</span>
                <span class="text-xs uppercase tracking-wide text-black/50">Confidential</span>
              </div>
            </div>
          </div>

          <div class="relative">
            <div class="rounded-lg border-2 border-black/10 bg-white p-6 shadow-sm">
              <div class="flex items-center justify-between text-sm text-black/60">
                <span class="inline-flex items-center gap-2 rounded-lg bg-black/10 px-3 py-1 font-semibold text-black">
                  <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M12 21a9 9 0 100-18 9 9 0 000 18z" />
                  </svg>
                  Highlight
                </span>
                <span class="text-xs uppercase tracking-wide text-black/50">2024</span>
              </div>
              <h2 class="mt-6 text-2xl font-bold text-black">
                Featured: Portfolio website refresh
              </h2>
              <p class="mt-3 text-sm leading-relaxed text-black/60">
                A cohesive brand story across landing, case studies, and onboarding flows. Built with Vue 3, dynamic content modules, and meticulously tuned micro-interactions.
              </p>
              <div class="mt-6 flex flex-wrap gap-3 text-xs">
                <span class="badge badge-primary">Vue 3</span>
                <span class="badge badge-primary">Tailwind</span>
                <span class="badge badge-primary">Framer Motion</span>
              </div>
              <button
                type="button"
                class="mt-8 inline-flex items-center gap-2 rounded-lg border-2 border-black/20 bg-white px-4 py-2 text-sm font-medium text-black transition hover:border-black hover:bg-black/5"
                @click="selectFeatured"
              >
                View case study
                <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="space-y-10">
        <div class="flex flex-wrap items-center gap-3">
          <button
            v-for="filter in filters"
            :key="filter"
            type="button"
            class="filter-chip"
            :class="{ 'filter-chip--active': isActiveFilter(filter) }"
            @click="selectFilter(filter)"
          >
            <span class="text-xs uppercase tracking-wide">{{ filter }}</span>
          </button>
          <span class="text-xs uppercase tracking-wide text-black/50">
            {{ filteredProjects.length }} results
          </span>
        </div>

        <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <article
            v-for="project in filteredProjects"
            :key="project.id"
            class="group relative overflow-hidden rounded-lg border-2 border-black/10 bg-white p-7 shadow-sm transition hover:shadow-md hover:border-black"
          >
            <div class="relative flex items-center justify-between text-xs uppercase tracking-wide text-black/50">
              <span class="inline-flex items-center gap-2">
                <span class="h-2 w-2 rounded-full" :class="project.isPrivate ? 'bg-amber-600' : 'bg-emerald-600'"></span>
                {{ project.type }}
              </span>
              <span>{{ project.year }}</span>
            </div>

            <div class="relative mt-6 space-y-4">
              <div class="flex items-center gap-3">
                <h3 class="text-xl font-bold text-black transition group-hover:text-black/70">{{ project.title }}</h3>
                <span v-if="project.featured" class="rounded-lg bg-black/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-black/60">
                  Featured
                </span>
              </div>
              <p class="text-sm leading-relaxed text-black/60 line-clamp-3">
                {{ project.shortDescription }}
              </p>
            </div>

            <div class="relative mt-6 flex flex-wrap gap-2">
              <span
                v-for="tech in project.stack"
                :key="tech"
                class="badge"
              >
                {{ tech }}
              </span>
            </div>

            <div class="relative mt-8 flex items-center justify-between">
              <button
                type="button"
                class="inline-flex items-center gap-2 text-sm font-semibold text-black transition hover:text-black/60"
                @click="openModal(project)"
              >
                Read more
                <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H7" />
                </svg>
              </button>

              <button
                v-if="project.link"
                type="button"
                class="inline-flex items-center gap-2 rounded-lg border-2 border-black/20 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-black transition hover:border-black hover:bg-black/5"
                @click="openLink(project.link)"
              >
                Visit
                <svg class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 3h7m0 0v7m0-7L10 14" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10v11h11" />
                </svg>
              </button>
              <span
                v-else
                class="inline-flex items-center gap-2 rounded-lg border-2 border-black/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-black/40"
              >
                Private
                <svg class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11c.828 0 1.5-.672 1.5-1.5S12.828 8 12 8s-1.5.672-1.5 1.5S11.172 11 12 11z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 21v-2a4 4 0 118 0v2" />
                </svg>
              </span>
            </div>
          </article>
        </div>
      </div>
    </section>

    <transition name="modal-fade">
      <div
        v-if="selectedProject"
        class="modal-backdrop"
        @click.self="closeModal"
      >
        <div class="modal-panel">
          <button
            type="button"
            class="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border-2 border-black/20 bg-white text-black transition hover:border-black hover:bg-black/5"
            @click="closeModal"
          >
            <span class="sr-only">Close</span>
            <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div class="space-y-8">
            <header class="space-y-3">
              <div class="flex flex-wrap items-center gap-3 text-xs uppercase tracking-wide text-black/50">
                <span class="inline-flex items-center gap-2">
                  <span class="h-2 w-2 rounded-full" :class="selectedProject?.isPrivate ? 'bg-amber-600' : 'bg-emerald-600'"></span>
                  {{ selectedProject?.type }}
                </span>
                <span>·</span>
                <span>{{ selectedProject?.status }}</span>
                <span>·</span>
                <span>{{ selectedProject?.year }}</span>
              </div>
              <h2 class="text-3xl font-bold text-black">
                {{ selectedProject?.title }}
              </h2>
              <p class="max-w-2xl text-base leading-relaxed text-black/60">
                {{ selectedProject?.description }}
              </p>
            </header>

            <div class="grid gap-4 sm:grid-cols-2">
              <div class="info-card">
                <span class="info-label">Role</span>
                <span class="info-value">{{ selectedProject?.role }}</span>
              </div>
              <div class="info-card">
                <span class="info-label">Scope</span>
                <span class="info-value">{{ selectedProject?.scope }}</span>
              </div>
            </div>

            <div class="space-y-3">
              <h3 class="text-sm font-semibold uppercase tracking-wide text-black/60">Tech & tooling</h3>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tech in selectedProject?.stack || []"
                  :key="tech"
                  class="badge badge-primary"
                >
                  {{ tech }}
                </span>
              </div>
            </div>

            <div class="space-y-3">
              <h3 class="text-sm font-semibold uppercase tracking-wide text-black/60">Highlights</h3>
              <ul class="space-y-2 text-sm text-black/60">
                <li v-for="(note, index) in selectedProject?.highlights || []" :key="index" class="flex gap-3">
                  <span class="mt-1 h-1.5 w-1.5 rounded-full bg-black flex-shrink-0"></span>
                  <span>{{ note }}</span>
                </li>
              </ul>
            </div>

            <div class="flex flex-wrap gap-3">
              <button
                v-if="selectedProject?.link"
                type="button"
                class="inline-flex items-center gap-2 rounded-lg border-2 border-black/20 bg-white px-5 py-2 text-sm font-medium text-black transition hover:border-black hover:bg-black/5"
                @click="openLink(selectedProject?.link)"
              >
                Open project
                <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 3h7m0 0v7m0-7L10 14" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10v11h11" />
                </svg>
              </button>
              <span
                v-else
                class="inline-flex items-center gap-2 rounded-lg border-2 border-black/10 px-5 py-2 text-sm font-medium text-black/50"
              >
                Private engagement
                <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11c.828 0 1.5-.672 1.5-1.5S12.828 8 12 8s-1.5.672-1.5 1.5S11.172 11 12 11z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 21v-2a4 4 0 118 0v2" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </DefaultLayout>
</template>

<script setup>
import { computed, onBeforeUnmount, ref, watch } from 'vue';
import DefaultLayout from '../layouts/DefaultLayout.vue';

const selectedProject = ref(null);
const selectedFilter = ref('All');

const projects = ref([
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
]);

const filters = computed(() => {
  const stacks = new Set();
  projects.value.forEach((project) => {
    project.stack.forEach((tech) => stacks.add(tech));
  });
  return ['All', ...Array.from(stacks)];
});

const filteredProjects = computed(() => {
  if (selectedFilter.value === 'All') {
    return projects.value;
  }
  return projects.value.filter((project) => project.stack.includes(selectedFilter.value));
});

const projectStats = computed(() => {
  const total = projects.value.length;
  const live = projects.value.filter((project) => !project.isPrivate).length;
  const confidential = projects.value.filter((project) => project.isPrivate).length;
  return { total, live, confidential };
});

const selectFilter = (filter) => {
  if (filter === 'All') {
    selectedFilter.value = 'All';
    return;
  }

  selectedFilter.value = selectedFilter.value === filter ? 'All' : filter;
};

const isActiveFilter = (filter) => selectedFilter.value === filter;

const selectFeatured = () => {
  const featured = projects.value.find((project) => project.featured);
  if (featured) {
    openModal(featured);
  }
};

const openModal = (project) => {
  selectedProject.value = project;
};

const closeModal = () => {
  selectedProject.value = null;
};

const openLink = (url) => {
  if (!url) return;
  window.open(url, '_blank', 'noopener,noreferrer');
};

const toggleBodyScroll = (shouldLock) => {
  if (typeof document === 'undefined') return;
  document.body.style.overflow = shouldLock ? 'hidden' : '';
};

watch(selectedProject, (value) => {
  toggleBodyScroll(Boolean(value));
});

onBeforeUnmount(() => {
  toggleBodyScroll(false);
});
</script>

<style scoped>
.stat-card {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 1rem 1.2rem;
  border-radius: 0.75rem;
  border: 2px solid rgba(0, 0, 0, 0.1);
  background: rgba(0, 0, 0, 0.02);
}

.badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.35rem;
  padding: 0.4rem 0.9rem;
  border-radius: 999px;
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  background: rgba(0, 0, 0, 0.05);
  border: 2px solid rgba(0, 0, 0, 0.1);
  color: rgba(0, 0, 0, 0.7);
  transition: border 0.2s ease, color 0.2s ease, background 0.2s ease;
}

.badge-primary {
  background: rgba(0, 0, 0, 0.08);
  border-color: rgba(0, 0, 0, 0.15);
  color: rgba(0, 0, 0, 0.8);
}

.badge:hover {
  border-color: rgba(0, 0, 0, 0.2);
  color: rgba(0, 0, 0, 0.8);
}

.filter-chip {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.55rem 1.4rem;
  border-radius: 999px;
  border: 2px solid rgba(0, 0, 0, 0.1);
  background: rgba(0, 0, 0, 0.02);
  color: rgba(0, 0, 0, 0.6);
  transition: border 0.2s ease, background 0.2s ease, color 0.2s ease;
}

.filter-chip:hover {
  border-color: rgba(0, 0, 0, 0.2);
  color: rgba(0, 0, 0, 0.8);
}

.filter-chip--active {
  border-color: rgba(0, 0, 0, 0.3);
  color: rgba(0, 0, 0, 0.9);
  background: rgba(0, 0, 0, 0.08);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 60;
  display: flex;
  justify-content: center;
  overflow-y: auto;
  padding: 4rem 1.5rem;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(14px);
}

.modal-panel {
  position: relative;
  width: min(680px, 100%);
  border-radius: 16px;
  border: 2px solid rgba(0, 0, 0, 0.1);
  background: white;
  padding: 3.5rem 2.75rem 2.75rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
}

.info-card {
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  border-radius: 0.75rem;
  border: 2px solid rgba(0, 0, 0, 0.1);
  background: rgba(0, 0, 0, 0.02);
  padding: 1.25rem;
}

.info-label {
  font-size: 0.68rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.6);
}

.info-value {
  font-size: 0.95rem;
  color: rgba(0, 0, 0, 0.8);
  font-weight: 600;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
  transform: scale(0.98);
}

.modal-fade-enter-to,
.modal-fade-leave-from {
  opacity: 1;
  transform: scale(1);
}

@media (max-width: 768px) {
  .modal-backdrop {
    padding-block: 5rem;
  }

  .modal-panel {
    padding: 3rem 1.75rem 2.25rem;
  }

  .stat-card {
    flex: 1 1 160px;
  }
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
