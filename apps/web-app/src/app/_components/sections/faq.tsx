import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@acme/ui/accordion'
import { Section } from '../section'

interface FAQ {
  question: string
  answer: string
}

const faqs: FAQ[] = [
  {
    question: 'What makes VibeUI different from other UI libraries?',
    answer:
      'VibeUI combines the power of Shadcn UI, Radix, and Tailwind with a focus on motion and accessibility. Our components are not just beautiful, but also performant and fully type-safe, making development a breeze.',
  },
  {
    question: 'Is VibeUI free and open source?',
    answer:
      'Yes! VibeUI is completely free and open source under the MIT license. You can use it in personal and commercial projects without any restrictions.',
  },
  {
    question: 'Do I need to know Tailwind CSS to use VibeUI?',
    answer:
      'While familiarity with Tailwind CSS is helpful, our components are designed to work out of the box. We provide comprehensive documentation and examples to help you get started quickly.',
  },
  {
    question: 'How do I get started with VibeUI?',
    answer:
      "Getting started is simple. Install the package via npm, follow our quick setup guide, and you'll be building beautiful interfaces in minutes. Check out our documentation for detailed instructions.",
  },
  {
    question: 'Does VibeUI support server components?',
    answer:
      'Yes! VibeUI is built with React Server Components in mind. Most of our components work seamlessly with RSC, and we clearly mark client-only components in our documentation.',
  },
  {
    question: 'Can I customize the components to match my brand?',
    answer:
      'Absolutely! Every component in VibeUI is highly customizable through Tailwind CSS classes and CSS variables. You can easily modify colors, spacing, animations, and more to match your brand identity.',
  },
]

export function FAQ() {
  return (
    <Section
      id="faq"
      title="FAQ"
      subtitle="Everything you need to know"
      className="container px-4 sm:px-10"
    >
      <Accordion
        type="single"
        collapsible
        className="w-full max-w-3xl mx-auto py-10"
      >
        {faqs.map((faq, index) => (
          <AccordionItem
            key={faq.question}
            value={`item-${index}`}
            className="border-b border-border/5"
          >
            <AccordionTrigger className="text-left hover:no-underline text-lg text-white">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-lg text-neutral-400">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  )
}
