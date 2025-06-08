import { YoutubeEmbed } from '@/components/shared/YoutubeEmbed';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Zap, Trophy } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  const keyFeatures = [
    { icon: <Zap className="h-6 w-6 text-accent" />, title: "Expert-Led Modules", description: "Learn from seasoned game masters and strategists." },
    { icon: <Trophy className="h-6 w-6 text-accent" />, title: "Practical Exercises", description: "Apply your knowledge through hands-on activities and simulations." },
    { icon: <CheckCircle className="h-6 w-6 text-accent" />, title: "Community Access", description: "Connect with fellow learners and share insights." },
  ];

  return (
    <div className="space-y-12">
      <section className="text-center py-12 bg-card rounded-lg shadow-xl">
        <h1 className="text-5xl font-headline font-bold text-primary mb-4 animate-fade-in">Welcome to TacticZone: Game Masters</h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in [animation-delay:0.2s]">
          Unlock your strategic potential and master the art of the game. Our comprehensive course is designed to elevate your skills, whether you're a novice or an experienced player.
        </p>
        <div className="animate-fade-in [animation-delay:0.4s]">
          <Link href="/signup">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              Enroll Now & Conquer
            </Button>
          </Link>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4 animate-fade-in [animation-delay:0.6s]">
          <h2 className="text-3xl font-headline font-semibold text-primary">Course Overview</h2>
          <p className="text-lg text-foreground">
            Dive deep into the core principles of strategy, tactical execution, and mental fortitude. This course covers everything from foundational concepts to advanced techniques used by top game masters.
          </p>
          <p className="text-lg text-foreground">
            Watch our introductory video to get a glimpse of what TacticZone offers and how we can help you achieve mastery.
          </p>
          <ul className="space-y-2 mt-4">
            {keyFeatures.map((feature, index) => (
              <li key={index} className="flex items-start space-x-3">
                {feature.icon}
                <div>
                  <h3 className="font-semibold text-primary">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="animate-fade-in [animation-delay:0.8s]">
          <YoutubeEmbed embedId="dQw4w9WgXcQ" title="TacticZone Course Introduction" />
        </div>
      </section>

      <section className="py-12 animate-fade-in [animation-delay:1s]">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-headline text-primary">Why Choose TacticZone?</CardTitle>
            <CardDescription>Key benefits of enrolling in our Game Masters course.</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center p-4">
              <Image src="https://placehold.co/150x150.png" alt="Expert Instructors" width={150} height={150} className="rounded-full mb-4 shadow-md" data-ai-hint="instructor teaching" />
              <h3 className="text-xl font-semibold text-primary mb-2">World-Class Instructors</h3>
              <p className="text-muted-foreground">Learn from the best in the field, with years of competitive experience and coaching success.</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <Image src="https://placehold.co/150x150.png" alt="Comprehensive Curriculum" width={150} height={150} className="rounded-full mb-4 shadow-md" data-ai-hint="books stack" />
              <h3 className="text-xl font-semibold text-primary mb-2">In-Depth Curriculum</h3>
              <p className="text-muted-foreground">Our curriculum is meticulously crafted to cover all aspects of game mastery.</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <Image src="https://placehold.co/150x150.png" alt="Supportive Community" width={150} height={150} className="rounded-full mb-4 shadow-md" data-ai-hint="people collaboration" />
              <h3 className="text-xl font-semibold text-primary mb-2">Vibrant Community</h3>
              <p className="text-muted-foreground">Join a network of passionate learners and grow together in a supportive environment.</p>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
