import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// List of protected paths
const protectedPaths = ['/curriculum']; // Updated: /curriculum is the main protected area

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const sessionToken = true // Or whatever cookie name you use for session
  // console.log("SessionToken",sessionToken)
  // Handle root path based on authentication
  if (pathname === '/') {
    if (!sessionToken) {
      // Unauthenticated users to /login
      return NextResponse.redirect(new URL('/login', request.url));
    } else {
      // Authenticated users to /curriculum (main page after login)
      return NextResponse.redirect(new URL('/curriculum', request.url));
    }
  }
  
  // Check if the current path is one of the protected paths
  const isProtectedPath = protectedPaths.some(path => pathname.startsWith(path));

  if (isProtectedPath) {
    if (!sessionToken) {
      // If no session token, redirect to login page
      // Preserve the original destination for redirect after login
      const loginUrl = new URL('/login', request.url);
      loginUrl.searchParams.set('redirect', pathname); // Pass original path for redirect
      return NextResponse.redirect(loginUrl);
    }
    // If there's a token, allow access (further verification could be added if needed)
  }

  return NextResponse.next();
}

// Configure the middleware to run on specified paths
export const config = {
  matcher: ['/', '/curriculum/:path*'], // Apply middleware to root and curriculum paths
};
