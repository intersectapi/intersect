import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    fontFamily: {
      body: ['"Inter"', 'sans-serif'],
      display: ['"Inter"', 'sans-serif'],
    },
  },
} satisfies Config;
