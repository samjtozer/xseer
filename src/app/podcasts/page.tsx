import { MediaCarousel } from "@/components/media-carousel";
import { PodcastCard } from "@/components/podcast-card";
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
    <main className="flex flex-col px-5 py-5">
        <div className="flex">
            <MediaCarousel title={"Trending"}>
                {PODCAST_DATA.map((idx, podcast) => <PodcastCard key={idx} />)}
            </MediaCarousel>
        </div>
    </main>
  );
}
