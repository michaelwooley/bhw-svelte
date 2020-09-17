<script lang="ts">
  import CityBlock from "@app/components/CityBlock/index.svelte";
  import CityBlockDropdown from "@app/containers/CityBlockDropdown.svelte";

  export let id: string;
  export let name: string;
</script>

<CityBlock {id} {name}>
  <div name="dropdown">
    <CityBlockDropdown {id} />
  </div>
</CityBlock>
