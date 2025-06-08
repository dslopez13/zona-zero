import { Skeleton } from "@/components/ui/skeleton";
import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] p-4 text-primary">
      <Loader2 className="h-16 w-16 animate-spin text-accent mb-6" />
      <h2 className="text-2xl font-headline mb-2">Loading Zona Cero...</h2>
      <p className="text-muted-foreground mb-8">Please wait while we prepare the game plan.</p>
      <div className="w-full max-w-xl space-y-4">
        <Skeleton className="h-10 w-full rounded-md" />
        <Skeleton className="h-8 w-3/4 rounded-md" />
        <Skeleton className="h-20 w-full rounded-md" />
        <Skeleton className="h-8 w-1/2 rounded-md" />
      </div>
    </div>
  );
}
