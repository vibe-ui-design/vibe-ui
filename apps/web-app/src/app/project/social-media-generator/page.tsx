'use client'

import { Card, CardContent } from '@acme/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@acme/ui/tabs'
import { Loader2 } from 'lucide-react'
import { useState } from 'react'
import { generateSocialMediaPosts } from '~/actions/generate-social-media-posts'
import { SocialMediaExperiments } from '~/components/social-media-experiments'
import { SocialMediaForm } from '~/components/social-media-form'
import { SocialMediaRecommendations } from '~/components/social-media-recommendations'
import { SocialMediaResults } from '~/components/social-media-results'
import type { PlatformType, SocialMediaContent } from '~/types/social-media'

export default function SocialMediaGenerator() {
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedContent, setGeneratedContent] =
    useState<SocialMediaContent | null>(null)
  const [activeTab, setActiveTab] = useState('input')

  const handleSubmit = async (formData: FormData) => {
    setIsGenerating(true)
    try {
      const result = await generateSocialMediaPosts(formData)
      setGeneratedContent(result)
      setActiveTab('results')
    } catch (error) {
      console.error('Error generating social media posts:', error)
    } finally {
      setIsGenerating(false)
    }
  }

  const handleExperimentGenerate = async (
    platform: PlatformType,
    variation: string,
  ) => {
    if (!generatedContent) return

    setIsGenerating(true)
    try {
      // We'll implement this later - it would generate a variation for a specific platform
      // For now, we'll just simulate a delay
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Create a copy of the current content and modify the specified platform
      const updatedContent = { ...generatedContent }
      if (platform === 'twitter') {
        updatedContent.twitter.variations = [
          ...(updatedContent.twitter.variations || []),
          { content: `${variation} #experiment`, id: Date.now().toString() },
        ]
      } else if (platform === 'linkedin') {
        updatedContent.linkedin.variations = [
          ...(updatedContent.linkedin.variations || []),
          { content: `${variation} #experiment`, id: Date.now().toString() },
        ]
      } else if (platform === 'reddit') {
        updatedContent.reddit.variations = [
          ...(updatedContent.reddit.variations || []),
          { content: `${variation} #experiment`, id: Date.now().toString() },
        ]
      } else if (platform === 'hackernews') {
        updatedContent.hackernews.variations = [
          ...(updatedContent.hackernews.variations || []),
          { content: `${variation} #experiment`, id: Date.now().toString() },
        ]
      }

      setGeneratedContent(updatedContent)
    } catch (error) {
      console.error('Error generating experiment:', error)
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">
          Social Media Post Generator
        </h1>
        <p className="text-muted-foreground">
          Generate tailored social media posts for multiple platforms based on
          your application details.
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-3 w-full max-w-md">
          <TabsTrigger value="input">Input</TabsTrigger>
          <TabsTrigger value="results" disabled={!generatedContent}>
            Results
          </TabsTrigger>
          <TabsTrigger value="experiments" disabled={!generatedContent}>
            Experiments
          </TabsTrigger>
        </TabsList>

        <TabsContent value="input" className="mt-6">
          <SocialMediaForm
            onSubmit={handleSubmit}
            isGenerating={isGenerating}
          />
        </TabsContent>

        <TabsContent value="results" className="mt-6">
          {generatedContent ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-6">
                <SocialMediaResults content={generatedContent} />
              </div>
              <div>
                <SocialMediaRecommendations
                  recommendations={generatedContent.recommendations}
                />
              </div>
            </div>
          ) : (
            <Card>
              <CardContent className="pt-6 flex justify-center items-center min-h-[200px]">
                <p className="text-muted-foreground">
                  Generate content first to see results
                </p>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="experiments" className="mt-6">
          {generatedContent ? (
            <SocialMediaExperiments
              content={generatedContent}
              onGenerateVariation={handleExperimentGenerate}
              isGenerating={isGenerating}
            />
          ) : (
            <Card>
              <CardContent className="pt-6 flex justify-center items-center min-h-[200px]">
                <p className="text-muted-foreground">
                  Generate content first to experiment
                </p>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>

      {isGenerating && (
        <div className="fixed inset-0 bg-background/80 flex items-center justify-center z-50">
          <div className="flex flex-col items-center gap-2">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <p className="text-sm text-muted-foreground">
              Generating social media content...
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
