// Renders every route to static HTML after `vite build` so search engines and
// social previews get full content, titles and canonicals without running JS.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const distDir = path.join(root, 'dist')
const serverEntry = path.join(root, 'dist-server', 'entry-server.js')

const template = fs.readFileSync(path.join(distDir, 'index.html'), 'utf8')
const { render, routes } = await import(pathToFileURL(serverEntry).href)

// Preload the self-hosted Latin font so text renders in Inter without a late swap
const font = fs.readdirSync(path.join(distDir, 'assets')).find((f) => /^inter-latin-wght-normal.*\.woff2$/.test(f))
const fontPreload = font
  ? `<link rel="preload" href="/assets/${font}" as="font" type="font/woff2" crossorigin />`
  : ''

function outputPath(url) {
  if (url === '/') return path.join(distDir, 'index.html')
  if (url === '/404') return path.join(distDir, '404.html')
  // /services/seo -> services/seo.html, which Netlify serves at the clean URL without a redirect
  return path.join(distDir, `${url.replace(/^\//, '')}.html`)
}

let failed = 0
for (const url of routes) {
  try {
    const { html, helmet } = await render(url)
    const head = [
      fontPreload,
      helmet.title.toString(),
      helmet.meta.toString(),
      helmet.link.toString(),
      helmet.script.toString(),
    ].join('\n    ')

    const page = template.replace('<!--app-head-->', head).replace('<!--app-html-->', html)
    const file = outputPath(url)
    fs.mkdirSync(path.dirname(file), { recursive: true })
    fs.writeFileSync(file, page)
    console.log(`  ✓ ${url}`)
  } catch (err) {
    failed++
    console.error(`  ✗ ${url}\n`, err)
  }
}

// Sitemap is generated from the same route list so new pages are never missed.
// No <lastmod>: stamping every page with the build date teaches Google to ignore it.
const SITE = 'https://selectionstechnologies.com'
const priority = (url) => {
  if (url === '/') return '1.0'
  if (url === '/services' || url === '/pricing' || url.startsWith('/services/')) return '0.9'
  if (url === '/software-house-lahore' || url === '/web-development-company-uk') return '0.9'
  if (url.startsWith('/blog/')) return '0.7'
  return '0.8'
}
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .filter((url) => url !== '/404')
  .map((url) => `  <url>
    <loc>${SITE}${url === '/' ? '/' : url}</loc>
    <priority>${priority(url)}</priority>
  </url>`)
  .join('\n')}
</urlset>
`
fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemap)

fs.rmSync(path.join(root, 'dist-server'), { recursive: true, force: true })

if (failed) {
  console.error(`\nPre-render failed for ${failed} route(s).`)
  process.exit(1)
}
console.log(`\nPre-rendered ${routes.length} pages.`)
