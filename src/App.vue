<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useTheme } from './composables/useTheme'

const { init } = useTheme()

onMounted(() => {
  init()
})
</script>

<style scoped></style>