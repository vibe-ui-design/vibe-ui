import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Metadata & Open Graph Generator - VibeUI",
  description: "Generate optimized metadata and Open Graph tags for your application using AI",
}

export default function MetadataGeneratorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

