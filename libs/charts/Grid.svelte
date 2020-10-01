<script>
  import BodyDiv from "./common/BodyDiv.svelte";

  export let count: number = 5;
  export let ticks: number[] | undefined = undefined;
  export let vertical: boolean = false;
  export let line: boolean = true;

  $: _ticks =
    ticks ||
    Array(count)
      .fill("")
      .map((_, i) => (100 * (i + 1)) / count);
  // (vertical
  //   ? Array(count)
  //       .fill("")
  //       .map((_, i) => (100 * (i + 1)) / count) //getTicks(0, $width - $margins.right, count)
  //   : getTicks(0, $height - $margins.top, count));
</script>

<style>
  .line {
    border-right: 1px dashed #ccc;
    border-bottom: 1px dashed #ccc;
  }

  .grid-item {
    position: absolute;
    left: 0;
    bottom: 0;
  }
</style>

<BodyDiv>
  {#each _ticks as tick}
    {#if vertical}
      <div
        class="grid-item"
        class:line
        style={`height:100%; width:0; left:${tick}%`} />
    {:else}
      <div
        class="grid-item"
        class:line
        style={`height:0%; width:100%; bottom:${tick}%`} />
    {/if}
  {/each}
</BodyDiv>
