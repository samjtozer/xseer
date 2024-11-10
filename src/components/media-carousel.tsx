import React from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";

interface MediaCarouselProps {
    title: string, 
    children: React.ReactNode;
}

export function MediaCarousel({ title, children }: MediaCarouselProps) {
    return (
        <div>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-3xl mb-1 bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-transparent">{title}</h1>
            <Carousel>
                <CarouselContent className="">
                    {React.Children.map(children, (child, idx) => (
                        <CarouselItem className="basis-1/10" key={idx}>{child}</CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    );
}