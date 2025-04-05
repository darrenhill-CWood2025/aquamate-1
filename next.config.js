/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['www.poolsidebycgt.com'],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
        crypto: false,
        os: false,
        path: false,
        stream: false,
        perf_hooks: false,
      };
    }
    return config;
  },
};

module.exports = nextConfig; 