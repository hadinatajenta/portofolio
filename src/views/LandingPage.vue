<template>
  <DefaultLayout>
    <HeroSection />
    <ProjectSection/>
    <Career/>
  </DefaultLayout>
</template>

<script setup>
import Career from '../components/layout/Career.vue';
import HeroSection from '../components/common/HeroSection.vue';
import DefaultLayout from '../layouts/DefaultLayout.vue'
import ProjectSection from '../components/common/ProjectSection.vue';
</script>

<style scoped>
</style>