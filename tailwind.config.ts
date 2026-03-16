import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#0A0B0F",
          card: "#12131A",
          elevated: "#0D0E13",
        },
        border: {
          DEFAULT: "#1E1F26",
          hover: "#2A2B35",
        },
        text: {
          primary: "#F5F4F0",
          secondary: "#E8E6E1",
          muted: "#8A8B8E",
          dim: "#6A6B6E",
          faint: "#4A4B4E",
        },
        accent: {
          DEFAULT: "#C8A96E",
          light: "#D4B87A",
          blue: "#6E9FC8",
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', "serif"],
        body: ['"DM Sans"', "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease-out forwards",
        "fade-in": "fadeIn 1s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
