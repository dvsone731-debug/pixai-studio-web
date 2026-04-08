import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6366F1",
        accent: "#06B6D4",
        dark: "#0F172A",
        surface: "#1E293B",
        muted: "#64748B",
      },
    },
  },
  plugins: [],
};
export default config;
