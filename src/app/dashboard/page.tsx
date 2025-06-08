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
    { id: 'b1', name: 'Iniciador Estratégico', iconType: 'brain', description: 'Completó la Unidad 1: Fundamentos de Estrategia.', achievedDate: '2024-07-10' },
    { id: 'b2', name: 'As Ofensivo', iconType: 'swords', description: 'Destacó en la Unidad 2: Tácticas Ofensivas.', achievedDate: '2024-07-20' },
    { id: 'b3', name: 'Defensor Elite', iconType: 'shieldcheck', description: 'Dominó la Unidad 3: Maniobras Defensivas.', achievedDate: '2024-08-01' },
  ] as Badge[],
  grades: [
    { id: 'g1', unit: 'Fundamentos de Estrategia', score: 'A', status: 'Completado' },
    { id: 'g2', unit: 'Tácticas Ofensivas', score: 'A-', status: 'Completado' },
    { id: 'g3', unit: 'Maniobras Defensivas', score: 'B+', status: 'Completado' },
    { id: 'g4', unit: 'Guerra Psicológica', score: 'En proceso', status: 'En proceso' },
  ] as Grade[],
  tutorComments: [
    {
      id: 'c1',
      date: '2024-08-01',
      text: '¡Excelente trabajo en los escenarios defensivos! Tu comprensión de la gestión de recursos es sobresaliente.',
      tutorName: 'Entrenador Alpha',
      tutorAvatarUrl: 'https://placehold.co/40x40.png',
    },
    {
      id: 'c2',
      date: '2024-07-21',
      text: 'Gran plan táctico en la simulación ofensiva. Considera explorar aperturas más variadas.',
      tutorName: 'Estratega Maestro Beta',
      tutorAvatarUrl: 'https://placehold.co/40x40.png',
    },
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
              Bienvenido, {user.displayName || user.email}!
            </h1>
            <p className="text-md text-muted-foreground">Aquí tienes un resumen de tu recorrido en Zona Cero.</p>
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
