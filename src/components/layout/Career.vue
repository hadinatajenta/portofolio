<template>
    <section class="text-black px-4 sm:px-6 py-12 sm:py-16">
        <h2 class="text-3xl font-bold text-center mb-10 sm:mb-14">Career Path</h2>

        <div class="relative max-w-3xl mx-auto sm:border-l-2 sm:border-black sm:pl-6">
            <div v-for="(step, idx) in careerSteps" :key="idx"
                class="relative mb-10 sm:mb-14 pl-4 sm:pl-10">
                <div
                    class="hidden sm:flex items-center justify-center absolute left-0 top-1.5 w-6 h-6 rounded-full bg-black border-2 border-black">
                    <span class="w-2 h-2 bg-white rounded-full"></span>
                </div>

                <div
                    class="bg-white border-2 border-black/10 rounded-lg shadow-sm p-5 sm:p-6 text-center sm:text-left hover:border-black transition-colors">
                    <h3 class="text-lg sm:text-xl font-bold text-black">{{ step.title }}</h3>
                    <p class="text-sm text-black/50 mt-1 mb-3">{{ step.period }}</p>
                    <p class="leading-relaxed text-sm sm:text-base text-black/60">{{ step.desc }}</p>
                    <div class="mt-4 flex flex-wrap justify-center sm:justify-start gap-2">
                        <span v-for="(tech, i) in step.tech" :key="i"
                            class="px-3 py-1 text-xs font-semibold uppercase tracking-wide rounded-full bg-black/10 text-black/70 border border-black/20">
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
        id: 1,
        title: "Bank Rakyat Indonesia (BRI) - Backend Developer",
        period: "Dec 2023 - Present",
        desc: "Developed and maintained Merchant Management System microservices handling merchant onboarding, outlet management, and QRIS flows. Integrated with core banking and third-party systems, optimized data pipelines using Redis and RabbitMQ, and ensured reliability through structured QA and SAST compliance in a high-volume financial environment.",
        tech: ["Go (Gin, Echo)", "Laravel", "Node.js (Express)", "MySQL", "Redis", "RabbitMQ", "OpenShift", "CI/CD"]
    },
    {
        id: 2,
        title: "NGO Basmi - Full Stack Developer (Freelance)",
        period: "Nov 2023",
        desc: "Built a Laravel-based web platform with advertising, staff management, and scheduling features. Delivered using a Modified Waterfall approach with structured requirement handling and phased deployment.",
        tech: ["Laravel", "MySQL", "Bootstrap"]
    },
    {
        id: 3,
        title: "ITERA - Lecturer Assistant (Web Programming & IT Projects)",
        period: "Aug 2023 - Dec 2023",
        desc: "Mentored multiple student teams in real-world software projects, guiding architecture design, SDLC selection (Agile, RAD, Waterfall), and full delivery lifecycle from planning to deployment. Taught core web programming concepts and supervised implementation quality.",
        tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Agile", "SDLC"]
    },
    {
        id: 4,
        title: "ITERA - GIS Web Developer (Freelance)",
        period: "May 2023",
        desc: "Developed a web-based GIS application for mapping healthcare facilities with interactive visualization, location markers, and detailed facility data using Leaflet.js.",
        tech: ["Laravel", "Leaflet.js", "MySQL", "Bootstrap"]
    },
    {
        id: 5,
        title: "SMPN 28 Bandar Lampung - Full Stack Developer",
        period: "Feb 2023",
        desc: "Built an inventory lending system that reduced manual processing by 70%, improving tracking accuracy and operational efficiency.",
        tech: ["Laravel", "MySQL"]
    },
    {
        id: 6,
        title: "PT Andalas Media Group - Full Stack Developer (Contract)",
        period: "Dec 2022 - Jul 2023",
        desc: "Developed a custom news portal and CMS from scratch with multi-role management, advertising system, and analytics features. Maintained production stability with 500+ published articles and ongoing feature enhancements.",
        tech: ["Laravel", "Bootstrap", "CKEditor", "CMS"]
    },
    {
        id: 7,
        title: "PT Andalas Media Group - Content Writer (Intern)",
        period: "Jun 2022 - Jul 2022",
        desc: "Produced and edited regional news content with focus on accuracy, structure, and editorial standards, gaining experience in publication workflows and fact-checking.",
        tech: ["Writing", "Journalism"]
    }
];
</script>

<style scoped>
.bg-white {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.bg-white:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
}
</style>
