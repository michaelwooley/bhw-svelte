<script>
  import CityBlock from "@app/components/CityBlock/index.svelte";
  import CityBlockDropdown from "@app/containers/CityBlock/CityBlockDropdown.svelte";
  import type { WeatherDataStoreStation } from "@app/stores/weather-data";

  export let station: WeatherDataStoreStation;
</script>

<CityBlock id={station.id} name={station.station.name}>
  <div slot="dropdown">
    <CityBlockDropdown id={station.id} />
  </div>
</CityBlock>
