<script>
  import { modalStore } from "@app/stores";

  import CityModal from "./index.svelte";
</script>

<CityModal />

<button
  class="button is-large is-primary"
  on:click={() => modalStore.toggle('city')}>Open modal remotely</button>
