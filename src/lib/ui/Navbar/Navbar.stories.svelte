<script lang="ts" context="module">
  import { Template, Story } from "@storybook/addon-svelte-csf";
  import { Navbar } from "..";

  export const meta = {
    title: "Components/Ui/Navbar",
    components: Navbar,
  };
</script>

<Template let:args>
  <Navbar {...args} />
</Template>

<Story
  name="main"
  args={{
    content: {
      navOptions: [
        { name: "Home", href: "/home", target: "_blank" },
        {
          name: "Projects",
          href: "/projects",
          subOptions: [
            { name: "On Going Projects", href: "/ongoing", target: "_blank" },
            {
              name: "Completed Projects",
              href: "/completed",
              target: "_blank",
            },
            { name: "Upcoming Projects", href: "/upcoming", target: "_blank" },
          ],
        },
        {
          name: "Investors",
          href: "/investors",
          target: "_blank",
        },
        { name: "About us", href: "/about", target: "_blank" },
        { name: "Careers", href: "/careers", target: "_blank" },
      ],
    },
  }}
/>
