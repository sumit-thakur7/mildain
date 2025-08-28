import { notFound } from 'next/navigation';
import { getPropertyById } from '@/lib/data';
import { Header } from '@/components/header';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { ImageGallery } from '@/components/image-gallery';
import { PropertyDetails } from '@/components/property-details';
import { PropertyOverview } from '@/components/property-overview';
import { Separator } from '@/components/ui/separator';

interface PropertyPageProps {
  params: {
    id: string;
  };
}

export default function PropertyPage({ params }: PropertyPageProps) {
  const property = getPropertyById(params.id);

  if (!property) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Listings
          </Link>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-12">
          <div className="lg:col-span-2 space-y-8">
            <ImageGallery images={property.images} address={property.address} />
            <PropertyDetails property={property} />
          </div>
          <div className="lg:col-span-1 mt-8 lg:mt-0">
            <PropertyOverview property={property} />
          </div>
        </div>
      </main>
      <footer className="py-6 text-center text-sm text-muted-foreground border-t">
        © {new Date().getFullYear()} EstateGraph. All rights reserved.
      </footer>
    </div>
  );
}
