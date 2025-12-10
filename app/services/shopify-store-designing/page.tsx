import ServicePage from "@/components/sections/service-page"
import { getServiceBySlug } from "@/src/data/services"

export default function ShopifyStoreDesigningPage() {
  const svc = getServiceBySlug("shopify-store-designing")
  if (!svc) return null
  return (
    <ServicePage
      title={svc.title}
      lead={svc.short}
      paragraphs={svc.long}
      bullets={svc.bullets}
      theme={{ primary: svc.themePrimary }}
    />
  )
}
