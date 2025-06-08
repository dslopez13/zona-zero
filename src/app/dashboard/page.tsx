"use client"; // This page needs to be a client component to use useAuth hook

import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { ProgressTracker } from "@/components/dashboard/ProgressTracker";
import { BadgesDisplay, type Badge } from "@/components/dashboard/BadgesDisplay";
import { GradesTable, type Grade } from "@/components/dashboard/GradesTable";
import { TutorComments, type Comment } from "@/components/dashboard/TutorComments";
import { Skeleton } from "@/components/ui/skeleton";
import { UserCircle } from "lucide-react";

// Mock data for the dashboard
const mockStudentData = {
  overallProgress: 75,
  badges: [
    { id: 'b1', name: 'Strategy Starter', iconType: 'brain', description: 'Completed Unit 1: Foundations of Strategy.', achievedDate: '2024-07-10' },
    { id: 'b2', name: 'Offensive Ace', iconType: 'swords', description: 'Excelled in Unit 2: Offensive Tactics.', achievedDate: '2024-07-20' },
    { id: 'b3', name: 'Top Defender', iconType: 'shieldcheck', description: 'Mastered Unit 3: Defensive Maneuvers.', achievedDate: '2024-08-01' },
  ] as Badge[],
  grades: [
    { id: 'g1', unit: 'Foundations of Strategy', score: 'A', status: 'Completed' },
    { id: 'g2', unit: 'Offensive Tactics', score: 'A-', status: 'Completed' },
    { id: 'g3', unit: 'Defensive Maneuvers', score: 'B+', status: 'Completed' },
    { id: 'g4', unit: 'Psychological Warfare', score: 'In Progress', status: 'In Progress' },
  ] as Grade[],
  tutorComments: [
    { id: 'c1', date: '2024-08-01', text: 'Excellent work on the defensive scenarios! Your understanding of resource management is top-notch.', tutorName: 'Coach Alpha', tutorAvatarUrl: 'https://placehold.co/40x40.png' },
    { id: 'c2', date: '2024-07-21', text: 'Great tactical plan for the offensive simulation. Consider exploring more diverse opening gambits.', tutorName: 'Master Strategist Beta', tutorAvatarUrl: 'https://placehold.co/40x40.png' },
  ] as Comment[],
};

export default function DashboardPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login?redirect=/dashboard");
    }
  }, [user, loading, router]);

  if (loading || !user) {
    // Show a more comprehensive skeleton for the dashboard
    return (
      <div className="space-y-6 p-4">
        <Skeleton className="h-12 w-1/3 rounded-lg" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Skeleton className="h-32 rounded-lg" />
          <Skeleton className="h-48 rounded-lg md:col-span-2" />
          <Skeleton className="h-64 rounded-lg lg:col-span-2" />
          <Skeleton className="h-48 rounded-lg" />
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <section className="py-8 bg-card rounded-lg shadow-xl p-6">
        <div className="flex items-center space-x-3 mb-4">
           <UserCircle className="h-12 w-12 text-primary" />
           <div>
            <h1 className="text-3xl font-headline font-bold text-primary">
              Welcome, {user.displayName || user.email}!
            </h1>
            <p className="text-md text-muted-foreground">Here's your TacticZone journey overview.</p>
           </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 space-y-6">
          <ProgressTracker overallProgress={mockStudentData.overallProgress} />
          <BadgesDisplay badges={mockStudentData.badges} />
        </div>
        <div className="lg:col-span-2 space-y-6">
          <GradesTable grades={mockStudentData.grades} />
          <TutorComments comments={mockStudentData.tutorComments} />
        </div>
      </div>
    </div>
  );
}
