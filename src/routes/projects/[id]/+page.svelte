<script lang="ts">
  import { goto } from "$app/navigation";
  import Carousel from "$lib/project/Carousel/Carousel.svelte";
  import TextCard from "$lib/project/TextCard/TextCard.svelte";
  import Button from "$lib/ui/Button/Button.svelte";
  let src = [
    "https://picsum.photos/700/700",
    "https://picsum.photos/700/700",
    "https://picsum.photos/700/700",
  ];
</script>

<main>
  <div class="header">
    <img src="/images/Models/Helios.svg" alt="Helios Project" height="100px" />
    <br />
    <br />
    <br />
    <Carousel
      src={[
        "/images/Home/GalleryImageOne.png",
        "/images/Home/GalleryImageTwo.png",
        "/images/Home/GalleryImageThree.png",
        "/images/Home/GalleryImageFour.png",
        "/images/Home/GalleryImageFive.png",
      ]}
    />

    <div class="btn">
      <Button
        args={{ variant: "primary" }}
        l10n={{ buttonLabel: "Download Brochure" }}
        handlers={{ click: () => alert("asd") }}
      />
      <Button
        args={{ variant: "secondary " }}
        l10n={{ buttonLabel: "View in 3D" }}
        handlers={{ click: () => goto("/model") }}
      />
    </div>
  </div>
  <div class="article">
    <TextCard
      args={{
        variant: "default",
      }}
      l10n={{
        heading: "Our Approach",
        subHeading: "A Real Estate Company for a purpose!",
        content: [
          "We dream of coming up with innovation, strategically designed to enhance the thriving residential hub. We seek to match up the lifestyle of the entire area,becoming a centre for social and economic growth. Our aim always revolves around one entity that is our customers.",
          "We dream of coming up with innovation, strategically designed to enhance the thriving residential hub. We seek to match up the lifestyle of the entire area,becoming a centre for social and economic growth. Our aim always revolves around one entity that is our customers.",
        ],
      }}
    />
  </div>
  <br />
</main>

<style lang="scss">
  .header {
    text-align: center;
    margin-block-end: 24px;
    padding-inline: 30px;
    background-color: var(--primary-700);
    padding-inline: 8vw;
    padding-block: 3rem;
    & > .btn {
      margin-block-start: 3rem;
      display: grid;
      gap: 16px;
      justify-content: center;
      grid-template-columns: repeat(auto-fit, minmax(248px, 248px));
      :global(.secondary) {
        background-color: var(--secondary-900);
      }
      :global(.button-text) {
        color: var(--primary-900);
      }
    }
  }
  .article {
    background-color: var(--primary-700);
    padding-inline: 6vw;
    padding-block: 3rem;
  }
</style>
