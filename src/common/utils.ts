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
