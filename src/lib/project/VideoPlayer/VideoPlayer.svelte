<script lang="ts">
  import VideoPlayer from "svelte-video-player";

  export let poster: string;
  export let source: string[];
</script>

<VideoPlayer {poster} {source} />
