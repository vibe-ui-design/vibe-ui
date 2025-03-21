import { createEnv } from '@t3-oss/env-nextjs'
import { vercel } from '@t3-oss/env-nextjs/presets-zod'
import { z } from 'zod'

export const env = createEnv({
  /**
   * Destructure all variables from `process.env` to make sure they aren't tree-shaken away.
   */
  experimental__runtimeEnv: process.env,

  extends: [vercel()],

  /**
   * Specify your server-side environment variables schema here.
   * This way you can ensure the app isn't built with invalid env vars.
   */
  server: {
    CLERK_SECRET_KEY: z.string(),
    CLERK_WEBHOOK_SECRET: z.string(),
    NODE_ENV: z
      .enum(['development', 'production', 'test'])
      .default('development'),
    OPENAI_API_KEY: z.string(),
    POSTGRES_URL: z.string().url(),
    POSTHOG_KEY: z.string(),
  },

  skipValidation:
    !!process.env.CI || process.env.npm_lifecycle_event === 'lint',
})
