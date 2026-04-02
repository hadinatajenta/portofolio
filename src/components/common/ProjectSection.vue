<template>
    <section id="projects" class="relative py-16 sm:py-20 px-4 sm:px-6 flex flex-col items-center">
        <BaseCard title="Projects" class="w-full">
            <div class="flex flex-col gap-10">
                <!-- Section Title -->
                <div class="text-center">
                    <h2 class="text-3xl md:text-4xl font-bold text-black">
                        Featured Projects
                    </h2>
                    <p class="text-black/60 text-base md:text-lg mt-3 max-w-2xl mx-auto">
                        Here are some of my works – from personal experiments to full-stack
                        systems in production.
                    </p>
                </div>

                <!-- Projects Grid -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div v-for="project in previewProjects" :key="project.id"
                        class="bg-white border-2 border-black/10 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col hover:border-black">
                        <h3 class="text-xl font-bold text-black mb-2">
                            {{ project.name }}
                        </h3>
                        <p class="text-black/60 text-sm flex-grow">
                            {{ project.description }}
                        </p>
                        <div class="mt-4 flex justify-between items-center">
                            <span class="text-xs text-black/50">{{ project.stack }}</span>
                            <a v-if="project.link" :href="project.link" target="_blank" rel="noopener noreferrer"
                                class="text-black hover:text-black/70 text-sm font-semibold">
                                View →
                            </a>
                        </div>
                    </div>
                </div>

                <!-- View All Button -->
                <div class="text-center mt-6">
                    <router-link to="/projects"
                        class="px-6 py-3 bg-black hover:bg-black/80 text-white font-semibold rounded-lg shadow-md transition-all duration-300">
                        View All Projects
                    </router-link>
                </div>
            </div>
        </BaseCard>
    </section>
</template>

<script setup>
import BaseCard from "../common/BaseCard.vue"

const previewProjects = [
    {
        id: 1,
        name: "Vue Kanji",
        description:
            "Kanji learning app using Vue 3 + KanjiAPI.dev. Features flashcards, readings, and search from N5 to N1.",
        stack: "Vue 3, API",
        link: "https://github.com/hadinatajenta/vue-kanji",
    },
    {
        id: 2,
        name: "Andalasnet",
        description:
            "Full-stack Laravel news portal for PT Andalas Media Group, covering Lampung regional news.",
        stack: "Laravel, MySQL",
        link: "https://andalasnet.com",
    },
    {
        id: 3,
        name: "SIG Palembang",
        description:
            "Geographic Information System for mapping facilities in Palembang, built with Leaflet.js + Laravel.",
        stack: "Leaflet, Laravel, MySQL",
        link: "https://github.com/hadinatajenta/TUBES-SIG",
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

.animate-fade-in {
    animation: fade-in 1s ease forwards;
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
