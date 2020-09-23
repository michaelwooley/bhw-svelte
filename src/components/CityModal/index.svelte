<style>
  div.outer {
    width: 90vw;
  }

  div.body {
    min-height: 70vh;
  }
</style>

<div class="modal-content box outer">
  <article class="media">
    <div class="media-content">
      <h1 class="is-4 title">
        <span class="icon"> <i class="fas fa-city" /> </span>
        <span> Add, remove, and re-arrange your cities </span>
      </h1>
      <div class="body columns">
        <slot name="add">
          <div class="column is-one-quarter box">Search/Add slot</div>
        </slot>
        <slot name="current">
          <div class="column">Current cities slot</div>
        </slot>
      </div>
      <div>
        <span class="is-size-7 is-italic">To exit, press the <code>Escape</code>
          key, click the background, or click the <span class="icon"><i
              class="fas fa-times" /></span> button in the top right.</span>
      </div>
    </div>
  </article>
</div>
