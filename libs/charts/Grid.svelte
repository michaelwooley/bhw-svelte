<script>
  import { getChartContext } from "./Chart.svelte";
  import { getTicks } from "./utils";

  export let count: number = 5;
  export let ticks: number[] | undefined = undefined;
  export let vertical: boolean = false;
  export let line: boolean = true;

  const { x1, y1, x2, y2, xScale, yScale } = getChartContext();
  const VERTICAL = {};
  const HORIZONTAL = {};

  $: orientation = vertical ? VERTICAL : HORIZONTAL;

  $: _ticks =
    ticks ||
    (orientation === HORIZONTAL
      ? getTicks($y1, $y2, count)
      : getTicks($x1, $x2, count));

  $: style =
    orientation === HORIZONTAL
      ? (n: number) => `width: 100%; height: 0; top: ${$yScale(n)}%`
      : (n: number) => `width: 0; height: 100%; left: ${$xScale(n)}%`;
</script>

<style>
  .pancake-grid-item {
    position: absolute;
    left: 0;
    top: 0;
  }

  .grid-line {
    position: relative;
    display: block;
  }

  .grid-line span {
    position: absolute;
    left: 0;
    bottom: 2px;
    font-family: sans-serif;
    font-size: 14px;
    color: #999;
  }

  .horizontal {
    width: calc(100% + 2em);
    left: -2em;
  }

  .line.vertical {
    height: 100%;
    bottom: -2em;
  }

  .line.horizontal {
    border-bottom: 1px dashed #ccc;
  }

  .line.vertical {
    border-left: 1px dashed #ccc;
  }
</style>

<div class="pancake-grid">
  {#each _ticks as tick, i}
    <div class="pancake-grid-item" style={style(tick)}>
      <div
        class="grid-line"
        class:line
        class:vertical
        class:horizontal={!vertical}>
        <span>
          <slot value={tick} first={i === 0} last={i === _ticks.length - 1}>
            {tick}
          </slot>
        </span>
      </div>
    </div>
  {/each}
</div>
