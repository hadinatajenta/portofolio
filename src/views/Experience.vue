<template>
  <DefaultLayout>
    <section class="space-y-12">
      <div class="space-y-6">
        <h1 class="text-5xl sm:text-6xl font-bold leading-tight text-black">
          My work history
        </h1>
        <p class="max-w-2xl text-lg text-black/60">
          Full-time roles, freelance partnerships, and short-term contracts spanning six years across startups, agencies, and enterprises.
        </p>
      </div>

      <div class="relative space-y-8">
        <div class="relative space-y-12 sm:space-y-16">
          <article
            v-for="(item, index) in experiences"
            :key="index"
            class="relative grid gap-8 sm:grid-cols-[200px,1fr]"
          >
            <div class="relative sm:pt-1">
              <time class="sticky top-20 text-sm font-bold leading-tight text-black">
                {{ item.period }}
              </time>
            </div>

            <div class="relative space-y-4">
              <div class="flex flex-col sm:flex-row sm:items-center sm:gap-4 mb-4">
                <div>
                  <p class="text-xl font-bold text-black">
                    {{ item.title }}
                  </p>
                  <p class="text-sm text-black/60">
                    {{ item.company }}
                  </p>
                </div>
              </div>

              <p class="text-base leading-relaxed text-black/60">
                {{ item.description }}
              </p>

              <div v-if="item.highlights" class="space-y-3">
                <ul class="space-y-2 text-sm text-black/60">
                  <li v-for="(highlight, idx) in item.highlights" :key="idx" class="flex gap-3">
                    <span class="mt-1.5 h-1 w-1 rounded-full bg-black flex-shrink-0"></span>
                    <span>{{ highlight }}</span>
                  </li>
                </ul>
              </div>

              <div v-if="item.tags" class="flex flex-wrap gap-2 pt-2">
                <span
                  v-for="tag in item.tags"
                  :key="tag"
                  class="tag-pill"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from '../layouts/DefaultLayout.vue';

const experiences = [
  {
    period: '2024 - Present',
    title: 'Backend Engineer',
    company: 'BRI (Bank Rakyat Indonesia)',
    description:
      'Building and maintaining core banking infrastructure for Indonesia\'s largest microfinance institution. Working on payment gateways, loan processing systems, and real-time settlement mechanisms handling millions of transactions daily.',
    highlights: [
      'Architected event-driven microservices for async loan processing, reducing settlement time by 40%.',
      'Implemented distributed tracing and observability stack for enterprise reliability.',
      'Mentored junior developers on domain-driven design and clean architecture principles.',
      'On-call rotation managing P1 incidents across production banking systems.'
    ],
    tags: ['Go', 'PostgreSQL', 'Kafka', 'gRPC', 'Kubernetes', 'Banking']
  },
  {
    period: '2023',
    title: 'Lecturer Assistant',
    company: 'ITERA (Institut Teknologi Sumatera)',
    description:
      'Assisted in teaching Web Development and Mobile Programming courses. Created curriculum materials, graded assignments, and provided mentoring to 80+ students across two semesters.',
    highlights: [
      'Developed interactive course materials focusing on modern JavaScript and Vue frameworks.',
      'Conducted weekly lab sessions guiding students through real-world project implementations.',
      'Reviewed capstone projects and provided technical feedback for graduation requirements.'
    ],
    tags: ['Vue.js', 'JavaScript', 'Education', 'Web Dev']
  },
  {
    period: '2023',
    title: 'Lecturer Assistant - Mobile Programming',
    company: 'ITERA (Institut Teknologi Sumatera)',
    description:
      'Co-instructor for mobile development course covering React Native and Flutter. Developed hands-on projects teaching state management, API integration, and deployment practices.',
    highlights: [
      'Built reference applications demonstrating best practices in mobile development.',
      'Mentored teams working on semester-end mobile app projects.',
      'Coordinated guest lectures from industry professionals.'
    ],
    tags: ['React Native', 'Flutter', 'Mobile Dev', 'Education']
  },
  {
    period: '2022 - 2023',
    title: 'GIS Developer',
    company: 'Geospatial Solutions Inc.',
    description:
      'Developed geospatial applications and interactive mapping solutions for urban planning projects. Worked with geographic data, created custom map visualizations, and built query tools for city infrastructure.',
    highlights: [
      'Implemented Leaflet-based mapping system for city facility management with 10k+ data points.',
      'Optimized geospatial queries using PostGIS, improving search performance by 60%.',
      'Created admin dashboards for data stewardship and change tracking.'
    ],
    tags: ['Leaflet', 'PostGIS', 'GIS', 'Laravel', 'Mapping']
  },
  {
    period: '2021 - 2022',
    title: 'Full-Stack Developer',
    company: 'Andalas Media',
    description:
      'Modernized news publishing platform with custom CMS and reader analytics. Built editorial workflows, content management systems, and real-time dashboards for the regional media group.',
    highlights: [
      'Delivered headless CMS supporting 50+ news outlets with scheduled publishing.',
      'Implemented real-time analytics dashboard showing reader engagement metrics.',
      'Optimized article delivery with edge caching, reducing load times by 70%.'
    ],
    tags: ['Laravel', 'Vue.js', 'MySQL', 'CMS', 'Analytics']
  },
  {
    period: '2020 - 2021',
    title: 'Content Writer & Technical Documentation',
    company: 'Tech Education Platform',
    description:
      'Created comprehensive technical documentation and educational content for software development courses. Wrote tutorials, guides, and case studies on web development technologies.',
    highlights: [
      'Authored 30+ technical articles covering JavaScript, Vue, and backend frameworks.',
      'Created interactive code examples and project walkthroughs.',
      'Maintained documentation standards and version control for content library.'
    ],
    tags: ['Technical Writing', 'Documentation', 'Vue.js', 'JavaScript']
  }
];
</script>

<style scoped>
.tag-pill {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.4rem 0.9rem;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  background: rgba(0, 0, 0, 0.08);
  border: 2px solid rgba(0, 0, 0, 0.1);
  color: rgba(0, 0, 0, 0.7);
  transition: border 0.2s ease, background 0.2s ease, color 0.2s ease;
}

.tag-pill:hover {
  border-color: rgba(0, 0, 0, 0.2);
  background: rgba(0, 0, 0, 0.12);
  color: rgba(0, 0, 0, 0.9);
}

@media (max-width: 640px) {
  .tag-pill {
    padding: 0.35rem 0.8rem;
    font-size: 0.65rem;
  }
}
</style>
