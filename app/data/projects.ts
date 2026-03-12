export type Project = {
  title: string
  description: string
  tags: string[]
  href?: string
  status: 'active' | 'wip' | 'coming-soon'
}

export const projects: Project[] = [
  {
    title: 'XForms Parser',
    description: 'XForms parsing and validation engine written in Rust, compiled to WebAssembly for browser integration. Supports constraints, relevant rules, calculate expressions, multilingual itext, and repeat groups — no server-side transformation required.',
    tags: ['Rust', 'WebAssembly', 'JavaScript'],
    href: 'https://github.com/nurpais/rust-form',
    status: 'active',
  },
  {
    title: 'Project Alpha',
    description: 'High-performance DeFi protocol built on Solana. Real-time order book with sub-millisecond execution.',
    tags: ['Rust', 'Solana', 'TypeScript'],
    status: 'active',
  },
  {
    title: 'DEX Analytics',
    description: 'Real-time market data analysis tool for decentralized exchanges. On-chain data aggregation and visualization.',
    tags: ['TypeScript', 'EVM', 'Node.js'],
    status: 'active',
  },
  {
    title: 'Coming Soon',
    description: 'Exploring cryptographic primitives and ZK-proof integration.',
    tags: ['Cryptography', 'ZK', 'Rust'],
    status: 'coming-soon',
  },
]
