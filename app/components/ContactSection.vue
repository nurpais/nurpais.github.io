<script setup lang="ts">
const { reveal } = useScrollReveal()
const section = useTemplateRef('section')

const socials = [
  { label: 'GitHub', href: 'https://github.com/nurpais' },
  { label: 'Telegram', href: 'https://t.me/nurpais' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/nurpais/' },
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
        <p class="contact-sub text-text-muted leading-relaxed max-w-2xl mb-10">
          Open to interesting projects - full-stack web apps, Web3 integrations, or anything
          that needs solid engineering. Freelance or contract.
        </p>
        <a
          href="mailto:orozulbaev@gmail.com"
          class="contact-sub inline-flex items-center gap-2 text-accent hover:text-text transition-colors duration-300 font-mono text-sm group"
        >
          orozulbaev@gmail.com
          <svg aria-hidden="true" class="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </a>
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
