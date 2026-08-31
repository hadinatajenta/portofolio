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

    <!-- Architecture -->
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

  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  project: { type: Object, required: true },
  artifactCounts: { type: Object, default: () => ({}) }
})

defineEmits(['navigate'])

const impact = computed(() => {
  if (!props.project.impact) return []
  return Array.isArray(props.project.impact)
    ? props.project.impact.filter((m) => typeof m === 'object' && m.result)
    : []
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
