<script>
  export let icon: string;
  export let name: string;
  export let value: string | number;
  export let unit: string;
  export let unitAbbrev: string;
  export let description: string | null = null;
</script>

<style>
  .weather-stat {
    display: flow-root;
  }

  .weather-stat .panel-icon {
    line-height: 1.5rem;
  }
</style>

<div class="weather-stat panel-block is-selectable" title={description || name}>
  <span class="panel-icon"> <i class={`${icon} is-small`} /> </span>
  <span class="has-text-weight-semibold">
    <abbr title={description || name}>{name}</abbr>
  </span>
  <span
    class="is-pulled-right">{typeof value == 'number' ? value.toPrecision(2) : value}
    <span class="is-size-7 is-italic">
      <abbr title={unit}> {unitAbbrev} </abbr>
    </span>
  </span>
</div>
