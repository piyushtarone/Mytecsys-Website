import Link from "next/link";
import { Briefcase, MapPin, ArrowRight } from "lucide-react";
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

const OPEN_POSITIONS = [
  {
    title: "Senior AI Engineer",
    location: "Nagpur, Maharashtra",
    type: "Full-time",
  },
  {
    title: "Full-Stack Developer",
    location: "Remote / Nagpur",
    type: "Full-time",
  },
  {
    title: "DevOps Engineer",
    location: "Nagpur, Maharashtra",
    type: "Full-time",
  },
  {
    title: "UX/UI Designer",
    location: "Nagpur, Maharashtra",
    type: "Full-time",
  },
];

export default function HiringSection() {
  return (
    <section id="hiring" className="relative z-10 py-24 px-4 md:px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-tech text-3xl md:text-4xl font-bold mb-4">
            We&apos;re Hiring
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join our team of innovators. We&apos;re looking for passionate people to build the future with AI.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {OPEN_POSITIONS.map((job) => (
            <Card
              key={job.title}
              className="group border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <CardHeader className="flex flex-row items-start justify-between gap-2">
                <div className="flex items-start gap-3">
                  <Briefcase className="h-8 w-8 text-tech shrink-0 mt-1" />
                  <div>
                    <CardTitle className="text-lg">{job.title}</CardTitle>
                    <CardDescription className="flex items-center gap-1 mt-1">
                      <MapPin className="h-3 w-3" />
                      {job.location}
                    </CardDescription>
                  </div>
                </div>
                <Badge variant="secondary">{job.type}</Badge>
              </CardHeader>
              <CardFooter>
                <Button asChild variant="outline" size="sm" className="group/btn">
                  <Link href="mailto:hr@mytecsys.in?subject=Job%20Application">
                    Apply Now
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
