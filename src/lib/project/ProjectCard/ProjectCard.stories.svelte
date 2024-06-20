<script context="module" lang="ts">
  import { Story, Template } from "@storybook/addon-svelte-csf";
  import ProjectCard from "./ProjectCard.svelte";

  export const meta = {
    title: "Components/Project/ProjectCard",
    component: ProjectCard,
  };
</script>

<Template let:args>
  <ProjectCard
    {...args}
    content={{ src: "https://picsum.photos/700" }}
    l10n={{ title: "project 1", type: "commercial project" }}
    args={{ click: () => alert("works") }}
  ></ProjectCard>
</Template>

<Story name="card" args={{}} />
