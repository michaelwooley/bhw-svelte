<script>
  import { WEATHER_STAT_SPEC, WEATHER_UNITS } from "@app/common/weather";
  import Stat from "@app/components/CityCurrentWeatherStat/index.svelte";

  let k = Object.keys(WEATHER_UNITS);
  console.log(k.map((k_) => `${k_} = "${k_}"`).join(",\n"));
</script>

<style>
</style>

<article class="panel">
  <p class="panel-heading">Current weather</p>
  {#each WEATHER_STAT_SPEC as { id, name, abbrev, description, unit, icon, isDefault }}
    {#if isDefault}
      <Stat
        {name}
        value={4}
        {description}
        {icon}
        unit={WEATHER_UNITS[unit].name}
        unitAbbrev={WEATHER_UNITS[unit].abbrev} />
    {/if}
  {/each}
</article>
