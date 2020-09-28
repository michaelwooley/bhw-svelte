export type LinearScale = ((num: number) => number) & {
  inverse: () => LinearScale;
};

/**
 * https://github.com/Rich-Harris/yootils/blob/master/src/scale/linear.ts
 * @param domain
 * @param range
 */
export function linearScale(
  domain: [number, number],
  range: [number, number]
): LinearScale {
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

export const propertyAccessor = <T extends {}>(k: keyof T) => (d: T) => d[k];
