<script>
  let hover: boolean = false;

  function toggleHover(): void {
    hover = !hover;
  }
</script>

<style>
  div.placeholder {
    cursor: pointer;
  }
</style>

<div
  on:click
  on:mouseout={toggleHover}
  on:mouseover={toggleHover}
  class="placeholder box is-shadowless is-unselectable"
  class:has-background-light={!hover}
  class:has-background-grey-lighter={hover}>
  <div class="content has-text-centered">
    <h2 class="title is-2">
      <span class="icon is-large" class:has-text-primary={hover}>
        <!--  -->
        <i class="fas fa-plus" />
      </span>
      <br />
      <span>Add or edit your cities</span>
    </h2>
    <p class="has-text-weight-bold">
      Click here to add or edit your city selections.
    </p>
    <p>
      You can always do this by clicking the "cities" button in the top right of
      the page.
    </p>
  </div>
</div>
