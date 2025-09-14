<template>
   <DefaultLayout>
     <div class="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
        <div class="max-w-7xl mx-auto">
            <div class="text-center mb-12">
                <h1 class="text-4xl font-bold text-white mb-4 animate-fade-in">
                    My Projects
                </h1>
                <p class="text-gray-300 text-lg max-w-2xl mx-auto animate-fade-in-delay">
                    A collection of projects I've built using various technologies and frameworks
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-up">
                <div v-for="(project, index) in projects" :key="project.id"
                    class="project-card bg-gradient-to-br from-purple-900/30 to-gray-900/30 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-purple-400/40"
                    :style="{ animationDelay: `${index * 0.1}s` }" @click="openModal(project)">
                    <div class="flex justify-between items-start mb-4">
                        <h3 class="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors">
                            {{ project.title }}
                        </h3>
                        <div v-if="project.isPrivate" class="flex-shrink-0">
                            <span
                                class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                Private
                            </span>
                        </div>
                    </div>

                    <div class="flex flex-wrap gap-2 mb-4">
                        <span v-for="tech in project.stack" :key="tech"
                            class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100/10 text-purple-200 border border-purple-400/20">
                            {{ tech }}
                        </span>
                    </div>

                    <p class="text-gray-300 text-sm mb-4 line-clamp-2">
                        {{ project.shortDescription }}
                    </p>

                    <div class="flex justify-between items-center mt-auto">
                        <span class="text-purple-300 text-sm font-medium">View Details →</span>
                        <div v-if="!project.isPrivate && project.link" class="flex items-center text-gray-400 text-sm">
                            <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                    d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            Link Available
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="selectedProject"
            class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
            @click.self="closeModal">
            <div
                class="modal-content bg-gradient-to-br from-gray-900 to-purple-900/50 backdrop-blur-md border border-purple-500/30 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
                <div class="flex justify-between items-start mb-6">
                    <div>
                        <h2 class="text-3xl font-bold text-white mb-2">{{ selectedProject.title }}</h2>
                        <div v-if="selectedProject.isPrivate" class="inline-flex items-center">
                            <span
                                class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800 mr-3">
                                🔒 Private Project
                            </span>
                        </div>
                    </div>
                    <button @click="closeModal"
                        class="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>

                <div class="mb-6">
                    <h3 class="text-lg font-semibold text-purple-300 mb-3">Technology Stack</h3>
                    <div class="flex flex-wrap gap-2">
                        <span v-for="tech in selectedProject.stack" :key="tech"
                            class="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-purple-100/10 text-purple-200 border border-purple-400/30">
                            {{ tech }}
                        </span>
                    </div>
                </div>

                <div class="mb-8">
                    <h3 class="text-lg font-semibold text-purple-300 mb-3">Description</h3>
                    <p class="text-gray-300 leading-relaxed">{{ selectedProject.description }}</p>
                </div>

                <div v-if="selectedProject.isPrivate"
                    class="mb-6 p-4 bg-red-900/20 border border-red-500/30 rounded-lg">
                    <div class="flex items-start">
                        <svg class="w-5 h-5 text-red-400 mt-0.5 mr-3 flex-shrink-0" fill="currentColor"
                            viewBox="0 0 20 20">
                            <path fill-rule="evenodd"
                                d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <div>
                            <h4 class="text-red-300 font-medium mb-1">Private Repository</h4>
                            <p class="text-red-200 text-sm">This project contains proprietary code and cannot be
                                publicly shared due to confidentiality agreements.</p>
                        </div>
                    </div>
                </div>

                <div class="flex gap-4">
                    <button v-if="!selectedProject.isPrivate && selectedProject.link"
                        @click="openLink(selectedProject.link)"
                        class="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                        </svg>
                        {{ selectedProject.link.includes('github') ? 'View on GitHub' : 'Visit Website' }}
                    </button>
                    <button @click="closeModal"
                        class="px-6 py-3 border border-gray-500 text-gray-300 hover:bg-gray-700 hover:text-white rounded-lg transition-all duration-200">
                        Close
                    </button>
                </div>
            </div>
        </div>
    </div>
   </DefaultLayout>
</template>

<script setup>
import { ref } from 'vue'
import DefaultLayout from '../layouts/DefaultLayout.vue'

const selectedProject = ref(null)

