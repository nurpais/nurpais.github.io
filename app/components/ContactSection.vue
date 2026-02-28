<script setup lang="ts">
const { reveal } = useScrollReveal()

const section = useTemplateRef('section')

onMounted(() => {
  reveal('.contact-heading', { y: 40, duration: 0.8 })
  reveal('.contact-sub', { y: 20, duration: 0.6, delay: 0.1 })
  reveal('.contact-link', { y: 16, duration: 0.5, stagger: 0.08, delay: 0.15 })
})

const links = [
  { label: 'GitHub', handle: '@nurpais', href: 'https://github.com' },
  { label: 'Telegram', handle: '@nurpais', href: 'https://t.me' },
  { label: 'Email', handle: 'nurpais@example.com', href: 'mailto:nurpais@example.com' },
  { label: 'LinkedIn', handle: 'nurpais-orozulbaev', href: 'https://linkedin.com' },
]
</script>

<template>
  <section
    id="contact"
    ref="section"
    class="py-32 px-6 border-t border-border"
  >
    <div class="max-w-6xl mx-auto">
      <div class="flex items-center gap-3 mb-16">
        <span class="w-6 h-px bg-accent" />
        <span class="font-mono text-xs text-accent tracking-widest uppercase">Contact</span>
      </div>

      <div class="max-w-2xl">
        <h2 class="contact-heading font-sans text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-tight tracking-tight text-text mb-6">
          Let's build something together.
        </h2>
        <p class="contact-sub text-text-muted leading-relaxed mb-16">
          Open to interesting engineering challenges — whether it's Web3 architecture,
          performance-critical systems, or experimental ideas at the edge of what's possible on the web.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
        <a
          v-for="link in links"
          :key="link.label"
          :href="link.href"
          target="_blank"
          rel="noopener noreferrer"
          class="contact-link bg-bg p-8 hover:bg-bg-subtle transition-all duration-300 group flex flex-col justify-between gap-6"
        >
          <span class="font-mono text-xs text-text-dim tracking-widest uppercase">
            {{ link.label }}
          </span>
          <div class="flex items-center justify-between">
            <span class="text-sm text-text-muted group-hover:text-text transition-colors duration-300">
              {{ link.handle }}
            </span>
            <svg class="w-4 h-4 text-text-dim group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300" viewBox="0 0 16 16" fill="none">
              <path d="M4 12L12 4M12 4H6M12 4v6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>
