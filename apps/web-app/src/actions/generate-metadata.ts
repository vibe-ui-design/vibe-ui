"use server"

import { openai } from "@ai-sdk/openai"
import { generateObject } from "ai"
import { z } from "zod"

interface MetadataInput {
  appName: string
  appDescription: string
  targetAudience?: string
  appType?: string
  appUrl?: string
  primaryKeywords?: string
}

export async function generateMetadata(input: MetadataInput) {
  try {
    const { object } = await generateObject({
      model: openai("gpt-4o"),
      schema: z.object({
        title: z.string().describe("The title tag for the application, optimized for SEO (50-60 characters)"),
        description: z
          .string()
          .describe("The meta description for the application, optimized for SEO (150-160 characters)"),
        keywords: z.array(z.string()).describe("A list of relevant keywords for the application"),
        ogTitle: z.string().describe("The Open Graph title, optimized for social sharing"),
        ogDescription: z.string().describe("The Open Graph description, optimized for social sharing"),
        ogImage: z.string().describe("The URL for the Open Graph image (recommended: 1200x630px)"),
        ogUrl: z.string().describe("The canonical URL for the application"),
        ogType: z.string().describe("The Open Graph type (e.g., website, article)"),
        twitterCard: z.string().describe("The Twitter card type (e.g., summary, summary_large_image)"),
        twitterTitle: z.string().describe("The Twitter title, optimized for Twitter sharing"),
        twitterDescription: z.string().describe("The Twitter description, optimized for Twitter sharing"),
        twitterImage: z.string().describe("The URL for the Twitter image"),
      }),
      prompt: `Generate optimized metadata and Open Graph tags for an application with the following details:

Application Name: ${input.appName}
Application Description: ${input.appDescription}
${input.targetAudience ? `Target Audience: ${input.targetAudience}` : ""}
${input.appType ? `Application Type: ${input.appType}` : ""}
${input.appUrl ? `Application URL: ${input.appUrl}` : "Application URL: https://example.com"}
${input.primaryKeywords ? `Primary Keywords: ${input.primaryKeywords}` : ""}

Create comprehensive metadata that will improve SEO and social sharing. Include title tags, meta descriptions, keywords, and Open Graph tags (og:title, og:description, og:image, og:url, etc.).

For the image URL, use a placeholder if none is provided. Make sure all metadata follows best practices for length and content.`,
    })

    return object
  } catch (error) {
    console.error("Error generating metadata:", error)
    throw new Error("Failed to generate metadata")
  }
}

