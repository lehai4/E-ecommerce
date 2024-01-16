/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    serverActions: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
    remotePatterns: [
      { hostname: "lh3.googleusercontent.com" },
      { hostname: "images.pexels.com" },
      { hostname: "deo.shopeemobile.com" },
      { hostname: "preview.colorlib.com" },
      { hostname: "websitedemos.net" },
      { hostname: "luba.de" },
    ],
  },
};

module.exports = nextConfig;
