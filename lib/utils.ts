export const isNavActive = (pathname: string, href: string) =>
  `${pathname}${href.endsWith("/") ? "/" : ""}` === href;

  export const getYears = () => {
    const startYear = 1991;
    const currentYear = new Date().getFullYear();
    return currentYear - startYear;
  }