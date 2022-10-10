/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate')
const removeImports = require('next-remove-imports')()
module.exports = removeImports({})
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: true,
})

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost', 'oar-grants-backend.labs.iguanait.com'],
  },
}

module.exports = removeImports(nextTranslate(nextConfig))
