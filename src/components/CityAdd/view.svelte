<script>
  import CityAdd from "./index.svelte";
  import type { IStationName } from "@app/common/data";

  export let stations: IStationName[];
</script>

<div>
  <CityAdd {stations} />
</div>
