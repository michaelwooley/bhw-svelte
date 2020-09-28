<!--<script>
  import type { WeatherApiStationObservations } from "src/types/weather-api";

  export let data: WeatherApiStationObservations;

  let x1 = 0; //+Infinity;
  let x2 = 100; //-Infinity
  let y1 = 2010; // +Infinity;
  let y2 = 2019; // -Infinity;

  console.log(data);
</script><Chart {x1} {x2} {y1} {y2}>
  <Grid horizontal count={5} let:value>
    <div class="grid-line horizontal"><span>{value}</span></div>
  </Grid>

  <Grid vertical count={5} let:value><span class="x-label">{value}</span></Grid>

  <Svg>
    <SvgLine data={country.data} let:d>
      <path class="data" {d} />
    </SvgLine>
  </Svg>

  <!-- {#if closest}
    <Point x={closest.x} y={closest.y}>
      <span class="annotation-point"></span>
      <div class="annotation" style="transform: translate(-{100 * ((closest.x - x1) / (x2 - x1))}%,0)">
        <strong>{closest.country.name}</strong>
        <span>{closest.x}: {closest.y} years</span>
      </div>
    </Point>
  {/if} -->

<!-- <Quadtree data={points} bind:closest/> -->
<!-- </Chart> -->
-->
