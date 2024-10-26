const { setupDevPlatform } = require('@cloudflare/next-on-pages/next-dev');
const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  ) => {
    if (config.cache && !dev) {
      config.cache = Object.freeze({
        type: 'memory',
      });
    }
    // Important: return the modified config
    return config;
  },
};

(async () => {
  if (process.env.NODE_ENV === 'development') {
    await setupDevPlatform();
  }
})();

module.exports = withNextra(nextConfig);
