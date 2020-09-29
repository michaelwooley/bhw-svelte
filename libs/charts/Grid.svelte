<script>
  import { getChartContext } from "./Chart.svelte";
  import BodyDiv from "./common/BodyDiv.svelte";
  import { getTicks } from "./utils";

  export let count: number = 5;
  export let ticks: number[] | undefined = undefined;
  export let vertical: boolean = false;
  export let line: boolean = true;
  // export let stroke: string = "#ccc";
  // export let strokeWidth: number = 0.25;
  // export let dashed: boolean = true;

  const {
    x1,
    y1,
    x2,
    y2,
    xScale,
    yScale,
    width,
    height,
    margins,
  } = getChartContext();
  const VERTICAL = {};
  const HORIZONTAL = {};

  $: orientation = vertical ? VERTICAL : HORIZONTAL;

  $: _ticks =
    ticks ||
    (orientation === HORIZONTAL
      ? getTicks(0, $height - $margins.top, count)
      : getTicks(0, $width - $margins.right, count));

  // $: dashArray = dashed ? "1 1" : "none";

  // $: style =
  //   orientation === HORIZONTAL
  //     ? (n: number) => `width: 100%; height: 0; top: ${$yScale(n)}%`
  //     : (n: number) => `width: 0; height: 100%; left: ${$xScale(n)}%`;
</script>

<style>
  .line {
    border-right: 1px dashed #ccc;
  }

  .grid-item {
    position: absolute;
    left: 0;
    top: 0;
  }
</style>

<BodyDiv>
  {#each _ticks as tick, i}
    {#if vertical}
      <div
        class="grid-item"
        class:line
        style={`height:100%; width:0;left: ${tick}px`} />
    {:else}
      <div>none</div>
      <!-- <line y1={$yScale(tick)} y2={$yScale(tick)} x1="0" x2="100" /> -->
    {/if}
  {/each}
</BodyDiv>

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
