import { Code2, Shield, TestTube2, FileCheck } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const QUALITY_ITEMS = [
  {
    icon: Code2,
    title: "Clean Code Standards",
    description: "Consistent style guides, SOLID principles, and comprehensive documentation.",
  },
  {
    icon: TestTube2,
    title: "Test-Driven Development",
    description: "High test coverage with unit, integration, and E2E tests for reliable releases.",
  },
  {
    icon: Shield,
    title: "Security First",
    description: "Regular code reviews, dependency audits, and security testing at every stage.",
  },
  {
    icon: FileCheck,
    title: "CI/CD Pipelines",
    description: "Automated builds, linting, and deployment for consistent quality delivery.",
  },
];

export default function QualitySection() {
  return (
    <section id="quality" className="relative z-10 py-24 px-4 md:px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-tech text-3xl md:text-4xl font-bold mb-4">
            Quality of Code
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Engineering excellence through rigorous practices and automation.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {QUALITY_ITEMS.map((item) => (
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
