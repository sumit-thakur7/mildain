import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function TargetPage() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Target</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Target details will be displayed here.</p>
        </CardContent>
      </Card>
    </div>
  );
}
