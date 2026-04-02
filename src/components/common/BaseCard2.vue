<template>
    <div class="w-full bg-white border-2 border-black/10 rounded-lg overflow-hidden shadow-md">
        <div class="flex items-center gap-2 px-4 py-3 border-b border-black/10">
            <div class="w-3 h-3 rounded-full bg-red-500"></div>
            <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div class="w-3 h-3 rounded-full bg-green-500"></div>
            <span v-if="title" class="ml-4 text-sm text-black/60">{{ title }}</span>
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
