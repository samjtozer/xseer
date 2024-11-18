import { MediaCarousel } from "@/components/media-carousel";
import { PodcastCard } from "@/components/podcast-card";
import { CarouselItem } from "@/components/ui/carousel";
import Image from "next/image";


type PodcastData = {
    id: number,
    name: string
};

const PODCAST_DATA: PodcastData[] = [
    {
        "id": 1,
        "name": "Joe Rogan Experience",
    },
    {
        "id": 2,
        "name": "Bad Friends"
    },
    {
        "id": 2,
        "name": "Bad Friends"
    },
    {
        "id": 2,
        "name": "Bad Friends"
    },
    {
        "id": 2,
        "name": "Bad Friends"
    },
    {
        "id": 2,
        "name": "Bad Friends"
    },
    {
        "id": 2,
        "name": "Bad Friends"
    },
];

export default function Podcast() {
  return (
    <main>
      <div className="flex w-full">
        <MediaCarousel title="Trending">
          {PODCAST_DATA.map((idx, podcast) => (
            <CarouselItem key={idx} className="basis-1/5">
              <PodcastCard key="1" />
            </CarouselItem>
          ))}
        </MediaCarousel>
      </div>
    </main>
  );
}
