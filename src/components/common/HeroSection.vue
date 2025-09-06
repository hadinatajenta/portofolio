<template>
    <section id="hero"
        class="flex flex-col justify-center items-center text-center  px-6 relative overflow-hidden">
        <div class="absolute inset-0 -z-10 flex justify-center items-center">
            <div class="w-[600px] h-[600px] rounded-full bg-purple-500/20 blur-[160px] animate-pulse"></div>
        </div>

        <BaseCard title="Welcome">
            <div class="flex flex-col items-center gap-6">
                <div class="w-40 h-40 rounded-full overflow-hidden border-4 border-white/20 shadow-xl animate-fade-in">
                    <img src="/img/5357.jpg" alt="profile" class="w-full h-full object-cover" />
                </div>

                <h1 class="text-4xl md:text-6xl font-bold text-white drop-shadow-lg animate-slide-up">
                    Hi, I’m <span class="text-purple-400">Hadinata</span>
                </h1>
                <p class="text-gray-300 text-base md:text-lg max-w-2xl leading-relaxed animate-fade-in-delay">
                    A passionate <span class="text-cyan-400">Software Engineer</span> who
                    loves building scalable apps and elegant UI.
                </p>
                <div class="flex gap-4 flex-wrap justify-center animate-fade-in-delay-2">
                    <router-link to="/projects"
                        class="px-6 py-3 bg-purple-500/80 hover:bg-purple-600 text-white font-medium rounded-xl shadow-lg transition-all duration-300">
                        View Projects
                    </router-link>
                    <router-link to="/contact"
                        class="px-6 py-3 bg-cyan-500/80 hover:bg-cyan-600 text-white font-medium rounded-xl shadow-lg transition-all duration-300">
                        Contact Me
                    </router-link>
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
