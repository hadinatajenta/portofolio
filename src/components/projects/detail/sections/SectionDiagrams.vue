<template>
  <div class="space-y-5">

    <div class="flex items-center justify-between gap-4 flex-wrap">
      <div>
        <h2 class="text-lg font-bold text-[var(--color-text)]">Diagrams</h2>
        <p class="text-xs text-[var(--color-text-muted)] mt-0.5">{{ filtered.length }} of {{ items.length }}</p>
      </div>

      <!-- Type filter -->
      <div class="flex gap-1.5 flex-wrap">
        <button
          v-for="f in typeFilters"
          :key="f"
          type="button"
          class="px-3 py-1.5 rounded-full text-[11px] font-semibold transition-all"
          :class="activeFilter === f
            ? 'bg-[var(--color-text)] text-[var(--color-bg)]'
            : 'border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-border-hover)] hover:text-[var(--color-text)]'"
          @click="activeFilter = f"
        >
          {{ f }}
        </button>
      </div>
    </div>

    <!-- Grid -->
    <div class="grid gap-4 sm:grid-cols-2">
      <div
        v-for="item in filtered"
        :key="item.id"
        class="group rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] overflow-hidden transition-all duration-200 hover:border-[var(--color-border-hover)] hover:shadow-md cursor-pointer"
        @click="openViewer(item)"
      >
        <!-- Preview -->
        <div class="relative h-40 bg-[var(--color-surface-hover)] overflow-hidden border-b border-[var(--color-border)]">
          <img
            v-if="item.imageUrl"
            :src="item.imageUrl"
            :alt="item.title"
            class="absolute inset-0 w-full h-full object-contain p-4"
          />
          <!-- Grid placeholder -->
          <div v-else class="absolute inset-0 flex items-center justify-center">
            <svg class="h-10 w-10 text-[var(--color-border-strong)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
              <rect x="3" y="3" width="5" height="5" rx="0.5"/>
              <rect x="10" y="3" width="5" height="5" rx="0.5"/>
              <rect x="17" y="3" width="5" height="5" rx="0.5"/>
              <rect x="3" y="10" width="5" height="5" rx="0.5"/>
              <rect x="10" y="10" width="5" height="5" rx="0.5"/>
              <rect x="17" y="10" width="5" height="5" rx="0.5"/>
              <rect x="3" y="17" width="5" height="5" rx="0.5"/>
              <rect x="10" y="17" width="5" height="5" rx="0.5"/>
              <rect x="17" y="17" width="5" height="5" rx="0.5"/>
            </svg>
            <span class="absolute bottom-3 text-[10px] font-bold uppercase tracking-widest text-[var(--color-text-muted)]">Placeholder</span>
          </div>

          <!-- Type badge overlay -->
          <span class="absolute top-3 left-3 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-[var(--color-text-secondary)]">
            {{ item.type }}
          </span>

          <!-- Expand icon on hover -->
          <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-[var(--color-bg-overlay)]">
            <div class="rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] p-2">
              <svg class="h-4 w-4 text-[var(--color-text)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 4h-4" />
              </svg>
            </div>
          </div>
        </div>

        <!-- Info -->
        <div class="px-4 py-3 space-y-0.5">
          <p class="font-semibold text-sm text-[var(--color-text)] leading-snug">{{ item.title }}</p>
          <p v-if="item.description && !item.imageUrl" class="text-[11px] text-[var(--color-text-muted)] italic">{{ item.description }}</p>
        </div>
      </div>
    </div>

    <!-- Fullscreen Viewer -->
    <Teleport to="body">
      <Transition name="fade">
        <div
          v-if="viewerItem"
          class="fixed inset-0 z-50 flex items-center justify-center bg-[var(--color-bg-overlay)] backdrop-blur-sm p-6"
          @click.self="viewerItem = null"
        >
          <div class="relative max-w-5xl w-full bg-[var(--color-bg-elevated)] rounded-2xl overflow-hidden shadow-2xl border border-[var(--color-border)]">
            <!-- Header -->
            <div class="flex items-center justify-between px-6 py-4 border-b border-[var(--color-border)]">
              <div>
                <p class="font-semibold text-[var(--color-text)]">{{ viewerItem.title }}</p>
                <p class="text-[11px] text-[var(--color-text-muted)]">{{ viewerItem.type }}</p>
              </div>
              <button
                type="button"
                class="h-8 w-8 flex items-center justify-center rounded-lg border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors hover:bg-[var(--color-surface-hover)]"
                @click="viewerItem = null"
              >
                <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <!-- Image or placeholder -->
            <div class="flex items-center justify-center min-h-[400px] bg-[var(--color-surface)] p-8">
              <img
                v-if="viewerItem.imageUrl"
                :src="viewerItem.imageUrl"
                :alt="viewerItem.title"
                class="max-w-full max-h-[60vh] object-contain"
              />
              <div v-else class="text-center space-y-2">
                <p class="text-2xl text-[var(--color-text-muted)] font-bold">Image not added yet</p>
                <p class="text-sm text-[var(--color-text-tertiary)]">{{ viewerItem.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({ items: { type: Array, default: () => [] } })

const activeFilter = ref('All')
const viewerItem = ref(null)

const typeFilters = computed(() => {
  const types = new Set(props.items.map((i) => i.type))
  return ['All', ...Array.from(types).sort()]
})

const filtered = computed(() =>
  activeFilter.value === 'All'
    ? props.items
    : props.items.filter((i) => i.type === activeFilter.value)
)

const openViewer = (item) => {
  viewerItem.value = item
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.2s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
