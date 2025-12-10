import { cookies } from "next/headers"
import { NextResponse } from "next/server"

const ADMIN_USER = process.env.ADMIN_USER || "admin"
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin123"

// Simple demo-only auth. For production, use a proper auth provider and secrets.
export async function POST(req: Request) {
  try {
    const { username, password } = (await req.json()) as { username?: string; password?: string }
    if (!username || !password) {
      return NextResponse.json({ message: "Missing credentials" }, { status: 400 })
    }

    if (username === ADMIN_USER && password === ADMIN_PASSWORD) {
      // Set an httpOnly cookie to mark admin session
      cookies().set("admin_auth", "1", {
        httpOnly: true,
        sameSite: "lax",
        secure: true,
        path: "/",
        maxAge: 60 * 60 * 24, // 1 day
      })
      return NextResponse.json({ ok: true })
    }

    return NextResponse.json({ message: "Invalid credentials" }, { status: 401 })
  } catch {
    return NextResponse.json({ message: "Bad request" }, { status: 400 })
  }
}
