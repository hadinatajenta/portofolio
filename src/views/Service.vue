<template>
  <DefaultLayout>
    <section class="space-y-16">
      <header class="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.05] px-6 py-14 sm:px-10 lg:px-16">
        <div class="absolute -top-24 -right-20 h-56 w-56 rounded-full bg-purple-500/30 blur-[110px]"></div>
        <div class="absolute -bottom-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-400/15 blur-[140px]"></div>

        <div class="relative grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
          <div class="space-y-6 text-center lg:text-left">
            <span class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white/80">
              Services
            </span>
            <h1 class="text-4xl sm:text-5xl font-semibold leading-tight text-white">
              Engineering leadership for teams shipping dependable digital products.
            </h1>
            <p class="text-lg text-gray-300 max-w-xl mx-auto lg:mx-0">
              From backend architecture to end-to-end delivery. I help product teams move fast without breaking reliability, accessibility, or quality.
            </p>
            <div class="flex flex-wrap justify-center lg:justify-start gap-3 text-xs uppercase tracking-[0.2em] text-gray-300">
              <span class="tag-chip">Architecture & Scalability</span>
              <span class="tag-chip">Product Engineering</span>
              <span class="tag-chip">Team Enablement</span>
            </div>
          </div>

          <div class="relative rounded-3xl border border-white/15 bg-white/[0.06] p-8 backdrop-blur-xl shadow-[0_32px_120px_rgba(75,51,129,0.35)]">
            <h2 class="text-xl font-semibold text-white">Where I plug in</h2>
            <p class="mt-3 text-sm leading-relaxed text-gray-300">
              Need an experienced engineer to unblock the roadmap? I partner with founders and product leaders to ship critical releases, mentor dev teams, and build sustainable systems.
            </p>
            <ul class="mt-6 space-y-3 text-sm text-gray-200">
              <li class="flex gap-3">
                <span class="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-300"></span>
                <span>Fractional engineering leadership focused on delivery excellence.</span>
              </li>
              <li class="flex gap-3">
                <span class="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-300"></span>
                <span>Hands-on development for mission-critical launches.</span>
              </li>
              <li class="flex gap-3">
                <span class="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-300"></span>
                <span>Mentorship programmes elevating internal teams.</span>
              </li>
            </ul>
            <router-link
              to="/contact"
              class="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/60 hover:text-cyan-100"
            >
              Start a project conversation
              <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H7" />
              </svg>
            </router-link>
          </div>
        </div>
      </header>

      <section class="space-y-8">
        <div class="flex flex-wrap items-center justify-between gap-4">
          <h2 class="text-2xl font-semibold text-white">Engagement tracks</h2>
          <p class="text-sm text-gray-400 max-w-xl">
            Flexible collaborations tailored to your product stage. Each track blends architecture, delivery, and mentorship to accelerate outcomes.
          </p>
        </div>

        <div class="grid gap-6 lg:grid-cols-3">
          <article
            v-for="service in servicePackages"
            :key="service.id"
            class="group rounded-[28px] border border-white/12 bg-white/[0.05] p-7 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.08]"
          >
            <div class="flex items-center justify-between">
              <span class="inline-flex items-center gap-2 rounded-full bg-purple-500/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-purple-100">
                {{ service.tier }}
              </span>
              <span class="text-sm font-semibold text-white/80">{{ service.duration }}</span>
            </div>
            <h3 class="mt-6 text-xl font-semibold text-white">{{ service.title }}</h3>
            <p class="mt-3 text-sm leading-relaxed text-gray-300">
              {{ service.description }}
            </p>
            <ul class="mt-6 space-y-2 text-sm text-gray-200">
              <li v-for="(item, idx) in service.deliverables" :key="idx" class="flex gap-3">
                <span class="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-300"></span>
                <span>{{ item }}</span>
              </li>
            </ul>
            <div class="mt-8 flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.16em] text-gray-300">
              <span v-for="tag in service.tags" :key="tag" class="tag-chip">{{ tag }}</span>
            </div>
          </article>
        </div>
      </section>

      <section class="grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
        <div class="space-y-6 rounded-[28px] border border-white/12 bg-white/[0.05] p-8 backdrop-blur-xl">
          <h2 class="text-2xl font-semibold text-white">How we work together</h2>
          <p class="text-sm text-gray-300">
            A collaborative rhythm that keeps momentum steady and communication transparent.
          </p>
          <ol class="space-y-5 text-sm text-gray-200">
            <li v-for="(step, idx) in process" :key="idx" class="flex gap-4">
              <span class="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/10 text-xs font-semibold text-white">
                {{ idx + 1 }}
              </span>
              <div>
                <p class="font-semibold text-white/90">{{ step.title }}</p>
                <p class="mt-1 text-sm text-gray-300">{{ step.detail }}</p>
              </div>
            </li>
          </ol>
        </div>

        <div class="space-y-6 rounded-[28px] border border-white/12 bg-white/[0.05] p-8 backdrop-blur-xl">
          <h2 class="text-2xl font-semibold text-white">Stacks & tools</h2>
          <p class="text-sm text-gray-300">
            Comfortable across modern backend stacks, frontend frameworks, and product ops tooling.
          </p>
          <div class="grid grid-cols-2 gap-4 text-sm text-gray-200">
            <div v-for="(group, idx) in toolset" :key="idx" class="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <h3 class="text-xs font-semibold uppercase tracking-[0.18em] text-gray-400">{{ group.title }}</h3>
              <ul class="mt-2 space-y-1">
                <li v-for="item in group.items" :key="item" class="text-white/80">{{ item }}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </section>
  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from '../layouts/DefaultLayout.vue';

