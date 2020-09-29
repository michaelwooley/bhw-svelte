<script>
  import { getChartContext } from "../Chart.svelte";

  const { margins, xScale } = getChartContext();

  // $: scaleX = (VIEW_SCALE - ($margins.left + $margins.right)) / VIEW_SCALE;
  // $: scaleY = (VIEW_SCALE - ($margins.top + $margins.bottom)) / VIEW_SCALE;
  // $: style = `transform: translate(${$margins.left} ${$margins.top}) scale(${scaleX} ${scaleY});`;
  $: style = `
    height: calc(100% - ${$margins.top + $margins.bottom}px);
    width: calc(100% - ${$margins.left + $margins.right}px);
    left: ${$margins.left}px;
    top: ${$margins.top}px;
  `;
</script>

<style>
  .body.chart-div {
    /* height: 100%; */
    /* width: 100%; */
    position: absolute;
    border: 1px solid crimson;
  }
</style>

<div {style} class="body chart-div">
  <slot />
</div>
