<template>
  <DefaultLayout>
    <HeroSection/>
    <AboutSection/>
    <AboutMe/>
    <Career/>
  </DefaultLayout>
</template>

<script setup>
import AboutMe from '../components/layout/AboutMe.vue';
import Career from '../components/layout/Career.vue';
import HeroSection from '../components/common/HeroSection.vue';
import DefaultLayout from '../layouts/DefaultLayout.vue'
import AboutSection from '../components/common/AboutSection.vue';
</script>

<style scoped>
</style>