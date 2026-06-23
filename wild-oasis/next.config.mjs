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
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/**", // Allows all paths for Google profile pictures
      },
    ],
    qualities: [80, 75, 100], // if you're using quality={100}
  },
  // output: "export",
};

export default nextConfig;
