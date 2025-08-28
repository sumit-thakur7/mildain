"use client";

import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Expand } from 'lucide-react';

interface ImageGalleryProps {
  images: string[];
  address: string;
}

export function ImageGallery({ images, address }: ImageGalleryProps) {
  return (
    <div className="relative group">
      <Carousel className="w-full rounded-lg overflow-hidden shadow-lg">
        <CarouselContent>
          {images.map((src, index) => (
            <CarouselItem key={index}>
              <div className="aspect-video relative">
                <Image
                  src={src}
                  alt={`Image ${index + 1} of ${address}`}
                  fill
                  className="object-cover"
                  data-ai-hint="house interior"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 800px"
                  priority={index === 0}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity" />
      </Carousel>

      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="secondary"
            size="icon"
            className="absolute top-4 right-4 bg-black/30 hover:bg-black/60 text-white hover:text-white rounded-full h-9 w-9 opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="View fullscreen"
          >
            <Expand className="h-5 w-5" />
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-none w-screen h-screen p-0 border-0 bg-black/90 backdrop-blur-sm">
          <Carousel className="w-full h-full flex items-center justify-center" opts={{ loop: true }}>
            <CarouselContent>
              {images.map((src, index) => (
                <CarouselItem key={index}>
                  <div className="relative w-screen h-screen">
                    <Image
                      src={src}
                      alt={`Image ${index + 1} of ${address}`}
                      fill
                      className="object-contain"
                      data-ai-hint="house interior"
                      sizes="100vw"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/20 hover:bg-black/50 border-white/50" />
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/20 hover:bg-black/50 border-white/50" />
          </Carousel>
        </DialogContent>
      </Dialog>
    </div>
  );
}
