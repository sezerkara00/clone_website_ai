import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Industrial 3D Printers | M1 & M1PRO Systems | LayersTech",
  description: "Explore LayersTech's industrial 3D printing systems. High-temperature FFF and multi-material silicone LSR solutions for production-grade additive manufacturing.",
  openGraph: {
    title: "LayersTech 3D Printers | Advanced Industrial Systems",
    description: "Production-ready 3D printing solutions with SLS, DMLS, and Silicon LSR technology.",
  },
};

export default function PrintersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
