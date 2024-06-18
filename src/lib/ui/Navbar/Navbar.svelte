<script lang="ts">
  import type { INavbarContent, INavbarHandlers } from "./../../types";
  import { Typography, Button } from "..";

  export let content: INavbarContent;
  export let handlers: INavbarHandlers;
</script>

<nav>
  <img
    width="60px"
    height="50px"
    src="/images/Logo/Logo.svg"
    alt="logo"
    class="logo"
  />
  <ul>
    {#each content.navOptions as option}
      <li>
        <a href={option.href}
          ><Typography type="body" _color="var(--secondary-900)"
            >{option.name}</Typography
          ></a
        >
      </li>
    {/each}
  </ul>
  <div class="btn">
    <Button
      args={{ variant: "secondary " }}
      l10n={{ buttonLabel: "Contact us" }}
      handlers={{ click: () => alert("asdf") }}
    />
  </div>
</nav>

<style lang="scss">
  nav {
    display: grid;
    grid-template-columns: 50px auto 180px;
    align-items: center;
    background-color: var(--primary-700);
    padding-inline: 64px;
    padding-block: 20px;
    gap: 50px;
    & > ul {
      list-style: none;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 30px;
      & > li {
        & > a {
          text-decoration: none;
        }
      }
    }
    & > .btn {
      :global(.button) {
        inline-size: 162px;
        block-size: 40px;
      }
    }
  }
</style>
