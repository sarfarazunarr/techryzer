import React from 'react'
import Script from 'next/script'

const GoogleScript = () => {
  const SchemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Techryzer",
    "url": "https://techryzer.com",
    "logo": "/logo.jpg",
    "sameAs": [
      "https://techryzer.com",
      "https://www.facebook.com/techryzer",
      "https://github.com/techryzer",
      "https://www.linkedin.com/company/techryzer"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+92 316 1563925",
      "email": "techryzer@gmail.com"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Ahmed Ali Model Town",
      "addressLocality": "Hala New",
      "addressRegion": "Sindh",
      "postalCode": "70120",
      "addressCountry": "Pakistan"
    },
    "founder": {
      "@type": "Person",
      "name": "Sarfaraz Unar"
    },
    "foundingDate": "2025",
    "description": "Techryzer is a cutting-edge tech startup specializing in web-based product solutions and innovative AI-powered technologies.",
    "keywords": ["tech startup", "web development", "AI solutions"]
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script id="google-analytics-script">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
        `}
      </Script>
      <Script
        type="application/ld+json"
        id="schema-script"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SchemaData) }}
      />
      </>
  )
}

export default GoogleScript