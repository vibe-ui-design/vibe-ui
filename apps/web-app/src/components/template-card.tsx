'use client'

import { ExternalLink, Lock } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
// import { useAuth } from "@clerk/nextjs"

import { Badge } from '@acme/ui/badge'
import { Button } from '@acme/ui/button'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@acme/ui/card'
import { PricingBadge } from '~/components/pricing-badge'

interface TemplateCardProps {
  id: string
  title: string
  description: string
  image: string
  category: string
  openInV0Url: string
  demoUrl: string
  isPaid: boolean
  price?: number
  currency?: string
}

export function TemplateCard({
  id,
  title,
  description,
  image,
  category,
  openInV0Url,
  demoUrl,
  isPaid,
  price,
  currency,
}: TemplateCardProps) {
  // const { isSignedIn, userId } = useAuth()
  // Temporary fallbacks while Clerk is commented out
  const isSignedIn = false
  const userId = null

  const [hasPurchased, setHasPurchased] = useState(false)
  const [isCheckingPurchase, setIsCheckingPurchase] = useState(false)

  useEffect(() => {
    if (isPaid && isSignedIn && userId) {
      setIsCheckingPurchase(true)
      // Mock check for purchase - in a real app, this would be an API call
      setTimeout(() => {
        // For demo purposes, assume user has purchased if ID ends with 'M'
        // setHasPurchased(userId.endsWith('M'))
        setIsCheckingPurchase(false)
      }, 500)
    }
  }, [isPaid, isSignedIn, userId])

  const handlePurchaseClick = async () => {
    if (!isSignedIn) {
      // Redirect to sign in page
      // window.location.href = `/sign-in?redirect_url=${encodeURIComponent(`/templates/${id}`)}`
      alert('Sign in functionality is currently disabled for preview')
      return
    }

    // In a real app, this would create a checkout session
    alert('This would redirect to Stripe checkout in a real application')
  }

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={image || '/placeholder.svg?height=400&width=600'}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute left-3 top-3 flex gap-2">
          <Badge>{category}</Badge>
          {isPaid && <PricingBadge price={price} currency={currency} />}
        </div>
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter className="flex flex-col gap-2 sm:flex-row">
        <Button asChild variant="outline" className="w-full">
          <Link href={demoUrl} target="_blank" rel="noreferrer">
            View Live Demo <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        {isPaid && !hasPurchased ? (
          <Button
            className="w-full"
            onClick={handlePurchaseClick}
            disabled={isCheckingPurchase}
          >
            {isCheckingPurchase ? 'Checking...' : 'Purchase Template'}
          </Button>
        ) : (
          <Button asChild className="w-full">
            <Link href={openInV0Url} target="_blank" rel="noreferrer">
              {isPaid && <Lock className="mr-2 h-4 w-4" />}
              Open in v0 <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
