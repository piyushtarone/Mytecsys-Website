import Link from "next/link";
import { GraduationCap, Clock, ArrowRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const INTERNSHIPS = [
  {
    title: "AI/ML Intern",
    duration: "3–6 months",
    description:
      "Work on real AI projects. Learn ML pipelines, model training, and deployment.",
  },
  {
    title: "Software Development Intern",
    duration: "3–6 months",
    description:
      "Full-stack development with modern frameworks. Ship features to production.",
  },
  {
    title: "DevOps Intern",
    duration: "3–6 months",
    description:
      "Cloud infrastructure, CI/CD, and automation. Hands-on with AWS/Azure.",
  },
];

export default function InternshipSection() {
  return (
    <section id="internship" className="relative z-10 py-24 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-tech text-3xl md:text-4xl font-bold mb-4">
            Internship Program
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Learn from experts. Build real projects. Launch your career in AI and software.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {INTERNSHIPS.map((intern) => (
            <Card
              key={intern.title}
              className="group border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 flex flex-col"
            >
              <CardHeader className="flex flex-row items-start justify-between gap-2">
                <GraduationCap className="h-8 w-8 text-tech shrink-0 mt-1" />
                <Badge variant="outline" className="shrink-0">
                  <Clock className="h-3 w-3 mr-1" />
                  {intern.duration}
                </Badge>
              </CardHeader>
              <CardContent className="flex-1">
                <CardTitle className="text-lg mb-2">{intern.title}</CardTitle>
                <CardDescription>{intern.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" size="sm" className="group/btn">
                  <Link href="mailto:hr@mytecsys.in?subject=Internship%20Application">
                    Apply for Internship
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
