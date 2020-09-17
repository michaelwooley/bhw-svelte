<script lang="ts">
  import CityBlockDropdown from "@app/components/CityBlockDropdown/index.svelte";

  export let id: string;

  // TODO CityBlockDropdown actions
  function handleRefresh(): void {
    alert(`Will refresh ${id}`);
  }

  function handleMoveDown(): void {
    alert(`Will move up ${id}`);
  }

  function handleMoveUp(): void {
    alert(`Will move down ${id}`);
  }

  function handleRemove(): void {
    alert(`Will remove ${id}`);
  }
</script>

<CityBlockDropdown
  disabled={true}
  isRight={true}
  on:refresh={handleRefresh}
  on:move-up={handleMoveUp}
  on:move-down={handleMoveDown}
  on:remove={handleRemove} />
