/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'images.unsplash.com',
      'feature.com',
      'img.vogue.co.kr',
      'i.pravatar.cc'
    ],
  },
  eslint: {
    ignoreDuringBuilds: true
  }
}

module.exports = nextConfig 