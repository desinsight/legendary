'use client';

import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <header className="px-4 py-4 border-b flex items-center justify-between bg-white sticky top-0 z-20">
      <Link href="/" className="text-3xl font-black tracking-tighter text-blue-700 flex items-center space-x-2">
        <span className="mr-2 text-3xl"><i className="fa-solid fa-crown"></i></span>
        <span>Legendary</span>
      </Link>
      <div className="flex items-center space-x-4">
        {user ? (
          <div className="flex items-center space-x-4">
            <span className="text-gray-700">{user.name}님</span>
            <button
              onClick={() => logout()}
              className="text-gray-700 hover:text-gray-900"
            >
              로그아웃
            </button>
          </div>
        ) : (
          <div className="flex items-center space-x-4">
            <Link
              href="/auth/login"
              className="text-gray-700 hover:text-gray-900"
            >
              로그인
            </Link>
            <Link
              href="/auth/register"
              className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors"
            >
              회원가입
            </Link>
          </div>
        )}
      </div>
    </header>
  );
} 