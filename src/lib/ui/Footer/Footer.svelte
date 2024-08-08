<script lang="ts">
  import type {
    IFooterL10n,
    IFooterContent,
    IFooterHandlers,
  } from "./../../types";
  import { Typography } from "..";

  export let l10n: IFooterL10n;
  export let content: IFooterContent;
  export let handlers: IFooterHandlers;
</script>

<footer>
  <div class="sections">
    <div class="icons">
      <img src="/images/Logo/LogoWhite.svg" alt="logo" />
      <div class="spacer" aria-hidden="true"></div>
      <br />
      <Typography type="body" _color="var(--secondary-300)">Socials</Typography>
      <br />
      <div class="socials">
        <a href={content.socialLinks.facebook}>
          <img src="/images/Footer/Facebook.svg" alt="facebook" />
        </a>
        <a href={content.socialLinks.instagram}>
          <img src="/images/Footer/Instagram.svg" alt="Instgram" />
        </a>
        <a href={content.socialLinks.twitter}>
          <img src="/images/Footer/Twitter.svg" alt="Twitter" />
        </a>
      </div>
    </div>
    {#each content.footerOptions as option}
      <div class="offices">
        <Typography type="largeBodyText">{option.heading}</Typography>
        <br />
        <Typography type="smallBodyText" _color="var(--secondary-300)"
          >{option.subHeading}</Typography
        >
        <div class="spacer" aria-hidden="true"></div>
        <Typography type="smallBodyText" _color="var(--secondary-300)"
          >{option.address}</Typography
        >
        <div class="spacer" aria-hidden="true"></div>
        <div class="phones flex">
          <img src="/images/Footer/Phone.svg" alt="phone" />
          {#each option.phoneNumbers as number}
            <div class="numbers">
              <a href={`tel:${number}`}>
                <Typography type="smallBodyText" _color="var(--secondary-300)"
                  >{number}</Typography
                >
              </a>
            </div>
          {/each}
        </div>
        <div class="spacer" aria-hidden="true"></div>
        <div class="site-link flex">
          <img src="/images/Footer/Fax.svg" alt="Fax" />
          <a href={`tel:${option.fax}`}>
            <Typography type="smallBodyText" _color="var(--secondary-300)"
              >{option.fax}</Typography
            >
          </a>
        </div>
        <div class="spacer" aria-hidden="true"></div>
        <div class="email flex">
          <img src="/images/Footer/Email.svg" alt="Email" />
          <a href={`mailto: ${option.email}`}>
            <Typography type="smallBodyText" _color="var(--secondary-300)"
              >{option.email}</Typography
            >
          </a>
        </div>
        <div class="spacer" aria-hidden="true"></div>
        <div class="site-link flex">
          <img src="/images/Footer/SiteLink.svg" alt="Sitelink" />
          <a href="/">
            <Typography type="smallBodyText" _color="var(--secondary-300)"
              >{option.siteLink}</Typography
            >
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
              ><Typography type="smallBodyText" _color="var(--secondary-300)"
                >{policy.name}</Typography
              ></a
            >
          </li>
          <div class="spacer" aria-hidden="true"></div>
        {/each}
      </ul>
    </div>
  </div>
  <div class="bottom-line">
    <ul>
      <li>
        <a href="/policy?query=policy"
          ><Typography type="smallBodyText" _color="var(--secondary-300)"
            >Privacy Policy</Typography
          ></a
        >
      </li>
      <li>
        <a href="/policy?query=terms"
          ><Typography type="smallBodyText" _color="var(--secondary-300)"
            >Terms and Conditions</Typography
          ></a
        >
      </li>
      <li class="copyright">
        <Typography type="smallBodyText" _color="var(--secondary-300)"
          >Copyright 2024 All rights reseved. created by
        </Typography><a href="https://cybtekk.com/"
          ><img src="/images/Logo/Cybtekk.svg" alt="" />
        </a>
      </li>
    </ul>
  </div>
</footer>

<style lang="scss">
  footer {
    background-color: #140001;
    padding-block: 40px;
    & > .sections {
      padding-inline: 64px;
      display: grid;
      grid-template-columns: repeat(4, auto);
      gap: 20px;
      margin-block-end: 40px;
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
    & > .bottom-line {
      & > ul {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        list-style: none;
        @media screen and (width <= 520px) {
          flex-direction: column;
        }
        & > .copyright {
          display: flex;
          align-items: center;
          gap: 5px;
          & > a {
            text-decoration: none;
            margin-top: 4px;
          }
        }
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
