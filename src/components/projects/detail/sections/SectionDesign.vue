<template>
  <div class="space-y-5">

    <div class="flex items-center justify-between">
      <h2 class="text-lg font-bold text-black">Design Files</h2>
      <span class="text-xs text-black/35 font-medium">{{ items.length }} file{{ items.length !== 1 ? 's' : '' }}</span>
    </div>

    <!-- Grid -->
    <div class="grid gap-4 sm:grid-cols-2">
      <div
        v-for="item in items"
        :key="item.id"
        class="group rounded-xl border border-black/8 bg-white overflow-hidden transition-all duration-200 hover:border-black/20 hover:shadow-md"
      >
        <!-- Thumbnail area -->
        <div class="relative h-44 bg-gradient-to-br from-black/[0.03] to-black/[0.06] flex items-center justify-center overflow-hidden">
          <img
            v-if="item.thumbnail"
            :src="item.thumbnail"
            :alt="item.title"
            class="absolute inset-0 w-full h-full object-cover"
          />
          <!-- Placeholder pattern -->
          <div v-else class="absolute inset-0 flex flex-col items-center justify-center gap-2">
            <div class="grid grid-cols-4 gap-1 opacity-15">
              <div v-for="i in 16" :key="i" class="h-5 w-8 rounded bg-black"></div>
            </div>
            <span class="relative z-10 mt-2 text-[10px] font-bold uppercase tracking-widest text-black/30 bg-white/80 px-2 py-0.5 rounded">
              Placeholder
            </span>
          </div>
        </div>

        <!-- Info -->
        <div class="px-4 py-3.5 space-y-1">
          <p class="font-semibold text-black text-sm leading-snug">{{ item.title }}</p>
          <p v-if="item.lastUpdated" class="text-[11px] text-black/40">Updated {{ item.lastUpdated }}</p>
          <p v-if="!item.thumbnail" class="text-[11px] text-black/30 italic">{{ item.description }}</p>
        </div>

        <!-- Action -->
        <div class="px-4 pb-4">
          <a
            v-if="item.figmaUrl"
            :href="item.figmaUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-1.5 text-xs font-semibold text-black/60 hover:text-black transition-colors"
          >
            Open in Figma
            <svg class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14 3h7m0 0v7m0-7L10 14" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 10v11h11" />
            </svg>
          </a>
          <span v-else class="text-[11px] text-black/25 font-medium">Figma link not added yet</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({ items: { type: Array, default: () => [] } })
</script>