const projects = [
    {
        id: 1,
        title: 'Portfolio Website',
        stack: ['Vue 3', 'TailwindCSS'],
        shortDescription: 'Personal portfolio website built with Vue 3 and TailwindCSS featuring modern design and smooth animations.',
        description: 'A modern and responsive portfolio website showcasing my projects and skills. Built with Vue 3 for reactive functionality and styled with TailwindCSS for a clean, professional appearance. Features smooth animations, responsive design, and optimized performance.',
        link: 'https://github.com/hadinatajenta/portofolio',
        isPrivate: false
    },
    {
        id: 2,
        title: 'Vue Kanji',
        stack: ['Vue 3', 'API Integration'],
        shortDescription: 'Interactive Kanji learning application with API integration for Japanese character study.',
        description: 'An educational web application designed to help users learn Japanese Kanji characters. Features API integration for fetching Kanji data, interactive learning modules, and a user-friendly interface built with Vue 3. Perfect for Japanese language learners of all levels.',
        link: 'https://github.com/hadinatajenta/vue-kanji',
        isPrivate: false
    },
    {
        id: 3,
        title: 'Andalasnet',
        stack: ['Laravel', 'MySQL'],
        shortDescription: 'Network management platform built with Laravel and MySQL for comprehensive connectivity solutions.',
        description: 'A comprehensive network management platform developed using Laravel framework and MySQL database. Provides tools for network monitoring, user management, and connectivity solutions. Features robust backend architecture and efficient database design for optimal performance.',
        link: 'https://andalasnet.com',
        isPrivate: false
    },
    {
        id: 4,
        title: 'SIG Palembang',
        stack: ['Leaflet', 'Laravel', 'MySQL'],
        shortDescription: 'Geographic Information System for Palembang with interactive mapping and location-based services.',
        description: 'A Geographic Information System (GIS) application for Palembang city featuring interactive maps powered by Leaflet.js. Built with Laravel backend and MySQL database to manage geographic data and provide location-based services. Includes features for mapping, data visualization, and spatial analysis.',
        link: 'https://github.com/hadinatajenta/TUBES-SIG',
        isPrivate: false
    },
    {
        id: 5,
        title: 'Merchant Management System',
        stack: ['Go Gin', 'Laravel', 'Express', 'Vue'],
        shortDescription: 'Comprehensive merchant management solution using microservices architecture with multiple technologies.',
        description: 'A sophisticated merchant management system built using microservices architecture. Combines Go Gin for high-performance API services, Laravel for administrative features, Express.js for additional backend services, and Vue.js for the frontend interface. Designed to handle complex merchant operations, payment processing, and business analytics.',
        link: null,
        isPrivate: true
    },
    {
        id: 6,
        title: 'Dashboard Laravel',
        stack: ['Laravel', 'Blade'],
        shortDescription: 'Administrative dashboard built with Laravel framework and Blade templating engine.',
        description: 'A comprehensive administrative dashboard developed with Laravel framework using Blade templating engine. Features user management, data analytics, reporting tools, and a responsive interface. Designed for efficient backend administration and business process management.',
        link: 'https://github.com/hadinatajenta/dashboard-laravel',
        isPrivate: false
    }
]

const openModal = (project) => {
    selectedProject.value = project
    document.body.style.overflow = 'hidden'
}

const closeModal = () => {
    selectedProject.value = null
    document.body.style.overflow = 'auto'
}

const openLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer')
}
</script>

<style scoped>
@keyframes fade-in {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes slide-up {
    from {
        opacity: 0;
        transform: translateY(40px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes scale-in {
    from {
        opacity: 0;
        transform: scale(0.95);
    }

    to {
        opacity: 1;
        transform: scale(1);
    }
}

.animate-fade-in {
    animation: fade-in 0.6s ease-out;
}

.animate-fade-in-delay {
    animation: fade-in 0.8s ease-out 0.2s both;
}

.animate-slide-up {
    animation: slide-up 0.8s ease-out 0.4s both;
}

.animate-scale-in {
    animation: scale-in 0.3s ease-out;
}

.project-card {
    animation: slide-up 0.6s ease-out both;
}

.line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.backdrop-blur-sm {
    backdrop-filter: blur(4px);
}

.backdrop-blur-md {
    backdrop-filter: blur(12px);
}

.modal-content {
    scrollbar-width: thin;
    scrollbar-color: rgba(139, 92, 246, 0.3) transparent;
}

.modal-content::-webkit-scrollbar {
    width: 6px;
}

.modal-content::-webkit-scrollbar-track {
    background: transparent;
}

.modal-content::-webkit-scrollbar-thumb {
    background-color: rgba(139, 92, 246, 0.3);
    border-radius: 3px;
}

.modal-content::-webkit-scrollbar-thumb:hover {
    background-color: rgba(139, 92, 246, 0.5);
}
</style>