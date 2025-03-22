import { ArrowLeft, Home, Search } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@acme/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@acme/ui/card'

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center p-4 md:p-8">
      <Card className="mx-auto max-w-md border-primary/10 shadow-lg">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
            <span className="font-mono text-4xl font-bold text-primary">
              404
            </span>
          </div>
          <h1 className="text-2xl font-bold tracking-tight">Page not found</h1>
          <p className="text-muted-foreground">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
        </CardHeader>
        <CardContent className="flex flex-col items-center">
          <div className="relative my-6 h-[180px] w-full overflow-hidden rounded-md">
            <div className="absolute inset-0 flex items-center justify-center bg-muted/30">
              <svg
                className="h-full w-full text-muted-foreground/20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <title>404</title>
                <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-7v2h2v-2h-2zm0-8v6h2V7h-2z" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <p className="text-lg font-medium">Looking for something?</p>
                <p className="text-sm text-muted-foreground">
                  We couldn't find the page you requested
                </p>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-2 sm:flex-row">
          <Button asChild className="w-full" variant="default">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <Button asChild className="w-full" variant="outline">
            <Link href="/project">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Projects
            </Link>
          </Button>
          <Button asChild className="w-full" variant="outline">
            <Link href="/components">
              <Search className="mr-2 h-4 w-4" />
              Components
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
