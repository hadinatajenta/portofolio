<template>
  <!-- Desktop sidebar -->
  <aside class="hidden md:flex flex-col w-44 flex-shrink-0 sticky top-8">
    <nav class="space-y-0.5">
      <button
        v-for="section in sections"
        :key="section.id"
        type="button"
        class="w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all duration-150"
        :class="active === section.id
          ? 'bg-[var(--color-text)] text-[var(--color-bg)]'
          : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface-hover)]'"
        @click="$emit('select', section.id)"
      >
        {{ section.label }}
      </button>
    </nav>
  </aside>

  <!-- Mobile: horizontal tab strip -->
  <div class="md:hidden -mx-4 px-4 sm:-mx-6 sm:px-6 mb-6 overflow-x-auto scrollbar-hide border-b border-[var(--color-border)]">
    <div class="flex gap-1 min-w-max">
      <button
        v-for="section in sections"
        :key="section.id"
        type="button"
        class="flex-shrink-0 px-4 py-2.5 text-xs font-semibold transition-all border-b-2 -mb-px"
        :class="active === section.id
          ? 'border-[var(--color-text)] text-[var(--color-text)]'
          : 'border-transparent text-[var(--color-text-secondary)] hover:text-[var(--color-text)] hover:border-[var(--color-border-hover)]'"
        @click="$emit('select', section.id)"
      >
        {{ section.label }}
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  sections: { type: Array, required: true },
  active: { type: String, required: true }
})

defineEmits(['select'])
</script>
