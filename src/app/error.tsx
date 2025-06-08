"use client"; // Error components must be Client Components

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { AlertTriangle } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] text-center p-6 bg-card rounded-lg shadow-xl m-4">
      <AlertTriangle className="h-16 w-16 text-destructive mb-6" />
      <h2 className="text-3xl font-headline font-bold text-destructive mb-4">Oops! Something went wrong.</h2>
      <p className="text-lg text-muted-foreground mb-6 max-w-md">
        An unexpected error occurred. We've been notified and are working to fix it. Please try again later.
      </p>
      {error?.message && (
         <p className="text-sm text-destructive/80 mb-6 bg-destructive/10 p-3 rounded-md">Error details: {error.message}</p>
      )}
      <div className="space-x-4">
        <Button
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
          variant="destructive"
          size="lg"
        >
          Try Again
        </Button>
        <Button
          onClick={
            () => window.location.href = '/'
          }
          variant="outline"
          size="lg"
        >
          Go to Homepage
        </Button>
      </div>
    </div>
  );
}
