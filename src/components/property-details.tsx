import type { Property } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import { Separator } from './ui/separator';

interface PropertyDetailsProps {
  property: Property;
}

export function PropertyDetails({ property }: PropertyDetailsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline text-2xl">About this home</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-body leading-relaxed text-muted-foreground">{property.description}</p>
        <Separator className="my-6" />
        <h3 className="font-headline text-xl mb-4">Features</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-3">
          {property.features.map((feature, index) => (
            <div key={index} className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
              <span className="text-sm">{feature}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
