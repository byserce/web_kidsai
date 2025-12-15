import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Camera, Map, Wand2, PawPrint } from "lucide-react";

const features = [
  {
    icon: Camera,
    title: "AI Object Recognition",
    description: "Our smart camera identifies everyday objects, turning learning into a magical experience for your child.",
    color: "bg-chart-1",
  },
  {
    icon: Map,
    title: "Scavenger Hunts",
    description: "Engaging, AI-generated scavenger hunts that adapt to your home environment, making every game unique.",
    color: "bg-chart-3",
  },
  {
    icon: Wand2,
    title: "Smart Mode Assistance",
    description: "A helpful AI guide provides gentle hints and fun facts, encouraging learning without giving away the answer.",
    color: "bg-chart-2",
  },
  {
    icon: PawPrint,
    title: "Progression System",
    description: "Kids earn stars to unlock adorable animal companions and watch their collection grow as they learn.",
    color: "bg-chart-4",
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 sm:py-32 bg-white/50">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground">
            A World of Fun & Learning
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            KidsAI Adventures is packed with features that make learning an exciting adventure.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Card key={feature.title} className="text-center shadow-lg border-2 hover:border-primary/50 transition-all hover:scale-105">
              <CardHeader>
                <div className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center ${feature.color}`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="font-headline text-xl text-foreground mb-2">{feature.title}</CardTitle>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
