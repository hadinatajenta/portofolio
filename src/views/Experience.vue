<template>
  <DefaultLayout>
    <section id="experience" class="relative py-20 px-6 md:px-12 flex flex-col items-center">
      <div class="absolute top-10 left-10 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[160px] -z-10"></div>

      <BaseCard title="Experience">
        <div class="flex flex-col gap-12">
          <div class="text-center">
            <h2 class="text-3xl md:text-4xl font-bold text-white animate-slide-up">
              Professional Timeline
            </h2>
            <p class="text-gray-300 text-base md:text-lg mt-3 max-w-2xl mx-auto animate-fade-in-delay">
              My career, freelance, and academic experiences in a zigzag timeline.
            </p>
          </div>

          <div class="relative max-w-5xl mx-auto">
            <div class="absolute left-1/2 top-0 h-full border-l border-gray-600/40 -translate-x-1/2"></div>

            <div v-for="(exp, i) in experiences" :key="exp.id" class="mb-12 flex flex-col md:flex-row items-center"
              :class="i % 2 === 0 ? 'md:justify-start' : 'md:justify-end'">
              <div class="w-6 h-6 rounded-full border-4 border-purple-500 bg-cyan-400 shadow-lg z-10"></div>

              <div
                class="mt-6 md:mt-0 md:w-5/12 bg-white/5 border border-white/10 rounded-xl p-6 shadow-md backdrop-blur-lg animate-fade-in-delay-2"
                :class="i % 2 === 0 ? 'md:ml-8' : 'md:mr-8'">
                <span class="text-xs text-gray-400">{{ exp.period }}</span>
                <h3 class="text-xl font-semibold text-purple-300 mt-1">
                  {{ exp.role }}
                </h3>
                <p class="text-sm text-gray-400 mb-2">{{ exp.company }}</p>
                <p class="text-gray-200 text-sm md:text-base leading-relaxed">
                  {{ exp.description }}
                </p>
              </div>
            </div>
          </div>
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
    description:
      "Engineered backend features in Laravel & Go (Gin) for BRI microservices, integrated with Express.js API Gateway, improved request flow & scalability in production. Worked in Scrum team with strict QA cycles.",
  },
  {
    id: 2,
    period: "Nov 2023",
    role: "Full Stack Developer (Freelance)",
    company: "NGO Basmi – Central Lampung",
    description:
      "Executed Laravel website launch with interactive features. Built systems for ads, staff management, scheduling. Used Modified Waterfall SDLC.",
  },
  {
    id: 3,
    period: "Aug 2023 – Dec 2023",
    role: "Lecturer Assistant – Web Programming & IT Projects",
    company: "Sumatera Institute of Technology (ITERA)",
    description:
      "Trained students in HTML, CSS, JS, PHP, MySQL basics and mentored client-based IT projects using Agile workflows. Facilitated sprints and client comms.",
  },
  {
    id: 4,
    period: "May 2023",
    role: "Full Stack GIS Developer (Freelance)",
    company: "Sumatera Institute of Technology (ITERA)",
    description:
      "Developed GIS app to map healthcare facilities in Palembang using Laravel & Leaflet.js. Delivered under Modified Waterfall model, deployed & maintained system.",
  },
  {
    id: 5,
    period: "Dec 2022 – Jul 2023",
    role: "Full Stack Developer (Contract)",
    company: "PT Andalas Media Group",
    description:
      "Created full-featured news portal with Laravel & CKEditor, built admin dashboard & CMS. Deployed with 99.9% uptime maintenance.",
  },
  {
    id: 6,
    period: "Jun 2022 – Jul 2022",
    role: "Content Writer (Intern)",
    company: "PT Andalas Media Group",
    description:
      "Wrote articles under journalistic code of ethics, collaborated with editorial team, managed news scheduling & fact-checking.",
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
</style>
