<script>
  import CityBlockPlaceholder from "@app/components/CityBlockPlaceholder/index.svelte";
  import { modalStore } from "@app/stores";
</script>

<CityBlockPlaceholder on:click={() => modalStore.toggle('city')} />
