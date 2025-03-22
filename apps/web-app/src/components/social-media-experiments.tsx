'use client'

import { Button } from '@acme/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@acme/ui/card'
import { TabsList, TabsTrigger } from '@acme/ui/tabs'
import { Textarea } from '@acme/ui/textarea'
import { Check, Copy, Loader2, RefreshCw } from 'lucide-react'
import { useState } from 'react'
import type {
  PlatformContent,
  PlatformType,
  SocialMediaContent,
} from '~/types/social-media'

interface SocialMediaExperimentsProps {
  content: SocialMediaContent
  onGenerateVariation: (
    platform: PlatformType,
    variation: string,
  ) => Promise<void>
  isGenerating: boolean
}

export function SocialMediaExperiments({
  content,
  onGenerateVariation,
  isGenerating,
}: SocialMediaExperimentsProps) {
  const [selectedPlatform, setSelectedPlatform] =
    useState<PlatformType>('twitter')
  const [experimentPrompt, setExperimentPrompt] = useState('')
  const [copiedVariation, setCopiedVariation] = useState<string | null>(null)

  const handleGenerateVariation = async () => {
    if (!experimentPrompt.trim()) return
    await onGenerateVariation(selectedPlatform, experimentPrompt)
    setExperimentPrompt('')
  }

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopiedVariation(id)
    setTimeout(() => setCopiedVariation(null), 2000)
  }

  const getPlatformContent = (platform: PlatformType): PlatformContent => {
    switch (platform) {
      case 'twitter':
        return content.twitter
      case 'linkedin':
        return content.linkedin
      case 'reddit':
        return content.reddit
      case 'hackernews':
        return content.hackernews
    }
  }

  const renderVariations = (platform: PlatformType) => {
    const platformContent = getPlatformContent(platform)
    const variations = platformContent.variations || []

    if (variations.length === 0) {
      return (
        <div className="text-center py-8 text-muted-foreground">
          <p>No variations yet. Generate some experiments!</p>
        </div>
      )
    }

    return (
      <div className="space-y-4">
        {variations.map((variation) => (
          <Card key={variation.id} className="relative">
            <CardContent className="pt-6">
              <div className="whitespace-pre-wrap mb-3">
                {variation.content}
              </div>

              <div className="flex justify-end space-x-2 mt-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleCopy(variation.content, variation.id)}
                >
                  {copiedVariation === variation.id ? (
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
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Create Experiments</CardTitle>
          <CardDescription>
            Test different variations of your social media posts to optimize
            engagement.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Select Platform</label>
            <TabsList className="w-full">
              {content.platforms.map((platform) => (
                <TabsTrigger
                  key={platform}
                  value={platform}
                  onClick={() => setSelectedPlatform(platform as PlatformType)}
                  className="capitalize"
                >
                  {platform}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Experiment Prompt</label>
            <Textarea
              placeholder="e.g., Make it more casual, focus on benefits, add a question, etc."
              value={experimentPrompt}
              onChange={(e) => setExperimentPrompt(e.target.value)}
              className="min-h-[100px]"
            />
          </div>

          <Button
            onClick={handleGenerateVariation}
            disabled={isGenerating || !experimentPrompt.trim()}
            className="w-full"
          >
            {isGenerating ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <RefreshCw className="mr-2 h-4 w-4" />
                Generate Variation
              </>
            )}
          </Button>

          <div className="pt-4 border-t text-sm text-muted-foreground">
            <p>
              <strong>Experiment Ideas:</strong>
            </p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Try different tones (professional, casual, enthusiastic)</li>
              <li>Focus on different benefits or features</li>
              <li>Ask engaging questions</li>
              <li>Include a call to action</li>
              <li>Test different hashtag combinations</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Variations</CardTitle>
          <CardDescription>
            Compare different versions of your posts for {selectedPlatform}.
          </CardDescription>
        </CardHeader>
        <CardContent>{renderVariations(selectedPlatform)}</CardContent>
      </Card>
    </div>
  )
}
