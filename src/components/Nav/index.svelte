<script lang="ts">
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  let menuOpen = false;

  function handleToggleCities(e: Event): void {
    dispatch("toggle-city", {});
  }
</script>

<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="/"> <strong>Weather</strong> | Svelte </a>

    <button
      role="button"
      class="navbar-burger burger button is-white"
      aria-label="menu"
      aria-expanded="false"
      data-target="navbarMenu"
      class:is-active={menuOpen}
      on:click={() => {
        menuOpen = !menuOpen;
      }}>
      <span aria-hidden="true" />
      <span aria-hidden="true" />
      <span aria-hidden="true" />
    </button>
  </div>

  <div id="navbarMenu" class="navbar-menu" class:is-active={menuOpen}>
    <div class="navbar-start" />

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <button class="button is-primary" on:click={handleToggleCities}>
            <span class="icon is-medium"> <i class="fas fa-city" /> </span>
            <span>Cities</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</nav>
