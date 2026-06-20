/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "yoifmijgzpxibpejcuen.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
    ],
    qualities: [80, 75, 100], // if you're using quality={100}
  },
};

export default nextConfig;
