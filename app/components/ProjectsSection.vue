<script setup lang="ts">
import { gsap } from 'gsap'

type Project = {
  title: string
  description: string
  tags: string[]
  href?: string
}

const projects: Project[] = [
  {
    title: 'Project Alpha',
    description: 'High-performance DeFi protocol built on Solana. Real-time order book with sub-millisecond execution.',
    tags: ['Rust', 'Solana', 'TypeScript'],
    href: '#',
  },
  {
    title: 'XForms Parser',
    description: 'XForms parsing and validation engine written in Rust, compiled to WebAssembly for browser integration.',
    tags: ['Rust', 'WebAssembly', 'Vue 3'],
    href: '#',
  },
  {
    title: 'DEX Analytics',
    description: 'Real-time market data analysis tool for decentralized exchanges. On-chain data aggregation and visualization.',
    tags: ['TypeScript', 'EVM', 'Node.js'],
    href: '#',
  },
  {
    title: 'Coming Soon',
    description: 'Exploring cryptographic primitives and ZK-proof integration.',
    tags: ['Cryptography', 'ZK', 'Rust'],
  },
]

const section = useTemplateRef('section')
let tween: gsap.core.Tween | null = null

onMounted(() => {
  tween = gsap.from('.project-item', {
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

onUnmounted(() => {
  tween?.kill()
})
</script>

<template>
  <section
    id="projects"
    ref="section"
    class="py-32 px-6 border-t border-border"
  >
    <div class="max-w-6xl mx-auto">
      <div class="flex items-center gap-3 mb-16">
        <span class="w-6 h-px bg-accent" />
        <span class="font-mono text-xs text-accent tracking-widest uppercase">Projects</span>
      </div>

      <div class="divide-y divide-border border-t border-border">
        <component
          :is="project.href ? 'a' : 'div'"
          v-for="(project, i) in projects"
          :key="project.title"
          :href="project.href || undefined"
          :target="project.href ? '_blank' : undefined"
          :rel="project.href ? 'noopener noreferrer' : undefined"
          class="project-item group block py-8 sm:py-10"
        >
          <div class="flex items-baseline justify-between gap-4 mb-0 group-hover:mb-4 transition-all duration-300">
            <h3 class="font-sans text-[clamp(1.5rem,3vw,2.5rem)] font-semibold leading-tight tracking-tight text-text group-hover:text-accent transition-colors duration-300">
              {{ project.title }}
            </h3>
            <span class="font-mono text-xs text-text-dim shrink-0">
              {{ String(i + 1).padStart(2, '0') }}
            </span>
          </div>

          <div class="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-300">
            <div class="overflow-hidden">
              <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pt-2">
                <p class="text-sm text-text-muted leading-relaxed max-w-lg">
                  {{ project.description }}
                </p>
                <div class="flex flex-wrap gap-2 shrink-0">
                  <span
                    v-for="tag in project.tags"
                    :key="tag"
                    class="font-mono text-xs px-2.5 py-1 border border-border text-text-dim rounded"
                  >
                    {{ tag }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </component>
      </div>
    </div>
  </section>
</template>
