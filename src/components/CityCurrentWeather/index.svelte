<script>
  import Stat from "@app/components/CityCurrentWeatherStat/index.svelte";
  // import { createEventDispatcher } from "svelte";

  // const dispatch = createEventDispatcher();

  export let date: Date;
  // export let data: unknown;

  function handleDateChange(this: HTMLInputElement): void {
    console.log(this.value);
    // date = e?.target?.value;
  }
</script>

<style>
</style>

<article class="panel">
  <p class="panel-heading">Weather for</p>
  <div class="panel-block">
    <p class="control has-icons-left">
      <input
        class="input is-primary"
        type="date"
        on:change={handleDateChange}
        value={date.toLocaleString()} />
      <span class="icon is-left">
        <i class="fas fa-calendar" aria-hidden="true" />
      </span>
    </p>
  </div>
  {#each [0, 1, 2, 3] as i}
    <Stat name="name" value={4} icon="fas fa-cloud" />
  {/each}
</article>
