"use client"

import { useRouter } from "next/navigation"
import { KpiCards } from "@/components/admin/kpi-cards"
import { RevenueChart } from "@/components/admin/revenue-chart"
import { RecentActivityTable } from "@/components/admin/recent-activity-table"
import { Button } from "@/components/ui/button"

export default function AdminDashboardClientPage() {
  const router = useRouter()

  async function handleSignOut() {
    try {
      await fetch("/api/admin/logout", { method: "DELETE" })
      router.replace("/admin/login")
    } catch (err) {
      // no-op; if logout fails, still route user to login
      router.replace("/admin/login")
    }
  }

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:py-12">
      {/* Page Header */}
      <header className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-pretty text-2xl sm:text-3xl font-semibold tracking-tight">Admin Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            A quick overview of your product performance and recent activity.
          </p>
        </div>

        <Button variant="outline" size="sm" onClick={handleSignOut}>
          Sign out
        </Button>
      </header>

      {/* KPI Cards */}
      <section className="mb-8">
        <KpiCards />
      </section>

      {/* Chart + Table */}
      <section className="grid gap-6 lg:grid-cols-2">
        <RevenueChart />
        <RecentActivityTable />
      </section>
    </div>
  )
}
