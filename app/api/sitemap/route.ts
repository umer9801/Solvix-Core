import { NextResponse } from 'next/server'

export async function GET() {
  const baseUrl = 'https://solvixcore.com'
  const currentDate = new Date().toISOString().split('T')[0]
  
  const staticPages = [
    { url: '', priority: '1.0', changefreq: 'weekly' },
    { url: '/about', priority: '0.8', changefreq: 'monthly' },
    { url: '/services', priority: '0.9', changefreq: 'weekly' },
    { url: '/contact', priority: '0.8', changefreq: 'monthly' },
    { url: '/privacy', priority: '0.3', changefreq: 'yearly' },
    { url: '/terms', priority: '0.3', changefreq: 'yearly' },
  ]
  
  const servicePages = [
    'langchain',
    'openai-agent-sdk', 
    'customized-websites',
    'ai-ml',
    'application-development',
    'video-editing',
    'graphic-designing',
    'content-creation',
    'shopify-store-designing',
    'n-and-n'
  ].map(service => ({
    url: `/services/${service}`,
    priority: '0.7',
    changefreq: 'monthly'
  }))
  
  const allPages = [...staticPages, ...servicePages]
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  })
}