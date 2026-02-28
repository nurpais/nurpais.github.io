import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@vueuse/nuxt',
    '@nuxt/fonts',
    '@nuxt/image',
    'lenis/nuxt'
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  fonts: {
    families: [
      { name: 'Geist', provider: 'google' },
      { name: 'Geist Mono', provider: 'google' },
    ],
  },

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      title: 'Nurpais Orozulbaev — Full-stack · Web3 · Rust/Wasm',
      meta: [
        { name: 'description', content: 'Full-stack developer specializing in high-performance Web3 solutions and low-level technology integration.' },
        { name: 'theme-color', content: '#0a0a0a' },
      ],
    },
  },
})
