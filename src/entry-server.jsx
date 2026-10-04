import React from 'react'
import { renderToPipeableStream } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { HelmetProvider } from 'react-helmet-async'
import { Writable } from 'node:stream'
import App from './App.jsx'
import { services } from './data/services.js'
import { blogs } from './data/blogs.js'
import { legalPages } from './data/legal.js'

// Every URL that gets its own pre-rendered HTML file
export const routes = [
  '/',
  '/services',
  ...services.map((s) => `/services/${s.slug}`),
  '/pricing',
  '/portfolio',
  '/courses',
  '/blog',
  ...blogs.map((b) => `/blog/${b.slug}`),
  '/about',
  '/contact',
  '/book-demo',
  '/team',
  ...legalPages.map((p) => p.to),
  '/404',
]

export function render(url) {
  const helmetContext = {}

  return new Promise((resolve, reject) => {
    let html = ''
    const sink = new Writable({
      write(chunk, _enc, cb) {
        html += chunk.toString()
        cb()
      },
      final(cb) {
        resolve({ html, helmet: helmetContext.helmet })
        cb()
      },
    })

    const { pipe } = renderToPipeableStream(
      <React.StrictMode>
        <HelmetProvider context={helmetContext}>
          <StaticRouter location={url}>
            <App />
          </StaticRouter>
        </HelmetProvider>
      </React.StrictMode>,
      {
        // Wait for lazy route chunks so the full page (not the Suspense fallback) is rendered
        onAllReady() {
          pipe(sink)
        },
        onShellError: reject,
        onError: reject,
      },
    )
  })
}
