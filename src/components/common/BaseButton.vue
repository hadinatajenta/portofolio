<template>
  <router-link :to="to" class="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-[var(--color-btn-text)] bg-[var(--color-btn-bg)] border border-[var(--color-btn-bg)] transition-all duration-300 hover:opacity-85 hover:shadow-lg">
    <slot>{{ label }}</slot>
  </router-link>
</template>

<script setup>
defineProps({
  to: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    default: "",
  },
})
</script>

<style scoped>
.router-link-active {
  background-color: var(--color-btn-bg);
  border-color: var(--color-btn-bg);
}
</style>
