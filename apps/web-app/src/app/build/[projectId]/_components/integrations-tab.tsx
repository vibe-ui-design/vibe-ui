'use client'

import { Card } from '@acme/ui/card'
import { Badge } from '@acme/ui/components/badge'
import { type IconProps, Icons } from '@acme/ui/custom/icons'
import { Switch } from '@acme/ui/switch'
import { useSelectionStore } from '../store'

type IntegrationKey =
  | 'supabase'
  | 'clerk'
  | 'stripe'
  | 'vercel'
  | 'planetscale'
  | 'uploadthing'

interface Integration {
  id: IntegrationKey
  name: string
  description: string
  icon: React.ComponentType<IconProps>
  url: string
}

const integrations: Integration[] = [
  {
    id: 'supabase',
    name: 'Supabase',
    description: 'Open source Firebase alternative with a PostgreSQL database',
    icon: Icons.BarChart2,
    url: 'https://supabase.com',
  },
  {
    id: 'clerk',
    name: 'Clerk',
    description: 'User authentication and identity management',
    icon: Icons.User,
    url: 'https://clerk.com',
  },
  {
    id: 'stripe',
    name: 'Stripe',
    description: 'Payment processing platform for internet businesses',
    icon: Icons.DollarSign,
    url: 'https://stripe.com',
  },
  {
    id: 'vercel',
    name: 'Vercel',
    description: 'Platform for frontend frameworks and static sites',
    icon: Icons.Command,
    url: 'https://vercel.com',
  },
  {
    id: 'planetscale',
    name: 'PlanetScale',
    description: 'MySQL-compatible serverless database platform',
    icon: Icons.Circle,
    url: 'https://planetscale.com',
  },
  {
    id: 'uploadthing',
    name: 'UploadThing',
    description: 'File uploading for modern web apps',
    icon: Icons.Upload,
    url: 'https://uploadthing.com',
  },
]

export function IntegrationsTab() {
  const integrationState = useSelectionStore((state) => state.integrations)
  const setIntegration = useSelectionStore((state) => state.setIntegration)

  const enabledCount = Object.values(integrationState).filter(Boolean).length

  return (
    <div className="space-y-4 p-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Integrations</h2>
        <Badge variant={enabledCount > 0 ? 'default' : 'outline'}>
          {enabledCount} enabled
        </Badge>
      </div>

      <div className="grid gap-4">
        {integrations.map((integration) => (
          <Card key={integration.id} className="overflow-hidden">
            <div className="p-4 flex items-start justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="rounded-md bg-primary/10 p-2">
                  <integration.icon size="lg" variant="primary" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium">{integration.name}</h3>
                    <a
                      href={integration.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary"
                    >
                      <Icons.ExternalLink size="xs" />
                    </a>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    {integration.description}
                  </p>
                </div>
              </div>
              <Switch
                checked={integrationState[integration.id]}
                onCheckedChange={(checked) =>
                  setIntegration(integration.id, checked)
                }
              />
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
