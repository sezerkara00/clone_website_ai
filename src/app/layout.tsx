import type { Metadata } from "next";
import { Poppins, Lora, Shadows_Into_Light } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

const shadows = Shadows_Into_Light({
  weight: ["400"],
  variable: "--font-shadows",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LayersTech | 3D Modeling, 3D Printing, Laser Sintering",
  description: "Pioneering and innovative work in the 3D industry. Industrial 3D printing and modeling services in Turkey and UK.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${lora.variable} ${shadows.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}

