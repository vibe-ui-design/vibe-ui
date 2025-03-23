import { Section } from '../section'

interface Testimonial {
  name: string
  role: string
  company: string
  text: string
  image: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Sarah Chen',
    role: 'Lead Developer',
    company: 'TechCorp',
    text: 'VibeUI has completely transformed how we build interfaces. The components are not just beautiful, but also highly performant and accessible. The motion effects add that extra layer of polish that makes our apps stand out.',
    image: 'https://avatar.vercel.sh/sarahc',
  },
  {
    name: 'Michael Rodriguez',
    role: 'Frontend Architect',
    company: 'DesignLabs',
    text: 'The TypeScript integration is flawless. Having full type safety and auto-completion has significantly reduced our development time and bugs. The documentation is comprehensive and the examples are practical.',
    image: 'https://avatar.vercel.sh/mrodriguez',
  },
  {
    name: 'Emily Davis',
    role: 'UX Engineer',
    company: 'CreativeFlow',
    text: 'As someone focused on accessibility, I appreciate how VibeUI makes it easy to build WCAG-compliant interfaces. Every component follows best practices, and the keyboard navigation support is excellent.',
    image: 'https://avatar.vercel.sh/emilyd',
  },
  {
    name: 'David Kim',
    role: 'Product Manager',
    company: 'InnovateCo',
    text: 'The dark mode implementation is seamless, and our users love it. The ability to customize themes has allowed us to perfectly match our brand identity while maintaining consistency.',
    image: 'https://avatar.vercel.sh/davidk',
  },
  {
    name: 'Lisa Wang',
    role: 'Senior Engineer',
    company: 'WebScale',
    text: 'Performance was a key concern for us, and VibeUI delivered. The bundle sizes are optimized, and the animations are smooth even on lower-end devices. Server components support is the cherry on top.',
    image: 'https://avatar.vercel.sh/lwang',
  },
  {
    name: 'Alex Thompson',
    role: 'Tech Lead',
    company: 'StartupX',
    text: "The developer experience is unmatched. From the intuitive API design to the comprehensive documentation, everything is thoughtfully crafted. It's clear that VibeUI was built by developers who understand our needs.",
    image: 'https://avatar.vercel.sh/alexdev',
  },
]

export function Testimonials() {
  return (
    <Section
      title="Testimonials"
      subtitle="Loved by developers"
      className="container px-4 sm:px-10"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.name}
            className="bg-card/5 hover:bg-card/10 transition-colors overflow-hidden rounded-2xl flex flex-col border border-border/5"
          >
            <div className="p-8 grow">
              <div className="flex items-center mb-6">
                <img
                  className="size-12 rounded-full object-cover"
                  src={testimonial.image}
                  alt={testimonial.name}
                />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-white">
                    {testimonial.name}
                  </h3>
                  <div className="text-sm text-neutral-400">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
              <p className="text-lg text-neutral-400 leading-relaxed">
                {testimonial.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
