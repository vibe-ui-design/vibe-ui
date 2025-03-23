'use client'

import { Button } from '@acme/ui/button'
import { Icons } from '@acme/ui/custom/icons'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useRef } from 'react'
import { Section } from '../section'

interface Benefit {
  id: string
  title: string
  description: string
  image: string
  icon: keyof typeof Icons
}

const benefits: Benefit[] = [
  {
    id: 'components',
    title: 'Beautiful Components',
    description:
      'Build stunning interfaces with our collection of animated UI components. Each component is designed with accessibility and performance in mind.',
    image: '/benefits/components.webp',
    icon: 'Sparkles',
  },
  {
    id: 'motion',
    title: 'Motion Effects',
    description:
      'Add life to your applications with smooth animations and transitions. Our motion library makes it easy to create engaging user experiences.',
    image: '/benefits/motion.webp',
    icon: 'ArrowUpFromLine',
  },
  {
    id: 'typescript',
    title: 'TypeScript First',
    description:
      'Full type safety and auto-completion out of the box. Build with confidence using our well-documented APIs and comprehensive examples.',
    image: '/benefits/typescript.webp',
    icon: 'FunctionSquare',
  },
  {
    id: 'accessibility',
    title: 'Accessibility',
    description:
      'Every component follows WAI-ARIA guidelines and includes keyboard navigation support. Make your apps accessible to everyone.',
    image: '/benefits/accessibility.webp',
    icon: 'BadgeCheck',
  },
  {
    id: 'dark-mode',
    title: 'Dark Mode',
    description:
      'Built-in dark mode support with customizable themes. Switch between light and dark mode with a single line of code.',
    image: '/benefits/dark-mode.webp',
    icon: 'Moon',
  },
  {
    id: 'performance',
    title: 'Performance',
    description:
      'Optimized for performance with code splitting and tree shaking. Keep your bundle size small and your app fast.',
    image: '/benefits/performance.webp',
    icon: 'FlaskConical',
  },
]

export function Benefits() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scrollPrev = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' })
    }
  }

  const scrollNext = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' })
    }
  }

  return (
    <Section
      title="Benefits"
      subtitle="Everything you need to build modern applications"
      className="relative max-w-screen"
    >
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {/* Add empty div for extra gap on desktop */}
        <div
          className="hidden md:block shrink-0 w-[calc(90%-1rem)] md:w-1/3 lg:w-1/3 xl:w-1/4 snap-start select-none px-4"
          aria-hidden="true"
        />
        {benefits.map((benefit) => {
          const Icon = Icons[benefit.icon]
          return (
            <div
              key={benefit.id}
              className="shrink-0 w-[calc(90%-1rem)] md:w-1/3 lg:w-1/3 xl:w-1/4 snap-center md:snap-start select-none px-4"
            >
              <div className="h-[500px] relative rounded-2xl overflow-hidden border border-border/5 bg-card/5 hover:bg-card/10 transition-colors">
                <img
                  src={benefit.image}
                  alt={benefit.title}
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-out object-[0px_10px] hover:object-top"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background to-transparent pointer-events-none" />
                <div className="absolute inset-x-0 bottom-0 p-8">
                  <div className="flex flex-col gap-4">
                    <div className="bg-gradient-to-br from-primary to-primary/80 p-2.5 rounded-xl text-white w-fit">
                      <Icon size="lg" variant="primary" />
                    </div>
                    <h2 className="text-2xl font-semibold text-white">
                      {benefit.title}
                    </h2>
                    <p className="text-lg text-neutral-400">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
        {/* Add empty div for extra gap on desktop */}
        <div
          className="hidden md:block shrink-0 w-1/3 lg:w-1/3 xl:w-1/4 snap-start"
          aria-hidden="true"
        />
      </div>
      <div className="flex justify-center md:justify-end mt-8 md:mt-12 md:pr-32">
        <div className="flex gap-4">
          <Button
            onClick={scrollPrev}
            className="size-12 rounded-full"
            variant="outline"
            size="icon"
          >
            <ArrowLeft className="size-5" />
            <span className="sr-only">Previous slide</span>
          </Button>
          <Button
            onClick={scrollNext}
            className="size-12 rounded-full"
            variant="outline"
            size="icon"
          >
            <ArrowRight className="size-5" />
            <span className="sr-only">Next slide</span>
          </Button>
        </div>
      </div>
    </Section>
  )
}
