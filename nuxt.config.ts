import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@vueuse/nuxt',
    '@nuxt/fonts',
    '@nuxt/image',
    'lenis/nuxt',
  ],

  nitro: {
    preset: 'github-pages',
  },

  vite: {
    plugins: [tailwindcss()],
  },

  fonts: {
    families: [
      { name: 'Geist', provider: 'google' },
      { name: 'Geist Mono', provider: 'google' },
    ],
    defaults: {
      weights: [400, 500, 600],
      display: 'swap',
    },
  },

  routeRules: {
    '/**': {
      headers: {
        'X-Frame-Options': 'DENY',
        'X-Content-Type-Options': 'nosniff',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
        'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
      },
    },
  },

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      title: 'Nurpais Orozulbaev — Full-stack · Web3 · Rust/Wasm',
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
      meta: [
        { name: 'description', content: 'Full-stack developer specializing in high-performance Web3 solutions and low-level technology integration.' },
        { name: 'theme-color', content: '#0a0a0a' },
      ],
    },
  },
})
