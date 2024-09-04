/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_ZEGO_APP_ID: 715272048,
    NEXT_PUBLIC_ZEGO_SERVER_ID: "615c8a5498b3c88300c2bd70f7ae0ea2",
  }, 
  reactStrictMode: false,
  images: {
    domains: ["localhost"],    //Hosting 
  },
};

module.exports = nextConfig;
