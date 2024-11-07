import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title: "Techryzer - Your own web!",
  description: "Techryzer is small company that focus creating web solutions that benefit anyone! We focus on quality of code as well as quality of service!",
  
  // OpenGraph metadata
  openGraph: {
    title: "Techryzer",
    description: "Techryzer is small company that focus creating web solutions that benefit anyone! We focus on quality of code as well as quality of service!",
    url: process.env.NEXT_URL,
    type: "website",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
      },
    ],
    siteName: "Techryzer - Your own web!",
  },
  
  // Twitter card metadata
  twitter: {
    card: "summary_large_image",
    title: "Techryzer - Your own web!",
    description: "Techryzer is small company that focus creating web solutions that benefit anyone! We focus on quality of code as well as quality of service!",
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
      <body className="bg-dark">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
