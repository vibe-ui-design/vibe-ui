export type PlatformType = "twitter" | "linkedin" | "reddit" | "hackernews"

export interface PlatformContent {
  content: string
  hashtags?: string[]
  variations?: {
    content: string
    id: string
  }[]
}

export interface Recommendations {
  timing?: Record<string, string>
  communities?: Record<string, string | string[]>
  hashtags?: Record<string, string[]>
}

export interface SocialMediaContent {
  platforms: string[]
  twitter: PlatformContent
  linkedin: PlatformContent
  reddit: PlatformContent
  hackernews: PlatformContent
  recommendations: Recommendations
}

