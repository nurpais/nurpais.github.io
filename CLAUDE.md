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
Full-stack web developer with 8+ years of experience. React, Vue, Node.js, Solana. 70+ projects on Upwork, $60K+ earned.

**About (full)**:
Full-stack developer working across the entire web stack - React/Next.js, Vue/Nuxt on frontend, Node.js/NestJS on backend. Deep into Web3 (Solana, EVM). 70+ projects delivered on Upwork. Uses Rust/WebAssembly when raw performance is needed.

**Tech stack**:
- Frontend: React, Next.js, Vue 3, Nuxt, TypeScript, TailwindCSS, Radix, shadcn, GSAP, Framer Motion
- Backend: Node.js, NestJS, Python, PostgreSQL, MySQL, REST APIs, WebSocket
- Web3: Solana (@solana/web3.js, Anchor), EVM (ethers.js, viem, wagmi), RainbowKit, Helius, Alchemy
- Systems: Rust, WebAssembly
- Other: XML/XForm/XSLT, DevOps basics

## Projects
Placeholders for now — to be filled in later with real projects.

## Animations & Interactions
- Lenis smooth scroll throughout
- GSAP ScrollTrigger for section reveal animations (fade + slide up)
- Subtle hover effects on project cards and nav links
- No heavy WebGL / Canvas for now — keep it clean

## Consistency Rules (MUST follow across all components)

### Spacing
- Section vertical padding: `py-32` (top + bottom)
- Section horizontal padding: `px-6`
- Inner max-width container: `max-w-6xl mx-auto`
- Section header gap (accent line + label): `flex items-center gap-3 mb-16`
- Accent line before section label: `<span class="w-6 h-px bg-accent" />`
- Section label style: `font-mono text-xs text-accent tracking-widest uppercase`

### Typography
- Section headings: `font-sans text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-tight tracking-tight text-text`
- Body / description text: `text-text-muted leading-relaxed`
- Mono labels / tags / indices: `font-mono text-xs`
- Nav logo: `font-mono text-sm`

### Colors (semantic tokens — never raw hex)
- `text-text` — primary text
- `text-text-muted` — secondary / body text
- `text-text-dim` — tertiary / labels / indices
- `text-accent` — green accent (`#4ade80`)
- `bg-bg` — main background
- `bg-bg-subtle` — subtle hover background
- `border-border` — default border color

### Animations
- Scroll reveal entry: `opacity: 0, y: 24–40` → `opacity: 1, y: 0`; `duration: 0.5–0.8`, `ease: 'power3.out'` or `'expo.out'`
- Stagger between items: `0.07–0.1s`
- Hover transitions: `duration-300` (Tailwind), `ease-out`
- GSAP overlay enter: fade `0.18s power2.out` + stagger items `0.55s expo.out`
- GSAP overlay leave: stagger items `0.12s power2.in` + fade `0.12s`
- ScrollTrigger default: `start: 'top 80%'`, `once: true`
- Always use `useScrollReveal` composable for section reveal — don't write raw GSAP ScrollTrigger per-section

### Borders / Dividers
- Section top border: `border-t border-border`
- Grid gap via background: `grid gap-px bg-border` (children use `bg-bg`)
- List dividers: `divide-y divide-border`

### Hover Effects
- Text color transition: `hover:text-text` or `hover:text-accent`, always `transition-colors duration-300`
- Underline reveal (nav links): `absolute h-px bg-accent/60 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out`
- Translate on hover: `group-hover:translate-x-1` or `group-hover:-translate-y-0.5`, always with `transition-all duration-300`

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
