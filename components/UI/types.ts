export interface uiInterface {
  children: string | JSX.Element | JSX.Element[];
}
export interface linkInterface {
  children: string;
  linkPath: string;
}
export interface imageContainerInterface {
  children: JSX.Element[] | JSX.Element;
  marginTop?: number;
  marginBottom?: number;
}
export interface contentTextInterface {
  children: string | JSX.Element | JSX.Element[];
  textAlign?: "left" | "right" | "center" | "justify" | "match-parent";
}
export interface childrenInterface {
  children: JSX.Element[] | JSX.Element;
}
export interface listInterface {
  children: JSX.Element[] | JSX.Element;
  listType?: string;
}
