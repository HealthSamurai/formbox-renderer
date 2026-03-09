import type { Config } from "tailwindcss";

const config: Config = {
  content: {
    relative: true,
    files: ["./lib/**/*.{ts,tsx}"],
  },
};

export default config;
