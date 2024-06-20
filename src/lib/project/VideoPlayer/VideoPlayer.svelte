<script lang="ts">
  // @ts-nocheck
  import { onMount } from "svelte";
  import { browser } from "$app/environment";

  export let poster: string;
  export let source: string[];

  let VideoPlayer;

  onMount(async () => {
    if (browser) {
      // Dynamic import of the VideoPlayer component
      const module = await import("svelte-video-player");
      VideoPlayer = module.default;
    }
  });
</script>

{#if browser && VideoPlayer}
  <svelte:component this={VideoPlayer} {poster} {source} />
{/if}
