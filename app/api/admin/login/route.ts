import { NextResponse } from "next/server"
import crypto from "crypto"

const ADMIN_USER = process.env.ADMIN_USER || "admin"
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin123"

export async function POST(req: Request) {
  try {
    const { username, password } = await req.json()

    if (!username || !password) {
      return NextResponse.json({ message: "Missing credentials" }, { status: 400 })
    }

    // Simple credential check
    if (username === ADMIN_USER && password === ADMIN_PASSWORD) {
      const sessionToken = crypto.randomBytes(32).toString('hex')
      
      const response = NextResponse.json({ 
        success: true, 
        message: "Login successful"
      })
      
      response.cookies.set("admin_session", sessionToken, {
        httpOnly: true,
        sameSite: "strict",
        secure: process.env.NODE_ENV === "production",
        path: "/",
        maxAge: 60 * 60 * 8, // 8 hours
      })
      
      return response
    }

    return NextResponse.json({ message: "Invalid credentials" }, { status: 401 })
    
  } catch (error) {
    console.error("Login error:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}