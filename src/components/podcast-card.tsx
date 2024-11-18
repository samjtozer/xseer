import { Card, CardContent } from "@/components/ui/card"
  
interface PodcastCardProps {
    key: number
};

export function PodcastCard() {
  return (
    <div className="p-1">
      <Card>
        <CardContent className="flex aspect-square items-center justify-center p-6 bg-red-500">
          <span className="text-3xl font-semibold"></span>
        </CardContent>
      </Card>
    </div>
  )
};
