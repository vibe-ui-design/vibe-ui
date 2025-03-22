import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

import { Badge } from '@acme/ui/badge'
import { ChangelogEntry } from '~/components/changelog-entry'
import { SiteFooter } from '~/components/site-footer'
import { SiteHeader } from '~/components/site-header'

export default function ChangelogPage() {
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
              <p className="text-xl text-neutral-400">
                A detailed history of updates, improvements, and fixes to
                VibeUI.
              </p>
            </div>

            <div className="space-y-16">
              {/* v1.2.0 */}
              <ChangelogEntry
                version="1.2.0"
                date="March 15, 2025"
                title="New Components and Performance Improvements"
              >
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-3 flex items-center">
                      <Badge className="mr-2 bg-emerald-600 hover:bg-emerald-700">
                        New
                      </Badge>
                      New Components
                    </h3>
                    <ul className="list-disc pl-6 space-y-2 text-neutral-300">
                      <li>
                        Added{' '}
                        <code className="text-sm bg-neutral-800 px-1.5 py-0.5 rounded">
                          GlowButton
                        </code>{' '}
                        component with customizable gradient borders
                      </li>
                      <li>
                        Added{' '}
                        <code className="text-sm bg-neutral-800 px-1.5 py-0.5 rounded">
                          TwitterTestimonials
                        </code>{' '}
                        component for showcasing tweets
                      </li>
                      <li>
                        Added{' '}
                        <code className="text-sm bg-neutral-800 px-1.5 py-0.5 rounded">
                          ShowcaseMarquee
                        </code>{' '}
                        component with advanced animation options
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-3 flex items-center">
                      <Badge className="mr-2 bg-blue-600 hover:bg-blue-700">
                        Improved
                      </Badge>
                      Performance Improvements
                    </h3>
                    <ul className="list-disc pl-6 space-y-2 text-neutral-300">
                      <li>
                        Optimized image loading with better lazy-loading
                        implementation
                      </li>
                      <li>
                        Reduced bundle size by 15% through code splitting and
                        tree shaking
                      </li>
                      <li>
                        Improved animation performance with GPU acceleration
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-3 flex items-center">
                      <Badge className="mr-2 bg-amber-600 hover:bg-amber-700">
                        Fixed
                      </Badge>
                      Bug Fixes
                    </h3>
                    <ul className="list-disc pl-6 space-y-2 text-neutral-300">
                      <li>Fixed layout issues on mobile devices</li>
                      <li>
                        Resolved accessibility issues with keyboard navigation
                      </li>
                      <li>Fixed color contrast issues in dark mode</li>
                    </ul>
                  </div>
                </div>
              </ChangelogEntry>

              {/* v1.1.0 */}
              <ChangelogEntry
                version="1.1.0"
                date="February 28, 2025"
                title="Documentation Updates and New Templates"
              >
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-3 flex items-center">
                      <Badge className="mr-2 bg-emerald-600 hover:bg-emerald-700">
                        New
                      </Badge>
                      New Templates
                    </h3>
                    <ul className="list-disc pl-6 space-y-2 text-neutral-300">
                      <li>
                        Added new "Portfolio" template with project showcase
                        features
                      </li>
                      <li>
                        Added new "Documentation" template with search
                        functionality
                      </li>
                      <li>Added new "Blog" template with category filtering</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-3 flex items-center">
                      <Badge className="mr-2 bg-blue-600 hover:bg-blue-700">
                        Improved
                      </Badge>
                      Documentation Updates
                    </h3>
                    <ul className="list-disc pl-6 space-y-2 text-neutral-300">
                      <li>
                        Completely redesigned documentation site with improved
                        navigation
                      </li>
                      <li>Added detailed API references for all components</li>
                      <li>Added more code examples and usage guidelines</li>
                      <li>Improved search functionality in documentation</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-3 flex items-center">
                      <Badge className="mr-2 bg-amber-600 hover:bg-amber-700">
                        Fixed
                      </Badge>
                      Bug Fixes
                    </h3>
                    <ul className="list-disc pl-6 space-y-2 text-neutral-300">
                      <li>Fixed inconsistent styling in dark mode</li>
                      <li>
                        Resolved issues with form validation in contact forms
                      </li>
                      <li>Fixed broken links in documentation</li>
                    </ul>
                  </div>
                </div>
              </ChangelogEntry>

              {/* v1.0.0 */}
              <ChangelogEntry
                version="1.0.0"
                date="January 15, 2025"
                title="Initial Release"
                isHighlighted={true}
              >
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-3">
                      Initial Release Features
                    </h3>
                    <ul className="list-disc pl-6 space-y-2 text-neutral-300">
                      <li>150+ free and open-source animated components</li>
                      <li>
                        Full TypeScript support with comprehensive type
                        definitions
                      </li>
                      <li>Tailwind CSS integration with customizable themes</li>
                      <li>Responsive design for all components</li>
                      <li>Accessibility compliance with WCAG 2.1 standards</li>
                      <li>Comprehensive documentation with examples</li>
                      <li>Premium templates for common use cases</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-3">
                      Premium Templates
                    </h3>
                    <ul className="list-disc pl-6 space-y-2 text-neutral-300">
                      <li>Dashboard template with charts and analytics</li>
                      <li>Landing page template with marketing features</li>
                      <li>E-commerce template with product showcase</li>
                    </ul>
                  </div>
                </div>
              </ChangelogEntry>

              {/* v0.9.0 */}
              <ChangelogEntry
                version="0.9.0"
                date="December 10, 2024"
                title="Beta Release"
              >
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-3">Beta Features</h3>
                    <ul className="list-disc pl-6 space-y-2 text-neutral-300">
                      <li>First public beta release with core components</li>
                      <li>Basic documentation site</li>
                      <li>Initial set of animations and effects</li>
                      <li>Early access to premium templates</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-3">
                      Known Limitations
                    </h3>
                    <ul className="list-disc pl-6 space-y-2 text-neutral-300">
                      <li>Limited browser compatibility</li>
                      <li>Incomplete documentation</li>
                      <li>Some performance issues with complex animations</li>
                    </ul>
                  </div>
                </div>
              </ChangelogEntry>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
