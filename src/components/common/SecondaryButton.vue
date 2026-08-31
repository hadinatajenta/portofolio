<template>
    <router-link :to="to" class="inline-flex items-center gap-2 px-6 py-3 border-2 border-[var(--color-border-strong)] text-[var(--color-text)] font-semibold rounded-lg transition-all duration-300 bg-transparent hover:bg-[var(--color-surface-hover)]">
        <slot>{{ label }}</slot>
    </router-link>
</template>

<script setup>
defineProps({
    to: {
        type: String,
        required: true,
    },
    label: {
        type: String,
        default: "",
    },
})
</script>

<style scoped>
.router-link-active {
    background-color: var(--color-surface-hover);
    border-color: var(--color-border-strong);
}
</style>
