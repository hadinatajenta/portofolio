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
  title: 'Hadinata Jenta — Backend & Systems Engineer',
  meta: [
    {
      name: 'description',
      content: 'Hadinata Jenta is a Backend & Systems Engineer specializing in Go microservices, event-driven pipelines with RabbitMQ, and enterprise integrations at Bank Rakyat Indonesia.'
    },
    { property: 'og:title', content: 'Hadinata Jenta — Backend & Systems Engineer' },
    { property: 'og:description', content: 'Backend & Systems Engineer specializing in Go microservices, event-driven architectures, and enterprise banking integrations.' },
    { property: 'og:url', content: 'https://hadinata.me/' },
    { name: 'twitter:title', content: 'Hadinata Jenta — Backend & Systems Engineer' },
    { name: 'twitter:description', content: 'Backend & Systems Engineer specializing in Go, RabbitMQ, Laravel, and enterprise microservices.' },
  ],
  link: [
    { rel: 'canonical', href: 'https://hadinata.me/' }
  ]
})
</script>

<style scoped></style>
