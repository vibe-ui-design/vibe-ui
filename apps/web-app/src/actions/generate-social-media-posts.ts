'use server'

import { openai } from '@ai-sdk/openai'
import { generateText } from 'ai'
import { z } from 'zod'
import type { PlatformType, SocialMediaContent } from '~/types/social-media'

export async function generateSocialMediaPosts(
  formData: FormData,
): Promise<SocialMediaContent> {
  const appName = formData.get('appName') as string
  const appDescription = formData.get('appDescription') as string
  const targetAudience = formData.get('targetAudience') as string
  const messageContent = formData.get('messageContent') as string
  const appUrl = formData.get('appUrl') as string
  const platformsJson = formData.get('platforms') as string
  const platforms = JSON.parse(platformsJson)

  const includeHashtags = formData.get('includeHashtags') === 'true'
  const includeTimingRecommendations =
    formData.get('includeTimingRecommendations') === 'true'
  const includeCommunityRecommendations =
    formData.get('includeCommunityRecommendations') === 'true'

  const enabledPlatforms = Object.entries(platforms)
    .filter(([_, enabled]) => enabled)
    .map(([platform]) => platform) as PlatformType[]

  // Create a prompt for the AI
  const prompt = `
    Generate social media posts for the following application:

    Application Name: ${appName}
    Application URL: ${appUrl || 'Not provided'}
    Application Description: ${appDescription}
    Target Audience: ${targetAudience}
    Message Content: ${messageContent}

    Platforms: ${enabledPlatforms.join(', ')}

    For each platform, create a post that follows the platform's best practices and character limits.
    ${includeHashtags ? 'Include relevant hashtags for each platform.' : ''}

    ${includeTimingRecommendations ? 'Provide recommendations for the best times to post on each platform.' : ''}
    ${includeCommunityRecommendations ? 'Suggest relevant communities (subreddits, LinkedIn groups, etc.) where this content would be well-received.' : ''}

    Format the response as a JSON object with the following structure:
    {
      "platforms": ["twitter", "linkedin", ...],
      "twitter": {
        "content": "The post content",
        "hashtags": ["hashtag1", "hashtag2", ...],
        "variations": []
      },
      "linkedin": {
        "content": "The post content",
        "hashtags": ["hashtag1", "hashtag2", ...],
        "variations": []
      },
      ...
      "recommendations": {
        "timing": {
          "twitter": "Best times to post",
          ...
        },
        "communities": {
          "reddit": ["subreddit1", "subreddit2", ...],
          ...
        },
        "hashtags": {
          "twitter": ["hashtag1", "hashtag2", ...],
          ...
        }
      }
    }
  `

  try {
    // Generate the social media posts using AI
    const { text } = await generateText({
      model: openai('gpt-4o'),
      prompt,
      temperature: 0.7,
      maxTokens: 2000,
    })

    // Parse the response as JSON
    const result = JSON.parse(text)

    // Validate the response structure
    const socialMediaSchema = z.object({
      platforms: z.array(z.string()),
      twitter: z
        .object({
          content: z.string(),
          hashtags: z.array(z.string()).optional(),
          variations: z
            .array(
              z.object({
                content: z.string(),
                id: z.string(),
              }),
            )
            .optional(),
        })
        .optional(),
      linkedin: z
        .object({
          content: z.string(),
          hashtags: z.array(z.string()).optional(),
          variations: z
            .array(
              z.object({
                content: z.string(),
                id: z.string(),
              }),
            )
            .optional(),
        })
        .optional(),
      reddit: z
        .object({
          content: z.string(),
          hashtags: z.array(z.string()).optional(),
          variations: z
            .array(
              z.object({
                content: z.string(),
                id: z.string(),
              }),
            )
            .optional(),
        })
        .optional(),
      hackernews: z
        .object({
          content: z.string(),
          hashtags: z.array(z.string()).optional(),
          variations: z
            .array(
              z.object({
                content: z.string(),
                id: z.string(),
              }),
            )
            .optional(),
        })
        .optional(),
      recommendations: z.object({
        timing: z.record(z.string()).optional(),
        communities: z
          .record(z.union([z.string(), z.array(z.string())]))
          .optional(),
        hashtags: z.record(z.array(z.string())).optional(),
      }),
    })

    const parsed = socialMediaSchema.parse(result)

    // Transform to ensure all platforms have content
    const defaultContent = {
      content: 'No content generated for this platform.',
      hashtags: [],
      variations: [],
    }

    return {
      ...parsed,
      twitter: parsed.twitter || defaultContent,
      linkedin: parsed.linkedin || defaultContent,
      reddit: parsed.reddit || defaultContent,
      hackernews: parsed.hackernews || defaultContent,
    }
  } catch (error) {
    console.error('Error generating social media posts:', error)
    throw new Error('Failed to generate social media posts')
  }
}
