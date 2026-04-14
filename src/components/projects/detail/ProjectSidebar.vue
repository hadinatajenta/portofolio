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
          ? 'bg-black text-white'
          : 'text-black/50 hover:text-black hover:bg-black/5'"
        @click="$emit('select', section.id)"
      >
        {{ section.label }}
      </button>
    </nav>
  </aside>

  <!-- Mobile: horizontal tab strip -->
  <div class="md:hidden -mx-6 px-6 mb-6 overflow-x-auto">
    <div class="flex gap-1 pb-1 min-w-max">
      <button
        v-for="section in sections"
        :key="section.id"
        type="button"
        class="flex-shrink-0 px-4 py-2 rounded-full text-xs font-semibold transition-all"
        :class="active === section.id
          ? 'bg-black text-white'
          : 'text-black/50 border border-black/10 hover:border-black/20 hover:text-black'"
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
