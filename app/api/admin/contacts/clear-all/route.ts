import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import dbConnect from "@/lib/dbConnect"
import Contact from "@/lib/models/Contact"

// Check admin authentication
async function checkAuth() {
  const cookieStore = await cookies()
  const sessionToken = cookieStore.get("admin_session")?.value
  return !!sessionToken // Return true if session token exists
}

export async function DELETE() {
  try {
    console.log('[Admin Clear All] Attempting to clear all contacts...')
    
    // Check authentication
    const isAuthenticated = await checkAuth()
    if (!isAuthenticated) {
      console.log('[Admin Clear All] ❌ Unauthorized access attempt')
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      )
    }

    await dbConnect()
    console.log('[Admin Clear All] ✅ Database connected')

    // Count contacts before deletion
    const countBefore = await Contact.countDocuments({})
    console.log(`[Admin Clear All] Found ${countBefore} contacts to delete`)

    // Delete all contacts
    const result = await Contact.deleteMany({})
    console.log(`[Admin Clear All] ✅ Deleted ${result.deletedCount} contacts`)

    return NextResponse.json({
      success: true,
      message: `Successfully deleted ${result.deletedCount} contacts`,
      deletedCount: result.deletedCount
    })

  } catch (error) {
    console.error("[Admin Clear All] Error:", error)
    return NextResponse.json(
      { error: "Failed to clear contacts" },
      { status: 500 }
    )
  }
}