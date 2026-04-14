<template>
  <div class="flex flex-wrap items-center gap-3">
    <!-- Search -->
    <div class="relative flex-1 min-w-[200px] max-w-xs">
      <svg class="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-black/30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="11" cy="11" r="8" /><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-4.35-4.35" />
      </svg>
      <input
        :value="search"
        type="search"
        placeholder="Search projects, stack..."
        class="w-full pl-9 pr-4 py-2 text-sm rounded-lg border border-black/10 bg-white placeholder:text-black/30 focus:outline-none focus:border-black/30 focus:ring-2 focus:ring-black/5 transition"
        @input="$emit('update:search', $event.target.value)"
      />
    </div>

    <!-- Type filter -->
    <select
      :value="filterType"
      class="py-2 pl-3 pr-8 text-xs font-medium rounded-lg border border-black/10 bg-white text-black/60 focus:outline-none focus:border-black/30 transition appearance-none cursor-pointer"
      @change="$emit('update:filterType', $event.target.value)"
    >
      <option v-for="t in types" :key="t" :value="t">{{ t === 'All' ? 'All types' : t }}</option>
    </select>

    <!-- Status filter -->
    <select
      :value="filterStatus"
      class="py-2 pl-3 pr-8 text-xs font-medium rounded-lg border border-black/10 bg-white text-black/60 focus:outline-none focus:border-black/30 transition appearance-none cursor-pointer"
      @change="$emit('update:filterStatus', $event.target.value)"
    >
      <option v-for="s in statuses" :key="s" :value="s">{{ s === 'All' ? 'All statuses' : s }}</option>
    </select>

    <!-- Sort -->
    <select
      :value="sortBy"
      class="py-2 pl-3 pr-8 text-xs font-medium rounded-lg border border-black/10 bg-white text-black/60 focus:outline-none focus:border-black/30 transition appearance-none cursor-pointer"
      @change="$emit('update:sortBy', $event.target.value)"
    >
      <option value="year">Newest first</option>
      <option value="name">Name A–Z</option>
    </select>

    <!-- Spacer -->
    <div class="flex-1" />

    <!-- Count -->
    <span class="text-xs text-black/35 font-medium hidden sm:block">{{ count }} project{{ count !== 1 ? 's' : '' }}</span>

    <!-- View toggle -->
    <div class="flex items-center gap-1 rounded-lg border border-black/10 p-1 bg-white">
      <button
        type="button"
        class="p-1.5 rounded transition"
        :class="viewMode === 'grid' ? 'bg-black text-white' : 'text-black/40 hover:text-black'"
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
        :class="viewMode === 'table' ? 'bg-black text-white' : 'text-black/40 hover:text-black'"
        title="Table view"
        @click="$emit('update:viewMode', 'table')"
      >
        <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" d="M4 6h16M4 10h16M4 14h16M4 18h16"/>
        </svg>
      </button>
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
