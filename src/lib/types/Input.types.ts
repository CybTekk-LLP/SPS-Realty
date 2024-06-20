export interface IInputArgs {
  variant: "text" | "mobile" | "email" | "textarea";
}
export interface IInputL10n {
  options?: string[];
  label: string;
  placeholder: string;
  errorLabel?: string;
  autocomplete?: string;
}
export interface IInputHandlers {
  validate?: (_: string) => boolean;
}
