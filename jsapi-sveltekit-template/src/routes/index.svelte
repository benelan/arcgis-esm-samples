<script>
  import { onMount } from "svelte";

  let EsriMap;

  onMount(async () => {
    const module = await import("../components/EsriMap.svelte");
    EsriMap = module.default;
  });
</script>

<h1>Welcome to SvelteKit</h1>
<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>
<svelte:component this={EsriMap} />

<style>
  @import "https://js.arcgis.com/4.24/@arcgis/core/assets/esri/themes/light/main.css";
</style>
