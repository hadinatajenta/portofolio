<template>
    <RouterLink :to="to"
        class="nav-link font-semibold text-base md:text-lg transition-all duration-300 text-[var(--color-text)] hover:text-[var(--color-text-secondary)]">
        <span class="link-text">
            <slot />
        </span>
    </RouterLink>
</template>

<script setup>
import { RouterLink } from 'vue-router'
defineProps({
    to: {
        type: [String, Object],
        required: true
    }
})
</script>

<style scoped>
.nav-link {
    position: relative;
    display: inline-block;
    padding: 0.5rem 0.25rem;
    overflow: hidden;
    transition: color 0.3s ease;
}

.link-text {
    position: relative;
    z-index: 2;
    letter-spacing: 0.5px;
    transition: all 0.3s ease;
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: var(--color-text);
    transform: scaleX(0);
    transform-origin: center;
    transition: transform 0.3s ease;
}

.nav-link:hover {
    color: var(--color-text);
}

.nav-link:hover::after {
    transform: scaleX(1);
}

.nav-link:hover .link-text {
    letter-spacing: 1px;
}
</style>