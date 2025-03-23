'use client'

import { buttonVariants } from '@acme/ui/button'
import { easeOutCubic } from '@acme/ui/lib/animation'
import { cn } from '@acme/ui/lib/utils'
import { ArrowRight } from 'lucide-react'
import { motion } from 'motion/react'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { ShowcaseCard } from '~/components/showcase-marquee-advanced'
import { Section } from '../section'

interface ShowcaseItem {
  name: string
  url: string
  description: string
  image: string
  accentColor?: string
}

interface FeatureProps {
  title: string
  description: string
  showcase: ShowcaseItem
  direction: 'ltr' | 'rtl'
  isActive: boolean
}

const features: FeatureProps[] = [
  {
    title: 'Beautiful Components',
    description:
      'Build stunning interfaces with our collection of animated UI components.',
    showcase: {
      name: 'gitme.live',
      url: 'https://gitme.live',
      description: 'Open Source Community',
      image: '/Device-1.png',
      accentColor: '#121212',
    },
    direction: 'ltr',
    isActive: false,
  },
  {
    title: 'Motion Effects',
    description:
      'Add life to your applications with smooth animations and transitions.',
    showcase: {
      name: 'infisical.com',
      url: 'https://infisical.com',
      description: 'YC W23, raised $2.8M',
      image: '/Device-2.png',
      accentColor: '#e9e75a',
    },
    direction: 'rtl',
    isActive: false,
  },
  {
    title: 'Developer Experience',
    description:
      'TypeScript-first development with full type safety and auto-completion.',
    showcase: {
      name: 'langfuse.com',
      url: 'https://langfuse.com',
      description: 'YC W23, raised $1.5M',
      image: '/Device-3.png',
    },
    direction: 'ltr',
    isActive: false,
  },
]

function Feature({
  title,
  description,
  showcase,
  direction,
  isActive,
}: FeatureProps) {
  const isLTR = direction === 'ltr'
  const textVariants = {
    hidden: { opacity: 0, x: isLTR ? -20 : 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: isLTR ? -10 : 10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: easeOutCubic,
      },
    },
  }

  return (
    <motion.div
      className={cn(
        'flex flex-col items-center justify-between pb-10 transition-all duration-500 ease-out',
        isLTR ? 'lg:flex-row' : 'lg:flex-row-reverse',
      )}
    >
      <motion.div
        className={cn(
          'w-full lg:w-2/3 mb-10 lg:mb-0',
          isLTR ? 'lg:pr-8' : 'lg:pl-8',
        )}
        initial="hidden"
        animate={isActive ? 'visible' : 'hidden'}
        variants={textVariants}
      >
        <div className="flex flex-col gap-4 max-w-sm text-center lg:text-left mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white"
            variants={itemVariants}
          >
            {title}
          </motion.h2>
          <motion.p
            className="text-xl md:text-2xl text-neutral-400"
            variants={itemVariants}
          >
            {description}
          </motion.p>
          <motion.div variants={itemVariants}>
            <Link
              href="/docs/introduction"
              className={cn(
                buttonVariants({ variant: 'default', size: 'lg' }),
                'text-white rounded-full group text-lg',
                'mx-auto lg:mx-0',
              )}
            >
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </motion.div>
      <div className="w-full lg:w-1/2">
        <div className="w-full max-w-[400px] mx-auto">
          <ShowcaseCard item={showcase} />
        </div>
      </div>
    </motion.div>
  )
}

export function FeatureHighlight() {
  const [activeFeature, setActiveFeature] = useState(-1)
  const containerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current
      if (container) {
        const { top, bottom } = container.getBoundingClientRect()
        const middleOfScreen = window.innerHeight / 2
        const featureHeight = (bottom - top) / features.length

        const activeIndex = Math.floor((middleOfScreen - top) / featureHeight)
        setActiveFeature(
          Math.max(-1, Math.min(features.length - 1, activeIndex)),
        )
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Section
      id="feature-highlight"
      title="Features"
      subtitle="Build beautiful interfaces with ease"
      className="container px-4 sm:px-10"
      ref={containerRef}
    >
      {features.map((feature, index) => (
        <Feature
          key={feature.title}
          {...feature}
          isActive={activeFeature === index}
        />
      ))}
    </Section>
  )
}
