<template>
  <div class="space-y-8">

    <!-- Short description -->
    <div class="space-y-3">
      <p class="text-base leading-relaxed text-[var(--color-text-secondary)]">{{ project.description }}</p>
      <div class="rounded-xl bg-[var(--color-surface-hover)] border border-[var(--color-border)] px-5 py-4">
        <p class="text-[11px] font-bold uppercase tracking-widest text-[var(--color-text-muted)] mb-1.5">Why it matters</p>
        <p class="text-sm text-[var(--color-text-secondary)] leading-relaxed italic">{{ project.whyItMatters }}</p>
      </div>
    </div>

    <!-- Artifact Quick Nav -->
    <div v-if="hasArtifacts" class="space-y-2">
      <p class="text-[11px] font-bold uppercase tracking-widest text-[var(--color-text-muted)]">Artifacts</p>
      <div class="flex flex-wrap gap-2">
        <button
          v-for="item in artifactNav"
          :key="item.section"
          type="button"
          class="inline-flex items-center gap-2 rounded-lg border border-[var(--color-border-strong)] bg-[var(--color-surface)] px-3.5 py-2 text-xs font-semibold text-[var(--color-text-secondary)] transition hover:border-[var(--color-text-muted)] hover:text-[var(--color-text)]"
          @click="$emit('navigate', item.section)"
        >
          <span class="h-1.5 w-1.5 rounded-full bg-[var(--color-text-tertiary)] flex-shrink-0"></span>
          {{ item.label }}
          <span class="text-[10px] text-[var(--color-text-muted)] font-normal">{{ item.count }}</span>
        </button>
      </div>
    </div>

    <!-- 2-column: Impact + My Role -->
    <div class="grid gap-5 sm:grid-cols-2">
      <!-- Impact -->
      <div v-if="impact.length > 0" class="space-y-2">
        <p class="text-[11px] font-bold uppercase tracking-widest text-[var(--color-text-muted)]">Measurable Impact</p>
        <div class="space-y-2">
          <div
            v-for="(metric, idx) in impact"
            :key="idx"
            class="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-3.5"
          >
            <p class="text-sm font-semibold text-[var(--color-text)] leading-snug">{{ metric.result }}</p>
            <p class="text-[11px] text-[var(--color-text-muted)] mt-0.5">{{ metric.context }}</p>
          </div>
        </div>
      </div>

      <!-- My Role -->
      <div class="space-y-2">
        <p class="text-[11px] font-bold uppercase tracking-widest text-[var(--color-text-muted)]">My Role</p>
        <p class="text-sm text-[var(--color-text-secondary)] leading-relaxed">{{ project.myRole }}</p>
      </div>
    </div>

    <!-- Featured Architecture & System Diagram -->
    <div v-if="featuredDiagram" class="space-y-3">
      <div class="flex items-center justify-between">
        <p class="text-[11px] font-bold uppercase tracking-widest text-[var(--color-text-muted)] font-dot">System Architecture &amp; Overview</p>
        <span class="text-[10px] uppercase font-bold text-[var(--color-text-tertiary)] font-mono">
          {{ featuredDiagram.type || 'Architecture' }}
        </span>
      </div>
      <div
        class="group relative rounded-2xl border-2 border-[var(--color-border)] bg-[var(--color-surface)] overflow-hidden transition-all duration-300 hover:border-[var(--color-border-strong)] hover:shadow-xl cursor-zoom-in"
        @click="isViewerOpen = true"
      >
        <div class="relative aspect-[16/9] w-full bg-[var(--color-surface-hover)] flex items-center justify-center p-2 sm:p-4 overflow-hidden">
          <img
            :src="featuredDiagram.imageUrl"
            :alt="featuredDiagram.title"
            class="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
          />
          <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
            <span class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--color-bg-elevated)] border border-[var(--color-border-strong)] text-xs font-semibold text-[var(--color-text)] shadow-xl">
              <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
              </svg>
              Click to view full architecture diagram
            </span>
          </div>
        </div>
        <div v-if="featuredDiagram.description" class="px-5 py-3 border-t border-[var(--color-border)] bg-[var(--color-bg-elevated)] flex items-center justify-between gap-4">
          <p class="text-xs text-[var(--color-text-secondary)] leading-relaxed">{{ featuredDiagram.description }}</p>
          <span class="hidden sm:inline-flex text-[11px] font-semibold text-[var(--color-text)] whitespace-nowrap group-hover:underline">
            Expand ↗
          </span>
        </div>
      </div>
    </div>

    <!-- Architecture Breakdown -->
    <div v-if="project.architecture" class="space-y-3">
      <p class="text-[11px] font-bold uppercase tracking-widest text-[var(--color-text-muted)]">Architecture</p>
      <div class="rounded-xl border border-[var(--color-border)] divide-y divide-[var(--color-border)] overflow-hidden bg-[var(--color-surface)]">
        <div class="px-5 py-4 space-y-1">
          <p class="text-[10px] font-bold uppercase tracking-wider text-[var(--color-text-muted)]">What was built</p>
          <p class="text-sm text-[var(--color-text-secondary)] leading-relaxed">{{ project.architecture.system }}</p>
        </div>
        <div class="px-5 py-4 space-y-1">
          <p class="text-[10px] font-bold uppercase tracking-wider text-[var(--color-text-muted)]">Why this approach</p>
          <p class="text-sm text-[var(--color-text-secondary)] leading-relaxed">{{ project.architecture.why }}</p>
        </div>
        <div class="px-5 py-4 space-y-1">
          <p class="text-[10px] font-bold uppercase tracking-wider text-[var(--color-text-muted)]">Trade-off</p>
          <p class="text-sm text-[var(--color-text-tertiary)] leading-relaxed italic">{{ project.architecture.tradeoff }}</p>
        </div>
      </div>
    </div>

    <!-- Key Contributions -->
    <div v-if="project.highlights && project.highlights.length > 0" class="space-y-3">
      <p class="text-[11px] font-bold uppercase tracking-widest text-[var(--color-text-muted)]">Key Contributions</p>
      <ul class="space-y-2.5">
        <li v-for="(note, i) in project.highlights" :key="i" class="flex gap-3 text-sm text-[var(--color-text-secondary)]">
          <span class="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--color-text-tertiary)] flex-shrink-0"></span>
          <span>{{ note }}</span>
        </li>
      </ul>
    </div>

    <!-- Lightbox Teleport -->
    <Teleport to="body">
      <Transition name="fade">
        <div
          v-if="isViewerOpen && featuredDiagram"
          class="fixed inset-0 z-50 flex items-center justify-center bg-[var(--color-bg-overlay)] backdrop-blur-sm p-4 sm:p-6"
          @click.self="isViewerOpen = false"
        >
          <div class="relative max-w-6xl w-full bg-[var(--color-bg-elevated)] rounded-2xl overflow-hidden shadow-2xl border-2 border-[var(--color-border-strong)] flex flex-col max-h-[92vh]">
            <div class="flex items-center justify-between px-6 py-4 border-b border-[var(--color-border)]">
              <div>
                <p class="font-bold text-base sm:text-lg text-[var(--color-text)]">{{ featuredDiagram.title }}</p>
                <p class="text-xs text-[var(--color-text-muted)] font-mono">{{ featuredDiagram.type || 'Architecture' }}</p>
              </div>
              <button
                type="button"
                class="h-9 w-9 flex items-center justify-center rounded-lg border border-[var(--color-border)] text-[var(--color-text)] hover:bg-[var(--color-surface-hover)] transition-colors"
                @click="isViewerOpen = false"
              >
                <span class="sr-only">Close</span>
                <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div class="flex-1 flex items-center justify-center bg-[var(--color-surface)] p-4 sm:p-8 overflow-auto">
              <img
                :src="featuredDiagram.imageUrl"
                :alt="featuredDiagram.title"
                class="max-w-full max-h-[72vh] object-contain mx-auto"
              />
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  project: { type: Object, required: true },
  artifactCounts: { type: Object, default: () => ({}) }
})

defineEmits(['navigate'])

const isViewerOpen = ref(false)

const impact = computed(() => {
  if (!props.project.impact) return []
  return Array.isArray(props.project.impact)
    ? props.project.impact.filter((m) => typeof m === 'object' && m.result)
    : []
})

const featuredDiagram = computed(() => {
  const diagrams = props.project.artifacts?.diagrams
  if (!Array.isArray(diagrams)) return null
  return diagrams.find(
    (d) => d.imageUrl && !d.description?.toLowerCase().includes('placeholder')
  ) || null
})

const artifactNav = computed(() => {
  const c = props.artifactCounts
  const items = []
  if (c.code > 0) items.push({ section: 'code', label: 'Code', count: c.code })
  if (c.design > 0) items.push({ section: 'design', label: 'Design', count: c.design })
  if (c.diagrams > 0) items.push({ section: 'diagrams', label: 'Diagrams', count: c.diagrams })
  if (c.docs > 0) items.push({ section: 'docs', label: 'Docs', count: c.docs })
  return items
})

const hasArtifacts = computed(() => artifactNav.value.length > 0)
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
