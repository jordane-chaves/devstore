import { z } from 'zod'

const envSchema = z.object({
  NEXT_PUBLIC_API_BASE_URL: z.url(),
})

const envParsed = envSchema.safeParse(process.env)

if (!envParsed.success) {
  console.error(
    'Invalid environment variables',
    z.flattenError(envParsed.error).fieldErrors,
  )

  throw new Error('Invalid environment variables.')
}

export const env = envParsed.data
