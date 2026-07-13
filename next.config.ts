import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  /* config options here */
};

// next.config.js
module.exports = {
  allowedDevOrigins: ["delicacy-affront-crayfish.ngrok-free.dev"],
};

export default nextConfig;
