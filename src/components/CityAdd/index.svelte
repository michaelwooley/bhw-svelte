<script>
  import CityAddElement from "./CityAddElement.svelte";

  import type { IStationName } from "@app/common/data";

  export let stations: IStationName[];
</script>

<style>
  nav.main {
    height: 100%;
  }
</style>

<nav class="box pl-0 pr-0 main">
  <div class="nav-block">
    <div class="title is-5 border-bottom pr-5 pl-5 pb-2">
      <span class="icon"> <i class="fas fa-plus" /> </span>
      <span class="pl-3">Add cities</span>
    </div>
  </div>

  <!-- TODO Add search -->

  {#each stations as station}
    <CityAddElement {station} on:add />
  {/each}
</nav>
