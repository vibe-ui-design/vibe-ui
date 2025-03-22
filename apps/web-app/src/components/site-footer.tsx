import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t border-neutral-800 py-12 bg-black">
      <div className="container">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center text-white font-bold">
              V
            </div>
            <span className="font-bold text-white">VibeUI</span>
          </div>
          <nav className="flex gap-6">
            <Link href="#templates" className="text-sm text-neutral-400 transition-colors hover:text-white">
              Templates
            </Link>
            <Link href="/docs" className="text-sm text-neutral-400 transition-colors hover:text-white">
              Documentation
            </Link>
            <Link href="/changelog" className="text-sm text-neutral-400 transition-colors hover:text-white">
              Changelog
            </Link>
            <Link
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-neutral-400 transition-colors hover:text-white"
            >
              GitHub
            </Link>
            <Link href="#" className="text-sm text-neutral-400 transition-colors hover:text-white">
              Twitter
            </Link>
          </nav>
          <p className="text-sm text-neutral-400">&copy; {new Date().getFullYear()} VibeUI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

