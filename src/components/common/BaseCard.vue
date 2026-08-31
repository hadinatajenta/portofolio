<template>
    <div class="mac-card bg-[var(--color-surface)] border-[var(--color-border)]">
        <!-- Card header with traffic lights -->
        <div class="flex items-center gap-2 px-4 py-3 border-b border-[var(--color-border)]">
            <div class="w-3 h-3 rounded-full bg-red-500"></div>
            <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div class="w-3 h-3 rounded-full bg-green-500"></div>
            <span v-if="title" class="ml-4 text-sm text-[var(--color-text-muted)]">{{ title }}</span>
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
    border: 2px solid var(--color-border);
    box-shadow:
        0 8px 32px var(--color-shadow-md),
        inset 0 1px 1px var(--color-shadow-sm);
    border-radius: 16px;
    overflow: hidden;
    position: relative;
}
</style>
