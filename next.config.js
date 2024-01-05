/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    serverActions: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "images.pexels.com",
      "deo.shopeemobile.com",
      "preview.colorlib.com",
      "websitedemos.net",
      "luba.de",
    ],
  },
};

module.exports = nextConfig;
