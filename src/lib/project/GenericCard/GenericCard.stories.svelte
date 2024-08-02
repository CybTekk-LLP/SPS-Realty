<script context="module" lang="ts">
  import { Story, Template } from "@storybook/addon-svelte-csf";
  import { GenericCard } from "..";

  export const meta = {
    title: "Components/Project/GenericCard",
    component: GenericCard,
  };
</script>

<Template let:args>
  <GenericCard {...args}></GenericCard>
</Template>

<Story name="card" args={{}} />
