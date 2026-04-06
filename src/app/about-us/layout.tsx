import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About LayersTech | Pioneers in Industrial 3D Printing",
  description: "Learn about LayersTech's journey to becoming a global leader in additive manufacturing. Specializing in high-performance silicone, elastomer, and FFF production systems.",
  openGraph: {
    title: "About LayersTech | Global Manufacturing Engineering",
    description: "Leading the future of 3D printing with innovative silicone and metal solutions.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
