import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import type { Metadata, Viewport } from 'next'
import { cookies } from 'next/headers'
import { NuqsAdapter } from 'nuqs/adapters/next/app'

import { AnalyticsProviders } from '@acme/analytics/providers'
import { ThemeProvider } from '@acme/ui/custom/theme'
import { cn } from '@acme/ui/lib/utils'
import { SidebarProvider } from '@acme/ui/sidebar'
import { Toaster } from '@acme/ui/sonner'

import '@acme/ui/globals.css'

import { ClerkProvider } from '@clerk/nextjs'

import { TRPCReactProvider } from '@acme/api/client'
import { env } from '~/env.server'

export const metadata: Metadata = {
  description:
    'VibeUI is a modern, accessible UI component library built with React and Tailwind',
  metadataBase: new URL(
    env.VERCEL_ENV === 'production'
      ? 'https://vibe-ui.vercel.app'
      : 'http://localhost:3000',
  ),
  openGraph: {
    description:
      'VibeUI is a modern, accessible UI component library built with React and Tailwind',
    siteName: 'VibeUI',
    title: 'VibeUI',
    url: 'https://vibe-ui.vercel.app',
  },
  title: 'VibeUI',
  twitter: {
    card: 'summary_large_image',
    creator: '@seawatts',
    site: '@seawatts',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { color: 'white', media: '(prefers-color-scheme: light)' },
    { color: 'black', media: '(prefers-color-scheme: dark)' },
  ],
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const cookieStore = await cookies()
  const defaultOpen = cookieStore.get('sidebar:state')?.value === 'true'

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'bg-background text-foreground relative min-h-screen font-sans antialiased',
          GeistSans.variable,
          GeistMono.variable,
        )}
      >
        <NuqsAdapter>
          <TRPCReactProvider>
            <ClerkProvider>
              <AnalyticsProviders identifyUser>
                <ThemeProvider
                  attribute="class"
                  defaultTheme="dark"
                  enableSystem
                >
                  <SidebarProvider defaultOpen={defaultOpen}>
                    {/* <AppSidebar /> */}
                    <main className="flex-1">{props.children}</main>
                  </SidebarProvider>
                  <Toaster />
                </ThemeProvider>
              </AnalyticsProviders>
            </ClerkProvider>
          </TRPCReactProvider>
        </NuqsAdapter>
      </body>
    </html>
  )
}
