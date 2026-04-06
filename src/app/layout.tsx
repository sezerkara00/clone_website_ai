import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "@/context/ThemeContext";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://layerstech.co.uk'),
  alternates: {
    canonical: 'https://layerstech.co.uk',
    languages: {
      'en-GB': 'https://layerstech.co.uk',
      'tr-TR': 'https://layerstech.com.tr',
    },
  },
  title: "LAYERSTECH | Advanced Industrial 3D Printing & Silicone LSR Systems",
  description: "LAYERSTECH is a global engineering leader redefining additive manufacturing with world-first multi-material silicone injection printing and high-temperature FFF systems.",
  openGraph: {
    title: "LAYERSTECH | Advanced Industrial 3D Printing",
    description: "Global engineering leader redefining additive manufacturing with world-first multi-material silicone injection printing.",
    type: "website",
    siteName: "LayersTech",
  },
  twitter: {
    card: "summary_large_image",
    title: "LAYERSTECH | Advanced Industrial 3D Printing",
    description: "World-first multi-material silicone injection printing and high-temperature FFF systems.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={`${roboto.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans transition-colors duration-500 dark:bg-[#0a0a0a]">
        <ThemeProvider>
          <LanguageProvider>
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
