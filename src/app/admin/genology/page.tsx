import { GenologyTree } from '@/components/genology-tree';
import { getGenologyData } from '@/lib/genology-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function GenologyPage() {
  const genologyData = getGenologyData();

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Genology Tree</h1>
      <Card>
        <CardContent className="p-6">
          <GenologyTree data={genologyData} />
        </CardContent>
      </Card>
    </div>
  );
}
