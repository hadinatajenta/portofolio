<template>
    <section id="hero" class="relative overflow-hidden">
        <div class="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-32">
            <div class="grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16 items-center">
                <div class="space-y-8 text-left">
                    <div class="space-y-4">
                        <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-black">
                            Building exceptional digital products
                        </h1>
                        <p class="text-lg text-black/70 font-medium">
                            I'm Hadinata, a backend-focused software engineer crafting scalable systems and reliable solutions for ambitious teams.
                        </p>
                    </div>

                    <div class="space-y-3 text-black/60 text-base leading-relaxed max-w-2xl">
                        <p>
                            With 6+ years of experience spanning finance to media, I transform complex requirements into clean, maintainable code. I focus on building systems that scale reliably while keeping teams moving fast.
                        </p>
                    </div>

                    <div class="flex flex-wrap items-center gap-3 pt-4">
                        <BaseButton :to="'/projects'" :label="'View My Work'" />
                        <router-link to="/experience"
                            class="inline-flex items-center gap-2 rounded-lg border-2 border-black px-6 py-3 text-sm font-semibold text-black transition hover:bg-black/5">
                            My Experience
                            <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H7" />
                            </svg>
                        </router-link>
                    </div>

                    <div class="grid grid-cols-3 gap-6 pt-8 border-t-2 border-black/10">
                        <div>
                            <p class="text-xs font-semibold tracking-wide text-black/50 uppercase">Years Active</p>
                            <p class="mt-2 text-2xl font-bold text-black">6+</p>
                        </div>
                        <div>
                            <p class="text-xs font-semibold tracking-wide text-black/50 uppercase">Projects</p>
                            <p class="mt-2 text-2xl font-bold text-black">18+</p>
                        </div>
                        <div>
                            <p class="text-xs font-semibold tracking-wide text-black/50 uppercase">Teams</p>
                            <p class="mt-2 text-2xl font-bold text-black">3+</p>
                        </div>
                    </div>
                </div>

                <div class="relative flex justify-center lg:justify-end">
                    <button
                        type="button"
                        class="group relative flex h-56 w-56 sm:h-64 sm:w-64 lg:h-80 lg:w-80 items-center justify-center overflow-hidden rounded-2xl border-2 border-black/20 bg-white shadow-lg transition hover:border-black focus:outline-none focus-visible:ring-2 focus-visible:ring-black lg:translate-y-10"
                        @click="showGallery = true"
                    >
                        <img src="/img/5357.jpg" alt="Hadinata profile" class="h-full w-full object-cover transition group-hover:scale-105" />
                    </button>
                </div>
            </div>
        </div>
        <div
            v-if="showGallery"
            class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-6 py-12"
            @click.self="showGallery = false"
        >
            <div class="relative w-full max-w-3xl rounded-2xl border-2 border-black bg-white p-6 shadow-2xl">
                <button
                    type="button"
                    class="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border-2 border-black/20 bg-white text-black transition hover:border-black hover:bg-black/5"
                    @click="showGallery = false"
                >
                    <span class="sr-only">Close</span>
                    <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div class="relative overflow-hidden rounded-xl border-2 border-black/10 bg-white">
                    <img :src="currentImage" alt="Hadinata portrait" class="w-full h-full object-cover" />
                </div>

                <div v-if="galleryImages.length > 1" class="mt-4 flex items-center justify-between gap-4">
                    <button
                        type="button"
                        class="inline-flex items-center gap-2 rounded-lg border-2 border-black/20 bg-white px-4 py-2 text-sm font-medium text-black transition hover:border-black hover:bg-black/5"
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
                            :class="index === currentIndex ? 'bg-black' : 'bg-black/30'"
                            @click="setImage(index)"
                        ></button>
                    </div>
                    <button
                        type="button"
                        class="inline-flex items-center gap-2 rounded-lg border-2 border-black/20 bg-white px-4 py-2 text-sm font-medium text-black transition hover:border-black hover:bg-black/5"
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

const contactCta = import.meta.env.VITE_CONTACT_EMAIL ? `mailto:${import.meta.env.VITE_CONTACT_EMAIL}` : '/contact';
</script>

<style scoped>
.gallery-enter-active,
.gallery-leave-active {
    transition: opacity 0.25s ease;
}

.gallery-enter-from,
.gallery-leave-to {
    opacity: 0;
}
</style>
