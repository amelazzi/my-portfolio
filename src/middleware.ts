import { NextRequest, NextResponse } from "next/server";

export default function middleware(request: NextRequest) {
  const userAgent = request.headers.get("user-agent") || "";

  const isMobile = /iPhone|Android|Mobile|iPad/i.test(userAgent);
  const currentPath = request.nextUrl.pathname;

  if (isMobile && (currentPath === "/" || currentPath === "/about")) {
    const url = request.nextUrl.clone();
    url.pathname = "/mobile";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/"],
};