const servicePackages = [
  {
    id: 1,
    tier: 'Launch',
    duration: '4–6 weeks',
    title: 'Product Kickstart Sprint',
    description: 'Foundational architecture, proof-of-concept builds, and delivery planning for early-stage teams.',
    deliverables: [
      'Architecture blueprint and risk register',
      'Core feature implementation with production-ready code',
      'CI/CD pipeline setup and deployment playbook'
    ],
    tags: ['Architecture', 'Delivery', 'Mentorship']
  },
  {
    id: 2,
    tier: 'Growth',
    duration: '2–3 months',
    title: 'Scale & Optimise Engagement',
    description: 'Drive performance, reliability, and developer experience as your product gains traction.',
    deliverables: [
      'Service performance audit and improvement roadmap',
      'Resilience playbooks and incident response workflows',
      'Mentorship and pairing sessions with internal teams'
    ],
    tags: ['Scaling', 'Reliability', 'Team Enablement']
  },
  {
    id: 3,
    tier: 'Partner',
    duration: 'Retainer',
    title: 'Fractional Engineering Leadership',
    description: 'An embedded partner for teams needing strategic direction and hands-on delivery support.',
    deliverables: [
      'Quarterly product roadmapping and prioritisation',
      'Cross-team alignment, rituals, and review facilitation',
      'Ongoing code reviews, pairing, and hiring support'
    ],
    tags: ['Strategy', 'Leadership', 'Continuous Partnership']
  }
];

const process = [
  {
    title: 'Discovery workshop',
    detail: 'We align on goals, constraints, and context. Expect collaborative discussions, not sales pitches.'
  },
  {
    title: 'Roadmap & engagement plan',
    detail: 'Translate priorities into actionable milestones with clear responsibilities and cadences.'
  },
  {
    title: 'Build & iterate',
    detail: 'Hands-on engineering plus ritual coaching. Weekly demos keep stakeholders in the loop.'
  },
  {
    title: 'Handover & empowerment',
    detail: 'Documented learnings, onboarding support, and final refinements so your team can thrive.'
  }
];

const toolset = [
  {
    title: 'Core Engineering',
    items: ['Go', 'Laravel', 'Node.js', 'Vue', 'React']
  },
  {
    title: 'Infrastructure',
    items: ['Docker', 'Kubernetes', 'Redis', 'MySQL', 'PostgreSQL']
  },
  {
    title: 'Product Ops',
    items: ['Jira', 'Notion', 'Trello', 'Confluence', 'TeamGantt']
  },
  {
    title: 'Collaboration',
    items: ['Slack', 'MS Teams', 'Miro', 'Figma', 'PlantUML']
  }
];
</script>

<style scoped>
.tag-chip {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.45rem 1rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.08);
  color: rgba(226, 232, 240, 0.8);
}
</style>
