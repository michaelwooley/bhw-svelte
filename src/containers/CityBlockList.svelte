<script>
  import { flip } from "svelte/animate";
  import CityBlock from "@app/containers/CityBlock/index.svelte";
  import { weatherDataStore } from "@app/stores";
</script>

<section class="section">
  <div class="container">
    {#each $weatherDataStore.stations as station, idx (station.id)}
      <div animate:flip>
        <CityBlock
          {station}
          {idx}
          latest={$weatherDataStore.latest[station.id]} />
      </div>
    {/each}
  </div>
</section>
