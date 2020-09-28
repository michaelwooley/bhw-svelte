<script>
  import { getChartContext } from "./Chart.svelte";
  import type { DataRecord } from "./types";
  import { propertyAccessor } from "./utils";
  const { xScale, yScale } = getChartContext();

  export let data: DataRecord[];
  export let x: keyof DataRecord;
  export let y: keyof DataRecord;

  $: getX = propertyAccessor<DataRecord>(x);
  $: getY = propertyAccessor<DataRecord>(y);

  $: d =
    "M" + data.map((d) => `${$xScale(getX(d))},${$yScale(getY(d))}`).join("L");
</script>

<slot {d} />
