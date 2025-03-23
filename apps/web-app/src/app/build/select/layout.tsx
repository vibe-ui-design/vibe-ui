import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Component Selection & AI Prompts - VibeUI",
  description: "Select components and generate AI prompts for your project",
}

export default function ComponentSelectionLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

