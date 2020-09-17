<script lang="ts">
  import Nav from "@app/components/Nav/index.svelte";

  import { modalStore } from "@app/stores";
</script>

<Nav on:toggle-city={() => modalStore.toggle('city')} />
