import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

type RevealOptions = {
  y?: number
  opacity?: number
  duration?: number
  delay?: number
  stagger?: number
  start?: string
}

export const useScrollReveal = () => {
  const reveal = (target: string | Element | Element[], options: RevealOptions = {}) => {
    const {
      y = 40,
      opacity = 0,
      duration = 0.8,
      delay = 0,
      stagger = 0.1,
      start = 'top 85%',
    } = options

    return gsap.from(target, {
      y,
      opacity,
      duration,
      delay,
      stagger,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: Array.isArray(target) ? target[0] : target,
        start,
        once: true,
      },
    })
  }

  const revealLine = (target: string | Element, options: RevealOptions = {}) => {
    return reveal(target, { y: 20, duration: 0.6, ...options })
  }

  return { reveal, revealLine }
}
