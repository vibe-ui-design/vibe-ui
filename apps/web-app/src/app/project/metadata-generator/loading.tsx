import { Card, CardContent, CardHeader } from '@acme/ui/card'
import { Skeleton } from '@acme/ui/skeleton'
import { SiteFooter } from '~/components/site-footer'
import { SiteHeader } from '~/components/site-header'

export default function MetadataGeneratorLoading() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 bg-black text-white">
        <div className="container py-12">
          <Skeleton className="h-10 w-64 bg-neutral-800 mb-2" />
          <Skeleton className="h-6 w-full max-w-md bg-neutral-800 mb-8" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Skeleton className="h-12 w-full bg-neutral-800 mb-6" />
              <div className="space-y-4">
                <Skeleton className="h-10 w-full bg-neutral-800" />
                <Skeleton className="h-32 w-full bg-neutral-800" />
                <Skeleton className="h-10 w-full bg-neutral-800" />
                <Skeleton className="h-10 w-full bg-neutral-800" />
              </div>
            </div>

            <div className="lg:col-span-1">
              <Card className="bg-neutral-900 border-neutral-800">
                <CardHeader>
                  <Skeleton className="h-6 w-48 bg-neutral-800 mb-2" />
                  <Skeleton className="h-4 w-full bg-neutral-800" />
                </CardHeader>
                <CardContent className="space-y-4">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="space-y-2">
                      <Skeleton className="h-5 w-32 bg-neutral-800" />
                      <Skeleton className="h-4 w-full bg-neutral-800" />
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="bg-neutral-900 border-neutral-800 mt-6">
                <CardHeader>
                  <Skeleton className="h-6 w-32 bg-neutral-800 mb-2" />
                  <Skeleton className="h-4 w-full bg-neutral-800" />
                </CardHeader>
                <CardContent className="space-y-4">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="space-y-2">
                      <Skeleton className="h-5 w-32 bg-neutral-800" />
                      <Skeleton className="h-4 w-full bg-neutral-800" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
