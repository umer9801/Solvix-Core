import { NextResponse } from "next/server"
import crypto from "crypto"

const ADMIN_USER = process.env.ADMIN_USER || "admin"
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin123"
const JWT_SECRET = process.env.JWT_SECRET || "default-secret"

// Rate limiting storage
const loginAttempts = new Map<string, { count: number; lastAttempt: number }>()

function hashPassword(password: string): string {
  return crypto.createHash('sha256').update(password + JWT_SECRET).digest('hex')
}

function generateToken(): string {
  return crypto.randomBytes(32).toString('hex')
}

function getClientIP(req: Request): string {
  const forwarded = req.headers.get('x-forwarded-for')
  const realIP = req.headers.get('x-real-ip')
  return forwarded?.split(',')[0] || realIP || 'unknown'
}

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const attempts = loginAttempts.get(ip)
  
  if (!attempts) return false
  
  // Reset after 15 minutes
  if (now - attempts.lastAttempt > 15 * 60 * 1000) {
    loginAttempts.delete(ip)
    return false
  }
  
  return attempts.count >= 5
}

function recordFailedAttempt(ip: string) {
  const now = Date.now()
  const attempts = loginAttempts.get(ip) || { count: 0, lastAttempt: now }
  
  attempts.count++
  attempts.lastAttempt = now
  loginAttempts.set(ip, attempts)
}

export async function POST(req: Request) {
  try {
    const clientIP = getClientIP(req)
    
    if (isRateLimited(clientIP)) {
      return NextResponse.json(
        { message: "Too many failed attempts. Please try again in 15 minutes." }, 
        { status: 429 }
      )
    }

    const { username, password } = await req.json()

    if (!username || !password) {
      recordFailedAttempt(clientIP)
      return NextResponse.json({ message: "Missing credentials" }, { status: 400 })
    }

    // Validate credentials
    const hashedPassword = hashPassword(password)
    const expectedHash = hashPassword(ADMIN_PASSWORD)
    
    if (username === ADMIN_USER && hashedPassword === expectedHash) {
      const sessionToken = generateToken()
      
      const response = NextResponse.json({ 
        success: true, 
        message: "Login successful",
        user: { username: ADMIN_USER, role: "admin" }
      })
      
      response.cookies.set("admin_session", sessionToken, {
        httpOnly: true,
        sameSite: "strict",
        secure: process.env.NODE_ENV === "production",
        path: "/",
        maxAge: 60 * 60 * 8, // 8 hours
      })
      
      loginAttempts.delete(clientIP)
      return response
    }

    recordFailedAttempt(clientIP)
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    return NextResponse.json({ message: "Invalid credentials" }, { status: 401 })
    
  } catch (error) {
    console.error("Login error:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}