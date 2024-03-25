export interface BreadcrumbInterface {
  name: string;
  path: string;
}
interface TMenuChild {
  title: string;
  path?: string;
  Icon?: () => JSX.Element;
  children?: MenuChild[];
  breadcrumbs?: BreadcrumbInterface[];
}

export type TMenu = TMenuChild[];
