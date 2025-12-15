import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Force HTTPS in production
  if (process.env.NODE_ENV === 'production' && 
      request.headers.get('x-forwarded-proto') === 'http') {
    const httpsUrl = new URL(request.url)
    httpsUrl.protocol = 'https:'
    return NextResponse.redirect(httpsUrl, 301)
  }

  // Protect admin routes
  if (pathname.startsWith("/admin") && pathname !== "/admin/login") {
    const sessionCookie = request.cookies.get("admin_session")?.value
    
    // For now, just check if cookie exists (we can add proper validation later)
    if (!sessionCookie) {
      console.log("No admin session cookie found, redirecting to login")
      const url = new URL("/admin/login", request.url)
      return NextResponse.redirect(url)
    }
    
    console.log("Admin session cookie found:", sessionCookie.substring(0, 10) + "...")
  }

  return NextResponse.next()
}

// Run on all paths to handle HTTPS redirect and admin protection
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
