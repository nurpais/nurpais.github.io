<script setup lang="ts">
import { gsap } from 'gsap'

type Project = {
  index: string
  title: string
  description: string
  tags: string[]
  href?: string
}

const projects: Project[] = [
  {
    index: '01',
    title: 'Project Alpha',
    description: 'High-performance DeFi protocol built on Solana. Real-time order book with sub-millisecond execution.',
    tags: ['Rust', 'Solana', 'TypeScript'],
    href: '#',
  },
  {
    index: '02',
    title: 'XForms Parser',
    description: 'XForms parsing and validation engine written in Rust, compiled to WebAssembly for browser integration.',
    tags: ['Rust', 'WebAssembly', 'Vue 3'],
    href: '#',
  },
  {
    index: '03',
    title: 'DEX Analytics',
    description: 'Real-time market data analysis tool for decentralized exchanges. On-chain data aggregation and visualization.',
    tags: ['TypeScript', 'EVM', 'Node.js'],
    href: '#',
  },
  {
    index: '04',
    title: 'Coming Soon',
    description: 'Next project in progress — exploring cryptographic primitives and ZK-proof integration.',
    tags: ['Cryptography', 'ZK', 'Rust'],
  },
]

const section = useTemplateRef('section')

onMounted(() => {
  gsap.from('.project-row', {
    opacity: 0,
    y: 24,
    duration: 0.6,
    stagger: 0.1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: section.value,
      start: 'top 80%',
      once: true,
    },
  })
})
</script>

<template>
  <section
    id="projects"
    ref="section"
    class="py-32 px-6 border-t border-border"
  >
    <div class="max-w-6xl mx-auto">
      <div class="flex items-center justify-between mb-16">
        <div class="flex items-center gap-3">
          <span class="w-6 h-px bg-accent" />
          <span class="font-mono text-xs text-accent tracking-widest uppercase">Projects</span>
        </div>
        <span class="font-mono text-xs text-text-dim">{{ projects.length }} selected works</span>
      </div>

      <div class="divide-y divide-border">
        <div
          v-for="project in projects"
          :key="project.index"
          class="project-row group py-8 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 cursor-default"
          :class="project.href ? 'cursor-pointer' : ''"
          @click="project.href && project.href !== '#' ? navigateTo(project.href, { external: true }) : null"
        >
          <!-- Index -->
          <span class="font-mono text-xs text-text-dim w-8 shrink-0">
            {{ project.index }}
          </span>

          <!-- Title -->
          <h3 class="font-sans text-lg font-medium text-text group-hover:text-accent transition-colors duration-300 w-48 shrink-0">
            {{ project.title }}
          </h3>

          <!-- Description -->
          <p class="text-sm text-text-muted leading-relaxed flex-1">
            {{ project.description }}
          </p>

          <!-- Tags -->
          <div class="flex flex-wrap gap-2 sm:justify-end shrink-0">
            <span
              v-for="tag in project.tags"
              :key="tag"
              class="font-mono text-xs px-2.5 py-1 border border-border text-text-dim rounded group-hover:border-accent/30 group-hover:text-text-muted transition-all duration-300"
            >
              {{ tag }}
            </span>
          </div>

          <!-- Arrow -->
          <svg
            v-if="project.href"
            class="w-4 h-4 text-text-dim group-hover:text-accent group-hover:translate-x-1 transition-all duration-300 shrink-0"
            viewBox="0 0 16 16" fill="none"
          >
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  </section>
</template>
