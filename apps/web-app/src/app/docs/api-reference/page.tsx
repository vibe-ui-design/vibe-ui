import { DocsLayout } from '~/components/docs-layout'

export default function ApiReferencePage() {
  return (
    <DocsLayout>
      <div className="space-y-6">
        <div>
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
            API Reference
          </h1>
          <p className="text-lg text-muted-foreground mt-2">
            Comprehensive documentation for the VibeUI API.
          </p>
        </div>

        <div className="space-y-6">
          <section className="space-y-3">
            <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Overview
            </h2>
            <p>
              The VibeUI API allows you to programmatically access our templates
              and integrate them into your applications. This reference provides
              detailed information about the available endpoints,
              request/response formats, and examples.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Base URL
            </h2>
            <p>All API endpoints are relative to the following base URL:</p>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code>https://vibeui.com/api</code>
            </pre>
          </section>

          <section className="space-y-3">
            <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Authentication
            </h2>
            <p>
              Currently, the API is publicly accessible without authentication.
              Future versions may require API keys for access.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Endpoints
            </h2>

            <div className="space-y-3">
              <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
                List Templates
              </h3>
              <p>Returns a list of available templates.</p>
              <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                <code>GET /templates</code>
              </pre>
              <div className="space-y-2">
                <h4 className="font-medium">Query Parameters</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    <code>category</code> - Filter templates by category
                  </li>
                  <li>
                    <code>tag</code> - Filter templates by tag
                  </li>
                  <li>
                    <code>search</code> - Search templates by name, description,
                    or tags
                  </li>
                  <li>
                    <code>limit</code> - Number of templates to return (default:
                    10)
                  </li>
                  <li>
                    <code>offset</code> - Offset for pagination (default: 0)
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">Response</h4>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                  <code>{`{
  "templates": [
    {
      "id": "dashboard",
      "name": "Analytics Dashboard",
      "description": "A modern analytics dashboard with charts, tables, and stats.",
      "category": "Admin",
      "tags": ["dashboard", "analytics", "charts"],
      "previewUrl": "/templates/dashboard/preview.png",
      "demoUrl": "https://dashboard-demo.vibeui.com",
      "createdAt": "2023-01-01T00:00:00.000Z",
      "updatedAt": "2023-01-01T00:00:00.000Z",
      "isPaid": true,
      "price": 4900,
      "currency": "USD"
    },
    // More templates...
  ],
  "total": 6
}`}</code>
                </pre>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
                Get Template
              </h3>
              <p>Returns detailed information about a specific template.</p>
              <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                <code>GET /templates/:id</code>
              </pre>
              <div className="space-y-2">
                <h4 className="font-medium">Path Parameters</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    <code>id</code> - Template ID
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">Response</h4>
                <p>
                  The response includes all template data, including components,
                  styles, assets, and configuration.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
                Open in v0
              </h3>
              <p>Redirects to v0 with the template data.</p>
              <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                <code>GET /open-in-v0</code>
              </pre>
              <div className="space-y-2">
                <h4 className="font-medium">Query Parameters</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    <code>templateId</code> - Template ID to open in v0
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Error Handling
            </h2>
            <p>
              The API returns standard HTTP status codes to indicate success or
              failure of a request. In case of an error, the response body will
              contain an error object with details.
            </p>
            <div className="space-y-2">
              <h4 className="font-medium">Error Response Format</h4>
              <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                <code>{`{
  "error": "error_code",
  "message": "Human-readable error message",
  "statusCode": 400
}`}</code>
              </pre>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Common Error Codes</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  <code>bad_request</code> - The request was invalid
                </li>
                <li>
                  <code>not_found</code> - The requested resource was not found
                </li>
                <li>
                  <code>internal_server_error</code> - An unexpected error
                  occurred
                </li>
              </ul>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Examples
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
                  Example: List all templates in the "Admin" category
                </h3>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                  <code>
                    curl -X GET
                    "https://vibeui.com/api/templates?category=Admin"
                  </code>
                </pre>
              </div>
              <div>
                <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
                  Example: Get a specific template
                </h3>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                  <code>
                    curl -X GET "https://vibeui.com/api/templates/dashboard"
                  </code>
                </pre>
              </div>
              <div>
                <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
                  Example: Open a template in v0
                </h3>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                  <code>
                    // Redirect the user to this URL
                    https://vibeui.com/api/open-in-v0?templateId=dashboard
                  </code>
                </pre>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Next Steps
            </h2>
            <p>
              For more detailed information about specific endpoints, check out:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <a
                  href="/docs/api-reference/templates"
                  className="text-primary underline"
                >
                  Templates API
                </a>{' '}
                - Detailed documentation for the templates endpoints
              </li>
              <li>
                <a
                  href="/docs/api-reference/open-in-v0"
                  className="text-primary underline"
                >
                  Open in v0 API
                </a>{' '}
                - Detailed documentation for the open-in-v0 endpoint
              </li>
            </ul>
          </section>
        </div>
      </div>
    </DocsLayout>
  )
}
