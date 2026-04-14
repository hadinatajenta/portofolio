<template>
  <tr
    class="border-b border-black/5 group hover:bg-black/[0.02] cursor-pointer transition-colors"
    @click="navigate"
  >
    <!-- Name + Type -->
    <td class="px-5 py-4">
      <div class="space-y-0.5">
        <p class="font-semibold text-black group-hover:text-black/80 transition-colors leading-snug">
          {{ project.title }}
        </p>
        <p class="text-[11px] text-black/40 flex items-center gap-1.5">
          <span class="h-1.5 w-1.5 rounded-full flex-shrink-0" :class="project.isPrivate ? 'bg-amber-400' : 'bg-emerald-400'"></span>
          {{ project.type }}<span v-if="project.domain"> · {{ project.domain }}</span>
        </p>
      </div>
    </td>

    <!-- Stack -->
    <td class="px-5 py-4 hidden md:table-cell">
      <div class="flex flex-wrap gap-1">
        <span
          v-for="tech in project.stack.slice(0, 3)"
          :key="tech"
          class="rounded-full bg-black/[0.04] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-black/45"
        >
          {{ tech }}
        </span>
        <span v-if="project.stack.length > 3" class="text-[10px] text-black/30 font-semibold self-center">
          +{{ project.stack.length - 3 }}
        </span>
      </div>
    </td>

    <!-- Artifacts -->
    <td class="px-5 py-4 hidden lg:table-cell">
      <span v-if="artifactSummary" class="text-[11px] text-black/40 font-medium">{{ artifactSummary }}</span>
      <span v-else class="text-[11px] text-black/20">—</span>
    </td>

    <!-- Status -->
    <td class="px-5 py-4">
      <span class="text-[10px] font-bold uppercase tracking-wider" :class="statusColor">
        {{ project.status }}
      </span>
    </td>

    <!-- Year -->
    <td class="px-5 py-4 text-right text-sm text-black/40 font-medium">
      {{ project.year }}
    </td>

    <!-- Arrow -->
    <td class="px-3 py-4">
      <svg class="h-4 w-4 text-black/20 group-hover:text-black/50 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </td>
  </tr>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { getArtifactSummary } from '../../composables/useProjectsData'

const props = defineProps({
  project: { type: Object, required: true }
})

const router = useRouter()
const navigate = () => router.push({ name: 'project-detail', params: { id: props.project.id } })

const artifactSummary = computed(() => getArtifactSummary(props.project))

const statusColor = computed(() => {
  const s = props.project.status
  if (s === 'In production' || s === 'Live') return 'text-emerald-600'
  if (s === 'Launched') return 'text-sky-600'
  return 'text-black/30'
})
</script>
