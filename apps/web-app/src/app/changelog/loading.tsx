import { Skeleton } from '@acme/ui/skeleton'
import { SiteFooter } from '~/components/site-footer'
import { SiteHeader } from '~/components/site-header'

export default function ChangelogLoading() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 bg-black text-white">
        <section className="py-16 md:py-24">
          <div className="container max-w-4xl">
            <div className="mb-12">
              <Skeleton className="h-4 w-24 bg-neutral-800 mb-6" />
              <Skeleton className="h-10 w-48 bg-neutral-800 mb-4" />
              <Skeleton className="h-6 w-full max-w-md bg-neutral-800" />
            </div>

            <div className="space-y-16">
              {Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="relative pl-8 border-l border-neutral-800"
                >
                  <div className="absolute -left-3 h-6 w-6 rounded-full bg-neutral-800" />

                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Skeleton className="h-8 w-20 bg-neutral-800" />
                      <Skeleton className="h-4 w-24 bg-neutral-800" />
                    </div>
                    <Skeleton className="h-6 w-64 bg-neutral-800" />
                  </div>

                  <div className="space-y-6 mb-8">
                    <div>
                      <div className="flex items-center mb-3">
                        <Skeleton className="h-5 w-16 bg-neutral-800 mr-2" />
                        <Skeleton className="h-5 w-32 bg-neutral-800" />
                      </div>
                      <div className="space-y-2">
                        <Skeleton className="h-4 w-full bg-neutral-800" />
                        <Skeleton className="h-4 w-full bg-neutral-800" />
                        <Skeleton className="h-4 w-3/4 bg-neutral-800" />
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center mb-3">
                        <Skeleton className="h-5 w-16 bg-neutral-800 mr-2" />
                        <Skeleton className="h-5 w-32 bg-neutral-800" />
                      </div>
                      <div className="space-y-2">
                        <Skeleton className="h-4 w-full bg-neutral-800" />
                        <Skeleton className="h-4 w-full bg-neutral-800" />
                        <Skeleton className="h-4 w-2/3 bg-neutral-800" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
