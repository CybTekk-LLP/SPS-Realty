<script lang="ts">
  import { goto } from "$app/navigation";
  import { ProjectCard } from "$lib/project";
  let projectContent = [
    {
      id: "1",
      src: "/images/Projects/Helios.svg",
      title: "SPS Helios",
      type: "Commercial Project",
    },
  ];
</script>

<main>
  <div class="project">
    {#each Array(projectContent.length) as _, i}
      <ProjectCard
        content={{
          id: projectContent[i].id ?? "",
          src: projectContent[i].src ?? "https://picsum.photos/700",
        }}
        l10n={{
          title: projectContent[i].title ?? "Project Name",
          type: projectContent[i].type ?? " Project Type",
        }}
        args={{ click: () => goto(`/project/${projectContent[i].id}`) }}
      />
    {/each}
  </div>
</main>

<style lang="scss">
  main {
    max-inline-size: 1280px;
    margin-inline: auto;
    padding-inline: 10px;
    margin-block-start: 6vh;
    & > .project {
      margin-block-start: 16px;
      inline-size: 100%;
      display: grid;
      justify-items: center;
      gap: 16px;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
  }
</style>
