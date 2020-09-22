<script>
  import CityListElement from "@app/components/CityListElement/index.svelte";
  import type { WeatherDataStoreStation } from "@app/stores/weather-data";

  export let stations: WeatherDataStoreStation[];
</script>

<ul>
  {#each stations as station, idx}
    <CityListElement
      {station}
      {idx}
      on:move-up
      on:move-down
      on:refresh
      on:remove />
  {/each}
</ul>
