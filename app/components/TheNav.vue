<script setup lang="ts">
const links = [
  { label: 'About', href: '#about' },
  { label: 'Stack', href: '#stack' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const { $lenis } = useNuxtApp()

const scrollTo = (href: string) => {
  const target = document.querySelector(href)
  if (target) ($lenis as any).scrollTo(target, { offset: -80, duration: 1.4 })
}

const isScrolled = ref(false)

onMounted(() => {
  const handler = () => { isScrolled.value = window.scrollY > 40 }
  window.addEventListener('scroll', handler, { passive: true })
  onUnmounted(() => window.removeEventListener('scroll', handler))
})
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
    :class="isScrolled ? 'py-4 border-b border-border bg-bg/90 backdrop-blur-md' : 'py-6'"
  >
    <div class="max-w-6xl mx-auto px-6 flex items-center justify-between">
      <a
        href="#"
        class="font-mono text-sm text-text-muted hover:text-accent transition-colors duration-300"
        @click.prevent="($lenis as any).scrollTo(0)"
      >
        nurpais.dev
      </a>

      <nav class="flex items-center gap-8">
        <button
          v-for="link in links"
          :key="link.href"
          class="text-sm text-text-muted hover:text-text transition-colors duration-300 cursor-pointer"
          @click="scrollTo(link.href)"
        >
          {{ link.label }}
        </button>
      </nav>
    </div>
  </header>
</template>
