import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/img/home-jumbotron.jpg')",
      },
    },
  },
  plugins: [],
} satisfies Config;
