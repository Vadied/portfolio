export const isNavActive = (pathname: string, href: string) =>
  `${pathname}${href.endsWith("/") ? "/" : ""}` === href;
