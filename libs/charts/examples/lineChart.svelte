<script>
  import Chart from "../Chart.svelte";
  import Svg from "../Svg.svelte";
  import SvgLine from "../SvgLine.svelte";

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
    padding: 3em 0 2em 2em;
    margin: 0 0 36px 0;
  }
</style>

<div class="chart" style={chartStyle}>
  <Chart {x1} {x2} {y1} {y2}>
    <Svg>
      {#each filtered as country}
        <SvgLine x="x" y="y" data={country.data} />
      {/each}
    </Svg>
  </Chart>
</div>
