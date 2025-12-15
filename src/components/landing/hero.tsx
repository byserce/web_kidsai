import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { AppStoreIcon, GooglePlayIcon } from "@/components/icons";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const heroImage = PlaceHolderImages.find(p => p.id === "hero-image");

  return (
    <section className="py-20 sm:py-32">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left">
          <h1 className="font-headline text-5xl md:text-7xl font-bold text-foreground leading-tight">
            The Ultimate AI <br />
            <span className="text-primary">Learning Adventure</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
            Spark your child's curiosity with KidsAI Adventures! A magical world where learning to identify objects is a fun-filled game powered by AI.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg" asChild>
              <Link href="#">
                <GooglePlayIcon className="h-6 w-6 mr-2" />
                Get Started
              </Link>
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <Link href="#features">
                Learn More <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="flex justify-center">
            {heroImage && (
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                width={600}
                height={400}
                className="rounded-3xl shadow-2xl border-4 border-white"
                data-ai-hint={heroImage.imageHint}
              />
            )}
        </div>
      </div>
    </section>
  );
}
