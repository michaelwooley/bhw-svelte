<script lang="ts">
  import { weatherDataStore } from "@app/stores";
  import { STATIONS } from "@app/common/data";
  import type { IStationName } from "@app/common/data";
</script>

<div class="container">
  <div class="box">
    <h1 class="title is-1">Must run this in chrome, not firefox!</h1>
  </div>
  <div class="field is-grouped">
    <div class="buttons has-addons is-large">
      <button
        title="refresh all"
        class="button is-outlined"
        on:click={() => weatherDataStore.refreshAll()}>
        <span class="icon"> <i class="fas fa-sync" /> </span>
        <span>Refresh all</span></button>
      <button
        title="console.log all"
        class="button is-outlined"
        on:click={() => console.log($weatherDataStore)}>
        <span class="icon"> <i class="fas fa-print" /> </span>
        <span><code>console.log</code> all</span></button>
      <button
        title="remove all"
        class="button is-outlined is-danger"
        on:click={() => weatherDataStore.removeAll()}>
        <span class="icon"> <i class="fas fa-trash" /> </span>
        <span>Remove all</span></button>
    </div>
  </div>
  <hr />

  <div class="columns is-4">
    <div class="column">
      <div class="box">
        {#each STATIONS as { id, city, name }}
          {#if !$weatherDataStore.latest[id]}
            <div class="columns">
              <div class="column">{city} ({id})</div>
              <div class="column is-narrow">
                <div class="buttons has-addons">
                  <button
                    class="button is-success is-small"
                    on:click={() => weatherDataStore.add({ id, city, name })}>
                    <span class="icon"> <i class="fas fa-plus" /> </span>
                  </button>
                </div>
              </div>
            </div>
          {/if}
        {/each}
      </div>
    </div>
    <div class="column">
      <div class="box">
        {#each $weatherDataStore.stations as { id, station, lastUpdated }, i}
          <div class="columns">
            <div class="column">{station.name} ({id})</div>
            <div class="column is-narrow">
              <div class="buttons has-addons">
                <button
                  title="Down"
                  class="button is-small"
                  disabled={i === $weatherDataStore.stations.length - 1}
                  on:click={() => weatherDataStore.moveDown(i)}>
                  <span class="icon"> <i class="fas fa-chevron-down" /> </span>
                </button>
                <button
                  title="Up"
                  class="button is-small"
                  disabled={i === 0}
                  on:click={() => weatherDataStore.moveUp(i)}>
                  <span class="icon"> <i class="fas fa-chevron-up" /> </span>
                </button>
                <button
                  title="Refresh"
                  class="button is-small"
                  on:click={() => weatherDataStore.refresh(id)}>
                  <span class="icon"> <i class="fas fa-sync" /> </span>
                </button>
                <button
                  title="remove"
                  class="button is-danger is-small"
                  on:click={() => weatherDataStore.remove(id)}>
                  <span class="icon"> <i class="fas fa-trash" /> </span>
                </button>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>
