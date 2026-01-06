import type { Config } from 'tailwindcss'
import baseConfig from '@austrino/tailwind-config'

export default {
  ...baseConfig,
  content: ['./src/**/*.{ts,tsx}', './content/**/*.mdx'],
} satisfies Config