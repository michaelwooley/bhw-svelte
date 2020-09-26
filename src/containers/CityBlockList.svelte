<script>
  import CityBlock from "@app/containers/CityBlock/index.svelte";
  import { weatherDataStore } from "@app/stores";
</script>

<section class="section">
  <div class="container">
    {#each $weatherDataStore.stations as station}
      <CityBlock {station} />
    {/each}
  </div>
</section>
