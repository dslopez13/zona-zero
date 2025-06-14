"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ClipboardCheck } from 'lucide-react';

export interface Grade {
  id: string;
  unit: string;
  score: string; // Could be 'A+', '85%', 'Pass'
  status: 'Completado' | 'En proceso' | 'No Iniciado';
  feedbackUrl?: string; // Optional link to detailed feedback
}

interface GradesTableProps {
  grades: Grade[];
}

export function GradesTable({ grades }: GradesTableProps) {
  const getStatusVariant = (status: Grade['status']): "default" | "secondary" | "outline" | "destructive" => {
    switch (status) {
      case 'Completado': return 'default'; // primary color by default
      case 'En proceso': return 'secondary'; // accent color
      case 'No Iniciado': return 'outline';
      default: return 'outline';
    }
  };
  
  const getScoreColor = (score: string) => {
    if (['A', 'A+'].includes(score.toUpperCase()) || (parseFloat(score) >= 90)) return 'text-green-600';
    if (['B', 'B+'].includes(score.toUpperCase()) || (parseFloat(score) >= 80)) return 'text-blue-600';
    if (['C', 'C+'].includes(score.toUpperCase()) || (parseFloat(score) >= 70)) return 'text-yellow-600';
    return 'text-red-600';
  };


  return (
    <Card className="shadow-lg animate-fade-in [animation-delay:0.4s]">
      <CardHeader>
        <CardTitle className="text-lg font-medium text-primary flex items-center">
          <ClipboardCheck className="h-5 w-5 text-accent mr-2" />
          Modulos & Calificaciones
        </CardTitle>
        <CardDescription>Descripción general de sus calificaciones y estado del módulo.</CardDescription>
      </CardHeader>
      <CardContent>
        {grades.length === 0 ? (
           <p className="text-muted-foreground">No hay modulos disponibles aún</p>
        ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="font-semibold text-primary">Unidad</TableHead>
              <TableHead className="text-center font-semibold text-primary">Calificación</TableHead>
              <TableHead className="text-center font-semibold text-primary">Estado</TableHead>
              {/* <TableHead className="text-right font-semibold text-primary">Feedback</TableHead> */}
            </TableRow>
          </TableHeader>
          <TableBody>
            {grades.map((grade) => (
              <TableRow key={grade.id}>
                <TableCell className="font-medium">{grade.unit}</TableCell>
                <TableCell className={`text-center font-semibold ${getScoreColor(grade.score)}`}>{grade.score}</TableCell>
                <TableCell className="text-center">
                  <Badge variant={getStatusVariant(grade.status)} className={grade.status === 'En proceso' ? 'bg-accent text-accent-foreground hover:bg-accent/90' : ''}>
                    {grade.status}
                  </Badge>
                </TableCell>
                {/* 
                <TableCell className="text-right">
                  {grade.feedbackUrl ? (
                    <a href={grade.feedbackUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">View</a>
                  ) : (
                    <span className="text-muted-foreground">-</span>
                  )}
                </TableCell>
                */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
        )}
      </CardContent>
    </Card>
  );
}
