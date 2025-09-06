<template>
    <section id="about" class="relative py-20 px-6 md:px-12 flex flex-col items-center">
        <div class="absolute -top-20 right-10 w-[400px] h-[400px] bg-cyan-500/20 rounded-full blur-[160px] -z-10"></div>

        <BaseCard title="About Me">
            <div class="flex flex-col md:flex-row items-center md:items-start gap-10">
                <div
                    class="w-40 h-40 md:w-56 md:h-56 rounded-2xl overflow-hidden border-4 border-white/20 shadow-xl flex-shrink-0 animate-fade-in">
                    <img src="/img/5357.jpg" alt="profile" class="w-full h-full object-cover" />
                </div>

                <div class="flex flex-col gap-6 text-center md:text-left max-w-2xl">
                    <h2 class="text-3xl md:text-4xl font-bold text-white tracking-wide animate-slide-up">
                        Who am I?
                    </h2>
                    <p class="text-gray-300 text-base md:text-lg leading-relaxed animate-fade-in-delay">
                        I’m a <span class="text-purple-400 font-medium">Software Engineer</span>
                        with a passion for building <span class="text-cyan-400">scalable apps</span>
                        and designing modern, elegant UIs.
                        <br /><br />
                        With experience across frontend and backend stacks, I focus on
                        delivering seamless UX, maintainable code, and impactful solutions.
                    </p>

                    <div
                        class="bg-white/5 border border-white/10 rounded-xl p-6 text-gray-200 shadow-lg backdrop-blur-lg animate-fade-in-delay-2">
                        <h3 class="text-xl font-semibold text-purple-300 mb-2">
                            Core Skills
                        </h3>
                        <ul class="grid grid-cols-2 gap-x-6 gap-y-2 text-sm md:text-base">
                            <li class="flex items-center gap-2">
                                <span class="w-2 h-2 rounded-full bg-purple-400"></span> Go / Vue
                            </li>
                            <li class="flex items-center gap-2">
                                <span class="w-2 h-2 rounded-full bg-cyan-400"></span> Node.js / Express
                            </li>
                            <li class="flex items-center gap-2">
                                <span class="w-2 h-2 rounded-full bg-purple-400"></span> PostgreSQL / Redis
                            </li>
                            <li class="flex items-center gap-2">
                                <span class="w-2 h-2 rounded-full bg-cyan-400"></span> Docker / CI-CD
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </BaseCard>
    </section>
</template>

<script setup>
import BaseCard from "../common/BaseCard.vue"
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
