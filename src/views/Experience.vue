<template>
  <DefaultLayout>
    <section id="experience" class="relative py-20 px-6 md:px-12">
      <div class="absolute top-8 -left-24 h-[420px] w-[420px] rounded-full bg-purple-500/20 blur-[160px] -z-10"></div>
      <div class="absolute bottom-12 -right-16 h-[360px] w-[360px] rounded-full bg-cyan-400/15 blur-[150px] -z-10"></div>

      <BaseCard title="Experience">
        <div class="space-y-12">
          <header class="space-y-4 text-center md:text-left md:max-w-3xl">
            <h2 class="text-3xl md:text-4xl font-bold text-white">
              Experience crafted across finance, education, and digital products.
            </h2>
            <p class="text-gray-300 text-base md:text-lg">
              Leading backend initiatives at Bank BRI while mentoring future builders and shipping full-stack solutions for clients. Each chapter blends engineering discipline, delivery ownership, and collaborative leadership.
            </p>
          </header>

          <ol class="space-y-8 md:space-y-10">
            <li v-for="exp in experiences" :key="exp.id" class="experience-card">
              <div class="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.22em] text-gray-400">
                <span class="inline-flex items-center gap-2">
                  <span class="h-2 w-2 rounded-full" :class="exp.isCurrent ? 'bg-emerald-400' : 'bg-purple-300'"></span>
                  {{ exp.period }}
                </span>
                <span>·</span>
                <span>{{ exp.company }}</span>
              </div>

              <div class="mt-4 flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div class="space-y-2 md:max-w-2xl">
                  <h3 class="text-xl font-semibold text-white">
                    {{ exp.role }}
                  </h3>
                  <p v-if="exp.summary" class="text-gray-200 text-sm md:text-base leading-relaxed">
                    {{ exp.summary }}
                  </p>
                </div>

                <div v-if="exp.tags?.length" class="flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.14em] text-cyan-100">
                  <span v-for="tag in exp.tags" :key="tag" class="tag-pill">
                    {{ tag }}
                  </span>
                </div>
              </div>

              <ul v-if="exp.highlights?.length" class="mt-5 space-y-2 text-sm text-gray-300">
                <li v-for="(item, idx) in exp.highlights" :key="idx" class="flex gap-3">
                  <span class="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-300"></span>
                  <span>{{ item }}</span>
                </li>
              </ul>
            </li>
          </ol>
        </div>
      </BaseCard>
    </section>
  </DefaultLayout>
</template>

<script setup>
import BaseCard from "../components/common/BaseCard.vue"
import DefaultLayout from "../layouts/DefaultLayout.vue";

const experiences = [
  {
    id: 1,
    period: "Dec 2023 – Present",
    role: "Backend Developer",
    company: "Bank Rakyat Indonesia (BRI)",
    isCurrent: true,
    summary:
      "Building and scaling merchant and transaction microservices supporting nationwide financial operations.",
    highlights: [
      "Developed Go (Gin) and Laravel services integrated through an Express.js API Gateway to streamline request flows.",
      "Optimised MySQL and Redis usage, improving latency and scalability for high-volume transaction workloads.",
      "Collaborate in Scrum teams operating under financial-grade QA, security, and compliance standards."
    ],
    tags: ["Go", "Laravel", "Microservices"],
  },
  {
    id: 2,
    period: "Aug 2023 – Dec 2023",
    role: "Lecturer Assistant — Web Programming",
    company: "Sumatera Institute of Technology (ITERA)",
    isCurrent: false,
    summary:
      "Assisted faculty in delivering modern web programming curriculum and supporting student project delivery.",
    highlights: [
      "Mentored multiple student teams from concept through deployment of responsive web applications.",
      "Taught client–server interaction patterns, database integration, and deployment best practices.",
      "Provided weekly critiques to improve code quality, collaboration, and presentation skills."
    ],
    tags: ["Mentorship", "Web Dev", "Education"],
  },
  {
    id: 3,
    period: "Aug 2023 – Dec 2023",
    role: "Lecturer Assistant — Information Technology Projects",
    company: "Sumatera Institute of Technology (ITERA)",
    isCurrent: false,
    summary:
      "Guided capstone teams delivering real-world IT solutions with industry stakeholders.",
    highlights: [
      "Supervised 15 student teams applying Agile, RAD, and Modified Waterfall methodologies.",
      "Helped teams tailor project management approaches to scope, constraints, and client readiness.",
      "Coordinated client reviews and assessed deliverables for technical quality and business impact."
    ],
    tags: ["Project Leadership", "Agile", "Stakeholder Management"],
  },
  {
    id: 4,
    period: "May 2023",
    role: "Full Stack GIS Developer",
    company: "Sumatera Institute of Technology (ITERA)",
    isCurrent: false,
    summary:
      "Delivered a geographic information system to visualise public health services across Palembang.",
    highlights: [
      "Implemented Laravel backend with Leaflet.js mapping and Bootstrap UI for intuitive exploration.",
      "Applied a Modified Waterfall SDLC, handling deployment and post-launch maintenance.",
      "Enabled administrators to manage spatial datasets and facility metadata."
    ],
    tags: ["Laravel", "Leaflet", "GIS"],
  },
  {
    id: 5,
    period: "Dec 2022 – Jul 2023",
    role: "Full Stack Developer (Contract)",
    company: "PT Andalas Media Group",
    isCurrent: false,
    summary:
      "Built and maintained a regional online news platform serving Tulang Bawang Barat.",
    highlights: [
      "Developed Laravel-based CMS features with CKEditor integrations for editorial workflows.",
      "Shipped responsive layouts, scheduled publishing, and analytics reporting.",
      "Handled deployment, monitoring, and maintenance to sustain 99.9% uptime."
    ],
    tags: ["Laravel", "CKEditor", "Newsroom Tech"],
  },
  {
    id: 6,
    period: "Jun 2022 – Jul 2022",
    role: "Content Writer (Intern)",
    company: "PT Andalas Media Group",
    isCurrent: false,
    summary:
      "Contributed to newsroom operations while honing storytelling and editorial collaboration.",
    highlights: [
      "Produced regional news articles aligned with journalistic ethics and editorial voice.",
      "Partnered with editors on fact-checking, topic discovery, and publishing cadence."
    ],
    tags: ["Journalism", "Collaboration"],
  },
]
</script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(15px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-delay {
  animation: fade-in 1.2s ease forwards;
  animation-delay: 0.3s;
}

.animate-fade-in-delay-2 {
  animation: fade-in 1.4s ease forwards;
  animation-delay: 0.6s;
}

.animate-slide-up {
  animation: slide-up 1s ease forwards;
}

.experience-card {
  position: relative;
  padding: 1.75rem;
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(14, 11, 24, 0.55);
  backdrop-filter: blur(20px);
  box-shadow: 0 18px 60px rgba(44, 23, 80, 0.35);
  transition: transform 0.25s ease, border 0.25s ease, box-shadow 0.25s ease;
}

.experience-card::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1px;
  background: linear-gradient(135deg, rgba(168, 85, 247, 0.3), rgba(45, 212, 191, 0.2));
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0.4;
  transition: opacity 0.25s ease;
}

.experience-card:hover {
  transform: translateY(-6px);
  border-color: rgba(165, 243, 252, 0.4);
  box-shadow: 0 24px 80px rgba(88, 63, 170, 0.4);
}

.experience-card:hover::before {
  opacity: 1;
}

.tag-pill {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.45rem 0.95rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  background: rgba(89, 40, 181, 0.25);
}

@media (max-width: 768px) {
  .experience-card {
    padding: 1.5rem;
  }
}
</style>
