'use client'

import { Button } from '@acme/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@acme/ui/card'
import { AlertCircle, Home, RefreshCw } from 'lucide-react'
import { useEffect } from 'react'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Global error:', error)
  }, [error])

  return (
    <div className="container flex items-center justify-center min-h-screen p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="space-y-1 text-center">
          <div className="flex justify-center mb-4">
            <div className="p-3 rounded-full bg-red-100 text-red-600">
              <AlertCircle size={32} />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold">Critical Error</CardTitle>
          <CardDescription>
            The application encountered a critical error
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="p-3 bg-red-50 border border-red-200 rounded-md text-red-800 text-sm">
            <p>Error Reference: {error.digest}</p>
            <p className="mt-1">
              Please try refreshing the page or return to the homepage.
            </p>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row justify-between gap-3">
          <Button onClick={() => reset()} className="w-full sm:w-auto">
            <RefreshCw className="mr-2 h-4 w-4" /> Refresh
          </Button>
          <Button
            variant="outline"
            onClick={() => {
              window.location.href = '/'
            }}
            className="w-full sm:w-auto"
          >
            <Home className="mr-2 h-4 w-4" /> Home
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
