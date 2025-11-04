<template>
    <section class="text-white px-4 sm:px-6 py-12 sm:py-16">
        <h2 class="text-3xl font-bold text-center mb-10 sm:mb-14">Career Path</h2>

        <div class="relative max-w-3xl mx-auto sm:border-l sm:border-purple-500/60 sm:pl-6">
            <div v-for="(step, idx) in careerSteps" :key="idx"
                class="relative mb-10 sm:mb-14 pl-4 sm:pl-10">
                <div
                    class="hidden sm:flex items-center justify-center absolute left-0 top-1.5 w-6 h-6 rounded-full bg-purple-600 border border-purple-300">
                    <span class="w-2 h-2 bg-white rounded-full"></span>
                </div>

                <div
                    class="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-5 sm:p-6 text-center sm:text-left">
                    <h3 class="text-lg sm:text-xl font-semibold">{{ step.title }}</h3>
                    <p class="text-sm text-gray-300 mt-1 mb-3">{{ step.period }}</p>
                    <p class="leading-relaxed text-sm sm:text-base text-gray-200">{{ step.desc }}</p>
                    <div class="mt-4 flex flex-wrap justify-center sm:justify-start gap-2">
                        <span v-for="(tech, i) in step.tech" :key="i"
                            class="px-3 py-1 text-xs uppercase tracking-wide rounded-full bg-purple-700/70 text-gray-100">
                            {{ tech }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const careerSteps = [
    {
        title: "Bank Rakyat Indonesia (BRI) - Backend Developer",
        period: "Dec 2023 - Present",
        desc: "Build microservices with Laravel & Go, integrated Express.js gateway, financial-grade QA.",
        tech: ["Laravel", "Go (Gin)", "Express.js", "Scrum"]
    },
    {
        title: "NGO Basmi - Full Stack Dev (Freelance)",
        period: "Nov 2023",
        desc: "Laravel site with advertising, staff, scheduling features under Modified Waterfall.",
        tech: ["Laravel", "MySQL", "Bootstrap"]
    },
    {
        title: "ITERA - Lecturer Assistant (Web Programming & IT Projects)",
        period: "Aug 2023 - Dec 2023",
        desc: "Train basics of web programming + mentor client-based Agile projects.",
        tech: ["HTML", "CSS", "PHP", "Agile"]
    },
    {
        title: "GIS Developer (ITERA Freelance)",
        period: "May 2023",
        desc: "Healthcare facilities GIS app with Leaflet.js and Laravel.",
        tech: ["Laravel", "Leaflet.js", "Bootstrap"]
    },
    {
        title: "SMPN 28 Bandar Lampung - Full Stack Dev",
        period: "Feb 2023",
        desc: "Inventory lending system with Laravel, reduced manual processing by 70%.",
        tech: ["Laravel", "MySQL"]
    },
    {
        title: "PT Andalas Media Group - Full Stack Dev (Contract)",
        period: "Dec 2022 - Jul 2023",
        desc: "News portal with custom CMS, admin dashboard, 99.9% uptime.",
        tech: ["Laravel", "CKEditor", "CMS"]
    },
    {
        title: "PT Andalas Media Group - Content Writer (Intern)",
        period: "Jun 2022 - Jul 2022",
        desc: "Wrote regional articles, fact-checking, and editorial collab.",
        tech: ["Writing", "Journalism"]
    }
]
</script>

<style scoped>
.bg-white\/10 {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.bg-white\/10:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 60px rgba(76, 29, 149, 0.35);
}
</style>
