<template>
    <section id="projects" class="py-16 sm:py-20">
        <div class="flex flex-col gap-10">
            <!-- Section Header -->
            <div class="space-y-3">
                <p class="text-xs font-bold uppercase tracking-widest text-[var(--color-text-muted)] font-dot">Selected Work</p>
                <h2 class="text-4xl sm:text-5xl font-bold text-[var(--color-text)] leading-tight">
                    Featured Projects
                </h2>
                <p class="text-[var(--color-text-secondary)] text-base max-w-xl">
                    From personal experiments to production systems — here's what I've built.
                </p>
            </div>

            <!-- Projects Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <a v-for="project in featuredProjects" :key="project.id"
                    :href="project.link || '#'"
                    :target="project.link ? '_blank' : ''"
                    rel="noopener noreferrer"
                    class="group flex flex-col gap-4 rounded-2xl border-2 border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-6 transition-all duration-300 hover:border-[var(--color-border-hover)] hover:shadow-lg active:scale-[0.98]"
                >
                    <div class="flex items-start justify-between gap-3">
                        <h3 class="text-lg font-bold text-[var(--color-text)] group-hover:text-[var(--color-text-secondary)] leading-tight">
                            {{ project.name }}
                        </h3>
                        <svg class="w-4 h-4 text-[var(--color-text-muted)] flex-shrink-0 mt-1 transition-all duration-300 group-hover:text-[var(--color-text)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
                        </svg>
                    </div>
                    <p class="text-[var(--color-text-secondary)] text-sm leading-relaxed flex-grow">
                        {{ project.description }}
                    </p>
                    <div class="flex flex-wrap gap-1.5 pt-2 border-t border-[var(--color-border)]">
                        <span v-for="tag in project.tags" :key="tag"
                            class="text-[11px] font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full bg-[var(--color-surface-hover)] text-[var(--color-text-secondary)] font-dot">
                            {{ tag }}
                        </span>
                    </div>
                </a>
            </div>

            <!-- View All -->
            <div>
                <router-link to="/projects"
                    class="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-text)] border-b-2 border-[var(--color-border-strong)] pb-0.5 hover:gap-3 transition-all duration-200">
                    View all projects
                    <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </router-link>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useProjectsData } from '../../composables/useProjectsData'

const { featuredProjects } = useProjectsData()
</script>
