import { slugify } from "app/hudba/utils";
import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const route = req.nextUrl.pathname;

  console.log(
    route,
    "/hudba/" + slugify(decodeURIComponent(route.substring(7)))
  );

  if (route.startsWith("/texty/"))
    return NextResponse.redirect(
      new URL(
        "/hudba/" + slugify(decodeURIComponent(route.substring(7))),
        req.url
      )
    );

  if (route == "/um")
    return NextResponse.redirect(new URL("/hudba/ukradli_marii", req.url));
  if (route == "/jb")
    return NextResponse.redirect(new URL("/hudba/jednorozec_blazej", req.url));

  return NextResponse.redirect(new URL("/texty/zahrada", req.url));
}

export const config = {
  matcher: ["/um", "/jb", "/z", "/texty/:name*"],
};
