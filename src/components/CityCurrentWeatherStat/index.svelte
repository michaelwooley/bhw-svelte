<script>
  export let icon: string;
  export let name: string;
  export let value: string | number;
  export let description: string | null = null;
</script>

<style>
  .weather-stat {
    border-bottom: 1px solid #f5f5f5;
  }
  .weather-stat > .column {
    padding: 0.2rem 0.75rem !important;
  }
  .weather-stat:hover {
    background-color: #f5f5f5;
    cursor: pointer;
  }
</style>

<div class="weather-stat columns" title={description || name}>
  <div class="column is-narrow">
    <span class="icon is-small"> <i class={`${icon} is-small`} /> </span>
  </div>
  <div class="column has-text-weight-semibold is-narrow">
    <abbr title={description || name}>{name}</abbr>
  </div>
  <div class="column has-text-right">{value}</div>
</div>
