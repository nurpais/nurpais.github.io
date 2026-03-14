<script setup lang="ts">
type StackItem = {
  label: string
  items: string[]
}

const stack: StackItem[] = [
  {
    label: 'Frontend',
    items: ['React', 'Next.js', 'Vue 3', 'Nuxt', 'TypeScript', 'TailwindCSS', 'Radix', 'shadcn', 'GSAP', 'Framer Motion'],
  },
  {
    label: 'Backend',
    items: ['Node.js', 'NestJS', 'Python', 'PostgreSQL', 'MySQL', 'REST APIs', 'WebSocket'],
  },
  {
    label: 'Web3',
    items: ['Solana', 'Anchor', '@solana/web3.js', 'EVM', 'ethers.js', 'viem', 'wagmi', 'RainbowKit', 'Helius', 'Alchemy'],
  },
  {
    label: 'Systems',
    items: ['Rust', 'WebAssembly'],
  },
  {
    label: 'Other',
    items: ['XML/XForm/XSLT', 'DevOps', 'Git'],
  },
]

const { reveal } = useScrollReveal()

onMounted(() => {
  reveal('.stack-grid', { y: 32, duration: 0.6, start: 'top 80%' })
})
</script>

<template>
  <section
    id="stack"
    class="py-32 px-6 border-t border-border"
  >
    <div class="max-w-6xl mx-auto">
      <div class="flex items-center gap-3 mb-16">
        <span class="w-6 h-px bg-accent" />
        <span class="font-mono text-xs text-accent tracking-widest uppercase">Stack</span>
      </div>

      <div class="stack-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-border">
        <div
          v-for="group in stack"
          :key="group.label"
          class="p-8 border-r border-b border-border hover:bg-bg-subtle transition-colors duration-300 group"
        >
          <p class="font-mono text-xs text-accent tracking-widest uppercase mb-4">
            {{ group.label }}
          </p>
          <ul class="space-y-2">
            <li
              v-for="item in group.items"
              :key="item"
              class="text-sm text-text-muted group-hover:text-text transition-colors duration-300"
            >
              {{ item }}
            </li>
          </ul>
        </div>

        <!-- Decorative filler cell -->
        <div
          class="hidden lg:flex border-r border-b border-border items-center justify-center overflow-hidden"
          aria-hidden="true"
        >
          <svg class="w-full h-full opacity-[0.07]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="stack-dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
                <circle cx="12" cy="12" r="1" fill="#4ade80" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#stack-dots)" />
          </svg>
        </div>
      </div>
    </div>
  </section>
</template>
