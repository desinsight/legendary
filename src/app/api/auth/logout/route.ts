import { NextResponse } from 'next/server';

export async function POST() {
  try {
    // 응답 생성
    const response = NextResponse.json({ message: '로그아웃되었습니다.' });
    
    // 쿠키에서 토큰 제거
    response.cookies.delete('token');

    return response;
  } catch (error) {
    console.error('Logout error:', error);
    return NextResponse.json(
      { message: '서버 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
} 