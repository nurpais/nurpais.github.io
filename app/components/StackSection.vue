<script setup lang="ts">
type StackItem = {
  label: string
  items: string[]
}

const stack: StackItem[] = [
  {
    label: 'Core',
    items: ['Rust', 'WebAssembly', 'TypeScript', 'Node.js'],
  },
  {
    label: 'Frontend',
    items: ['Vue 3', 'Nuxt', 'React', 'Next.js', 'Tailwind CSS'],
  },
  {
    label: 'Blockchain',
    items: ['Solana', 'EVM', 'Smart Contracts', 'DeFi', 'DEX'],
  },
  {
    label: 'Architecture',
    items: ['Full-stack', 'Performance Engineering', 'Data Parsing', 'Real-time Systems'],
  },
  {
    label: 'Research',
    items: ['Cryptography', 'Applied Mathematics', 'Protocol Design', 'Market Analysis'],
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

      <div class="stack-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
        <div
          v-for="group in stack"
          :key="group.label"
          class="bg-bg p-8 hover:bg-bg-subtle transition-colors duration-300 group"
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
        <div class="hidden sm:block bg-bg" aria-hidden="true" />
      </div>
    </div>
  </section>
</template>
