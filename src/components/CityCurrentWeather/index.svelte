<script>
  import moment from "moment";
  import { WEATHER_STAT_SPEC, WEATHER_UNITS } from "@app/common/weather";
  import Stat from "@app/components/CityCurrentWeatherStat/index.svelte";
  import type { StationObservation } from "src/types/weather-api";

  export let data: StationObservation;

  let updatedAt: string;
  $: updatedAt = moment(data.properties.timestamp).fromNow();
  let updateTime: string;
  $: updateTime = moment(data.properties.timestamp).format("dddd, h:mm:ss a");
</script>

<style>
</style>

<article class="panel">
  <p class="panel-heading">Current weather</p>
  {#each WEATHER_STAT_SPEC as { id, name, description, unit, icon, isDefault }}
    {#if isDefault && !!data.properties[id].value}
      <Stat
        {name}
        {description}
        {icon}
        value={data.properties[id].value || ''}
        unit={WEATHER_UNITS[unit].name}
        unitAbbrev={WEATHER_UNITS[unit].abbrev} />
    {/if}
  {/each}

  <div class="panel-block is-size-7">
    <span class="is-italic">Last updated: &emsp;</span>
    <abbrev title={updateTime}>
      <time datetime={data.properties.timestamp}>{updatedAt}</time>
    </abbrev>
  </div>
</article>
