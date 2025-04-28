import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { verify } from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

export async function GET() {
  try {
    const cookieStore = cookies();
    const token = cookieStore.get('token')?.value;

    if (!token) {
      return NextResponse.json(
        { message: '인증되지 않은 요청입니다.' },
        { status: 401 }
      );
    }

    // 토큰 검증
    const decoded = verify(token, JWT_SECRET) as { userId: string; email: string };

    // TODO: 실제 데이터베이스에서 사용자 정보 조회
    // 임시로 하드코딩된 사용자 정보 사용
    return NextResponse.json({
      id: decoded.userId,
      email: decoded.email,
      name: 'Test User',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Get current user error:', error);
    return NextResponse.json(
      { message: '인증되지 않은 요청입니다.' },
      { status: 401 }
    );
  }
} 