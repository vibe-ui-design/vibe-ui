'use client'

import type React from 'react'

import { Button } from '@acme/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@acme/ui/tabs'
import { Textarea } from '@acme/ui/textarea'
import {
  ArrowLeft,
  FileText,
  ImageIcon,
  Loader2,
  Sparkles,
  Upload,
} from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { SiteFooter } from '~/components/site-footer'
import { SiteHeader } from '~/components/site-header'

export default function AIFlowPage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('describe')
  const [projectDescription, setProjectDescription] = useState('')
  const [isUploading, setIsUploading] = useState(false)
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setIsUploading(true)
      // Simulate upload delay
      setTimeout(() => {
        setUploadedImage(URL.createObjectURL(file))
        setIsUploading(false)
      }, 1500)
    }
  }

  const handleAnalyze = () => {
    if (
      (activeTab === 'describe' && !projectDescription) ||
      (activeTab === 'upload' && !uploadedImage)
    ) {
      return
    }

    setIsAnalyzing(true)
    // Simulate analysis delay
    setTimeout(() => {
      // In a real implementation, this would send the description or image to an API
      // and then redirect to the component selection page with pre-selected components
      router.push('/components/select')
    }, 3000)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 bg-black text-white">
        <div className="container py-8">
          <div className="mb-8">
            <Link
              href="/components"
              className="inline-flex items-center text-neutral-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to options
            </Link>
          </div>

          <div className="mx-auto max-w-2xl">
            <h1 className="text-3xl font-bold mb-2">
              AI-Powered Component Selection
            </h1>
            <p className="text-neutral-400 mb-8">
              Let our AI analyze your project idea and automatically select the
              perfect components for your needs.
            </p>

            <Tabs
              defaultValue="describe"
              className="mb-8"
              onValueChange={setActiveTab}
            >
              <TabsList className="grid w-full grid-cols-2 bg-neutral-900 border border-neutral-800">
                <TabsTrigger
                  value="describe"
                  className="data-[state=active]:bg-primary"
                >
                  <FileText className="mr-2 h-4 w-4" />
                  Describe Project
                </TabsTrigger>
                <TabsTrigger
                  value="upload"
                  className="data-[state=active]:bg-primary"
                >
                  <Upload className="mr-2 h-4 w-4" />
                  Upload Screenshot
                </TabsTrigger>
              </TabsList>

              <TabsContent value="describe" className="mt-6">
                <div className="space-y-4">
                  <div>
                    <Textarea
                      placeholder="Describe your project in detail. For example: I need a dashboard for a fitness app with a sidebar navigation, workout tracking cards, progress charts, and a calendar for scheduling."
                      className="min-h-[200px] bg-neutral-900 border-neutral-800 text-white placeholder:text-neutral-500"
                      value={projectDescription}
                      onChange={(e) => setProjectDescription(e.target.value)}
                    />
                  </div>
                  <div className="text-sm text-neutral-400">
                    <p className="mb-2">Tips for better results:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Be specific about the purpose of your project</li>
                      <li>Mention key features and functionality</li>
                      <li>Describe the visual style you prefer</li>
                      <li>Include any specific components you know you need</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="upload" className="mt-6">
                <div className="space-y-4">
                  {!uploadedImage ? (
                    <div className="border-2 border-dashed border-neutral-800 rounded-lg p-12 text-center">
                      <div className="mx-auto w-12 h-12 rounded-full bg-neutral-900 flex items-center justify-center mb-4">
                        <ImageIcon className="h-6 w-6 text-neutral-400" />
                      </div>
                      <h3 className="text-lg font-medium mb-2">
                        Upload a screenshot or mockup
                      </h3>
                      <p className="text-neutral-400 text-sm mb-4">
                        Upload a screenshot, mockup, or design reference and our
                        AI will identify the components needed.
                      </p>
                      <div className="relative">
                        <Button
                          variant="outline"
                          className="relative border-neutral-800"
                          disabled={isUploading}
                        >
                          {isUploading ? (
                            <>
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              Uploading...
                            </>
                          ) : (
                            <>
                              <Upload className="mr-2 h-4 w-4" />
                              Select Image
                            </>
                          )}
                        </Button>
                        <input
                          type="file"
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                          accept="image/*"
                          onChange={handleImageUpload}
                          disabled={isUploading}
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="relative rounded-lg overflow-hidden border border-neutral-800">
                        <img
                          src={uploadedImage || '/placeholder.svg'}
                          alt="Uploaded screenshot"
                          className="w-full h-auto max-h-[300px] object-contain bg-neutral-900"
                        />
                        <Button
                          variant="outline"
                          size="sm"
                          className="absolute top-2 right-2 bg-black/50 backdrop-blur-sm border-neutral-700 hover:bg-black/70"
                          onClick={() => setUploadedImage(null)}
                        >
                          Change Image
                        </Button>
                      </div>
                      <div className="text-sm text-neutral-400">
                        <p>
                          Our AI will analyze this image to identify UI
                          components and layout patterns.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </TabsContent>
            </Tabs>

            <div className="flex justify-end">
              <Button
                onClick={handleAnalyze}
                disabled={
                  isAnalyzing ||
                  (activeTab === 'describe' && !projectDescription) ||
                  (activeTab === 'upload' && !uploadedImage)
                }
                className="bg-primary hover:bg-primary/90"
              >
                {isAnalyzing ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-4 w-4" />
                    Analyze & Select Components
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
