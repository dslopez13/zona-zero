"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import { auth, signOut as firebaseSignOut } from '@/lib/firebase';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { LogOut, BookOpen, HomeIcon, UserCircle, School } from 'lucide-react'; // School for curriculum

export function Navbar() {
  const { user } = useAuth();
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await firebaseSignOut(auth);
      router.push('/'); // Redirect to root, middleware will handle redirect to /login
    } catch (error) {
      console.error("Error signing out: ", error);
      // Handle error (e.g., show toast)
    }
  };

  const getInitials = (name?: string | null) => {
    if (!name) return 'U';
    const names = name.split(' ');
    if (names.length > 1) {
      return `${names[0][0]}${names[names.length - 1][0]}`.toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
  };

  return (
    <nav className="bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href={user ? "/curriculum" : "/login"} className="text-2xl font-headline font-bold hover:text-accent transition-colors">
          TacticZone
        </Link>
        <div className="flex items-center space-x-4">
          {/* Home link always points to curriculum, middleware handles auth */}
          <Link href="/dashboard" className="hover:text-accent transition-colors flex items-center space-x-1">
            <HomeIcon size={18} />
            <span>Home</span>
          </Link>
          <Link href="/curriculum" className="hover:text-accent transition-colors flex items-center space-x-1">
            <BookOpen size={18} />
            <span>Curriculum</span>
          </Link>
          {/* Removed Dashboard link, curriculum is the main page */}
          
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full p-0 hover:bg-primary/80">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src={user.photoURL || undefined} alt={user.displayName || user.email || 'User'} />
                    <AvatarFallback className="bg-accent text-accent-foreground">{getInitials(user.displayName || user.email)}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">{user.displayName || 'User'}</p>
                    <p className="text-xs leading-none text-muted-foreground">
                      {user.email}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => router.push('/curriculum')}>
                  <School className="mr-2 h-4 w-4" /> 
                  <span>My Learning</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleSignOut} className="text-red-500 hover:!text-red-500 focus:text-red-500">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="space-x-2">
              <Button variant="secondary" onClick={() => router.push('/login')} className="bg-accent hover:bg-accent/90 text-accent-foreground">Login</Button>
              <Button variant="outline" onClick={() => router.push('/signup')} className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">Sign Up</Button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
