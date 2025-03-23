import { Icons } from '@acme/ui/custom/icons'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Section } from '../section'

interface Feature {
  name: string
  description: string
  icon: keyof typeof Icons
  href: string
}

const features: Feature[] = [
  {
    name: 'Beautiful Components',
    description:
      'Build stunning interfaces with our collection of animated UI components. Each component is designed with accessibility and performance in mind.',
    icon: 'Sparkles',
    href: '/docs/components',
  },
  {
    name: 'Motion Effects',
    description:
      'Add life to your applications with smooth animations and transitions. Our motion library makes it easy to create engaging user experiences.',
    icon: 'ArrowUpFromLine',
    href: '/docs/motion',
  },
  {
    name: 'Developer Experience',
    description:
      'TypeScript-first development with full type safety and auto-completion. Build with confidence using our well-documented APIs.',
    icon: 'FunctionSquare',
    href: '/docs/typescript',
  },
  {
    name: 'Accessibility',
    description:
      'Every component follows WAI-ARIA guidelines and includes keyboard navigation support. Make your apps accessible to everyone.',
    icon: 'BadgeCheck',
    href: '/docs/accessibility',
  },
  {
    name: 'Dark Mode',
    description:
      'Built-in dark mode support with customizable themes. Switch between light and dark mode with a single line of code.',
    icon: 'Moon',
    href: '/docs/theming',
  },
  {
    name: 'Performance',
    description:
      'Optimized for performance with code splitting and tree shaking. Keep your bundle size small and your app fast.',
    icon: 'FlaskConical',
    href: '/docs/performance',
  },
]

export function Features() {
  return (
    <Section
      id="features"
      title="Features"
      subtitle="Everything you need to build modern applications"
      className="max-w-screen-xl mx-auto container px-4 sm:px-10"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ name, description, icon, href }) => {
          const Icon = Icons[icon]
          return (
            <div
              key={name}
              className="rounded-2xl overflow-hidden bg-card/5 hover:bg-card/10 transition-colors p-8 flex flex-col items-start text-left border border-border/5"
            >
              <div className="flex flex-col items-start gap-y-6 mb-6">
                <div className="bg-gradient-to-br from-primary to-primary/80 p-2.5 rounded-xl text-white">
                  <Icon size="lg" variant="primary" />
                </div>
                <h2 className="text-2xl font-semibold text-white">{name}</h2>
              </div>
              <p className="text-lg text-neutral-400 mb-8">{description}</p>
              <Link
                href={href}
                className="text-lg text-primary hover:text-primary-darker transition-colors group flex items-center gap-2 mt-auto"
              >
                Learn more{' '}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
