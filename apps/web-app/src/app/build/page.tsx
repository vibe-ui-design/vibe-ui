import { Button } from '@acme/ui/button'
import { ArrowRight, FileText, Layers, Sparkles, Upload } from 'lucide-react'
import Link from 'next/link'

export default function ComponentsLandingPage() {
  return (
    <div>
      <div className="mx-auto max-w-3xl text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
          Components & AI Prompts
        </h1>
        <p className="text-lg text-neutral-400 mb-8">
          Choose how you want to build your next project with VibeUI components
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* AI Flow Card */}
        <Link href="/build/ai-flow" className="group">
          <div className="h-full border border-neutral-800 rounded-xl p-8 transition-all duration-300 hover:border-primary/50 hover:bg-neutral-900/50 flex flex-col">
            <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-6">
              <Sparkles className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl font-bold mb-3">AI Flow</h2>
            <p className="text-neutral-400 mb-6 grow">
              Describe your project or upload a screenshot, and let our AI
              select the perfect components for you. Ideal for quick starts and
              inspiration.
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2 text-sm bg-neutral-900 px-3 py-1.5 rounded-full">
                <FileText className="h-4 w-4 text-primary" />
                <span>Describe your project</span>
              </div>
              <div className="flex items-center gap-2 text-sm bg-neutral-900 px-3 py-1.5 rounded-full">
                <Upload className="h-4 w-4 text-primary" />
                <span>Upload screenshot</span>
              </div>
            </div>
            <Button className="w-full justify-between group-hover:bg-primary">
              Try AI Flow
              <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </Link>

        {/* Manual Selection Card */}
        <Link href="/build/select" className="group">
          <div className="h-full border border-neutral-800 rounded-xl p-8 transition-all duration-300 hover:border-primary/50 hover:bg-neutral-900/50 flex flex-col">
            <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-6">
              <Layers className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl font-bold mb-3">Manual Selection</h2>
            <p className="text-neutral-400 mb-6 grow">
              Browse and handpick components for your project. Perfect for
              developers who know exactly what they need or want to explore all
              options.
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2 text-sm bg-neutral-900 px-3 py-1.5 rounded-full">
                <span>200+ Components</span>
              </div>
              <div className="flex items-center gap-2 text-sm bg-neutral-900 px-3 py-1.5 rounded-full">
                <span>Categorized Library</span>
              </div>
            </div>
            <Button
              variant="outline"
              className="w-full justify-between border-neutral-800 group-hover:border-primary group-hover:text-primary"
            >
              Browse Components
              <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </Link>
      </div>

      <div className="mt-16 text-center">
        <p className="text-neutral-400 mb-4">
          Not sure which option to choose?
        </p>
        <div className="inline-flex gap-4">
          <Button variant="link" className="text-primary">
            Watch tutorial
          </Button>
          <Button variant="link" className="text-primary">
            View examples
          </Button>
        </div>
      </div>
    </div>
  )
}
