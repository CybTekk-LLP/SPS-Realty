export interface INavbarContent {
  navOptions: ISingleNavOption[];
}
interface ISingleNavOption {
  name: string;
  href: string;
  target?: string;
  // isSubOptions: boolean;
}
export interface INavbarHandlers {
  handleContact: () => void;
}
