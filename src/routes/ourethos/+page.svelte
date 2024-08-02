<script lang="ts">
  import GenericCard from "$lib/project/GenericCard/GenericCard.svelte";
  import Typography from "$lib/ui/Typography/Typography.svelte";

  let content = [
    {
      title: "Integrity",
      iconSrc: "images/Ethos/Integrity.svg",
      description:
        "Integrity is the bedrock of our operations. We conduct ourselves with honesty, transparency, and accountability in all our interactions, ensuring that our clients, partners, and stakeholders trust us implicitly. Our commitment to integrity extends beyond words to actions, as we strive to uphold the highest ethical standards in everything we do.",
    },
    {
      title: "Community",
      iconSrc: "images/Ethos/Community.svg",
      description:
        "We are more than just a construction company; we are members of the communities we serve. We recognize the importance of giving back and actively engage in initiatives that enrich the lives of those around us. Whether it's supporting local charities, promoting education, or investing in infrastructure development, we are committed to making a positive impact and building stronger, more resilient communities.",
    },
    {
      title: "Excellence",
      iconSrc: "images/Ethos/Excellence.svg",
      description:
        "Excellence is not just a goal for us; it is a relentless pursuit. From conceptualization to execution, we aim for nothing short of perfection in every aspect of our projects. Our team of experts, equipped with unparalleled skills and knowledge, ensures that each structure we build is a masterpiece of craftsmanship and innovation. We set the bar high and constantly challenge ourselves to exceed expectations, delivering results that inspire and endure.",
    },
    {
      title: "Sustainability",
      iconSrc: "images/Ethos/Sustainability.svg",
      description:
        "As stewards of the environment, we recognize the profound impact our actions have on the world around us. That's why sustainability lies at the heart of everything we do. From adopting eco-friendly construction practices to integrating green technologies into our designs, we are committed to minimizing our environmental footprint and contributing to a more sustainable future.",
    },
    {
      title: "Collaoration",
      iconSrc: "images/Ethos/Collaboration.svg",
      description:
        "Collaboration is key to our success. We believe in the power of synergy, leveraging the diverse talents and perspectives of our team, clients, and partners to achieve shared goals. By fostering a culture of collaboration and open communication, we create an environment where creativity flourishes, ideas thrive, and innovation thrives.",
    },
  ];
</script>

<main>
  <section class="headings-section">
    <Typography type="heading" _color="var(--secondary-900)"
      >Our Ethos</Typography
    >
    <br />
    <br />
    <h2>
      <Typography type="subHeading" _color="var(--secondary-500)"
        >“Building on a Foundation of Integrity and Excellence”</Typography
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
