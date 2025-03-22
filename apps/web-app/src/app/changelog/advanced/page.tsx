'use client'

import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

import { Badge } from '@acme/ui/badge'
import { Button } from '@acme/ui/button'
import { Input } from '@acme/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@acme/ui/select'
import { ChangelogEntry } from '~/components/changelog-entry'
import { SiteFooter } from '~/components/site-footer'
import { SiteHeader } from '~/components/site-header'

// Sample changelog data
const changelogData = [
  {
    version: '1.2.0',
    date: 'March 15, 2025',
    title: 'New Components and Performance Improvements',
    categories: ['new', 'improved', 'fixed'],
    content: [
      {
        category: 'new',
        title: 'New Components',
        items: [
          'Added GlowButton component with customizable gradient borders',
          'Added TwitterTestimonials component for showcasing tweets',
          'Added ShowcaseMarquee component with advanced animation options',
        ],
      },
      {
        category: 'improved',
        title: 'Performance Improvements',
        items: [
          'Optimized image loading with better lazy-loading implementation',
          'Reduced bundle size by 15% through code splitting and tree shaking',
          'Improved animation performance with GPU acceleration',
        ],
      },
      {
        category: 'fixed',
        title: 'Bug Fixes',
        items: [
          'Fixed layout issues on mobile devices',
          'Resolved accessibility issues with keyboard navigation',
          'Fixed color contrast issues in dark mode',
        ],
      },
    ],
  },
  {
    version: '1.1.0',
    date: 'February 28, 2025',
    title: 'Documentation Updates and New Templates',
    categories: ['new', 'improved', 'fixed'],
    content: [
      {
        category: 'new',
        title: 'New Templates',
        items: [
          'Added new "Portfolio" template with project showcase features',
          'Added new "Documentation" template with search functionality',
          'Added new "Blog" template with category filtering',
        ],
      },
      {
        category: 'improved',
        title: 'Documentation Updates',
        items: [
          'Completely redesigned documentation site with improved navigation',
          'Added detailed API references for all components',
          'Added more code examples and usage guidelines',
          'Improved search functionality in documentation',
        ],
      },
      {
        category: 'fixed',
        title: 'Bug Fixes',
        items: [
          'Fixed inconsistent styling in dark mode',
          'Resolved issues with form validation in contact forms',
          'Fixed broken links in documentation',
        ],
      },
    ],
  },
  {
    version: '1.0.0',
    date: 'January 15, 2025',
    title: 'Initial Release',
    categories: ['release'],
    isHighlighted: true,
    content: [
      {
        category: 'release',
        title: 'Initial Release Features',
        items: [
          '150+ free and open-source animated components',
          'Full TypeScript support with comprehensive type definitions',
          'Tailwind CSS integration with customizable themes',
          'Responsive design for all components',
          'Accessibility compliance with WCAG 2.1 standards',
          'Comprehensive documentation with examples',
          'Premium templates for common use cases',
        ],
      },
      {
        category: 'release',
        title: 'Premium Templates',
        items: [
          'Dashboard template with charts and analytics',
          'Landing page template with marketing features',
          'E-commerce template with product showcase',
        ],
      },
    ],
  },
  {
    version: '0.9.0',
    date: 'December 10, 2024',
    title: 'Beta Release',
    categories: ['beta'],
    content: [
      {
        category: 'beta',
        title: 'Beta Features',
        items: [
          'First public beta release with core components',
          'Basic documentation site',
          'Initial set of animations and effects',
          'Early access to premium templates',
        ],
      },
      {
        category: 'beta',
        title: 'Known Limitations',
        items: [
          'Limited browser compatibility',
          'Incomplete documentation',
          'Some performance issues with complex animations',
        ],
      },
    ],
  },
]

