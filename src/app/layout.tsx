import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import MobileBottomBar from "@/components/MobileBottomBar";
import RFQModal from "@/components/RFQModal";
import { QuoteModalProvider } from "@/context/QuoteModalContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://avmpackagingsystem.com"),
  title: {
    default: "AVM Packaging Machine Trader, Exporter, Manufacturer India",
    template: "%s | AVM Packaging System",
  },
  description: "We are a leading Manufacturer, Trader, Supplier and Exporter offering a wide range of Automatic Packaging Machines all over Mumbai, India.",
  keywords: "AVM Packaging Systems, Sealing machines, Packing machines, Shrink Tunnel Machines, Carton Taping machines, Wrapping Machines, Coding machines, Packing Machine Mumbai",
  authors: [{ name: "AVM Packaging System Mumbai India" }],
  creator: "AVM Packaging System",
  publisher: "AVM Packaging System",
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    other: {
      "msvalidate.01": "CE7DF02D98136441554DF061849B534C",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://avmpackagingsystem.com/",
    siteName: "AVM Packaging System",
    title: "AVM Packaging Machine Trader, Exporter, Manufacturer India",
    description: "We are a leading Manufacturer, Trader, Supplier and Exporter offering a wide range of Automatic Packaging Machines all over Mumbai, India.",
    images: [
      {
        url: "/images/avm/clean/product/automatic-pouch-packing-machine.jpg",
        width: 800,
        height: 800,
        alt: "AVM Packaging System Machinery",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/images/favicon.ico" },
      { url: "/images/favicon.png", type: "image/png" },
    ],
    shortcut: "/images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Google Analytics preserved from original website */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-SM7PJKPWLN"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-SM7PJKPWLN');
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-slate-800 antialiased selection:bg-[#FF5E14] selection:text-white">
        <QuoteModalProvider>
          <Header />
          <main className="flex-1 pb-16 sm:pb-0">{children}</main>
          <Footer />
          <RFQModal />
          <WhatsAppFloat />
          <MobileBottomBar />
        </QuoteModalProvider>
      </body>
    </html>
  );
}
