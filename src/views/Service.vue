<template>
  <DefaultLayout>
    <section class="space-y-16">
      <header class="relative overflow-hidden rounded-2xl border-2 border-black/10 bg-white px-6 py-14 sm:px-10 lg:px-16">
        <div class="relative grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
          <div class="space-y-6 text-center lg:text-left">
            <span class="inline-flex items-center gap-2 rounded-lg border-2 border-black bg-black px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white">
              Services
            </span>
            <h1 class="text-4xl sm:text-5xl font-bold leading-tight text-black">
              Engineering leadership for teams shipping dependable digital products.
            </h1>
            <p class="text-lg text-black/60 max-w-xl mx-auto lg:mx-0">
              From backend architecture to end-to-end delivery. I help product teams move fast without breaking reliability, accessibility, or quality.
            </p>
            <div class="flex flex-wrap justify-center lg:justify-start gap-3 text-xs uppercase tracking-wide text-black/60">
              <span class="tag-chip">Architecture & Scalability</span>
              <span class="tag-chip">Product Engineering</span>
              <span class="tag-chip">Team Enablement</span>
            </div>
          </div>

          <div class="relative rounded-lg border-2 border-black/10 bg-white p-8 shadow-sm">
            <h2 class="text-xl font-bold text-black">Where I plug in</h2>
            <p class="mt-3 text-sm leading-relaxed text-black/60">
              Need an experienced engineer to unblock the roadmap? I partner with founders and product leaders to ship critical releases, mentor dev teams, and build sustainable systems.
            </p>
            <ul class="mt-6 space-y-3 text-sm text-black/70">
              <li class="flex gap-3">
                <span class="mt-1 h-1.5 w-1.5 rounded-full bg-black flex-shrink-0"></span>
                <span>Fractional engineering leadership focused on delivery excellence.</span>
              </li>
              <li class="flex gap-3">
                <span class="mt-1 h-1.5 w-1.5 rounded-full bg-black flex-shrink-0"></span>
                <span>Hands-on development for mission-critical launches.</span>
              </li>
              <li class="flex gap-3">
                <span class="mt-1 h-1.5 w-1.5 rounded-full bg-black flex-shrink-0"></span>
                <span>Mentorship programmes elevating internal teams.</span>
              </li>
            </ul>
            <router-link
              to="/contact"
              class="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-lg border-2 border-black bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-black/80"
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
          <h2 class="text-2xl font-bold text-black">Engagement tracks</h2>
          <p class="text-sm text-black/60 max-w-xl">
            Flexible collaborations tailored to your product stage. Each track blends architecture, delivery, and mentorship to accelerate outcomes.
          </p>
        </div>

        <div class="grid gap-6 lg:grid-cols-3">
          <article
            v-for="service in servicePackages"
            :key="service.id"
            class="group rounded-lg border-2 border-black/10 bg-white p-7 shadow-sm transition hover:shadow-md hover:border-black"
          >
            <div class="flex items-center justify-between">
              <span class="inline-flex items-center gap-2 rounded-lg bg-black/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-black">
                {{ service.tier }}
              </span>
              <span class="text-sm font-semibold text-black/60">{{ service.duration }}</span>
            </div>
            <h3 class="mt-6 text-xl font-bold text-black">{{ service.title }}</h3>
            <p class="mt-3 text-sm leading-relaxed text-black/60">
              {{ service.description }}
            </p>
            <ul class="mt-6 space-y-2 text-sm text-black/70">
              <li v-for="(item, idx) in service.deliverables" :key="idx" class="flex gap-3">
                <span class="mt-1 h-1.5 w-1.5 rounded-full bg-black flex-shrink-0"></span>
                <span>{{ item }}</span>
              </li>
            </ul>
            <div class="mt-8 flex flex-wrap gap-2 text-xs uppercase tracking-wide text-black/60">
              <span v-for="tag in service.tags" :key="tag" class="tag-chip">{{ tag }}</span>
            </div>
          </article>
        </div>
      </section>

      <section class="grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
        <div class="space-y-6 rounded-lg border-2 border-black/10 bg-white p-8 shadow-sm">
          <h2 class="text-2xl font-bold text-black">How we work together</h2>
          <p class="text-sm text-black/60">
            A collaborative rhythm that keeps momentum steady and communication transparent.
          </p>
          <ol class="space-y-5 text-sm text-black/70">
            <li v-for="(step, idx) in process" :key="idx" class="flex gap-4">
              <span class="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border-2 border-black/10 bg-black/5 text-xs font-semibold text-black">
                {{ idx + 1 }}
              </span>
              <div>
                <p class="font-semibold text-black">{{ step.title }}</p>
                <p class="mt-1 text-sm text-black/60">{{ step.detail }}</p>
              </div>
            </li>
          </ol>
        </div>

        <div class="space-y-6 rounded-lg border-2 border-black/10 bg-white p-8 shadow-sm">
          <h2 class="text-2xl font-bold text-black">Stacks & tools</h2>
          <p class="text-sm text-black/60">
            Comfortable across modern backend stacks, frontend frameworks, and product ops tooling.
          </p>
          <div class="grid grid-cols-2 gap-4 text-sm text-black/70">
            <div v-for="(group, idx) in toolset" :key="idx" class="rounded-lg border-2 border-black/10 bg-black/5 p-4">
              <h3 class="text-xs font-semibold uppercase tracking-wide text-black/60">{{ group.title }}</h3>
              <ul class="mt-2 space-y-1">
                <li v-for="item in group.items" :key="item" class="text-black/80">{{ item }}</li>
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
    tier: 'Scale',
    duration: '8–12 weeks',
    title: 'Delivery Acceleration',
    description: 'High-velocity execution paired with system reliability improvements and team upskilling.',
    deliverables: [
      'Lead feature development cycles → launch outcomes',
      'Production monitoring, alerting, observability setup',
      'Code review culture and test automation maturation'
    ],
    tags: ['Engineering', 'Performance', 'Quality']
  },
  {
    id: 3,
    tier: 'Sustain',
    duration: 'Ongoing',
    title: 'Engineering Leadership (Part-time)',
    description: 'Fractional CTO or Tech Lead role for sustained growth, architecture decisions, and team mentorship.',
    deliverables: [
      'Technical strategy and roadmap alignment',
      'Architecture reviews and system design patterns',
      'Mentoring and team development programmes'
    ],
    tags: ['Strategy', 'Mentorship', 'Architecture']
  }
];

