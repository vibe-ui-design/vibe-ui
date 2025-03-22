'use client'

import { CheckCircle } from 'lucide-react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

import { Button } from '@acme/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@acme/ui/card'

export default function PurchaseSuccessPage() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session_id')
  const [templateId, setTemplateId] = useState<string | null>(null)
  const [templateName, setTemplateName] = useState<string | null>(null)

  useEffect(() => {
    if (sessionId) {
      // Extract template ID from session ID (mock implementation)
      const extractedId = sessionId.replace('mock_session_', '')
      setTemplateId(extractedId)

      // Set template name based on ID (mock implementation)
      const names: Record<string, string> = {
        dashboard: 'Analytics Dashboard',
        'landing-page': 'Landing Page',
        ecommerce: 'E-commerce',
      }
      setTemplateName(names[extractedId] || 'Unknown Template')
    }
  }, [sessionId])

  return (
    <div className="container flex items-center justify-center min-h-screen py-12">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <CheckCircle className="h-16 w-16 text-green-500" />
          </div>
          <CardTitle className="text-2xl">Purchase Successful!</CardTitle>
          <CardDescription>
            Thank you for your purchase. Your template is now ready to use.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {templateId && templateName ? (
            <div className="space-y-4">
              <div className="rounded-lg bg-muted p-4">
                <div className="text-sm font-medium">Template</div>
                <div className="text-lg font-bold">{templateName}</div>
              </div>
              <p className="text-sm text-muted-foreground">
                You now have full access to this template. You can open it in v0
                and start customizing it right away.
              </p>
            </div>
          ) : (
            <div className="text-center text-amber-500 py-4">
              Purchase verification pending. If this persists, please contact
              support.
            </div>
          )}
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          {templateId && (
            <Button asChild className="w-full">
              <Link href={`/api/open-in-v0?templateId=${templateId}`}>
                Open Template in v0
              </Link>
            </Button>
          )}
          <Button asChild variant="outline" className="w-full">
            <Link href="/">Return to Home</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
