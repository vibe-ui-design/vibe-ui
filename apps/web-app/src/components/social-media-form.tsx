'use client'

import { Button } from '@acme/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@acme/ui/card'
import { Checkbox } from '@acme/ui/checkbox'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@acme/ui/form'
import { Input } from '@acme/ui/input'
import { Textarea } from '@acme/ui/textarea'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2 } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const formSchema = z.object({
  appName: z
    .string()
    .min(2, { message: 'App name must be at least 2 characters.' }),
  appDescription: z
    .string()
    .min(10, { message: 'Description must be at least 10 characters.' }),
  targetAudience: z
    .string()
    .min(5, { message: 'Target audience must be at least 5 characters.' }),
  messageContent: z
    .string()
    .min(10, { message: 'Message content must be at least 10 characters.' }),
  appUrl: z
    .string()
    .url({ message: 'Please enter a valid URL.' })
    .optional()
    .or(z.literal('')),
  platforms: z.object({
    twitter: z.boolean().default(true),
    linkedin: z.boolean().default(true),
    reddit: z.boolean().default(true),
    hackernews: z.boolean().default(true),
  }),
  includeHashtags: z.boolean().default(true),
  includeTimingRecommendations: z.boolean().default(true),
  includeCommunityRecommendations: z.boolean().default(true),
})

type FormValues = z.infer<typeof formSchema>

interface SocialMediaFormProps {
  onSubmit: (formData: FormData) => Promise<void>
  isGenerating: boolean
}

export function SocialMediaForm({
  onSubmit,
  isGenerating,
}: SocialMediaFormProps) {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      appName: '',
      appDescription: '',
      targetAudience: '',
      messageContent: '',
      appUrl: '',
      platforms: {
        twitter: true,
        linkedin: true,
        reddit: true,
        hackernews: true,
      },
      includeHashtags: true,
      includeTimingRecommendations: true,
      includeCommunityRecommendations: true,
    },
  })

  const handleSubmit = (values: FormValues) => {
    const formData = new FormData()
    Object.entries(values).forEach(([key, value]) => {
      if (key === 'platforms') {
        formData.append(key, JSON.stringify(value))
      } else {
        formData.append(key, value.toString())
      }
    })
    onSubmit(formData)
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Application Details</CardTitle>
        <CardDescription>
          Provide information about your application and the message you want to
          share.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="appName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Application Name</FormLabel>
                    <FormControl>
                      <Input placeholder="VibeUI" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="appUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Application URL (optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="https://example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="appDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Application Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="A brief description of what your application does"
                      className="min-h-[80px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="targetAudience"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Target Audience</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Developers, designers, product managers, etc."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="messageContent"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message Content</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="What specific message or announcement do you want to share?"
                      className="min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="space-y-4">
              <div className="font-medium">Platforms</div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <FormField
                  control={form.control}
                  name="platforms.twitter"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Twitter</FormLabel>
                      </div>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="platforms.linkedin"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>LinkedIn</FormLabel>
                      </div>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="platforms.reddit"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Reddit</FormLabel>
                      </div>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="platforms.hackernews"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Hacker News</FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="font-medium">Additional Options</div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <FormField
                  control={form.control}
                  name="includeHashtags"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Include Hashtags</FormLabel>
                        <FormDescription>
                          Generate relevant hashtags
                        </FormDescription>
                      </div>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="includeTimingRecommendations"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Timing Recommendations</FormLabel>
                        <FormDescription>Best times to post</FormDescription>
                      </div>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="includeCommunityRecommendations"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Community Recommendations</FormLabel>
                        <FormDescription>
                          Subreddits, groups, etc.
                        </FormDescription>
                      </div>
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <Button type="submit" className="w-full" disabled={isGenerating}>
              {isGenerating ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                'Generate Social Media Posts'
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
