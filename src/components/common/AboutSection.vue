<template>
    <section id="about" class="relative py-20 px-6 md:px-12 flex flex-col items-center">
        <BaseCard title="About Me">
            <div class="flex flex-col md:flex-row items-center md:items-start gap-10">
                <div
                    class="w-40 h-40 md:w-56 md:h-56 rounded-xl overflow-hidden border-2 border-black/20 shadow-md flex-shrink-0">
                    <img src="/img/5357.jpg" alt="profile" class="w-full h-full object-cover" />
                </div>

                <div class="flex flex-col gap-6 text-center md:text-left max-w-2xl">
                    <h2 class="text-3xl md:text-4xl font-bold text-black">
                        Who am I?
                    </h2>
                    <p class="text-black/60 text-base md:text-lg leading-relaxed">
                        I'm a <span class="text-black font-semibold">Software Engineer</span>
                        with a passion for building <span class="text-black font-semibold">scalable apps</span>
                        and designing modern, elegant UIs.
                        <br /><br />
                        With experience across frontend and backend stacks, I focus on
                        delivering seamless UX, maintainable code, and impactful solutions.
                    </p>

                    <div
                        class="bg-black/5 border-2 border-black/10 rounded-lg p-6 text-black shadow-sm">
                        <h3 class="text-xl font-bold text-black mb-2">
                            Core Skills
                        </h3>
                        <ul class="grid grid-cols-2 gap-x-6 gap-y-2 text-sm md:text-base">
                            <li class="flex items-center gap-2">
                                <span class="w-2 h-2 rounded-full bg-black"></span> Go / Vue
                            </li>
                            <li class="flex items-center gap-2">
                                <span class="w-2 h-2 rounded-full bg-black"></span> Node.js / Express
                            </li>
                            <li class="flex items-center gap-2">
                                <span class="w-2 h-2 rounded-full bg-black"></span> PostgreSQL / Redis
                            </li>
                            <li class="flex items-center gap-2">
                                <span class="w-2 h-2 rounded-full bg-black"></span> Docker / CI-CD
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
