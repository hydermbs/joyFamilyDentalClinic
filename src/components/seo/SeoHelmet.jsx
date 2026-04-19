import { Helmet } from 'react-helmet-async'
import { clinicData } from '../../data/clinicData'

function buildJsonLd(origin) {
  const { clinicName, address, phone, seo } = clinicData
  const payload = {
    '@context': 'https://schema.org',
    '@type': 'Dentist',
    name: clinicName,
    address: {
      '@type': 'PostalAddress',
      streetAddress: address,
      addressCountry: 'NZ',
    },
    telephone: phone,
  }
  if (origin) {
    payload.image = `${origin}${seo.ogImage}`
  }
  return JSON.stringify(payload)
}

export default function SeoHelmet() {
  const { seo } = clinicData
  const origin = typeof window !== 'undefined' ? window.location.origin : ''
  const canonical = origin ? `${origin}${seo.canonicalPath}` : ''
  const ogImageAbs = origin ? `${origin}${seo.ogImage}` : seo.ogImage

  return (
    <Helmet>
      <html lang="en" />
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />
      {canonical ? <link rel="canonical" href={canonical} /> : null}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={ogImageAbs} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <script type="application/ld+json">{buildJsonLd(origin)}</script>
    </Helmet>
  )
}
