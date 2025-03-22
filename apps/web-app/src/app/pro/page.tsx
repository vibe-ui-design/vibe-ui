import { ArrowRight, Check } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@acme/ui/button'
import { SiteFooter } from '~/components/site-footer'
import { SiteHeader } from '~/components/site-header'

export default function ProPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 bg-black text-white">
        <section className="py-24 md:py-32">
          <div className="container">
            <div className="mx-auto max-w-[58rem] text-center">
              <h1 className="text-5xl font-bold leading-tight tracking-tighter md:text-6xl">
                VibeUI Pro
              </h1>
              <p className="mt-6 text-xl text-neutral-400">
                50+ premium blocks and templates to build beautiful landing
                pages in minutes
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="h-12 px-8 rounded-full bg-white text-black hover:bg-neutral-200"
                >
                  <Link href="#pricing">
                    View Pricing <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="h-12 px-8 rounded-full border-neutral-800 bg-transparent text-white hover:bg-neutral-800 hover:text-white"
                >
                  <Link href="/docs/pro">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="py-16 md:py-24 bg-neutral-950">
          <div className="container">
            <div className="mx-auto max-w-[58rem] text-center">
              <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl">
                Pro Features
              </h2>
              <p className="mt-4 text-lg text-neutral-400">
                Everything you need to build beautiful landing pages
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border border-neutral-800 bg-black p-6">
                <h3 className="text-xl font-bold">Premium Templates</h3>
                <p className="mt-2 text-neutral-400">
                  Access to 50+ premium templates for landing pages, dashboards,
                  and more
                </p>
              </div>
              <div className="rounded-lg border border-neutral-800 bg-black p-6">
                <h3 className="text-xl font-bold">Custom Components</h3>
                <p className="mt-2 text-neutral-400">
                  Advanced components with animations and interactive features
                </p>
              </div>
              <div className="rounded-lg border border-neutral-800 bg-black p-6">
                <h3 className="text-xl font-bold">Priority Support</h3>
                <p className="mt-2 text-neutral-400">
                  Get help from our team when you need it most
                </p>
              </div>
              <div className="rounded-lg border border-neutral-800 bg-black p-6">
                <h3 className="text-xl font-bold">Regular Updates</h3>
                <p className="mt-2 text-neutral-400">
                  New templates and components added every month
                </p>
              </div>
              <div className="rounded-lg border border-neutral-800 bg-black p-6">
                <h3 className="text-xl font-bold">Commercial License</h3>
                <p className="mt-2 text-neutral-400">
                  Use our templates in commercial projects without attribution
                </p>
              </div>
              <div className="rounded-lg border border-neutral-800 bg-black p-6">
                <h3 className="text-xl font-bold">Early Access</h3>
                <p className="mt-2 text-neutral-400">
                  Be the first to try new features and templates
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-[58rem] text-center">
              <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl">
                Simple, Transparent Pricing
              </h2>
              <p className="mt-4 text-lg text-neutral-400">
                Choose the plan that fits your needs
              </p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border border-neutral-800 bg-black p-8">
                <h3 className="text-2xl font-bold">Free</h3>
                <div className="mt-4 text-4xl font-bold">$0</div>
                <p className="mt-2 text-sm text-neutral-400">
                  Get started with basic templates
                </p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    <span>Basic templates</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    <span>Community support</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    <span>Open source components</span>
                  </li>
                </ul>
                <Button className="mt-8 w-full" variant="outline">
                  <Link href="/#templates">Get Started</Link>
                </Button>
              </div>

              <div className="rounded-lg border border-indigo-500 bg-black p-8 relative">
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-0 rounded-full bg-indigo-500 px-3 py-1 text-xs font-medium text-white">
                  Popular
                </div>
                <h3 className="text-2xl font-bold">Pro</h3>
                <div className="mt-4 text-4xl font-bold">$99</div>
                <p className="mt-2 text-sm text-neutral-400">
                  Everything you need for professional projects
                </p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    <span>All free templates</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    <span>50+ premium templates</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    <span>Advanced components</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    <span>Priority support</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    <span>Commercial license</span>
                  </li>
                </ul>
                <Button className="mt-8 w-full bg-indigo-500 hover:bg-indigo-600">
                  <Link href="/checkout">Get Pro</Link>
                </Button>
              </div>

              <div className="rounded-lg border border-neutral-800 bg-black p-8">
                <h3 className="text-2xl font-bold">Enterprise</h3>
                <div className="mt-4 text-4xl font-bold">Custom</div>
                <p className="mt-2 text-sm text-neutral-400">
                  Custom solutions for your organization
                </p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    <span>All Pro features</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    <span>Custom templates</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    <span>Dedicated support</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    <span>Team licenses</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    <span>Custom integrations</span>
                  </li>
                </ul>
                <Button className="mt-8 w-full" variant="outline">
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
