<template>
  <div class="space-y-5">

    <div class="flex items-center justify-between">
      <h2 class="text-lg font-bold text-[var(--color-text)]">Design Files</h2>
      <span class="text-xs text-[var(--color-text-muted)] font-medium">{{ items.length }} file{{ items.length !== 1 ? 's' : '' }}</span>
    </div>

    <!-- Grid -->
    <div class="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2">
      <div
        v-for="item in items"
        :key="item.id"
        class="group rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] overflow-hidden transition-all duration-200 hover:border-[var(--color-border-hover)] hover:shadow-md"
      >
        <!-- Thumbnail area -->
        <div class="relative h-36 sm:h-44 bg-[var(--color-surface-hover)] flex items-center justify-center overflow-hidden border-b border-[var(--color-border)]">
          <img
            v-if="item.thumbnail"
            :src="item.thumbnail"
            :alt="item.title"
            class="absolute inset-0 w-full h-full object-cover"
          />
          <!-- Placeholder pattern -->
          <div v-else class="absolute inset-0 flex flex-col items-center justify-center gap-2">
            <div class="grid grid-cols-4 gap-1 opacity-15">
              <div v-for="i in 16" :key="i" class="h-5 w-8 rounded bg-[var(--color-text)]"></div>
            </div>
            <span class="relative z-10 mt-2 text-[10px] font-bold uppercase tracking-widest text-[var(--color-text-muted)] bg-[var(--color-bg-overlay)] px-2 py-0.5 rounded">
              Placeholder
            </span>
          </div>
        </div>

        <!-- Info -->
        <div class="px-4 py-3.5 space-y-1">
          <p class="font-semibold text-[var(--color-text)] text-sm leading-snug">{{ item.title }}</p>
          <p v-if="item.lastUpdated" class="text-[11px] text-[var(--color-text-muted)]">Updated {{ item.lastUpdated }}</p>
          <p v-if="!item.thumbnail" class="text-[11px] text-[var(--color-text-tertiary)] italic">{{ item.description }}</p>
        </div>

        <!-- Action -->
        <div class="px-4 pb-4">
          <a
            v-if="item.figmaUrl"
            :href="item.figmaUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors"
          >
            Open in Figma
            <svg class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14 3h7m0 0v7m0-7L10 14" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 10v11h11" />
            </svg>
          </a>
          <span v-else class="text-[11px] text-[var(--color-text-tertiary)] font-medium">Figma link not added yet</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({ items: { type: Array, default: () => [] } })
</script>
