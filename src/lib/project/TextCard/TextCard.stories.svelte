<script context="module" lang="ts">
  import { Story, Template } from "@storybook/addon-svelte-csf";
  import { TextCard } from "..";

  export const meta = {
    title: "Components/Project/TextCard",
    component: TextCard,
  };
</script>

<Template let:args>
  <TextCard {...args}></TextCard>
</Template>

<Story
  name="Main"
  args={{
    args: {
      variant: "default",
    },
    l10n: {
      heading: "Our Approach",
      subHeading: "A Real Estate Company for a purpose!",
      content: [
        "We dream of coming up with innovation, strategically designed to enhance the thriving residential hub. We seek to match up the lifestyle of the entire area,becoming a centre for social and economic growth. Our aim always revolves around one entity that is our customers.",
        "We dream of coming up with innovation, strategically designed to enhance the thriving residential hub. We seek to match up the lifestyle of the entire area,becoming a centre for social and economic growth. Our aim always revolves around one entity that is our customers.",
      ],
    },
  }}
/>
<Story
  name="ListCard"
  args={{
    args: {
      variant: "listCard",
    },
    l10n: {
      heading: "Why Choose SPS Realty:",
      subHeading: "A Real Estate Company for a purpose!",
      content: [
        "We are here to set up a benchmark in the world of Real Estate!",
        "Meet Our Team who aim to be a Real Estate Advisor with a knack for meeting every client’s need, each time.",
        "Our team will ensure that the property garners the major returns on the investment.",
      ],
    },
  }}
/>
