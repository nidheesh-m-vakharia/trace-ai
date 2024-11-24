import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: "var(--font-inter)",
        serif: "var(--font-serif)",
        mono: "var(--font-mono)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
    require("tailwindcss-fluid-type")({
      settings: {
        fontSizeMin: 1.125, // 1.125rem === 18px
        fontSizeMax: 1.25, // 1.25rem === 20px
        ratioMin: 1.125, // Multiplicator Min
        ratioMax: 1.2, // Multiplicator Max
        screenMin: 20, // 20rem === 320px
        screenMax: 96, // 96rem === 1536px
        unit: "rem", // default is rem but it's also possible to use 'px'
        prefix: "", // set a prefix to use it alongside the default font sizes
        extendValues: true, // When you set extendValues to true it will extend the default values. Set it to false to overwrite the values.
      },
      // Creates the text-xx classes
      // This are the default settings and analog to the tailwindcss defaults
      // Each `lineHeight` is set unitless and we think that's the way to go especially in context with fluid type.
      values: {
        xs: [-2, 1.6],
        sm: [-1, 1.6],
        base: [0, 1.6],
        lg: [1, 1.6],
        xl: [2, 1.2],
        "2xl": [3, 1.2],
        "3xl": [4, 1.2],
        "4xl": [5, 1.1],
        "5xl": [6, 1.1],
        "6xl": [7, 1.1],
        "7xl": [8, 1],
        "8xl": [9, 1],
        "9xl": [10, 1],
      },
    }),
  ],
  variants: {
    fluidType: ["responsive"],
  },
  keyframes: {
    "caret-blink": {
      "0%,70%,100%": { opacity: "1" },
      "20%,50%": { opacity: "0" },
    },
  },
  animation: {
    "caret-blink": "caret-blink 1.25s ease-out infinite",
  },
};
export default config;
