<script>
  import { getChartContext } from "../Chart.svelte";
  import { VIEW_SCALE } from "../constants";

  const { margins, xScaleMargins, yScaleMargins } = getChartContext();

  $: scaleX =
    (VIEW_SCALE - $xScaleMargins($margins.left + $margins.right)) / VIEW_SCALE;
  $: scaleY =
    (VIEW_SCALE - $yScaleMargins($margins.top + $margins.bottom)) / VIEW_SCALE;
  $: transform = `translate(${$xScaleMargins($margins.left)} ${$yScaleMargins(
    $margins.top
  )}) scale(${scaleX} ${scaleY})`;
</script>

<g {transform} class="body chart-group" vector-effect="non-scaling-stroke">
  <slot />
</g>
