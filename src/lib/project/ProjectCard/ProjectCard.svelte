<script lang="ts">
  import { Typography } from "../../ui";
  import type {
    IProjectCardL10n,
    IProjectCardContent,
    IProjectCardArgs,
  } from "../../types";
  export let content: IProjectCardContent;
  export let l10n: IProjectCardL10n;
  export let args: IProjectCardArgs;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  class="card"
  role="button"
  tabindex="0"
  aria-label="go to project"
  on:click={args.click}
>
  <img src={content.src} alt={l10n.title} />
  <Typography type="caption" _color="var(--secondary-700)"
    >{l10n.title}</Typography
  >
  <Typography type="body" _color="var(--secondary-500)">{l10n.type}</Typography>
</div>

<style lang="scss">
  .card {
    cursor: pointer;
    & > img {
      inline-size: 100%;
      aspect-ratio: 1/1;
      border-radius: 8px;
      object-fit: cover;
    }
  }
</style>
