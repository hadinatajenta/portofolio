<template>
  <div class="space-y-8">

    <!-- Short description -->
    <div class="space-y-3">
      <p class="text-base leading-relaxed text-black/70">{{ project.description }}</p>
      <div class="rounded-xl bg-black/[0.025] border border-black/6 px-5 py-4">
        <p class="text-[11px] font-bold uppercase tracking-widest text-black/30 mb-1.5">Why it matters</p>
        <p class="text-sm text-black/65 leading-relaxed italic">{{ project.whyItMatters }}</p>
      </div>
    </div>

    <!-- Artifact Quick Nav -->
    <div v-if="hasArtifacts" class="space-y-2">
      <p class="text-[11px] font-bold uppercase tracking-widest text-black/30">Artifacts</p>
      <div class="flex flex-wrap gap-2">
        <button
          v-for="item in artifactNav"
          :key="item.section"
          type="button"
          class="inline-flex items-center gap-2 rounded-lg border border-black/10 bg-white px-3.5 py-2 text-xs font-semibold text-black/60 transition hover:border-black/25 hover:text-black"
          @click="$emit('navigate', item.section)"
        >
          <span class="h-1.5 w-1.5 rounded-full bg-black/30 flex-shrink-0"></span>
          {{ item.label }}
          <span class="text-[10px] text-black/35 font-normal">{{ item.count }}</span>
        </button>
      </div>
    </div>

    <!-- 2-column: Impact + My Role -->
    <div class="grid gap-5 sm:grid-cols-2">
      <!-- Impact -->
      <div v-if="impact.length > 0" class="space-y-2">
        <p class="text-[11px] font-bold uppercase tracking-widest text-black/30">Measurable Impact</p>
        <div class="space-y-2">
          <div
            v-for="(metric, idx) in impact"
            :key="idx"
            class="rounded-lg border border-black/8 bg-white p-3.5"
          >
            <p class="text-sm font-semibold text-black leading-snug">{{ metric.result }}</p>
            <p class="text-[11px] text-black/40 mt-0.5">{{ metric.context }}</p>
          </div>
        </div>
      </div>

      <!-- My Role -->
      <div class="space-y-2">
        <p class="text-[11px] font-bold uppercase tracking-widest text-black/30">My Role</p>
        <p class="text-sm text-black/65 leading-relaxed">{{ project.myRole }}</p>
      </div>
    </div>

    <!-- Architecture -->
    <div v-if="project.architecture" class="space-y-3">
      <p class="text-[11px] font-bold uppercase tracking-widest text-black/30">Architecture</p>
      <div class="rounded-xl border border-black/8 divide-y divide-black/6 overflow-hidden">
        <div class="px-5 py-4 space-y-1">
          <p class="text-[10px] font-bold uppercase tracking-wider text-black/30">What was built</p>
          <p class="text-sm text-black/65 leading-relaxed">{{ project.architecture.system }}</p>
        </div>
        <div class="px-5 py-4 space-y-1">
          <p class="text-[10px] font-bold uppercase tracking-wider text-black/30">Why this approach</p>
          <p class="text-sm text-black/65 leading-relaxed">{{ project.architecture.why }}</p>
        </div>
        <div class="px-5 py-4 space-y-1">
          <p class="text-[10px] font-bold uppercase tracking-wider text-black/30">Trade-off</p>
          <p class="text-sm text-black/55 leading-relaxed italic">{{ project.architecture.tradeoff }}</p>
        </div>
      </div>
    </div>

    <!-- Key Contributions -->
    <div v-if="project.highlights && project.highlights.length > 0" class="space-y-3">
      <p class="text-[11px] font-bold uppercase tracking-widest text-black/30">Key Contributions</p>
      <ul class="space-y-2.5">
        <li v-for="(note, i) in project.highlights" :key="i" class="flex gap-3 text-sm text-black/60">
          <span class="mt-1.5 h-1.5 w-1.5 rounded-full bg-black/20 flex-shrink-0"></span>
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
