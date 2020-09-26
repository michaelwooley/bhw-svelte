<script>
  import CityBlockDropdown from "./index.svelte";

  export let isFirst: boolean = false;
  export let isLast: boolean = false;
</script>

<div class="is-pulled-right">
  <CityBlockDropdown
    {isFirst}
    {isLast}
    on:refresh
    on:remove
    on:move-up
    on:move-down />
</div>
