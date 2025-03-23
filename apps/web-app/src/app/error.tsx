'use client'

import { Alert, AlertDescription, AlertTitle } from '@acme/ui/alert'
import { Button } from '@acme/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@acme/ui/card'
import { Label } from '@acme/ui/label'
import { Separator } from '@acme/ui/separator'
import { Textarea } from '@acme/ui/textarea'
import { AlertCircle, Home, RefreshCw, Send } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const [errorCode] = useState(
    `ERR-${Math.random().toString(36).substring(2, 10).toUpperCase()}`,
  )
  const [showReportForm, setShowReportForm] = useState(false)
  const [reportSent, setReportSent] = useState(false)
  const [errorDetails, setErrorDetails] = useState('')

  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error)
  }, [error])

  const handleReport = () => {
    // Simulate sending the error report
    setTimeout(() => {
      setReportSent(true)
      // Reset after 3 seconds
      setTimeout(() => {
        setShowReportForm(false)
        setReportSent(false)
      }, 3000)
    }, 1000)
  }

  return (
    <div className="w-full mx-auto container flex items-center justify-center min-h-[80vh] px-4 py-8">
      <Card className="w-full max-w-2xl shadow-lg">
        <CardHeader className="space-y-1 text-center">
          <div className="flex justify-center mb-4">
            <div className="p-3 rounded-full bg-red-100 text-red-600 dark:bg-red-900/20 dark:text-red-400">
              <AlertCircle size={32} />
            </div>
          </div>
          <CardTitle className="text-3xl font-bold">
            Something went wrong
          </CardTitle>
          <CardDescription className="text-lg">
            We've encountered an unexpected error
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert
            variant="destructive"
            className="border-red-300 dark:border-red-800"
          >
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error Reference: {errorCode}</AlertTitle>
            <AlertDescription>
              {error?.message ||
                'An unexpected error occurred while processing your request.'}
            </AlertDescription>
          </Alert>

          <div className="space-y-2">
            <h3 className="text-lg font-medium">What you can do:</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Try refreshing the page</li>
              <li>Return to the homepage and try again</li>
              <li>Report this issue to our support team</li>
            </ul>
          </div>

          {showReportForm && !reportSent ? (
            <div className="space-y-3 mt-4 p-4 border rounded-md bg-muted/50">
              <Label htmlFor="error-details">
                Additional details (optional)
              </Label>
              <Textarea
                id="error-details"
                placeholder="What were you trying to do when this error occurred?"
                value={errorDetails}
                onChange={(e) => setErrorDetails(e.target.value)}
                className="min-h-[100px]"
              />
              <div className="flex justify-end space-x-2">
                <Button
                  variant="outline"
                  onClick={() => setShowReportForm(false)}
                >
                  Cancel
                </Button>
                <Button onClick={handleReport}>
                  <Send className="mr-2 h-4 w-4" /> Send Report
                </Button>
              </div>
            </div>
          ) : reportSent ? (
            <Alert className="bg-green-100 text-green-800 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800">
              <AlertTitle>Report Sent</AlertTitle>
              <AlertDescription>
                Thank you for reporting this issue. Our team will look into it.
              </AlertDescription>
            </Alert>
          ) : null}
        </CardContent>

        <Separator />

        <CardFooter className="flex flex-col sm:flex-row justify-between gap-3 pt-6">
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <Button onClick={() => reset()} className="w-full sm:w-auto">
              <RefreshCw className="mr-2 h-4 w-4" /> Try Again
            </Button>
            <Button variant="outline" asChild className="w-full sm:w-auto">
              <Link href="/">
                <Home className="mr-2 h-4 w-4" /> Back to Home
              </Link>
            </Button>
          </div>

          {!showReportForm && !reportSent && (
            <Button
              variant="secondary"
              onClick={() => setShowReportForm(true)}
              className="w-full sm:w-auto"
            >
              Report Issue
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  )
}
