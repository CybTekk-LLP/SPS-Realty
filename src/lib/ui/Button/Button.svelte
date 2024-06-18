<script lang="ts">
  import { Typography } from "..";
  import type {
    IButtonArgs,
    IButtonHandlers,
    IButtonL10n,
  } from "./../../types";

  export let l10n: IButtonL10n;
  export let args: IButtonArgs;
  export let handlers: IButtonHandlers;
</script>

<button class={`button ${args.variant}`} on:click={handlers.click}>
  <Typography type="body"
    ><span class="button-text">{l10n.buttonLabel}</span></Typography
  >
</button>

<style lang="scss">
  .button {
    inline-size: 100%;
    block-size: 50px;
    padding-block: 15px;
    padding-inline: 20px;
    border: 1px solid var(--tertiary-900);
    border-radius: 10px;
    background-color: var(--tertiary-900);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    .button-text {
      color: var(--primary-900);
    }
    &.secondary {
      background-color: var(--tansparent);
      border-color: var(--secondary-500);
      .button-text {
        color: var(--secondary-900);
      }
    }
    &.disabled {
      background-color: var(--transparent);
      border-color: var(--secondary-500);
      cursor: not-allowed;
      .button-text {
        color: var(--secondary-900);
      }
    }
  }
</style>
