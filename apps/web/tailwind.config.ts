import intersectTailwindConfig from '@intersectapi/ui/tailwind.config'
import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{ts,tsx}', '../../packages/ui/src/**/*.{ts,tsx}'],
  presets: [intersectTailwindConfig]
} satisfies Config;
