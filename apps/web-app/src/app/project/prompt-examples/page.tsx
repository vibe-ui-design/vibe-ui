import { Button } from '@acme/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@acme/ui/card'
import { Sparkles } from 'lucide-react'
import Link from 'next/link'
import { SiteFooter } from '~/components/site-footer'
import { SiteHeader } from '~/components/site-header'

const promptExamples = [
  {
    title: 'E-commerce Dashboard',
    description:
      'A dashboard for managing an online store with sales analytics and inventory management.',
    prompt: `Create a modern e-commerce dashboard with a clean, professional design using a dark color scheme with purple accents. The dashboard should include:

1. A header with logo, search bar, notifications icon, and user profile dropdown
2. A sidebar navigation with links to Dashboard, Products, Orders, Customers, Analytics, and Settings
3. A main content area with:
   - Key metrics cards showing Total Sales, Orders, Customers, and Conversion Rate
   - A sales chart showing revenue over time (line chart)
   - A recent orders table with order ID, customer, product, status, and amount
   - A top-selling products section with product images, names, and sales counts
   - An inventory status section showing low stock items

Include responsive design for mobile and tablet views. Use shadcn/ui components including Card, Table, Tabs, and Charts. Implement a clean, minimalist aesthetic with subtle animations for state changes.`,
    components: ['Card', 'Table', 'Chart', 'Tabs', 'Dropdown', 'Badge'],
  },
  {
    title: 'Fitness Tracking App',
    description:
      'A mobile-friendly app for tracking workouts, progress, and setting fitness goals.',
    prompt: `Design a fitness tracking application with a motivational, energetic interface using a dark theme with vibrant accent colors. The app should include:

1. A dashboard homepage showing:
   - Daily activity summary with progress rings for steps, calories, and active minutes
   - Weekly workout summary chart
   - Next scheduled workout card
   - Recent achievements badges

2. A workout tracking section with:
   - Timer/stopwatch functionality
   - Exercise list with sets, reps, and weight inputs
   - Rest timer between sets
   - Progress visualization

3. A goals section where users can:
   - Set and track fitness goals
   - View progress towards goals with progress bars
   - Receive motivational prompts

4. A profile section showing:
   - User stats and measurements
   - Progress photos
   - Achievement history

Use a responsive design that works well on both mobile and desktop. Include micro-interactions and subtle animations to make the experience engaging. Implement a color scheme with dark backgrounds and bright accent colors for important metrics and actions.`,
    components: ['Progress', 'Chart', 'Calendar', 'Avatar', 'Tabs', 'Form'],
  },
  {
    title: 'Real Estate Listing Platform',
    description:
      'A platform for browsing and listing properties with search filters and map integration.',
    prompt: `Create a modern real estate listing platform with a clean, sophisticated design. The interface should include:

1. A homepage featuring:
   - A hero section with a search bar for location, price range, and property type
   - Featured listings carousel with property cards
   - Quick filter categories (Apartments, Houses, Commercial, etc.)
   - Testimonials section from satisfied customers

2. A property listing page with:
   - A grid/list toggle view of property cards
   - Advanced filter sidebar (price, bedrooms, bathrooms, amenities)
   - Map view integration showing property locations
   - Sort options (price, date listed, popularity)

3. Property detail page including:
   - Image gallery/carousel of the property
   - Key details section (price, square footage, bedrooms, etc.)
   - Full property description
   - Amenities list with icons
   - Contact agent form
   - Similar properties section

Use a light, airy color scheme with subtle shadows and clean typography. Ensure the design is fully responsive and optimized for mobile browsing. Include subtle animations for state changes and transitions between pages.`,
    components: ['Card', 'Carousel', 'Form', 'Tabs', 'Dialog', 'Dropdown'],
  },
]

export default function PromptExamplesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 bg-black text-white">
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-[58rem] text-center mb-16">
              <h1 className="text-4xl font-bold mb-4">Prompt Examples</h1>
              <p className="text-xl text-neutral-400">
                See examples of AI-generated prompts for different types of
                projects
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {promptExamples.map((example, index) => (
                <Card
                  key={index}
                  className="bg-neutral-900 border-neutral-800 text-white"
                >
                  <CardHeader>
                    <CardTitle>{example.title}</CardTitle>
                    <CardDescription className="text-neutral-400">
                      {example.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="rounded-lg border border-neutral-800 bg-black p-4 max-h-[300px] overflow-auto">
                      <pre className="whitespace-pre-wrap text-sm text-neutral-300">
                        {example.prompt}
                      </pre>
                    </div>
                    <div className="mt-4">
                      <h4 className="text-sm font-medium mb-2">
                        Components Used:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {example.components.map((component, i) => (
                          <div
                            key={i}
                            className="px-2 py-1 bg-neutral-800 rounded-md text-xs"
                          >
                            {component}
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      variant="outline"
                      className="w-full border-neutral-800 bg-transparent text-white hover:bg-neutral-800 hover:text-white"
                      asChild
                    >
                      <Link href="/project/prompt-generator">
                        <Sparkles className="mr-2 h-4 w-4" />
                        Create Your Own
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="mt-16 mx-auto max-w-[58rem] text-center">
              <h2 className="text-2xl font-bold mb-4">
                Ready to create your own prompt?
              </h2>
              <p className="text-neutral-400 mb-8">
                Use our AI-powered prompt generator to create a tailored prompt
                for your project
              </p>
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90"
              >
                <Link href="/project/prompt-generator">
                  <Sparkles className="mr-2 h-4 w-4" />
                  Generate Your Prompt
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
