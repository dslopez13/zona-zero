"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MessageSquare } from 'lucide-react';

export interface Comment {
  id: string;
  date: string; // e.g., "2024-07-15"
  text: string;
  tutorName: string;
  tutorAvatarUrl?: string; // Optional
}

interface TutorCommentsProps {
  comments: Comment[];
}

export function TutorComments({ comments }: TutorCommentsProps) {
  const getInitials = (name: string) => {
    const names = name.split(' ');
    if (names.length > 1) {
      return `${names[0][0]}${names[names.length - 1][0]}`.toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
  };
  
  return (
    <Card className="shadow-lg animate-fade-in [animation-delay:0.6s]">
      <CardHeader>
        <CardTitle className="text-lg font-medium text-primary flex items-center">
          <MessageSquare className="h-5 w-5 text-accent mr-2" />
          Tutor Feedback
        </CardTitle>
        <CardDescription>Latest comments and guidance from your tutors.</CardDescription>
      </CardHeader>
      <CardContent>
        {comments.length === 0 ? (
          <p className="text-muted-foreground">No comments from tutors yet.</p>
        ) : (
          <div className="space-y-4">
            {comments.map((comment) => (
              <div key={comment.id} className="flex space-x-3 p-3 bg-secondary/30 rounded-lg">
                <Avatar>
                  <AvatarImage src={comment.tutorAvatarUrl} alt={comment.tutorName} />
                  <AvatarFallback className="bg-primary text-primary-foreground">{getInitials(comment.tutorName)}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-sm text-primary">{comment.tutorName}</p>
                    <p className="text-xs text-muted-foreground">{new Date(comment.date).toLocaleDateString()}</p>
                  </div>
                  <p className="text-sm text-foreground mt-1">{comment.text}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
