<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { VueLenis, useLenis } from 'lenis/vue'

gsap.registerPlugin(ScrollTrigger)

useHead({
  htmlAttrs: { lang: 'en' },
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Nurpais Orozulbaev',
      jobTitle: 'Full-stack Developer',
      url: 'https://nurpais.dev',
      sameAs: [
        'https://github.com/nurpais',
        'https://www.linkedin.com/in/nurpais/',
        'https://t.me/nurpais',
        'https://www.upwork.com/freelancers/nurpais',
      ],
    }),
  }],
})

useSeoMeta({
  title: 'Nurpais Orozulbaev — Full-stack · Web3 · Rust/Wasm',
  ogTitle: 'Nurpais Orozulbaev — Full-stack · Web3 · Rust/Wasm',
  description: 'Full-stack developer specializing in high-performance Web3 solutions and low-level technology integration.',
  ogDescription: 'Full-stack developer specializing in high-performance Web3 solutions and low-level technology integration.',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Nurpais Orozulbaev — Full-stack · Web3 · Rust/Wasm',
  twitterDescription: 'Full-stack developer specializing in high-performance Web3 solutions and low-level technology integration.',
})

const lenisOptions = {
  duration: 1.2,
  easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
}

// Sync ScrollTrigger on every scroll tick
useLenis(() => ScrollTrigger.update())

// Drive Lenis via GSAP ticker so both are in sync
const lenis = useLenis()
let tickerCallback: ((time: number) => void) | null = null

watch(lenis, (instance) => {
  if (tickerCallback) gsap.ticker.remove(tickerCallback)
  if (!instance) return
  tickerCallback = (time) => instance.raf(time * 1000)
  gsap.ticker.add(tickerCallback)
  gsap.ticker.lagSmoothing(0)
}, { immediate: true })

onUnmounted(() => {
  if (tickerCallback) gsap.ticker.remove(tickerCallback)
})
</script>

<template>
  <VueLenis root :options="lenisOptions" :auto-raf="false">
    <div class="relative bg-bg min-h-screen">
      <a href="#main" class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-accent focus:text-bg focus:px-4 focus:py-2 focus:rounded focus:text-sm focus:font-medium">
        Skip to content
      </a>
      <TheNav />
      <main id="main">
        <HeroSection />
        <AboutSection />
        <StackSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <TheFooter />
    </div>
  </VueLenis>
</template>
