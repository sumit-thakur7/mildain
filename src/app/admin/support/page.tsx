import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function SupportPage() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Customer Support</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Customer support details will be displayed here.</p>
        </CardContent>
      </Card>
    </div>
  );
}
