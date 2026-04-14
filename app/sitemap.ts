import { siteUrl } from 'app/data/site'

export const baseUrl = siteUrl

export default async function sitemap() {
  const routes = ['', '/work', '/projects', '/featured'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return routes
}
