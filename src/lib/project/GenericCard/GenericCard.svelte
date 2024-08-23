<script lang="ts">
  import { Typography } from "./../../ui";
  import type { IGenericCardContent } from "./../../types";

  export let content: IGenericCardContent;
</script>

<article>
  <Typography
    type="largeBodyText"
    _color="var(--tertiary-900)"
    _fontweight="700">{content.title}</Typography
  >
  <img width="64px" height="64px" src={content.iconSrc} alt="icon" />
  <Typography type="body" _color="var(--secondary-500)"
    >{content.description}</Typography
  >
</article>

<style lang="scss">
  article {
    inline-size: 100%;
    background-color: var(--primary-700);
    padding: 40px;
    border-radius: 10px;
    text-align: justify;
    & > img {
      margin-block: 20px;
    }
  }
</style>
