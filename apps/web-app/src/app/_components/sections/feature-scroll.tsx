'use client'

import { easeOutCubic } from '@acme/ui/lib/animation'
import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import { ShowcaseCard } from '~/components/showcase-marquee-advanced'
import { Section } from '../section'

interface ShowcaseItem {
  name: string
  url: string
  description: string
  image: string
  accentColor?: string
}

const showcaseItems: ShowcaseItem[] = [
  {
    name: 'startup.io',
    url: 'https://startup.io',
    description: 'Series A, raised $5M',
    image: '/Device-6.png',
    accentColor: '#4a1d96',
  },
  {
    name: 'acme.co',
    url: 'https://acme.co',
    description: 'Enterprise Solutions',
    image: '/Device-7.png',
    accentColor: '#2a3f5e',
  },
  {
    name: 'freelancer.dev',
    url: 'https://freelancer.dev',
    description: 'Connecting with developers',
    image: '/Device-8.png',
    accentColor: '#1a2b4b',
  },
]

export function FeatureScroll() {
  const card1Ref = useRef(null)
  const card2Ref = useRef(null)
  const card3Ref = useRef(null)

  const { scrollYProgress: scrollYProgress1 } = useScroll({
    target: card1Ref,
    offset: ['start end', 'end start'],
  })

  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: card2Ref,
    offset: ['start end', 'end start'],
  })

  const { scrollYProgress: scrollYProgress3 } = useScroll({
    target: card3Ref,
    offset: ['start end', 'end start'],
  })

  const y1 = useTransform(scrollYProgress1, [0, 0.3], [150, 0], {
    ease: easeOutCubic,
  })
  const y2 = useTransform(scrollYProgress2, [0.1, 0.4], [200, 0], {
    ease: easeOutCubic,
  })
  const y3 = useTransform(scrollYProgress3, [0.2, 0.5], [250, 0], {
    ease: easeOutCubic,
  })

  return (
    <Section
      id="feature-scroll"
      title="Showcase"
      subtitle="Companies building with VibeUI"
      className="container"
      // align="center"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 place-items-center">
          {showcaseItems.map((item, index) => {
            const ref = [card1Ref, card2Ref, card3Ref][index]
            const y = [y1, y2, y3][index]
            return (
              <motion.div
                key={item.name}
                ref={ref}
                style={{ y }}
                className="w-[400px] shrink-0"
              >
                <ShowcaseCard item={item} />
              </motion.div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
