<script>
  import CityBlockDropdown from "@app/components/CityBlockDropdown/index.svelte";
  import { weatherDataStore } from "@app/stores";
  import { onDestroy } from "svelte";

  export let id: string;
  export let idx: number;

  let isLast: boolean = false;
  let isFirst: boolean;
  $: isFirst = idx === 0;

  const unsubscribe = weatherDataStore.subscribe((data) => {
    isLast = idx === data.stations.length - 1;
  });

  onDestroy(unsubscribe);
</script>

<CityBlockDropdown
  {isFirst}
  {isLast}
  on:refresh={() => weatherDataStore.refresh(id)}
  on:move-up={() => weatherDataStore.moveUp(idx)}
  on:move-down={() => weatherDataStore.moveDown(idx)}
  on:remove={() => weatherDataStore.remove(id)} />
