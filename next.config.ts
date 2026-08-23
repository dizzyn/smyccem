import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/o-kapele", destination: "/#o-kapele", permanent: false },
      { source: "/hudba", destination: "/#hudba", permanent: false },
      { source: "/koncerty", destination: "/#koncerty", permanent: false },
      { source: "/kontakt", destination: "/#kontakt", permanent: false },
    ];
  },
};

export default nextConfig;
