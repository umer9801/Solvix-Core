"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const activity = [
  { id: "ORD-10421", user: "Alex Carter", item: "Pro Plan", amount: "$49", status: "Paid", date: "2025-10-01" },
  {
    id: "ORD-10420",
    user: "Priya Patel",
    item: "Design Sprint",
    amount: "$1,200",
    status: "Pending",
    date: "2025-09-29",
  },
  {
    id: "ORD-10419",
    user: "Diego Silva",
    item: "Custom Website",
    amount: "$5,400",
    status: "Paid",
    date: "2025-09-27",
  },
  { id: "ORD-10418", user: "Hannah Lee", item: "AI Setup", amount: "$850", status: "Refunded", date: "2025-09-26" },
]

function StatusBadge({ status }: { status: string }) {
  const style =
    status === "Paid"
      ? "bg-green-100 text-green-800"
      : status === "Pending"
        ? "bg-amber-100 text-amber-900"
        : "bg-muted text-foreground"
  return <span className={`inline-flex items-center rounded-md px-2 py-0.5 text-xs ${style}`}>{status}</span>
}

export function RecentActivityTable() {
  return (
    <Card className="card-glow">
      <CardHeader>
        <CardTitle className="text-sm">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Item</TableHead>
                <TableHead className="text-right">Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {activity.map((row) => (
                <TableRow key={row.id}>
                  <TableCell className="font-medium">{row.id}</TableCell>
                  <TableCell>{row.user}</TableCell>
                  <TableCell className="whitespace-nowrap">{row.item}</TableCell>
                  <TableCell className="text-right">{row.amount}</TableCell>
                  <TableCell>
                    <StatusBadge status={row.status} />
                  </TableCell>
                  <TableCell className="whitespace-nowrap">{row.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
