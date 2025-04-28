import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireAuth?: boolean;
  requireGuest?: boolean;
}

export function ProtectedRoute({
  children,
  requireAuth = true,
  requireGuest = false,
}: ProtectedRouteProps) {
  const router = useRouter();
  const { isAuthenticated, isLoading } = useAuth();

  useEffect(() => {
    if (!isLoading) {
      // 인증이 필요한 페이지에서 비인증 상태
      if (requireAuth && !isAuthenticated) {
        router.push(`/auth/login?redirect=${window.location.pathname}`);
      }
      
      // 비인증 상태가 필요한 페이지(로그인, 회원가입)에서 인증 상태
      if (requireGuest && isAuthenticated) {
        router.push('/');
      }
    }
  }, [isLoading, isAuthenticated, requireAuth, requireGuest, router]);

  // 로딩 중일 때 표시할 컴포넌트
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  // 접근 권한이 없는 경우
  if (!isLoading && requireAuth && !isAuthenticated) {
    return null;
  }

  // 이미 로그인한 상태에서 로그인/회원가입 페이지 접근 시
  if (!isLoading && requireGuest && isAuthenticated) {
    return null;
  }

  return <>{children}</>;
} 