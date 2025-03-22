'use client'
import { PromptGenerator } from '~/components/prompt-generator'
import { SiteFooter } from '~/components/site-footer'
import { SiteHeader } from '~/components/site-header'
import { SelectedComponentsContext } from '~/context/selected-components-context'
import { useComponentSelection } from '~/hooks/use-component-selection'

export default function PromptGeneratorPage() {
  const { selectedComponents, toggleComponent, clearSelection } =
    useComponentSelection()

  return (
    <SelectedComponentsContext.Provider
      value={{ selectedComponents, toggleComponent, clearSelection }}
    >
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1 bg-black text-white">
          <div className="container py-12">
            <h1 className="text-3xl font-bold mb-2">AI Prompt Generator</h1>
            <p className="text-neutral-400 mb-8">
              Describe your project and we'll generate a tailored prompt for v0
              based on your selected components.
            </p>

            <PromptGenerator />
          </div>
        </main>
        <SiteFooter />
      </div>
    </SelectedComponentsContext.Provider>
  )
}
