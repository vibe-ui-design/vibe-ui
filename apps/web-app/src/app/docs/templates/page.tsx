import { Badge } from '@acme/ui/badge'
import { Button } from '@acme/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@acme/ui/card'
import Link from 'next/link'
import { DocsLayout } from '~/components/docs-layout'

export default function TemplatesPage() {
  return (
    <DocsLayout>
      <div className="space-y-6">
        <div>
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
            Templates
          </h1>
          <p className="text-lg text-muted-foreground mt-2">
            Explore our collection of free and premium templates.
          </p>
        </div>

        <div className="space-y-6">
          <section className="space-y-3">
            <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Overview
            </h2>
            <p>
              VibeUI offers a variety of templates for different use cases. Each
              template is designed to be customizable and responsive, providing
              a solid foundation for your projects.
            </p>
            <p>
              Our templates are built with Next.js and Tailwind CSS, making them
              easy to customize and extend.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Free Templates
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Blog</CardTitle>
                    <Badge variant="outline">Free</Badge>
                  </div>
                  <CardDescription>
                    A clean, minimal blog layout with featured posts and
                    categories.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    Perfect for personal blogs, news sites, or any
                    content-focused website.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/docs/templates/free#blog">Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Portfolio</CardTitle>
                    <Badge variant="outline">Free</Badge>
                  </div>
                  <CardDescription>
                    A creative portfolio to showcase your work with project
                    galleries.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    Ideal for designers, photographers, artists, and other
                    creative professionals.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/docs/templates/free#portfolio">
                      Learn More
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Documentation</CardTitle>
                    <Badge variant="outline">Free</Badge>
                  </div>
                  <CardDescription>
                    A documentation site with sidebar navigation and search.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    Perfect for product documentation, guides, and knowledge
                    bases.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/docs/templates/free#documentation">
                      Learn More
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Premium Templates
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Dashboard</CardTitle>
                    <Badge>Premium</Badge>
                  </div>
                  <CardDescription>
                    A modern analytics dashboard with charts, tables, and stats.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    Ideal for admin panels, analytics dashboards, and data
                    visualization.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/docs/templates/premium#dashboard">
                      Learn More
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Landing Page</CardTitle>
                    <Badge>Premium</Badge>
                  </div>
                  <CardDescription>
                    A conversion-focused landing page with hero, features, and
                    CTA sections.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    Perfect for product launches, marketing campaigns, and
                    business websites.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/docs/templates/premium#landing-page">
                      Learn More
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>E-commerce</CardTitle>
                    <Badge>Premium</Badge>
                  </div>
                  <CardDescription>
                    A product showcase with cart, checkout, and product detail
                    pages.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    Ideal for online stores, marketplaces, and digital product
                    sales.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/docs/templates/premium#ecommerce">
                      Learn More
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Template Structure
            </h2>
            <p>All VibeUI templates follow a consistent structure:</p>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code>{`template-name/
├── app/              # Next.js app directory
│   ├── layout.tsx    # Root layout
│   ├── page.tsx      # Home page
│   └── ...           # Other pages and routes
├── components/       # Reusable components
│   ├── ui/           # UI components (buttons, cards, etc.)
│   └── ...           # Other components
├── lib/              # Utility functions and helpers
├── public/           # Static assets
├── styles/           # Global styles
├── next.config.js    # Next.js configuration
├── tailwind.config.js # Tailwind CSS configuration
└── package.json      # Dependencies and scripts`}</code>
            </pre>
          </section>

          <section className="space-y-3">
            <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Next Steps
            </h2>
            <p>To learn more about specific templates, check out:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <a
                  href="/docs/templates/free"
                  className="text-primary underline"
                >
                  Free Templates
                </a>{' '}
                - Detailed documentation for free templates
              </li>
              <li>
                <a
                  href="/docs/templates/premium"
                  className="text-primary underline"
                >
                  Premium Templates
                </a>{' '}
                - Detailed documentation for premium templates
              </li>
              <li>
                <a
                  href="/docs/templates/customization"
                  className="text-primary underline"
                >
                  Customization
                </a>{' '}
                - Learn how to customize templates
              </li>
            </ul>
          </section>
        </div>
      </div>
    </DocsLayout>
  )
}
