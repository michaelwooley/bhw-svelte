<script>
  import CityAddElement from "./CityAddElement.svelte";

  import type { IStationName } from "@app/common/data";

  export let stations: IStationName[];
</script>

<style>
  div.nav-block {
    border-bottom: 1px solid #ededed;
    padding: 0.5rem 1rem;
  }
</style>

<nav class="box pl-0 pr-0 main">
  <div class="nav-block">
    <div class="is-size-5 has-text-weight-semibold">
      <span class="icon"> <i class="fas fa-plus" /> </span><span class="pl-3">Add
        cities</span>
    </div>
  </div>

  <!-- TODO Add search -->

  {#each stations as station}
    <CityAddElement {station} on:add />
  {/each}
</nav>
