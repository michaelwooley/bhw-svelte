<script>
  import { flip } from "svelte/animate";
  import CityBlock from "@app/containers/CityBlock/index.svelte";
  import CityBlockPlaceholder from "@app/containers/CityBlockPlaceholder.svelte";
  import { weatherDataStore } from "@app/stores";
</script>

<section class="section">
  <div class="container">
    <div class="city-blocks">
      {#each $weatherDataStore.stations as station, idx (station.id)}
        <div animate:flip>
          <CityBlock
            {station}
            {idx}
            latest={$weatherDataStore.latest[station.id]} />
        </div>
      {/each}
    </div>
    <div class="add-one-prompt">
      <CityBlockPlaceholder />
    </div>
  </div>
</section>
