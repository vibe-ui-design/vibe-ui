import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "VibeUI Documentation",
  description: "Documentation for VibeUI templates and components",
}

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

