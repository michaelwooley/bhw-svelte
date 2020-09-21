<script lang="ts">
  import { onMount } from "svelte";
  import { weatherDataStore } from "@app/stores";
  import { STATIONS } from "@app/common/data";
  import type { IStationName } from "@app/common/data";

  function initStore(): void {
    weatherDataStore.init();
    storeInitialized = true;
  }

  let storeInitialized: boolean = false;

  let stationIds: string[];
  $: stationIds = $weatherDataStore.map((d) => d.id);

  onMount(() => initStore());
</script>

<div class="container">
  <div class="box">
    <h1 class="title is-1">Must run this in chrome, not firefox!</h1>
  </div>
  <div class="field is-grouped">
    <div class="buttons has-addons is-large">
      <button
        class="button"
        disabled={storeInitialized}
        on:click={initStore}>Init store</button>
      <button
        title="refresh all"
        class="button is-outlined"
        disabled={!storeInitialized}
        on:click={() => weatherDataStore.refreshAll()}>
        <span class="icon"> <i class="fas fa-sync" /> </span>
        <span>Refresh all</span></button>
      <button
        title="console.log all"
        class="button is-outlined"
        disabled={!storeInitialized}
        on:click={() => console.table($weatherDataStore)}>
        <span class="icon"> <i class="fas fa-print" /> </span>
        <span><code>console.log</code> all</span></button>
      <button
        title="remove all"
        class="button is-outlined is-danger"
        disabled={!storeInitialized}
        on:click={() => weatherDataStore.removeAll()}>
        <span class="icon"> <i class="fas fa-trash" /> </span>
        <span>Remove all</span></button>
    </div>
  </div>
  <hr />

  {#if storeInitialized}
    <div class="columns is-4">
      <div class="column">
        <div class="box">
          {#each STATIONS as { id, city }}
            {#if stationIds.indexOf(id) < 0}
              <div class="columns">
                <div class="column">{city} ({id})</div>
                <div class="column is-narrow">
                  <div class="buttons has-addons">
                    <button
                      class="button is-success is-small"
                      on:click={() => weatherDataStore.add(city, id)}>
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
          {#each $weatherDataStore as { id, name, lastUpdated }, i}
            <div class="columns">
              <div class="column">{name} ({id})</div>
              <div class="column is-narrow">
                <div class="buttons has-addons">
                  <button
                    title="Down"
                    class="button is-small"
                    disabled={i === stationIds.length - 1}
                    on:click={() => weatherDataStore.moveDown(id)}>
                    <span class="icon">
                      <i class="fas fa-chevron-down" />
                    </span>
                  </button>
                  <button
                    title="Up"
                    class="button is-small"
                    disabled={i === 0}
                    on:click={() => weatherDataStore.moveUp(id)}>
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
  {/if}

  <hr />

  <div class="columns">
    <div class="column">
      {#if $weatherDataStore.length > 0}
        <div><code> {JSON.stringify($weatherDataStore, null, 4)} </code></div>
      {:else}
        <div>(No weather data)</div>
      {/if}
    </div>
    <div class="column content">
      <ul>
        <li>
          Store <strong>{storeInitialized ? ' is ' : ' is not '}</strong> initialized
        </li>
        <li>Active stations: <code>{JSON.stringify(stationIds)}</code></li>
      </ul>
    </div>
  </div>
</div>
