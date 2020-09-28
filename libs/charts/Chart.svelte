<script context="module">
  import { getContext, setContext } from "svelte";
  import { derived, writable } from "svelte/store";
  import type { ChartContext, Margins } from "./types";
  import { linearScale } from "./utils";
  import { VIEW_SCALE } from "./constants";

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
  export let margins: Margins = { top: 0, bottom: 50, left: 50, right: 0 };

  let chart: HTMLDivElement;
  const viewBox = `0 0 ${VIEW_SCALE} ${VIEW_SCALE}`;
  const _x1 = writable<number>(x1);
  const _y1 = writable<number>(y1);
  const _x2 = writable<number>(x2);
  const _y2 = writable<number>(y2);
  const _margins = writable<Margins>(margins);
  const width = writable<number>(250);
  const height = writable<number>(250);
  const pointer = writable<{
    x: number;
    y: number;
    left: number;
    top: number;
  } | null>(null);

  const xScale = derived([_x1, _x2], ([$x1, $x2]) =>
    linearScale([$x1, $x2], [0, VIEW_SCALE])
  );
  const yScale = derived([_y1, _y2], ([$y1, $y2]) =>
    linearScale([$y1, $y2], [VIEW_SCALE, 0])
  );
  const xScaleInverse = derived(xScale, ($xScale) => $xScale.inverse());
  const yScaleInverse = derived(yScale, ($yScale) => $yScale.inverse());

  $: _x1.set(x1);
  $: _y1.set(y1);
  $: _x2.set(x2);
  $: _y2.set(y2);
  $: _margins.set(margins);
  $: if (
    margins.top + margins.bottom > VIEW_SCALE ||
    margins.left + margins.right > VIEW_SCALE
  ) {
    throw new Error(
      `Sum of margins on top/bottom or left/right must be <= ${VIEW_SCALE}`
    );
  }

  $: chartStyle = `
  grid-template-columns: ${margins.left}px auto ${margins.right}px;
  grid-template-rows: ${margins.top}px auto ${margins.bottom}px;
  `;

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
    margins: _margins,
  });
</script>

<style>
  .pancake-chart {
    position: relative;
    display: grid;
    width: 100%;
    height: 100%;
    background-color: rgba(10, 190, 200, 0.05);
    grid-template-areas:
      ".     top   ."
      "left  main  right"
      ".    bottom .";
  }

  .clip {
    overflow: hidden;
  }

  svg {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: visible;
    grid-area: svg;
  }

  .margin.left {
    grid-area: left;
    background-color: aqua;
  }

  .margin.right {
    grid-area: right;
    background-color: blue;
  }

  .margin.top {
    grid-area: top;
    background-color: crimson;
  }

  .margin.bottom {
    grid-area: bottom;
    background-color: purple;
  }

  .main {
    grid-area: main;
  }
</style>

<!-- NOTE: Does not like that using store rather than variable w/ bind. -->
<div
  class="pancake-chart"
  style={chartStyle}
  bind:this={chart}
  bind:clientWidth={$width}
  bind:clientHeight={$height}
  on:mousemove={handleMousemove}
  on:mouseleave={handleMouseleave}
  class:clip>
  <div class="svg">
    <svg
      height={$height}
      width={$width}
      {viewBox}
      preserveAspectRatio="none"
      class:clip>
      <slot />
    </svg>
  </div>
  <div class="non-svg">
    <div
      style={`width:100%; height:100%;display:inline-block;background-color: orange;`} />
  </div>
  <!-- <div class="main">
    <div
      style={`width:100%; height:100%;display:inline-block;background-color: orange;`} />
    <div style="display:inline;background-color:rgba(30,120,12,0.5);">
      <svg
        height={$height}
        width={$width}
        {viewBox}
        preserveAspectRatio="none"
        class:clip>
        <slot />
      </svg>
    </div>
  </div>
  <div class="margin left" />
  <div class="margin right" />
  <div class="margin top" />
  <div class="margin bottom" /> -->
</div>
