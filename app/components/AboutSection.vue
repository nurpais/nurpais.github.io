<script setup lang="ts">
const { reveal } = useScrollReveal()
const tags = ['Rust', 'WebAssembly', 'TypeScript', 'Solana', 'EVM', 'DeFi', 'XForms', 'Performance']

onMounted(() => {
  reveal('.about-label', { y: 16, duration: 0.5 })
  reveal('.about-heading', { y: 40, duration: 0.8, delay: 0.05 })
  reveal('.about-text', { y: 24, duration: 0.7, stagger: 0.15, delay: 0.1 })
  reveal('.about-tag', { y: 12, duration: 0.4, stagger: 0.05, delay: 0.2 })
})
</script>

<template>
  <section
    id="about"
    class="py-32 px-6 border-t border-border"
  >
    <div class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
      <!-- Left: heading -->
      <div>
        <div class="about-label flex items-center gap-3 mb-6">
          <span class="w-6 h-px bg-accent" />
          <span class="font-mono text-xs text-accent tracking-widest uppercase">About</span>
        </div>

        <h2 class="about-heading font-sans text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-tight tracking-tight text-text">
          Engineering at the intersection of web and low-level systems.
        </h2>

        <!-- Tags -->
        <div class="flex flex-wrap gap-2 mt-8">
          <span
            v-for="tag in tags"
            :key="tag"
            class="about-tag font-mono text-xs px-3 py-1.5 border border-border text-text-muted rounded-full"
          >
            {{ tag }}
          </span>
        </div>
      </div>

      <!-- Right: text -->
      <div class="space-y-6">
        <p class="about-text text-text-muted leading-relaxed">
          I started with classical frontend and grew into a full-stack engineer focused on
          architecturally complex systems. My expertise sits at the intersection of modern
          web and blockchain technologies.
        </p>
        <p class="about-text text-text-muted leading-relaxed">
          Currently I'm focused on high-performance challenges — building XForms parsing and
          validation systems in Rust, integrating them into the frontend via WebAssembly.
          This lets me push heavy logic to near-metal level while preserving web's flexibility.
        </p>
        <p class="about-text text-text-muted leading-relaxed">
          Beyond commercial work, I actively study mathematics and cryptography — this helps
          me design more secure and efficient protocols in DeFi and Web3. My approach is
          finding balance between applied tasks and the foundational knowledge that enables
          next-generation products.
        </p>
      </div>
    </div>
  </section>
</template>
