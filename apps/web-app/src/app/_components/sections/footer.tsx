import { Icons } from '@acme/ui/custom/icons'
import Link from 'next/link'

interface FooterLink {
  title: string
  items: {
    text: string
    href: string
  }[]
}

const footerLinks: FooterLink[] = [
  {
    title: 'Product',
    items: [
      { text: 'Components', href: '/docs/components' },
      { text: 'Motion', href: '/docs/motion' },
      { text: 'Accessibility', href: '/docs/accessibility' },
      { text: 'Theming', href: '/docs/theming' },
    ],
  },
  {
    title: 'Resources',
    items: [
      { text: 'Documentation', href: '/docs' },
      { text: 'Examples', href: '/examples' },
      { text: 'Showcase', href: '/showcase' },
      { text: 'Blog', href: '/blog' },
    ],
  },
  {
    title: 'Company',
    items: [
      { text: 'About', href: '/about' },
      { text: 'Pricing', href: '/pricing' },
      { text: 'Contact', href: '/contact' },
      { text: 'GitHub', href: 'https://github.com/vibe-ui-design/vibe-ui' },
    ],
  },
  {
    title: 'Legal',
    items: [
      { text: 'Privacy', href: '/privacy' },
      { text: 'Terms', href: '/terms' },
      { text: 'License', href: '/license' },
    ],
  },
]

const socialLinks = [
  {
    icon: 'Discord',
    href: 'https://discord.gg/vibe-ui',
    label: 'Discord',
  },
  { icon: 'TwitterX', href: 'https://twitter.com/vibe_ui', label: 'Twitter' },
  {
    icon: 'Github',
    href: 'https://github.com/vibe-ui-design/vibe-ui',
    label: 'GitHub',
  },
]

export function Footer() {
  return (
    <footer className="border-t border-border/5 bg-card/5 w-full container">
      <div className="container mx-auto px-4 sm:px-10 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {footerLinks.map((section) => (
            <div key={section.title} className="flex flex-col gap-4">
              <h3 className="text-lg font-semibold text-white">
                {section.title}
              </h3>
              <ul className="flex flex-col gap-2">
                {section.items.map((item) => (
                  <li key={item.text}>
                    <Link
                      href={item.href}
                      className="text-neutral-400 hover:text-white transition-colors"
                    >
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Icons.Sparkles size="lg" variant="primary" />
            <span className="text-xl font-semibold text-white">VibeUI</span>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((link) => {
              const Icon = Icons[link.icon as keyof typeof Icons]
              return (
                <Link
                  key={link.icon}
                  href={link.href}
                  className="text-neutral-400 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon size="lg" />
                  <span className="sr-only">{link.label}</span>
                </Link>
              )
            })}
          </div>

          <div className="text-sm text-neutral-400">
            © {new Date().getFullYear()} VibeUI. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
