/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "plus.unsplash.com",
      "www.medicarespots.com",
      "www.alafiyameditour.com",
      "cdn-icons-png.flaticon.com",
    ],
  },
  plugins: [
    [
      "@locator/babel-jsx/dist",
      {
        env: "development",
      },
    ],
  ],
};

export default nextConfig;
