<script>
  import { getChartContext } from "../Chart.svelte";
  import { VIEW_SCALE } from "../constants";

  const { margins } = getChartContext();
  $: scaleX = (VIEW_SCALE - ($margins.left + $margins.right)) / VIEW_SCALE;
  $: scaleY = (VIEW_SCALE - ($margins.top + $margins.bottom)) / VIEW_SCALE;
  $: transform = `translate(0 ${$margins.top}) scale(${scaleX} ${scaleY})`;
</script>

<g
  {transform}
  class="margin left chart-group"
  vector-effect="non-scaling-stroke">
  <slot />
</g>
