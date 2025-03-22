export interface ComponentFile {
  name: string
  path: string
  content: string
}

export interface StyleFile {
  name: string
  path: string
  content: string
}

export interface TemplateAsset {
  name: string
  path: string
  url: string
  type: "image" | "font" | "other"
}

export interface PricingTier {
  id: string
  name: string
  price: number // Price in cents
  currency: string
  features: string[]
  isPopular?: boolean
}

export interface TemplateMetadata {
  name: string
  description: string
  version: string
  author: string
  tags: string[]
  category: string
  previewUrl: string
  demoUrl: string
  createdAt: string
  updatedAt: string
  // New pricing fields
  isPaid: boolean
  pricing?: PricingTier[]
}

export interface TemplateConfig {
  tailwind?: {
    config?: string
    cssVars?: boolean
    baseColor?: string
    cssPath?: string
  }
  dependencies?: Record<string, string>
}

export interface Template {
  id: string
  metadata: TemplateMetadata
  components: ComponentFile[]
  styles: StyleFile[]
  assets: TemplateAsset[]
  config: TemplateConfig
}

export interface TemplateListItem {
  id: string
  name: string
  description: string
  category: string
  tags: string[]
  previewUrl: string
  demoUrl: string
  createdAt: string
  updatedAt: string
  // New pricing fields
  isPaid: boolean
  price?: number // Lowest price in cents
  currency?: string
}

export interface TemplateListResponse {
  templates: TemplateListItem[]
  total: number
}

export interface TemplateResponse {
  template: Template
}

export interface ErrorResponse {
  error: string
  message: string
  statusCode: number
}

// New types for purchases
export interface Purchase {
  id: string
  userId: string
  templateId: string
  priceId: string
  amount: number
  currency: string
  status: "pending" | "completed" | "failed"
  createdAt: string
}

export interface UserPurchases {
  purchases: Purchase[]
}

