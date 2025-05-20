import type { Config } from 'tailwindcss';
import CarbonPreset from './src/lib/tailwind.carbon';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  presets: [CarbonPreset],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;