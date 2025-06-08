import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { SportIcon } from '@/components/shared/SportIcon';
import { BookText, CheckSquare, FileText, Video, Users2, HelpCircle } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

// Mock data - in a real app, this would come from a database or API
const curriculumData = [
  { id: 'unit-1', title: 'Foundations of Strategy', iconType: 'brain', summary: 'Understand the core principles of strategic thinking and planning in various game contexts.', longDescription: 'This foundational unit delves into the historical evolution of strategy, key theoretical frameworks, and practical application across different game genres. You will learn to analyze game states, identify objectives, and formulate long-term plans.', materials: ['PDF Guide: Strategic Principles', 'Video Lecture: History of Strategy', 'Reading: Sun Tzu - Art of War (Excerpts)', 'Glossary of Strategic Terms'], activities: ['Quiz 1: Strategy Basics', 'Case Study Analysis: Chess Grandmasters', 'Forum Discussion: Defining Strategy', 'Practical Exercise: Map Analysis'], learningObjectives: ['Define core strategic concepts.', 'Analyze historical strategic examples.', 'Apply basic strategic frameworks to simple scenarios.'] },
  { id: 'unit-2', title: 'Offensive Tactics', iconType: 'swords', summary: 'Learn to identify opportunities and execute aggressive maneuvers effectively.', longDescription: 'Unit 2 focuses on proactive play. You will explore various offensive patterns, risk assessment in aggressive plays, and techniques for breaking through opponent defenses. Timing and resource management for offensive pushes will be key themes.', materials: ['Interactive Module: Offensive Patterns', 'Video Analysis: Famous Offensive Plays', 'Checklist: Pre-Attack Assessment', 'Resource: Tactical Formation Guide'], activities: ['Simulation Game: Attack Scenarios', 'Peer Review: Tactical Plan', 'Live Workshop: Q&A with an Expert', 'Challenge: Blitz Mode Tactics'], learningObjectives: ['Identify offensive opportunities.', 'Execute common tactical patterns.', 'Assess risks associated with aggressive plays.'] },
  // Add other units similarly if needed for navigation, or fetch dynamically
];

interface UnitDetailsPageProps {
  params: {
    unitId: string;
  };
}

export default async function UnitDetailsPage({ params }: UnitDetailsPageProps) {
  const unit = curriculumData.find(u => u.id === params.unitId);

  if (!unit) {
    return (
      <div className="text-center py-10">
        <h1 className="text-2xl font-semibold text-destructive">Unit not found</h1>
        <p className="text-muted-foreground">The requested curriculum unit could not be located.</p>
        <Link href="/curriculum">
          <Button variant="link" className="mt-4">Back to Curriculum</Button>
        </Link>
      </div>
    );
  }

  const getMaterialIcon = (material: string) => {
    if (material.toLowerCase().includes('pdf') || material.toLowerCase().includes('guide')) return <FileText className="h-5 w-5 text-accent mr-2" />;
    if (material.toLowerCase().includes('video') || material.toLowerCase().includes('lecture')) return <Video className="h-5 w-5 text-accent mr-2" />;
    // if (material.toLowerCase().includes('interactive') || material.toLowerCase().includes('module')) return <Puzzle className="h-5 w-5 text-accent mr-2" />;
    return <BookText className="h-5 w-5 text-accent mr-2" />;
  };
  
  const getActivityIcon = (activity: string) => {
    if (activity.toLowerCase().includes('quiz')) return <HelpCircle className="h-5 w-5 text-accent mr-2" />;
    if (activity.toLowerCase().includes('case study') || activity.toLowerCase().includes('analysis')) return <BookText className="h-5 w-5 text-accent mr-2" />;
    if (activity.toLowerCase().includes('forum') || activity.toLowerCase().includes('discussion')) return <Users2 className="h-5 w-5 text-accent mr-2" />;
    // if (activity.toLowerCase().includes('simulation') || activity.toLowerCase().includes('exercise')) return <Gamepad2 className="h-5 w-5 text-accent mr-2" />;
    return <CheckSquare className="h-5 w-5 text-accent mr-2" />;
  };


  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <Card className="shadow-xl animate-fade-in">
        <CardHeader className="bg-primary text-primary-foreground rounded-t-lg p-6">
          <div className="flex items-center space-x-4">
            <SportIcon name={unit.iconType} className="h-12 w-12" />
            <div>
              <CardTitle className="text-3xl font-headline">{unit.title}</CardTitle>
              <CardDescription className="text-primary-foreground/80">{unit.summary}</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-primary mb-3">Detailed Description</h2>
            <p className="text-foreground leading-relaxed">{unit.longDescription || unit.summary}</p>
          </div>

          {unit.learningObjectives && unit.learningObjectives.length > 0 && (
            <div>
              <h2 className="text-2xl font-semibold text-primary mb-3">Learning Objectives</h2>
              <ul className="list-disc list-inside space-y-1 text-foreground">
                {unit.learningObjectives.map((obj, index) => (
                  <li key={index}>{obj}</li>
                ))}
              </ul>
            </div>
          )}

          <div>
            <h2 className="text-2xl font-semibold text-primary mb-3">Materials</h2>
            <ul className="space-y-2">
              {unit.materials.map((material, index) => (
                <li key={index} className="flex items-center p-3 bg-secondary/50 rounded-md">
                  {getMaterialIcon(material)}
                  <span className="text-secondary-foreground">{material}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-primary mb-3">Activities</h2>
            <ul className="space-y-2">
              {unit.activities.map((activity, index) => (
                <li key={index} className="flex items-center p-3 bg-secondary/50 rounded-md">
                  {getActivityIcon(activity)}
                  <span className="text-secondary-foreground">{activity}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="pt-4 text-center">
            <Link href="/curriculum">
              <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                Back to Full Curriculum
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// Generate static paths for curriculum units if desired (optional)
export async function generateStaticParams() {
  return curriculumData.map(unit => ({
    unitId: unit.id,
  }));
}
