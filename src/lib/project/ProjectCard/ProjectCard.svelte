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

<div
    class="card"
    role="button"
    tabindex="0"
    aria-label="go to project"
    on:click={args.click}
>
    <img src={content.src} alt={l10n.title} />
    <Typography>{l10n.title}</Typography>
    <Typography>{l10n.type}</Typography>
</div>
