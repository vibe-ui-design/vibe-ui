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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@acme/ui/tabs'
import { Textarea } from '@acme/ui/textarea'
import { ArrowRight, Copy, Loader2, RefreshCw, Sparkles } from 'lucide-react'
import { useState } from 'react'
import { generatePrompt } from '~/actions/generate-prompt'
import { SelectedComponentsList } from '~/components/selected-components-list'
import { useSelectedRegistryItems } from '~/context/selected-components-context'

export function PromptGenerator() {
  const { selectedRegistryItems } = useSelectedRegistryItems()
  const [projectDescription, setProjectDescription] = useState('')
  const [generatedPrompt, setGeneratedPrompt] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [copied, setCopied] = useState(false)
  const [activeTab, setActiveTab] = useState('description')

  const handleGeneratePrompt = async () => {
    if (!projectDescription.trim()) return

    setIsGenerating(true)
    try {
      const prompt = await generatePrompt(
        projectDescription,
        selectedRegistryItems,
      )
      setGeneratedPrompt(prompt)
      setActiveTab('prompt')
    } catch (error) {
      console.error('Failed to generate prompt:', error)
    } finally {
      setIsGenerating(false)
    }
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedPrompt)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-neutral-900 border border-neutral-800">
            <TabsTrigger value="description">Project Description</TabsTrigger>
            <TabsTrigger value="prompt" disabled={!generatedPrompt}>
              Generated Prompt
            </TabsTrigger>
          </TabsList>

          <TabsContent value="description" className="mt-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <h2 className="text-xl font-semibold">Describe Your Project</h2>
                <p className="text-sm text-neutral-400">
                  Provide details about your project, including its purpose,
                  target audience, key features, and any specific design
                  preferences.
                </p>
              </div>

              <Textarea
                placeholder="E.g., I'm building a dashboard for a fitness tracking app. It should display workout statistics, progress charts, and allow users to set goals. The design should be modern and motivational with a dark theme."
                className="min-h-[200px] bg-neutral-900 border-neutral-800 text-white placeholder:text-neutral-500"
                value={projectDescription}
                onChange={(e) => setProjectDescription(e.target.value)}
              />

              <div className="flex justify-end">
                <Button
                  onClick={handleGeneratePrompt}
                  disabled={isGenerating || !projectDescription.trim()}
                  className="bg-primary hover:bg-primary/90"
                >
                  {isGenerating ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Sparkles className="mr-2 h-4 w-4" />
                      Generate Prompt
                    </>
                  )}
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="prompt" className="mt-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <h2 className="text-xl font-semibold">Generated Prompt</h2>
                  <p className="text-sm text-neutral-400">
                    Copy this prompt and use it with v0 to generate your
                    project.
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-neutral-800 bg-transparent text-white hover:bg-neutral-800 hover:text-white"
                    onClick={() => {
                      setActiveTab('description')
                      setGeneratedPrompt('')
                    }}
                  >
                    <RefreshCw className="mr-2 h-4 w-4" />
                    Start Over
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-neutral-800 bg-transparent text-white hover:bg-neutral-800 hover:text-white"
                    onClick={handleCopy}
                  >
                    {copied ? (
                      <>
                        <span className="mr-2">✓</span>
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="mr-2 h-4 w-4" />
                        Copy Prompt
                      </>
                    )}
                  </Button>
                </div>
              </div>

              <div className="rounded-lg border border-neutral-800 bg-neutral-900 p-4">
                <pre className="whitespace-pre-wrap text-sm text-neutral-300 overflow-auto max-h-[400px]">
                  {generatedPrompt}
                </pre>
              </div>

              <div className="flex justify-end">
                <Button
                  onClick={() => window.open('https://v0.dev', '_blank')}
                  className="bg-primary hover:bg-primary/90"
                >
                  Open in v0 <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <div className="lg:col-span-1">
        <Card className="bg-neutral-900 border-neutral-800 text-white">
          <CardHeader>
            <CardTitle>Selected Components</CardTitle>
            <CardDescription className="text-neutral-400">
              Components to include in your project
            </CardDescription>
          </CardHeader>
          <CardContent>
            <SelectedComponentsList />
          </CardContent>
          <CardFooter className="flex justify-between border-t border-neutral-800 pt-4">
            <div className="text-sm text-neutral-400">
              {selectedRegistryItems.length} component
              {selectedRegistryItems.length !== 1 ? 's' : ''} selected
            </div>
            <Button
              variant="outline"
              size="sm"
              asChild
              className="border-neutral-800 bg-transparent text-white hover:bg-neutral-800 hover:text-white"
            >
              <a href="/components/select">Select Components</a>
            </Button>
          </CardFooter>
        </Card>

        <Card className="bg-neutral-900 border-neutral-800 text-white mt-6">
          <CardHeader>
            <CardTitle>Prompt Tips</CardTitle>
            <CardDescription className="text-neutral-400">
              How to get better results
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-medium">Be Specific</h3>
              <p className="text-sm text-neutral-400">
                Include details about layout, colors, functionality, and user
                interactions.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">Mention Use Cases</h3>
              <p className="text-sm text-neutral-400">
                Describe how users will interact with your project.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">Specify Design Style</h3>
              <p className="text-sm text-neutral-400">
                Mention design preferences like minimalist, colorful,
                professional, etc.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
