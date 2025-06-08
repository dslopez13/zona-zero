"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Loader2 } from 'lucide-react';

// This page should ideally not be reached if middleware is configured correctly
// to redirect from '/' based on auth state.
// This component acts as a fallback or for the brief moment before middleware redirects.
export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    // Middleware should handle the primary redirection from '/'.
    // If an authenticated user lands here somehow, redirect to curriculum.
    // If unauthenticated, middleware should have sent to /login.
    // This client-side redirect is a safeguard.
    router.replace('/curriculum');
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] p-4">
      <Loader2 className="h-12 w-12 animate-spin text-primary mb-4" />
      <p className="text-lg text-muted-foreground">Loading TacticZone...</p>
    </div>
  );
}
