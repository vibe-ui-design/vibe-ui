'use client'

import { Button } from '@acme/ui/button'
import { Icons } from '@acme/ui/custom/icons'
import { ArrowRight } from 'lucide-react'
import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import { Section } from '../section'

interface PricingPlan {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  cta: string
  popular?: boolean
}

const plans: PricingPlan[] = [
  {
    name: 'Open Source',
    price: 'Free',
    period: 'forever',
    description: 'Perfect for open source projects and personal use.',
    features: [
      'All UI components',
      'TypeScript support',
      'Dark mode',
      'Basic animations',
      'Community support',
      'MIT license',
    ],
    cta: 'Get Started',
  },
  {
    name: 'Pro',
    price: '$49',
    period: 'month',
    description: 'For teams building production applications.',
    features: [
      'Everything in Open Source',
      'Advanced animations',
      'Premium components',
      'Priority support',
      'Private Slack channel',
      'Custom theming',
    ],
    cta: 'Start Free Trial',
    popular: true,
  },
]

export function Pricing() {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const opacities = [
    useTransform(scrollYProgress, [0, 0.1, 0.3], [0, 0, 1]),
    useTransform(scrollYProgress, [0, 0.2, 0.4], [0, 0, 1]),
  ]

  const yTransforms = [
    useTransform(scrollYProgress, [0, 0.1, 0.3], [100, 100, 0]),
    useTransform(scrollYProgress, [0, 0.2, 0.4], [100, 100, 0]),
  ]

  return (
    <Section
      id="pricing"
      title="Pricing"
      subtitle="Simple, transparent pricing"
      className="container px-4 sm:px-10"
      ref={ref}
    >
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto py-10">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            style={{ opacity: opacities[index], y: yTransforms[index] }}
            className="relative bg-card/5 hover:bg-card/10 transition-colors p-8 rounded-2xl grid grid-rows-[auto_auto_1fr_auto] border border-border/5"
          >
            {plan.popular && (
              <div className="absolute -top-3 right-8 px-3 py-1 bg-primary rounded-full text-sm font-medium text-white">
                Popular
              </div>
            )}
            <h2 className="text-2xl font-semibold mb-4 text-white">
              {plan.name}
            </h2>
            <div className="text-4xl font-bold text-white mb-2">
              {plan.price}
              <span className="text-lg font-normal text-neutral-400 ml-1">
                /{plan.period}
              </span>
            </div>
            <p className="text-lg text-neutral-400 mb-8">{plan.description}</p>

            <div className="space-y-4 mb-8">
              {plan.features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <Icons.BadgeCheck size="sm" variant="primary" />
                  <span className="text-lg text-neutral-400">{feature}</span>
                </div>
              ))}
            </div>
            <Button
              variant={plan.popular ? 'default' : 'outline'}
              size="lg"
              className="rounded-full text-lg group"
            >
              {plan.cta}
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
