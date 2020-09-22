<style>
  div.body {
    padding-bottom: 1rem;
  }
</style>

<div class="modal-content">
  <div class="box">
    <article class="media">
      <div class="media-content">
        <h2 class="is-4 title">
          <span class="icon"> <i class="fas fa-city" /> </span>
          <span> Add, remove, and re-arrange your cities </span>
        </h2>
        <div class="body">
          <slot name="search">Search/Add slot</slot>
          <hr />
          <slot name="current">Current cities slot</slot>
        </div>
        <div>
          <span class="is-size-7 is-italic">To exit, press the <code>Escape</code>
            key, click the background, or click the <span class="icon"><i
                class="fas fa-delete" /></span> button in the top right.</span>
        </div>
      </div>
    </article>
  </div>
</div>
