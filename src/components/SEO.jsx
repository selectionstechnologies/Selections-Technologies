import { Helmet } from 'react-helmet-async'

const SITE_NAME = 'Selections Technologies'
const BASE_URL = 'https://selectionstechnologies.com'
const DEFAULT_IMAGE = `${BASE_URL}/og-image.png`

export default function SEO({
  title,
  description,
  keywords = '',
  canonical,
  ogType = 'website',
  ogImage = DEFAULT_IMAGE,
  noIndex = false,
  appendSiteName = true,
}) {
  const fullTitle = title
    ? appendSiteName ? `${title} | ${SITE_NAME}` : title
    : `${SITE_NAME} | Web Development & IT Solutions UK`

  const url = canonical ? `${BASE_URL}${canonical}` : BASE_URL

  return (
    <Helmet>
      {/* Primary */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={url} />
      <meta name="robots" content={noIndex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'} />

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${SITE_NAME} - IT Solutions UK`} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_GB" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Local / Geo */}
      <meta name="geo.region" content="GB-CRY" />
      <meta name="geo.placename" content="Croydon, London, United Kingdom" />
      <meta name="geo.position" content="51.3762;-0.0982" />
      <meta name="ICBM" content="51.3762, -0.0982" />

      {/* Extra */}
      <meta name="author" content={SITE_NAME} />
      <meta name="theme-color" content="#0F172A" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="rating" content="General" />
      <meta name="coverage" content="Worldwide" />
    </Helmet>
  )
}
