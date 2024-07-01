<script lang="ts">
  import type {
    IFooterL10n,
    IFooterContent,
    IFooterHandlers,
  } from "./../../types";
  import { Typography, Button } from "..";
  import Input from "../Input/Input.svelte";

  export let l10n: IFooterL10n;
  export let content: IFooterContent;
  export let handlers: IFooterHandlers;
</script>

<footer>
  <div class="icons">
    <img src="/images/Logo/LogoWhite.svg" alt="logo" />
    <div class="spacer" aria-hidden="true"></div>
    <Typography type="body" _color="var(--primary-900)"
      >{l10n.subscribeLabel}</Typography
    >
    <div class="spacer" aria-hidden="true"></div>
    <div class="input">
      <Input
        args={{
          variant: "text",
        }}
        l10n={{
          label: l10n.subscribeLabel,
          placeholder: "youremail@gmail.com",
          errorLabel: "invalid email",
        }}
        handlers={{
          // @ts-ignore
          validate: (value) => {
            return value.match(
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<div>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
          },
        }}
      />
    </div>
    <div class="spacer" aria-hidden="true"></div>
    <div class="btn">
      <Button
        args={{ variant: "primary" }}
        l10n={{ buttonLabel: "subscribe" }}
        handlers={{ click: () => handlers.handleSubscribe }}
      />
    </div>
    <br />
    <div class="socials">
      <img src="/images/Footer/Facebook.svg" alt="facebook" />
      <img src="/images/Footer/Instagram.svg" alt="Instgram" />
      <img src="/images/Footer/Twitter.svg" alt="Twitter" />
    </div>
  </div>
  {#each content.footerOptions as option}
    <div class="offices">
      <Typography type="largeBodyText">{option.heading}</Typography>
      <br />
      <Typography type="body">{option.subHeading}</Typography>
      <div class="spacer" aria-hidden="true"></div>
      <Typography type="smallBodyText">{option.address}</Typography>
      <div class="spacer" aria-hidden="true"></div>
      <div class="phones flex">
        <img src="/images/Footer/Phone.svg" alt="phone" />
        {#each option.phoneNumbers as number}
          <div class="numbers">
            <a href={`tel:${number}`}>
              <Typography type="smallBodyText">{number}</Typography>
            </a>
          </div>
        {/each}
      </div>
      <div class="spacer" aria-hidden="true"></div>
      <div class="site-link flex">
        <img src="/images/Footer/Fax.svg" alt="Fax" />
        <a href={`tel:${option.fax}`}>
          <Typography type="smallBodyText">{option.fax}</Typography>
        </a>
      </div>
      <div class="spacer" aria-hidden="true"></div>
      <div class="email flex">
        <img src="/images/Footer/Email.svg" alt="Email" />
        <a href={`mailto: ${option.email}`}>
          <Typography type="smallBodyText">{option.email}</Typography>
        </a>
      </div>
      <div class="spacer" aria-hidden="true"></div>
      <div class="site-link flex">
        <img src="/images/Footer/SiteLink.svg" alt="Sitelink" />
        <a href="/">
          <Typography type="smallBodyText">{option.siteLink}</Typography>
        </a>
      </div>
    </div>
  {/each}
  <div class="policies">
    <Typography type="largeBodyText">{l10n.policiesHeading}</Typography>
    <br />
    <ul>
      {#each content.policies as policy}
        <li>
          <a href={policy.href}
            ><Typography type="smallBodyText">{policy.name}</Typography></a
          >
        </li>
        <div class="spacer" aria-hidden="true"></div>
      {/each}
    </ul>
  </div>
</footer>

<style lang="scss">
  footer {
    display: grid;
    grid-template-columns: repeat(4, auto);
    background-color: var(--secondary-700);
    gap: 20px;
    padding-inline: 64px;
    padding-block: 40px;
    @media screen and (width <= 768px) {
      grid-template-columns: auto;
      gap: 50px;
    }
    @media screen and (width <= 768px) {
      padding-inline: 30px;
    }
    & > .icons {
      & > .btn {
        inline-size: 200px;
        :global(.button) {
          block-size: 40px;
        }
      }
      & > .socials {
        display: flex;
        gap: 20px;
      }
      & > .input {
        inline-size: 200px;
        :global(label) {
          display: none;
        }
      }
    }
    & > .offices {
      & > .phones {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 5px;
      }
      & > .flex {
        display: flex;
        align-items: center;
        gap: 10px;
      }
    }
    & > .policies {
      & > ul {
        list-style: none;
      }
    }
  }
  a {
    text-decoration: none;
    color: var(--primary-900);
  }
  .spacer {
    margin-block: 10px;
  }
</style>
