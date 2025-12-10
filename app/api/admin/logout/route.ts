import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function DELETE() {
  cookies().delete("admin_auth")
  return NextResponse.json({ ok: true })
}
