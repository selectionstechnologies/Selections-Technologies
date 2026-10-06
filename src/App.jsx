import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { LazyMotion, domAnimation } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FloatingButtons from './components/FloatingButtons'
import ScrollToTop from './components/ScrollToTop'
import SmoothScroll from './components/SmoothScroll'
import ScrollProgress from './components/ScrollProgress'
import Home from './pages/Home'
const Services = lazy(() => import('./pages/Services'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const Courses = lazy(() => import('./pages/Courses'))
const Pricing = lazy(() => import('./pages/Pricing'))
const Portfolio = lazy(() => import('./pages/Portfolio'))
const Blog = lazy(() => import('./pages/Blog'))
const BlogPost = lazy(() => import('./pages/BlogPost'))
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'))
const Team = lazy(() => import('./pages/Team'))
const Terms = lazy(() => import('./pages/Terms'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))
const RefundPolicy = lazy(() => import('./pages/RefundPolicy'))
const Gdpr = lazy(() => import('./pages/Gdpr'))
const Security = lazy(() => import('./pages/Security'))
const CookiePolicy = lazy(() => import('./pages/CookiePolicy'))
const BookDemo = lazy(() => import('./pages/BookDemo'))
const LocationPage = lazy(() => import('./pages/LocationPage'))
const NotFound = lazy(() => import('./pages/NotFound'))

const BASE = 'https://selectionstechnologies.com'

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Organization', 'LocalBusiness'],
      '@id': `${BASE}/#organization`,
      name: 'Selections Technologies',
      alternateName: ['Selection Technologies', 'Selections Tech', 'ST'],
      url: BASE,
      logo: {
        '@type': 'ImageObject',
        url: `${BASE}/logo.png`,
        width: 600,
        height: 120,
      },
      image: `${BASE}/og-image.png`,
      description:
        'Selections Technologies is a UK-based IT company offering A.I Automation, intelligent Chat Bots, web development, WordPress, Shopify, mobile apps, digital marketing, SEO, and custom software solutions.',
      telephone: '+447448091908',
      email: 'info@selectionstechnologies.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Croydon High Street',
        addressLocality: 'Croydon',
        addressRegion: 'London',
        addressCountry: 'GB',
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '09:00',
          closes: '20:00',
        },
      ],
      priceRange: '$$',
      currenciesAccepted: 'GBP, USD',
      paymentAccepted: 'Cash, Bank Transfer, PayPal',
      areaServed: [
        { '@type': 'Country', name: 'United Kingdom' },
        { '@type': 'Country', name: 'United States' },
        { '@type': 'Country', name: 'United Arab Emirates' },
        'Worldwide',
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'IT Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Web Development', provider: { '@id': `${BASE}/#organization` } } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'WordPress Development', provider: { '@id': `${BASE}/#organization` } } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Shopify Store Development', provider: { '@id': `${BASE}/#organization` } } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mobile App Development', provider: { '@id': `${BASE}/#organization` } } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Digital Marketing', provider: { '@id': `${BASE}/#organization` } } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Search Engine Optimisation (SEO)', provider: { '@id': `${BASE}/#organization` } } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Graphic Designing', provider: { '@id': `${BASE}/#organization` } } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Chatbot Development', provider: { '@id': `${BASE}/#organization` } } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'E-Commerce Solutions', provider: { '@id': `${BASE}/#organization` } } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom Software Development', provider: { '@id': `${BASE}/#organization` } } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'CRM Development', provider: { '@id': `${BASE}/#organization` } } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'IT Consulting', provider: { '@id': `${BASE}/#organization` } } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Meta & Google Ads', provider: { '@id': `${BASE}/#organization` } } },
        ],
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+447448091908',
        contactType: 'customer service',
        availableLanguage: ['English'],
        areaServed: 'Worldwide',
        contactOption: 'HearingImpairedSupported',
      },
      sameAs: [
        'https://www.facebook.com/selections.technologies',
        'https://www.instagram.com/selections.technologies/?hl=en',
        'https://www.linkedin.com/in/selections-technologies/',
        `https://wa.me/447448091908`,
      ],
      founder: {
        '@type': 'Person',
        name: 'Ali Raza',
        jobTitle: 'CEO & Founder',
        url: 'https://alirazadeveloper75.github.io/portfolio/',
        sameAs: [
          'https://www.linkedin.com/in/aliraza-software-eng/',
          'https://www.facebook.com/aliraza.software.eng/',
          'https://www.instagram.com/aliraza.software.eng/',
        ],
      },
      foundingDate: '2019',
      numberOfEmployees: {
        '@type': 'QuantitativeValue',
        minValue: 5,
        maxValue: 20,
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${BASE}/#website`,
      url: BASE,
      name: 'Selections Technologies',
      description: "UK's trusted IT company for web development and digital solutions",
      inLanguage: 'en-US',
      publisher: { '@id': `${BASE}/#organization` },
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${BASE}/?s={search_term_string}`,
        },
        'query-input': 'required name=search_term_string',
      },
    },
  ],
}
// Router and HelmetProvider are supplied by the entry point:
// BrowserRouter in main.jsx (browser), StaticRouter in entry-server.jsx (pre-render).
export default function App() {
  return (
    <LazyMotion features={domAnimation}>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <SmoothScroll />
      <ScrollToTop />
      <ScrollProgress />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Suspense fallback={<div className="min-h-screen bg-navy" />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:slug" element={<ServiceDetail />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/book-demo" element={<BookDemo />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/team" element={<Team />} />
              <Route path="/software-house-lahore" element={<LocationPage />} />
              <Route path="/web-development-company-uk" element={<LocationPage />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/refund-policy" element={<RefundPolicy />} />
              <Route path="/gdpr" element={<Gdpr />} />
              <Route path="/security" element={<Security />} />
              <Route path="/cookie-policy" element={<CookiePolicy />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
      <FloatingButtons />
    </LazyMotion>
  )
}
