/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['news24-sports.go-vip.net'],
      },
      experimental: {
        nextScriptWorkers: true,
      },
}


const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
module.exports = withBundleAnalyzer(nextConfig)
