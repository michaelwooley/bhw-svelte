<script>
  import { getChartContext } from "./Chart.svelte";
  import { VIEW_SCALE } from "./constants";

  const { clip, height, width } = getChartContext();
  const viewBox = `0 0 ${VIEW_SCALE} ${VIEW_SCALE}`;
</script>

<style>
  svg {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: visible;
    fill: none;
  }

  .clip {
    overflow: hidden;
  }

  /* 
    NOTE Skip this here because not recognized by parser. See discussion in [1] for more info
  
    [1] https://dev.to/richharris/a-new-technique-for-making-responsive-javascript-free-charts-gmp
   */
  /* svg :global(*) {
    vector-effect: non-scaling-stroke;
  } */
</style>

<svg
  height={$height}
  width={$width}
  {viewBox}
  preserveAspectRatio="none"
  class:clip>
  <slot />
</svg>
