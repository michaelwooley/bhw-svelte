<script>
  import { weatherDataStore } from "@app/stores";

  export let stationIds: string[];

  function initStore(e: Event): void {
    weatherDataStore.init(stationIds);
    storeInitialized = true;
  }

  let storeInitialized: boolean = false;
</script>

<button on:click={initStore} disabled={storeInitialized}>Init store</button>

<hr />

<hr />

{#if $weatherDataStore.length > 0}
  <code> {$weatherDataStore} </code>
{:else}
  <div>(No weather data)</div>
{/if}

<div>
  Store <strong>{storeInitialized ? ' is ' : ' is not '}</strong> initialized
</div>
