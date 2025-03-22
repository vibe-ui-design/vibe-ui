import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Prompt Examples - VibeUI",
  description: "Examples of AI-generated prompts for different types of projects",
}

export default function PromptExamplesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

