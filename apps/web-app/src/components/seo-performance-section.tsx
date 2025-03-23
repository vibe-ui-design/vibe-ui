'use client'

import { Button } from '@acme/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@acme/ui/tabs'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@acme/ui/tooltip'
import { ArrowRight, Info } from 'lucide-react'
import { useState } from 'react'

interface ScoreData {
  score: number
  label: string
  color: string
}

interface PerformanceData {
  overall: number
  metrics: ScoreData[]
}

const performanceData: Record<string, PerformanceData> = {
  vibeui: {
    overall: 98,
    metrics: [
      { score: 99, label: 'Performance', color: 'bg-emerald-500' },
      { score: 100, label: 'Accessibility', color: 'bg-emerald-500' },
      { score: 98, label: 'Best Practices', color: 'bg-emerald-500' },
      { score: 96, label: 'SEO', color: 'bg-emerald-500' },
    ],
  },
  competitor1: {
    overall: 82,
    metrics: [
      { score: 78, label: 'Performance', color: 'bg-amber-500' },
      { score: 92, label: 'Accessibility', color: 'bg-emerald-500' },
      { score: 85, label: 'Best Practices', color: 'bg-amber-500' },
      { score: 88, label: 'SEO', color: 'bg-emerald-500' },
    ],
  },
  competitor2: {
    overall: 76,
    metrics: [
      { score: 72, label: 'Performance', color: 'bg-amber-500' },
      { score: 85, label: 'Accessibility', color: 'bg-amber-500' },
      { score: 80, label: 'Best Practices', color: 'bg-amber-500' },
      { score: 82, label: 'SEO', color: 'bg-amber-500' },
    ],
  },
}

export function SEOPerformanceSection() {
  const [activeTab, setActiveTab] = useState('vibeui')

  return (
    <section className="py-24 bg-black">
      <div className="container">
        <div className="mx-auto max-w-[58rem] text-center mb-12">
          <h2 className="text-4xl font-bold leading-tight tracking-tighter md:text-5xl text-white">
            Optimized for Performance
          </h2>
          <p className="mt-4 text-xl text-neutral-400">
            Our templates are built with performance in mind, ensuring your site
            ranks higher and loads faster
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Score visualization */}
          <div className="bg-neutral-900/50 rounded-xl p-8 border border-neutral-800">
            <Tabs
              defaultValue="vibeui"
              className="w-full"
              onValueChange={setActiveTab}
            >
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="vibeui">VibeUI</TabsTrigger>
                <TabsTrigger value="competitor1">Competitor A</TabsTrigger>
                <TabsTrigger value="competitor2">Competitor B</TabsTrigger>
              </TabsList>

              {Object.entries(performanceData).map(([key, data]) => (
                <TabsContent key={key} value={key} className="space-y-8">
                  {/* Overall score */}
                  <div className="flex flex-col items-center">
                    <div className="relative">
                      <svg className="w-48 h-48">
                        <circle
                          className="text-neutral-800"
                          strokeWidth="8"
                          stroke="currentColor"
                          fill="transparent"
                          r="70"
                          cx="96"
                          cy="96"
                        />
                        <circle
                          className="text-primary"
                          strokeWidth="8"
                          strokeDasharray={440}
                          strokeDashoffset={440 - (440 * data.overall) / 100}
                          strokeLinecap="round"
                          stroke="currentColor"
                          fill="transparent"
                          r="70"
                          cx="96"
                          cy="96"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-5xl font-bold text-white">
                          {data.overall}
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 text-xl font-medium text-white">
                      Overall Score
                    </p>
                  </div>

                  {/* Individual metrics */}
                  <div className="grid grid-cols-2 gap-6">
                    {data.metrics.map((metric, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <span className="text-sm font-medium text-neutral-400">
                              {metric.label}
                            </span>
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-6 w-6 text-neutral-400"
                                  >
                                    <Info className="h-3 w-3" />
                                    <span className="sr-only">Info</span>
                                  </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p className="text-xs">
                                    {metric.label === 'Performance' &&
                                      'Page loading speed and responsiveness'}
                                    {metric.label === 'Accessibility' &&
                                      'How accessible your site is to all users'}
                                    {metric.label === 'Best Practices' &&
                                      'Adherence to modern web development standards'}
                                    {metric.label === 'SEO' &&
                                      'Search engine optimization score'}
                                  </p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </div>
                          <span className="text-sm font-bold text-white">
                            {metric.score}
                          </span>
                        </div>
                        <div className="h-2 w-full bg-neutral-800 rounded-full overflow-hidden">
                          <div
                            className={`h-full ${metric.color} rounded-full`}
                            style={{ width: `${metric.score}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>

          {/* Right side - Benefits */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-white">
              Why Performance Matters
            </h3>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">
                    Faster Load Times
                  </h4>
                  <p className="text-neutral-400">
                    Our templates are optimized to load in under 1 second,
                    keeping your visitors engaged.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 11l5-5m0 0l5 5m-5-5v12"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">
                    Higher Search Rankings
                  </h4>
                  <p className="text-neutral-400">
                    Google rewards fast, accessible websites with better search
                    positions.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">
                    Better Conversion Rates
                  </h4>
                  <p className="text-neutral-400">
                    Faster sites convert up to 2x better than slow-loading
                    competitors.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">
                    Accessibility Built-in
                  </h4>
                  <p className="text-neutral-400">
                    Our templates meet WCAG standards, making your site usable
                    by everyone.
                  </p>
                </div>
              </div>
            </div>

            <Button asChild size="lg" className="mt-4">
              <a href="/docs/performance">
                Learn More About Our Performance{' '}
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
