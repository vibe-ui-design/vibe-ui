// import { auth } from "@clerk/nextjs/server"

export function getCurrentUserId(): string | null {
  // const { userId } = auth()
  // return userId
  return null // Temporary fallback while Clerk is commented out
}

export function isAuthenticated(): boolean {
  return !!getCurrentUserId()
}

// Mock function to check if a user has purchased a template
export function hasUserPurchasedTemplate(templateId: string): boolean {
  const userId = getCurrentUserId()
  if (!userId) return false

  // Mock purchase data - in a real app, this would come from a database
  const userPurchases: Record<string, string[]> = {
    user_2NJpyRqHBXTgxwVgqXhZkTJ8xhM: ["dashboard", "blog"],
    user_2NKpyRqHBXTgxwVgqXhZkTJ8xhN: ["landing-page", "ecommerce"],
  }

  const userPurchaseList = userPurchases[userId] || []
  return userPurchaseList.includes(templateId)
}

