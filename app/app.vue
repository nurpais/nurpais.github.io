<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { VueLenis, useLenis } from 'lenis/vue'

gsap.registerPlugin(ScrollTrigger)

useHead({
  htmlAttrs: { lang: 'en' },
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
      <TheNav />
      <main>
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
