<script>
  import { weatherLatest, weatherHistorical } from "@app/services/weather";

  async function getLatest(stationId: string) {
    const res = await weatherLatest(stationId);

    data = JSON.stringify(res);
  }

  async function getHistorical(stationId: string) {
    const res = await weatherHistorical(stationId, 2);

    data = JSON.stringify(res);
  }

  let data: string;
</script>

<button on:click={() => getLatest('KBVI')}>Good request</button>
<button on:click={() => getHistorical('KBVI2')}>Bad request</button>

<hr />

{#if data}<code> {data} </code>{/if}
