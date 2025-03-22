'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@acme/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@acme/ui/tabs'
import { useState } from 'react'
import { MetadataForm } from '~/components/metadata-form'
import { MetadataResults } from '~/components/metadata-results'
import { SiteFooter } from '~/components/site-footer'
import { SiteHeader } from '~/components/site-header'

export default function MetadataGeneratorPage() {
  const [generatedMetadata, setGeneratedMetadata] = useState<any>(null)
  const [isGenerating, setIsGenerating] = useState(false)

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 bg-black text-white">
        <div className="container py-12">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">
              Metadata & Open Graph Generator
            </h1>
            <p className="text-neutral-400">
              Generate optimized metadata and Open Graph tags for your
              application using AI.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Tabs
                defaultValue={generatedMetadata ? 'results' : 'input'}
                className="w-full"
              >
                <TabsList className="grid w-full grid-cols-2 bg-neutral-900 border border-neutral-800">
                  <TabsTrigger value="input">Input Details</TabsTrigger>
                  <TabsTrigger value="results" disabled={!generatedMetadata}>
                    Generated Metadata
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="input" className="mt-6">
                  <MetadataForm
                    onSubmit={(metadata) => setGeneratedMetadata(metadata)}
                    isGenerating={isGenerating}
                    setIsGenerating={setIsGenerating}
                  />
                </TabsContent>

                <TabsContent value="results" className="mt-6">
                  {generatedMetadata && (
                    <MetadataResults
                      metadata={generatedMetadata}
                      onUpdate={(updatedMetadata) =>
                        setGeneratedMetadata(updatedMetadata)
                      }
                    />
                  )}
                </TabsContent>
              </Tabs>
            </div>

            <div className="lg:col-span-1">
              <Card className="bg-neutral-900 border-neutral-800 text-white">
                <CardHeader>
                  <CardTitle>About Metadata & OG Tags</CardTitle>
                  <CardDescription className="text-neutral-400">
                    Why they matter for your application
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-medium">Improved SEO</h3>
                    <p className="text-sm text-neutral-400">
                      Proper metadata helps search engines understand and rank
                      your content, improving visibility.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-medium">Better Social Sharing</h3>
                    <p className="text-sm text-neutral-400">
                      Open Graph tags control how your content appears when
                      shared on social media platforms.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-medium">Enhanced User Experience</h3>
                    <p className="text-sm text-neutral-400">
                      Clear, descriptive metadata helps users understand what
                      your page is about before they click.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-medium">
                      Increased Click-Through Rates
                    </h3>
                    <p className="text-sm text-neutral-400">
                      Compelling titles and descriptions can significantly
                      improve click-through rates from search results and social
                      media.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-neutral-900 border-neutral-800 text-white mt-6">
                <CardHeader>
                  <CardTitle>Tips for Effective Metadata</CardTitle>
                  <CardDescription className="text-neutral-400">
                    How to optimize your metadata
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-medium">Keep Titles Concise</h3>
                    <p className="text-sm text-neutral-400">
                      Aim for 50-60 characters for title tags to ensure they
                      display properly in search results.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-medium">
                      Write Compelling Descriptions
                    </h3>
                    <p className="text-sm text-neutral-400">
                      Create descriptions under 160 characters that accurately
                      summarize content and include a call to action.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-medium">Use High-Quality Images</h3>
                    <p className="text-sm text-neutral-400">
                      For OG images, use dimensions of 1200×630 pixels for
                      optimal display across platforms.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-medium">Include Relevant Keywords</h3>
                    <p className="text-sm text-neutral-400">
                      Incorporate important keywords naturally in your titles
                      and descriptions.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
