"use client";

import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import type { CarouselApi } from "@/components/ui/carousel";

import landing1 from "@/assets/index/msppsection1.png";
import landing2 from "@/assets/index/msppsection2.png";
import landing3 from "@/assets/index/msppsection3.png";
import landing4 from "@/assets/index/msppsection4.png";
import landing5 from "@/assets/index/msppsection5.png";


export interface Gallery4Item {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
}

export interface Gallery4Props {
  title?: string;
  subtitle?: string;
  description?: string;
  items: Gallery4Item[];
}

const data: Gallery4Item[] = [
  {
    id: "power-bi",
    title: "Power BI",
    description: "",
    href: "microsoft-power-platform#powerbi",
    image:landing1.src,
  },
  {
    id: "power-apps",
    title: "Power Apps",
    description: "",
    href: "microsoft-power-platform#powerapps",
    image:landing2.src,
  },
  {
    id: "power-automate",
    title: "Power Automate",
    description: "",
    href: "microsoft-power-platform#powerautomate",
    image:landing3.src,
  },
  {
    id: "power-pages",
    title: "Power Pages",
    description: "",
    href: "microsoft-power-platform#powerpages",
    image:landing4.src,
  },
  {
    id: "copilot",
    title: "Copilot",
    description: "",
    href: "microsoft-power-platform#copilot",
    image:landing5.src,
  },
];

const Gallery4 = ({
  title = "Microsoft Power Platform",
  subtitle = "Development Solutions",
  description = "Empower your teams with custom solutions built on Power BI, Power Apps, Power Automate, Power Pages, and Copilot—enabling rapid automation and real-time insights.",
  items = data,
}: Gallery4Props) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!carouselApi) return;
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  return (
    <section className="pt-0 pb-40">
      <div className="container">
        <div className="mb-8 flex flex-col items-start justify-between gap-6 md:mb-14 md:flex-row md:items-end lg:mb-16">
          <div className="flex max-w-xl flex-col gap-6 text-left">
            <p className="font-mono text-xs text-muted-foreground">What’s the solution?</p>
            <div className="space-y-0">
              <h2 className="m-0 text-2xl font-semibold tracking-tight leading-normal md:text-3xl lg:text-4xl">{title}</h2>
              <h2 className="m-0 text-2xl font-semibold tracking-tight leading-normal md:text-3xl lg:text-4xl">{subtitle}</h2>
            </div>
            <p className="max-w-lg text-lg text-muted-foreground">{description}</p>
            <a href="./microsoft-power-platform" className="hover:text-accent-foreground">
            <Button className="rounded-md w-fit">
              Dive Deeper
              <ChevronRight className="ml-2 size-4" />
            </Button>
            </a>
          </div>
          <div className="hidden shrink-0 gap-2 md:flex">
            <Button
              size="icon"
              variant="ghost"
              onClick={() => carouselApi?.scrollPrev()}
              disabled={!canScrollPrev}
              className="disabled:pointer-events-auto"
            >
              <ArrowLeft className="size-5" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => carouselApi?.scrollNext()}
              disabled={!canScrollNext}
              className="disabled:pointer-events-auto"
            >
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            breakpoints: {
              "(max-width: 768px)": {
                dragFree: true,
              },
            },
          }}
        >
          <CarouselContent className="ml-0 2xl:mr-[max(0rem,calc(50vw-700px))] 2xl:ml-[max(8rem,calc(50vw-700px))]">
            {items.map((item) => (
              <CarouselItem key={item.id} className="max-w-[320px] pl-[20px] lg:max-w-[360px]">
                <a href={item.href} className="group rounded-xl">
                  <div className="group relative h-full min-h-[27rem] max-w-full overflow-hidden rounded-xl md:aspect-[5/4] lg:aspect-[16/9]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 h-full bg-[linear-gradient(transparent_20%,var(--primary)_100%)] mix-blend-multiply" />
                    <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-6 text-primary-foreground md:p-8">
                      <div className="flex items-center text-sm">
                        {item.title}
                        <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="mt-6 flex justify-center gap-2 md:hidden">
          <Button
            size="icon"
            variant="ghost"
            onClick={() => carouselApi?.scrollPrev()}
            disabled={!canScrollPrev}
            className="disabled:pointer-events-auto"
          >
            <ArrowLeft className="size-5" />
          </Button>
          <Button
            size="icon"
            variant="ghost"
            onClick={() => carouselApi?.scrollNext()}
            disabled={!canScrollNext}
            className="disabled:pointer-events-auto"
          >
            <ArrowRight className="size-5" />
          </Button>
        </div>
        <div className="mt-8 flex justify-center gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full transition-colors ${currentSlide === index ? "bg-primary" : "bg-primary/20"}`}
              onClick={() => carouselApi?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export { Gallery4 };