"use client";

import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const TESTIMONIALS = [
  {
    quote:
      "My Tec Sys delivered an AI solution that transformed our operations. Their team combined deep technical expertise with clear communication.",
    author: "Ajinkya S.",
    role: "CTO, Enterprise Client",
    initials: "AS",
  },
  {
    quote:
      "Best IT and digital solutions provider. Highly recommended for anyone looking to innovate with AI and cloud technologies.",
    author: "Siddhesh K.",
    role: "Engineering Lead",
    initials: "SK",
  },
  {
    quote:
      "The organization always supports you in your project journey. A true leader who listens, leads, and learns with the team.",
    author: "Anjali P.",
    role: "Product Manager",
    initials: "AP",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative z-10 py-24 px-4 md:px-6 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="font-tech text-3xl md:text-4xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Trusted by businesses worldwide for AI innovation and software excellence.
          </p>
        </div>
        <Carousel
          opts={{ align: "start", loop: true }}
          className="w-full"
        >
          <CarouselContent>
            {TESTIMONIALS.map((t) => (
              <CarouselItem key={t.author}>
                <Card className="border-border">
                  <CardContent className="pt-6">
                    <Quote className="h-10 w-10 text-tech/50 mb-4" />
                    <p className="text-muted-foreground italic mb-6">
                      &quot;{t.quote}&quot;
                    </p>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarFallback className="bg-tech/20 text-tech">
                          {t.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">{t.author}</p>
                        <p className="text-sm text-muted-foreground">
                          {t.role}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0 md:-left-12" />
          <CarouselNext className="right-0 md:-right-12" />
        </Carousel>
      </div>
    </section>
  );
}
