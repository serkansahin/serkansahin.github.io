/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'nordic-gold': '#C6A96D',
        'nordic-silver': '#E5E6E4',
        'nordic-dark': '#2A2B2E',
        'nordic-accent': '#748CAB',
      },
    },
  },
  plugins: [],
}