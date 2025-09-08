import Link from 'next/link';
import { Home, UserCog } from 'lucide-react';
import { Button } from './ui/button';

export function Header() {
  return (
    <header className="bg-card shadow-sm sticky top-0 z-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="p-2 bg-primary rounded-lg">
              <Home className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-2xl font-headline font-bold text-foreground">
              EstateGraph
            </span>
          </Link>
          <nav className="flex items-center gap-2">
            <Button variant="ghost">Contact</Button>
            <Button asChild variant="outline">
              <Link href="/admin">
                <UserCog />
                Admin
              </Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
