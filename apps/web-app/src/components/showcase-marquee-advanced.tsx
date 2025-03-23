'use client'

import { useEffect, useRef } from 'react'
import { BrowserFrame } from './showcase-browser-frame'

interface ShowcaseItem {
  name: string
  url: string
  description: string
  image: string
  accentColor?: string
}

const showcaseItems: ShowcaseItem[] = [
  {
    name: 'freelancer.dev',
    url: 'https://freelancer.dev',
    description: 'Connecting with developers',
    image: '/placeholder.svg?height=600&width=800&text=Freelancer',
    accentColor: '#1a2b4b',
  },
  {
    name: 'gitme.live',
    url: 'https://gitme.live',
    description: 'Open Source Community',
    image: '/placeholder.svg?height=600&width=800&text=GitMe',
    accentColor: '#121212',
  },
  {
    name: 'infisical.com',
    url: 'https://infisical.com',
    description: 'YC W23, raised $2.8M',
    image: '/placeholder.svg?height=600&width=800&text=Infisical',
    accentColor: '#e9e75a',
  },
  {
    name: 'langfuse.com',
    url: 'https://langfuse.com',
    description: 'YC W23, raised $1.5M',
    image: '/placeholder.svg?height=600&width=800&text=Langfuse',
  },
  {
    name: 'acme.co',
    url: 'https://acme.co',
    description: 'Enterprise Solutions',
    image: '/placeholder.svg?height=600&width=800&text=Acme',
    accentColor: '#2a3f5e',
  },
  {
    name: 'startup.io',
    url: 'https://startup.io',
    description: 'Series A, raised $5M',
    image: '/placeholder.svg?height=600&width=800&text=Startup',
    accentColor: '#4a1d96',
  },
]

export function ShowcaseMarqueeAdvanced() {
  const marqueeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const marqueeElement = marqueeRef.current
    if (!marqueeElement) return

    const marqueeInner = marqueeElement.querySelector('.marquee-inner')
    if (!marqueeInner) return

    const clone = marqueeInner.cloneNode(true)
    marqueeElement.appendChild(clone)

    const keyframes = [
      { transform: 'translateX(0)' },
      { transform: `translateX(-${marqueeInner.scrollWidth}px)` },
    ]

    const options = {
      duration: 60000,
      iterations: Number.POSITIVE_INFINITY,
    }

    const animation = marqueeElement.animate(keyframes, options)

    // Pause animation when not in viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animation.play()
          } else {
            animation.pause()
          }
        })
      },
      { threshold: 0.1 },
    )

    observer.observe(marqueeElement)

    // Pause on hover
    marqueeElement.addEventListener('mouseenter', () => {
      animation.pause()
    })

    marqueeElement.addEventListener('mouseleave', () => {
      animation.play()
    })

    return () => {
      animation.cancel()
      observer.disconnect()
    }
  }, [])

  return (
    <section className="py-24 bg-black overflow-hidden">
      <div className="container mb-12">
        <h2 className="text-5xl font-bold text-center text-white mb-4">
          Showcase
        </h2>
        <p className="text-xl text-center text-neutral-400">
          Companies choose VibeUI to build their landing pages.
        </p>
      </div>

      <div ref={marqueeRef} className="flex overflow-hidden relative">
        <div className="marquee-inner flex gap-6 py-4 px-6">
          {showcaseItems.map((item, index) => (
            <ShowcaseCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export function ShowcaseCard({ item }: { item: ShowcaseItem }) {
  return (
    <div className="flex flex-col w-[400px] shrink-0">
      <BrowserFrame
        url={item.url}
        image={item.image}
        accentColor={item.accentColor}
        className="w-full"
      />
      <div className="mt-4">
        <h3 className="text-xl font-bold text-white">{item.name}</h3>
        <p className="text-neutral-400">{item.description}</p>
      </div>
    </div>
  )
}
