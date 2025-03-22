import { Check } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@acme/ui/button'
import { SiteFooter } from '~/components/site-footer'
import { SiteHeader } from '~/components/site-header'

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-[58rem] text-center">
              <h1 className="text-4xl font-bold leading-tight tracking-tighter md:text-5xl">
                Simple, Transparent Pricing
              </h1>
              <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
                Choose the templates that fit your project needs
              </p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border bg-card p-8 shadow-sm">
                <h3 className="text-2xl font-bold">Free Templates</h3>
                <div className="mt-4 text-4xl font-bold">$0</div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Get started with basic templates
                </p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    Basic designs
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    Open in v0
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    Community support
                  </li>
                </ul>
                <Button className="mt-8 w-full" variant="outline" asChild>
                  <Link href="/#templates">Browse Free Templates</Link>
                </Button>
              </div>
              <div className="rounded-lg border bg-card p-8 shadow-sm relative">
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-0 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                  Popular
                </div>
                <h3 className="text-2xl font-bold">Premium Templates</h3>
                <div className="mt-4 text-4xl font-bold">$29-79</div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Professional templates for serious projects
                </p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    Advanced designs
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    Premium components
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    One-time payment
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    Email support
                  </li>
                </ul>
                <Button className="mt-8 w-full" asChild>
                  <Link href="/#templates">Browse Premium Templates</Link>
                </Button>
              </div>
              <div className="rounded-lg border bg-card p-8 shadow-sm">
                <h3 className="text-2xl font-bold">Enterprise</h3>
                <div className="mt-4 text-4xl font-bold">Custom</div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Custom solutions for your organization
                </p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    Custom templates
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    White-labeling
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    Dedicated support
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    Custom integrations
                  </li>
                </ul>
                <Button className="mt-8 w-full" variant="outline" asChild>
                  <Link href="/contact">Contact Sales</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
