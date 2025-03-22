'use client'

import { Button } from '@acme/ui/button'
import { Input } from '@acme/ui/input'
import { Label } from '@acme/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@acme/ui/tabs'
import { Textarea } from '@acme/ui/textarea'
import { Check, Copy, Edit2, ExternalLink, Save } from 'lucide-react'
import { useState } from 'react'

interface MetadataResultsProps {
  metadata: {
    title: string
    description: string
    keywords: string[]
    ogTitle: string
    ogDescription: string
    ogImage: string
    ogUrl: string
    ogType: string
    twitterCard: string
    twitterTitle: string
    twitterDescription: string
    twitterImage: string
  }
  onUpdate: (metadata: any) => void
}

export function MetadataResults({ metadata, onUpdate }: MetadataResultsProps) {
  const [activeTab, setActiveTab] = useState('preview')
  const [editMode, setEditMode] = useState(false)
  const [editedMetadata, setEditedMetadata] = useState({ ...metadata })
  const [copiedField, setCopiedField] = useState<string | null>(null)

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text)
    setCopiedField(field)
    setTimeout(() => setCopiedField(null), 2000)
  }

  const handleSaveEdits = () => {
    onUpdate(editedMetadata)
    setEditMode(false)
  }

  const handleChange = (field: string, value: string) => {
    setEditedMetadata({
      ...editedMetadata,
      [field]: value,
    })
  }

  const handleKeywordsChange = (value: string) => {
    setEditedMetadata({
      ...editedMetadata,
      keywords: value
        .split(',')
        .map((k) => k.trim())
        .filter((k) => k),
    })
  }

  // Generate HTML code for the metadata
  const generateHtmlCode = () => {
    return `<!-- Basic Metadata -->
<title>${metadata.title}</title>
<meta name="description" content="${metadata.description}" />
<meta name="keywords" content="${metadata.keywords.join(', ')}" />

<!-- Open Graph / Facebook -->
<meta property="og:type" content="${metadata.ogType}" />
<meta property="og:url" content="${metadata.ogUrl}" />
<meta property="og:title" content="${metadata.ogTitle}" />
<meta property="og:description" content="${metadata.ogDescription}" />
<meta property="og:image" content="${metadata.ogImage}" />

<!-- Twitter -->
<meta property="twitter:card" content="${metadata.twitterCard}" />
<meta property="twitter:url" content="${metadata.ogUrl}" />
<meta property="twitter:title" content="${metadata.twitterTitle}" />
<meta property="twitter:description" content="${metadata.twitterDescription}" />
<meta property="twitter:image" content="${metadata.twitterImage}" />`
  }

  // Generate JSON-LD structured data
  const generateJsonLd = () => {
    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': metadata.ogType === 'website' ? 'WebSite' : 'WebApplication',
      name: metadata.title,
      description: metadata.description,
      url: metadata.ogUrl,
      image: metadata.ogImage,
      keywords: metadata.keywords.join(', '),
    }

    return JSON.stringify(jsonLd, null, 2)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Generated Metadata</h2>
        <Button
          variant="outline"
          size="sm"
          onClick={() => (editMode ? handleSaveEdits() : setEditMode(true))}
          className="border-neutral-800 bg-transparent text-white hover:bg-neutral-800 hover:text-white"
        >
          {editMode ? (
            <>
              <Save className="mr-2 h-4 w-4" />
              Save Changes
            </>
          ) : (
            <>
              <Edit2 className="mr-2 h-4 w-4" />
              Edit Metadata
            </>
          )}
        </Button>
      </div>

      <Tabs defaultValue="preview" onValueChange={setActiveTab}>
        <TabsList className="bg-neutral-900 border border-neutral-800">
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="html">HTML Code</TabsTrigger>
          <TabsTrigger value="json-ld">JSON-LD</TabsTrigger>
        </TabsList>

        <TabsContent value="preview" className="mt-4 space-y-6">
          {editMode ? (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="edit-title">Title Tag</Label>
                <Input
                  id="edit-title"
                  value={editedMetadata.title}
                  onChange={(e) => handleChange('title', e.target.value)}
                  className="bg-neutral-900 border-neutral-800 text-white"
                />
                <p className="text-xs text-neutral-500">
                  {editedMetadata.title.length}/60 characters (recommended:
                  50-60)
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="edit-description">Meta Description</Label>
                <Textarea
                  id="edit-description"
                  value={editedMetadata.description}
                  onChange={(e) => handleChange('description', e.target.value)}
                  className="bg-neutral-900 border-neutral-800 text-white"
                />
                <p className="text-xs text-neutral-500">
                  {editedMetadata.description.length}/160 characters
                  (recommended: 150-160)
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="edit-keywords">Keywords</Label>
                <Input
                  id="edit-keywords"
                  value={editedMetadata.keywords.join(', ')}
                  onChange={(e) => handleKeywordsChange(e.target.value)}
                  className="bg-neutral-900 border-neutral-800 text-white"
                />
                <p className="text-xs text-neutral-500">
                  Separate keywords with commas
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="edit-og-title">OG Title</Label>
                <Input
                  id="edit-og-title"
                  value={editedMetadata.ogTitle}
                  onChange={(e) => handleChange('ogTitle', e.target.value)}
                  className="bg-neutral-900 border-neutral-800 text-white"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="edit-og-description">OG Description</Label>
                <Textarea
                  id="edit-og-description"
                  value={editedMetadata.ogDescription}
                  onChange={(e) =>
                    handleChange('ogDescription', e.target.value)
                  }
                  className="bg-neutral-900 border-neutral-800 text-white"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="edit-og-image">OG Image URL</Label>
                <Input
                  id="edit-og-image"
                  value={editedMetadata.ogImage}
                  onChange={(e) => handleChange('ogImage', e.target.value)}
                  className="bg-neutral-900 border-neutral-800 text-white"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="edit-og-url">OG URL</Label>
                <Input
                  id="edit-og-url"
                  value={editedMetadata.ogUrl}
                  onChange={(e) => handleChange('ogUrl', e.target.value)}
                  className="bg-neutral-900 border-neutral-800 text-white"
                />
              </div>
            </div>
          ) : (
            <>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label className="text-neutral-400">Title Tag</Label>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleCopy(metadata.title, 'title')}
                      className="h-8 px-2 text-neutral-400 hover:text-white hover:bg-neutral-800"
                    >
                      {copiedField === 'title' ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                  <div className="rounded-md border border-neutral-800 bg-neutral-900 p-3">
                    <p className="text-white">{metadata.title}</p>
                  </div>
                  <p className="text-xs text-neutral-500">
                    {metadata.title.length}/60 characters (recommended: 50-60)
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label className="text-neutral-400">Meta Description</Label>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() =>
                        handleCopy(metadata.description, 'description')
                      }
                      className="h-8 px-2 text-neutral-400 hover:text-white hover:bg-neutral-800"
                    >
                      {copiedField === 'description' ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                  <div className="rounded-md border border-neutral-800 bg-neutral-900 p-3">
                    <p className="text-white">{metadata.description}</p>
                  </div>
                  <p className="text-xs text-neutral-500">
                    {metadata.description.length}/160 characters (recommended:
                    150-160)
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label className="text-neutral-400">Keywords</Label>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() =>
                        handleCopy(metadata.keywords.join(', '), 'keywords')
                      }
                      className="h-8 px-2 text-neutral-400 hover:text-white hover:bg-neutral-800"
                    >
                      {copiedField === 'keywords' ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                  <div className="rounded-md border border-neutral-800 bg-neutral-900 p-3">
                    <div className="flex flex-wrap gap-2">
                      {metadata.keywords.map((keyword, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center rounded-full bg-neutral-800 px-2.5 py-0.5 text-xs font-medium text-white"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-neutral-400">Open Graph Preview</Label>
                  <div className="rounded-md border border-neutral-800 bg-neutral-900 p-4">
                    <div className="space-y-3">
                      {metadata.ogImage && (
                        <div className="aspect-[1.91/1] w-full bg-neutral-800 rounded-md overflow-hidden flex items-center justify-center">
                          {metadata.ogImage.startsWith('http') ? (
                            <img
                              src={metadata.ogImage || '/placeholder.svg'}
                              alt="OG Preview"
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                ;(e.target as HTMLImageElement).src =
                                  '/placeholder.svg?height=630&width=1200&text=OG+Image'
                              }}
                            />
                          ) : (
                            <div className="text-neutral-500 text-sm">
                              No image URL provided
                            </div>
                          )}
                        </div>
                      )}
                      <div>
                        <p className="text-sm text-neutral-500">
                          {
                            new URL(metadata.ogUrl || 'https://example.com')
                              .hostname
                          }
                        </p>
                        <h3 className="text-lg font-semibold text-white">
                          {metadata.ogTitle}
                        </h3>
                        <p className="text-sm text-neutral-400">
                          {metadata.ogDescription}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </TabsContent>

        <TabsContent value="html" className="mt-4">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium">HTML Metadata Tags</h3>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleCopy(generateHtmlCode(), 'html')}
                className="border-neutral-800 bg-transparent text-white hover:bg-neutral-800 hover:text-white"
              >
                {copiedField === 'html' ? (
                  <>
                    <Check className="mr-2 h-4 w-4" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="mr-2 h-4 w-4" />
                    Copy HTML
                  </>
                )}
              </Button>
            </div>
            <div className="rounded-md border border-neutral-800 bg-black p-4 overflow-auto max-h-[400px]">
              <pre className="text-sm text-neutral-300 whitespace-pre-wrap">
                {generateHtmlCode()}
              </pre>
            </div>
            <p className="text-sm text-neutral-500">
              Add these tags to the{' '}
              <code className="bg-neutral-800 px-1 py-0.5 rounded text-xs">
                &lt;head&gt;
              </code>{' '}
              section of your HTML document.
            </p>
          </div>
        </TabsContent>

        <TabsContent value="json-ld" className="mt-4">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium">JSON-LD Structured Data</h3>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleCopy(generateJsonLd(), 'json-ld')}
                className="border-neutral-800 bg-transparent text-white hover:bg-neutral-800 hover:text-white"
              >
                {copiedField === 'json-ld' ? (
                  <>
                    <Check className="mr-2 h-4 w-4" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="mr-2 h-4 w-4" />
                    Copy JSON-LD
                  </>
                )}
              </Button>
            </div>
            <div className="rounded-md border border-neutral-800 bg-black p-4 overflow-auto max-h-[400px]">
              <pre className="text-sm text-neutral-300">{generateJsonLd()}</pre>
            </div>
            <p className="text-sm text-neutral-500">
              Add this JSON-LD script to the{' '}
              <code className="bg-neutral-800 px-1 py-0.5 rounded text-xs">
                &lt;head&gt;
              </code>{' '}
              section of your HTML document inside a{' '}
              <code className="bg-neutral-800 px-1 py-0.5 rounded text-xs">
                &lt;script type="application/ld+json"&gt;
              </code>{' '}
              tag.
            </p>
          </div>
        </TabsContent>
      </Tabs>

      <div className="flex justify-end">
        <Button
          variant="outline"
          className="border-neutral-800 bg-transparent text-white hover:bg-neutral-800 hover:text-white"
          onClick={() =>
            window.open(
              'https://developers.facebook.com/tools/debug/',
              '_blank',
            )
          }
        >
          <ExternalLink className="mr-2 h-4 w-4" />
          Test on Facebook
        </Button>
      </div>
    </div>
  )
}
