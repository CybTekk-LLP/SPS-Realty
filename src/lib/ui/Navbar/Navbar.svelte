<script lang="ts">
  import type { INavbarContent, INavbarHandlers } from "./../../types";
  import { Typography, Button } from "..";
  import { fly } from "svelte/transition";

  export let content: INavbarContent;
  export let handlers: INavbarHandlers;
  export let isOpen = false;
</script>

<nav>
  <a href="/">
    <img
      width="60px"
      height="50px"
      src="/images/Logo/Logo.svg"
      alt="logo"
      class="logo"
    />
  </a>
  <ul>
    {#each content.navOptions as option}
      <li>
        <a href={option.href}
          ><Typography type="body" _color="var(--secondary-500)"
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
      handlers={{ click: handlers.handleContact }}
    />
  </div>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div class="nav-icon" class:open={isOpen} on:click={() => (isOpen = !isOpen)}>
    <span></span>
    <span></span>
  </div>
</nav>
{#if isOpen}
  <div
    class="ham-menu"
    in:fly={{ duration: 400, x: 50 }}
    out:fly={{ duration: 200, x: 50 }}
  >
    <ul class="hamburger-menu">
      {#each content.navOptions ?? [] as option}
        <li>
          <a
            href={option.href}
            on:click={() => (isOpen = false)}
            target={option?.target}
            ><Typography
              type="body"
              _color="var(--secondary-500)"
              _fontweight="400">{option.name}</Typography
            ></a
          >
        </li>
      {/each}
    </ul>
  </div>
{/if}

<style lang="scss">
  nav {
    position: fixed;
    inset-inline-start: 0;
    inset-block-start: 0;
    inline-size: 100%;
    display: grid;
    grid-template-columns: 50px auto 180px;
    align-items: center;
    background-color: var(--primary-700);
    padding-inline: 64px;
    padding-block: 20px;
    gap: 50px;
    z-index: 3;
    @media screen and (width <= 768px) {
      padding-inline: 30px;
    }
    @media screen and (width <= 1130px) {
      display: flex;
      justify-content: space-between;
    }
    & > ul {
      list-style: none;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 30px;
      @media screen and (width <= 1130px) {
        display: none;
      }
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
      @media screen and (width <= 1130px) {
        display: none;
      }
    }
    & > .nav-icon {
      display: none;
      inline-size: 30px;
      block-size: 20px;
      rotate: 0deg;
      transform-origin: center center;
      -webkit-transition: 0.5s ease-in-out;
      -moz-transition: 0.5s ease-in-out;
      -o-transition: 0.5s ease-in-out;
      transition: 0.5s ease-in-out;
      cursor: pointer;
      z-index: 3;

      @media screen and (width <= 1130px) {
        display: block;
      }
      & > span {
        display: block;
        position: absolute;
        block-size: 2px;
        inline-size: 100%;
        background-color: var(--secondary-900);
        border-radius: 9px;
        inset-inline-start: 0;
        inset-block-start: 0;
        rotate: 0deg;
        -webkit-transition: 0.25s ease-in-out;
        -moz-transition: 0.25s ease-in-out;
        -o-transition: 0.25s ease-in-out;
        transition: 0.25s ease-in-out;
        &:nth-child(1) {
          inset-block-start: 0;
        }
        &:nth-child(2) {
          inset-block-start: 10px;
        }
      }
      &.open {
        & > span {
          &:nth-child(1) {
            rotate: 45deg;
            transform-origin: 30%;
          }
          &:nth-child(2) {
            transform-origin: 30%;
            rotate: -45deg;
          }
        }
      }
    }
  }
  .ham-menu {
    display: block;
    position: fixed;
    inset-inline-end: 0;
    inset-block-start: 0;
    inline-size: 30vw;
    max-inline-size: 100vw;
    block-size: 100vh;
    padding-inline: 20px;
    padding-block: 10px;
    background-color: var(--primary-700);
    transition: opacity 1s ease;
    z-index: 2;
    @media screen and (width <= 768px) {
      inline-size: 100vw;
    }
    & > .hamburger-menu {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-end;
      gap: 50px;
      list-style: none;
      margin-block-start: 120px;
      & > li {
        padding-inline-end: 50px;
        & > a {
          text-decoration: none;
        }
      }
    }
  }
</style>
