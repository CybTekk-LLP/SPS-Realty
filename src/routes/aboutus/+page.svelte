<script lang="ts">
  import { TextCard } from "$lib/project";
  import { Typography } from "$lib/ui";
</script>

<main>
  <section class="about" id="about">
    <div class="container">
      <h1>
        <Typography type="heading" _color="var(--secondary-900)"
          >About us</Typography
        >
      </h1>
      <div class="cards">
        <TextCard
          args={{ variant: "default" }}
          l10n={{
            heading: "Our Approach",
            subHeading: "A Real Estate Company for a purpose!",
            content: [
              "We dream of coming up with innovation, strategically designed to enhance the thriving residential hub. With approximately 30 years of experience in infrastructure and 900 projects delivered across India, we seek to match up the lifestyle of the entire area, becoming a center for social and economic growth. Currently, we have 40 ongoing projects, all aimed at driving progress and quality. Our focus always revolves around one entity: our customers.",
              "Ever since our parent company, SP Singla Constructions, was initiated, we have moved forward with every new step, trying to meet the needs, ideas, and demands of our clients. With the same philosophy, we aim to practice it here. We believe in more than just buying or selling properties! Our main objective lies in creating homes and enhancing communities.",
            ],
          }}
        />
        <TextCard
          args={{ variant: "listCard" }}
          l10n={{
            heading: "Why SPS Realty:",
            content: [
              "We are here to set up a benchmark in the world of Real Estate!",
              "Meet Our Team who aim to be a Real Estate Advisor with a knack for meeting every client’s need, each time.",
              "Our team will ensure that the property garners the major returns on the investment.",
              "Our experts are the straight shooters and know exactly what price a home will sell for and what needs to be done to result in the maximum profits.",
              "More importantly! Our Expert Team will never try to sell something to you that is not just well. We would ensure to become a golden ticket for our clients.",
            ],
          }}
        />
        <TextCard
          args={{ variant: "default" }}
          l10n={{
            heading: "Our Mission:",
            subHeading: "A Real Estate Solutions Company",
            content: [
              "Our mission is to ensure real service that is not measured or bought with money but with sincerity and integrity. SPS Realty is a professional, full-service real estate solutions firm that buys and sells properties. We specialise in buying homes, renovations, and reselling to real home buyers and landlords.",
              "At SPS Realty, our team is immensely motivated, informative, ethical, and full of resources. Our dedicated staff is expertise in committing to helping people with their real estate requirements and ensuring successful deals. Our sincere staff has the integrity to follow up on the commitments and work sincerely to navigate any transaction to make sure you are entirely informed for making the best decision in terms of perfect homes.",
            ],
          }}
        />
        <TextCard
          args={{ variant: "default" }}
          l10n={{
            heading: "Our Vision",
            subHeading: "",
            content: [
              "We desire to empower dreams and build legacies! The main vision at SPS Realty is to be an unmeasurable leader in the field of real estate. We aim to be recognized for transforming lives through exceptional service, best solutions, and a refined commitment to extremely sustainable and thriving communities. For us property is not just a space to live, but a space that transcends bricks and mortar bringing up dreams, and memories and also enhancing value.",
              "Our main vision is to ensure every client with not just a property, but a place to call home! We believe in setting an impression on the landscape we serve. We focus not only on building structures but also on setting a benchmark in the world of real estate!",
            ],
          }}
        />
      </div>
    </div>
  </section>
  <section class="projects">
    <div class="container">
      <div class="achievements">
        <div class="project-card">
          <Typography type="body" _color="var(--secondary-700)"
            >Ongoint Projects</Typography
          >
          <br />
          <Typography type="heading" _color="var(--secondary-900)">2</Typography
          >
        </div>
        <div class="project-card">
          <Typography type="body" _color="var(--secondary-700)"
            >Awards Won</Typography
          >
          <br />
          <Typography type="heading" _color="var(--secondary-900)">4</Typography
          >
        </div>
        <div class="project-card">
          <Typography type="body" _color="var(--secondary-700)"
            >Total Area (in sqft)</Typography
          >
          <br />
          <Typography type="heading" _color="var(--secondary-900)"
            >4 l</Typography
          >
        </div>
      </div>
      <div class="started-in">
        <Typography type="heading" _color="var(--secondary-700)"
          >Started in <Typography
            type="heading"
            _color="var(--tertiary-900)"
            renderInline={true}>2023</Typography
          ></Typography
        >
      </div>
    </div>
  </section>
</main>

<style lang="scss">
  main {
    & > .about {
      &#about {
        padding-top: 100px;
        margin-top: -100px;
      }
      & > .container {
        max-width: 1280px;
        inline-size: 90vw;
        margin-inline: auto;
        & > h1 {
          text-align: center;
          margin-block-end: 2.5rem;
        }
        & > .cards {
          display: grid;
          grid-template-columns: repeat(2, auto);
          gap: 20px;
          @media screen and (width <= 768px) {
            grid-template-columns: auto;
            gap: 40px;
          }
        }
      }
    }
    & > .projects {
      margin-block-start: 2.5rem;
      margin-block-end: 5rem;
      & > .container {
        max-inline-size: 1280px;
        inline-size: 90vw;
        margin-inline: auto;
        & > .achievements {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          @media screen and (width <= 768px) {
            display: block;
          }
          & > .project-card {
            inline-size: 33%;
            @media screen and (width <= 768px) {
              inline-size: 90vw;
              margin-block-end: 2.5rem;
            }
            background-color: var(--primary-700);
            text-align: center;
            padding-inline: 80px;
            padding-block: 85px;
            border: 1px solid var(--primary-700);
            border-radius: 6px;
          }
        }
        & > .started-in {
          background-color: var(--primary-700);
          border: 1px solid var(--primary-700);
          border-radius: 6px;
          margin-block-start: 2.5rem;
          text-align: center;
          padding-block: 53px;
        }
      }
    }
  }
</style>
