<script lang="ts" context="module">
  import { Template, Story } from "@storybook/addon-svelte-csf";
  import { Footer } from "..";

  export const meta = {
    title: "Components/Ui/Footer",
    components: Footer,
  };
</script>

<Template let:args>
  <Footer {...args} />
</Template>

<Story
  name="main"
  args={{
    l10n: {
      subscribeLabel: "Subscribe to our newsletter",
      buttonLabel: "SUBSCRIBE",
      policiesHeading: "Policies",
    },
    content: {
      footerOptions: [
        {
          heading: "Head Office",
          subHeading: "SP Singla Construction Pvt. Ltd.",
          address: "#47, Sector-9, Panchkula-134113, Haryana, India.",
          phoneNumbers: ["0172-2570440", "2563209", "2571595", "0172-4620941"],
          fax: "0172-4620941",
          email: "spscpkl@gmail.com",
          siteLink: "www.spsinghla.com",
        },
        {
          heading: "Site Office",
          subHeading: "SP Singla Construction Pvt. Ltd.",
          address:
            "#1006-1007, Pearls Best Height - 1, A-5, Netaji Subhash Place, Pitampura, Delhi-110034",
          phoneNumbers: ["0172-2570440", "2563209", "2571595", "0172-4620941"],
          fax: "011- 27357408",
          email: "delhioffice@spsinghla.com",
          siteLink: "www.spsinghla.com",
        },
      ],
      policies: [
        { href: "/", name: "Code of conduct" },
        { href: "/", name: "Risk Management Policy" },
        { href: "/", name: "Vigil Mechanism Policy" },
        { href: "/", name: "P.O.S.H Policy" },
      ],
    },
    handlers: { handleSubscribe: () => null },
  }}
/>
