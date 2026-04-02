<template>
    <div class="mac-card">
        <!-- Card header with traffic lights -->
        <div class="flex items-center gap-2 px-4 py-3 border-b border-black/10">
            <div class="w-3 h-3 rounded-full bg-red-500"></div>
            <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div class="w-3 h-3 rounded-full bg-green-500"></div>
            <span v-if="title" class="ml-4 text-sm text-black/60">{{ title }}</span>
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
            rgba(0, 0, 0, 0.02) 0%,
            rgba(0, 0, 0, 0.01) 40%,
            rgba(0, 0, 0, 0.01) 60%,
            rgba(0, 0, 0, 0.02) 100%);
    border: 2px solid rgba(0, 0, 0, 0.1);
    box-shadow:
        0 8px 32px rgba(0, 0, 0, 0.08),
        inset 0 1px 1px rgba(0, 0, 0, 0.05),
        inset 0 10px 20px rgba(0, 0, 0, 0.02);
    border-radius: 16px;
    overflow: hidden;
    position: relative;
}
</style>
