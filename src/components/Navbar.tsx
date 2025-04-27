import Link from 'next/link';
import { MagnifyingGlassIcon, UserCircleIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-blue-600">
            디자이너스 소장템
          </Link>

          {/* Main Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/collection" className="text-gray-700 hover:text-blue-600">
              컬렉션
            </Link>
            <Link href="/auction" className="text-gray-700 hover:text-blue-600">
              경매
            </Link>
            <Link href="/ai-recommend" className="text-gray-700 hover:text-blue-600">
              AI 추천
            </Link>
            <Link href="/community" className="text-gray-700 hover:text-blue-600">
              커뮤니티
            </Link>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <MagnifyingGlassIcon className="h-6 w-6 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <UserCircleIcon className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
} 