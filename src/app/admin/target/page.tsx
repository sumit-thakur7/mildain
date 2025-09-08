
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function TargetPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Targets</h1>
      <Card className="h-64">
        <CardHeader>
          <CardTitle className="text-2xl font-normal text-muted-foreground">Long Term Target</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Content for long term target can go here */}
        </CardContent>
      </Card>
      <Card className="h-64">
        <CardHeader>
          <CardTitle className="text-2xl font-normal text-muted-foreground">Short Term Target</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Content for short term target can go here */}
        </CardContent>
      </Card>
    </div>
  );
}
