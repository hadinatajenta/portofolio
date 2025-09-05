<template>
    <div class="mac-card">
        <!-- Card header with traffic lights -->
        <div class="flex items-center gap-2 px-4 py-3 border-b border-white/10">
            <div class="w-3 h-3 rounded-full bg-red-500"></div>
            <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div class="w-3 h-3 rounded-full bg-green-500"></div>
            <span v-if="title" class="ml-4 text-sm text-gray-300">{{ title }}</span>
        </div>

        <!-- Content slot -->
        <div class="p-6 relative z-10">
            <slot />
        </div>
    </div>
</template>

<script setup>
defineProps({
    title: {
        type: String,
        default: ''
    }
})
</script>

<style scoped>
.mac-card {
    backdrop-filter: blur(20px) saturate(180%);
    -webkit-backdrop-filter: blur(20px) saturate(180%);
    background: linear-gradient(125deg,
            rgba(255, 255, 255, 0.08) 0%,
            rgba(255, 255, 255, 0.04) 40%,
            rgba(255, 255, 255, 0.04) 60%,
            rgba(255, 255, 255, 0.08) 100%);
    border: 1px solid rgba(255, 255, 255, 0.18);
    box-shadow:
        0 8px 32px rgba(0, 0, 0, 0.3),
        inset 0 1px 1px rgba(255, 255, 255, 0.15),
        inset 0 10px 20px rgba(255, 255, 255, 0.05);
    border-radius: 24px;
    overflow: hidden;
    position: relative;
}
</style>
