<template>
    <section id="hero" class="relative overflow-hidden">
        <div class="absolute inset-0 -z-10">
            <div
                class="absolute -top-32 -left-16 w-[420px] h-[420px] rounded-full bg-purple-500/20 blur-[160px] animate-float">
            </div>
            <div
                class="absolute bottom-0 right-0 w-[520px] h-[520px] rounded-full bg-cyan-500/15 blur-[180px] animate-float-delayed">
            </div>
        </div>

        <div class="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-32">
            <div class="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                <div class="space-y-8 text-center lg:text-left">
                    <div
                        class="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-gray-200 backdrop-blur-md text-xs md:text-sm mx-auto lg:mx-0">
                        <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                        <span>Crafting immersive digital products</span>
                    </div>

                    <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white">
                        Building <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-cyan-300 to-blue-300">delightful
                            experiences</span> for ambitious teams.
                    </h1>

                    <p class="text-gray-300 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                        Hadinata is a software engineer blending strong product thinking with clean, scalable
                        code. From prototypes to production apps, every pixel and API is designed with intent.
                    </p>

                    <div class="flex flex-wrap justify-center lg:justify-start gap-4">
                        <BaseButton :to="'/projects'" :label="'View Projects'" />
                        <a href="#projects"
                            class="px-6 py-3 rounded-xl font-medium text-white/90 border border-white/20 hover:border-cyan-300 hover:text-cyan-200 transition-all duration-300 backdrop-blur">
                            Explore Work
                        </a>
                    </div>

                    <div class="grid grid-cols-2 md:grid-cols-3 gap-6 pt-6 border-t border-white/10">
                        <div class="flex flex-col gap-1 items-center md:items-start">
                            <span class="text-3xl font-semibold text-white">6+</span>
                            <span class="text-xs uppercase tracking-wider text-gray-400">Years experience</span>
                        </div>
                        <div class="flex flex-col gap-1 items-center md:items-start">
                            <span class="text-3xl font-semibold text-white">18+</span>
                            <span class="text-xs uppercase tracking-wider text-gray-400">Projects shipped</span>
                        </div>
                        <div class="flex flex-col gap-1 items-center md:items-start">
                            <span class="text-3xl font-semibold text-white">3</span>
                            <span class="text-xs uppercase tracking-wider text-gray-400">Active clients</span>
                        </div>
                    </div>
                </div>

                <div class="relative flex justify-center lg:justify-end">
                    <div
                        class="absolute -top-12 -right-6 hidden lg:block w-64 h-64 rounded-full bg-gradient-to-br from-purple-500/40 via-cyan-400/30 to-transparent blur-[80px] animate-float">
                    </div>
                    <div
                        class="relative w-full max-w-sm sm:max-w-md lg:max-w-none rounded-[28px] sm:rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_30px_120px_rgba(68,51,122,0.3)] p-8 sm:p-10 overflow-hidden">
                        <div class="relative flex justify-center">
                            <div
                                class="absolute -top-8 -left-6 hidden sm:flex px-4 py-2 rounded-2xl border border-white/15 bg-white/10 text-white/90 text-xs uppercase tracking-wider backdrop-blur">
                                Currently crafting
                            </div>
                            <div class="w-36 h-36 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                                <img src="/img/5357.jpg" alt="Hadinata profile" class="w-full h-full object-cover" />
                            </div>
                            <div
                                class="absolute -bottom-8 -right-4 hidden sm:flex px-4 py-3 rounded-2xl border border-white/15 bg-gradient-to-r from-purple-500/40 to-cyan-400/30 text-white text-sm shadow-lg">
                                Vue · Laravel · Tailwind
                            </div>
                        </div>

                        <div class="sm:hidden text-sm text-gray-300 text-center mt-6">
                            Vue · Laravel · Tailwind
                        </div>

                        <div class="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-200">
                            <div
                                class="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur transition hover:border-cyan-300/60 text-center sm:text-left">
                                <p class="text-white font-semibold">Product-minded</p>
                                <p class="text-xs text-gray-400 mt-1">From discovery workshops to polished UI.</p>
                            </div>
                            <div
                                class="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur transition hover:border-cyan-300/60 text-center sm:text-left">
                                <p class="text-white font-semibold">Performance driven</p>
                                <p class="text-xs text-gray-400 mt-1">Optimizing experiences without sacrificing craft.</p>
                            </div>
                            <div
                                class="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur transition hover:border-cyan-300/60 text-center sm:text-left">
                                <p class="text-white font-semibold">End-to-end delivery</p>
                                <p class="text-xs text-gray-400 mt-1">Collaborating seamlessly across design & dev.</p>
                            </div>
                            <div
                                class="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur transition hover:border-cyan-300/60 text-center sm:text-left">
                                <p class="text-white font-semibold">Human friendly</p>
                                <p class="text-xs text-gray-400 mt-1">Accessible experiences that feel effortless.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import BaseButton from "./BaseButton.vue";
</script>

<style scoped>
@keyframes float {
    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(18px);
    }
}

.animate-float {
    animation: float 12s ease-in-out infinite;
}

.animate-float-delayed {
    animation: float 14s ease-in-out infinite;
    animation-delay: 2s;
}
</style>
