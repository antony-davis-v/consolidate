"use client";

import { useState, useEffect } from "react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import type { CarouselApi } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

import landing1 from "@/assets/index/landing1.png";
import landing2 from "@/assets/index/landing2.png";
import landing3 from "@/assets/index/landing3.png";
import landing4 from "@/assets/index/landing4.png";
import landing5 from "@/assets/index/landing5.png";

const SLIDES = [
  {
    image: landing1,
    label: "AI Agents & Intelligent Automation",
  },
  { image: landing2,
    label: "Workflow Orchestration" },
  {
    image: landing3,
    label: "Low-Code/No-Code Development",
  },
  { image: landing4, label: "Interactive Dashboards" },
  { image: landing5, label: "Offshore Staffing" },
];

export const Streamlinetemplatehero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [api, setApi] = useState<CarouselApi | null>(null);

  useEffect(() => {
    if (api) {
      api.on("select", () => {
        setCurrentSlide(api.selectedScrollSnap());
      });
    }
  }, [api]);

  return (
    <section className="bg-sand-100 relative overflow-hidden pt-28 md:pt-28 lg:pt-40 pb-12">
      <div className="container relative grid gap-12 lg:grid-cols-[1fr_0.68fr]">
        <div className="to-foreground/27 bg-linear-to-r absolute inset-x-0 bottom-0 z-10 -mr-[max(5rem,calc((100vw-80rem)/2+5rem))] h-px from-transparent" />
        <div className="space-y-8 lg:space-y-12">
          <h1 className="text-3xl font-semibold tracking-tight leading-tight md:text-4xl lg:text-5xl">
            <span className="mb-2 block text-primary">Automate at scale</span>
            <span className="mb-2 block text-muted-foreground">
              Accelerate with AI
            </span>
          </h1>
          <div className="flex flex-wrap items-center gap-4">
          <a href="./data-and-ai" className="hover:text-accent-foreground">
            <Button aria-label="Get started">
              Explore our Data and AI solutions
            </Button>
          </a>
            <a href="/contact" className="hover:text-accent-foreground">
              <Button
                aria-label="Explore our offerings"
                variant="outline"
                className="max-sm:hidden"
              >
                <span className="flex items-center gap-2 whitespace-pre-wrap text-start">
                  Partner with us <ArrowRight className="stroke-3 size-4" />
                </span>
              </Button>
            </a>
          </div>
          <SlideIndicator
            currentSlide={currentSlide}
            slides={SLIDES}
            className="mb-4! max-lg:hidden"
            api={api}
          />
        </div>
        <div className="relative -mr-[max(5rem,calc((58vw-40rem)/2+5rem))] shadow-xl max-lg:translate-x-10 lg:shadow-2xl">
          <Carousel
            className="size-full [&>div]:size-full"
            setApi={setApi}
            opts={{ loop: true }}
            plugins={[Autoplay({ delay: 1500, stopOnInteraction: false })]}
          >
            <CarouselContent className="size-full">
              {SLIDES.map((slide, index) => (
                <CarouselItem key={index}>
                  <div className="relative size-full min-h-[30rem] overflow-hidden rounded-t-xl">
                    <img
                      src={slide.image.src}
                      alt={`Streamline product interface showing ${slide.label}`}
                      className="size-full object-cover object-left-top"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SlideIndicator
          currentSlide={currentSlide}
          slides={SLIDES}
          className="mb-8 mt-6 lg:hidden md:items-center md:text-center"
          api={api}
        />
      </div>
    </section>
  );
};

interface SlideIndicatorProps {
  currentSlide: number;
  slides: Array<{ label: string }>;
  className?: string;
  api: CarouselApi | null;
}

const SlideIndicator = ({
  currentSlide,
  slides,
  className,
  api,
}: SlideIndicatorProps) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center text-center md:items-start md:text-left font-medium",
        className
      )}
    >
      <div>
        <span className="text-muted-foreground">
          {slides[currentSlide].label}
        </span>
      </div>
      <div className="flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
            className="py-2"
          >
            <div
              className={cn(
                "h-0.5 w-6 rounded-full transition-colors",
                index === currentSlide
                  ? "bg-primary"
                  : "bg-primary/20 hover:bg-primary/40"
              )}
            />
          </button>
        ))}
      </div>
    </div>
  );
};
