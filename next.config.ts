import { NextConfig } from 'next';

const config: NextConfig = {
  images: {
    domains: ['*'], // 모든 도메인 허용 (개발용, 프로덕션에서는 특정 도메인만 지정)
    unoptimized: process.env.NODE_ENV === 'development',
  },
  reactStrictMode: true,
};

export default config;
