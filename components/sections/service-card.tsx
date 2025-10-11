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
    <Card className="card-glow h-full bg-white/5 backdrop-blur-md border border-white/10 shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
      <CardHeader>
        <CardTitle className="text-glow text-lg font-semibold">{title}</CardTitle>
      </CardHeader>

      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>

      <CardFooter>
        <Button
          variant="ghost"
          className="relative overflow-hidden rounded-2xl px-6 py-2 text-sm font-medium text-white
                     backdrop-blur-md bg-blue-800/25 border border-blue-500/30 shadow-md
                     hover:bg-blue-700/40 hover:shadow-[0_0_20px_rgba(37,99,235,0.45)]
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
