/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
  ],
  theme: {
    extend: {
      backgroundImage: {
        mapPlaceholder: "url(/assets/map-placeholder.png)"
      },
      fontFamily: {
        display: ['var(--font-thunder)'],
        sans: ['var(--font-space-grotesk)'],
      }
    },
  },
}
