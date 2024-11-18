import * as React from "react"

import {
Carousel,
CarouselContent,
CarouselItem,
CarouselNext,
CarouselPrevious,
} from "@/components/ui/carousel"

interface MediaCarouselProps {
  title: string, 
  children: React.ReactNode;
}

export function MediaCarousel({ title, children }: MediaCarouselProps) {
  return (
    <Carousel
      opts={{
      align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {children}
      </CarouselContent>
    </Carousel>
  )
}

