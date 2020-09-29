<script>
  import { getChartContext } from "./Chart.svelte";
  import BodyDiv from "./common/BodyDiv.svelte";
  import { getTicks } from "./utils";

  export let count: number = 5;
  export let ticks: number[] | undefined = undefined;
  export let vertical: boolean = false;
  export let line: boolean = true;

  const { width, height, margins } = getChartContext();
  const VERTICAL = {};
  const HORIZONTAL = {};

  $: orientation = vertical ? VERTICAL : HORIZONTAL;

  $: _ticks =
    ticks ||
    (orientation === HORIZONTAL
      ? getTicks(0, $height - $margins.top, count)
      : getTicks(0, $width - $margins.right, count));
</script>

<style>
  .line {
    border-right: 1px dashed #ccc;
    border-bottom: 1px dashed #ccc;
  }

  .grid-item {
    position: absolute;
    left: 0;
    top: 0;
  }
</style>

<BodyDiv>
  {#each _ticks as tick}
    {#if vertical}
      <div
        class="grid-item"
        class:line
        style={`height:100%; width:0; left:${tick}px`} />
    {:else}
      <div
        class="grid-item"
        class:line
        style={`height:0%; width:100%; top:${tick}px`} />
    {/if}
  {/each}
</BodyDiv>
