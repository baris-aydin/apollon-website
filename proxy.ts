import { NextRequest, NextResponse } from "next/server"

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  const locale = pathname.startsWith("/en") ? "en" : "tr"
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set("x-locale", locale)
  return NextResponse.next({ request: { headers: requestHeaders } })
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
}
