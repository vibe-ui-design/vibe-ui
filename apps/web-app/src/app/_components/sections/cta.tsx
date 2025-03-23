import { buttonVariants } from '@acme/ui/button'
import { Icons } from '@acme/ui/custom/icons'
import { cn } from '@acme/ui/lib/utils'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Marquee from '../marquee'

const reviews = [
  {
    name: 'Alex Thompson',
    username: '@alexdev',
    body: 'VibeUI has transformed our development workflow. The components are beautiful and the motion effects are smooth.',
    img: 'https://avatar.vercel.sh/alexdev',
  },
  {
    name: 'Sarah Chen',
    username: '@sarahc',
    body: 'The TypeScript support is incredible. Auto-completion and type safety make development so much faster.',
    img: 'https://avatar.vercel.sh/sarahc',
  },
  {
    name: 'Michael Rodriguez',
    username: '@mrodriguez',
    body: 'Finally, a UI library that takes accessibility seriously! Every component follows WAI-ARIA guidelines.',
    img: 'https://avatar.vercel.sh/mrodriguez',
  },
  {
    name: 'Emily Davis',
    username: '@emilyd',
    body: 'The dark mode implementation is seamless. Our users love being able to switch themes instantly.',
    img: 'https://avatar.vercel.sh/emilyd',
  },
  {
    name: 'David Kim',
    username: '@davidk',
    body: 'Performance is outstanding. Bundle sizes are small and animations are butter-smooth.',
    img: 'https://avatar.vercel.sh/davidk',
  },
  {
    name: 'Lisa Wang',
    username: '@lwang',
    body: 'The documentation is excellent and the examples make it easy to get started quickly.',
    img: 'https://avatar.vercel.sh/lwang',
  },
]

const firstRow = reviews.slice(0, reviews.length / 2)
const secondRow = reviews.slice(reviews.length / 2)

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string
  name: string
  username: string
  body: string
}) => {
  return (
    <figure
      className={cn(
        'relative w-80 cursor-pointer overflow-hidden rounded-2xl border p-6',
        'border-border/5 bg-card/5 hover:bg-card/10 transition-colors',
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <img className="rounded-full size-10" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-base font-medium text-white">
            {name}
          </figcaption>
          <p className="text-sm font-medium text-neutral-400">{username}</p>
        </div>
      </div>
      <blockquote className="mt-4 text-base text-neutral-400">
        {body}
      </blockquote>
    </figure>
  )
}

export function CTA() {
  return (
    <section id="cta">
      <div className="py-20 container mx-auto px-4 max-w-[1200px]">
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-3xl border border-border/5 p-10 py-20">
          <div className="absolute rotate-[35deg]">
            <Marquee pauseOnHover className="[--duration:25s]" repeat={3}>
              {firstRow.map((review) => (
                <ReviewCard key={review.username} {...review} />
              ))}
            </Marquee>
            <Marquee
              reverse
              pauseOnHover
              className="[--duration:25s]"
              repeat={3}
            >
              {secondRow.map((review) => (
                <ReviewCard key={review.username} {...review} />
              ))}
            </Marquee>
            <Marquee pauseOnHover className="[--duration:25s]" repeat={3}>
              {firstRow.map((review) => (
                <ReviewCard key={review.username} {...review} />
              ))}
            </Marquee>
            <Marquee
              reverse
              pauseOnHover
              className="[--duration:25s]"
              repeat={3}
            >
              {secondRow.map((review) => (
                <ReviewCard key={review.username} {...review} />
              ))}
            </Marquee>
            <Marquee pauseOnHover className="[--duration:25s]" repeat={3}>
              {firstRow.map((review) => (
                <ReviewCard key={review.username} {...review} />
              ))}
            </Marquee>
            <Marquee
              reverse
              pauseOnHover
              className="[--duration:25s]"
              repeat={3}
            >
              {secondRow.map((review) => (
                <ReviewCard key={review.username} {...review} />
              ))}
            </Marquee>
          </div>
          <div className="z-10 mx-auto size-28 rounded-2xl border border-border/5 bg-card/5 p-4 shadow-2xl backdrop-blur-md lg:size-36">
            <Icons.Sparkles
              size="2xl"
              variant="primary"
              className="w-auto h-full"
            />
          </div>
          <div className="z-10 mt-6 flex flex-col items-center text-center">
            <h1 className="text-4xl font-bold text-white lg:text-5xl">
              Build with VibeUI
            </h1>
            <p className="mt-4 text-xl text-neutral-400 max-w-xl">
              Create stunning, accessible, and performant web applications with
              our modern UI components.
            </p>
            <Link
              href="/docs/introduction"
              className={cn(
                buttonVariants({ variant: 'default', size: 'lg' }),
                'text-white rounded-full group mt-8 text-lg',
              )}
            >
              Get Started
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-b from-transparent to-background to-70%" />
        </div>
      </div>
    </section>
  )
}
