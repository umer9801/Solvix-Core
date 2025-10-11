"use client"

import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"

const data = [
  { month: "Jan", revenue: 12000, orders: 210 },
  { month: "Feb", revenue: 13800, orders: 240 },
  { month: "Mar", revenue: 15200, orders: 268 },
  { month: "Apr", revenue: 14750, orders: 259 },
  { month: "May", revenue: 16900, orders: 292 },
  { month: "Jun", revenue: 18250, orders: 315 },
]

export function RevenueChart() {
  return (
    <Card className="card-glow">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm">Revenue & Orders</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            revenue: { label: "Revenue", color: "var(--color-chart-1)" },
            orders: { label: "Orders", color: "var(--color-chart-2)" },
          }}
          className="w-full"
        >
          <AreaChart data={data} margin={{ left: 8, right: 8, top: 8, bottom: 8 }}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-border/50" />
            <XAxis dataKey="month" tickMargin={8} tickLine={false} axisLine={false} className="text-xs" />
            <YAxis tickMargin={8} tickLine={false} axisLine={false} width={40} className="text-xs" />
            <ChartTooltip cursor={{ strokeWidth: 1 }} content={<ChartTooltipContent indicator="dot" />} />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="var(--color-chart-1)"
              fill="var(--color-chart-1)"
              fillOpacity={0.25}
              strokeWidth={2}
            />
            <Area
              type="monotone"
              dataKey="orders"
              stroke="var(--color-chart-2)"
              fill="var(--color-chart-2)"
              fillOpacity={0.25}
              strokeWidth={2}
            />
            <ChartLegend verticalAlign="bottom" content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
