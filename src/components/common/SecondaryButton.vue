<template>
    <router-link :to="to" class="px-6 py-3 border border-white/20 text-white font-medium rounded-xl shadow-lg transition-all duration-300
           bg-transparent hover:bg-gradient-to-r hover:from-purple-700/80 hover:to-cyan-700/80 hover:border-white/30
           hover:shadow-purple-500/30 hover:shadow-lg">
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
    background: linear-gradient(45deg,
            rgba(168, 85, 247, 0.2),
            rgba(34, 211, 238, 0.2));
    border-color: rgba(255, 255, 255, 0.3);
}
</style>
