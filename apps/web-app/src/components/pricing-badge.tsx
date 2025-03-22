import { Badge } from '@acme/ui/badge'

interface PricingBadgeProps {
  price?: number
  currency?: string
}

export function PricingBadge({ price, currency = 'USD' }: PricingBadgeProps) {
  if (!price) return null

  const formatPrice = (price: number, currency: string) => {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency,
      minimumFractionDigits: 0,
    })

    return formatter.format(price / 100)
  }

  return (
    <Badge variant="secondary" className="bg-primary text-primary-foreground">
      {formatPrice(price, currency)}
    </Badge>
  )
}
