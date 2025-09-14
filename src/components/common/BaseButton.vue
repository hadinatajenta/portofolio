<template>
  <router-link :to="to" class="px-6 py-3 rounded-xl font-medium text-white shadow-lg transition-all duration-300
           bg-gradient-to-r from-purple-600/80 to-purple-800/80 border border-white/10
           hover:from-purple-500 hover:to-cyan-500 hover:shadow-cyan-400/30 hover:shadow-xl">
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
  background: linear-gradient(90deg,
      rgba(168, 85, 247, 0.3),
      rgba(34, 211, 238, 0.3));
  border-color: rgba(255, 255, 255, 0.3);
  box-shadow: 0 0 15px rgba(168, 85, 247, 0.3);
}
</style>
