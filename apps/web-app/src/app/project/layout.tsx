import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Project Tools - VibeUI",
  description: "Tools to help you build your project",
}

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

