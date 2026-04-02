<template>
    <router-link :to="to" class="inline-flex items-center gap-2 px-6 py-3 border-2 border-black text-black font-semibold rounded-lg transition-all duration-300 bg-transparent hover:bg-black/5">
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
    background-color: rgba(0, 0, 0, 0.05);
    border-color: #000000;
}
</style>
