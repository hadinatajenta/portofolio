<template>
    <RouterLink :to="to"
        class="nav-link text-primary font-medium text-base md:text-lg transition-all duration-500 ease-out-expo">
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
    transition: color 0.5s cubic-bezier(0.19, 1, 0.22, 1);
}

.link-text {
    position: relative;
    z-index: 2;
    letter-spacing: 0.5px;
    transition: all 0.4s ease;
}

.nav-link::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #3F72AF 0%, #2a5085 100%);
    transform: translateY(100%);
    transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
    z-index: 1;
    border-radius: 2px;
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #3F72AF, transparent);
    transform: scaleX(0);
    transform-origin: center;
    transition: transform 0.8s cubic-bezier(0.23, 1, 0.32, 1);
}

.nav-link:hover {
    color: white;
}

.nav-link:hover::before {
    transform: translateY(0);
}

.nav-link:hover::after {
    transform: scaleX(1);
}

.nav-link:hover .link-text {
    letter-spacing: 1px;
    transform: translateY(-1px);
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
}
</style>