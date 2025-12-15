import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Showcase() {
  const showcaseImages = PlaceHolderImages.filter(p => p.imageHint.includes("app screenshot"));

  return (
    <section id="showcase" className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground">
            See the Magic in Action
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Explore the bright colors, cartoon-style icons, and playful animations that make Kids Adventures a joy to use.
          </p>
        </div>
        <div className="flex justify-center">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-xs sm:max-w-sm md:max-w-md"
          >
            <CarouselContent>
              {showcaseImages.map((image) => (
                <CarouselItem key={image.id}>
                  <Card>
                    <CardContent className="flex aspect-[9/18] items-center justify-center p-2">
                       <Image
                          src={image.imageUrl}
                          alt={image.description}
                          width={400}
                          height={800}
                          className="rounded-lg"
                          data-ai-hint={image.imageHint}
                        />
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
