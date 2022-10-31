/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pigment.github.io",
        port: "",
        pathname: "fake-logos/logos/medium/color",
      },
    ],
  },
};

module.exports = nextConfig;
