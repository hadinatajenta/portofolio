<template>
  <article
    class="group relative rounded-2xl border-2 border-[var(--color-border)] bg-[var(--color-surface)] p-8 transition-all duration-300 hover:border-[var(--color-border-hover)] hover:shadow-lg"
  >
    <!-- Header -->
    <div class="flex items-start justify-between gap-4">
      <div class="space-y-1">
        <div class="flex items-center gap-3">
          <h3 class="text-2xl font-bold text-[var(--color-text)]">{{ project.title }}</h3>
          <span
            v-if="project.isPrivate"
            class="inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-amber-600 dark:text-amber-400"
          >
            <span class="h-1.5 w-1.5 rounded-full bg-amber-500"></span>
            Confidential
          </span>
        </div>
        <div class="flex items-center gap-2 text-xs text-[var(--color-text-secondary)]">
          <span class="font-semibold uppercase tracking-wide">{{ project.type }}</span>
          <span v-if="project.domain">·</span>
          <span v-if="project.domain">{{ project.domain }}</span>
          <span>·</span>
          <span>{{ project.year }}</span>
        </div>
      </div>
      <button
        v-if="project.link"
        type="button"
        class="flex-shrink-0 inline-flex items-center gap-1.5 rounded-lg border-2 border-[var(--color-border-hover)] px-3 py-1.5 text-xs font-semibold text-[var(--color-text-secondary)] transition hover:border-[var(--color-border-strong)] hover:text-[var(--color-text)]"
        @click.stop="$emit('open-link', project.link)"
      >
        Visit
        <svg class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M14 3h7m0 0v7m0-7L10 14" />
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 10v11h11" />
        </svg>
      </button>
    </div>

    <!-- Value Proposition -->
    <p class="mt-4 text-base leading-relaxed text-[var(--color-text-secondary)]">
      {{ project.shortDescription }}
    </p>

    <!-- Why It Matters -->
    <p class="mt-3 text-sm text-[var(--color-text-muted)] italic">
      → {{ project.whyItMatters }}
    </p>

    <!-- Impact Metrics -->
    <div v-if="project.impact && project.impact.length > 0" class="mt-5 flex flex-wrap gap-3">
      <div
        v-for="(metric, idx) in project.impact"
        :key="idx"
        class="flex flex-col gap-0.5 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-hover)] px-4 py-3"
      >
        <span class="text-sm font-bold text-[var(--color-text)]">{{ metric.result }}</span>
        <span class="text-[11px] text-[var(--color-text-tertiary)]">{{ metric.context }}</span>
      </div>
    </div>

    <!-- My Role -->
    <div class="mt-5 flex items-start gap-2">
      <span class="text-[11px] font-bold uppercase tracking-wider text-[var(--color-text-muted)] mt-0.5 flex-shrink-0">My Role</span>
      <span class="text-sm text-[var(--color-text-secondary)]">{{ project.myRole }}</span>
    </div>

    <!-- Stack -->
    <div class="mt-5 flex flex-wrap gap-1.5">
      <span
        v-for="tech in project.stack"
        :key="tech"
        class="rounded-full bg-[var(--color-surface-hover)] border border-[var(--color-border)] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-[var(--color-text-secondary)]"
      >
        {{ tech }}
      </span>
    </div>

    <!-- CTA -->
    <button
      type="button"
      class="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-text)] transition hover:gap-3"
      @click="$emit('select', project)"
    >
      View technical details
      <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </button>
  </article>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    required: true
  }
})

defineEmits(['select', 'open-link'])
</script>
