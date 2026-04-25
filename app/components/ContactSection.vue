<script setup lang="ts">
const { reveal } = useScrollReveal()
const section = useTemplateRef('section')

const socials = [
  { label: 'Upwork', href: 'https://www.upwork.com/freelancers/nurpais' },
]

onMounted(() => {
  reveal('.contact-heading', { y: 40, duration: 0.8 })
  reveal('.contact-sub', { y: 20, duration: 0.6, delay: 0.1 })
  reveal('.contact-links', { y: 16, duration: 0.5, delay: 0.2 })
})
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

      <div class="mb-16">
        <h2 class="contact-heading font-sans text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-tight tracking-tight text-text mb-6">
          Let's build something together.
        </h2>
        <p class="contact-sub text-text-muted leading-relaxed max-w-2xl">
          Open to interesting projects - full-stack web apps, Web3 integrations, or anything
          that needs solid engineering. Freelance or contract via Upwork.
        </p>
      </div>

      <div class="contact-links flex items-center gap-6">
        <a
          v-for="social in socials"
          :key="social.label"
          :href="social.href"
          target="_blank"
          rel="noopener noreferrer"
          class="font-mono text-xs text-text-dim tracking-widest uppercase hover:text-accent transition-colors duration-300"
        >
          {{ social.label }}
        </a>
      </div>
    </div>
  </section>
</template>
