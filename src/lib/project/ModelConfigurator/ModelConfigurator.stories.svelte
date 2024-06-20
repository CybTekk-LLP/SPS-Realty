<script context="module" lang="ts">
  import { Story, Template } from "@storybook/addon-svelte-csf";
  import ModelConfigurator from "./ModelConfigurator.svelte";

  let src = "/models/scene.gltf";
  export const meta = {
    title: "Components/Project/ModelConfigurator",
    component: ModelConfigurator,
  };
</script>

<Template let:args>
  <ModelConfigurator {...args} bind:src></ModelConfigurator>
</Template>

<Story name="Model" args={{}} />
