<script>
  import CityListElement from "@app/components/CityList/CityListElement/index.svelte";
  import type { WeatherDataStoreStation } from "@app/stores/weather-data";
  import { flip } from "svelte/animate";
  import { fade } from "svelte/transition";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher<{
    "remove-all": {};
    "refresh-all": {};
  }>();

  export let stations: WeatherDataStoreStation[];
</script>

<style>
  .no-stations,
  .stations {
    height: 100%;
  }

  .no-stations > div {
    padding: 3rem;
  }
</style>

{#if stations.length > 0}
  <div
    class="stations box is-shadowless"
    in:fade={{ delay: 500, duration: 100 }}
    out:fade={{ delay: 0, duration: 100 }}>
    <div class="top-line columns mb-0 pb-0 pr-3 pl-3">
      <div class="column">
        <h2 class="title is-5 pb-0 mb-0">Current cities</h2>
      </div>
      <div class="column is-narrow buttons pb-1">
        <button
          class="button is-primary is-outlined is-small"
          on:click={() => dispatch('refresh-all')}
          title="Refresh data for all cities">
          <span class="icon"> <i class="fas fa-sync" /> </span>
          <span> Refresh all </span>
        </button>
        <button
          title="Remove all cities"
          class="button is-danger is-outlined is-small"
          on:click={() => dispatch('remove-all')}>
          <span class="icon"> <i class="fas fa-trash" /> </span>
          <span>Remove all</span></button>
      </div>
    </div>
    <div class="station-list">
      <ul>
        {#each stations as station, idx (station)}
          <div animate:flip in:fade out:fade>
            <CityListElement
              {station}
              {idx}
              isLast={idx === stations.length - 1}
              on:move-up
              on:move-down
              on:refresh
              on:remove />
          </div>
        {/each}
      </ul>
    </div>
  </div>
{:else}
  <div
    in:fade={{ delay: 500, duration: 100 }}
    out:fade={{ delay: 0, duration: 100 }}
    class="has-background-light no-stations">
    <div class="has-text-centered">
      <h2 class="title is-1 has-text-grey-dark">
        <span class="icon is-large"> <i class="fas fa-frown" /> </span>
        <br />
        <span>No cities selected!</span>
      </h2>
      <div class="has-text-grey">Add a city using the panel on the left</div>
    </div>
  </div>
{/if}
