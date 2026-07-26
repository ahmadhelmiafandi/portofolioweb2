'use client'

import { m, HTMLMotionProps } from 'framer-motion'
import { ReactNode } from 'react'

export type ScrollRevealDirection = 'up' | 'down' | 'left' | 'right' | 'fade' | 'scale'

interface ScrollRevealProps extends HTMLMotionProps<'div'> {
  children: ReactNode
  direction?: ScrollRevealDirection
  delay?: number
  duration?: number
  distance?: number
  once?: boolean
  className?: string
  style?: React.CSSProperties
}

export function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.65,
  distance = 24,
  once = true,
  className = '',
  style = {},
  ...props
}: ScrollRevealProps) {
  let initialTransform = {}

  switch (direction) {
    case 'up':
      initialTransform = { y: distance }
      break
    case 'down':
      initialTransform = { y: -distance }
      break
    case 'left':
      initialTransform = { x: distance }
      break
    case 'right':
      initialTransform = { x: -distance }
      break
    case 'scale':
      initialTransform = { scale: 0.95 }
      break
    case 'fade':
    default:
      initialTransform = {}
      break
  }

  return (
    <m.div
      initial={{ opacity: 0, ...initialTransform }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once, margin: '-50px' }}
      transition={{
        duration,
        delay,
        ease: [0.25, 1, 0.5, 1], // EASE_OUT_QUART
      }}
      className={className}
      style={{ willChange: 'opacity, transform', ...style }}
      {...props}
    >
      {children}
    </m.div>
  )
}
