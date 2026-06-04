import type { Metadata } from "next";
import { Cormorant_Garamond, Playfair_Display, DM_Sans, Cinzel } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/shared/JsonLd";
import SplashLoader from "@/components/layout/SplashLoader";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cinzel",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Villa Scapes Gandipet | Ready to Move Luxury Villas | NK Leasing",
  description: "Experience ultra-luxury lakeside living at Villa Scapes, Gandipet, Hyderabad. Featuring 121 premium 4 & 5 BHK gated community villas, an exclusive clubhouse, and 43% open spaces. Built by NK Leasing & Constructions.",
  keywords: ["Villa Scapes Gandipet", "Luxury Villas Gandipet", "Luxury Villas Hyderabad", "Villas Near Financial District", "Ready To Move Villas Hyderabad", "NK Leasing Villa Scapes"],
  metadataBase: new URL("https://villascapes-portfolio.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Villa Scapes Gandipet | Luxury Villas in Hyderabad",
    description: "Discover lakeside serenity at Villa Scapes, Gandipet. Premium 4 & 5 BHK villas, 20-acre low-density gated community. Near Financial District.",
    url: "https://villascapes-portfolio.vercel.app",
    siteName: "Villa Scapes Gandipet Portfolio",
    images: [
      {
        url: "https://imgcdn.houssed.com/assets/Files/Projects/124076/Project%20Image/3-1735991160.webp",
        width: 1200,
        height: 630,
        alt: "Villa Scapes Gandipet - Luxury Villa Community",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Villa Scapes Gandipet | Luxury Villas in Hyderabad",
    description: "Lakeside luxury gated villas in Gandipet, Hyderabad by NK Leasing & Constructions.",
    images: ["https://imgcdn.houssed.com/assets/Files/Projects/124076/Project%20Image/3-1735991160.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${playfair.variable} ${dmSans.variable} ${cinzel.variable}`}
    >
      <body className="antialiased bg-ivory text-charcoal font-body selection:bg-gold selection:text-navy">
        <SplashLoader />
        <JsonLd />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
