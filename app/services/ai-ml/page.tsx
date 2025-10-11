import ServicePage from "@/components/sections/service-page"
import { getServiceBySlug } from "@/src/data/services"

export default function AimlService() {
  const svc = getServiceBySlug("ai-ml")!
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
