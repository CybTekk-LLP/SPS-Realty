<script context="module" lang="ts">
  import { Story, Template } from "@storybook/addon-svelte-csf";
  import { Input } from "..";

  export const meta = {
    title: "Components/UI/Input",
    component: Input,
  };
</script>

<Template let:args>
  <Input {...args}></Input>
</Template>
<Story
  name="text"
  args={{
    args: {
      variant: "text",
    },
    l10n: {
      label: "Brand Name",
      placeholder: "e.g Kajaria",
    },
  }}
/>

<Story
  name="email"
  args={{
    args: {
      variant: "text",
    },
    l10n: {
      label: "Email Address",
      placeholder: "l.sehotra@cybtekk.com",
      errorLabel: "invalid email",
    },
    handlers: {
      // @ts-ignore
      validate: (value) => {
        return value.match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
      },
    },
  }}
/>
<Story
  name="textarea"
  args={{
    args: {
      variant: "textarea",
    },
    l10n: {
      label: "Message",
      placeholder: "Write a Message",
    },
  }}
/>
<Story
  name="Phone"
  args={{
    args: {
      variant: "mobile",
    },
    l10n: {
      label: "Phone",
      placeholder: "0000000000",
    },
  }}
/>
