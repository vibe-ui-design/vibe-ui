'use client'

import type React from 'react'

import { Button } from '@acme/ui/button'
import { Input } from '@acme/ui/input'
import { Label } from '@acme/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@acme/ui/select'
import { Textarea } from '@acme/ui/textarea'
import { Loader2, Sparkles } from 'lucide-react'
import { useState } from 'react'
import { generateMetadata } from '~/actions/generate-metadata'

interface MetadataFormProps {
  onSubmit: (metadata: any) => void
  isGenerating: boolean
  setIsGenerating: (isGenerating: boolean) => void
}

export function MetadataForm({
  onSubmit,
  isGenerating,
  setIsGenerating,
}: MetadataFormProps) {
  const [appName, setAppName] = useState('')
  const [appDescription, setAppDescription] = useState('')
  const [targetAudience, setTargetAudience] = useState('')
  const [appType, setAppType] = useState('website')
  const [appUrl, setAppUrl] = useState('')
  const [primaryKeywords, setPrimaryKeywords] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!appName || !appDescription) return

    setIsGenerating(true)
    try {
      const metadata = await generateMetadata({
        appName,
        appDescription,
        targetAudience,
        appType,
        appUrl,
        primaryKeywords,
      })

      onSubmit(metadata)
    } catch (error) {
      console.error('Failed to generate metadata:', error)
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="app-name">
              Application Name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="app-name"
              placeholder="e.g., VibeUI Dashboard"
              value={appName}
              onChange={(e) => setAppName(e.target.value)}
              className="bg-neutral-900 border-neutral-800 text-white placeholder:text-neutral-500"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="app-type">Application Type</Label>
            <Select value={appType} onValueChange={setAppType}>
              <SelectTrigger className="bg-neutral-900 border-neutral-800 text-white">
                <SelectValue placeholder="Select application type" />
              </SelectTrigger>
              <SelectContent className="bg-neutral-900 border-neutral-800 text-white">
                <SelectItem value="website">Website</SelectItem>
                <SelectItem value="web-app">Web Application</SelectItem>
                <SelectItem value="mobile-app">Mobile Application</SelectItem>
                <SelectItem value="saas">SaaS Platform</SelectItem>
                <SelectItem value="e-commerce">E-commerce</SelectItem>
                <SelectItem value="blog">Blog</SelectItem>
                <SelectItem value="portfolio">Portfolio</SelectItem>
                <SelectItem value="landing-page">Landing Page</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="app-description">
            Application Description <span className="text-red-500">*</span>
          </Label>
          <Textarea
            id="app-description"
            placeholder="Describe your application's purpose, features, and benefits..."
            value={appDescription}
            onChange={(e) => setAppDescription(e.target.value)}
            className="min-h-[120px] bg-neutral-900 border-neutral-800 text-white placeholder:text-neutral-500"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="target-audience">Target Audience</Label>
          <Textarea
            id="target-audience"
            placeholder="Describe who your application is for (e.g., developers, designers, small business owners)..."
            value={targetAudience}
            onChange={(e) => setTargetAudience(e.target.value)}
            className="min-h-[80px] bg-neutral-900 border-neutral-800 text-white placeholder:text-neutral-500"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="app-url">Application URL</Label>
            <Input
              id="app-url"
              placeholder="e.g., https://vibeui.com"
              value={appUrl}
              onChange={(e) => setAppUrl(e.target.value)}
              className="bg-neutral-900 border-neutral-800 text-white placeholder:text-neutral-500"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="primary-keywords">Primary Keywords</Label>
            <Input
              id="primary-keywords"
              placeholder="e.g., dashboard, analytics, UI components"
              value={primaryKeywords}
              onChange={(e) => setPrimaryKeywords(e.target.value)}
              className="bg-neutral-900 border-neutral-800 text-white placeholder:text-neutral-500"
            />
            <p className="text-xs text-neutral-500">
              Separate keywords with commas
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <Button
          type="submit"
          disabled={isGenerating || !appName || !appDescription}
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
              Generate Metadata
            </>
          )}
        </Button>
      </div>
    </form>
  )
}
