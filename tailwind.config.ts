import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    // "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    // "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      green: {
        '100': '#B1D8B7',
        '300': '#94C973',
        '400': '#81B622',
        '600': '#6A9119',
        '900': '#2F5233',
      },
      gray: {
        '100': '#ECEEE9',
        '400': '#7F8A96',
      },
      red: {
        '100': '#F2849E',
        '400': '#DD5373',
      },
      white: {
        '100': '#FFFFFF',
      },
    },
  },
  plugins: [],
};
export default config;
