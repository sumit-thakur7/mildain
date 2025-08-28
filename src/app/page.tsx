import { Header } from '@/components/header';
import { PropertyCard } from '@/components/property-card';
import { getProperties } from '@/lib/data';

export default function Home() {
  const properties = getProperties();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-headline font-bold mb-2">Find Your Dream Home</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Discover a curated selection of premium properties tailored to your lifestyle.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </main>
      <footer className="py-6 text-center text-sm text-muted-foreground border-t">
        © {new Date().getFullYear()} EstateGraph. All rights reserved.
      </footer>
    </div>
  );
}
