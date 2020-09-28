import type { Writable, Readable } from "svelte/store";
import type { LinearScale } from "./utils";

export type Margins = {
  top: number;
  bottom: number;
  left: number;
  right: number;
};

export type ChartContext = {
  x1: Writable<number>;
  y1: Writable<number>;
  x2: Writable<number>;
  y2: Writable<number>;
  xScale: Readable<LinearScale>;
  yScale: Readable<LinearScale>;
  xScaleInverse: Readable<LinearScale>;
  yScaleInverse: Readable<LinearScale>;
  pointer: Writable<{
    x: number;
    y: number;
    left: number;
    top: number;
  } | null>;
  width: Writable<number>;
  height: Writable<number>;
  clip: boolean;
  margins: Writable<Margins>;
};

/**
 * Generics not yet supported on svelte components.
 *
 * Use this as a stand-in.
 *
 * https://github.com/sveltejs/rfcs/pull/38
 */
export type DataRecord = Record<string, number>;
