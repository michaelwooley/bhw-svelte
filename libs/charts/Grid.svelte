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

  .title {
    margin-bottom: 0;
  }

  .line.title {
    border-right: 2px solid #ccc;
    border-bottom: 2px solid #ccc;
  }

  .line.vertical {
    height: 100%;
    width: 0;
  }

  .line.horizontal {
    height: 0%;
    width: 100%;
  }

  .grid-item {
    position: absolute;
    left: 0;
    bottom: 0;
  }
</style>

<BodyDiv>
  {#if vertical}
    <div class="grid-item vertical title" class:line style={`left:0%`} />
  {:else}
    <div class="grid-item horizontal title" class:line style={`bottom:0%`} />
  {/if}

  {#each _ticks as tick}
    {#if vertical}
      <div class="grid-item vertical" class:line style={`left:${tick}%`} />
    {:else}
      <div class="grid-item horizontal" class:line style={`bottom:${tick}%`} />
    {/if}
  {/each}
</BodyDiv>
