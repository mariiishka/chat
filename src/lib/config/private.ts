import {z} from 'zod';

const privateConfigSchema = z.object({
  ADMIN_EMAILS: z.string().optional(),
  TEST_EMAIL_TOKEN: z.string().optional(),

  NEXTAUTH_URL: z.string(),
  NEXT_PUBLIC_NEXTAUTH_URL: z.string(),

  VERCEL_ENV: z.string(),

  GITHUB_ID: z.string(),
  GITHUB_SECRET: z.string()
});

export const privateConfig = privateConfigSchema.parse(process.env);
