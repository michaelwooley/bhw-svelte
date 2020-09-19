<script>
  import Nav from "@app/containers/Nav.svelte";
  import { weatherLatest } from "@app/services/weather";

  async function getLatest(stationId: string) {
    const res = await weatherLatest(stationId);

    data = JSON.stringify(res);
  }

  let data: string;
</script>

<Nav />

<button on:click={() => getLatest('KBVI')}>Good request</button>
<button on:click={() => getLatest('KBVI2')}>Bad request</button>

{#if data}<code> {data} </code>{/if}

<main />
