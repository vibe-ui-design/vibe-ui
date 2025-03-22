import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Social Media Post Generator | VibeUI",
  description: "Generate tailored social media posts for multiple platforms based on your application details.",
}

export default function SocialMediaGeneratorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">{children}</div>
}

