<template>
  <DefaultLayout>
    <div class="flex flex-col gap-14 lg:gap-28">
      <HeroSection />
      <ProjectSection />
    </div>
  </DefaultLayout>
</template>

<script setup>
import HeroSection from '../components/common/HeroSection.vue';
import DefaultLayout from '../layouts/DefaultLayout.vue'
import ProjectSection from '../components/common/ProjectSection.vue';
</script>

<style scoped>
</style>
