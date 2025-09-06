<template>
    <section class="min-h-screen text-white px-6 py-12">
        <h2 class="text-3xl font-bold text-center mb-12">Career Path</h2>

        <div class="relative border-l border-purple-500 max-w-3xl mx-auto">
            <div v-for="(step, idx) in careerSteps" :key="idx" class="mb-12 ml-6 relative">
                <div
                    class="absolute -left-3 w-6 h-6 rounded-full flex items-center justify-center bg-purple-600 border border-purple-300 z-10">
                    <span class="w-2 h-2 bg-white rounded-full"></span>
                </div>

                <div class=" bg-white/10 backdrop-blur-md rounded-lg shadow-lg p-6">
                    <h3 class="text-xl font-semibold">{{ step.title }}</h3>
                    <p class="text-sm text-gray-300 mb-2">{{ step.period }}</p>
                    <p class="leading-relaxed">{{ step.desc }}</p>
                    <div class="mt-2 flex flex-wrap gap-2">
                        <span v-for="(tech, i) in step.tech" :key="i"
                            class="px-3 py-1 text-xs rounded-full bg-purple-700/70">
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
/* make it responsive timeline */
@media (max-width: 640px) {
    .relative.border-l {
        border-left: none;
    }

    .relative.border-l>div {
        margin-left: 0;
        padding-left: 0;
    }

    .relative.border-l>div>.absolute {
        left: 50%;
        transform: translateX(-50%);
        top: -12px;
    }
}
</style>
