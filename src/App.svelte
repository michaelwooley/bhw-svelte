<script>
  import Nav from "@app/containers/Nav.svelte";
  import Footer from "@app/components/Footer/index.svelte";
  import Modals from "@app/containers/Modals.svelte";
</script>

<style>
  main.main {
    min-height: 100vh;
  }
</style>

<Nav />

<main role="main" class="main">
  <div class="container">Main part</div>
</main>

<Footer />

<Modals />
