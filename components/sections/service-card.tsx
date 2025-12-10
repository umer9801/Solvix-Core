"use client"

import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ServiceCard({
  title,
  description,
  href,
}: {
  title: string
  description: string
  href: string
}) {
  return (
    <Card className="card-glow h-full bg-card border border-border shadow-md hover:shadow-lg transition-all duration-300">
      <CardHeader>
        <CardTitle className="text-card-foreground text-lg font-semibold">{title}</CardTitle>
      </CardHeader>

      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>

      <CardFooter>
        <Button
          variant="ghost"
          className="relative overflow-hidden rounded-lg px-6 py-2 text-sm font-semibold text-primary-foreground
                     bg-primary border border-primary/50 shadow-md
                     hover:bg-primary/90 hover:shadow-lg
                     transition-all duration-300"
        >
          <Link href={href} aria-label={`View ${title} service`} className="relative z-10">
            Learn More
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
