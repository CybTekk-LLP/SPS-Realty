<script lang="ts">
  import type { ITextCardArgs, ITextCardL10n } from "../../types";
  import { Typography } from "../../ui";
  export let l10n: ITextCardL10n;
  export let args: ITextCardArgs;
</script>

<div class="textCard">
  <p class="heading">
    <Typography type="caption" _color="var(--tertiary-900)"
      >{l10n.heading}</Typography
    >
  </p>
  {#if args.variant === "default"}
    <p>
      <Typography type="largeBodyText">{l10n.subHeading}</Typography>
    </p>
  {/if}
  <ul class:list-style={args.variant === "default"}>
    {#each Array(l10n.content.length) as _, i}
      <li>
        <Typography type="body" _color="var(--secondary-500)"
          >{l10n.content[i]}</Typography
        >
      </li>
    {/each}
  </ul>
</div>

<style lang="scss">
  .textCard {
    background-color: var(--primary-700);
    padding-inline: 40px;
    padding-block: 38px;
    border-radius: 16px;
    & > .heading {
      margin-block-end: 16px;
    }

    & > ul {
      margin-block-start: 15px;
      & > li {
        margin-block-end: 10px;
      }
      & > li::marker {
        color: var(--secondary-500);
      }
    }
    & > .list-style {
      list-style: none;
    }
  }
</style>
