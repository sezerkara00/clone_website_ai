import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true, // Bunu ekle: Sayfa yollarının sonuna "/" ekler ve çakışmayı önler
  images: {
    unoptimized: true,
  },
};

export default nextConfig;