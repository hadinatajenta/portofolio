<template>
    <div class="flex flex-col min-h-screen">
        <a
            href="#main-content"
            class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[var(--color-btn-bg)] focus:text-[var(--color-btn-text)] focus:rounded-lg focus:font-semibold focus:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-border-strong)]"
        >
            Skip to content
        </a>
        <Headers />

        <main id="main-content" tabindex="-1" class="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-24 pb-12 md:pb-16 focus:outline-none">
            <slot />
        </main>


        <Footers />
        
        <ThemeToggle />
    </div>
</template>

<script setup>
import Headers from '../components/layout/Header.vue';
import Footers from '../components/layout/Footer.vue';
import ThemeToggle from '../components/ui/ThemeToggle.vue';
</script>

<style scoped>
html {
    scroll-behavior: smooth;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}
</style>
