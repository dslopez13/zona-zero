import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { SportIcon } from '@/components/shared/SportIcon';
import { ChevronRight, ListChecks, BookText } from 'lucide-react';
import Link from 'next/link';

export interface Unit {
  id: string;
  title: string;
  iconType: string;
  summary: string;
  materials: string[];
  activities: string[];
}

interface UnitCardProps {
  unit: Unit;
}

export function UnitCard({ unit }: UnitCardProps) {
  return (
    <Card className="flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
      <CardHeader className="flex flex-row items-center space-x-3 pb-3">
        <SportIcon name={unit.iconType} className="h-10 w-10 text-primary" />
        <div>
          <CardTitle className="text-xl font-headline">{unit.title}</CardTitle>
          <CardDescription>Module Overview</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex-grow space-y-3">
        <p className="text-muted-foreground text-sm">{unit.summary}</p>
        <div>
          <h4 className="font-semibold text-sm text-primary mb-1 flex items-center"><BookText size={16} className="mr-2 text-accent" />Materials:</h4>
          <ul className="list-disc list-inside text-xs text-muted-foreground space-y-0.5 pl-2">
            {unit.materials.slice(0, 2).map((material, index) => <li key={index}>{material}</li>)}
            {unit.materials.length > 2 && <li>And more...</li>}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-sm text-primary mb-1 flex items-center"><ListChecks size={16} className="mr-2 text-accent" />Activities:</h4>
          <ul className="list-disc list-inside text-xs text-muted-foreground space-y-0.5 pl-2">
            {unit.activities.slice(0, 2).map((activity, index) => <li key={index}>{activity}</li>)}
            {unit.activities.length > 2 && <li>And more...</li>}
          </ul>
        </div>
      </CardContent>
      <CardFooter>
        <Link href={`/curriculum/${unit.id}`} className="w-full">
          <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            View Details <ChevronRight size={16} className="ml-2" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
