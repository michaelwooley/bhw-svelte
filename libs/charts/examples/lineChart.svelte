<script>
  import Chart from "../Chart.svelte";
  // import Svg from "../Svg.svelte";
  import SvgLine from "../SvgLine.svelte";
  import Grid from "../Grid.svelte";
  import BodyGroup from "../common/BodyGroup.svelte";

  import { countries, years } from "./countryData";

  export let width: number = 450;
  export let height: number = 200;

  let x1 = +Infinity;
  let x2 = -Infinity;
  let y1 = +Infinity;
  let y2 = -Infinity;

  countries.forEach((country) => {
    country.data.forEach((d) => {
      if (d.x < x1) x1 = d.x;
      if (d.x > x2) x2 = d.x;
      if (d.y < y1) y1 = d.y;
      if (d.y > y2) y2 = d.y;
    });
  });

  let closest;
  let filter = "";

  $: regex = filter ? new RegExp(filter, "i") : null;
  $: filtered = regex
    ? countries.filter((country) => (regex || /.+/).test(country.name))
    : countries;

  $: points = filtered.reduce<
    {
      x: number;
      y: number;
      country: {
        name: string;
        data: {
          x: number;
          y: number;
        }[];
      };
    }[]
  >((points, country) => {
    return points.concat(
      country.data.map((d) => ({
        x: d.x,
        y: d.y,
        country,
      }))
    );
  }, []);

  $: chartStyle = `width:${width}px; height: ${height}px`;
</script>

<style>
  .chart {
    /* border: 1px solid aqua; */
    resize: both;
    overflow: auto;
  }
</style>

<div>
  <div class="content">
    <p>Re-size the chart by dragging around the bottom-right corner.</p>
  </div>
  <hr />
  <div class="chart" style={chartStyle}>
    <Chart {x1} {x2} {y1} {y2}>
      <Grid line count={5} let:value />
      <Grid vertical line count={5} let:value />

      <g slot="svg">
        {#each filtered as country, i}
          {#if i < 3}
            <SvgLine x="x" y="y" data={country.data} />
          {/if}
        {/each}
        <!-- <BodyGroup>
        <rect $height="100" $width="100" stroke="black" fill="none" />
      </BodyGroup> -->
      </g>
    </Chart>
  </div>
</div>
