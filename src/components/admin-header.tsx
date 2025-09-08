import { Bell, Mail } from 'lucide-react';
import { Button } from './ui/button';

export function AdminHeader() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-background px-4 sm:px-6 lg:px-8">
        <h1 className="text-xl font-semibold">Dashboard</h1>
        <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
                <span className="sr-only">Notifications</span>
            </Button>
            <Button variant="ghost" size="icon">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Messages</span>
            </Button>
        </div>
    </header>
  );
}
