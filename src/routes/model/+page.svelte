<script lang="ts">
  // import { browser } from "$app/environment";
  // import { VideoPlayer } from "$lib/project";
  import TextCard from "$lib/project/TextCard/TextCard.svelte";
  import { Typography, Button } from "$lib/ui";
</script>

<main>
  <section class="section-one">
    <div class="container">
      <h1>
        <Typography type="heading" _color="var(--secondary-900)"
          >A Real Estate Company for a purpose!</Typography
        >
      </h1>
      <br />
      <p>
        <Typography type="largeBodyText" _color="var(--secondary-500)"
          >We believe in more than just buying or selling the properties! Our
          main objective lies in creating homes and enhancing communities.</Typography
        >
      </p>
      <br />
      <div class="btn">
        <Button
          args={{ variant: "primary" }}
          l10n={{ buttonLabel: "Contact us" }}
          handlers={{ click: () => null }}
        />
      </div>
      <br />
      <!-- {#if browser}
        <VideoPlayer
          poster="/images/Home/Poster.png"
          source={["/images/Home/Helios.mp4"]}
        />
      {/if} -->
    </div>
  </section>
  <section class="about">
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
              "We dream of coming up with innovation, strategically designed to enhance the thriving residential hub. We seek to match up the lifestyle of the entire area, becoming a centre for social and economic growth. Our aim always revolves around one entity that is our customers.",
              "Ever since our parent company SP Singla Constructions was initiated, we have moved forward with every new step trying to meet their needs, ideas, and demands. The same mythology we aim to practise here.  We believe in more than just buying or selling the properties! Our main objective lies in creating homes and enhancing communities.",
            ],
          }}
        />
        <TextCard
          args={{ variant: "default" }}
          l10n={{
            heading: "Our Approach",
            subHeading: "A Real Estate Company for a purpose!",
            content: [
              "We dream of coming up with innovation, strategically designed to enhance the thriving residential hub. We seek to match up the lifestyle of the entire area, becoming a centre for social and economic growth. Our aim always revolves around one entity that is our customers.",
              "Ever since our parent company SP Singla Constructions was initiated, we have moved forward with every new step trying to meet their needs, ideas, and demands. The same mythology we aim to practise here.  We believe in more than just buying or selling the properties! Our main objective lies in creating homes and enhancing communities.",
            ],
          }}
        />
        <TextCard
          args={{ variant: "default" }}
          l10n={{
            heading: "Our Approach",
            subHeading: "A Real Estate Company for a purpose!",
            content: [
              "We dream of coming up with innovation, strategically designed to enhance the thriving residential hub. We seek to match up the lifestyle of the entire area, becoming a centre for social and economic growth. Our aim always revolves around one entity that is our customers.",
              "Ever since our parent company SP Singla Constructions was initiated, we have moved forward with every new step trying to meet their needs, ideas, and demands. The same mythology we aim to practise here.  We believe in more than just buying or selling the properties! Our main objective lies in creating homes and enhancing communities.",
            ],
          }}
        />
        <TextCard
          args={{ variant: "default" }}
          l10n={{
            heading: "Our Approach",
            subHeading: "A Real Estate Company for a purpose!",
            content: [
              "We dream of coming up with innovation, strategically designed to enhance the thriving residential hub. We seek to match up the lifestyle of the entire area, becoming a centre for social and economic growth. Our aim always revolves around one entity that is our customers.",
              "Ever since our parent company SP Singla Constructions was initiated, we have moved forward with every new step trying to meet their needs, ideas, and demands. The same mythology we aim to practise here.  We believe in more than just buying or selling the properties! Our main objective lies in creating homes and enhancing communities.",
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
            >Projects Completed</Typography
          >
          <br />
          <Typography type="heading" _color="var(--secondary-900)"
            >15</Typography
          >
        </div>
        <div class="project-card">
          <Typography type="body" _color="var(--secondary-700)"
            >Projects Completed</Typography
          >
          <br />
          <Typography type="heading" _color="var(--secondary-900)"
            >15</Typography
          >
        </div>
        <div class="project-card">
          <Typography type="body" _color="var(--secondary-700)"
            >Projects Completed</Typography
          >
          <br />
          <Typography type="heading" _color="var(--secondary-900)"
            >15</Typography
          >
        </div>
      </div>
      <div class="started-in">
        <Typography type="heading" _color="var(--secondary-700)"
          >Started in <Typography
            type="heading"
            _color="var(--tertiary-900)"
            renderInline={true}>1996</Typography
          ></Typography
        >
      </div>
    </div>
  </section>
</main>

<style lang="scss">
  main {
    & > .section-one {
      text-align: center;
      background-color: var(--primary-700);
      padding-block: 64px;
      margin-block-end: 5rem;
      & > .container {
        max-inline-size: 1280px;
        inline-size: 90vw;
        margin-inline: auto;
        & > h1 {
          max-inline-size: 1024px;
          margin-inline: auto;
        }
        & > p {
          max-inline-size: 780px;
          margin-inline: auto;
        }
        & > .btn {
          inline-size: 238px;
        }
      }
    }
    & > .about {
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
