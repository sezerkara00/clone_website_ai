import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Industrial 3D Printing Sectors | Aerospace, Medical & Manufacturing",
  description: "Advanced 3D printing solutions tailored for highly demanding sectors: aerospace, medical manufacturing, and industrial tooling. Silicone and polymer specialization.",
  openGraph: {
    title: "LayersTech Industries | Industrial Case Studies & Sector Standards",
    description: "Reliable 24/7 manufacturing solutions for global production teams.",
  },
};

export default function IndustriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
