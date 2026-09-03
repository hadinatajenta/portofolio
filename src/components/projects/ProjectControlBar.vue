<template>
  <div class="space-y-3">
    <!-- Search — full width on mobile, constrained on desktop -->
    <div class="relative w-full sm:max-w-xs">
      <svg class="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--color-text-muted)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="11" cy="11" r="8" /><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-4.35-4.35" />
      </svg>
      <input
        :value="search"
        type="search"
        placeholder="Search projects, stack..."
        class="w-full pl-9 pr-4 py-2.5 text-sm rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] placeholder:text-[var(--color-text-muted)] text-[var(--color-text)] focus:outline-none focus:border-[var(--color-border-strong)] focus:ring-2 focus:ring-[var(--color-surface-hover)] transition"
        @input="$emit('update:search', $event.target.value)"
      />
    </div>

    <!-- Filters row — horizontal scroll on mobile -->
    <div class="flex items-center gap-2 overflow-x-auto scrollbar-hide py-1">
      <!-- Type filter -->
      <select
        :value="filterType"
        class="flex-shrink-0 py-2 pl-3 pr-8 text-xs font-medium rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-secondary)] focus:outline-none focus:border-[var(--color-border-strong)] transition appearance-none cursor-pointer"
        @change="$emit('update:filterType', $event.target.value)"
      >
        <option v-for="t in types" :key="t" :value="t" class="bg-[var(--color-surface)]">{{ t === 'All' ? 'All types' : t }}</option>
      </select>

      <!-- Status filter -->
      <select
        :value="filterStatus"
        class="flex-shrink-0 py-2 pl-3 pr-8 text-xs font-medium rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-secondary)] focus:outline-none focus:border-[var(--color-border-strong)] transition appearance-none cursor-pointer"
        @change="$emit('update:filterStatus', $event.target.value)"
      >
        <option v-for="s in statuses" :key="s" :value="s" class="bg-[var(--color-surface)]">{{ s === 'All' ? 'All statuses' : s }}</option>
      </select>

      <!-- Sort -->
      <select
        :value="sortBy"
        class="flex-shrink-0 py-2 pl-3 pr-8 text-xs font-medium rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-secondary)] focus:outline-none focus:border-[var(--color-border-strong)] transition appearance-none cursor-pointer"
        @change="$emit('update:sortBy', $event.target.value)"
      >
        <option value="year" class="bg-[var(--color-surface)]">Newest first</option>
        <option value="name" class="bg-[var(--color-surface)]">Name A–Z</option>
      </select>

      <!-- Spacer (desktop only) -->
      <div class="flex-1 min-w-0" />

      <!-- Count -->
      <span class="flex-shrink-0 text-xs text-[var(--color-text-muted)] font-medium hidden sm:block">{{ count }} project{{ count !== 1 ? 's' : '' }}</span>

      <!-- View toggle -->
      <div class="flex-shrink-0 flex items-center gap-1 rounded-lg border border-[var(--color-border)] p-1 bg-[var(--color-surface)]">
        <button
          type="button"
          class="p-1.5 rounded transition"
          :class="viewMode === 'grid' ? 'bg-[var(--color-text)] text-[var(--color-bg)]' : 'text-[var(--color-text-tertiary)] hover:text-[var(--color-text)]'"
          title="Grid view"
          @click="$emit('update:viewMode', 'grid')"
        >
          <svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
            <rect x="3" y="3" width="8" height="8" rx="1.5"/><rect x="13" y="3" width="8" height="8" rx="1.5"/>
            <rect x="3" y="13" width="8" height="8" rx="1.5"/><rect x="13" y="13" width="8" height="8" rx="1.5"/>
          </svg>
        </button>
        <button
          type="button"
          class="p-1.5 rounded transition"
          :class="viewMode === 'table' ? 'bg-[var(--color-text)] text-[var(--color-bg)]' : 'text-[var(--color-text-tertiary)] hover:text-[var(--color-text)]'"
          title="Table view"
          @click="$emit('update:viewMode', 'table')"
        >
          <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" d="M4 6h16M4 10h16M4 14h16M4 18h16"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  search: { type: String, default: '' },
  filterType: { type: String, default: 'All' },
  filterStatus: { type: String, default: 'All' },
  sortBy: { type: String, default: 'year' },
  viewMode: { type: String, default: 'grid' },
  types: { type: Array, default: () => [] },
  statuses: { type: Array, default: () => [] },
  count: { type: Number, default: 0 }
})

defineEmits(['update:search', 'update:filterType', 'update:filterStatus', 'update:sortBy', 'update:viewMode'])
</script>
