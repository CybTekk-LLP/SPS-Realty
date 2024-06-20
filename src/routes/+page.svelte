<script lang="ts">
  import { goto } from "$app/navigation";
  import { VideoPlayer } from "$lib/project";
  import { TextCard, Carousel } from "$lib/project";
  import { Typography, Button, Input } from "$lib/ui";

  let name: string;
  let email: string;
  let phone: number;
  let message: string;
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
      <br />
      <div class="btn">
        <Button
          args={{ variant: "primary" }}
          l10n={{ buttonLabel: "Contact us" }}
          handlers={{ click: () => goto("#contact") }}
        />
      </div>
      <br />
      <br />
      <VideoPlayer
        poster="/images/Home/Poster.png"
        source={["/images/Home/Helios.mp4"]}
      />
    </div>
  </section>
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
              "We dream of coming up with innovation, strategically designed to enhance the thriving residential hub. We seek to match up the lifestyle of the entire area, becoming a centre for social and economic growth. Our aim always revolves around one entity that is our customers.",
              "Ever since our parent company SP Singla Constructions was initiated, we have moved forward with every new step trying to meet their needs, ideas, and demands. The same mythology we aim to practise here.  We believe in more than just buying or selling the properties! Our main objective lies in creating homes and enhancing communities.",
            ],
          }}
        />
        <TextCard
          args={{ variant: "listCard" }}
          l10n={{
            heading: "Why Choose SPS Realty:",
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
            subHeading:
              "Trusted by over 5 million users all across 10 countries",
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
            >Projects Completed</Typography
          >
          <br />
          <Typography type="heading" _color="var(--secondary-900)"
            >15</Typography
          >
        </div>
        <div class="project-card">
          <Typography type="body" _color="var(--secondary-700)"
            >Awards Won</Typography
          >
          <br />
          <Typography type="heading" _color="var(--secondary-900)"
            >25</Typography
          >
        </div>
        <div class="project-card">
          <Typography type="body" _color="var(--secondary-700)"
            >Ongoint Projects</Typography
          >
          <br />
          <Typography type="heading" _color="var(--secondary-900)"
            >12</Typography
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
  <section class="gallery">
    <div class="container">
      <div class="section-header">
        <Typography type="heading" _color="var(--secondary-900)"
          >Our Latest Projects</Typography
        >
        <img src="/images/Home/HeliosLogo.svg" alt="logo" />
      </div>
      <Carousel
        src={[
          "/images/Home/GalleryImageOne.png",
          "/images/Home/GalleryImageTwo.png",
          "/images/Home/GalleryImageThree.png",
          "/images/Home/GalleryImageFour.png",
          "/images/Home/GalleryImageFive.png",
        ]}
      />
    </div>
  </section>
  <section class="form" id="contact">
    <div class="container">
      <form>
        <Typography type="heading" _color="var(--secondary-900)"
          >Get in touch</Typography
        >
        <div class="spacer" aria-hidden="true"></div>
        <Typography type="body" _color="var(--secondary-900)"
          >Our Team would love to hear from you</Typography
        >
        <br />
        <Input
          args={{ variant: "text" }}
          l10n={{ label: "Name", placeholder: "Marvin McKinney" }}
          bind:value={name}
        />
        <br />
        <Input
          args={{ variant: "email" }}
          l10n={{ label: "Email", placeholder: "xyz@example.com" }}
          bind:value={email}
        />
        <br />
        <Input
          args={{ variant: "mobile" }}
          l10n={{ label: "Phone", placeholder: "+91 0000000000" }}
          bind:value={phone}
        />
        <br />
        <Input
          args={{ variant: "textarea" }}
          l10n={{ label: "Message", placeholder: "Write a message" }}
          bind:value={message}
        />
        <br />
        <Button
          args={{ variant: "primary" }}
          l10n={{ buttonLabel: "Send Message" }}
          handlers={{ click: () => null }}
        />
      </form>
      <img src="/images/Home/GridImage.png" alt="" />
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
          display: flex;
          justify-content: center;
          :global(.button) {
            inline-size: 238px;
          }
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
    & > .gallery {
      margin-block-end: 5rem;
      background-color: var(--primary-700);
      padding-block: 64px;
      & > .container {
        max-inline-size: 1280px;
        inline-size: 90vw;
        margin-inline: auto;
        & > .section-header {
          text-align: center;
          margin-block-end: 2.5rem;
        }
      }
    }
    & > .form {
      margin-block-end: 5rem;
      background-color: var(--primary-700);
      padding-block: 64px;
      & > .container {
        max-inline-size: 1280px;
        inline-size: 90vw;
        margin-inline: auto;
        display: grid;
        grid-template-columns: auto auto;
        align-items: center;
        gap: 80px;
        @media screen and (width <= 768px) {
          grid-template-columns: auto;
        }
        & > img {
          inline-size: 100%;
        }
      }
    }
  }
</style>
