<script>
  import { getChartContext } from "./Chart.svelte";
  import BodyGroup from "./common/BodyGroup.svelte";
  import { getTicks } from "./utils";

  export let count: number = 5;
  export let ticks: number[] | undefined = undefined;
  export let vertical: boolean = false;
  export let line: boolean = true;
  export let stroke: string = "#ccc";
  export let strokeWidth: number = 0.25;
  export let dashed: boolean = true;

  const { x1, y1, x2, y2, xScale, yScale } = getChartContext();
  const VERTICAL = {};
  const HORIZONTAL = {};

  $: orientation = vertical ? VERTICAL : HORIZONTAL;

  $: _ticks =
    ticks ||
    (orientation === HORIZONTAL
      ? getTicks($y1, $y2, count)
      : getTicks($x1, $x2, count));

  $: dashArray = dashed ? "1 1" : "none";

  // $: style =
  //   orientation === HORIZONTAL
  //     ? (n: number) => `width: 100%; height: 0; top: ${$yScale(n)}%`
  //     : (n: number) => `width: 0; height: 100%; left: ${$xScale(n)}%`;
</script>

<style>
</style>

<BodyGroup>
  <g
    class="grid"
    {stroke}
    stroke-width={`${strokeWidth}px`}
    stroke-dasharray={dashArray}>
    {#each _ticks as tick, i}
      {#if vertical}
        <line y1="0" y2="100" x1={$xScale(tick)} x2={$xScale(tick)} />
      {:else}
        <line y1={$yScale(tick)} y2={$yScale(tick)} x1="0" x2="100" />
      {/if}
    {/each}
  </g>
</BodyGroup>

<!-- <div class="pancake-grid">
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
</div> -->
