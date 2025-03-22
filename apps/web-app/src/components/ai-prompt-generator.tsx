'use client'

import { Button } from '@acme/ui/button'
import { Textarea } from '@acme/ui/textarea'
import { Copy, Loader2, Sparkles } from 'lucide-react'
import { useState } from 'react'
import { generatePrompt } from '~/actions/generate-prompt'
import type { ComponentData } from '~/lib/component-data'

interface AIPromptGeneratorProps {
  selectedComponents: ComponentData[]
}

export function AIPromptGenerator({
  selectedComponents,
}: AIPromptGeneratorProps) {
  const [projectDescription, setProjectDescription] = useState('')
  const [generatedPrompt, setGeneratedPrompt] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleGeneratePrompt = async () => {
    if (!projectDescription.trim()) return

    setIsGenerating(true)
    try {
      const prompt = await generatePrompt(
        projectDescription,
        selectedComponents,
      )
      setGeneratedPrompt(prompt)
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
    <div className="p-6 border border-neutral-800 rounded-lg bg-neutral-900/50">
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2">Generate AI Prompt</h3>
        <p className="text-neutral-400 mb-4">
          Describe your project below and we'll generate a tailored prompt for
          v0 based on your {selectedComponents.length} selected component
          {selectedComponents.length !== 1 ? 's' : ''}.
        </p>
        <Textarea
          placeholder="E.g., I'm building a dashboard for a fitness tracking app. It should display workout statistics, progress charts, and allow users to set goals. The design should be modern and motivational with a dark theme."
          className="min-h-[120px] bg-neutral-900 border-neutral-800 text-white placeholder:text-neutral-500 mb-4"
          value={projectDescription}
          onChange={(e) => setProjectDescription(e.target.value)}
        />
        <div className="flex justify-end">
          <Button
            onClick={handleGeneratePrompt}
            disabled={
              isGenerating ||
              !projectDescription.trim() ||
              selectedComponents.length === 0
            }
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

      {generatedPrompt && (
        <div className="border-t border-neutral-800 pt-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold">Generated Prompt</h3>
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
          <div className="rounded-lg border border-neutral-800 bg-black p-4 overflow-auto max-h-[400px]">
            <pre className="whitespace-pre-wrap text-sm text-neutral-300">
              {generatedPrompt}
            </pre>
          </div>
        </div>
      )}
    </div>
  )
}
