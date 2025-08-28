import type { Property } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Bath, BedDouble, LandPlot } from 'lucide-react';

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  return (
    <Link href={`/property/${property.id}`} className="group block">
      <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <div className="relative h-56 w-full">
          <Image
            src={property.images[0]}
            alt={`View of ${property.address}`}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            data-ai-hint="house exterior"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
        <CardContent className="p-4">
          <p className="text-2xl font-bold text-foreground my-1">
            ${property.price.toLocaleString()}
          </p>
          <h3 className="text-lg font-headline font-bold truncate">{property.address}</h3>
          <p className="text-sm text-muted-foreground">{property.city}</p>
          <div className="flex justify-start gap-4 items-center text-sm text-muted-foreground border-t pt-3 mt-3">
            <div className="flex items-center gap-1.5">
              <BedDouble className="w-4 h-4" />
              <span>{property.bedrooms} Beds</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Bath className="w-4 h-4" />
              <span>{property.bathrooms} Baths</span>
            </div>
            <div className="flex items-center gap-1.5">
              <LandPlot className="w-4 h-4" />
              <span>{property.sqft.toLocaleString()} sqft</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
