import Link from 'next/link'
import { DocsLayout } from '~/components/docs-layout'

export default function InstallationPage() {
  return (
    <DocsLayout>
      <div className="space-y-8">
        <div className="flex items-center text-sm text-neutral-400">
          <Link href="/docs" className="hover:text-white">
            Docs
          </Link>
          <span className="mx-2">›</span>
          <span className="text-white">Installation</span>
        </div>

        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">Installation</h1>
          <p className="text-xl text-neutral-400">
            How to install dependencies and structure your app.
          </p>
        </div>

        <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
          <div className="flex items-start">
            <div className="font-medium mr-2">Note:</div>
            <div>
              We have the exact same installation process as{' '}
              <a
                href="https://ui.shadcn.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline underline-offset-4 hover:text-neutral-300"
              >
                shadcn/ui
              </a>
              .
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight">Frameworks</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/docs/frameworks/nextjs"
              className="bg-neutral-900 border border-neutral-800 rounded-lg p-8 flex flex-col items-center justify-center text-center hover:bg-neutral-800 transition-colors"
            >
              <div className="w-16 h-16 mb-4 flex items-center justify-center">
                <svg viewBox="0 0 180 180" className="w-12 h-12">
                  <mask
                    height="180"
                    id=":R0:mask0_408_134"
                    style={{ maskType: 'alpha' }}
                    width="180"
                    x="0"
                    y="0"
                  >
                    <circle cx="90" cy="90" fill="black" r="90"></circle>
                  </mask>
                  <g mask="url(#:R0:mask0_408_134)">
                    <circle cx="90" cy="90" fill="black" r="90"></circle>
                    <path
                      d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
                      fill="url(#:R0:paint0_linear_408_134)"
                    ></path>
                    <rect
                      fill="url(#:R0:paint1_linear_408_134)"
                      height="72"
                      width="12"
                      x="115"
                      y="54"
                    ></rect>
                  </g>
                  <defs>
                    <linearGradient
                      gradientUnits="userSpaceOnUse"
                      id=":R0:paint0_linear_408_134"
                      x1="109"
                      x2="144.5"
                      y1="116.5"
                      y2="160.5"
                    >
                      <stop stopColor="white"></stop>
                      <stop offset="1" stopColor="white" stopOpacity="0"></stop>
                    </linearGradient>
                    <linearGradient
                      gradientUnits="userSpaceOnUse"
                      id=":R0:paint1_linear_408_134"
                      x1="121"
                      x2="120.799"
                      y1="54"
                      y2="106.875"
                    >
                      <stop stopColor="white"></stop>
                      <stop offset="1" stopColor="white" stopOpacity="0"></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <h3 className="text-xl font-medium">Next.js</h3>
            </Link>

            <Link
              href="/docs/frameworks/vite"
              className="bg-neutral-900 border border-neutral-800 rounded-lg p-8 flex flex-col items-center justify-center text-center hover:bg-neutral-800 transition-colors"
            >
              <div className="w-16 h-16 mb-4 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 256 257"
                  className="w-12 h-12"
                >
                  <defs>
                    <linearGradient
                      id="viteGradient"
                      x1="-.828%"
                      x2="57.636%"
                      y1="7.652%"
                      y2="78.411%"
                    >
                      <stop offset="0%" stopColor="#41D1FF" />
                      <stop offset="100%" stopColor="#BD34FE" />
                    </linearGradient>
                  </defs>
                  <path
                    fill="url(#viteGradient)"
                    d="M255.153 37.938L134.897 252.976c-2.483 4.44-8.862 4.466-11.382.048L.875 37.958c-2.746-4.814 1.371-10.646 6.827-9.67l120.385 21.517a6.537 6.537 0 0 0 2.322-.004l117.867-21.483c5.438-.991 9.574 4.796 6.877 9.62Z"
                  />
                  <path
                    fill="white"
                    d="M185.432.063L96.44 17.501a3.268 3.268 0 0 0-2.634 3.014l-5.474 92.456a3.268 3.268 0 0 0 3.997 3.378l24.777-5.718c2.318-.535 4.413 1.507 3.936 3.838l-7.361 36.047c-.495 2.426 1.782 4.5 4.151 3.78l15.304-4.649c2.372-.72 4.652 1.36 4.15 3.788l-11.698 56.621c-.732 3.542 3.979 5.473 5.943 2.437l1.313-2.028l72.516-144.72c1.215-2.423-.88-5.186-3.54-4.672l-25.505 4.922c-2.396.462-4.435-1.77-3.759-4.114l16.646-57.705c.677-2.35-1.37-4.583-3.769-4.113Z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-medium">Vite</h3>
            </Link>

            <Link
              href="/docs/frameworks/remix"
              className="bg-neutral-900 border border-neutral-800 rounded-lg p-8 flex flex-col items-center justify-center text-center hover:bg-neutral-800 transition-colors"
            >
              <div className="w-16 h-16 mb-4 flex items-center justify-center">
                <svg
                  viewBox="0 0 256 256"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-12 h-12"
                >
                  <path
                    d="M178.681 49.326c10.22 11.565 15.333 24.291 16.334 38.478 1.001 14.187-2.164 27.358-9.495 39.515-7.331 12.156-17.39 21.206-30.176 27.15-12.786 5.944-26.424 7.78-40.913 5.506-14.489-2.273-27.086-8.44-37.792-18.5-10.706-10.06-17.39-22.216-20.053-36.467-2.663-14.25-.77-28.106 5.677-41.567 6.447-13.46 16.334-23.52 29.66-30.176 13.327-6.657 27.358-8.982 42.095-6.976 14.737 2.006 27.358 8.17 37.792 18.5l-15.333 17.339c-6.976-7.331-15.333-11.565-25.097-12.732-9.765-1.167-18.747.27-26.964 4.313-8.216 4.043-14.663 10.06-19.323 18.054-4.66 7.993-6.326 16.82-4.998 26.48 1.328 9.658 5.37 18.054 12.126 25.168 6.757 7.115 14.934 11.565 24.537 13.327 9.603 1.762 18.932.432 27.962-3.99 9.03-4.421 15.983-11.051 20.863-19.89 4.88-8.838 6.326-18.392 4.34-28.682-1.986-10.29-7.115-18.932-15.333-25.904l15.333-16.334Z"
                    fill="white"
                  />
                  <path
                    d="M178.681 49.326 163.348 65.66c-8.218-6.972-17.663-10.29-28.358-9.954-10.695.337-19.647 4.313-26.857 11.929-7.21 7.615-11.186 16.658-11.929 27.128-.743 10.47 2.164 19.647 8.723 27.532 6.56 7.885 15.09 12.732 25.59 14.54 10.502 1.81 20.188-.27 29.06-6.237 8.87-5.968 14.547-14.187 17.03-24.657l19.323 5.677c-3.99 15.983-12.732 28.358-26.226 37.124-13.495 8.766-28.682 11.929-45.561 9.495-16.88-2.434-30.907-10.06-42.084-22.878-11.176-12.818-16.658-27.777-16.443-44.877.216-17.1 6.048-31.82 17.496-44.156C95.56 33.992 109.747 26.66 126.627 24.903c16.88-1.758 32.19 2.164 45.9 11.765 13.712 9.602 22.89 22.334 27.532 38.14l-20.053 5.677c-2.92-11.176-8.597-20.188-17.03-27.02-8.432-6.83-18.19-10.06-29.223-9.684-11.032.377-20.323 4.34-27.872 11.889-7.55 7.55-11.512 16.82-11.889 27.812-.377 10.993 2.92 20.323 9.891 27.992 6.972 7.669 15.983 12.463 27.035 14.382 11.051 1.92 21.072-.27 30.06-6.56 8.989-6.291 14.8-14.934 17.443-25.928l-41.567-12.126 5.677-19.323 60.89 17.803c-3.99 15.983-12.732 28.358-26.226 37.124-13.495 8.766-28.682 11.929-45.561 9.495-16.88-2.434-30.907-10.06-42.084-22.878-11.176-12.818-16.658-27.777-16.443-44.877.216-17.1 6.048-31.82 17.496-44.156C95.56 33.992 109.747 26.66 126.627 24.903c16.88-1.758 32.19 2.164 45.9 11.765 13.712 9.602 22.89 22.334 27.532 38.14l-20.053 5.677c-2.92-11.176-8.597-20.188-17.03-27.02-8.432-6.83-18.19-10.06-29.223-9.684-11.032.377-20.323 4.34-27.872 11.889-7.55 7.55-11.512 16.82-11.889 27.812-.377 10.993 2.92 20.323 9.891 27.992 6.972 7.669 15.983 12.463 27.035 14.382 11.051 1.92 21.072-.27 30.06-6.56 8.989-6.291 14.8-14.934 17.443-25.928l-41.567-12.126 5.677-19.323 60.89 17.803-10.83 36.467-18.5-5.677c-2.92 10.47-8.597 18.69-17.03 24.657-8.432 5.968-18.12 8.047-29.06 6.237-10.94-1.81-19.647-6.657-26.124-14.54-6.476-7.885-9.468-17.063-8.982-27.532.486-10.47 4.505-19.513 12.056-27.128 7.55-7.615 16.658-11.592 27.324-11.929 10.666-.337 19.89 2.98 27.662 9.954l15.333-16.334Z"
                    fill="white"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-medium">Remix</h3>
            </Link>

            <Link
              href="/docs/frameworks/astro"
              className="bg-neutral-900 border border-neutral-800 rounded-lg p-8 flex flex-col items-center justify-center text-center hover:bg-neutral-800 transition-colors"
            >
              <div className="w-16 h-16 mb-4 flex items-center justify-center">
                <svg
                  viewBox="0 0 256 366"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-12 h-12"
                >
                  <path
                    d="M182.022 9.147c2.982 3.702 4.502 8.697 7.543 18.687L256 246.074a276.467 276.467 0 0 0-79.426-26.891L133.318 73.008a5.63 5.63 0 0 0-10.802.016L79.784 219.22A276.453 276.453 0 0 0 0 246.04L66.76 27.834c3.051-9.972 4.58-14.967 7.559-18.669 2.636-3.267 5.946-5.847 9.707-7.569C88.001 0 93.37 0 104.11 0h47.734c10.738 0 16.108 0 20.095 1.596a27.29 27.29 0 0 1 10.083 7.551Z"
                    fill="white"
                  />
                  <path
                    d="M189.721 256.01c-6.651 5.924-20.509 10.143-36.404 10.143-24.096 0-43.769-10.334-44.215-23.029-.105-2.95 1.938-5.76 5.166-8.084-10.164 2.296-16.72 6.648-17.071 12.58-.465 7.858 12.322 15.003 32.035 17.47 4.98.624 10.226.95 15.656.95 17.871 0 37.388-3.02 51.787-8.85-1.825-.95-4.134-1.596-6.954-1.18Z"
                    fill="white"
                  />
                  <path
                    d="M153.317 266.153c-24.096 0-43.769-10.334-44.215-23.029-.105-2.95 1.938-5.76 5.166-8.084 3.486-2.522 8.443-4.668 14.437-6.342 7.454-2.082 16.258-3.221 25.673-3.221 9.414 0 18.219 1.139 25.673 3.221 5.994 1.674 10.951 3.82 14.437 6.342 3.228 2.324 5.271 5.134 5.166 8.084-.446 12.695-20.119 23.029-44.215 23.029h-2.122Z"
                    fill="white"
                  />
                  <path
                    d="M180.99 234.94c0 9.15-12.358 16.57-27.602 16.57-15.244 0-27.603-7.42-27.603-16.57 0-9.15 12.359-16.57 27.603-16.57 15.244 0 27.603 7.42 27.603 16.57Z"
                    fill="white"
                  />
                  <path
                    d="M127.552 365.327c-32.35 0-62.121-2.926-84.025-7.776-12.041-2.674-21.92-5.972-28.664-9.634-7.044-3.824-10.863-7.809-10.863-11.818 0-4.01 3.819-7.994 10.863-11.818 6.744-3.662 16.623-6.96 28.664-9.634 21.904-4.85 51.675-7.776 84.025-7.776 32.35 0 62.121 2.926 84.025 7.776 12.041 2.674 21.92 5.972 28.664 9.634 7.044 3.824 10.863 7.809 10.863 11.818 0 4.01-3.819 7.994-10.863 11.818-6.744 3.662-16.623 6.96-28.664 9.634-21.904 4.85-51.675 7.776-84.025 7.776Z"
                    fill="white"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-medium">Astro</h3>
            </Link>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight">
            Manual Installation
          </h2>

          <p>
            You can install VibeUI templates manually by following these steps:
          </p>

          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-lg font-medium">1. Clone the Repository</h3>
              <div className="bg-neutral-900 border border-neutral-800 rounded-md p-3 font-mono text-sm">
                git clone https://github.com/vibeui/templates.git
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-medium">
                2. Navigate to the Template Directory
              </h3>
              <div className="bg-neutral-900 border border-neutral-800 rounded-md p-3 font-mono text-sm">
                cd templates/[template-name]
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-medium">3. Install Dependencies</h3>
              <div className="bg-neutral-900 border border-neutral-800 rounded-md p-3 font-mono text-sm">
                npm install
              </div>
              <div className="bg-neutral-900 border border-neutral-800 rounded-md p-3 font-mono text-sm">
                # or if you use yarn yarn
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-medium">
                4. Run the Development Server
              </h3>
              <div className="bg-neutral-900 border border-neutral-800 rounded-md p-3 font-mono text-sm">
                npm run dev
              </div>
              <div className="bg-neutral-900 border border-neutral-800 rounded-md p-3 font-mono text-sm">
                # or if you use yarn yarn dev
              </div>
            </div>
          </div>
        </div>
      </div>
    </DocsLayout>
  )
}
