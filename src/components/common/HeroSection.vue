<template>
    <section id="hero" class="relative overflow-hidden">
        <div class="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-32">
            <div class="grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16 items-center">
                <div class="space-y-8 text-left">
                    <div class="space-y-4">
                        <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-black">
                            {{ heroContent.title }}
                        </h1>
                        <p class="text-lg text-black/70 font-medium">
                            {{ heroContent.subtitle }}
                        </p>
                    </div>

                    <div v-if="heroContent.description" class="space-y-3 text-black/60 text-base leading-relaxed max-w-2xl">
                        <p>
                            {{ heroContent.description }}
                        </p>
                    </div>

                    <div class="flex flex-wrap items-center gap-3 pt-4">
                        <BaseButton :to="heroContent.primaryCta.to" :label="heroContent.primaryCta.label" />
                        <router-link :to="heroContent.secondaryCta.to"
                            class="inline-flex items-center gap-2 rounded-lg border-2 border-black px-6 py-3 text-sm font-semibold text-black transition hover:bg-black/5">
                            {{ heroContent.secondaryCta.label }}
                            <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M17 8l4 4m0 0l-4 4m4-4H7" />
                            </svg>
                        </router-link>
                    </div>

                    <div class="grid grid-cols-3 gap-6 pt-8 border-t-2 border-black/10">
                        <div v-for="stat in heroContent.stats" :key="stat.label">
                            <p class="text-xs font-semibold tracking-wide text-black/50 uppercase">{{ stat.label }}</p>
                            <p class="mt-2 text-2xl font-bold text-black">{{ stat.value }}</p>
                        </div>
                    </div>
                </div>

                <div class="relative flex justify-center lg:justify-end">
                    <button type="button"
                        class="group relative flex h-56 w-56 sm:h-64 sm:w-64 lg:h-80 lg:w-80 items-center justify-center overflow-hidden rounded-2xl border-2 border-black/20 bg-white shadow-lg transition hover:border-black focus:outline-none focus-visible:ring-2 focus-visible:ring-black lg:translate-y-10"
                        @click="showGallery = true">
                        <img :src="heroContent.profileImage.src" :alt="heroContent.profileImage.alt"
                            class="h-full w-full object-cover transition group-hover:scale-105" />
                    </button>
                </div>
            </div>
        </div>
        <div v-if="showGallery"
            class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-6 py-12"
            @click.self="showGallery = false">
            <div class="relative w-full max-w-3xl rounded-2xl border-2 border-black bg-white p-6 shadow-2xl">
                <button type="button"
                    class="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border-2 border-black/20 bg-white text-black transition hover:border-black hover:bg-black/5"
                    @click="showGallery = false">
                    <span class="sr-only">Close</span>
                    <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div class="relative overflow-hidden rounded-xl border-2 border-black/10 bg-white">
                    <img :src="currentImage" alt="Hadinata portrait" class="w-full h-full object-cover" />
                </div>

                <div v-if="galleryImages.length > 1" class="mt-4 flex items-center justify-between gap-4">
                    <button type="button"
                        class="inline-flex items-center gap-2 rounded-lg border-2 border-black/20 bg-white px-4 py-2 text-sm font-medium text-black transition hover:border-black hover:bg-black/5"
                        @click="prevImage">
                        <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                        </svg>
                        Previous
                    </button>
                    <div class="flex items-center gap-2">
                        <button v-for="(image, index) in galleryImages" :key="image" type="button"
                            class="h-2.5 w-2.5 rounded-full transition"
                            :class="index === currentIndex ? 'bg-black' : 'bg-black/30'"
                            @click="setImage(index)"></button>
                    </div>
                    <button type="button"
                        class="inline-flex items-center gap-2 rounded-lg border-2 border-black/20 bg-white px-4 py-2 text-sm font-medium text-black transition hover:border-black hover:bg-black/5"
                        @click="nextImage">
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
import { useHeroData } from "../../composables/useHeroData";

const {
    heroContent,
    galleryImages,
    showGallery,
    currentIndex,
    currentImage,
    prevImage,
    nextImage,
    setImage,
    contactCta
} = useHeroData();
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
