<script>
  import { getChartContext } from "../Chart.svelte";

  const { margins } = getChartContext();

  $: style = `
    height: calc(100% - ${$margins.top + $margins.bottom}px);
    width: calc(100% - ${$margins.left + $margins.right}px);
    left: ${$margins.left}px;
    top: ${$margins.top}px;
  `;
</script>

<style>
  .body.chart-div {
    position: absolute;
    /* border: 1px solid crimson; */
  }
</style>

<div {style} class="body chart-div">
  <slot />
</div>
