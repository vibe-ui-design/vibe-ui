import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI Component Selection | VibeUI",
  description: "Let our AI analyze your project and select the perfect components for your needs.",
}

export default function AIFlowLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

