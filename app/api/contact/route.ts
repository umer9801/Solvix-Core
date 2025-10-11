import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const data = await req.json().catch(() => ({}))
  // In a real app, forward to email/provider/DB here
  // console.log("[v0] Contact submission:", data)
  return NextResponse.json({ ok: true })
}
