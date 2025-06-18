import Hero from '@/components/Hero';
import React from 'react';
import QuoteForm from './form';

export async function generateMetadata() {
  return {
    title: "Request a Quote - Techryzer",
    description:
      "Request a free quote from Techryzer for web development, AI automation, or app solutions. Let us help you build smart, scalable, and efficient digital products.",
    keywords: [
      "Techryzer quote",
      "get a quote",
      "web development pricing",
      "AI automation estimate",
      "custom app development quote",
      "hire developers",
    ],
    openGraph: {
      title: "Request a Quote - Techryzer",
      description:
        "Get a custom quote for your web, app, or AI automation project. Techryzer delivers smart, scalable solutions tailored to your needs.",
      url: `${process.env.NEXT_PUBLIC_URL}/quote`,
      images: [
        {
          url: "/logo.jpg",
          width: 1200,
          height: 630,
          alt: "Techryzer Quote",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Request a Quote - Techryzer",
      description:
        "Looking for a smart, scalable solution? Request a quote today and let Techryzer help you build something great.",
      images: ["/logo.jpg"],
    },
  };
}

const Quote = () => {
  return (
    <section>
      <Hero
        title="Request a Quote"
        content="Looking to build something powerful? Whether you need a high-performance website, AI automation, or a custom mobile/web app — tell us about your project and our team will get back with a tailored proposal. No pressure, just possibilities."
      />
      <QuoteForm />
    </section>
  );
};

export default Quote;
