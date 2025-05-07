"use client";

import { ArrowRight } from "lucide-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import graph1 from "@/assets/fanda/graph1.png";
import graph2 from "@/assets/fanda/graph2.png";
import graph3 from "@/assets/fanda/graph3.png";
import graph4 from "@/assets/fanda/graph4.png";
import graph5 from "@/assets/fanda/graph5.png";
import graph6 from "@/assets/fanda/graph6.png";
import graph7 from "@/assets/fanda/graph7.png";
import graph8 from "@/assets/fanda/graph8.png";

import icon1 from "@/assets/fanda/icons1.png";
import icon2 from "@/assets/fanda/icons2.png";
import icon3 from "@/assets/fanda/icons3.png";
import icon4 from "@/assets/fanda/icons4.png";
import icon5 from "@/assets/fanda/icons5.png";
import icon6 from "@/assets/fanda/icons6.png";
import icon7 from "@/assets/fanda/icons7.png";

/* -------------------------------------------------------------------------- */
/*                                Helper parts                                */
/* -------------------------------------------------------------------------- */

type IconElemProps = {
  image: string;         // we pass the URL string
  title: string;
};

const IconElem = ({ image, title }: IconElemProps) => (
  <div className="flex flex-col items-center">
    <img
      src={image}
      alt={title}
      className="mb-3 hidden h-14 w-14 rounded-lg bg-white object-cover p-2 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] md:block"
    />
    <Badge
      variant="secondary"
      className="font-mono bg-white text-xs text-muted-foreground"
    >
      {title}
    </Badge>
  </div>
);

/* -------------------------------------------------------------------------- */
/*                              Feature section                               */
/* -------------------------------------------------------------------------- */

const Feature152 = () => (
  <section className="pt-40 pb-32">
    <div className="container">
      {/* Heading & CTA ------------------------------------------------------ */}
      <div className="mb-12 flex flex-col items-center">
        <h1 className="mb-4 text-center text-3xl font-semibold tracking-tight leading-normal md:text-4xl lg:text-5xl">
          Powering next-gen CFO intelligence
        </h1>
        <Button variant="link" asChild className="text-muted-foreground">
          <a href="./contact">
            Partner with us <ArrowRight className="size-4" />
          </a>
        </Button>
      </div>

      {/* Icon grid ---------------------------------------------------------- */}
      <div className="relative mx-auto max-w-4xl space-y-3">
        <div className="flex flex-col items-center gap-3 md:flex-row md:justify-around">
          <IconElem image={icon1.src} title="Forecasting & Budgeting Analytics" />
          <IconElem image={icon2.src} title="Financial Close & Reporting Automation" />
        </div>

        <div className="flex flex-col items-center gap-3 md:flex-row md:justify-center">
          <IconElem image={icon3.src} title="Working Capital Analytics" />
        </div>

        <div className="flex flex-col items-center gap-3 md:flex-row md:justify-evenly">
          <IconElem image={icon4.src} title="Profitability & Cost Analytics" />
          <IconElem image={icon5.src} title="Operational Performance Analytics" />
        </div>

        <div className="flex flex-col items-center gap-3 md:flex-row md:justify-between">
          <IconElem image={icon6.src} title="Solvency & Resilience Analytics" />
          <IconElem image={icon7.src} title="Capital Investment Analytics" />
        </div>
      </div>
    </div>
  </section>
);

/* -------------------------------------------------------------------------- */
/*                               Gallery slider                               */
/* -------------------------------------------------------------------------- */

const galleryImages = [
  graph1,
  graph2,
  graph3,
  graph4,
  graph5,
  graph6,
  graph7,
  graph8,
];

const Gallery7 = () => (
  <section className="pt-0 pb-40">
    <div className="w-full">
      <div className="max-w-[100vw] overflow-x-hidden">
        <Carousel
          opts={{ loop: true }}
          plugins={[AutoScroll({ speed: 0.9 })]}
          className="pointer-events-none"
        >
          <CarouselContent>
            {galleryImages.map((img, idx) => (
              <CarouselItem key={idx} className="basis-auto">
                <div className="max-h-80 max-w-60">
                  <img
                    src={img.src}
                    alt={`graph-${idx + 1}`}
                    className={cn(
                      "mt-7 h-full w-full rounded-md object-cover",
                      idx % 2 === 0 && "mt-16"
                    )}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  </section>
);

/* -------------------------------------------------------------------------- */
/*                             Exported wrapper                               */
/* -------------------------------------------------------------------------- */

export const Feature152Gallery7 = () => (
  <div>
    <Feature152 />
    <Gallery7 />
  </div>
);
