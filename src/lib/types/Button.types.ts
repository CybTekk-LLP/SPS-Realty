export interface IButtonArgs {
  variant: "primary" | "secondary " | "disabled";
}

export interface IButtonL10n {
  buttonLabel: string;
}

export interface IButtonHandlers {
  click: () => void;
}
