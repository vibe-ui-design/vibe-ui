import { Button } from '@acme/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { DocsLayout } from '~/components/docs-layout'

export default function DocsPage() {
  return (
    <DocsLayout>
      <div className="space-y-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">Introduction</h1>
          <p className="text-xl text-neutral-400">
            Welcome to the VibeUI documentation.
          </p>
        </div>

        <div className="space-y-4">
          <p>
            VibeUI provides a collection of modern, responsive templates
            designed to be customized with v0. Our templates are built with
            Next.js and Tailwind CSS, making them easy to customize and extend.
          </p>

          <p>
            Whether you're building a personal blog, a portfolio site, or a
            complex dashboard, VibeUI has templates to help you get started
            quickly.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Getting Started</h2>

          <p>To get started with VibeUI templates, follow these steps:</p>

          <div className="space-y-4">
            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">1. Browse Templates</h3>
              <p className="text-neutral-400">
                Explore our collection of free and premium templates to find the
                one that best suits your project needs.
              </p>
              <Button
                asChild
                variant="outline"
                className="mt-4 bg-transparent text-white border-neutral-700 hover:bg-neutral-800 hover:text-white"
              >
                <Link href="/#templates">
                  Browse Templates <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">2. Install</h3>
              <p className="text-neutral-400">
                Follow our installation guide to set up the template in your
                project.
              </p>
              <Button
                asChild
                variant="outline"
                className="mt-4 bg-transparent text-white border-neutral-700 hover:bg-neutral-800 hover:text-white"
              >
                <Link href="/docs/installation">
                  Installation Guide <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">3. Customize</h3>
              <p className="text-neutral-400">
                Customize the template to match your brand and requirements
                using v0's AI-powered interface.
              </p>
              <Button
                asChild
                variant="outline"
                className="mt-4 bg-transparent text-white border-neutral-700 hover:bg-neutral-800 hover:text-white"
              >
                <Link href="/docs/configuration">
                  Configuration Guide <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Features</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Modern Design</h3>
              <p className="text-neutral-400">
                Clean, modern designs that follow the latest web design trends
                and best practices.
              </p>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Responsive</h3>
              <p className="text-neutral-400">
                All templates are fully responsive and work on all devices, from
                mobile to desktop.
              </p>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Customizable</h3>
              <p className="text-neutral-400">
                Easy to customize with v0's AI-powered interface or manually
                with code.
              </p>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">SEO Friendly</h3>
              <p className="text-neutral-400">
                Built with SEO best practices in mind to help your site rank
                better in search engines.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">
            Template Categories
          </h2>

          <div className="space-y-4">
            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Free Templates</h3>
              <p className="text-neutral-400">
                Our free templates provide basic designs for common use cases.
                They're perfect for personal projects, learning, or simple
                websites.
              </p>
              <Button
                asChild
                variant="outline"
                className="mt-4 bg-transparent text-white border-neutral-700 hover:bg-neutral-800 hover:text-white"
              >
                <Link href="/docs/templates/blog">
                  View Free Templates <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Premium Templates</h3>
              <p className="text-neutral-400">
                Premium templates offer more advanced designs, components, and
                features. They're ideal for professional projects, businesses,
                and complex applications.
              </p>
              <Button
                asChild
                variant="outline"
                className="mt-4 bg-transparent text-white border-neutral-700 hover:bg-neutral-800 hover:text-white"
              >
                <Link href="/docs/templates/dashboard">
                  View Premium Templates <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </DocsLayout>
  )
}
