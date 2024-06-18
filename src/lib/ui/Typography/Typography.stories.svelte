<script context="module" lang="ts">
  import { Story, Template } from "@storybook/addon-svelte-csf";
  import { Typography } from "..";

  export const meta = {
    title: "Components/Ui/Typography",
    component: Typography,
  };
</script>

<Template let:args>
  <Typography {...args}>
    This is a text block Lorem ipsum dolor sit amet consectetur adipisicing
    elit. Beatae dicta ad aperiam fugiat odio excepturi nulla nisi reprehenderit
    accusantium ut, quaerat nemo expedita iste eveniet deleniti dolores
    consectetur blanditiis tempora? Nulla quasi magni ab autem reiciendis. Porro
    facere error quasi quisquam. Perferendis, asperiores illum. Placeat dicta
    voluptas facilis repudiandae delectus nam temporibus at, aliquam mollitia
    autem veritatis vero. Magni, sint!
  </Typography>
</Template>

<Story name="Heading" args={{ type: "heading" }} />
<Story name="SubHeading" args={{ type: "subHeading" }} />
<Story name="Caption" args={{ type: "caption" }} />
<Story name="LargeBodyText" args={{ type: "largeBodyText" }} />
<Story name="Body" args={{ type: "body" }} />
<Story name="SmallBodyText" args={{ type: "smallBodyText" }} />
