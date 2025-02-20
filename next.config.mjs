/** @type {import('next').NextConfig} */
const nextConfig = {
  output:"export",
    images: {
      unoptimized: true,
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
    }
};

export default nextConfig;
