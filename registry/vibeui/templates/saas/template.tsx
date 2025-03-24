import { Button } from '@acme/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@acme/ui/card'
import { H1, P } from '@acme/ui/custom/typography'

export default function SaaSTemplate() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="text-center">
          <H1 className="mb-6">Welcome to Your SaaS Platform</H1>
          <P className="mb-8 text-muted-foreground">
            The complete solution for your business needs
          </P>
          <div className="flex justify-center gap-4">
            <Button size="lg">Get Started</Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Authentication</CardTitle>
              <CardDescription>
                Secure user authentication system
              </CardDescription>
            </CardHeader>
            <CardContent>
              <P>
                Built-in authentication with multiple providers and role-based
                access control.
              </P>
            </CardContent>
            <CardFooter>
              <Button variant="ghost">Learn More</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Billing</CardTitle>
              <CardDescription>Subscription management</CardDescription>
            </CardHeader>
            <CardContent>
              <P>
                Integrated billing system with Stripe for subscription and
                payment handling.
              </P>
            </CardContent>
            <CardFooter>
              <Button variant="ghost">Learn More</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Dashboard</CardTitle>
              <CardDescription>Analytics and reporting</CardDescription>
            </CardHeader>
            <CardContent>
              <P>
                Comprehensive dashboard with real-time analytics and
                customizable reports.
              </P>
            </CardContent>
            <CardFooter>
              <Button variant="ghost">Learn More</Button>
            </CardFooter>
          </Card>
        </div>
      </section>
    </div>
  )
}
