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
    title: 'Coming Soon',
    description: 'Exploring cryptographic primitives and ZK-proof integration.',
    tags: ['Cryptography', 'ZK', 'Rust'],
    status: 'coming-soon',
  },
]
