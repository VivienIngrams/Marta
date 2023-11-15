import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["var(--font-raleway)"],
        cormorant: ["var(--font-cormorant-garamond)"],
      },
    },
  },
  plugins: [],
}
export default config
