import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // API 요청에 대한 CORS 설정
  if (request.nextUrl.pathname.startsWith('/api')) {
    const response = NextResponse.next();

    // CORS 헤더 설정
    response.headers.set('Access-Control-Allow-Origin', '*');
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    // OPTIONS 요청 처리
    if (request.method === 'OPTIONS') {
      return new NextResponse(null, { status: 204 });
    }

    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/api/:path*',
}; 