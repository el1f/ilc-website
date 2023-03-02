/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-thunder)'],
        sans: ['var(--font-space-grotesk)'],
      },
      backgroundImage: {
        mapPlaceholder: "url(/assets/map-placeholder.png)"
      }
    },
  },
  plugins: [],
}
