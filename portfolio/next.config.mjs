/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output:"export",
  images: {
    unoptimized: true, // Required for GitHub Pages since it doesn’t support Next.js image optimization
  remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "cdn.simpleicons.org",
      },
      {
        protocol: "https",
        hostname: "openweathermap.org",
      },
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
    ],
  },
};

export default nextConfig;
