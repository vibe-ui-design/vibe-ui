import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Changelog - VibeUI",
  description: "A detailed history of updates, improvements, and fixes to VibeUI.",
}

export default function ChangelogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

