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
        '100': '#CAD8DA',
        '400': '#8BA293',
        '900': '#292E27',
      },
      gray: {
        '400': '#7F8A96',
      },
    },
  },
  plugins: [],
};
export default config;
