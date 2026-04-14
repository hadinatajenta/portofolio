<template>
  <DefaultLayout>
    <div class="flex flex-col gap-14 lg:gap-26">
      <HeroSection />
      <ProjectSection />
    </div>
  </DefaultLayout>
</template>

<script setup>
import { useHead } from '@unhead/vue'
import HeroSection from '../components/common/HeroSection.vue'
import DefaultLayout from '../layouts/DefaultLayout.vue'
import ProjectSection from '../components/common/ProjectSection.vue'

useHead({
  title: 'Hadinata Jenta — Full Stack Developer',
  meta: [
    {
      name: 'description',
      content: 'Hadinata Jenta is a Full Stack Developer with 3+ years of experience specializing in distributed microservices, Go, Laravel, and high-traffic web applications.'
    },
    { property: 'og:title', content: 'Hadinata Jenta — Full Stack Developer' },
    { property: 'og:description', content: 'Full Stack Developer specializing in distributed microservices, Go, Laravel, and high-traffic backend systems.' },
    { property: 'og:url', content: 'https://hadinata.vercel.app/' },
    { name: 'twitter:title', content: 'Hadinata Jenta — Full Stack Developer' },
    { name: 'twitter:description', content: 'Full Stack Developer specializing in Go, Laravel, Vue.js, and distributed systems.' },
  ],
  link: [
    { rel: 'canonical', href: 'https://hadinata.vercel.app/' }
  ]
})
</script>

<style scoped></style>
