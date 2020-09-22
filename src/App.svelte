<script>
  import Nav from "@app/containers/Nav.svelte";
  import Footer from "@app/components/Footer/index.svelte";
  import { weatherLatest, weatherHistorical } from "@app/services/weather";

  async function getLatest(stationId: string): Promise<void> {
    const res = await weatherLatest(stationId);

    data = JSON.stringify(res);
  }

  async function getHistorical(stationId: string): Promise<void> {
    const res = await weatherHistorical(stationId, 2);

    data = JSON.stringify(res);
  }

  let data: string;
</script>

<style>
  main.main {
    min-height: 100vh;
  }
</style>

<Nav />

<main role="main" class="main">
  <button on:click={() => getLatest('KBVI')}>Good request</button>
  <button on:click={() => getHistorical('KBVI2')}>Bad request</button>

  {#if data}<code> {data} </code>{/if}

  {#each Array(50).fill('-') as el, i}
    <div>{i}</div>
  {/each}
</main>

<Footer />
