import { DocsLayout } from '~/components/docs-layout'

export default function GettingStartedPage() {
  return (
    <DocsLayout>
      <div className="space-y-6">
        <div>
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
            Getting Started
          </h1>
          <p className="text-lg text-muted-foreground mt-2">
            Learn how to get started with VibeUI templates.
          </p>
        </div>

        <div className="space-y-6">
          <section className="space-y-3">
            <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Overview
            </h2>
            <p>
              VibeUI provides a collection of modern, responsive templates
              designed to be customized with v0. Our templates are built with
              Next.js and Tailwind CSS, making them easy to customize and
              extend.
            </p>
            <p>
              Whether you're building a personal blog, a portfolio site, or a
              complex dashboard, VibeUI has templates to help you get started
              quickly.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Prerequisites
            </h2>
            <p>
              Before you start using VibeUI templates, make sure you have the
              following:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>A v0 account for customizing templates</li>
              <li>
                Basic knowledge of Next.js and React (for advanced
                customization)
              </li>
              <li>
                Node.js and npm/yarn installed on your machine (for local
                development)
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Template Types
            </h2>
            <p>VibeUI offers two types of templates:</p>
            <div className="space-y-4">
              <div>
                <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
                  Free Templates
                </h3>
                <p>
                  Our free templates provide basic designs for common use cases.
                  They're perfect for personal projects, learning, or simple
                  websites.
                </p>
              </div>
              <div>
                <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
                  Premium Templates
                </h3>
                <p>
                  Premium templates offer more advanced designs, components, and
                  features. They're ideal for professional projects, businesses,
                  and complex applications.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Next Steps
            </h2>
            <p>Now that you understand the basics, you can:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Learn how to{' '}
                <a
                  href="/docs/getting-started/installation"
                  className="text-primary underline"
                >
                  install templates
                </a>
              </li>
              <li>
                Explore{' '}
                <a
                  href="/docs/templates/customization"
                  className="text-primary underline"
                >
                  customization options
                </a>
              </li>
              <li>
                Check out the{' '}
                <a
                  href="/docs/api-reference"
                  className="text-primary underline"
                >
                  API reference
                </a>{' '}
                for programmatic access
              </li>
            </ul>
          </section>
        </div>
      </div>
    </DocsLayout>
  )
}
