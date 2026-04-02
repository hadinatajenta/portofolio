<template>
  <router-link :to="to" class="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white bg-black border border-black transition-all duration-300 hover:bg-black/80 hover:shadow-lg">
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
  background-color: #000000;
  border-color: #000000;
}
</style>
