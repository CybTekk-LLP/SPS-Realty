<script lang="ts">
  import { goto } from "$app/navigation";
  import { Navbar, Footer } from "$lib/ui";

  let label = "Subscribe";
</script>

<main>
  <Navbar
    content={{
      navOptions: [
        { name: "Home", href: "/", target: "" },
        {
          name: "Projects",
          href: "/projects",
          target: "",
        },

        { name: "About Us", href: "/#about", target: "" },
        { name: "Careers", href: "/careers", target: "" },
      ],
    }}
    handlers={{ handleContact: () => goto("/#contact") }}
  />
  <div class="spacer" aria-hidden="true"></div>
  <slot />
</main>
<Footer
  l10n={{
    subscribeLabel: "Subscribe to our newsletter",
    buttonLabel: label,
    policiesHeading: "Policies",
  }}
  content={{
    footerOptions: [
      {
        heading: "Head Office",
        subHeading: "SP Singla Construction Pvt. Ltd.",
        address: "#47, Sector-9, Panchkula-134113, Haryana, India.",
        phoneNumbers: ["0172-2570440", "2563209", "2571595", "0172-4620941"],
        fax: "0172-4620941",
        email: "spscpkl@gmail.com",
        siteLink: "www.spsingla.com",
      },
      {
        heading: "Site Office",
        subHeading: "SP Singla Construction Pvt. Ltd.",
        address:
          "#1006-1007, Pearls Best Height - 1, A-5, Netaji Subhash Place, Pitampura, Delhi-110034",
        phoneNumbers: ["0172-2570440", "2563209", "2571595", "0172-4620941"],
        fax: "011- 27357408",
        email: "delhioffice@spsingla.com",
        siteLink: "www.spsingla.com",
      },
    ],
    policies: [
      { href: "/policy?query=conduct", name: "Code of conduct" },
      { href: "/policy?query=risk", name: "Risk Management Policy" },
      { href: "/policy?query=vigil", name: "Vigil Mechanism Policy" },
      { href: "/policy?query=posh", name: "P.O.S.H Policy" },
    ],
  }}
  handlers={{ handleSubscribe: () => (label = "Subscribed!") }}
/>

<style lang="scss">
  main {
    padding-block-start: 10vh;
    & > .spacer {
      margin-block: 100px;
    }
  }
</style>
