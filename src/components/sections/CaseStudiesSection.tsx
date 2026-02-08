import { TrendingUp } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const CASE_STUDIES = [
  {
    client: "Healthcare Platform",
    industry: "Healthcare",
    challenge: "Legacy systems unable to handle real-time patient analytics.",
    solution: "Built AI-powered analytics platform with cloud-native architecture.",
    metrics: "40% faster insights, 99.9% uptime",
  },
  {
    client: "E-commerce Solution",
    industry: "Retail",
    challenge: "Scale issues during peak seasonal traffic.",
    solution: "Migrated to auto-scaling cloud infra with ML-based demand forecasting.",
    metrics: "3x traffic capacity, 50% cost reduction",
  },
  {
    client: "AgriTech Platform",
    industry: "Agriculture",
    challenge: "Manual data collection and limited predictive capabilities.",
    solution: "IoT + AI solution for crop monitoring and yield prediction.",
    metrics: "30% yield improvement, real-time alerts",
  },
];

export default function CaseStudiesSection() {
  return (
    <section id="case-studies" className="relative z-10 py-24 px-4 md:px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-tech text-3xl md:text-4xl font-bold mb-4">
            Case Studies
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real-world success stories from our AI and software development projects.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {CASE_STUDIES.map((study) => (
            <Card
              key={study.client}
              className="group border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <CardHeader className="flex flex-row items-start justify-between gap-2">
                <CardTitle className="text-lg">{study.client}</CardTitle>
                <Badge variant="secondary">{study.industry}</Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Challenge
                  </p>
                  <p className="text-sm">{study.challenge}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Solution
                  </p>
                  <p className="text-sm">{study.solution}</p>
                </div>
                <div className="flex items-center gap-2 text-tech font-medium">
                  <TrendingUp className="h-4 w-4" />
                  <span className="text-sm">{study.metrics}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
