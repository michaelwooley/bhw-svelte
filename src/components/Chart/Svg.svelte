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

  svg :global(*) {
    vector-effect: non-scaling-stroke;
  }
</style>

<svg viewBox="0 0 100 100" preserveAspectRatio="none" class:clip>
  <slot />
</svg>
