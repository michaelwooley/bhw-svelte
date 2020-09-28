<script>
  import Chart from "../Chart.svelte";
  import BodyGroup from "../common/BodyGroup.svelte";

  export let width: number = 450;
  export let height: number = 200;
  export let marginLeft: number = 10;
  export let marginRight: number = 10;
  export let marginTop: number = 10;
  export let marginBottom: number = 10;

  $: chartStyle = `width:${width}px; height: ${height}px`;
</script>

<style>
  .chart {
    border: 1px solid aqua;
  }
</style>

<div class="chart" style={chartStyle}>
  <Chart
    x1={0}
    x2={100}
    y1={0}
    y2={100}
    margins={{ left: marginLeft, right: marginRight, top: marginTop, bottom: marginBottom }}>
    <BodyGroup>
      <rect width="100" height="100" fill="rgba(45,47,23, 0.25)" />
      <text x="10" y="50" font-size="10">Body group</text>
    </BodyGroup>
  </Chart>
</div>
