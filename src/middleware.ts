import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// List of protected paths
const protectedPaths = ['/dashboard'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Check if the current path is one of the protected paths
  const isProtectedPath = protectedPaths.some(path => pathname.startsWith(path));

  if (isProtectedPath) {
    const sessionToken = request.cookies.get('firebaseIdToken'); // Or whatever cookie name you use for session

    if (!sessionToken) {
      // If no session token, redirect to login page
      // Preserve the original destination for redirect after login
      const loginUrl = new URL('/login', request.url);
      loginUrl.searchParams.set('redirect', pathname);
      return NextResponse.redirect(loginUrl);
    }
    // If there's a token, you might want to verify it here with a backend function or Firebase Admin SDK
    // For simplicity in this frontend-focused example, we assume token presence means authenticated.
    // In a real app, verify the token's validity.
  }

  return NextResponse.next();
}

// Configure the middleware to run only on specified paths
export const config = {
  matcher: ['/dashboard/:path*'], // Apply middleware to dashboard and its sub-paths
};
