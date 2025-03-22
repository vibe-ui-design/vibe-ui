"use client"

import { useEffect, useRef } from "react"
import { BrowserFrame } from "./showcase-browser-frame"

interface ShowcaseItem {
  name: string
  url: string
  description: string
  image: string
  accentColor?: string
}

const showcaseItems: ShowcaseItem[] = [
  {
    name: "freelancer.dev",
    url: "https://freelancer.dev",
    description: "Connecting with developers",
    image: "/placeholder.svg?height=600&width=800&text=Freelancer",
    accentColor: "#1a2b4b",
  },
  {
    name: "gitme.live",
    url: "https://gitme.live",
    description: "Open Source Community",
    image: "/placeholder.svg?height=600&width=800&text=GitMe",
    accentColor: "#121212",
  },
  {
    name: "infisical.com",
    url: "https://infisical.com",
    description: "YC W23, raised $2.8M",
    image: "/placeholder.svg?height=600&width=800&text=Infisical",
    accentColor: "#e9e75a",
  },
  {
    name: "langfuse.com",
    url: "https://langfuse.com",
    description: "YC W23, raised $1.5M",
    image: "/placeholder.svg?height=600&width=800&text=Langfuse",
  },
  {
    name: "acme.co",
    url: "https://acme.co",
    description: "Enterprise Solutions",
    image: "/placeholder.svg?height=600&width=800&text=Acme",
    accentColor: "#2a3f5e",
  },
  {
    name: "startup.io",
    url: "https://startup.io",
    description: "Series A, raised $5M",
    image: "/placeholder.svg?height=600&width=800&text=Startup",
    accentColor: "#4a1d96",
  },
]

export function ShowcaseMarquee() {
  const containerRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const inner = innerRef.current

    if (!container || !inner) return

    let animationId: number
    let startTime: number
    let progress = 0
    const speed = 0.03 // Adjust speed as needed

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp

      // Calculate progress based on time
      const elapsed = timestamp - startTime
      progress = (progress + elapsed * speed) % (inner.scrollWidth / 2)

      // Apply the scroll position
      container.scrollLeft = progress

      startTime = timestamp
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <section className="py-24 bg-black overflow-hidden">
      <div className="container mb-12">
        <h2 className="text-5xl font-bold text-center text-white mb-4">Showcase</h2>
        <p className="text-xl text-center text-neutral-400">Companies choose VibeUI to build their landing pages.</p>
      </div>

      <div ref={containerRef} className="relative w-full overflow-x-hidden">
        <div ref={innerRef} className="flex gap-6 py-4 px-6 w-max">
          {showcaseItems.map((item, index) => (
            <ShowcaseCard key={index} item={item} />
          ))}

          {/* Duplicate items for infinite scroll effect */}
          {showcaseItems.map((item, index) => (
            <ShowcaseCard key={`duplicate-${index}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ShowcaseCard({ item }: { item: ShowcaseItem }) {
  return (
    <div className="flex flex-col w-[400px] shrink-0">
      <BrowserFrame url={item.url} image={item.image} accentColor={item.accentColor} />
      <div className="mt-4">
        <h3 className="text-xl font-bold text-white">{item.name}</h3>
        <p className="text-neutral-400">{item.description}</p>
      </div>
    </div>
  )
}

