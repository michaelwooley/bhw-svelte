<script>
  export let id: string;
  export let name: string;
</script>

<div class="card mb-5" {id}>
  <header class="card-header">
    <p class="card-header-title">{name}</p>
    <div class="card-header-icon">
      <slot name="dropdown">
        <span class="icon">
          <i class="fas fa-ellipsis-v" aria-hidden="false" />
        </span>
      </slot>
    </div>
  </header>
  <div class="card-content columns">
    <div class="column is-one-quarter">
      <slot name="current-weather">
        <div class="box has-background-primary-light">Current weather</div>
      </slot>
    </div>
    <div class="column">
      <slot name="graph">
        <div class="box has-background-primary-light">Weather graph</div>
      </slot>
    </div>
  </div>
</div>
