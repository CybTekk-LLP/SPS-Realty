export interface IProjectCardContent {
    id: string
    src: string
}
export interface IProjectCardL10n {
    title: string;
    type: string;
}
export interface IProjectCardArgs {
    click: () => void
}