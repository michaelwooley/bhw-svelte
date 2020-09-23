<script>
  import type { IStationName } from "@app/common/data";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let station: IStationName;

  let hover: boolean = false;
  function toggleHover(): void {
    hover = !hover;
  }

  function handleAdd(): void {
    dispatch("add", station);
  }
</script>

<style>
  div.nav-block {
    /* border-bottom: 1px solid #ededed; */
    /* padding: 0.5rem 1rem; */
    /* width: 100%; */
  }
</style>

<div
  on:click={handleAdd}
  on:mouseout={toggleHover}
  on:mouseover={toggleHover}
  class:has-text-weight-bold={hover}
  class="nav-block is-selectable border-bottom pr-5 pl-5 pt-1 pb-1"
  title={station.name}>
  {#if hover}
    <span class="icon has-text-primary">
      <!--  -->
      <i class="fas fa-plus-circle" aria-hidden="true" />
    </span>
  {:else}
    <span class="icon">
      <!--  -->
      <i class="fa fa-city" aria-hidden="true" />
    </span>
  {/if}

  <span class="pl-3 main">{station.city}</span>

  <!-- <span class="pl-2 is-pulled-right">
    <button
      on:click={handleAdd}
      class="button is-white is-small"
      class:has-text-white={!hover}
      class:is-primary={hover}>
      <span class="icon">
        <i class="fas fa-plus-circle" aria-hidden="true" />
      </span>
      <span>Add</span>
    </button>
  </span> -->
</div>
