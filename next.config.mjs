/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: "standalone",
  images: {
    remotePatterns: [
      {
        hostname: "smpn1sangsel.sch.id",
      },
    ],
  },
};

export default nextConfig;
