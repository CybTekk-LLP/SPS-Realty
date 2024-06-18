<script context="module" lang="ts">
  import { Template, Story } from "@storybook/addon-svelte-csf";
  import { Button } from "..";

  export const meta = {
    title: "Components/Ui/Button",
    components: Button,
  };
</script>

<Template let:args>
  <Button {...args} />
</Template>

<Story
  name="primary"
  args={{
    args: { variant: "primary" },
    l10n: { buttonLabel: "Button Text" },
    handlers: { click: () => alert("asd") },
  }}
/>

<Story
  name="secondary"
  args={{
    args: { variant: "secondary" },
    l10n: { buttonLabel: "Button Text" },
    handlers: { click: () => alert("asd") },
  }}
/>

<Story
  name="disabled"
  args={{
    args: { variant: "disabled" },
    l10n: { buttonLabel: "Button Text" },
    handlers: { click: () => alert("asd") },
  }}
/>
