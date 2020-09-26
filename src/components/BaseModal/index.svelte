<script>
  import { fade } from "svelte/transition";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let isOpen: boolean = false;

  function handleClose(): void {
    if (isOpen) dispatch("close");
  }

  function handleKeyDown(e: KeyboardEvent): void {
    if (e.key === "Escape") {
      handleClose();
    }
  }
</script>

<svelte:window on:keydown={handleKeyDown} />

{#if isOpen}
  <div class="modal is-active" transition:fade={{ duration: 500 }}>
    <div
      class="modal-background"
      title="Click on the background to close"
      on:click={handleClose} />
    <slot {handleClose}>
      <div class="modal-content">
        <div class="content">
          <h2>Sample modal content</h2>
          <h3>Press escape to close</h3>
        </div>
      </div>
    </slot>
    <button
      class="modal-close is-large"
      aria-label="close"
      on:click={handleClose} />
  </div>
{/if}
