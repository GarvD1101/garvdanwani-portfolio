import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        foreground: "#FFFFFF",
        primary: {
          DEFAULT: "#FFFFFF",
          foreground: "#000000",
        },
        secondary: {
          DEFAULT: "#1F2937",
          foreground: "#94A3B8",
        },
        muted: {
          DEFAULT: "#111827",
          foreground: "#94A3B8",
        },
        accent: {
          DEFAULT: "#FF7E00",
          foreground: "#000000",
        },
        amber: {
          DEFAULT: "#FF7E00",
          50: "#FFFBEB",
          100: "#FEF3C7",
          200: "#FDE68A",
          300: "#FCD34D",
          400: "#FBBF24",
          500: "#FF7E00",
          600: "#D97706",
          700: "#B45309",
          800: "#92400E",
          900: "#78350F",
        },
        border: "#1F2937",
        "border-subtle": "#161E2E",
        "border-bright": "#374151",
        card: {
          DEFAULT: "#050505",
          foreground: "#FFFFFF",
        },
        telemetry: {
          bg: "#000000",
          panel: "#060606",
          elevated: "#0D0D0D",
          border: "#1F2937",
          "border-subtle": "#141B26",
          amber: "#FF7E00",
          dim: "#64748B",
          text: "#94A3B8",
          bright: "#FFFFFF",
          green: "#10B981",
          red: "#EF4444",
        },
      },
      borderRadius: {
        none: "0px",
        sm: "2px",
        DEFAULT: "2px",
        md: "2px",
        lg: "2px",
        xl: "2px",
        "2xl": "2px",
        full: "9999px",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
      },
      animation: {
        "pulse-fast": "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "blink": "blink 1s step-end infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
