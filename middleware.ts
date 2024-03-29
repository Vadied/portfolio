import { NextRequest, NextResponse } from "next/server";
import acceptLanguage from "accept-language";
import { languages, fallbackLng } from "@/lib/i18n/settings";

acceptLanguage.languages(languages);

export const config = {
  // matcher: '/:lng*'
  matcher: ["/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)"],
};

export function middleware(req: NextRequest) {
  //   if (req.cookies.has(cookieName))
  //     lng = acceptLanguage.get(req.cookies.get(cookieName).value);

  const lng =
    acceptLanguage.get(req.headers.get("Accept-Language")) || fallbackLng;

  // Redirect if lng in path is not supported
  if (
    !languages.some((loc: string) =>
      req.nextUrl.pathname.startsWith(`/${loc}`)
    ) &&
    !req.nextUrl.pathname.startsWith("/_next")
  ) {
    return NextResponse.redirect(new URL(`/${lng}`, req.url));
  }

  if (req.headers.has("referer")) {
    // const refererUrl = new URL(req.headers.get("referer") || "");
    // const lngInReferer = languages.find((l) =>
    //   refererUrl.pathname.startsWith(`/${l}`)
    // );
    const response = NextResponse.next();
    // if (lngInReferer) response.cookies.set(cookieName, lngInReferer);
    return response;
  }

  return NextResponse.next();
}
