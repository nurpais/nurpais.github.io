<script setup lang="ts">
import { gsap } from 'gsap'
import { useLenis } from 'lenis/vue'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Stack', href: '#stack' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const lenis = useLenis()
const { y: scrollY } = useWindowScroll()
const isScrolled = computed(() => scrollY.value > 40)
const isMenuOpen = ref(false)

const isDesktop = useMediaQuery('(min-width: 768px)')
watch(isDesktop, (desktop) => { if (desktop) isMenuOpen.value = false })

const scrollToSection = (href: string) => {
  isMenuOpen.value = false
  lenis.value?.scrollTo(href, { duration: 1.4, offset: -20 })
}

const scrollToTop = () => {
  isMenuOpen.value = false
  lenis.value?.scrollTo(0, { duration: 1.4 })
}

const onEnter = (el: Element, done: () => void) => {
  const items = el.querySelectorAll('[data-item]')
  gsap.timeline({ onComplete: done })
    .fromTo(el, { opacity: 0 }, { opacity: 1, duration: 0.18, ease: 'power2.out' })
    .fromTo(items,
      { opacity: 0, y: 32, x: -12 },
      { opacity: 1, y: 0, x: 0, duration: 0.55, stagger: 0.07, ease: 'expo.out' },
      '-=0.05'
    )
}

const onLeave = (el: Element, done: () => void) => {
  const items = el.querySelectorAll('[data-item]')
  gsap.timeline({ onComplete: done })
    .to(items, { opacity: 0, y: -10, duration: 0.12, stagger: 0.04, ease: 'power2.in' })
    .to(el, { opacity: 0, duration: 0.12 }, '-=0.06')
}
</script>

<template>
  <!-- Mobile full-screen overlay -->
  <Transition :css="false" @enter="onEnter" @leave="onLeave">
    <div
      v-if="isMenuOpen"
      class="md:hidden fixed inset-0 z-40 bg-bg flex items-center px-8"
    >
      <nav aria-label="Mobile navigation" class="flex flex-col gap-5">
        <button
          v-for="(link, i) in links"
          :key="link.href"
          data-item
          class="group flex items-baseline gap-4 cursor-pointer text-left"
          @click="scrollToSection(link.href)"
        >
          <span class="font-mono text-xs text-text-dim group-hover:text-accent transition-colors duration-300">
            0{{ i + 1 }}
          </span>
          <span class="text-4xl font-medium tracking-tight text-text-muted group-hover:text-text group-hover:translate-x-2 transition-all duration-300">
            {{ link.label }}
          </span>
        </button>
      </nav>
    </div>
  </Transition>

  <header
    class="fixed top-0 left-0 right-0 z-50 border-b transition-all duration-500"
    :class="isMenuOpen
      ? 'py-6 border-transparent'
      : isScrolled
        ? 'py-4 border-border bg-bg/90 backdrop-blur-md'
        : 'py-6 border-transparent'"
  >
    <div class="max-w-6xl mx-auto px-6 flex items-center justify-between">
      <a
        href="#"
        class="font-mono text-sm text-text-muted hover:text-accent transition-colors duration-300"
        @click.prevent="scrollToTop"
      >
        nurpais.dev
      </a>

      <!-- Desktop nav -->
      <nav aria-label="Main navigation" class="hidden md:flex items-center gap-8">
        <button
          v-for="link in links"
          :key="link.href"
          class="relative text-sm text-text-muted hover:text-text transition-colors duration-300 cursor-pointer group py-0.5"
          @click="scrollToSection(link.href)"
        >
          {{ link.label }}
          <span class="absolute bottom-0 left-0 w-full h-px bg-accent/60 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
        </button>
      </nav>

      <!-- Mobile hamburger / close -->
      <button
        class="md:hidden relative w-6 h-[18px] cursor-pointer"
        :aria-label="isMenuOpen ? 'Close menu' : 'Open menu'"
        @click="isMenuOpen = !isMenuOpen"
      >
        <span
          class="absolute left-0 w-full h-px bg-text-muted transition-all duration-300 top-0 origin-center"
          :class="isMenuOpen ? 'translate-y-[9px] rotate-45' : ''"
        />
        <span
          class="absolute left-0 w-full h-px bg-text-muted transition-all duration-300 top-1/2 -translate-y-px"
          :class="isMenuOpen ? 'opacity-0 scale-x-0' : ''"
        />
        <span
          class="absolute left-0 w-full h-px bg-text-muted transition-all duration-300 bottom-0 origin-center"
          :class="isMenuOpen ? '-translate-y-[9px] -rotate-45' : ''"
        />
      </button>
    </div>
  </header>
</template>
