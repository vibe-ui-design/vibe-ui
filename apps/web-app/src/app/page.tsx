import { Benefits } from './_components/sections/benefits'
import { BentoGrid } from './_components/sections/bento'
import { CTA } from './_components/sections/cta'
import { FAQ } from './_components/sections/faq'
import { FeatureHighlight } from './_components/sections/feature-highlight'
import { FeatureScroll } from './_components/sections/feature-scroll'
import { Features } from './_components/sections/features'
import { Footer } from './_components/sections/footer'
import { Header } from './_components/sections/header'
import { Hero } from './_components/sections/hero'
import { Pricing } from './_components/sections/pricing'
import { Testimonials } from './_components/sections/testimonials'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <Header />
      <Hero />
      <FeatureScroll />
      <FeatureHighlight />
      <BentoGrid />
      <Benefits />
      <Features />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  )
}
