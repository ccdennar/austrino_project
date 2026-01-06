const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
module.exports = withContentlayer({
  reactStrictMode: true,
  experimental: { appDir: true },
  images: { formats: ['image/avif', 'image/webp'] },
})