const process = [
  {
    title: 'Kickoff & Alignment',
    detail: 'Understand product goals, technical constraints, and success metrics. Set clear deliverables and communication cadence.'
  },
  {
    title: 'Execution & Daily Sync',
    detail: 'Daily standup, weekly demos, and tight feedback loops. I ship, you steer. Full transparency on progress and blockers.'
  },
  {
    title: 'Knowledge Transfer',
    detail: 'Pair programming, code reviews, architecture docs, and team workshops. You retain expertise and autonomy.'
  },
  {
    title: 'Handoff & Sustain',
    detail: 'Ship production code, train your team, document systems. You\'re confident to own and scale it forward.'
  }
];

const toolset = [
  {
    title: 'Backend',
    items: ['Go (Gin)', 'Laravel', 'Node.js/Express', 'PostgreSQL', 'Redis']
  },
  {
    title: 'Frontend',
    items: ['Vue 3', 'React', 'Tailwind CSS', 'TypeScript']
  },
  {
    title: 'DevOps',
    items: ['Docker', 'GitHub Actions', 'CI/CD', 'Linux', 'Cloud (AWS/GCP)']
  },
  {
    title: 'Tools',
    items: ['Git', 'Figma', 'Linear', 'Datadog', 'Sentry']
  }
];
</script>

<style scoped>
.tag-chip {
  display: inline-flex;
  padding: 0.5rem 1rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.6);
  background: rgba(0, 0, 0, 0.05);
}
</style>
