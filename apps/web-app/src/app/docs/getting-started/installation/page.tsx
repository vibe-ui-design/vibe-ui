import { DocsLayout } from '~/components/docs-layout'

export default function InstallationPage() {
  return (
    <DocsLayout>
      <div className="space-y-6">
        <div>
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
            Installation
          </h1>
          <p className="text-lg text-muted-foreground mt-2">
            Learn how to install and set up VibeUI templates.
          </p>
        </div>

        <div className="space-y-6">
          <section className="space-y-3">
            <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Using v0
            </h2>
            <p>
              The easiest way to use VibeUI templates is through v0's AI-powered
              interface.
            </p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>
                Browse the templates on the{' '}
                <a href="/#templates" className="text-primary underline">
                  VibeUI website
                </a>
              </li>
              <li>
                Click the "Open in v0" button on the template you want to use
              </li>
              <li>Customize the template using v0's interface</li>
              <li>
                Export the customized template to your local machine or deploy
                it directly
              </li>
            </ol>
          </section>

          <section className="space-y-3">
            <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Manual Installation
            </h2>
            <p>
              If you prefer to work with the templates directly, you can install
              them manually:
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
                  1. Clone the Repository
                </h3>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                  <code>git clone https://github.com/vibeui/templates.git</code>
                </pre>
              </div>
              <div>
                <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
                  2. Navigate to the Template Directory
                </h3>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                  <code>cd templates/[template-name]</code>
                </pre>
              </div>
              <div>
                <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
                  3. Install Dependencies
                </h3>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                  <code>npm install</code>
                </pre>
                <p className="text-sm text-muted-foreground mt-2">
                  or if you use yarn:
                </p>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                  <code>yarn</code>
                </pre>
              </div>
              <div>
                <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
                  4. Run the Development Server
                </h3>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                  <code>npm run dev</code>
                </pre>
                <p className="text-sm text-muted-foreground mt-2">
                  or if you use yarn:
                </p>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                  <code>yarn dev</code>
                </pre>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Using with Next.js
            </h2>
            <p>To use VibeUI templates in an existing Next.js project:</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>
                Copy the components, styles, and assets from the template to
                your project
              </li>
              <li>Install the required dependencies</li>
              <li>
                Update your tailwind.config.js to include the template's
                configuration
              </li>
              <li>Import and use the components in your pages</li>
            </ol>
            <p>
              For detailed instructions, see the{' '}
              <a
                href="/docs/integration/nextjs"
                className="text-primary underline"
              >
                Next.js Integration
              </a>{' '}
              guide.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Next Steps
            </h2>
            <p>After installation, you can:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Learn about{' '}
                <a
                  href="/docs/getting-started/configuration"
                  className="text-primary underline"
                >
                  configuration options
                </a>
              </li>
              <li>
                Explore{' '}
                <a
                  href="/docs/templates/customization"
                  className="text-primary underline"
                >
                  customization techniques
                </a>
              </li>
              <li>
                Check out the{' '}
                <a href="/docs/templates" className="text-primary underline">
                  templates documentation
                </a>{' '}
                for specific template details
              </li>
            </ul>
          </section>
        </div>
      </div>
    </DocsLayout>
  )
}
