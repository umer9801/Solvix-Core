"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Activity, ShoppingCart, DollarSign } from "lucide-react"

const stats = [
  {
    title: "Total Users",
    value: "12,480",
    change: "+3.1% this week",
    Icon: Users,
  },
  {
    title: "Active Sessions",
    value: "1,298",
    change: "+1.8% today",
    Icon: Activity,
  },
  {
    title: "New Orders",
    value: "342",
    change: "+5.4% this week",
    Icon: ShoppingCart,
  },
  {
    title: "Revenue",
    value: "$24,590",
    change: "+8.2% this month",
    Icon: DollarSign,
  },
]

export function KpiCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map(({ title, value, change, Icon }) => (
        <Card key={title} className="card-glow">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm text-muted-foreground">{title}</CardTitle>
              <Icon className="h-4 w-4 text-muted-foreground" aria-hidden />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-semibold">{value}</div>
            <p className="text-xs text-muted-foreground mt-1">{change}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
