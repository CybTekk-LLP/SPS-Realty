<script context="module" lang="ts">
    import { Story, Template } from "@storybook/addon-svelte-csf";
    import Carousel from "./Carousel.svelte";
  
    let src = ["https://picsum.photos/700/700", "https://picsum.photos/700/700", "https://picsum.photos/700/700"];
    export const meta = {
      title: "Components/Project/Carousel",
      component: Carousel,
    };
  </script>
  
  <Template let:args>
    <Carousel {...args} {src}></Carousel>
  </Template>
  
  <Story name="gallery" args={{}} />
  