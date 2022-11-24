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
    domains: [
      "source.unsplash.com",
      "rails-seeder-backet.s3.ap-northeast-1.amazonaws.com",
      "127.0.0.1",
      "localhost",
    ],
  },
};

module.exports = nextConfig;
