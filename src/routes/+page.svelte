<script lang="ts">
  import { goto } from "$app/navigation";
  import { VideoPlayer } from "$lib/project";
  import { Carousel } from "$lib/project";
  import { Typography, Button, Input } from "$lib/ui";

  let name: string;
  let email: string;
  let phone: number;
  let message: string;

  const mailTo = (
    name: string,
    email: string,
    phone: number,
    message: string
  ) => {
    let anchor = document.createElement("a");
    anchor.href = `mailto:info@spsrealty.in?subject=Hey, this is ${name} and I wanted to know more about SPS&body=Hi,I found this website and wanted to share this message: ${message}. I am adding my phone number ${phone} and email ${email} here and hope to get responded soon.`;
    anchor.click();
    anchor.remove();
  };
</script>

<main id="home">
  <section class="section-one">
    <div class="container">
      <h1>
        <Typography type="heading" _color="var(--secondary-900)"
          >A Real Estate Company For a Purpose!</Typography
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
          l10n={{ buttonLabel: "Contact Us" }}
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
  <section class="gallery">
    <div class="container">
      <div class="section-header">
        <Typography type="heading" _color="var(--secondary-900)"
          >Our Latest Projects</Typography
        >
        <br />
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
          l10n={{ label: "Name", placeholder: "" }}
          bind:value={name}
        />
        <br />
        <Input
          args={{ variant: "email" }}
          l10n={{ label: "Email", placeholder: "" }}
          bind:value={email}
        />
        <br />
        <Input
          args={{ variant: "mobile" }}
          l10n={{ label: "Phone", placeholder: "" }}
          bind:value={phone}
        />
        <br />
        <Input
          args={{ variant: "textarea" }}
          l10n={{ label: "Message", placeholder: "" }}
          bind:value={message}
        />
        <br />
        <Button
          args={{ variant: "primary" }}
          l10n={{ buttonLabel: "Send Message" }}
          handlers={{ click: () => mailTo(name, email, phone, message) }}
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
      padding-block-start: 8rem;
      padding-block-end: 64px;
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
      &#contact {
        padding-top: 100px;
        margin-top: -100px;
      }
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
