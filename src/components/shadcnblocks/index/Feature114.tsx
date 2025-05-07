"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { ChevronRight } from "lucide-react";


import avatar1 from '@/assets/staffing/avatar1.png';
import avatar2 from '@/assets/staffing/avatar2.png';
import avatar3 from '@/assets/staffing/avatar3.png';
import avatar4 from '@/assets/staffing/avatar4.png';
import avatar7 from '@/assets/staffing/avatar7.png';
import avatar8 from '@/assets/staffing/avatar8.png';
import avatar9 from '@/assets/staffing/avatar9.png';
import avatar10 from '@/assets/staffing/avatar10.png';

const features = [
  {
    title: "Engineering Manager",
    description: "Skills: BPA, RPA, UiPath, Kofax, Blue Prism, Bots",
    avatar: avatar1,
    alt: "Engineering Manager, Automation",
  },
  {
    title: "Product Manager",
    description: "Skills: Agile Sprints,A/B Testing, Jira, Figma",
    avatar: avatar2,
    alt: "Product Manager",
  },
  {
    title: "Frontend Engineer",
    description: "Skills: React, TypeScript, Tailwind CSS,Component Libraries,",
    avatar: avatar3,
    alt: "Frontend Engineer",
  },
  {
    title: "UI/UX Designer",
    description: "Skills: User Flows, Wireframing, Prototyping, Figma, Adobe ",
    avatar: avatar4,
    alt: "UI/UX Designer",
  },
  {
    title: "Head of Finance",
    description: "Skills: IFRS & US‑GAAP, SEC Filings, Disclosure Management",
    avatar: avatar7,
    alt: "Head of Finance",
  },
  {
    title: "Investment Analyst",
    description: "Skills: DCF Valuation, Comparable Analysis, Portfolio Optimization",
    avatar: avatar8,
    alt: "Investment Analyst",
  },
  {
    title: "Credit Controller",
    description: "Skills: Accounts Receivable, DSO Reduction, Credit Risk Scoring",
    avatar: avatar9,
    alt: "Credit Controller",
  },
  {
    title: "Mortgage Specialist",
    description: "Skills: Origination, Underwriting Guidelines, LTV Ratios",
    avatar: avatar10,
    alt: "Mortgage Specialist",
  },
];

const Feature114 = () => {
  return (
    <section className="pt-0 pb-40">
      <div className="container">
        <div className="grid items-center gap-20 md:grid-cols-2">
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <p className="mb-6 font-mono text-xs text-muted-foreground">What’s the solution?</p>
            <h2 className="mb-6 text-3xl font-semibold tracking-tight leading-normal md:text-4xl lg:text-5xl">Offshore Staffing</h2>
            <p className="mb-6 text-base text-muted-foreground">
              As a premier India-based offshore staffing partner, we help augment your in-house team with top-tier offshore talent from India—seamlessly connecting you with elite professionals. Tap into our curated network to reduce payroll costs and accelerate project delivery.
            </p>
            <a href="./offshore-staffing" className="hover:text-accent-foreground">
            <Button>
              Dive Deeper <ChevronRight className="ml-2 h-4" />
            </Button>
            </a>
          </div>
          <div className="grid gap-4 md:gap-7 lg:grid-cols-2">
            <Carousel
              opts={{
                loop: true,
                align: "start",
              }}
              plugins={[
                AutoScroll({
                  speed: 0.7,
                }),
              ]}
              orientation="vertical"
              className="pointer-events-none relative lg:hidden"
            >
              <CarouselContent className="max-h-[600px]">
                {features.map((feature, index) => (
                  <CarouselItem key={index}>
                    <div className="flex flex-col rounded-xl border p-5 md:p-7">
                    <Avatar className="size-9 rounded-full ring-1 ring-input">
                        <AvatarImage
                          src={feature.avatar.src}
                          alt={feature.alt}
                        />
                      </Avatar>
                      <h3 className="mt-5 mb-2.5 font-semibold md:text-xl">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground md:text-base">{feature.description}</p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background"></div>
            </Carousel>
            <Carousel
              opts={{
                loop: true,
                align: "start",
              }}
              plugins={[
                AutoScroll({
                  speed: 0.7,
                }),
              ]}
              orientation="vertical"
              className="pointer-events-none relative hidden lg:block"
            >
              <CarouselContent className="max-h-[600px]">
                {features.slice(0, features.length / 2).map((feature, index) => (
                  <CarouselItem key={index}>
                    <div className="flex flex-col rounded-xl border p-4 md:p-7">
                    <Avatar className="size-9 rounded-full ring-1 ring-input">
                        <AvatarImage
                         src={feature.avatar.src}
                         alt={feature.alt}
                        />
                      </Avatar>
                      <h3 className="mt-5 mb-2.5 font-semibold md:text-xl">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground md:text-base">{feature.description}</p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background"></div>
            </Carousel>
            <Carousel
              opts={{
                loop: true,
                align: "start",
              }}
              plugins={[
                AutoScroll({
                  speed: 0.7,
                }),
              ]}
              orientation="vertical"
              className="pointer-events-none relative hidden lg:block"
            >
              <CarouselContent className="max-h-[600px]">
                {features.slice(features.length / 2).map((feature, index) => (
                  <CarouselItem key={index}>
                    <div className="flex flex-col rounded-xl border p-4 md:p-7">
                    <Avatar className="size-9 rounded-full ring-1 ring-input">
                        <AvatarImage
                          src={feature.avatar.src}
                          alt={feature.alt}
                        />
                      </Avatar>
                      <h3 className="mt-5 mb-2.5 font-semibold md:text-xl">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground md:text-base">{feature.description}</p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background"></div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature114 };
