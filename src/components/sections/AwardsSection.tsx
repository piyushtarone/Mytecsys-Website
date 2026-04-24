import { Award, Trophy, Star } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const AWARDS = [
  {
    icon: Award,
    title: "Best AI Innovation",
    year: "2024",
    description: "Recognized for breakthrough AI solutions in enterprise software.",
  },
  {
    icon: Trophy,
    title: "Excellence in Cloud",
    year: "2024",
    description: "Awarded for scalable, secure cloud infrastructure delivery.",
  },
  {
    icon: Star,
    title: "Top Software Provider",
    year: "2023",
    description: "Client-voted excellence in software development and support.",
  },
];

export default function AwardsSection() {
  return (
    <section id="awards" className="relative z-10 py-24 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-tech text-3xl md:text-4xl font-bold mb-4">
            Awards & Recognition
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Industry recognition for our commitment to innovation and excellence.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {AWARDS.map((award) => (
            <Card
              key={award.title}
              className="group border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 text-center"
            >
              <CardHeader>
                <award.icon className="h-12 w-12 text-tech mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <CardTitle className="text-lg">{award.title}</CardTitle>
                <CardDescription className="text-primary font-medium">
                  {award.year}
                </CardDescription>
                <CardDescription>{award.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
