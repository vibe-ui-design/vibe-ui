'use client'

import { easeInOutCubic } from '@acme/ui/lib/animation'
import { motion, useScroll, useTransform } from 'motion/react'
import { ShowcaseCard } from '~/components/showcase-marquee-advanced'
import { Icons } from '../icons'
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
    name: 'gitme.live',
    url: 'https://gitme.live',
    description: 'Open Source Community',
    image: '/Device-1.png',
    accentColor: '#121212',
  },
  {
    name: 'infisical.com',
    url: 'https://infisical.com',
    description: 'YC W23, raised $2.8M',
    image: '/Device-2.png',
    accentColor: '#e9e75a',
  },
  {
    name: 'langfuse.com',
    url: 'https://langfuse.com',
    description: 'YC W23, raised $1.5M',
    image: '/Device-3.png',
  },
]

export function Hero() {
  const { scrollY } = useScroll({
    offset: ['start start', 'end start'],
  })
  const y1 = useTransform(scrollY, [0, 300], [50, 0])
  const y2 = useTransform(scrollY, [0, 300], [0, 0])
  const y3 = useTransform(scrollY, [0, 300], [50, 0])

  return (
    <Section id="hero" className="min-h-[100vh] w-full overflow-hidden">
      <div className="mx-auto text-center relative px-4">
        <div className="relative">
          <motion.div
            initial={{ scale: 4.5, height: '80vh' }}
            animate={{ scale: 1, height: '10vh' }}
            transition={{
              scale: { delay: 0, duration: 1, ease: easeInOutCubic },
              height: { delay: 0, duration: 1, ease: easeInOutCubic },
            }}
            className="mb-10 relative z-20"
            style={{ transformOrigin: 'top' }}
          >
            <div className="flex items-center justify-center mx-auto">
              <Icons.logo size="2xl" variant="hero" />
            </div>
          </motion.div>
          {/* <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="absolute inset-0 top-20 z-10"
          >
            {siteConfig.name}
          </motion.div> */}
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Small Announcement Button */}
          {/* <Link
            href="/docs/introduction"
            className="inline-flex items-center rounded-full border border-neutral-800 bg-neutral-900 px-4 py-1.5 text-sm text-white mb-8 hover:bg-neutral-800 transition-colors"
          >
            <span className="mr-2">🚀</span> Introducing Pointer{' '}
            <ArrowRight className="ml-2 h-3 w-3" />
          </Link> */}

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: easeInOutCubic }}
            className="text-5xl font-bold leading-tight tracking-tighter md:text-7xl lg:leading-[1.1] text-white"
          >
            UI library for
            <br />
            Design Engineers
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7, ease: easeInOutCubic }}
            className="mt-8 max-w-[42rem] text-xl text-neutral-400 sm:text-2xl mx-auto"
          >
            150+ free and open-source animated components and templates built
            with{' '}
            <span className="text-white">
              React, TypeScript, Shadcn/ui, Tailwind CSS
            </span>
            , and <span className="text-white">Motion</span>.
          </motion.p>
        </div>
        <div className="relative w-full overflow-hidden">
          <div className="flex items-center justify-center gap-6 sm:gap-8 h-auto select-none mt-8 mx-auto">
            {showcaseItems.map((item, index) => (
              <motion.div
                key={item.name}
                className="w-[400px] shrink-0"
                initial={{ opacity: 0, x: (index - 1) * 100 }}
                animate={{ opacity: 1, x: 0 }}
                style={{ y: [y1, y2, y3][index] }}
                transition={{ duration: 1, delay: 1 }}
              >
                <ShowcaseCard item={item} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
