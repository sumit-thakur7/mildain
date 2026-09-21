import { Button } from '@/components/ui/button';
import Link from 'next/link';
import images from '@/app/lib/placeholder-images.json';

export default function Home() {
  const heroImage = images.find(img => img.id === 'hero-bg');

  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden bg-background">
      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url("${heroImage?.url || 'https://picsum.photos/seed/hero/1920/1080'}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        data-ai-hint="luxury estate"
      >
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />
      </div>

      {/* Hero Content Section */}
      <main className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-white">
        <h1 className="text-6xl sm:text-8xl font-headline font-bold mb-6 tracking-tight drop-shadow-2xl">
          EstateGraph
        </h1>
        <p className="text-xl sm:text-2xl font-body mb-10 text-gray-200 max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
          The future of real estate networking. Connect, refer, and grow your success within our exclusive premium property ecosystem.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button size="lg" asChild className="text-lg px-10 h-14 bg-white text-black hover:bg-gray-200 border-none transition-transform hover:scale-105 active:scale-95 shadow-xl">
            <Link href="/register">Join the Network</Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="text-lg px-10 h-14 border-2 border-white/50 text-white hover:bg-white/10 backdrop-blur-md transition-transform hover:scale-105 active:scale-95 shadow-xl">
            <Link href="/admin">Go to Dashboard</Link>
          </Button>
        </div>
      </main>
    </div>
  );
}
