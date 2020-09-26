<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let isFirst: boolean = false;
  export let isLast: boolean = false;
</script>

<style>
</style>

<div class="dropdown is-hoverable">
  <div class="dropdown-trigger">
    <button
      class="button is-white"
      aria-haspopup="true"
      aria-controls="dropdown-menu2"
      aria-label="show-dropdown-menu"
      title="Show the dropdown menu">
      <span class="icon is-small">
        <i class="fas fa-angle-down" aria-hidden="true" />
      </span>
    </button>
  </div>
  <div class="dropdown-menu" id="dropdown-menu2" role="menu">
    <div class="dropdown-content">
      <button
        class="dropdown-item button is-white"
        on:click={() => dispatch('refresh')}>
        <span class="icon is-small"> <i class="fas fa-sync" /></span>
        <span>Refresh data</span>
      </button>
      <hr class="dropdown-divider" />
      <button
        class="dropdown-item button is-white"
        disabled={isFirst}
        on:click={() => dispatch('move-up')}>
        <span class="icon is-small"> <i class="fas fa-sort-up" /></span>
        <span>Move up</span>
      </button>
      <button
        class="dropdown-item button is-white"
        disabled={isLast}
        on:click={() => dispatch('move-down')}>
        <span class="icon is-small"> <i class="fas fa-sort-down" /></span>
        <span>Move down</span>
      </button>
      <hr class="dropdown-divider" />
      <button
        class="dropdown-item button is-white has-text-danger"
        on:click={() => dispatch('remove')}>
        <span class="icon is-small"> <i class="fas fa-times" /></span>
        <span>Remove</span>
      </button>
    </div>
  </div>
</div>
