
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { LifeBuoy, Send } from 'lucide-react';

export default function SupportPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <Card>
          <CardHeader>
            <CardTitle>Submit a Support Ticket</CardTitle>
            <CardDescription>Have an issue? Fill out the form below and our team will get back to you.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input placeholder="Your Name" />
                <Input type="email" placeholder="Your Email" />
            </div>
            <Input placeholder="Subject" />
            <Textarea placeholder="Describe your issue in detail..." className="min-h-[150px]" />
            <Button>
              <Send className="mr-2 h-4 w-4" />
              Submit Ticket
            </Button>
          </CardContent>
        </Card>
      </div>
      <div className="space-y-6">
        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <LifeBuoy className="w-8 h-8 text-primary" />
            <div>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>Reach us directly</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <p><span className="font-semibold">Email:</span> support@example.com</p>
            <p><span className="font-semibold">Phone:</span> +1 (800) 555-1234</p>
            <p><span className="font-semibold">Hours:</span> Mon-Fri, 9am - 5pm EST</p>
          </CardContent>
        </Card>
        <Card>
            <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
                <a href="#" className="block text-primary hover:underline">How do I reset my password?</a>
                <a href="#" className="block text-primary hover:underline">Where can I see my earnings?</a>
                <a href="#" className="block text-primary hover:underline">What are the team requirements?</a>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
