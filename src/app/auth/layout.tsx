import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '인증',
  description: '로그인 또는 회원가입',
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      {children}
    </div>
  );
} 