<template>
    <section id="hero" class="relative overflow-hidden">
        <div class="absolute inset-0 -z-10 pointer-events-none">
            <div
                class="absolute -top-32 left-1/2 -translate-x-1/2 w-[460px] h-[460px] rounded-full bg-purple-500/20 blur-[160px] animate-float">
            </div>
            <div
                class="absolute bottom-0 right-1/2 translate-x-1/2 w-[540px] h-[540px] rounded-full bg-cyan-500/15 blur-[180px] animate-float-delayed">
            </div>
        </div>

        <div class="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-18 lg:py-28">
            <div class="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                <div class="space-y-8 text-left">
                    <div
                        class="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-gray-200 backdrop-blur-md text-xs md:text-sm">
                        <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                        <span>Crafting immersive digital products</span>
                    </div>

                    <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white">
                        Building <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-cyan-300 to-blue-300">delightful
                            experiences</span> for ambitious teams.
                    </h1>

                    <p class="text-gray-300 text-lg leading-relaxed max-w-xl">
                        Hadinata is a software engineer blending strong product thinking with clean, scalable
                        code. From prototypes to production apps, every pixel and API is designed with intent.
                    </p>

                    <div class="flex flex-wrap justify-start gap-4">
                        <BaseButton :to="'/projects'" :label="'View Projects'" />
                        <a href="#projects"
                            class="px-6 py-3 rounded-xl font-medium text-white/90 border border-white/20 hover:border-cyan-300 hover:text-cyan-200 transition-all duration-300 backdrop-blur">
                            Explore Work
                        </a>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-white/10">
                        <div class="flex flex-col gap-1">
                            <span class="text-3xl font-semibold text-white">6+</span>
                            <span class="text-xs uppercase tracking-wider text-gray-400">Years experience</span>
                        </div>
                        <div class="flex flex-col gap-1">
                            <span class="text-3xl font-semibold text-white">18+</span>
                            <span class="text-xs uppercase tracking-wider text-gray-400">Projects shipped</span>
                        </div>
                        <div class="flex flex-col gap-1">
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
                            <button
                                type="button"
                                class="group w-44 h-44 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl transition transform hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                                @click="showGallery = true"
                            >
                                <img src="/img/5357.jpg" alt="Hadinata profile" class="w-full h-full object-cover transition group-hover:scale-105" />
                            </button>
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
        <transition name="gallery">
            <div
                v-if="showGallery"
                class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-6 py-12"
                @click.self="showGallery = false"
            >
                <div class="relative w-full max-w-4xl rounded-3xl border border-white/10 bg-black/70 p-6 shadow-[0_40px_140px_rgba(0,0,0,0.55)]">
                    <button
                        type="button"
                        class="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-gray-200 transition hover:border-cyan-200/60 hover:text-white"
                        @click="showGallery = false"
                    >
                        <span class="sr-only">Close</span>
                        <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <div class="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                        <img :src="currentImage" alt="Hadinata portrait" class="w-full h-full object-cover" />
                    </div>

                    <div v-if="galleryImages.length > 1" class="mt-4 flex items-center justify-between">
                        <button
                            type="button"
                            class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-gray-200 transition hover:border-cyan-200/60 hover:text-white"
                            @click="prevImage"
                        >
                            <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                            </svg>
                            Previous
                        </button>
                        <div class="flex items-center gap-2">
                            <button
                                v-for="(image, index) in galleryImages"
                                :key="image"
                                type="button"
                                class="h-2.5 w-2.5 rounded-full transition"
                                :class="index === currentIndex ? 'bg-cyan-300' : 'bg-white/30'"
                                @click="setImage(index)"
                            ></button>
                        </div>
                        <button
                            type="button"
                            class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-gray-200 transition hover:border-cyan-200/60 hover:text-white"
                            @click="nextImage"
                        >
                            Next
                            <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </transition>
    </section>
</template>

<script setup>
import BaseButton from "./BaseButton.vue";
import { ref, computed } from "vue";

const galleryImages = [
    "/img/5357.jpg",
    "/img/portrait-2.jpg",
    "/img/portrait-3.jpg"
];

const showGallery = ref(false);
const currentIndex = ref(0);

const currentImage = computed(() => galleryImages[currentIndex.value] || galleryImages[0]);

const prevImage = () => {
    currentIndex.value = (currentIndex.value - 1 + galleryImages.length) % galleryImages.length;
};

const nextImage = () => {
    currentIndex.value = (currentIndex.value + 1) % galleryImages.length;
};

const setImage = (index) => {
    currentIndex.value = index;
};
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

.gallery-enter-active,
.gallery-leave-active {
    transition: opacity 0.25s ease;
}

.gallery-enter-from,
.gallery-leave-to {
    opacity: 0;
}
</style>
