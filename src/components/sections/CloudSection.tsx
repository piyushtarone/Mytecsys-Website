import { Cloud, Globe, Server, Shield } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const CLOUD_ITEMS = [
  {
    icon: Cloud,
    title: "Cloud-Native Architecture",
    description: "AWS, Azure, and GCP deployments with containerized, scalable services.",
  },
  {
    icon: Server,
    title: "Auto-Scaling & Reliability",
    description: "Infrastructure that scales with demand and maintains 99.9% uptime.",
  },
  {
    icon: Globe,
    title: "Global Distribution",
    description: "CDN-backed, multi-region deployments for low-latency worldwide access.",
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "SOC 2 practices, encryption at rest and in transit, and audit-ready logs.",
  },
];

export default function CloudSection() {
  return (
    <section id="cloud" className="relative z-10 py-24 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-tech text-3xl md:text-4xl font-bold mb-4">
            Cloud Infrastructure
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Enterprise-grade cloud infrastructure for scalability, reliability, and security.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CLOUD_ITEMS.map((item) => (
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
