import Link from 'next/link'

// import { siteConfig } from '~/config/site'
import { cn } from '@acme/ui/lib/utils'

interface MainNavProps {
  className?: string
}

export function MainNav({ className }: MainNavProps) {
  return (
    <div
      className={cn('flex w-full shrink-0 items-center space-x-6', className)}
    >
      <Link href="/" className="flex items-center space-x-2">
        {/* <Icons.logo className="h-6 w-6" /> */}
        <span className="hidden font-bold sm:inline-block">
          {/* {siteConfig.name} */}
        </span>
      </Link>
      <nav className="flex flex-wrap items-center space-x-6 text-sm font-medium">
        {/* {siteConfig.mainNav?.map((item, i) =>
          item.href ? (
            <Link
              key={i}
              href={item.href}
              className="transition-colors hover:text-foreground/80"
            >
              {item.title}
            </Link>
          ) : null,
        )} */}
        {/* Add the social media generator link to your navigation items array */}
        {/* Find the navigation items array and add this new item: */}
        {/* { title: "Social Media", href: "/project/social-media-generator" }, */}
        {/* It should appear alongside your other navigation items */}
      </nav>
    </div>
  )
}
