<script lang="ts">
  import { Splide, SplideSlide } from "@splidejs/svelte-splide";
  import "@splidejs/svelte-splide/css";

  export let src: string[];
</script>

<Splide
  options={{ rewind: true, type: "loop", padding: "5rem" }}
  aria-label="SPS realty gallery"
>
  {#each src as image}
    <SplideSlide>
      <img src={image} alt="ongoing projects" />
    </SplideSlide>
  {/each}
</Splide>

<style lang="scss">
  img {
    inline-size: 100%;
    block-size: 500px;
    object-fit: cover;
    image-rendering: optimizeSpeed;
  }
</style>
