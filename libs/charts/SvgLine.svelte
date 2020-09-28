<script>
  import { getChartContext } from "./Chart.svelte";
  import type { DataRecord } from "./types";
  import { propertyAccessor } from "./utils";
  const { xScale, yScale } = getChartContext();

  export let data: DataRecord[];
  export let x: keyof DataRecord;
  export let y: keyof DataRecord;
  export let stroke: string = "rgba(0,0,0,0.2)";
  export let strokeWidth: number = 1;

  $: getX = propertyAccessor<DataRecord>(x);
  $: getY = propertyAccessor<DataRecord>(y);

  $: d =
    "M" + data.map((d) => `${$xScale(getX(d))},${$yScale(getY(d))}`).join("L");
</script>

<style>
  path.data {
    stroke-linejoin: round;
    stroke-linecap: round;
    fill: none;
  }
</style>

<path
  vector-effect="non-scaling-stroke"
  class="data"
  stroke-width={`${strokeWidth}px`}
  {stroke}
  {d} />
