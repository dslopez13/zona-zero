"use client";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { SportIcon } from '@/components/shared/SportIcon';
import { ShieldCheck } from 'lucide-react';

export interface Badge {
  id: string;
  name: string;
  iconType: string;
  description: string;
  achievedDate?: string;
}

interface BadgesDisplayProps {
  badges: Badge[];
}

export function BadgesDisplay({ badges }: BadgesDisplayProps) {
  return (
    <Card className="shadow-lg animate-fade-in [animation-delay:0.2s]">
      <CardHeader>
        <CardTitle className="text-lg font-medium text-primary flex items-center">
          <ShieldCheck className="h-5 w-5 text-accent mr-2" />
          Your Badges
        </CardTitle>
        <CardDescription>Recognitions for your achievements.</CardDescription>
      </CardHeader>
      <CardContent>
        {badges.length === 0 ? (
          <p className="text-muted-foreground">No badges earned yet. Keep learning!</p>
        ) : (
          <TooltipProvider>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {badges.map((badge) => (
                <Tooltip key={badge.id} delayDuration={100}>
                  <TooltipTrigger asChild>
                    <div className="flex flex-col items-center p-3 border rounded-lg hover:shadow-md transition-shadow cursor-default bg-secondary/30">
                      <SportIcon name={badge.iconType} className="h-12 w-12 text-primary mb-2" />
                      <p className="text-xs font-medium text-center text-primary truncate w-full">{badge.name}</p>
                      {badge.achievedDate && <p className="text-xs text-muted-foreground">{badge.achievedDate}</p>}
                    </div>
                  </TooltipTrigger>
                  <TooltipContent className="bg-popover text-popover-foreground p-2 rounded-md shadow-lg max-w-xs">
                    <p className="font-semibold">{badge.name}</p>
                    <p className="text-sm">{badge.description}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </TooltipProvider>
        )}
      </CardContent>
    </Card>
  );
}
