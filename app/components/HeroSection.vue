<script setup lang="ts">
import { gsap } from 'gsap'

onMounted(() => {
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

  tl.from('.hero-label', { opacity: 0, y: 16, duration: 0.6 })
    .from('.hero-name', { opacity: 0, y: 40, duration: 0.9 }, '-=0.3')
    .from('.hero-tagline', { opacity: 0, y: 24, duration: 0.7 }, '-=0.5')
    .from('.hero-bio', { opacity: 0, y: 20, duration: 0.6 }, '-=0.4')
    .from('.hero-cta', { opacity: 0, y: 16, duration: 0.5 }, '-=0.3')
    .from('.hero-scroll', { opacity: 0, duration: 0.5 }, '-=0.1')
})
</script>

<template>
  <section class="relative min-h-screen flex flex-col justify-center px-6 pt-24 pb-16 max-w-6xl mx-auto">
    <div class="max-w-4xl">
      <!-- Label -->
      <div class="hero-label flex items-center gap-3 mb-8">
        <span class="w-6 h-px bg-accent" />
        <span class="font-mono text-xs text-accent tracking-widest uppercase">
          Available for work
        </span>
      </div>

      <!-- Name -->
      <h1 class="hero-name font-sans text-[clamp(3rem,8vw,7rem)] font-semibold leading-[0.95] tracking-tight text-text mb-6">
        Nurpais<br />
        <span class="text-text-muted">Orozulbaev</span>
      </h1>

      <!-- Tagline -->
      <p class="hero-tagline font-mono text-sm text-text-muted tracking-wider mb-8">
        Full-stack&nbsp;&nbsp;·&nbsp;&nbsp;Web3&nbsp;&nbsp;·&nbsp;&nbsp;Rust / Wasm
      </p>

      <!-- Bio -->
      <p class="hero-bio text-base text-text-muted leading-relaxed max-w-xl mb-12">
        Full-stack developer with 8 years of experience, specializing in high-performance
        Web3 solutions and integrating low-level technologies into web interfaces.
      </p>

      <!-- CTA -->
      <div class="hero-cta flex items-center gap-6">
        <a
          href="#projects"
          class="inline-flex items-center gap-2 px-6 py-3 bg-accent text-bg text-sm font-medium rounded-full hover:bg-accent-dim transition-colors duration-300"
        >
          View Work
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </a>
        <a
          href="#contact"
          class="text-sm text-text-muted hover:text-text transition-colors duration-300"
        >
          Get in touch →
        </a>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="hero-scroll absolute bottom-10 left-6 items-center gap-3 hidden md:flex">
      <div class="w-px h-12 bg-border relative overflow-hidden">
        <div class="w-full bg-accent animate-[scrollLine_1.8s_ease-in-out_infinite]" style="height: 40%" />
      </div>
      <span class="font-mono text-xs text-text-dim tracking-widest uppercase">Scroll</span>
    </div>
  </section>
</template>

<style scoped>
@keyframes scrollLine {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(300%); }
}
</style>
