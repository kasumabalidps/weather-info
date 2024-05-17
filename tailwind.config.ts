import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      rotate: {
        '3d': 'rotate3d(1, 1, 1, 15deg)', // Tambahkan rotasi 3D
      },
      transitionProperty: {
        'transform': 'transform' // Tambahkan properti transisi untuk transformasi
      }
    },
  },
  variants: {
    extend: {
      transform: ['hover'], // Tambahkan varian hover untuk transformasi
    },
  },
  plugins: [],
};

export default config;
