/* eslint-disable @next/next/no-img-element */
'use client'

import { Icons } from '@acme/ui/custom/icons'
import { easeInOutCubic } from '@acme/ui/lib/animation'
import { cn } from '@acme/ui/lib/utils'
import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import { Section } from '../section'

interface BentoItem {
  title: string
  description: string
  image: string
  icon: keyof typeof Icons
  fullWidth?: boolean
}

const bentoItems: BentoItem[] = [
  {
    title: 'Beautiful Components',
    description:
      'Build stunning interfaces with our collection of animated UI components. Each component is designed with accessibility and performance in mind.',
    image: '/bento/components.webp',
    icon: 'Sparkles',
  },
  {
    title: 'Motion Effects',
    description:
      'Add life to your applications with smooth animations and transitions. Our motion library makes it easy to create engaging user experiences.',
    image: '/bento/motion.webp',
    icon: 'ArrowUpFromLine',
  },
  {
    title: 'Developer Experience',
    description:
      'TypeScript-first development with full type safety and auto-completion. Build with confidence using our well-documented APIs.',
    image: '/bento/typescript.webp',
    icon: 'FunctionSquare',
    fullWidth: true,
  },
  {
    title: 'Accessibility',
    description:
      'Every component follows WAI-ARIA guidelines and includes keyboard navigation support. Make your apps accessible to everyone.',
    image: '/bento/accessibility.webp',
    icon: 'BadgeCheck',
  },
]

export function BentoGrid() {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const opacities = [
    useTransform(scrollYProgress, [0, 0.1, 0.3], [0, 0, 1], {
      ease: easeInOutCubic,
    }),
    useTransform(scrollYProgress, [0, 0.2, 0.4], [0, 0, 1], {
      ease: easeInOutCubic,
    }),
    useTransform(scrollYProgress, [0, 0.3, 0.5], [0, 0, 1], {
      ease: easeInOutCubic,
    }),
    useTransform(scrollYProgress, [0, 0.4, 0.6], [0, 0, 1], {
      ease: easeInOutCubic,
    }),
  ]

  const yTransforms = [
    useTransform(scrollYProgress, [0, 0.1, 0.3], [100, 100, 0], {
      ease: easeInOutCubic,
    }),
    useTransform(scrollYProgress, [0, 0.2, 0.4], [100, 100, 0], {
      ease: easeInOutCubic,
    }),
    useTransform(scrollYProgress, [0, 0.3, 0.5], [100, 100, 0], {
      ease: easeInOutCubic,
    }),
    useTransform(scrollYProgress, [0, 0.4, 0.6], [100, 100, 0], {
      ease: easeInOutCubic,
    }),
  ]

  return (
    <Section
      id="bento"
      title="Features"
      subtitle="Everything you need to build modern applications"
      className="container mx-auto px-4 sm:px-10"
      ref={ref}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {bentoItems.map((item, index) => {
          const Icon = Icons[item.icon]
          return (
            <motion.div
              key={item.title}
              style={{ opacity: opacities[index], y: yTransforms[index] }}
              className={cn(
                'bg-card/5 hover:bg-card/10 transition-colors p-8 rounded-2xl border border-border/5',
                item.fullWidth && 'md:col-span-2',
              )}
            >
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-br from-primary to-primary/80 p-2.5 rounded-xl text-white">
                    <Icon size="lg" variant="primary" />
                  </div>
                  <h2 className="text-2xl font-semibold text-white">
                    {item.title}
                  </h2>
                </div>
                <p className="text-lg text-neutral-400">{item.description}</p>
                <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-105"
                  />
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
}
