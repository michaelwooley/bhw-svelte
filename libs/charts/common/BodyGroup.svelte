<script>
  // TODO Make margin configurable
  let margin = 10;

  $: transform = `translate(${margin} 0) scale(${(100 - margin) / 100} ${
    (100 - margin) / 100
  })`;
</script>

<g {transform} class="body-group" vector-effect="non-scaling-stroke">
  <slot />
</g>
