/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./stories/**/*.{js,jsx,ts,tsx}",
    "./templates/**/*.{js,jsx,ts,tsx}",
    "./.storybook/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        default: "var(--font-family)",
      },
      colors: {
        primary: {
          50: "var(--of-primary-50)",
          100: "var(--of-primary-100)",
          200: "var(--of-primary-200)",
          300: "var(--of-primary-300)",
          400: "var(--of-primary-400)",
          DEFAULT: "oklch(var(--of-primary-oklch, 0.6679 0.223 36.45) / <alpha-value>)",
          600: "var(--of-primary-600)",
          700: "var(--of-primary-700)",
          800: "var(--of-primary-800)",
          900: "var(--of-primary-900)",
          950: "var(--of-primary-950)",
          bg: "var(--of-primary-bg)",
          text: "var(--of-primary-text)",
        },
        secondary: {
          50: "var(--of-secondary-50)",
          100: "var(--of-secondary-100)",
          200: "var(--of-secondary-200)",
          300: "var(--of-secondary-300)",
          400: "var(--of-secondary-400)",
          DEFAULT:
            "oklch(var(--of-secondary-oklch, 0.762 0.177 31.000) / <alpha-value>)",
          600: "var(--of-secondary-600)",
          700: "var(--of-secondary-700)",
          800: "var(--of-secondary-800)",
          900: "var(--of-secondary-900)",
          950: "var(--of-secondary-950)",
          bg: "var(--of-secondary-bg)",
          text: "var(--of-secondary-text)",
        },
        neutral: {
          50: "var(--of-neutral-50)",
          100: "var(--of-neutral-100)",
          200: "var(--of-neutral-200)",
          300: "var(--of-neutral-300)",
          400: "var(--of-neutral-400)",
          500: "var(--of-neutral-500)",
          600: "var(--of-neutral-600)",
          700: "var(--of-neutral-700)",
          800: "var(--of-neutral-800)",
          900: "var(--of-neutral-900)",
          950: "var(--of-neutral-950)",
        },
        of: {
          bg: "var(--of-bg)",
          surface: "var(--of-surface)",
          card: "var(--of-card)",
        },
      },
    },
  },
  plugins: [],
}

