<script lang="ts">
  import GenericCard from "$lib/project/GenericCard/GenericCard.svelte";
  import Typography from "$lib/ui/Typography/Typography.svelte";

  let content = [
    {
      title: "Unparalleled Expertise",
      iconSrc: "images/WhyChooseUs/Expertise.svg",
      description:
        "With years of experience and a track record of success, SPS Realty brings unparalleled expertise to every project. Our team of seasoned professionals boasts a wealth of knowledge in all aspects of real estate construction, ensuring that your project is in capable hands from start to finish.",
    },
    {
      title: "Commitment To Excellence",
      iconSrc: "images/WhyChooseUs/Excellence.svg",
      description:
        "Excellence isn't just a goal for us; it's a standard that we uphold in everything we do. From the quality of our craftsmanship to the level of service we provide, we strive for nothing short of perfection. When you choose SPS Realty, you can rest assured that your project will be completed to the highest standards of excellence.",
    },
    {
      title: "Innovative Solutions",
      iconSrc: "images/WhyChooseUs/Solutions.svg",
      description:
        "In today's fast-paced world, innovation is key to staying ahead of the curve. At SPS Realty, we embrace innovation at every opportunity, leveraging cutting-edge technologies and sustainable practices to deliver projects that are not only functional and beautiful but also environmentally friendly and future-proof.",
    },
    {
      title: "Client-Centric Approach",
      iconSrc: "images/WhyChooseUs/Approach.svg",
      description:
        " At SPS Realty, our clients are our top priority. We understand that every project is unique, and we take the time to listen to your needs, preferences, and concerns every step of the way. Our client-centric approach ensures that your vision is brought to life exactly as you imagined it, with no detail overlooked.",
    },
    {
      title: "Transparency and Integrity",
      iconSrc: "images/WhyChooseUs/Transparency.svg",
      description:
        "We believe that honesty and transparency are the cornerstones of a successful partnership. That's why we maintain open lines of communication with our clients throughout the entire process, keeping you informed and involved every step of the way. With SPS Realty, you can trust that your project will be completed with the utmost integrity and professionalism.",
    },
    {
      title: "Proven Track Record",
      iconSrc: "images/WhyChooseUs/Track.svg",
      description:
        "Don't just take our word for it – our track record speaks for itself. Over the years, we have successfully completed countless projects of varying sizes and scopes, earning the trust and loyalty of clients across the region. When you choose [Company Name], you can have confidence knowing that you're working with a company with a proven track record of success.",
    },
  ];
</script>

<main>
  <section class="headings-section">
    <Typography type="heading" _color="var(--secondary-900)"
      >Why Choose US</Typography
    >
    <br />
    <br />
    <h2>
      <Typography type="subHeading" _color="var(--secondary-500)"
        >Elevate Your Expectations: Why <Typography
          type="subHeading"
          _color="var(--tertiary-900)"
          renderInline={true}
        >
          SPS Realty
        </Typography> is Your Ultimate Choice for Real Estate Construction</Typography
      >
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
      & > h2 {
        max-inline-size: 800px;
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
