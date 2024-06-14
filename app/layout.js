import { Ubuntu } from "next/font/google";
import "animate.css"
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
const ubuntu = Ubuntu({ subsets: ["latin"], weight: '400' });

export const metadata = {
  title: "Techryzer - Building Intelligent Solutions",
  description: "Your web development partner",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        id="main" className={`${ubuntu.className} bg-[#100C08] w-full `}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>

  );
}
