# 디자이너스 소장템

패션 아이템의 디지털 소장 및 거래를 위한 플랫폼

## 주요 기능

- **컬렉션 관리**: 사용자별 패션 아이템 컬렉션 구성
- **AI 스타일링**: AI 기반 스타일링 해석 및 추천
- **경매 시스템**: 한정판 패션 아이템 경매
- **커뮤니티**: 사용자 간 스타일 공유 및 정보 교환

## 기술 스택

- Next.js
- TypeScript
- Tailwind CSS
- Chart.js

## 개발 가이드라인

1. **디자인 시스템**
   - 모바일 퍼스트 접근
   - 반응형 디자인
   - 일관된 UI/UX

2. **기능 우선순위**
   - 사용자 인증/인가
   - 아이템 등록/관리
   - 경매 시스템
   - AI 추천 시스템

3. **코드 컨벤션**
   - TypeScript strict mode
   - ESLint 규칙 준수
   - 컴포넌트 기반 아키텍처

## 배포

- Vercel을 통한 자동 배포
- GitHub Actions를 통한 CI/CD

## 프로젝트 구조

```
src/
├── app/              # Next.js 13+ App Router
├── components/       # 재사용 가능한 컴포넌트
├── contexts/         # React Context
├── hooks/           # Custom Hooks
├── services/        # API 서비스
├── types/           # TypeScript 타입 정의
└── styles/          # 전역 스타일
```

## 개발 방향성

1. **핵심 가치**
   - 패션 아이템의 디지털 소장 가치 강화
   - AI를 활용한 개인화된 스타일링 경험
   - 투명하고 신뢰할 수 있는 거래 시스템

2. **확장 계획**
   - AR/VR을 통한 가상 착용
   - 블록체인 기반 소유권 증명
   - 글로벌 마켓플레이스 확장

3. **품질 관리**
   - 정기적인 코드 리뷰
   - 자동화된 테스트
   - 성능 모니터링

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
