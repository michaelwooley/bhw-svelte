<script context="module">
  import { getContext, setContext } from "svelte";
  import { derived, writable } from "svelte/store";
  import type { ChartContext } from "./types";
  import { linearScale } from "./utils";

  const key = {};
  export function getChartContext() {
    return getContext<ChartContext>(key);
  }
</script>

<script>
  export let x1: number = 0;
  export let y1: number = 0;
  export let x2: number = 1;
  export let y2: number = 1;
  export let clip: boolean = false;

  let chart: HTMLDivElement;
  const _x1 = writable<number>(x1);
  const _y1 = writable<number>(y1);
  const _x2 = writable<number>(x2);
  const _y2 = writable<number>(y2);
  const width = writable<number>(250);
  const height = writable<number>(250);
  const pointer = writable<{
    x: number;
    y: number;
    left: number;
    top: number;
  } | null>(null);

  const xScale = derived([_x1, _x2], ([$x1, $x2]) =>
    linearScale([$x1, $x2], [0, 100])
  );
  const yScale = derived([_y1, _y2], ([$y1, $y2]) =>
    linearScale([$y1, $y2], [100, 0])
  );
  const xScaleInverse = derived(xScale, ($xScale) => $xScale.inverse());
  const yScaleInverse = derived(yScale, ($yScale) => $yScale.inverse());

  $: _x1.set(x1);
  $: _y1.set(y1);
  $: _x2.set(x2);
  $: _y2.set(y2);

  const handleMousemove = <
    T extends Event & { clientX: number; clientY: number }
  >(
    e: T
  ) => {
    const bcr = chart.getBoundingClientRect();
    const left = e.clientX - bcr.left;
    const top = e.clientY - bcr.top;
    const x = $xScaleInverse((100 * left) / (bcr.right - bcr.left));
    const y = $yScaleInverse((100 * top) / (bcr.bottom - bcr.top));
    pointer.set({ x, y, left, top });
  };

  const handleMouseleave = () => {
    pointer.set(null);
  };

  setContext<ChartContext>(key, {
    x1: _x1,
    y1: _y1,
    x2: _x2,
    y2: _y2,
    xScale,
    yScale,
    xScaleInverse,
    yScaleInverse,
    pointer,
    width,
    height,
    clip,
  });
</script>

<style>
  .pancake-chart {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
  }
  .clip {
    overflow: hidden;
  }
</style>

<!-- NOTE: Does not like that using store rather than variable w/ bind. -->
<div
  class="pancake-chart"
  bind:this={chart}
  bind:clientWidth={$width}
  bind:clientHeight={$height}
  on:mousemove={handleMousemove}
  on:mouseleave={handleMouseleave}
  class:clip>
  <slot />
</div>
