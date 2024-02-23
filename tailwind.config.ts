import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  media: false,
  theme: {
    extend: {
      fontFamily: {
        PressStart2P: "'Press Start 2P', system-ui"
      }
    },
  },
  plugins: [],
} satisfies Config

