'use client'

import type React from 'react'

import { Badge } from '@acme/ui/badge'
import { cn } from '@acme/ui/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { SiteHeader } from '~/components/site-header'

interface DocsLayoutProps {
  children: React.ReactNode
}

export function DocsLayout({ children }: DocsLayoutProps) {
  const pathname = usePathname()

  const docsNavItems = [
    {
      title: 'Getting Started',
      items: [
        {
          title: 'Introduction',
          href: '/docs',
        },
        {
          title: 'Installation',
          href: '/docs/installation',
        },
        {
          title: 'Configuration',
          href: '/docs/configuration',
        },
      ],
    },
    {
      title: 'Templates',
      items: [
        {
          title: 'Dashboard',
          href: '/docs/templates/dashboard',
          badge: 'Premium',
        },
        {
          title: 'Landing Page',
          href: '/docs/templates/landing-page',
          badge: 'Premium',
        },
        {
          title: 'E-commerce',
          href: '/docs/templates/ecommerce',
          badge: 'Premium',
        },
        {
          title: 'Blog',
          href: '/docs/templates/blog',
        },
        {
          title: 'Portfolio',
          href: '/docs/templates/portfolio',
        },
        {
          title: 'Documentation',
          href: '/docs/templates/documentation',
          badge: 'New',
        },
      ],
    },
    {
      title: 'Components',
      items: [
        {
          title: 'Template Card',
          href: '/docs/components/template-card',
        },
        {
          title: 'Pricing Badge',
          href: '/docs/components/pricing-badge',
        },
        {
          title: 'Site Header',
          href: '/docs/components/site-header',
        },
        {
          title: 'Site Footer',
          href: '/docs/components/site-footer',
        },
      ],
    },
    {
      title: 'API Reference',
      items: [
        {
          title: 'Templates API',
          href: '/docs/api-reference/templates',
        },
        {
          title: 'Open in v0',
          href: '/docs/api-reference/open-in-v0',
        },
      ],
    },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <SiteHeader className="border-b border-neutral-800 bg-black" />
      <div className="flex-1 flex">
        <aside className="w-64 border-r border-neutral-800 fixed top-16 bottom-0 overflow-y-auto">
          <div className="py-6 px-4 space-y-8">
            {docsNavItems.map((section, i) => (
              <div key={i} className="space-y-3">
                <h4 className="font-medium text-sm text-neutral-400">
                  {section.title}
                </h4>
                <div className="space-y-1">
                  {section.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        'block py-1.5 px-3 rounded-md text-sm transition-colors',
                        pathname === item.href
                          ? 'bg-neutral-800 text-white font-medium'
                          : 'text-neutral-400 hover:text-white',
                      )}
                    >
                      <div className="flex items-center justify-between">
                        {item.title}
                        {item.badge && (
                          <Badge
                            variant={
                              item.badge === 'Premium' ? 'default' : 'secondary'
                            }
                            className={cn(
                              'ml-2 px-1.5 py-0.5 text-[10px] font-medium',
                              item.badge === 'Premium'
                                ? 'bg-emerald-600 hover:bg-emerald-600'
                                : 'bg-amber-600 hover:bg-amber-600',
                            )}
                          >
                            {item.badge}
                          </Badge>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </aside>
        <main className="flex-1 ml-64">
          <div className="max-w-4xl mx-auto py-12 px-8">{children}</div>
        </main>
      </div>
    </div>
  )
}
