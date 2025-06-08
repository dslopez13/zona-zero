import { Brain, Award, Target, Trophy, Medal, Users, BookOpen, ClipboardCheck, BarChart, ShieldCheck, MessageSquare, Futbol, Basketball, Swords, Puzzle, Gamepad2, Dumbbell, Bike, Activity } from 'lucide-react';
import type { LucideProps } from 'lucide-react';

interface SportIconProps extends LucideProps {
  name: string;
}

export function SportIcon({ name, ...props }: SportIconProps) {
  switch (name.toLowerCase()) {
    case 'brain':
    case 'strategy':
      return <Brain {...props} />;
    case 'award':
      return <Award {...props} />;
    case 'target':
      return <Target {...props} />;
    case 'trophy':
      return <Trophy {...props} />;
    case 'medal':
      return <Medal {...props} />;
    case 'users':
      return <Users {...props} />;
    case 'bookopen':
    case 'materials':
      return <BookOpen {...props} />;
    case 'clipboardcheck':
    case 'activities':
      return <ClipboardCheck {...props} />;
    case 'barchart':
    case 'progress':
      return <BarChart {...props} />;
    case 'shieldcheck':
    case 'badge':
      return <ShieldCheck {...props} />;
    case 'messagesquare':
    case 'comment':
      return <MessageSquare {...props} />;
    case 'futbol':
    case 'football':
      return <Futbol {...props} />;
    case 'basketball':
      return <Basketball {...props} />;
    case 'swords':
    case 'offensive tactics':
      return <Swords {...props} />;
    case 'puzzle':
    case 'problem solving':
      return <Puzzle {...props} />;
    case 'gamepad2':
    case 'gaming':
      return <Gamepad2 {...props} />;
    case 'dumbbell':
    case 'physical training':
      return <Dumbbell {...props} />;
    case 'bike':
    case 'endurance':
      return <Bike {...props} />;
    case 'activity':
    default:
      return <Activity {...props} />;
  }
}
