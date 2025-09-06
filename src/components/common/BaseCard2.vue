<template>
    <div class="w-full bg-[#1f1f1f]/80 backdrop-blur-xl rounded-2xl overflow-hidden shadow-xl">
        <div class="flex items-center gap-2 px-4 py-3 border-b border-gray-700">
            <div class="w-3 h-3 rounded-full bg-red-500"></div>
            <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div class="w-3 h-3 rounded-full bg-green-500"></div>
            <span v-if="title" class="ml-4 text-sm text-gray-400">{{ title }}</span>
        </div>

        <div class="p-6">
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

<style scoped></style>
