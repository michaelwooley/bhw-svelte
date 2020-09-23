<script>
  import type { WeatherDataStoreStation } from "@app/stores/weather-data";
  import moment from "moment";
  import { createEventDispatcher } from "svelte";

  type DetailIdx = { idx: number };
  const dispatch = createEventDispatcher<{
    "move-down": DetailIdx;
    "move-up": DetailIdx;
    remove: { station: WeatherDataStoreStation };
    refresh: { station: WeatherDataStoreStation };
  }>();

  export let station: WeatherDataStoreStation;
  export let idx: number;
  export let isLast: boolean = false;

  let lastUpdatedFull: string;
  $: lastUpdatedFull = moment(station.lastUpdated.latest).format(
    "dddd, MMMM Do YYYY, h:mm:ss a"
  );
  $: lastUpdated = moment(station.lastUpdated.latest).fromNow();
</script>

<style>
  .city-list-element {
    cursor: move;
    border: none !important;
    /* background-color: white; */
  }
</style>

<div class="border-top is-selectable pr-3 pl-3 mt-3 pt-0 pb-3">
  <div class="media city-list-element is-selectable" draggable="true">
    <div class="media-content">
      <div class="content">
        <div>
          <strong>{station.station.city}</strong>
          <small>{station.station.name}</small>
        </div>
        <div class="is-italic">
          <small>Last updated <abbr title={lastUpdatedFull}><time
                datetime={station.lastUpdated.latest.toString()}>{lastUpdated}</time></abbr></small>
        </div>
      </div>
    </div>
    <div class="media-right">
      <div class="field is-horizontal">
        <div class="field-body">
          <div class="field has-addons">
            <p class="control">
              <button
                disabled={isLast}
                class="button is-small is-white"
                title="Move the city down on the list"
                on:click={() => dispatch('move-down', { idx })}>
                <span class="icon"><i class="fas fa-chevron-down" /></span>
              </button>
            </p>
            <p class="control">
              <button
                disabled={idx === 0}
                class="button is-small is-white"
                title="Move the city up on the list"
                on:click={() => dispatch('move-up', { idx })}>
                <span class="icon"><i class="fas fa-chevron-up" /></span>
              </button>
            </p>
          </div>
          <div class="control mr-3">
            <button
              class="button is-small is-primary is-outlined"
              title="Refresh this city's data"
              on:click={() => dispatch('refresh', { station })}>
              <span class="icon"><i class="fas fa-sync" /></span>
            </button>
          </div>
          <div class="control">
            <button
              class="button is-small is-danger is-outlined"
              title="Remove the city"
              on:click={() => dispatch('remove', { station })}>
              <span class="icon"><i class="fas fa-trash" /></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
