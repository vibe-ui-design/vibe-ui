import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Components & AI Prompts | VibeUI",
  description: "Browse, select, and generate UI components for your next project with VibeUI.",
}

export default function ComponentsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

