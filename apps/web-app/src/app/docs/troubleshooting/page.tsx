import { DocsLayout } from '~/components/docs-layout'

export default function TroubleshootingPage() {
  return (
    <DocsLayout>
      <div className="space-y-6">
        <div>
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
            Troubleshooting
          </h1>
          <p className="text-lg text-muted-foreground mt-2">
            Solutions to common issues and problems.
          </p>
        </div>

        <div className="space-y-6">
          <section className="space-y-3">
            <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Installation Issues
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
                  Dependencies Installation Fails
                </h3>
                <p>
                  If you encounter issues installing dependencies, try the
                  following:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Clear your npm cache: <code>npm cache clean --force</code>
                  </li>
                  <li>Use a specific Node.js version (v18+ recommended)</li>
                  <li>
                    Check for conflicting dependencies in your package.json
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
                  Next.js Build Errors
                </h3>
                <p>If you encounter errors during the Next.js build process:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Make sure you're using a compatible Node.js version</li>
                  <li>Check for missing dependencies in your package.json</li>
                  <li>
                    Verify that all required environment variables are set
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Styling Issues
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
                  Tailwind CSS Styles Not Applied
                </h3>
                <p>If Tailwind CSS styles are not being applied correctly:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Verify that your tailwind.config.js includes all necessary
                    paths in the content array
                  </li>
                  <li>
                    Check that you've imported the globals.css file in your
                    layout.tsx
                  </li>
                  <li>Make sure you're using the correct class names</li>
                </ul>
              </div>
              <div>
                <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
                  Dark Mode Not Working
                </h3>
                <p>If dark mode is not working correctly:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Verify that you've set up the ThemeProvider correctly in
                    your layout.tsx
                  </li>
                  <li>
                    Check that your tailwind.config.js includes{' '}
                    <code>darkMode: ["class"]</code>
                  </li>
                  <li>
                    Make sure your CSS variables for dark mode are defined
                    correctly in globals.css
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              API Issues
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
                  API Endpoints Return 404
                </h3>
                <p>If API endpoints are returning 404 errors:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Verify that you're using the correct API base URL</li>
                  <li>Check that the endpoint path is correct</li>
                  <li>Make sure the API server is running</li>
                </ul>
              </div>
              <div>
                <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
                  Authentication Errors
                </h3>
                <p>If you're experiencing authentication errors:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Verify that you're signed in</li>
                  <li>Check that your session is valid</li>
                  <li>Make sure you have the necessary permissions</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Template-Specific Issues
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
                  Dashboard Template
                </h3>
                <p>Common issues with the Dashboard template:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Charts not rendering: Make sure you've installed the
                    recharts dependency
                  </li>
                  <li>
                    Data not loading: Check your data sources and API endpoints
                  </li>
                  <li>
                    Layout issues: Verify that you're using the correct grid
                    classes
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
                  E-commerce Template
                </h3>
                <p>Common issues with the E-commerce template:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Product images not loading: Check your image paths and
                    domains
                  </li>
                  <li>
                    Checkout not working: Verify your Stripe configuration
                  </li>
                  <li>
                    Cart functionality issues: Check your cart state management
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              v0 Integration Issues
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
                  "Open in v0" Not Working
                </h3>
                <p>If the "Open in v0" functionality is not working:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Verify that you're using the correct v0 URL</li>
                  <li>Check that the template ID is valid</li>
                  <li>Make sure you have access to the template</li>
                </ul>
              </div>
              <div>
                <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
                  Customization Not Saving
                </h3>
                <p>If your customizations in v0 are not being saved:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Make sure you're signed in to v0</li>
                  <li>Check your browser's local storage</li>
                  <li>Try refreshing the page</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Getting Help
            </h2>
            <p>
              If you're still experiencing issues, you can get help through the
              following channels:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                GitHub Issues:{' '}
                <a
                  href="https://github.com/vibeui/templates/issues"
                  className="text-primary underline"
                >
                  https://github.com/vibeui/templates/issues
                </a>
              </li>
              <li>
                Discord Community:{' '}
                <a
                  href="https://discord.gg/vibeui"
                  className="text-primary underline"
                >
                  https://discord.gg/vibeui
                </a>
              </li>
              <li>
                Email Support:{' '}
                <a
                  href="mailto:support@vibeui.com"
                  className="text-primary underline"
                >
                  support@vibeui.com
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </DocsLayout>
  )
}
