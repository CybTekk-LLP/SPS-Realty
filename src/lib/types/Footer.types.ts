export interface IFooterL10n {
  subscribeLabel: string;
  buttonLabel: string;
  policiesHeading: string;
}

export interface IFooterContent {
  footerOptions: IFooterOption[];
  policies: { href: string; name: string }[];
  socialLinks: { facebook: string; instagram: string; twitter: string };
}

interface IFooterOption {
  heading: string;
  subHeading: string;
  address: string;
  phoneNumbers: string[];
  fax: string;
  email: string;
  siteLink: string;
}

export interface IFooterHandlers {
  handleSubscribe: () => void;
}
