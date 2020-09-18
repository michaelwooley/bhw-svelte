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
