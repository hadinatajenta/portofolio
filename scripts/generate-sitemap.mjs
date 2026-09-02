/**
 * Auto-generate sitemap.xml from db.json + static routes.
 * Runs as postbuild script: reads db.json, builds all /projects/:id URLs,
 * and writes sitemap.xml into dist/.
 */
import { readFileSync, writeFileSync, existsSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = resolve(__dirname, '..')

const SITE_URL = 'https://hadinata.me'
const today = new Date().toISOString().split('T')[0]

// --- Static routes ---
const staticRoutes = [
  { path: '/',           changefreq: 'weekly',  priority: '1.0' },
  { path: '/projects',   changefreq: 'weekly',  priority: '0.9' },
  { path: '/experience', changefreq: 'monthly', priority: '0.8' },
  { path: '/contact',    changefreq: 'monthly', priority: '0.8' },
]

// --- Dynamic routes from db.json ---
const dbPath = resolve(ROOT, 'db.json')
let dynamicRoutes = []

if (existsSync(dbPath)) {
  try {
    const db = JSON.parse(readFileSync(dbPath, 'utf-8'))
    const projects = db.projects || []
    dynamicRoutes = projects.map((p) => ({
      path: `/projects/${p.id}`,
      changefreq: 'monthly',
      priority: '0.7',
    }))
    console.log(`[sitemap] Found ${projects.length} projects in db.json`)
  } catch (err) {
    console.warn('[sitemap] Failed to parse db.json:', err.message)
  }
} else {
  console.warn('[sitemap] db.json not found, skipping dynamic routes')
}

// --- Build XML ---
const allRoutes = [...staticRoutes, ...dynamicRoutes]

const urlEntries = allRoutes
  .map(
    (route) => `  <url>
    <loc>${SITE_URL}${route.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  )
  .join('\n')

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>
`

// --- Write to dist/ and public/ ---
const distPath = resolve(ROOT, 'dist', 'sitemap.xml')
const publicPath = resolve(ROOT, 'public', 'sitemap.xml')

writeFileSync(publicPath, sitemap, 'utf-8')
console.log(`[sitemap] Written to public/sitemap.xml (${allRoutes.length} URLs)`)

if (existsSync(resolve(ROOT, 'dist'))) {
  writeFileSync(distPath, sitemap, 'utf-8')
  console.log(`[sitemap] Written to dist/sitemap.xml`)
}
