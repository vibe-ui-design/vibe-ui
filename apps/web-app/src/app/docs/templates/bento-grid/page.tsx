'use client'

import { Button } from '@acme/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@acme/ui/tabs'
import { RefreshCw } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function BentoGridPage() {
  const [activeTab, setActiveTab] = useState('preview')

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      {/* Main content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-72 border-r border-neutral-800 fixed top-0 bottom-0 overflow-y-auto">
          <div className="py-6 px-4 space-y-8">
            <div className="space-y-3">
              <h4 className="font-medium text-sm text-neutral-400">
                Getting Started
              </h4>
              <div className="space-y-1">
                <Link
                  href="/docs"
                  className="block py-1.5 px-3 rounded-md text-sm text-neutral-400 hover:text-white"
                >
                  Introduction
                </Link>
                <Link
                  href="/docs/installation"
                  className="block py-1.5 px-3 rounded-md text-sm text-neutral-400 hover:text-white"
                >
                  Installation
                </Link>
                <Link
                  href="/docs/cli"
                  className="block py-1.5 px-3 rounded-md text-sm text-neutral-400 hover:text-white"
                >
                  CLI
                </Link>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-medium text-sm text-neutral-400">
                Templates
              </h4>
              <div className="space-y-1">
                <Link
                  href="/docs/templates/dev-tool"
                  className="block py-1.5 px-3 rounded-md text-sm text-neutral-400 hover:text-white"
                >
                  Dev Tool
                  <span className="ml-2 px-1.5 py-0.5 text-[10px] font-medium bg-amber-600 text-white rounded-sm">
                    New
                  </span>
                </Link>
                <Link
                  href="/docs/templates/mobile"
                  className="block py-1.5 px-3 rounded-md text-sm text-neutral-400 hover:text-white"
                >
                  Mobile
                  <span className="ml-2 px-1.5 py-0.5 text-[10px] font-medium bg-emerald-600 text-white rounded-sm">
                    Pro
                  </span>
                </Link>
                <Link
                  href="/docs/templates/saas"
                  className="block py-1.5 px-3 rounded-md text-sm text-neutral-400 hover:text-white"
                >
                  SaaS
                  <span className="ml-2 px-1.5 py-0.5 text-[10px] font-medium bg-emerald-600 text-white rounded-sm">
                    Pro
                  </span>
                </Link>
                <Link
                  href="/docs/templates/startup"
                  className="block py-1.5 px-3 rounded-md text-sm text-neutral-400 hover:text-white"
                >
                  Startup
                  <span className="ml-2 px-1.5 py-0.5 text-[10px] font-medium bg-emerald-600 text-white rounded-sm">
                    Pro
                  </span>
                </Link>
                <Link
                  href="/docs/templates/portfolio"
                  className="block py-1.5 px-3 rounded-md text-sm text-neutral-400 hover:text-white"
                >
                  Portfolio
                </Link>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-medium text-sm text-neutral-400">
                Components
              </h4>
              <div className="space-y-1">
                <Link
                  href="/docs/components/marquee"
                  className="block py-1.5 px-3 rounded-md text-sm text-neutral-400 hover:text-white"
                >
                  Marquee
                </Link>
                <Link
                  href="/docs/components/terminal"
                  className="block py-1.5 px-3 rounded-md text-sm text-neutral-400 hover:text-white"
                >
                  Terminal
                  <span className="ml-2 px-1.5 py-0.5 text-[10px] font-medium bg-amber-600 text-white rounded-sm">
                    New
                  </span>
                </Link>
                <Link
                  href="/docs/components/hero-video-dialog"
                  className="block py-1.5 px-3 rounded-md text-sm text-neutral-400 hover:text-white"
                >
                  Hero Video Dialog
                </Link>
                <Link
                  href="/docs/components/bento-grid"
                  className="block py-1.5 px-3 rounded-md text-sm bg-neutral-800 text-white font-medium"
                >
                  Bento Grid
                </Link>
                <Link
                  href="/docs/components/animated-list"
                  className="block py-1.5 px-3 rounded-md text-sm text-neutral-400 hover:text-white"
                >
                  Animated List
                </Link>
                <Link
                  href="/docs/components/dock"
                  className="block py-1.5 px-3 rounded-md text-sm text-neutral-400 hover:text-white"
                >
                  Dock
                </Link>
                <Link
                  href="/docs/components/globe"
                  className="block py-1.5 px-3 rounded-md text-sm text-neutral-400 hover:text-white"
                >
                  Globe
                </Link>
                <Link
                  href="/docs/components/tweet-card"
                  className="block py-1.5 px-3 rounded-md text-sm text-neutral-400 hover:text-white"
                >
                  Tweet Card
                </Link>
                <Link
                  href="/docs/components/orbiting-circles"
                  className="block py-1.5 px-3 rounded-md text-sm text-neutral-400 hover:text-white"
                >
                  Orbiting Circles
                </Link>
                <Link
                  href="/docs/components/avatar-circles"
                  className="block py-1.5 px-3 rounded-md text-sm text-neutral-400 hover:text-white"
                >
                  Avatar Circles
                </Link>
              </div>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 ml-72">
          <div className="max-w-5xl mx-auto py-12 px-8">
            {/* Breadcrumb */}
            <div className="flex items-center text-sm text-neutral-400 mb-8">
              <Link href="/docs" className="hover:text-white">
                Docs
              </Link>
              <span className="mx-2">›</span>
              <span className="text-white">Bento Grid</span>
            </div>

            {/* Title and description */}
            <div className="mb-12">
              <h1 className="text-4xl font-bold mb-4">Bento Grid</h1>
              <p className="text-xl text-neutral-400">
                Bento grid is a layout used to showcase the features of a
                product in a simple and elegant way.
              </p>
            </div>

            {/* Tabs */}
            <Tabs
              defaultValue="preview"
              className="mb-8"
              onValueChange={setActiveTab}
            >
              <TabsList className="bg-transparent border-b border-neutral-800 w-full justify-start rounded-none p-0 h-auto">
                <TabsTrigger
                  value="preview"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-white data-[state=active]:bg-transparent data-[state=active]:text-white px-4 py-2 text-neutral-400 hover:text-white"
                >
                  Preview
                </TabsTrigger>
                <TabsTrigger
                  value="code"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-white data-[state=active]:bg-transparent data-[state=active]:text-white px-4 py-2 text-neutral-400 hover:text-white"
                >
                  Code
                </TabsTrigger>
              </TabsList>

              <TabsContent value="preview" className="mt-6">
                <div className="relative rounded-lg border border-neutral-800 bg-neutral-950 p-6 overflow-hidden">
                  <div className="absolute top-4 right-4 flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-8 bg-black border-neutral-800 hover:bg-neutral-900 hover:text-white"
                    >
                      <span className="mr-2">Open in</span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.00001 0L14.9282 4V12L8.00001 16L1.07179 12V4L8.00001 0Z"
                          fill="currentColor"
                        />
                      </svg>
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 bg-black border-neutral-800 hover:bg-neutral-900 hover:text-white"
                    >
                      <RefreshCw className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Bento Grid Preview */}
                  <div className="grid grid-cols-2 gap-4 mt-8">
                    <div className="col-span-1 rounded-lg bg-neutral-900 p-6 flex flex-col">
                      <div className="flex-1 mb-4">
                        <div className="flex gap-4 mb-4">
                          <div className="w-16 h-20 bg-neutral-800 rounded-md flex items-center justify-center">
                            <div className="text-xs text-neutral-400">txt</div>
                          </div>
                          <div className="w-16 h-20 bg-neutral-800 rounded-md flex items-center justify-center">
                            <div className="text-xs text-neutral-400">
                              bitcoin.pdf
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-center my-4">
                          <div className="w-12 h-12 bg-neutral-800 rounded-md flex items-center justify-center">
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">
                          Save your files
                        </h3>
                        <p className="text-neutral-400 text-sm">
                          We automatically save your files as you type.
                        </p>
                      </div>
                    </div>

                    <div className="col-span-1 rounded-lg bg-neutral-900 p-6 flex flex-col">
                      <div className="flex-1 mb-4">
                        <div className="flex flex-col gap-4">
                          <div className="bg-neutral-800 rounded-md p-3 flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center">
                              <span className="text-xs">👤</span>
                            </div>
                            <div>
                              <div className="text-sm font-medium">
                                User signed up
                              </div>
                              <div className="text-xs text-neutral-400">
                                Magic UI · 10m ago
                              </div>
                            </div>
                          </div>
                          <div className="bg-neutral-800 rounded-md p-3 flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center">
                              <span className="text-xs">💰</span>
                            </div>
                            <div>
                              <div className="text-sm font-medium">
                                Payment received
                              </div>
                              <div className="text-xs text-neutral-400">
                                Magic UI · 15m ago
                              </div>
                            </div>
                          </div>
                          <div className="bg-neutral-800 rounded-md p-3 flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                              <span className="text-xs">🔔</span>
                            </div>
                            <div>
                              <div className="text-sm font-medium">
                                New event
                              </div>
                              <div className="text-xs text-neutral-400">
                                Magic UI · 25m ago
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">
                          Notifications
                        </h3>
                        <p className="text-neutral-400 text-sm">
                          Get notified when something happens.
                        </p>
                      </div>
                    </div>

                    <div className="col-span-2 rounded-lg bg-neutral-900 p-6">
                      <div className="h-32 flex items-center justify-center">
                        <div className="text-neutral-400">
                          Additional content can go here
                        </div>
                      </div>
                    </div>

                    <div className="col-span-1 rounded-lg bg-neutral-900 p-6">
                      <div className="h-32 flex items-center justify-center">
                        <div className="text-neutral-400">Feature 3</div>
                      </div>
                    </div>

                    <div className="col-span-1 rounded-lg bg-neutral-900 p-6">
                      <div className="h-32 flex items-center justify-center">
                        <div className="text-neutral-400">Feature 4</div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="code" className="mt-6">
                <div className="rounded-lg border border-neutral-800 bg-neutral-950 p-6 overflow-hidden">
                  <pre className="text-sm text-neutral-400 overflow-auto">
                    <code>{`import React from "react";

export function BentoGrid() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="col-span-1 rounded-lg bg-neutral-900 p-6 flex flex-col">
        <div className="flex-1 mb-4">
          <div className="flex gap-4 mb-4">
            <div className="w-16 h-20 bg-neutral-800 rounded-md flex items-center justify-center">
              <div className="text-xs text-neutral-400">txt</div>
            </div>
            <div className="w-16 h-20 bg-neutral-800 rounded-md flex items-center justify-center">
              <div className="text-xs text-neutral-400">bitcoin.pdf</div>
            </div>
          </div>
          <div className="flex justify-center my-4">
            <div className="w-12 h-12 bg-neutral-800 rounded-md flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">Save your files</h3>
          <p className="text-neutral-400 text-sm">We automatically save your files as you type.</p>
        </div>
      </div>

      <div className="col-span-1 rounded-lg bg-neutral-900 p-6 flex flex-col">
        <div className="flex-1 mb-4">
          <div className="flex flex-col gap-4">
            <div className="bg-neutral-800 rounded-md p-3 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center">
                <span className="text-xs">👤</span>
              </div>
              <div>
                <div className="text-sm font-medium">User signed up</div>
                <div className="text-xs text-neutral-400">Magic UI · 10m ago</div>
              </div>
            </div>
            {/* More notification items */}
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">Notifications</h3>
          <p className="text-neutral-400 text-sm">Get notified when something happens.</p>
        </div>
      </div>

      {/* More grid items */}
    </div>
  );
}`}</code>
                  </pre>
                </div>
              </TabsContent>
            </Tabs>

            {/* Usage section */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-4">Usage</h2>
              <p className="text-neutral-400 mb-6">
                The Bento Grid component is a versatile layout that can be used
                to showcase features, statistics, or any content in an organized
                and visually appealing way.
              </p>

              <h3 className="text-xl font-bold mb-3">Installation</h3>
              <div className="bg-neutral-900 rounded-md p-4 mb-6">
                <pre className="text-sm text-neutral-400">
                  <code>{`npm install @vibeui/bento-grid`}</code>
                </pre>
              </div>

              <h3 className="text-xl font-bold mb-3">Basic Usage</h3>
              <p className="text-neutral-400 mb-4">
                Import the component and use it in your React application:
              </p>
              <div className="bg-neutral-900 rounded-md p-4 mb-6">
                <pre className="text-sm text-neutral-400">
                  <code>{`import { BentoGrid, BentoGridItem } from '@vibeui/bento-grid';

export default function MyPage() {
  return (
    <BentoGrid>
      <BentoGridItem title="Feature 1" description="Description of feature 1">
        {/* Your content here */}
      </BentoGridItem>
      <BentoGridItem title="Feature 2" description="Description of feature 2">
        {/* Your content here */}
      </BentoGridItem>
      {/* Add more items as needed */}
    </BentoGrid>
  );
}`}</code>
                </pre>
              </div>

              <h3 className="text-xl font-bold mb-3">Customization</h3>
              <p className="text-neutral-400 mb-4">
                The Bento Grid component is highly customizable. You can adjust
                the number of columns, gap, and more:
              </p>
              <div className="bg-neutral-900 rounded-md p-4 mb-6">
                <pre className="text-sm text-neutral-400">
                  <code>{`<BentoGrid
  columns={{ default: 1, sm: 2, lg: 3 }}
  gap={6}
  className="custom-class"
>
  {/* Items */}
</BentoGrid>`}</code>
                </pre>
              </div>
            </div>

            {/* Props section */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-4">Props</h2>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-neutral-800">
                      <th className="py-3 px-4 text-left text-sm font-medium text-neutral-400">
                        Name
                      </th>
                      <th className="py-3 px-4 text-left text-sm font-medium text-neutral-400">
                        Type
                      </th>
                      <th className="py-3 px-4 text-left text-sm font-medium text-neutral-400">
                        Default
                      </th>
                      <th className="py-3 px-4 text-left text-sm font-medium text-neutral-400">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-neutral-800">
                      <td className="py-3 px-4 text-sm">columns</td>
                      <td className="py-3 px-4 text-sm text-neutral-400">
                        object
                      </td>
                      <td className="py-3 px-4 text-sm text-neutral-400">{`{ default: 1, sm: 2, lg: 3 }`}</td>
                      <td className="py-3 px-4 text-sm text-neutral-400">
                        Number of columns at different breakpoints
                      </td>
                    </tr>
                    <tr className="border-b border-neutral-800">
                      <td className="py-3 px-4 text-sm">gap</td>
                      <td className="py-3 px-4 text-sm text-neutral-400">
                        number
                      </td>
                      <td className="py-3 px-4 text-sm text-neutral-400">4</td>
                      <td className="py-3 px-4 text-sm text-neutral-400">
                        Gap between grid items
                      </td>
                    </tr>
                    <tr className="border-b border-neutral-800">
                      <td className="py-3 px-4 text-sm">className</td>
                      <td className="py-3 px-4 text-sm text-neutral-400">
                        string
                      </td>
                      <td className="py-3 px-4 text-sm text-neutral-400">-</td>
                      <td className="py-3 px-4 text-sm text-neutral-400">
                        Additional CSS classes
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-sm">children</td>
                      <td className="py-3 px-4 text-sm text-neutral-400">
                        ReactNode
                      </td>
                      <td className="py-3 px-4 text-sm text-neutral-400">-</td>
                      <td className="py-3 px-4 text-sm text-neutral-400">
                        BentoGridItem components
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Examples section */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-4">Examples</h2>

              <h3 className="text-xl font-bold mb-3">Feature Showcase</h3>
              <p className="text-neutral-400 mb-4">
                Use the Bento Grid to showcase features of your product:
              </p>
              <div className="bg-neutral-900 rounded-md p-4 mb-6">
                <pre className="text-sm text-neutral-400">
                  <code>{`<BentoGrid>
  <BentoGridItem
    title="Automatic Saving"
    description="We automatically save your files as you type."
    icon={<SaveIcon />}
  />
  <BentoGridItem
    title="Real-time Notifications"
    description="Get notified when something happens."
    icon={<BellIcon />}
  />
  <BentoGridItem
    title="Collaboration"
    description="Work together with your team in real-time."
    icon={<UsersIcon />}
  />
  <BentoGridItem
    title="Analytics"
    description="Track your progress with detailed analytics."
    icon={<ChartIcon />}
  />
</BentoGrid>`}</code>
                </pre>
              </div>

              <h3 className="text-xl font-bold mb-3">Dashboard Layout</h3>
              <p className="text-neutral-400 mb-4">
                Create a dashboard layout with different sized items:
              </p>
              <div className="bg-neutral-900 rounded-md p-4">
                <pre className="text-sm text-neutral-400">
                  <code>{`<BentoGrid>
  <BentoGridItem
    title="Overview"
    description="Your account summary"
    className="col-span-2"
  >
    <OverviewChart />
  </BentoGridItem>
  <BentoGridItem
    title="Recent Activity"
    description="Your latest actions"
  >
    <ActivityList />
  </BentoGridItem>
  <BentoGridItem
    title="Quick Actions"
    description="Frequently used tools"
  >
    <ActionButtons />
  </BentoGridItem>
  <BentoGridItem
    title="Resources"
    description="Helpful documentation"
    className="col-span-3"
  >
    <ResourceLinks />
  </BentoGridItem>
</BentoGrid>`}</code>
                </pre>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
