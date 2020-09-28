<script>
  import { getChartContext } from "./Chart.svelte";

  const { clip } = getChartContext();
</script>

<style>
  svg {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: visible;
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

<svg viewBox="0 0 100 100" preserveAspectRatio="none" class:clip>
  <slot />
</svg>
