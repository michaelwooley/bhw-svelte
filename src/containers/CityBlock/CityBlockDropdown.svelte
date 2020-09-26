<script>
  import CityBlockDropdown from "@app/components/CityBlockDropdown/index.svelte";
  import { weatherDataStore } from "@app/stores";

  export let id: string;
  export let idx: number;
</script>

<CityBlockDropdown
  disabled={false}
  isRight={true}
  on:refresh={() => weatherDataStore.refresh(id)}
  on:move-up={() => weatherDataStore.moveUp(idx)}
  on:move-down={() => weatherDataStore.moveDown(idx)}
  on:remove={() => weatherDataStore.remove(id)} />
