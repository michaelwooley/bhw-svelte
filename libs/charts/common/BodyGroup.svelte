<script>
  import { getChartContext } from "../Chart.svelte";
  import { VIEW_SCALE } from "../constants";
  import { linearScale } from "../utils";

  const { margins, width, height } = getChartContext();

  // TODO Move to overall chart component
  $: xMarginsScale = linearScale([0, $width], [0, VIEW_SCALE]);
  $: yMarginsScale = linearScale([0, $height], [0, VIEW_SCALE]);

  $: scaleX =
    (VIEW_SCALE - xMarginsScale($margins.left + $margins.right)) / VIEW_SCALE;
  $: scaleY =
    (VIEW_SCALE - yMarginsScale($margins.top + $margins.bottom)) / VIEW_SCALE;
  $: transform = `translate(${xMarginsScale($margins.left)} ${yMarginsScale(
    $margins.top
  )}) scale(${scaleX} ${scaleY})`;
</script>

<g {transform} class="body chart-group" vector-effect="non-scaling-stroke">
  <slot />
</g>
