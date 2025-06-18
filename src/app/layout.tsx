import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoogleScript from "@/components/GoogleScript";


export const metadata: Metadata = {
  title: "Techryzer - Web Development, AI Integration & Automation Services",
  description:
    "Techryzer is your partner for innovative web development, AI integrations, and workflow automation. We build modern, scalable, and smart digital solutions for startups, SMEs, and enterprises.",
  metadataBase: new URL('https://www.techryzer.com'),

  keywords: [
    "web development",
    "AI integration",
    "automation services",
    "n8n workflows",
    "freemium AI tools",
    "Next.js development",
    "business automation",
    "startup tech partner",
    "Techryzer solutions",
    "AI for businesses",
    "custom software development",
    "React developer agency"
  ],

  openGraph: {
    title: "Techryzer - Web Development, AI Integration & Automation Services",
    description:
      "Discover how Techryzer helps businesses build websites, apps, and AI workflows 2x faster. Explore our services and smart solutions for digital transformation.",
    url: "https://www.techryzer.com",
    type: "website",
    siteName: "Techryzer",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Techryzer Logo",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Techryzer - Web Development & AI Automation Partner",
    description:
      "Build smarter, faster with Techryzer. We develop web apps, automate workflows using AI and n8n, and deliver modern solutions for startups and enterprises.",
    site: "@techryzer",
    images: ["/logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
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
