<template>
    <div class="flex flex-col min-h-screen ">
        <Headers/>

        <main class="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <slot />
        </main>

        <Footers class="w-full bg-white border-t border-gray-200 mt-auto" />
    </div>
</template>

<script setup>
import Headers from '../components/layout/Header.vue';
import Footers from '../components/layout/Footer.vue';
</script>

<style scoped>
html {
    scroll-behavior: smooth;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}
</style>
