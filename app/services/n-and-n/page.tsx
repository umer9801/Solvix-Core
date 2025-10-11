import ServicePage from "@/components/sections/service-page"
import { getServiceBySlug } from "@/src/data/services"

export default function NAndNService() {
  const svc = getServiceBySlug("n-and-n")!
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
