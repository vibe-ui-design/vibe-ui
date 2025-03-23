'use client'

import { Button } from '@acme/ui/button'
import { easeInOutCubic } from '@acme/ui/lib/animation'
import { cn } from '@acme/ui/lib/utils'
import { AnimatePresence, motion, useAnimation } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Icons } from '../icons'
import { MobileDrawer } from '../mobile-drawer'

interface NavItem {
  text: string
  href: string
}

const navItems: NavItem[] = [
  { text: 'Components', href: '/docs/components' },
  { text: 'Templates', href: '/templates' },
  { text: 'Pricing', href: '/pricing' },
]

export function Header() {
  const [isVisible, setIsVisible] = useState(true)
  const [addBorder, setAddBorder] = useState(false)
  const [isInitialLoad, setIsInitialLoad] = useState(true)
  const controls = useAnimation()

  useEffect(() => {
    let lastScrollY = 0

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsVisible(currentScrollY <= lastScrollY)
      setAddBorder(currentScrollY > 20)
      lastScrollY = currentScrollY
    }

    window.addEventListener('scroll', handleScroll)

    // Set isInitialLoad to false after the component has mounted
    setIsInitialLoad(false)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    controls.start(isVisible ? 'visible' : 'hidden')
  }, [isVisible, controls])

  const headerVariants = {
    hidden: { opacity: 0, y: '-100%' },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.header
          initial="hidden"
          animate={controls}
          exit="hidden"
          variants={headerVariants}
          transition={{
            duration: isInitialLoad ? 1 : 0.3,
            delay: isInitialLoad ? 0.5 : 0,
            ease: easeInOutCubic,
          }}
          className={cn(
            'sticky top-0 z-50 p-0 bg-background/60 backdrop-blur w-full container',
          )}
        >
          <div className="flex justify-between items-center container mx-auto px-4 sm:px-10 py-4">
            <Link
              href="/"
              title="VibeUI"
              className="relative flex items-center gap-3"
            >
              <Icons.logo />
              <span className="font-semibold text-xl text-white">
                vibe<span className="text-chart-5">ui</span>
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.text}
                  href={item.href}
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  {item.text}
                </Link>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-4">
              <Button asChild className="rounded-xl">
                <Link href="/docs">Build with AI</Link>
              </Button>
            </div>

            <div className="mt-2 cursor-pointer block md:hidden">
              <MobileDrawer />
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: addBorder ? 1 : 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="absolute w-full bottom-0 border-b border-border/5"
          />
        </motion.header>
      )}
    </AnimatePresence>
  )
}
