import Link from 'next/link'
import { DocsLayout } from '~/components/docs-layout'

export default function ConfigurationPage() {
  return (
    <DocsLayout>
      <div className="space-y-8">
        <div className="flex items-center text-sm text-neutral-400">
          <Link href="/docs" className="hover:text-white">
            Docs
          </Link>
          <span className="mx-2">›</span>
          <span className="text-white">Configuration</span>
        </div>

        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">Configuration</h1>
          <p className="text-xl text-neutral-400">
            Learn how to configure VibeUI templates to match your needs.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight">
            Tailwind CSS Configuration
          </h2>
          <p>
            VibeUI templates use Tailwind CSS for styling. You can customize the
            appearance by modifying the tailwind.config.js file.
          </p>

          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-lg font-medium">Colors</h3>
              <p className="text-neutral-400">
                Customize the color scheme by modifying the colors section in
                the tailwind.config.js file:
              </p>
              <div className="bg-neutral-900 border border-neutral-800 rounded-md p-3 font-mono text-sm overflow-x-auto">
                <pre>{`// tailwind.config.js
module.exports = {
  // ...
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        // Add or modify colors here
      },
    },
  },
  // ...
}`}</pre>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-medium">CSS Variables</h3>
              <p className="text-neutral-400">
                VibeUI templates use CSS variables for theming. You can
                customize these variables in the globals.css file:
              </p>
              <div className="bg-neutral-900 border border-neutral-800 rounded-md p-3 font-mono text-sm overflow-x-auto">
                <pre>{`/* globals.css */
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 262.1 83.3% 57.8%;
  --primary-foreground: 210 40% 98%;
  /* Add or modify variables here */
}

.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  --primary: 262.1 83.3% 57.8%;
  --primary-foreground: 210 40% 98%;
  /* Add or modify dark mode variables here */
}`}</pre>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">
            Next.js Configuration
          </h2>
          <p className="text-neutral-400">
            You can customize the Next.js configuration by modifying the
            next.config.js file:
          </p>
          <div className="bg-neutral-900 border border-neutral-800 rounded-md p-3 font-mono text-sm overflow-x-auto">
            <pre>{`// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add your custom Next.js configuration here
  images: {
    domains: ['example.com'], // Add domains for remote images
  },
  // Other configuration options
}

module.exports = nextConfig`}</pre>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">
            Template-Specific Configuration
          </h2>
          <p className="text-neutral-400">
            Each template may have specific configuration options. These are
            typically documented in the template's README file.
          </p>

          <div className="space-y-4">
            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Dashboard Template</h3>
              <p className="text-neutral-400">
                The Dashboard template includes configuration for charts, data
                sources, and layout options.
              </p>
              <Link
                href="/docs/templates/dashboard"
                className="text-white underline underline-offset-4 hover:text-neutral-300"
              >
                View Dashboard Configuration
              </Link>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">E-commerce Template</h3>
              <p className="text-neutral-400">
                The E-commerce template includes configuration for product data,
                payment providers, and shipping options.
              </p>
              <Link
                href="/docs/templates/ecommerce"
                className="text-white underline underline-offset-4 hover:text-neutral-300"
              >
                View E-commerce Configuration
              </Link>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Blog Template</h3>
              <p className="text-neutral-400">
                The Blog template includes configuration for content sources,
                categories, and author information.
              </p>
              <Link
                href="/docs/templates/blog"
                className="text-white underline underline-offset-4 hover:text-neutral-300"
              >
                View Blog Configuration
              </Link>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">
            Environment Variables
          </h2>
          <p className="text-neutral-400">
            Some templates may require environment variables for API keys,
            database connections, or other configuration.
          </p>
          <p className="text-neutral-400">
            Create a .env.local file in the root of your project and add the
            required variables:
          </p>
          <div className="bg-neutral-900 border border-neutral-800 rounded-md p-3 font-mono text-sm overflow-x-auto">
            <pre>{`# .env.local
DATABASE_URL=your-database-url
API_KEY=your-api-key
# Add other environment variables as needed`}</pre>
          </div>
          <p className="text-sm text-neutral-500">
            Note: Never commit your .env.local file to version control. Add it
            to your .gitignore file.
          </p>
        </div>
      </div>
    </DocsLayout>
  )
}
