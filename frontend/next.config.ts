import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'standalone', // <--- This is the fix
  reactCompiler: true,
};

export default nextConfig;