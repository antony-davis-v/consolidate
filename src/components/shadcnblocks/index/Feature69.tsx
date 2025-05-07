"use client";

import { ArrowRight, ChevronDown, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import type { CarouselApi } from "@/components/ui/carousel";

import fisection1 from '@/assets/index/fisection1.png';

const features = [
  {
    id: "feature-1",
    title: "Forecasting & Budgeting Analytics",
    description:
      "Drive agile decision-making with forward-looking forecasts and adaptive budgets that empower your organization to swiftly respond to market shifts",
    href: "finance-intelligence",
    image: fisection1,
  },
  {
    id: "feature-2",
    title: "Financial Close & Reporting Automation",
    description:
      "Accelerate and simplify your close process with automated workflows and real-time reporting, freeing leadership to focus on strategic growth",
    href: "finance-intelligence",
    image: fisection1,
  },
  {
    id: "feature-3",
    title: "Working Capital Analytics",
    description:
      "Uncover hidden liquidity opportunities to strengthen cash flow and fuel growth, optimizing every facet of your working capital structure",
    href: "finance-intelligence",
    image: fisection1,
  },
  {
    id: "feature-4",
    title: "Profitability & Cost Analytics",
    description:
      "Pinpoint cost efficiencies and margin opportunities to drive strategic profitability, fueling sustainable growth and competitive advantage",
    href: "finance-intelligence",
    image: fisection1,
  },
  {
    id: "feature-5",
    title: "Operational Performance Analytics",
    description:
      "Transform operational efficiency with data-driven insights that reveal, measure, and optimize the processes most critical to your success",
    href: "finance-intelligence",
    image: fisection1,
  },
  {
    id: "feature-6",
    title: "Solvency & Resilience Analytics",
    description:
      "Safeguard long-term stability and foster resilience with analytics that monitor solvency metrics, identify critical risks, and drive sustainable growth",
    href: "finance-intelligence",
    image:fisection1,
  },
  {
    id: "feature-7",
    title: "Capital Investment Analytics",
    description:
      "Make high-impact investment decisions using advanced analytics that optimize capital allocation and forecast ROI, maximizing shareholder value",
    href: "finance-intelligence",
    image: fisection1,
  },
];

const Feature69 = () => {
  const [selection, setSelection] = useState(0);
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!carouselApi) return;
    carouselApi.scrollTo(selection);
  }, [carouselApi, selection]);

  useEffect(() => {
    if (!carouselApi) return;
    const updateSelection = () => {
      setSelection(carouselApi.selectedScrollSnap());
    };
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  return (
    <section className="pt-0 pb-40">
      <div className="container">
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="flex shrink-0 flex-col md:w-1/2 md:pr-8 lg:pr-24 lg:text-left 2xl:pr-16">
            <div className="grid items-center gap-8 lg:grid-cols-1">
              <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                <p className="mb-6 font-mono text-xs text-muted-foreground">
                  What’s the solution?
                </p>
                <h2 className="mb-6 text-2xl font-semibold tracking-tight leading-normal md:text-3xl lg:text-4xl">
                  Finance Intelligence
                </h2>
                <p className="mb-6 text-base text-muted-foreground">
                  Modernize and elevate the accounting and finance function through intelligent automation, predictive data modeling, and interactive dashboards that empower leaders to make faster, more informed decisions.
                </p>
                <a href="./finance-intelligence" className="hover:text-accent-foreground">
                <Button className="mb-12">
                  Dive Deeper
                  <ChevronRight className="ml-2 h-4" />
                </Button>
                </a>
              </div>
            </div>
            <ul className="space-y-2">
              {features.map((feature, i) => (
                <li
                  key={feature.id}
                  className="group relative w-full cursor-pointer px-6 py-3 transition data-[open]:bg-accent"
                  data-open={selection === i ? "true" : undefined}
                  onClick={() => setSelection(i)}
                >
                  <div className="flex items-center justify-between gap-x-2">
                    <div className="text-sm font-semibold text-accent-foreground">
                      {feature.title}
                    </div>
                    <div className="flex size-8 items-center justify-center rounded-full bg-accent text-accent-foreground group-hover:bg-primary group-hover:text-primary-foreground group-data-[open]:bg-primary group-data-[open]:text-primary-foreground">
                      <ChevronDown className="size-4 shrink-0 transition-transform duration-200 group-data-[open]:rotate-180" />
                    </div>
                  </div>
                  <div className="hidden text-sm font-medium group-data-[open]:block">
                    <p className="my-4 text-muted-foreground lg:my-6">
                      {feature.description}
                    </p>
                    <a
                      href="finance-intelligence"
                      className="group/link flex items-center pb-3 text-sm text-accent-foreground"
                    >
                      Learn more{" "}
                      <ArrowRight className="ml-2 size-4 transition-transform group-hover/link:translate-x-1" />
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="aspect-[5/6] overflow-clip rounded-3xl bg-accent md:w-1/2">
            <Carousel setApi={setCarouselApi} className="h-full w-full [&>div]:h-full">
              <CarouselContent className="mx-0 h-full w-full">
                {features.map((feature) => (
                  <CarouselItem key={feature.id} className="px-0">
                    <img
                      src={feature.image.src}
                      alt={feature.title}
                      className="h-full w-full object-cover object-center"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature69 };
