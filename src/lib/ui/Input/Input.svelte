<script lang="ts">
  import { onMount } from "svelte";
  import type { IInputArgs, IInputHandlers, IInputL10n } from "../../types";
  import { Typography } from "../../ui";
  import { fly } from "svelte/transition";

  export let l10n: IInputL10n;
  export let args: IInputArgs;
  export let value: string | number | undefined;
  export let inputField: HTMLInputElement | undefined = undefined;
  export let handlers: IInputHandlers = {
    validate: (_: string | number) => {
      return true;
    },
  };

  let uniqueId = "input" + Math.random().toString().split(".")[1];
  let error = false;

  const handleValidate = (value: string | number | undefined) => {
    if (!(value && handlers.validate)) {
      inputField?.removeAttribute("invalid");
      return (error = false);
    }
    error = !handlers.validate(value.toString());
    if (error) inputField?.setAttribute("invalid", "true");
  };

  const handleInput = (inputField: HTMLInputElement) => {
    if (inputField.value) {
      inputField.checkValidity() && inputField.reportValidity();
    }
  };
  const handleInputChange = (event: any) => {
    const term = event.target.value.toLowerCase();
    return term;
  };

  onMount(() => {
    if (inputField) {
      switch (args.variant) {
        case "text":
          inputField.type = "text";
          inputField.inputMode = "text";
          break;
        case "email":
          inputField.type = "email";
          inputField.inputMode = "text";
          inputField.autocomplete = "email";
          break;
        case "mobile":
          inputField.type = "tel";
          inputField.inputMode = "numeric";
          inputField.autocomplete = "tel";
          break;
        default:
          inputField.type = "text";
          inputField.inputMode = "text";
      }
    }
  });

  $: if (value) handleValidate(value);
</script>

<div class="custom-input">
  <label class="label" for={uniqueId}
    ><Typography type="body" _color="var(--secondary-700)"
      >{l10n.label}</Typography
    >
  </label>
  {#if args.variant === "textarea"}
    <textarea id={uniqueId} placeholder={l10n.placeholder} bind:value />
  {:else}
    <input
      bind:this={inputField}
      type="text"
      list={"datalistOptions" + uniqueId}
      placeholder={l10n.placeholder}
      on:invalid={() => inputField && handleInput(inputField)}
      id={uniqueId}
      bind:value
      autocomplete={l10n.autocomplete}
      on:input={handleInputChange}
    />

    {#if l10n.errorLabel && error}
      <p
        class="error-prompt"
        in:fly={{ duration: 300, y: -10 }}
        out:fly={{ duration: 100, y: -10 }}
      >
        <Typography
          type="smallBodyText"
          _fontweight="400"
          _color="var(--tertiary-900)">{l10n.errorLabel}</Typography
        >
      </p>
    {/if}{/if}
</div>

<style lang="scss">
  .custom-input {
    position: relative;
    & > .label {
      display: inline-block;
      margin-block-end: 6px;
    }
    & > textarea {
      inline-size: 100%;
      block-size: 120px;
      background-color: var(--primary-900);
      border: 1px solid var(--card);
      border-radius: 6px;
      padding-block: 16px;
      padding-inline: 20px;
      resize: vertical;
      font-family: var(--body-font);
      outline: var(--transparent);
    }
    & > input {
      inline-size: 100%;
      block-size: 44px;
      background-color: var(--primary-900);
      border: 1px solid var(--card);
      border-radius: 6px;
      padding-inline: 20px;
      outline: var(--transparent);
      position: relative;
    }
    input::placeholder {
      color: var(--secondary-500);
    }

    .error-prompt {
      position: absolute;
      -webkit-transition: opacity 0.3s ease;
      -moz-transition: opacity 0.3s ease;
      -o-transition: opacity 0.3s ease;
      transition: opacity 0.3s ease;
      opacity: 0;
      margin-inline-start: 22px;
    }
    input:not(:focus) + .error-prompt {
      opacity: 1;
    }
    input:is(:placeholder-shown) + .error-prompt {
      opacity: 0;
    }
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px var(--card) inset !important;
  }
</style>
