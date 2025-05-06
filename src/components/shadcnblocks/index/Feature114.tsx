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
import avatar5 from '@/assets/staffing/avatar5.png';
import avatar6 from '@/assets/staffing/avatar6.png';
import avatar7 from '@/assets/staffing/avatar7.png';
import avatar8 from '@/assets/staffing/avatar8.png';

const features = [
  {
    title: "Senior Accountant",
    description: "Skills: General Ledger, Month-End Closing, Taxation",
    avatar: avatar1,
    alt: "Senior Accountant",
  },
  {
    title: "Full-Stack Developer",
    description: "Skills: React, Node.js, JavaScript, REST APIs",
    avatar: avatar2,
    alt: "Full-Stack Developer",
  },
  {
    title: "Data Scientist",
    description: "Skills: Machine Learning, Statistical Modeling, Python",
    avatar: avatar3,
    alt: "Data Scientist",
  },
  {
    title: "Controller",
    description: "Skills: Financial Reporting, Risk Management, Compliance",
    avatar: avatar4,
    alt: "Controller",
  },
  {
    title: "DevOps Engineer",
    description: "Skills: AWS, Docker, Kubernetes, CI/CD",
    avatar: avatar5,
    alt: "DevOps Engineer",
  },
  {
    title: "Financial Analyst",
    description: "Skills: Forecasting, Valuation, Financial Modeling, Budgeting",
    avatar: avatar6,
    alt: "Financial Analyst",
  },
  {
    title: "Cloud Architect",
    description: "Skills: Azure, Infrastructure, Cloud Security, Virtualization",
    avatar: avatar7,
    alt: "Cloud Architect",
  },
  {
    title: "Cybersecurity Specialist",
    description: "Skills: Network Security, Penetration Testing, Firewalls",
    avatar: avatar8,
    alt: "Cybersecurity Specialist",
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
            <Button>
              Dive Deeper <ChevronRight className="ml-2 h-4" />
            </Button>
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
