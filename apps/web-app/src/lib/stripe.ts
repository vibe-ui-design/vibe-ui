import Stripe from 'stripe'

// Initialize Stripe with the secret key from environment variables
// Add fallback with a clear warning for development
const stripeSecretKey = process.env.STRIPE_SECRET_KEY || ''
let stripe: Stripe | null = null

// Only initialize Stripe if we have a key
if (stripeSecretKey) {
  stripe = new Stripe(stripeSecretKey, {
    // apiVersion: "2023-10-16",
  })
}

export interface CreateCheckoutSessionParams {
  priceId: string
  templateId: string
  userId: string
  successUrl: string
  cancelUrl: string
}

export async function createCheckoutSession({
  priceId,
  templateId,
  userId,
  successUrl,
  cancelUrl,
}: CreateCheckoutSessionParams) {
  try {
    if (!stripe) {
      console.warn('Stripe not initialized - missing API key')
      // Return mock data for development
      return {
        sessionId: `mock_session_${templateId}`,
        url: `${successUrl}?session_id=mock_session_${templateId}`,
      }
    }

    // Create a checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${successUrl}?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: cancelUrl,
      metadata: {
        templateId,
        userId,
      },
    })

    return { sessionId: session.id, url: session.url }
  } catch (error) {
    console.error('Error creating checkout session:', error)
    throw error
  }
}

export async function getCheckoutSession(sessionId: string) {
  try {
    if (!stripe) {
      console.warn('Stripe not initialized - missing API key')
      // Return mock data for development
      return {
        id: sessionId,
        metadata: { templateId: sessionId.replace('mock_session_', '') },
      }
    }

    const session = await stripe.checkout.sessions.retrieve(sessionId)
    return session
  } catch (error) {
    console.error('Error retrieving checkout session:', error)
    throw error
  }
}

export async function handleWebhookEvent(
  payload: Buffer,
  signature: string,
  endpointSecret: string,
) {
  try {
    if (!stripe) {
      console.warn('Stripe not initialized - missing API key')
      // Return mock data for development
      return {
        success: true,
        event: 'checkout.session.completed',
        data: {
          templateId: 'mock-template',
          userId: 'mock-user',
          sessionId: 'mock-session',
        },
      }
    }

    const event = stripe.webhooks.constructEvent(
      payload,
      signature,
      endpointSecret,
    )

    // Handle the event
    switch (event.type) {
      case 'checkout.session.completed':
        const session = event.data.object as Stripe.Checkout.Session
        // Process the successful payment
        // Update your database to mark the template as purchased by the user
        return {
          success: true,
          event: event.type,
          data: {
            templateId: session.metadata?.templateId,
            userId: session.metadata?.userId,
            sessionId: session.id,
          },
        }
      default:
        return { success: true, event: event.type }
    }
  } catch (error) {
    console.error('Error handling webhook event:', error)
    throw error
  }
}
