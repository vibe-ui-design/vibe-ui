'use client'

import { Badge } from '@acme/ui/badge'
import { Button } from '@acme/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@acme/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@acme/ui/tabs'
import { Check, Copy, Linkedin, MessageSquare, Twitter } from 'lucide-react'
import { useState } from 'react'
import type { PlatformContent, SocialMediaContent } from '~/types/social-media'

interface SocialMediaResultsProps {
  content: SocialMediaContent
}

export function SocialMediaResults({ content }: SocialMediaResultsProps) {
  const [copiedPlatform, setCopiedPlatform] = useState<string | null>(null)

  const handleCopy = (text: string, platform: string) => {
    navigator.clipboard.writeText(text)
    setCopiedPlatform(platform)
    setTimeout(() => setCopiedPlatform(null), 2000)
  }

  const renderPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'twitter':
        return <Twitter className="h-5 w-5" />
      case 'linkedin':
        return <Linkedin className="h-5 w-5" />
      case 'reddit':
      case 'hackernews':
        return <MessageSquare className="h-5 w-5" />
      default:
        return null
    }
  }

  const renderPlatformContent = (
    platform: string,
    content: PlatformContent,
  ) => {
    return (
      <Card className="mb-6">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <div className="flex items-center space-x-2">
            {renderPlatformIcon(platform)}
            <CardTitle className="text-lg capitalize">{platform}</CardTitle>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleCopy(content.content, platform)}
            className="h-8"
          >
            {copiedPlatform === platform ? (
              <>
                <Check className="h-4 w-4 mr-1" />
                Copied
              </>
            ) : (
              <>
                <Copy className="h-4 w-4 mr-1" />
                Copy
              </>
            )}
          </Button>
        </CardHeader>
        <CardContent>
          <div className="whitespace-pre-wrap mb-3">{content.content}</div>

          {content.hashtags && content.hashtags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {content.hashtags.map((tag, index) => (
                <Badge key={index} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Generated Social Media Posts</CardTitle>
        <CardDescription>
          Tailored content for each platform based on your application details.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="twitter" className="w-full">
          <TabsList className="grid grid-cols-4 mb-4">
            <TabsTrigger
              value="twitter"
              disabled={!content.platforms.includes('twitter')}
            >
              Twitter
            </TabsTrigger>
            <TabsTrigger
              value="linkedin"
              disabled={!content.platforms.includes('linkedin')}
            >
              LinkedIn
            </TabsTrigger>
            <TabsTrigger
              value="reddit"
              disabled={!content.platforms.includes('reddit')}
            >
              Reddit
            </TabsTrigger>
            <TabsTrigger
              value="hackernews"
              disabled={!content.platforms.includes('hackernews')}
            >
              Hacker News
            </TabsTrigger>
          </TabsList>

          {content.platforms.includes('twitter') && (
            <TabsContent value="twitter">
              {renderPlatformContent('twitter', content.twitter)}
            </TabsContent>
          )}

          {content.platforms.includes('linkedin') && (
            <TabsContent value="linkedin">
              {renderPlatformContent('linkedin', content.linkedin)}
            </TabsContent>
          )}

          {content.platforms.includes('reddit') && (
            <TabsContent value="reddit">
              {renderPlatformContent('reddit', content.reddit)}
            </TabsContent>
          )}

          {content.platforms.includes('hackernews') && (
            <TabsContent value="hackernews">
              {renderPlatformContent('hackernews', content.hackernews)}
            </TabsContent>
          )}
        </Tabs>
      </CardContent>
    </Card>
  )
}
