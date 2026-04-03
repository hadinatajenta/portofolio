<template>
  <transition name="modal-fade">
    <div
      v-if="project"
      class="modal-backdrop"
      @click.self="$emit('close')"
    >
      <div class="modal-panel">
        <!-- Close -->
        <button
          type="button"
          class="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border-2 border-black/10 bg-white text-black transition hover:border-black hover:bg-black/5"
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
            <div class="flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-wide text-black/40">
              <span class="inline-flex items-center gap-1.5">
                <span class="h-1.5 w-1.5 rounded-full" :class="project.isPrivate ? 'bg-amber-500' : 'bg-emerald-500'"></span>
                {{ project.type }}
              </span>
              <span v-if="project.domain">· {{ project.domain }}</span>
              <span>· {{ project.status }}</span>
              <span>· {{ project.year }}</span>
            </div>
            <h2 class="text-3xl font-bold text-black">{{ project.title }}</h2>
            <p class="text-base leading-relaxed text-black/60">{{ project.description }}</p>
          </header>

          <!-- Why It Matters -->
          <div class="rounded-xl bg-black/[0.02] border border-black/6 p-5">
            <p class="text-xs font-bold uppercase tracking-widest text-black/35 mb-2">Why it matters</p>
            <p class="text-sm text-black/70 leading-relaxed">{{ project.whyItMatters }}</p>
          </div>

          <!-- My Role -->
          <div class="space-y-2">
            <h3 class="text-xs font-bold uppercase tracking-widest text-black/35">My Role</h3>
            <p class="text-sm text-black/70 leading-relaxed">{{ project.myRole }}</p>
          </div>

          <!-- Impact -->
          <div v-if="project.impact && project.impact.length > 0" class="space-y-3">
            <h3 class="text-xs font-bold uppercase tracking-widest text-black/35">Measurable Impact</h3>
            <div class="grid gap-3 sm:grid-cols-2">
              <div
                v-for="(metric, idx) in project.impact"
                :key="idx"
                class="rounded-lg border border-black/8 bg-white p-4"
              >
                <p class="text-sm font-bold text-black">{{ metric.result }}</p>
                <p class="text-[11px] text-black/45 mt-1">{{ metric.context }}</p>
              </div>
            </div>
          </div>

          <!-- Architecture -->
          <div v-if="project.architecture" class="space-y-4">
            <h3 class="text-xs font-bold uppercase tracking-widest text-black/35">Architecture</h3>

            <div class="space-y-3">
              <div class="space-y-1.5">
                <p class="text-[11px] font-bold uppercase tracking-wider text-black/30">What was built</p>
                <p class="text-sm text-black/70 leading-relaxed">{{ project.architecture.system }}</p>
              </div>

              <div class="space-y-1.5">
                <p class="text-[11px] font-bold uppercase tracking-wider text-black/30">Why this approach</p>
                <p class="text-sm text-black/70 leading-relaxed">{{ project.architecture.why }}</p>
              </div>

              <div class="space-y-1.5">
                <p class="text-[11px] font-bold uppercase tracking-wider text-black/30">Trade-off</p>
                <p class="text-sm text-black/60 leading-relaxed italic">{{ project.architecture.tradeoff }}</p>
              </div>
            </div>
          </div>

          <!-- Highlights -->
          <div v-if="project.highlights && project.highlights.length > 0" class="space-y-3">
            <h3 class="text-xs font-bold uppercase tracking-widest text-black/35">Key Contributions</h3>
            <ul class="space-y-2">
              <li v-for="(note, index) in project.highlights" :key="index" class="flex gap-3 text-sm text-black/60">
                <span class="mt-1.5 h-1.5 w-1.5 rounded-full bg-black/25 flex-shrink-0"></span>
                <span>{{ note }}</span>
              </li>
            </ul>
          </div>

          <!-- Tech Stack -->
          <div class="space-y-3">
            <h3 class="text-xs font-bold uppercase tracking-widest text-black/35">Tech Stack</h3>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tech in project.stack"
                :key="tech"
                class="rounded-full bg-black/6 border border-black/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-black/60"
              >
                {{ tech }}
              </span>
            </div>
          </div>

          <!-- Actions -->
          <div class="flex flex-wrap gap-3 pt-2 border-t border-black/8">
            <a
              v-if="project.link"
              :href="project.link"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 rounded-lg border-2 border-black bg-black px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-black/85"
            >
              View Project
              <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14 3h7m0 0v7m0-7L10 14" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 10v11h11" />
              </svg>
            </a>
            <span
              v-else
              class="inline-flex items-center gap-2 rounded-lg border-2 border-black/10 px-5 py-2.5 text-sm font-medium text-black/40"
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
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(16px);
}

.modal-panel {
  position: relative;
  width: min(720px, 100%);
  border-radius: 1rem;
  border: 2px solid rgba(0, 0, 0, 0.08);
  background: white;
  padding: 3rem 2.5rem 2.5rem;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.12);
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
