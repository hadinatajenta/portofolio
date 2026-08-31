<template>
  <transition name="modal-fade">
    <div
      v-if="project"
      class="modal-backdrop"
      @click.self="$emit('close')"
    >
      <div class="modal-panel bg-[var(--color-bg-elevated)] border border-[var(--color-border)]">
        <!-- Close -->
        <button
          type="button"
          class="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border-2 border-[var(--color-border-hover)] bg-[var(--color-surface)] text-[var(--color-text)] transition hover:border-[var(--color-border-strong)] hover:bg-[var(--color-surface-hover)]"
          @click="$emit('close')"
        >
          <span class="sr-only">Close</span>
          <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div class="space-y-8">
          <!-- Header -->
          <header class="space-y-3">
            <div class="flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-wide text-[var(--color-text-muted)]">
              <span class="inline-flex items-center gap-1.5">
                <span class="h-1.5 w-1.5 rounded-full" :class="project.isPrivate ? 'bg-amber-400' : 'bg-emerald-400'"></span>
                {{ project.type }}
              </span>
              <span v-if="project.domain">· {{ project.domain }}</span>
              <span>· {{ project.status }}</span>
              <span>· {{ project.year }}</span>
            </div>
            <h2 class="text-3xl font-bold text-[var(--color-text)]">{{ project.title }}</h2>
            <p class="text-base leading-relaxed text-[var(--color-text-secondary)]">{{ project.description }}</p>
          </header>

          <!-- Why It Matters -->
          <div class="rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] p-5">
            <p class="text-xs font-bold uppercase tracking-widest text-[var(--color-text-muted)] mb-2">Why it matters</p>
            <p class="text-sm text-[var(--color-text-secondary)] leading-relaxed">{{ project.whyItMatters }}</p>
          </div>

          <!-- My Role -->
          <div class="space-y-2">
            <h3 class="text-xs font-bold uppercase tracking-widest text-[var(--color-text-muted)]">My Role</h3>
            <p class="text-sm text-[var(--color-text-secondary)] leading-relaxed">{{ project.myRole }}</p>
          </div>

          <!-- Impact -->
          <div v-if="project.impact && project.impact.length > 0" class="space-y-3">
            <h3 class="text-xs font-bold uppercase tracking-widest text-[var(--color-text-muted)]">Measurable Impact</h3>
            <div class="grid gap-3 sm:grid-cols-2">
              <div
                v-for="(metric, idx) in project.impact"
                :key="idx"
                class="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-4"
              >
                <p class="text-sm font-bold text-[var(--color-text)]">{{ metric.result }}</p>
                <p class="text-[11px] text-[var(--color-text-tertiary)] mt-1">{{ metric.context }}</p>
              </div>
            </div>
          </div>

          <!-- Architecture -->
          <div v-if="project.architecture" class="space-y-4">
            <h3 class="text-xs font-bold uppercase tracking-widest text-[var(--color-text-muted)]">Architecture</h3>

            <div class="space-y-3">
              <div class="space-y-1.5">
                <p class="text-[11px] font-bold uppercase tracking-wider text-[var(--color-text-muted)]">What was built</p>
                <p class="text-sm text-[var(--color-text-secondary)] leading-relaxed">{{ project.architecture.system }}</p>
              </div>

              <div class="space-y-1.5">
                <p class="text-[11px] font-bold uppercase tracking-wider text-[var(--color-text-muted)]">Why this approach</p>
                <p class="text-sm text-[var(--color-text-secondary)] leading-relaxed">{{ project.architecture.why }}</p>
              </div>

              <div class="space-y-1.5">
                <p class="text-[11px] font-bold uppercase tracking-wider text-[var(--color-text-muted)]">Trade-off</p>
                <p class="text-sm text-[var(--color-text-secondary)] leading-relaxed italic">{{ project.architecture.tradeoff }}</p>
              </div>
            </div>
          </div>

          <!-- Highlights -->
          <div v-if="project.highlights && project.highlights.length > 0" class="space-y-3">
            <h3 class="text-xs font-bold uppercase tracking-widest text-[var(--color-text-muted)]">Key Contributions</h3>
            <ul class="space-y-2">
              <li v-for="(note, index) in project.highlights" :key="index" class="flex gap-3 text-sm text-[var(--color-text-secondary)]">
                <span class="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--color-text-tertiary)] flex-shrink-0"></span>
                <span>{{ note }}</span>
              </li>
            </ul>
          </div>

          <!-- Tech Stack -->
          <div class="space-y-3">
            <h3 class="text-xs font-bold uppercase tracking-widest text-[var(--color-text-muted)]">Tech Stack</h3>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tech in project.stack"
                :key="tech"
                class="rounded-full bg-[var(--color-surface-hover)] border border-[var(--color-border)] px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-[var(--color-text-secondary)]"
              >
                {{ tech }}
              </span>
            </div>
          </div>

          <!-- Actions -->
          <div class="flex flex-wrap gap-3 pt-2 border-t border-[var(--color-border)]">
            <a
              v-if="project.link"
              :href="project.link"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 rounded-lg border-2 border-[var(--color-btn-bg)] bg-[var(--color-btn-bg)] px-5 py-2.5 text-sm font-semibold text-[var(--color-btn-text)] transition hover:opacity-85"
            >
              View Project
              <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14 3h7m0 0v7m0-7L10 14" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 10v11h11" />
              </svg>
            </a>
            <span
              v-else
              class="inline-flex items-center gap-2 rounded-lg border-2 border-[var(--color-border-hover)] bg-[var(--color-surface)] px-5 py-2.5 text-sm font-medium text-[var(--color-text-tertiary)]"
            >
              Private engagement
              <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    default: null
  }
})

defineEmits(['close'])
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 60;
  display: flex;
  justify-content: center;
  overflow-y: auto;
  padding: 3rem 1.5rem;
  background: var(--color-bg-overlay);
  backdrop-filter: blur(8px);
}

.modal-panel {
  position: relative;
  width: min(720px, 100%);
  border-radius: 1rem;
  padding: 3rem 2.5rem 2.5rem;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.5);
  margin-block: auto;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.25s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

@media (max-width: 640px) {
  .modal-backdrop {
    padding: 1rem;
  }

  .modal-panel {
    padding: 2.5rem 1.5rem 2rem;
  }
}
</style>
