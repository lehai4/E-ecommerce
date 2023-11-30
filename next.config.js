/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "images.pexels.com",
      "preview.colorlib.com",
      "websitedemos.net",
    ],
  },
};

module.exports = nextConfig;
