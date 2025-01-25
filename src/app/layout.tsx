import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoogleScript from "@/components/GoogleScript";


export const metadata: Metadata = {
  title: "Techryzer - Your Gateway to Web and AI Solutions!",
  description:
    "Techryzer is a cutting-edge startup specializing in web-based product solutions and innovative AI-powered technologies. We focus on delivering top-notch quality and tailored services to meet diverse needs and drive innovation.",
    metadataBase: new URL('http://techryzer.com/'),
  // OpenGraph metadata
  openGraph: {
    title: "Techryzer - Your Gateway to Web and AI Solutions!",
    description:
      "Techryzer is a pioneering company offering web-based solutions and advanced AI services to empower businesses and individuals. Discover quality, innovation, and personalized solutions.",
    url: process.env.NEXT_URL,
    type: "website",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
      },
    ],
    siteName: "Techryzer - Your Gateway to Web and AI Solutions!",
  },
  
  // Twitter card metadata
  twitter: {
    card: "summary_large_image",
    title: "Techryzer - Your Gateway to Web and AI Solutions!",
    description:
      "Explore Techryzer, your partner in web and AI innovations. We provide high-quality solutions that drive success for businesses and individuals.",
    images: ["/logo.jpg"],
    site: "@techryzer",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleScript />
      <body className="bg-dark">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
