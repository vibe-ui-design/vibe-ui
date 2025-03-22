import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@acme/ui/button'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@acme/ui/card'
import { ShowcaseMarqueeAdvanced } from '~/components/showcase-marquee-advanced'
import { SiteFooter } from '~/components/site-footer'
import { SiteHeader } from '~/components/site-header'
import { TemplateCard } from '~/components/template-card'
import { TwitterTestimonials } from '~/components/twitter-testimonials'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Announcement Banner */}
      <div className="bg-indigo-600 py-3 px-4 text-center text-white">
        <p className="text-sm font-medium">
          ✨ Introducing VibeUI Pro - 50+ blocks and templates to build
          beautiful landing pages in minutes.{' '}
          <Link href="/pro" className="inline-flex items-center underline ml-1">
            Learn more <ArrowRight className="ml-1 h-3 w-3" />
          </Link>
        </p>
      </div>

      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-24 md:py-32">
          <div className="absolute inset-0 bg-black" />
          <div className="container relative z-10 max-w-5xl">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center text-center">
              {/* Small Announcement Button */}
              <Link
                href="/docs/introduction"
                className="inline-flex items-center rounded-full border border-neutral-800 bg-neutral-900 px-4 py-1.5 text-sm text-white mb-8 hover:bg-neutral-800 transition-colors"
              >
                <span className="mr-2">🚀</span> Introducing Pointer{' '}
                <ArrowRight className="ml-2 h-3 w-3" />
              </Link>

              <h1 className="text-5xl font-bold leading-tight tracking-tighter md:text-7xl lg:leading-[1.1] text-white">
                UI library for
                <br />
                Design Engineers
              </h1>

              <p className="mt-8 max-w-[42rem] text-xl text-neutral-400 sm:text-2xl">
                150+ free and open-source animated components and effects built
                with{' '}
                <span className="text-white">
                  React, TypeScript, Tailwind CSS
                </span>
                , and <span className="text-white">Motion</span>.
              </p>

              <p className="mt-4 text-xl text-neutral-400">
                Perfect companion for{' '}
                <span className="text-white">shadcn/ui</span>.
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="h-12 px-8 rounded-full bg-white text-black hover:bg-neutral-200"
                >
                  <Link href="#templates">
                    Browse Components <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                {/* <GlowButton
                  size="lg"
                  showArrow={true}
                  className="h-12 px-8 text-base"
                  // asChild
                > */}
                {/* <Link href="#templates">Browse Templates</Link> */}
                {/* </GlowButton> */}
              </div>

              {/* Technology Icons */}
              <div className="mt-16 flex items-center justify-center space-x-8">
                <svg viewBox="0 0 24 24" className="h-8 w-8 text-white">
                  <title>React</title>
                  <path
                    fill="currentColor"
                    d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"
                  />
                </svg>
                <div className="h-8 w-8 flex items-center justify-center bg-white text-black font-bold">
                  TS
                </div>
                <svg viewBox="0 0 24 24" className="h-8 w-8 text-white">
                  <title>TypeScript</title>
                  <path
                    fill="currentColor"
                    d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"
                  />
                </svg>
                <svg viewBox="0 0 24 24" className="h-8 w-8 text-white">
                  <title>Tailwind CSS</title>
                  <path
                    fill="currentColor"
                    d="M19.952 1.651a.244.244 0 0 1 .348.245V21.303a.25.25 0 0 1-.348.246l-8.56-4.765a.5.5 0 0 0-.485 0l-7.296 4.042a.75.75 0 0 1-1.111-.656V4.847a.75.75 0 0 1 .371-.644l7.296-4.042a.5.5 0 0 0 .485 0l9.3 5.49zm-7.144 10.09a3 3 0 1 0-3.828-3.828 3 3 0 0 0 3.828 3.829z"
                  />
                </svg>
                <svg viewBox="0 0 24 24" className="h-8 w-8 text-white">
                  <title>Motion</title>
                  <path
                    fill="currentColor"
                    d="M9.37 5.51A7.35 7.35 0 0 0 5.51 9.37a7.65 7.65 0 0 0 0 5.26a7.35 7.35 0 0 0 3.86 3.86a7.65 7.65 0 0 0 5.26 0a7.35 7.35 0 0 0 3.86-3.86a7.65 7.65 0 0 0 0-5.26a7.35 7.35 0 0 0-3.86-3.86a7.65 7.65 0 0 0-5.26 0zM12 10.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Showcase Marquee Section */}
        <ShowcaseMarqueeAdvanced />

        {/* Templates Section */}
        <section id="templates" className="py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-[58rem] text-center">
              <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl">
                Ready-to-use Templates
              </h2>
              <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
                Browse our collection of free and premium templates
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Social Media Posts</CardTitle>
                <CardDescription>
                  Generate platform-specific social media posts to promote your
                  application
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Link href="/project/social-media-generator" className="w-full">
                  <Button variant="outline" className="w-full">
                    Create Social Posts
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            {/* Premium Templates */}
            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-6">Premium Templates</h3>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <TemplateCard
                  id="dashboard"
                  title="Dashboard"
                  description="A modern analytics dashboard with charts, tables, and stats."
                  image="/placeholder.svg?height=400&width=600"
                  category="Admin"
                  openInV0Url="https://v0.dev/api/open-in-v0?templateId=dashboard"
                  demoUrl="https://dashboard-demo.vibeui.com"
                  isPaid={true}
                  price={4900}
                  currency="USD"
                />
                <TemplateCard
                  id="landing-page"
                  title="Landing Page"
                  description="A conversion-focused landing page with hero, features, and CTA sections."
                  image="/placeholder.svg?height=400&width=600"
                  category="Marketing"
                  openInV0Url="https://v0.dev/api/open-in-v0?templateId=landing-page"
                  demoUrl="https://landing-demo.vibeui.com"
                  isPaid={true}
                  price={2900}
                  currency="USD"
                />
                <TemplateCard
                  id="ecommerce"
                  title="E-commerce"
                  description="A product showcase with cart, checkout, and product detail pages."
                  image="/placeholder.svg?height=400&width=600"
                  category="Commerce"
                  openInV0Url="https://v0.dev/api/open-in-v0?templateId=ecommerce"
                  demoUrl="https://ecommerce-demo.vibeui.com"
                  isPaid={true}
                  price={7900}
                  currency="USD"
                />
              </div>
            </div>

            {/* Free Templates */}
            <div className="mt-16">
              <h3 className="text-xl font-semibold mb-6">Free Templates</h3>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <TemplateCard
                  id="blog"
                  title="Blog"
                  description="A clean, minimal blog layout with featured posts and categories."
                  image="/placeholder.svg?height=400&width=600"
                  category="Content"
                  openInV0Url="https://v0.dev/api/open-in-v0?templateId=blog"
                  demoUrl="https://blog-demo.vibeui.com"
                  isPaid={false}
                />
                <TemplateCard
                  id="portfolio"
                  title="Portfolio"
                  description="A creative portfolio to showcase your work with project galleries."
                  image="/placeholder.svg?height=400&width=600"
                  category="Personal"
                  openInV0Url="https://v0.dev/api/open-in-v0?templateId=portfolio"
                  demoUrl="https://portfolio-demo.vibeui.com"
                  isPaid={false}
                />
                <TemplateCard
                  id="documentation"
                  title="Documentation"
                  description="A documentation site with sidebar navigation and search."
                  image="/placeholder.svg?height=400&width=600"
                  category="Developer"
                  openInV0Url="https://v0.dev/api/open-in-v0?templateId=documentation"
                  demoUrl="https://docs-demo.vibeui.com"
                  isPaid={false}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Twitter Testimonials Section */}
        <TwitterTestimonials />

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-[58rem] rounded-2xl bg-gradient-to-br from-violet-500/10 to-indigo-500/10 p-8 text-center shadow-sm md:p-12">
              <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl">
                Ready to build your next project?
              </h2>
              <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
                Browse our templates and start building with v0 today.
              </p>
              <Button className="mt-8" size="lg" asChild>
                <Link href="#templates">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
