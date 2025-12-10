import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Only guard /admin pages; allow the login page itself.
  if (pathname.startsWith("/admin") && pathname !== "/admin/login") {
    const hasAuth = request.cookies.get("admin_auth")?.value === "1"
    if (!hasAuth) {
      const url = new URL("/admin/login", request.url)
      return NextResponse.redirect(url)
    }
  }

  return NextResponse.next()
}

// Only run on /admin/* paths
export const config = {
  matcher: ["/admin/:path*"],
}
