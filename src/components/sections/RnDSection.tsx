import { FlaskConical, Brain, Microscope } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const RND_ITEMS = [
  {
    icon: Brain,
    title: "AI & ML Research",
    description:
      "Exploring cutting-edge machine learning models and neural network architectures to solve complex business problems.",
  },
  {
    icon: FlaskConical,
    title: "Innovation Labs",
    description:
      "Dedicated R&D teams experiment with emerging technologies to prototype solutions before production.",
  },
  {
    icon: Microscope,
    title: "Applied Research",
    description:
      "Bridging academic research with real-world applications—from NLP to computer vision and predictive analytics.",
  },
];

export default function RnDSection() {
  return (
    <section id="rnd" className="relative z-10 py-24 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-tech text-3xl md:text-4xl font-bold mb-4">
            Research & Development
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our R&D labs drive innovation at the intersection of AI and practical
            business solutions.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {RND_ITEMS.map((item) => (
            <Card
              key={item.title}
              className="group border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <CardHeader>
                <item.icon className="h-10 w-10 text-tech mb-2 group-hover:scale-110 transition-transform" />
                <CardTitle className="text-lg">{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
