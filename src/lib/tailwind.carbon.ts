import colors from '@carbon/colors';
import defaultTheme from 'tailwindcss/defaultTheme';
import type { Config } from 'tailwindcss';


/* ------------------------------------------------------------------ */
/* 1 . Types                                                           */
/* ------------------------------------------------------------------ */
type TailwindStep = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950;
type CarbonStep   = 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100;

type CarbonScale  = Record<CarbonStep, string>;
type TailwindScale = Record<TailwindStep, string>;



/* ------------------------------------------------------------------ */
/* 2 . Step map                                                        */
/* ------------------------------------------------------------------ */
const STEP_MAP: Record<Exclude<TailwindStep, 950>, CarbonStep> =  { 
  50: 10, 
  100: 20, 
  200: 30, 
  300: 40,
  400: 50, 
  500: 60, 
  600: 70, 
  700: 80,
  800: 90,
  900: 100 
} as const;

/* ------------------------------------------------------------------ */
/* 3 . Type guards + helpers                                           */
/* ------------------------------------------------------------------ */

const isCarbonScale = (x: unknown): x is CarbonScale =>
  typeof x === 'object' &&
  x !== null &&
  Object.prototype.hasOwnProperty.call(x, '10') &&
  Object.prototype.hasOwnProperty.call(x, '100');


/**
 * Turns a Carbon 10–100 ramp into a Tailwind 50–950 ramp.
 * – `950` duplicates Carbon 100 unless Tailwind already had a 950 for that hue.
 */
function mapCarbonHue(scale: CarbonScale, hueName: string): TailwindScale {
  const mapped = Object.fromEntries(
    (Object.entries(STEP_MAP) as [TailwindStep, CarbonStep][]).map(
      ([twStep, cbStep]) => [twStep, scale[cbStep]]
    ),
  ) as Partial<TailwindScale>;

  const tailwind950 =
    // defaultTheme.colors is typed loosely, so cast to unknown first:
    (defaultTheme as unknown as { colors: Record<string, TailwindScale | undefined> })
      .colors?.[hueName]?.['950'];

  mapped[950] = tailwind950 ?? scale[100];

  return mapped as TailwindScale;
}


/* ------------------------------------------------------------------ */
/* 4 . Build the merged palette                                        */
/* ------------------------------------------------------------------ */
const carbonMapped: Record<string, TailwindScale> = {};
(Object.entries(colors) as [string, unknown][]).forEach(([name, value]) => {
  if (isCarbonScale(value)) {
    carbonMapped[name] = mapCarbonHue(value, name);
  }
});
console.log({carbonMapped});


const CarbonPreset: Config = {
  theme: {
    extend: {
      colors: {
        ...defaultTheme.colors,  // 1️⃣ start with Tailwind
        ...carbonMapped,         // 2️⃣ overwrite / add Carbon
      },
    },
  },
};

export default CarbonPreset;