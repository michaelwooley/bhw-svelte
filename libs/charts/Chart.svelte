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
  import Svg from "./Svg.svelte";

  export let x1: number = 0;
  export let y1: number = 0;
  export let x2: number = 1;
  export let y2: number = 1;
  export let clip: boolean = false;
  export let margins: Margins = { top: 0, bottom: 50, left: 50, right: 0 };

  let chart: HTMLDivElement;
  let _width: number = 450;
  let _height: number = 350;
  const _x1 = writable<number>(x1);
  const _y1 = writable<number>(y1);
  const _x2 = writable<number>(x2);
  const _y2 = writable<number>(y2);
  const _margins = writable<Margins>(margins);
  const width = writable<number>(_width);
  const height = writable<number>(_height);
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
  const xScaleMargins = derived(width, ($width) =>
    linearScale([0, $width], [0, VIEW_SCALE])
  );
  const yScaleMargins = derived(height, ($height) =>
    linearScale([0, $height], [0, VIEW_SCALE])
  );

  $: _x1.set(x1);
  $: _y1.set(y1);
  $: _x2.set(x2);
  $: _y2.set(y2);
  $: _margins.set(margins);

  // TODO Hide if the size of the div is too small. Allow to open in modal.

  $: childStyle = `
  height: ${$height}px;
  width: ${$width}px;
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
    xScaleMargins,
    yScaleMargins,
    pointer,
    width,
    height,
    clip,
    margins: _margins,
  });

  $: width.set(_width);
  $: height.set(_height);
</script>

<style>
  .chart {
    position: relative;
    width: 100%;
    height: 100%;
    border: 1px solid aqua;
  }

  .clip {
    overflow: hidden;
  }

  .overlapping {
    position: absolute;
    z-index: 100;
    height: 100%;
    width: 100%;
  }

  .overlapping.non-svg {
    z-index: 100;
  }

  .overlapping.svg {
    z-index: 101;
  }
</style>

<!-- NOTE: Does not like that using store rather than variable w/ bind. -->
<div
  class="chart"
  bind:this={chart}
  bind:clientWidth={_width}
  bind:clientHeight={_height}
  on:mousemove={handleMousemove}
  on:mouseleave={handleMouseleave}
  class:clip>
  <div class="non-svg overlapping" style={childStyle}>
    <slot>
      <div
        style={`$width:100%; $height:100%;background-color: rgba(205, 220, 57, 0.3); border: 2px solid rgba(255, 152, 0, 0.7);`} />
    </slot>
  </div>
  <div class="svg overlapping" style={childStyle}>
    <Svg>
      <slot name="svg" />
    </Svg>
  </div>
</div>
