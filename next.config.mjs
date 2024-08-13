/** @type {import('next').NextConfig} */
const nextConfig = {
 // output: "export",
  images: {
    domains: [
      "plus.unsplash.com",
      "www.medicarespots.com",
      "www.alafiyameditour.com",
      "cdn-icons-png.flaticon.com",
    ],
  },
  presets: ["next/babel"],
  plugins: [
    [
      "@locator/babel-jsx/dist",
      {
        env: "development",
      },
    ],
  ],
  experimental: {
    appDir: true,
  },
};

export default nextConfig;
