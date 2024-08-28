<script lang="ts">
  import GenericCard from "$lib/project/GenericCard/GenericCard.svelte";
  import Typography from "$lib/ui/Typography/Typography.svelte";

  let content = [
    {
      title: "Community Engagement:",
      iconSrc: "images/CSR/Community.svg",
      description:
        "We are proud to be active participants in the communities where we live and work. Through volunteerism, charitable giving, and community partnerships, we strive to make a meaningful difference in the lives of others. Whether it's supporting local schools, sponsoring community events, or participating in environmental clean-up efforts, we are dedicated to giving back and building stronger, more vibrant communities.",
    },
    {
      title: "Sustainability Initiatives:",
      iconSrc: "images/CSR/Sustainability.svg",
      description:
        "As stewards of the environment, we recognize the importance of sustainability in everything we do. From adopting eco-friendly construction practices to investing in renewable energy sources, we are committed to minimizing our environmental footprint and promoting a more sustainable future. Our sustainability initiatives extend to our projects, where we prioritize energy efficiency, resource conservation, and green building practices.",
    },
    {
      title: "Ethical Business Practices:",
      iconSrc: "images/CSR/Ethical.svg",
      description:
        "Integrity and ethical conduct are non-negotiables at SPS Realty. We hold ourselves to the highest standards of honesty, transparency, and accountability in all our business dealings. From our interactions with clients and partners to our treatment of employees and suppliers, we strive to uphold the principles of fairness, respect, and integrity in everything we do.",
    },
    {
      title: "Employee Wellbeing:",
      iconSrc: "images/CSR/Employee.svg",
      description:
        "Our employees are the heart and soul of SPS Realty, and their health, safety, and wellbeing are our top priorities. We are committed to providing a safe and supportive work environment where every employee feels valued, respected, and empowered to succeed. From competitive benefits packages to ongoing training and development opportunities, we invest in our employees' growth and success.",
    },
  ];
</script>

<main>
  <section class="headings-section">
    <Typography type="heading" _color="var(--secondary-900)"
      >Corporate Social Responsibility</Typography
    >
    <br />
    <br />
    <h2>
      <Typography type="subHeading" _color="var(--secondary-500)"
        >Making A <Typography
          type="subHeading"
          _color="var(--tertiary-900)"
          renderInline={true}>Positive Impact</Typography
        >
      </Typography>
    </h2>
  </section>
  <section class="cards">
    {#each content as item}
      <GenericCard
        content={{
          title: item.title,
          iconSrc: item.iconSrc,
          description: item.description,
        }}
      />
    {/each}
  </section>
</main>

<style lang="scss">
  main {
    max-inline-size: 1280px;
    inline-size: 90vw;
    margin-inline: auto;
    & > .headings-section {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-block-end: 5rem;
      text-align: center;
      & > h2 {
        text-align: center;
      }
    }
    & > .cards {
      display: grid;
      grid-template-columns: repeat(2, auto);
      gap: 20px;
      margin-block-end: 5rem;
      @media screen and (width <= 768px) {
        grid-template-columns: auto;
      }
    }
  }
</style>
