<template>
  <div class="space-y-4">

    <div class="flex items-center justify-between">
      <h2 class="text-lg font-bold text-black">Documentation</h2>
      <span class="text-xs text-black/35 font-medium">{{ items.length }} doc{{ items.length !== 1 ? 's' : '' }}</span>
    </div>

    <!-- Vertical list -->
    <div class="space-y-2">
      <div
        v-for="item in items"
        :key="item.id"
        class="group rounded-xl border border-black/8 bg-white transition-all duration-150 hover:border-black/20"
        :class="item.url ? 'cursor-pointer' : ''"
      >
        <div class="px-5 py-4 flex items-start justify-between gap-4">
          <div class="space-y-1.5 flex-1 min-w-0">
            <p class="font-semibold text-black leading-snug">{{ item.title }}</p>
            <p v-if="item.preview" class="text-sm text-black/50 leading-relaxed line-clamp-2">
              {{ item.preview }}
            </p>
            <p v-if="item.lastUpdated" class="text-[11px] text-black/30">
              Updated {{ item.lastUpdated }}
            </p>
          </div>

          <!-- Action -->
          <div class="flex-shrink-0 pt-0.5">
            <a
              v-if="item.url"
              :href="item.url"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1.5 text-xs font-semibold text-black/50 hover:text-black transition-colors"
              @click.stop
            >
              Read
              <svg class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14 3h7m0 0v7m0-7L10 14" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 10v11h11" />
              </svg>
            </a>
            <span v-else class="text-[11px] text-black/20 font-medium">Coming soon</span>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
defineProps({ items: { type: Array, default: () => [] } })
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
