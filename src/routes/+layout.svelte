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
        { name: "About Us", href: "/aboutus", target: "" },
        { name: "Our Ethos", href: "/ourethos", target: "" },
        { name: "Why Choose Us", href: "/whychooseus", target: "" },
        { name: "CSR", href: "/csr", target: "" },
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
        address: "SCO No 413 , 2nd Floor Sector - 8 Panchkula Haryana- 134109",
        phoneNumbers: ["7546000099, 7564000099"],
        fax: "0172-4620941",
        email: "info@spsrealty.in",
        siteLink: "www.spsingla.com",
      },
      {
        heading: "Site Office",
        subHeading: "SP Singla Construction Pvt. Ltd.",
        address:
          "SPS Helios Near Penta Homes VIP Road Zirakpur Mohali Punjab-140603",
        phoneNumbers: ["7546000099, 7564000099"],
        fax: "011- 27357408",
        email: "info@spsrealty.in",
        siteLink: "www.spsingla.com",
      },
    ],
    policies: [
      { href: "/policy?query=conduct", name: "Code of conduct" },
      { href: "/policy?query=risk", name: "Risk Management Policy" },
      { href: "/policy?query=vigil", name: "Vigil Mechanism Policy" },
      { href: "/policy?query=posh", name: "P.O.S.H Policy" },
    ],
    socialLinks: {
      facebook:
        "https://www.facebook.com/people/SPS-Realty-Helios/61559663403861/",
      instagram: "https://www.instagram.com/spsrealtyindia/",
      twitter: "/",
    },
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
  main:has(#home) {
    padding-block-start: 0;
    & > .spacer {
      margin-block: 90px;
    }
  }
</style>
