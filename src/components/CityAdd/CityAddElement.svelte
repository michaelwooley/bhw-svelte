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
    border-bottom: 1px solid #ededed;
    padding: 0.5rem 1rem;
  }
</style>

<div
  on:mouseout={toggleHover}
  on:mouseover={toggleHover}
  class:has-text-weight-bold={hover}
  class="nav-block is-selectable"
  title={station.name}>
  <span class="icon">
    <!--  -->
    <i class="fa fa-city" aria-hidden="true" />
  </span>

  <span class="pl-3 main">{station.city}</span>
  <span class="is-pulled-right">
    <button
      on:click={handleAdd}
      class="button is-white is-small"
      class:is-primary={hover}>
      <span class="icon">
        <i class="fas fa-plus-circle" aria-hidden="true" />
      </span>
      <span>Add</span>
    </button>
  </span>
</div>
