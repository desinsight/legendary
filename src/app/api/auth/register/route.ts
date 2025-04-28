import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { sign } from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

export async function POST(request: Request) {
  try {
    const { email, password, name } = await request.json();

    // TODO: 실제 데이터베이스에서 이메일 중복 확인
    // 임시로 하드코딩된 검증 사용
    if (email === 'test@example.com') {
      return NextResponse.json(
        { message: '이미 사용 중인 이메일입니다.', field: 'email' },
        { status: 400 }
      );
    }

    // TODO: 실제 데이터베이스에 사용자 저장
    // 임시로 하드코딩된 사용자 정보 사용

    // JWT 토큰 생성
    const token = sign(
      { 
        userId: '2',
        email: email,
      },
      JWT_SECRET,
      { expiresIn: '1d' }
    );

    // 응답 생성
    const response = NextResponse.json({
      token,
      user: {
        id: '2',
        email: email,
        name: name,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    });

    // 쿠키에 토큰 저장
    response.cookies.set('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24, // 1일
    });

    return response;
  } catch (error) {
    console.error('Register error:', error);
    return NextResponse.json(
      { message: '서버 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
} 