import type { Metadata } from "next"
import AdminDashboardClientPage from "./admin-dashboard-client-page"

export const metadata: Metadata = {
  title: "Admin Dashboard — Solvix Core",
  description: "Overview of key metrics and recent activity.",
}

export default function AdminDashboardPage() {
  return <AdminDashboardClientPage />
}
