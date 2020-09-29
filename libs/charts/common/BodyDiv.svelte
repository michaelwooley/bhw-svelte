<script>
  import { getChartContext } from "../Chart.svelte";

  const { margins, height, width } = getChartContext();

  $: style = `
    height: ${$height - ($margins.top + $margins.bottom)}px;
    width: ${$width - ($margins.left + $margins.right)}px;
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
