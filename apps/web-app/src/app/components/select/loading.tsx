import { Skeleton } from '@acme/ui/skeleton'
import { SiteFooter } from '~/components/site-footer'
import { SiteHeader } from '~/components/site-header'

export default function ComponentSelectionLoading() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 bg-black text-white">
        <div className="container py-8">
          <div className="flex items-center justify-between mb-8">
            <Skeleton className="h-10 w-64 bg-neutral-800" />
            <div className="flex items-center gap-4">
              <Skeleton className="h-10 w-32 bg-neutral-800" />
              <Skeleton className="h-10 w-32 bg-neutral-800" />
              <Skeleton className="h-10 w-40 bg-neutral-800" />
            </div>
          </div>

          <div className="flex gap-8">
            <div className="flex-1">
              <div className="mb-6 flex gap-4">
                <Skeleton className="h-10 flex-1 bg-neutral-800" />
                <Skeleton className="h-10 w-32 bg-neutral-800" />
              </div>

              <Skeleton className="h-12 w-full mb-8 bg-neutral-800" />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array.from({ length: 9 }).map((_, i) => (
                  <Skeleton
                    key={i}
                    className="h-80 bg-neutral-800 rounded-lg"
                  />
                ))}
              </div>
            </div>

            <div className="w-80 shrink-0">
              <Skeleton className="h-10 w-full mb-4 bg-neutral-800" />
              <Skeleton className="h-[calc(100vh-300px)] w-full bg-neutral-800 rounded-lg" />
              <Skeleton className="h-10 w-full mt-6 bg-neutral-800" />
              <Skeleton className="h-10 w-full mt-3 bg-neutral-800" />
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
