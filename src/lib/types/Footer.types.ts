export interface IFooterL10n {
  subscribeLabel: string;
  buttonLabel: string;
  policiesHeading: string;
}

export interface IFooterContent {
  footerOptions: IFooterOption[];
  policies: { href: string; name: string }[];
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
