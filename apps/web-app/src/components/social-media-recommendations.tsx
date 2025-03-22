import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@acme/ui/card'
import { Clock, Hash, Users } from 'lucide-react'
import type { Recommendations } from '~/types/social-media'

interface SocialMediaRecommendationsProps {
  recommendations: Recommendations
}

export function SocialMediaRecommendations({
  recommendations,
}: SocialMediaRecommendationsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recommendations</CardTitle>
        <CardDescription>
          Optimize your social media strategy with these platform-specific
          recommendations.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {recommendations.timing && (
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-muted-foreground" />
              <h3 className="text-lg font-medium">Best Posting Times</h3>
            </div>
            <ul className="space-y-2 pl-7 list-disc text-sm">
              {Object.entries(recommendations.timing).map(
                ([platform, times]) => (
                  <li key={platform}>
                    <span className="font-medium capitalize">{platform}:</span>{' '}
                    {times}
                  </li>
                ),
              )}
            </ul>
          </div>
        )}

        {recommendations.communities && (
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-muted-foreground" />
              <h3 className="text-lg font-medium">Recommended Communities</h3>
            </div>
            <ul className="space-y-2 pl-7 list-disc text-sm">
              {Object.entries(recommendations.communities).map(
                ([platform, communities]) => (
                  <li key={platform} className="mb-2">
                    <span className="font-medium capitalize">{platform}:</span>
                    <ul className="pl-5 mt-1 space-y-1">
                      {Array.isArray(communities) ? (
                        communities.map((community, index) => (
                          <li key={index}>{community}</li>
                        ))
                      ) : (
                        <li>{communities}</li>
                      )}
                    </ul>
                  </li>
                ),
              )}
            </ul>
          </div>
        )}

        {recommendations.hashtags && (
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Hash className="h-5 w-5 text-muted-foreground" />
              <h3 className="text-lg font-medium">Popular Hashtags</h3>
            </div>
            <ul className="space-y-2 pl-7 list-disc text-sm">
              {Object.entries(recommendations.hashtags).map(
                ([platform, hashtags]) => (
                  <li key={platform}>
                    <span className="font-medium capitalize">{platform}:</span>{' '}
                    {hashtags.join(', ')}
                  </li>
                ),
              )}
            </ul>
          </div>
        )}

        <div className="pt-4 border-t text-sm text-muted-foreground">
          <p>
            <strong>Pro Tip:</strong> Consistency is key for social media
            success. Establish a regular posting schedule and engage with your
            audience.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
