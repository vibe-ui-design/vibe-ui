import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI Prompt Generator - VibeUI",
  description: "Generate tailored prompts for v0 based on your project description",
}

export default function PromptGeneratorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

