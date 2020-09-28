/**
 * Celcius ~> Fahrenheit conversion
 * @param t
 */
export const convertDegreesC2f = (t: number) => 1.8 * t + 32.0;

/**
 * Fahrenheit ~> Celcius conversion
 * @param t
 */
export const convertDegreesF2c = (t: number) => (t - 32.0) / 1.8;

export const convertMeter2Inch = (m: number) => m * 39.37008;
export const convertKph2Mph = (s: number) => s * 0.6213712;

/**
 * https://github.com/Rich-Harris/yootils/blob/master/src/scale/linear.ts
 * @param domain
 * @param range
 */
export default function linearScale(
  domain: [number, number],
  range: [number, number]
) {
  const d0 = domain[0];
  const r0 = range[0];
  const m = (range[1] - r0) / (domain[1] - d0);

  return Object.assign(
    (num: number) => {
      return r0 + (num - d0) * m;
    },
    {
      inverse: () => linearScale(range, domain),
    }
  );
}
