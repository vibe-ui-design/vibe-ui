import { DocsLayout } from '~/components/docs-layout'

export default function ConfigurationPage() {
  return (
    <DocsLayout>
      <div className="space-y-6">
        <div>
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
            Configuration
          </h1>
          <p className="text-lg text-muted-foreground mt-2">
            Learn how to configure VibeUI templates to match your needs.
          </p>
        </div>

        <div className="space-y-6">
          <section className="space-y-3">
            <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Tailwind CSS Configuration
            </h2>
            <p>
              VibeUI templates use Tailwind CSS for styling. You can customize
              the appearance by modifying the tailwind.config.js file.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
                  Colors
                </h3>
                <p>
                  Customize the color scheme by modifying the colors section in
                  the tailwind.config.js file:
                </p>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                  <code>{`// tailwind.config.js
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
}`}</code>
                </pre>
              </div>
              <div>
                <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
                  CSS Variables
                </h3>
                <p>
                  VibeUI templates use CSS variables for theming. You can
                  customize these variables in the globals.css file:
                </p>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                  <code>{`/* globals.css */
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
}`}</code>
                </pre>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Next.js Configuration
            </h2>
            <p>
              You can customize the Next.js configuration by modifying the
              next.config.js file:
            </p>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code>{`// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add your custom Next.js configuration here
  images: {
    domains: ['example.com'], // Add domains for remote images
  },
  // Other configuration options
}

module.exports = nextConfig`}</code>
            </pre>
          </section>

          <section className="space-y-3">
            <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Template-Specific Configuration
            </h2>
            <p>
              Each template may have specific configuration options. These are
              typically documented in the template's README file.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
                  Dashboard Template
                </h3>
                <p>
                  The Dashboard template includes configuration for charts, data
                  sources, and layout options.
                </p>
              </div>
              <div>
                <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
                  E-commerce Template
                </h3>
                <p>
                  The E-commerce template includes configuration for product
                  data, payment providers, and shipping options.
                </p>
              </div>
              <div>
                <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
                  Blog Template
                </h3>
                <p>
                  The Blog template includes configuration for content sources,
                  categories, and author information.
                </p>
              </div>
            </div>
            <p>
              For detailed configuration options for each template, see the{' '}
              <a href="/docs/templates" className="text-primary underline">
                Templates
              </a>{' '}
              section.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Environment Variables
            </h2>
            <p>
              Some templates may require environment variables for API keys,
              database connections, or other configuration.
            </p>
            <p>
              Create a .env.local file in the root of your project and add the
              required variables:
            </p>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code>{`# .env.local
DATABASE_URL=your-database-url
API_KEY=your-api-key
# Add other environment variables as needed`}</code>
            </pre>
            <p className="text-sm text-muted-foreground">
              Note: Never commit your .env.local file to version control. Add it
              to your .gitignore file.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Next Steps
            </h2>
            <p>After configuring your template, you can:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Learn about{' '}
                <a
                  href="/docs/templates/customization"
                  className="text-primary underline"
                >
                  customization techniques
                </a>
              </li>
              <li>
                Explore{' '}
                <a href="/docs/integration" className="text-primary underline">
                  integration options
                </a>
              </li>
              <li>
                Check out the{' '}
                <a
                  href="/docs/troubleshooting"
                  className="text-primary underline"
                >
                  troubleshooting guide
                </a>{' '}
                if you encounter issues
              </li>
            </ul>
          </section>
        </div>
      </div>
    </DocsLayout>
  )
}
