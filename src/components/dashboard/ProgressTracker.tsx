"use client";

import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";
import { useState, useEffect } from 'react';

interface ProgressTrackerProps {
  overallProgress: number; // 0-100
}

export function ProgressTracker({ overallProgress }: ProgressTrackerProps) {
  const [progressValue, setProgressValue] = useState(0);

  useEffect(() => {
    // Animate progress bar on component mount or when overallProgress changes
    const timer = setTimeout(() => setProgressValue(overallProgress), 100);
    return () => clearTimeout(timer);
  }, [overallProgress]);
  
  return (
    <Card className="shadow-lg animate-fade-in">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-medium text-primary">Overall Progress</CardTitle>
        <TrendingUp className="h-5 w-5 text-accent" />
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold text-primary">{overallProgress}% Complete</div>
        <Progress value={progressValue} className="w-full mt-2 h-3" />
        <p className="text-xs text-muted-foreground mt-1">
          {overallProgress === 100 ? "Congratulations! You've completed the course." : `Keep up the great work!`}
        </p>
      </CardContent>
    </Card>
  );
}
