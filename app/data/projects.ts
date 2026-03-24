export type Project = {
  title: string
  description: string
  tags: string[]
  href?: string
  status: 'active' | 'wip' | 'coming-soon'
}

export const projects: Project[] = [
  {
    title: 'XForm Engine',
    description: 'Lightweight OpenRosa XForm renderer built on Rust + WebAssembly. XML parsing, XPath evaluation, constraint validation, and iText localization run in WASM at near-native speed. Zero framework dependencies.',
    tags: ['Rust', 'WebAssembly', 'JavaScript'],
    href: 'https://rust-form.vercel.app/',
    status: 'active',
  },
{
    title: 'Crypto Board',
    description: 'Real-time crypto intelligence dashboard. DexScreener market data, AI-powered token analysis, Solana wallet explorer with transaction history. SSR data fetching with instant client-side tab switching.',
    tags: ['Next.js', 'TypeScript', 'Solana', 'WalletConnect', 'Helius'],
    href: 'https://crypto-board-rosy.vercel.app/',
    status: 'active',
  },
  {
    title: 'Adamo Compliance',
    description: 'AML/KYC compliance dashboard for financial services. Client and beneficiary management, multi-channel identity verification, risk alerts monitoring, and sanctions screening. Drag-and-drop workflows, internationalized (EN/ES) with role-based access and 2FA.',
    tags: ['Next.js', 'React', 'TanStack', 'Radix UI', 'Tailwind'],
    href: 'https://adamo-services-dashboard.vercel.app/',
    status: 'active',
  },
  {
    title: 'Adamo Sign',
    description: 'E-signature platform for document workflows. Drag-and-drop upload, track status through drafts, pending, and completed stages. Hash-based signature verification, contact directory with pagination, 2FA security, plan billing, and WhatsApp support widget.',
    tags: ['Next.js', 'React', 'Radix UI', 'Tailwind', 'Zod'],
    href: 'https://adamo-sign.vercel.app/',
    status: 'active',
  },
  {
    title: 'Eberawi Agency',
    description: 'Animation-heavy agency website with custom GSAP cursor interactions, Locomotive Scroll parallax, horizontal text scrolling, and video modals. Context-aware cursor morphs on hover with mix-blend-mode effects and GIF previews.',
    tags: ['GSAP', 'Locomotive Scroll', 'SCSS', 'Webpack'],
    href: 'https://gallant-northcutt-cd2ee8.netlify.app/',
    status: 'active',
  },
  {
    title: 'Credit Thirty3',
    description: 'Marketing website for a licensed moneylender in Singapore. Interactive loan calculator with real-time donut chart visualization, multi-page layout with blog, reviews carousel, and loan application flow.',
    tags: ['Bootstrap', 'SCSS', 'Swiper', 'Webpack'],
    href: 'https://nwork-credit33.netlify.app/',
    status: 'active',
  },
  {
    title: 'Wedding Loan',
    description: 'Elegant wedding-themed landing page for a loan service. Loan calculator, testimonials carousel, step-by-step application guide, and multi-page layout with soft romantic aesthetics.',
    tags: ['Bootstrap', 'SCSS', 'Swiper', 'Webpack'],
    href: 'https://nwork-wedding-loan.netlify.app/',
    status: 'active',
  },
  {
    title: 'Tunduk',
    description: 'Web platform for interacting with government services through the Tunduk Hub. OpenID Connect auth via Keycloak, XForm-based form submission, services catalog, and multilingual support (Russian/Kyrgyz).',
    tags: ['NestJS', 'Alpine.js', 'Tailwind', 'enketo-core', 'Vite'],
    status: 'coming-soon',
  },
]
