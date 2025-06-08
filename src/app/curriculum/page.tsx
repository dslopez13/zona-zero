import { UnitCard, type Unit } from '@/components/course/UnitCard';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

// Mock data - in a real app, this would come from a database or API
const curriculumData: Unit[] = [
  { id: 'unit-1', title: 'Foundations of Strategy', iconType: 'brain', summary: 'Understand the core principles of strategic thinking and planning in various game contexts.', materials: ['PDF Guide: Strategic Principles', 'Video Lecture: History of Strategy', 'Reading: Sun Tzu - Art of War (Excerpts)'], activities: ['Quiz 1: Strategy Basics', 'Case Study Analysis: Chess Grandmasters', 'Forum Discussion: Defining Strategy'] },
  { id: 'unit-2', title: 'Offensive Tactics', iconType: 'swords', summary: 'Learn to identify opportunities and execute aggressive maneuvers effectively.', materials: ['Interactive Module: Offensive Patterns', 'Video Analysis: Famous Offensive Plays', 'Checklist: Pre-Attack Assessment'], activities: ['Simulation Game: Attack Scenarios', 'Peer Review: Tactical Plan', 'Live Workshop: Q&A with an Expert'] },
  { id: 'unit-3', title: 'Defensive Maneuvers', iconType: 'shieldcheck', summary: 'Master the art of defense, resource management, and counter-attacks.', materials: ['Guide: Defensive Structures', 'Case Studies: Great Defensive Stands', 'Role-Playing Scenarios'], activities: ['Quiz 2: Defensive Principles', 'Debate: Proactive vs. Reactive Defense', 'Practical Exercise: Defend the Base'] },
  { id: 'unit-4', title: 'Psychological Warfare', iconType: 'users', summary: 'Explore the mental aspects of competition, including bluffing, intimidation, and maintaining composure.', materials: ['Reading: The Psychology of Competition', 'Video Interviews: Pro Players on Mind Games', 'Self-Assessment: Emotional Resilience'], activities: ['Role-Playing: Negotiation & Deception', 'Journaling: Emotional Triggers', 'Group Project: Psychological Profile of an Opponent'] },
  { id: 'unit-5', title: 'Adaptation & Improvisation', iconType: 'activity', summary: 'Develop the ability to adapt to changing game states and improvise under pressure.', materials: ['Framework: Adaptive Decision Making', 'Video Examples: Turning Defeat into Victory', 'Workbook: Scenario Planning'], activities: ['Rapid Fire Quizzes', 'Improvisation Drills', 'Final Project: Adaptive Strategy Presentation'] },
  { id: 'unit-6', title: 'Team Synergy & Leadership', iconType: 'users', summary: 'Learn to lead and collaborate effectively in team-based games.', materials: ['Guide: Building Team Cohesion', 'Interviews: Successful Team Captains', 'Communication Protocols'], activities: ['Team-Building Exercises (Online)', 'Leadership Simulation', 'Case Study: Championship Teams'] },
];

export default function CurriculumPage() {
  // Basic search functionality would require client component and state
  // For a server component, this is a static display
  return (
    <div className="space-y-8">
      <section className="text-center py-8 bg-card rounded-lg shadow-xl">
        <h1 className="text-4xl font-headline font-bold text-primary mb-2">Course Curriculum</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Explore the comprehensive list of modules designed to make you a TacticZone Game Master.
        </p>
      </section>
      
      {/* Search bar - would need client component for interactivity
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input placeholder="Search curriculum..." className="pl-10" />
      </div> 
      */}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
        {curriculumData.map(unit => (
          <UnitCard key={unit.id} unit={unit} />
        ))}
      </div>
    </div>
  );
}
