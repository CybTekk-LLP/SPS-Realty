<script lang="ts">
  export let type:
    | "heading"
    | "subHeading"
    | "caption"
    | "largeBodyText"
    | "body"
    | "smallBodyText"
    | "disabled"
    | string = "body";
  export let renderInline = false;
  export let disabled = false;
  export let _color: string | undefined = undefined;
  export let _fontweight: string | undefined = undefined;
</script>

<span
  class={`typography ${type} ${!renderInline && "block"} ${disabled && "disabled"}`}
  style={_color && `color: ${_color}`}
  style:font-weight={_fontweight}
>
  <slot />
</span>

<style lang="scss">
  .typography {
    font-family: var(--body-font);
    word-break: break-word;
    leading-trim: both;
    color: var(--primary-active);

    &.block {
      display: block;
    }
    &.heading {
      font-size: clamp(2rem, 1.5rem + 2.5vw, 3.5rem);
      font-weight: 700;
    }
    &.subHeading {
      font-size: clamp(1.5rem, 1.1667rem + 1.6667vw, 2.5rem);
      font-weight: 700;
    }
    &.caption {
      font-size: clamp(1.5rem, 1.3333rem + 0.8333vw, 2rem);
      font-weight: 700;
    }

    &.largeBodyText {
      font-size: 1.25rem;
      font-weight: 500;
    }
    &.body {
      font-size: 1rem;
      font-weight: 500;
    }

    &.smallBodyText {
      font-size: 0.75rem;
      font-weight: 400;
    }
    &.disabled {
      color: var(--hover);
      pointer-events: none;
    }
  }
</style>
