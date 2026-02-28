# Portfolio Project — Claude Context

## Project Overview
Personal portfolio website for Nurpais Orozulbaev.
Single-page, dark clean minimal aesthetic with green accent.

## Tech Stack
- **Framework**: Nuxt 4
- **Styling**: Tailwind CSS v4
- **Animations**: GSAP + ScrollTrigger
- **Smooth scroll**: Lenis
- **Utilities**: VueUse
- **Fonts**: Geist + Geist Mono (@nuxt/fonts)
- **Package manager**: pnpm

## Design System
- **Theme**: Dark, clean, minimal
- **Accent color**: `#4ade80` (emerald green)
- **Background**: ~`#0a0a0a` / `#0d0d0d`
- **Font**: Geist (headings + body), Geist Mono (code/stack labels)
- **Aesthetic reference**: batuhan.tech, ace.me, dhero.studio

## Page Structure (single-page)
1. **Nav** — name left, links right
2. **Hero** — name, role tagline, short bio, CTA
3. **About** — engineering philosophy, what drives him
4. **Stack** — technical skills grid
5. **Projects** — project cards (placeholders for now)
6. **Contact** — GitHub, Telegram, email links

## Owner Profile
**Name**: Nurpais Orozulbaev
**Role**: Full-stack Developer · 8 years experience
**Tagline**: Full-stack · Web3 · Rust/Wasm

**Bio (short)**:
Full-stack разработчик с 8-летним опытом, специализирующийся на высокопроизводительных Web3-решениях и интеграции низкоуровневых технологий в веб-интерфейсы.

**About (full)**:
Я прошел путь от классического фронтенда до полноценного full-stack стека, сфокусировавшись на создании архитектурно сложных систем. Моя экспертиза лежит на стыке современного веба и блокчейн-технологий.

Сейчас я сосредоточен на решении задач, требующих высокой производительности: разрабатываю системы парсинга и валидации XForms на Rust, интегрируя их в фронтенд через WebAssembly (Wasm). Это позволяет мне выносить тяжелую логику на уровень, близкий к «железу», сохраняя при этом гибкость веба.

**What drives him**:
Инженерный подход, основанный на глубоком понимании основ. Активно изучает математику и криптографию. Фокус на безопасных и эффективных протоколах в DeFi и Web3.

**Tech stack**:
- Core: Rust (Wasm integration), TypeScript, современные фреймворки
- Blockchain: Web3, смарт-контракты, DEX-решения, Solana, EVM
- Architecture: Full-stack, парсинг данных, performance engineering
- Mindset: криптографические примитивы, прикладная математика, real-time market data tools

## Projects
Placeholders for now — to be filled in later with real projects.

## Animations & Interactions
- Lenis smooth scroll throughout
- GSAP ScrollTrigger for section reveal animations (fade + slide up)
- Subtle hover effects on project cards and nav links
- No heavy WebGL / Canvas for now — keep it clean

---


## Git Commits

Follow [commitlint](https://commitlint.js.org/) conventional commit format:

```
<type>(<scope>): <subject>

[body]
```

**Types:** `feat`, `fix`, `refactor`, `style`, `docs`, `test`, `perf`, `build`, `ci`, `chore`, `revert`

**Rules:**
- Header max 72 characters
- Type and subject must be lowercase
- Subject must not end with a period
- Body separated by blank line
- No `Co-Authored-By` footer

---

## Code Style Guide

### General
- Write concise, technical TypeScript code
- Composition API only — never Options API
- `<script setup>` syntax always
- Functional and declarative patterns; avoid classes
- DRY — modularize, iterate, never duplicate logic
- Descriptive variable names with auxiliary verbs: `isLoading`, `hasError`, `canSubmit`

### File Structure (per component)
```
<script setup> — component logic
<template>     — declarative markup
<style>        — scoped styles (only if Tailwind isn't enough)
```
Order within `<script setup>`: composables → reactive state → computed → methods → lifecycle hooks

### Naming Conventions
- **Directories**: lowercase with dashes — `components/scroll-reveal/`
- **Components**: PascalCase — `HeroSection.vue`, `ProjectCard.vue`
- **Composables**: camelCase with `use` prefix — `useLenis.ts`, `useScrollAnimation.ts`
- **Functions**: named exports, arrow functions preferred
- **Types**: PascalCase — `type Project = { ... }`

### TypeScript
- TypeScript everywhere — no plain JS files
- Prefer `type` over `interface` (simpler, sufficient for this project)
- No enums — use `const` objects with `as const`
- No `any` — use `unknown` and narrow types properly

```ts
// Good
const STATUS = { idle: 'idle', loading: 'loading' } as const
type Status = typeof STATUS[keyof typeof STATUS]

// Avoid
enum Status { Idle, Loading }
```

### Vue 3 / Nuxt 4 Specifics
- Use Nuxt auto-imports — no manual imports for `ref`, `computed`, `useRouter`, etc.
- `useFetch` for SSR-aware data fetching; `$fetch` for client-side event handlers
- `useHead` / `useSeoMeta` for SEO
- `useRuntimeConfig` for environment variables
- `<NuxtImage>` for all images (WebP, lazy loading, size data)
- Leverage VueUse composables before writing custom ones
- `provide` / `inject` for deep dependency passing (e.g. Lenis instance)

### GSAP + Lenis Conventions
- Initialize Lenis in a plugin (`plugins/lenis.client.ts`)
- All GSAP animations inside `onMounted`, always clean up with `onUnmounted`
- Use `useTemplateRef` for DOM refs, not string refs
- Encapsulate reusable scroll animations in composables (`useScrollReveal.ts`)

```ts
// Good
const el = useTemplateRef('section')
onMounted(() => {
  gsap.from(el.value, { opacity: 0, y: 40, scrollTrigger: { trigger: el.value } })
})
```

### Tailwind v4
- Mobile-first always
- Use CSS custom properties for design tokens (accent, bg, text colors)
- Avoid arbitrary values when a semantic token exists
- Keep component-level styles in Tailwind; no global CSS unless absolutely necessary

### Performance
- Lazy-load non-critical components with `defineAsyncComponent`
- Optimize all images: WebP, explicit width/height, lazy
- Minimize client-side JS — prefer CSS animations for simple transitions
- Target Web Vitals: LCP < 2.5s, CLS < 0.1, FID < 100ms
