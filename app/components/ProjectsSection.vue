<script setup lang="ts">
import { projects } from '~/data/projects'

const { reveal } = useScrollReveal()

onMounted(() => {
  reveal('.project-card', { y: 32, duration: 0.6, stagger: 0.08, start: 'top 80%' })
})
</script>

<template>
  <section
    id="projects"
    class="py-32 px-6 border-t border-border"
  >
    <div class="max-w-6xl mx-auto">
      <div class="flex items-center gap-3 mb-16">
        <span class="w-6 h-px bg-accent" />
        <span class="font-mono text-xs text-accent tracking-widest uppercase">Projects</span>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 border-t border-l border-border">
        <component
          :is="project.href ? 'a' : 'div'"
          v-for="(project, i) in projects"
          :key="project.title"
          :href="project.href || undefined"
          :target="project.href ? '_blank' : undefined"
          :rel="project.href ? 'noopener noreferrer' : undefined"
          class="project-card group p-8 flex flex-col gap-6 border-r border-b border-border hover:bg-bg-subtle transition-colors duration-300"
        >
          <!-- Header -->
          <div class="flex items-start justify-between gap-4">
            <span class="font-mono text-xs text-text-dim">
              {{ String(i + 1).padStart(2, '0') }}
            </span>
            <!-- Arrow icon for linked projects -->
            <svg
              v-if="project.href"
              aria-hidden="true"
              class="w-4 h-4 text-text-dim group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 shrink-0"
              viewBox="0 0 16 16" fill="none"
            >
              <path d="M3 13L13 3M13 3H6M13 3v7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>

          <!-- Title + description -->
          <div class="flex-1">
            <h3
              class="font-sans text-2xl font-semibold leading-tight tracking-tight mb-3 transition-colors duration-300"
              class="text-text group-hover:text-accent"
            >
              {{ project.title }}
            </h3>
            <p class="text-sm text-text-muted leading-relaxed">
              {{ project.description }}
            </p>
          </div>

          <!-- Tags -->
          <div class="flex flex-wrap gap-2">
            <span
              v-for="tag in project.tags"
              :key="tag"
              class="font-mono text-xs px-2.5 py-1 border border-border text-text-dim rounded"
            >
              {{ tag }}
            </span>
          </div>
        </component>

        <!-- Decorative filler cell -->
        <div
          v-if="projects.length % 2 !== 0"
          class="hidden md:flex border-r border-b border-border items-center justify-center overflow-hidden"
          aria-hidden="true"
        >
          <svg class="w-full h-full opacity-[0.07]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="project-dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
                <circle cx="12" cy="12" r="1" fill="#4ade80" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#project-dots)" />
          </svg>
        </div>
      </div>
    </div>
  </section>
</template>
