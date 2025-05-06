"use client";

import AutoScroll from "embla-carousel-auto-scroll";

import bi1 from "@/assets/mspp/bi1.png";
import bi2 from "@/assets/mspp/bi2.png";
import bi3 from "@/assets/mspp/bi3.png";
import bi4 from "@/assets/mspp/bi4.png";
import bi5 from "@/assets/mspp/bi5.png";
import bi6 from "@/assets/mspp/bi6.png";


import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const Hero85 = () => {
  return (
    <section className="pt-0 pb-40">
      <div className="container">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="mx-auto">
            <h1 className="mb-4 text-2xl font-semibold tracking-tight leading-normal md:text-3xl lg:text-4xl">
              Real‑time dashboards<br></br>Real‑world impact
            </h1>
            <p className="mx-auto text-muted-foreground text-base">
              Transform complex data into interactive dashboards and tailored
              reports. From data modeling and integration to visualization and
              governance, our Power BI development services deliver real‑time
              insights that drive smarter decisions, forecast trends, and fuel
              growth.
            </p>
            <div className="mt-10 flex flex-col gap-2 sm:flex-row">
              <Button size="lg" className="w-full gap-2 sm:w-auto">
                Partner with us
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full gap-2 sm:w-auto"
              >
                Schedule a demo
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-8 lg:hidden">
            <Carousel
              opts={{
                loop: true,
              }}
              plugins={[
                AutoScroll({
                  speed: 0.8,
                }),
              ]}
              className="-mx-7"
            >
              <CarouselContent className="max-h-[350px]">
                <CarouselItem className="max-w-96">
                  <img
                    src={bi1.src}
                    alt="placeholder"
                  />
                </CarouselItem>
                <CarouselItem className="max-w-96">
                  <img
                    src={bi2.src}
                    alt="placeholder"
                  />
                </CarouselItem>
                <CarouselItem className="max-w-96">
                  <img
                    src={bi3.src}
                    alt="placeholder"
                  />
                </CarouselItem>
                <CarouselItem className="max-w-96">
                  <img
                    src={bi4.src}
                    alt="placeholder"
                  />
                </CarouselItem>
              </CarouselContent>
            </Carousel>
            <Carousel
              opts={{
                loop: true,
              }}
              plugins={[
                AutoScroll({
                  speed: 0.8,
                  direction: "backward",
                }),
              ]}
              className="-mx-7"
            >
              <CarouselContent className="max-h-[350px]">
                <CarouselItem className="max-w-96">
                  <img
                    src={bi5.src}
                    alt="placeholder"
                  />
                </CarouselItem>
                <CarouselItem className="max-w-96">
                  <img
                    src={bi6.src}
                    alt="placeholder"
                  />
                </CarouselItem>
                <CarouselItem className="max-w-96">
                  <img
                    src={bi3.src}
                    alt="placeholder"
                  />
                </CarouselItem>
                <CarouselItem className="max-w-96">
                  <img
                    src={bi4.src}
                    alt="placeholder"
                  />
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </div>
          <div className="hidden grid-cols-2 gap-8 lg:grid">
            <Carousel
              opts={{
                loop: true,
              }}
              plugins={[
                AutoScroll({
                  speed: 0.8,
                }),
              ]}
              orientation="vertical"
            >
              <CarouselContent className="max-h-[600px]">
                <CarouselItem>
                  <img
                    src= {bi1.src}
                    alt="placeholder"
                  />
                </CarouselItem>
                <CarouselItem>
                  <img
                    src={bi2.src}
                    alt="placeholder"
                  />
                </CarouselItem>
                <CarouselItem>
                  <img
                    src={bi3.src}
                    alt="placeholder"
                  />
                </CarouselItem>
                <CarouselItem>
                  <img
                    src={bi4.src}
                    alt="placeholder"
                  />
                </CarouselItem>
              </CarouselContent>
            </Carousel>
            <Carousel
              opts={{
                loop: true,
              }}
              plugins={[
                AutoScroll({
                  speed: 0.8,
                  direction: "backward",
                }),
              ]}
              orientation="vertical"
            >
              <CarouselContent className="max-h-[600px]">
                <CarouselItem>
                  <img
                    src={bi5.src}
                    alt="placeholder"
                  />
                </CarouselItem>
                <CarouselItem>
                  <img
                    src={bi6.src}
                    alt="placeholder"
                  />
                </CarouselItem>
                <CarouselItem>
                  <img
                    src={bi3.src}
                    alt="placeholder"
                  />
                </CarouselItem>
                <CarouselItem>
                  <img
                    src={bi4.src}
                    alt="placeholder"
                  />
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero85 };