export default function AdvancedChangelogPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('all')

  // Filter changelog entries based on search query and category
  const filteredChangelog = changelogData.filter((entry) => {
    // Filter by search query
    const matchesSearch =
      searchQuery === '' ||
      entry.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      entry.content.some(
        (section) =>
          section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          section.items.some((item) =>
            item.toLowerCase().includes(searchQuery.toLowerCase()),
          ),
      )

    // Filter by category
    const matchesCategory =
      categoryFilter === 'all' || entry.categories.includes(categoryFilter)

    return matchesSearch && matchesCategory
  })

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 bg-black text-white">
        <section className="py-16 md:py-24">
          <div className="container max-w-4xl">
            <div className="mb-12">
              <Link
                href="/"
                className="inline-flex items-center text-sm text-neutral-400 hover:text-white transition-colors mb-6"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to home
              </Link>
              <h1 className="text-4xl font-bold mb-4">Changelog</h1>
              <p className="text-xl text-neutral-400 mb-8">
                A detailed history of updates, improvements, and fixes to
                VibeUI.
              </p>

              {/* Filters */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="flex-1">
                  <Input
                    placeholder="Search changes..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-neutral-900 border-neutral-800 text-white placeholder:text-neutral-500"
                  />
                </div>
                <Select
                  value={categoryFilter}
                  onValueChange={setCategoryFilter}
                >
                  <SelectTrigger className="w-full sm:w-[180px] bg-neutral-900 border-neutral-800 text-white">
                    <SelectValue placeholder="Filter by type" />
                  </SelectTrigger>
                  <SelectContent className="bg-neutral-900 border-neutral-800 text-white">
                    <SelectItem value="all">All changes</SelectItem>
                    <SelectItem value="new">New features</SelectItem>
                    <SelectItem value="improved">Improvements</SelectItem>
                    <SelectItem value="fixed">Bug fixes</SelectItem>
                    <SelectItem value="release">Releases</SelectItem>
                    <SelectItem value="beta">Beta features</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Version navigation */}
              <div className="flex flex-wrap gap-2 mb-8">
                {changelogData.map((entry) => (
                  <Button
                    key={entry.version}
                    variant="outline"
                    size="sm"
                    className="bg-transparent border-neutral-800 text-white hover:bg-neutral-800 hover:text-white"
                    onClick={() => {
                      const element = document.getElementById(
                        `version-${entry.version}`,
                      )
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' })
                      }
                    }}
                  >
                    v{entry.version}
                  </Button>
                ))}
              </div>
            </div>

            {filteredChangelog.length > 0 ? (
              <div className="space-y-16">
                {filteredChangelog.map((entry) => (
                  <div key={entry.version} id={`version-${entry.version}`}>
                    <ChangelogEntry
                      version={entry.version}
                      date={entry.date}
                      title={entry.title}
                      isHighlighted={entry.isHighlighted}
                    >
                      <div className="space-y-6">
                        {entry.content.map((section, index) => {
                          // Skip sections that don't match category filter if it's not "all"
                          if (
                            categoryFilter !== 'all' &&
                            categoryFilter !== section.category
                          ) {
                            return null
                          }

                          return (
                            <div key={index}>
                              <h3 className="text-lg font-medium mb-3 flex items-center">
                                {section.category === 'new' && (
                                  <Badge className="mr-2 bg-emerald-600 hover:bg-emerald-700">
                                    New
                                  </Badge>
                                )}
                                {section.category === 'improved' && (
                                  <Badge className="mr-2 bg-blue-600 hover:bg-blue-700">
                                    Improved
                                  </Badge>
                                )}
                                {section.category === 'fixed' && (
                                  <Badge className="mr-2 bg-amber-600 hover:bg-amber-700">
                                    Fixed
                                  </Badge>
                                )}
                                {section.title}
                              </h3>
                              <ul className="list-disc pl-6 space-y-2 text-neutral-300">
                                {section.items.map((item, itemIndex) => (
                                  <li key={itemIndex}>
                                    {item.includes('component') ? (
                                      <>
                                        {item.split('component')[0]}
                                        <code className="text-sm bg-neutral-800 px-1.5 py-0.5 rounded">
                                          {item.match(/[A-Z][a-zA-Z]+/)?.[0]}
                                        </code>
                                        component{item.split('component')[1]}
                                      </>
                                    ) : (
                                      item
                                    )}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )
                        })}
                      </div>
                    </ChangelogEntry>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 border border-neutral-800 rounded-lg">
                <p className="text-neutral-400 mb-4">
                  No changes found matching your filters.
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchQuery('')
                    setCategoryFilter('all')
                  }}
                >
                  Reset filters
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
