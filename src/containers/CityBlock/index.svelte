<script>
  import CityBlock from "@app/components/CityBlock/index.svelte";
  import CityCurrentWeather from "@app/components/CityCurrentWeather/index.svelte";
  import CityBlockDropdown from "@app/containers/CityBlock/CityBlockDropdown.svelte";
  import type { WeatherDataStoreStation } from "@app/stores/weather-data";
  import type { WeatherApiStationObservationLatest } from "src/types/weather-api";

  export let station: WeatherDataStoreStation;
  export let latest: WeatherApiStationObservationLatest;
  export let idx: number;
</script>

<CityBlock id={station.id} name={station.station.name}>
  <div slot="dropdown">
    <CityBlockDropdown id={station.id} {idx} />
  </div>
  <div slot="current-weather">
    <CityCurrentWeather data={latest} />
  </div>
</CityBlock>
