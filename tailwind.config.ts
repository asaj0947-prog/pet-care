import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#26312c",
        muted: "#66736c",
        line: "#dde5df",
        cream: "#fff9ef",
        sage: "#6f9d7a",
        "sage-dark": "#436b52",
        coral: "#ef8b73",
        gold: "#d7a84f",
        blue: "#5d8fb4"
      },
      boxShadow: {
        soft: "0 18px 48px rgba(35, 49, 43, 0.14)",
        map: "0 22px 60px rgba(0, 0, 0, 0.24)"
      },
      fontFamily: {
        sans: ["Microsoft YaHei", "PingFang SC", "Arial", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
