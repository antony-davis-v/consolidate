"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import { useRef } from "react";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import avatar1 from '@/assets/staffing/avatar1.png';
import avatar2 from '@/assets/staffing/avatar2.png';
import avatar3 from '@/assets/staffing/avatar3.png';
import avatar4 from '@/assets/staffing/avatar4.png';
import avatar5 from '@/assets/staffing/avatar5.png';
import avatar6 from '@/assets/staffing/avatar6.png';
import avatar7 from '@/assets/staffing/avatar7.png';
import avatar8 from '@/assets/staffing/avatar8.png';
import avatar9 from '@/assets/staffing/avatar9.png';
import avatar10 from '@/assets/staffing/avatar10.png';
import avatar11 from '@/assets/staffing/avatar11.png';
import avatar12 from '@/assets/staffing/avatar12.png';

import { MoveRight } from "lucide-react";


const testimonials1 = [
  {
    name: "Engineering Manager, Automation",
    role: "9+ years",
    avatar: avatar1.src,
    content:
       `BPA, RPA, UiPath, Kofax, Blue Prism, Bots, Relational Databases, File Storage Systems`,
  },
  {
    name: "Product Manager",
    role: "10+ years",
    avatar: avatar2.src,
    content:
      "Agile Sprints, Feature Prioritization, A/B Testing, Jira, Figma, Visio, ProductPlan, Hotjar",
  },
  {
    name: "Frontend Engineer",
    role: "7+ years",
    avatar: avatar3.src,
    content:
      "React, TypeScript, Tailwind CSS,Component Libraries, UI State Management, Webpack",
  },
  {
    name: "UI/UX Designer",
    role: "4+ years",
    avatar: avatar4.src,
    content:
      "User Flows, Wireframing, Prototyping, Figma, Adobe XD, Photoshop, Responsive UI",
  },
  {
    name: "Engineering Manager, API Agents",
    role: "5+ years",
    avatar: avatar5.src,
    content:
      "RESTful APIs, Real-time APIs, RAG, MCP, Agentic Workflows, ML, NLP, LLM Frameworks",
  },
  {
    name: "Machine Learning Engineer",
    role: "10+ years",
    avatar: avatar6.src,
    content:
      "Supervised and Unsupervised Learning, Python, PyTorch, TensorFlow, Scikit-Learn",
  },
];
const testimonials2 = [
  {
    name: "Head of Financial Reporting",
    role: "12+ years",
    avatar: avatar7.src,
    content:
      "IFRS & US‑GAAP, SEC Filings, Disclosure Management, Hyperion Finance, Audit Liaison",
  },
  {
    name: "Investment Analyst",
    role: "6+ years",
    avatar: avatar8.src,
    content:
      "DCF Valuation, Comparable Analysis, Portfolio Optimization, Equity Research, CFA Level II",
  },
  {
    name: "Credit Controller",
    role: "11+ years",
    avatar: avatar9.src,
    content:
      "Accounts Receivable, DSO Reduction, Credit Risk Scoring, SAP FI‑AR, Collection Strategies",
  },
  {
    name: "Mortgage Specialist",
    role: "8+ years",
    avatar: avatar10.src,
    content:
      "Origination, Underwriting Guidelines, LTV Ratios, Compliance Review, Encompass LOS",
  },
  {
    name: "Budget Analyst",
    role: "7+ years",
    avatar: avatar11.src,
    content:
      "Zero‑Based Budgeting, Variance Analysis, Forecasting Models, Scenario Planning, BPC",
  },
  {
    name: "Strategic Finance Lead",
    role: "15+ years",
    avatar: avatar12.src,
    content:
      "Corporate Strategy,Financial Modeling, Scenario Analysis, M&A, Capital Allocation",
  },
];

const Testimonial7 = () => {
  const plugin1 = useRef(
    AutoScroll({
      startDelay: 500,
      speed: 0.7,
    }),
  );

  const plugin2 = useRef(
    AutoScroll({
      startDelay: 500,
      speed: 0.7,
      direction: "backward",
    }),
  );
  return (
    <section className="py-32">
      <div className="container">
        <h1 className="mx-auto my-4 mb-6 max-w-3xl text-center text-3xl font-bold lg:text-5xl">
        Looking to onboard top-tier Indian talent?
        </h1>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
        <a href="./contact" className="hover:text-accent-foreground">
          <Button size="lg">
            Hire Technology Talent
            <MoveRight className="ml-2" strokeWidth={1} />
          </Button>
          <Button size="lg" variant="ghost">
            Hire Accounting & Finance Talent
            <MoveRight className="ml-2" strokeWidth={1} />
          </Button>
          </a>
        </div>
      </div>
      <div className="lg:container">
        <div className="mt-16 space-y-4">
          <Carousel
            opts={{
              loop: true,
            }}
            plugins={[plugin1.current]}
            onMouseLeave={() => plugin1.current.play()}
          >
            <CarouselContent>
              {testimonials1.map((testimonial, index) => (
                <CarouselItem key={index} className="basis-auto">
                  <Card className="max-w-96 p-6 select-none">
                    <div className="mb-4 flex gap-4">
                      <Avatar className="size-9 rounded-full ring-1 ring-input">
                        <AvatarImage
                          src={testimonial.avatar}
                          alt={testimonial.name}
                        />
                      </Avatar>
                      <div className="text-sm">
                        <p className="font-medium">{testimonial.name}</p>
                        <p className="text-muted-foreground">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    <q>{testimonial.content}</q>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <Carousel
            opts={{
              loop: true,
            }}
            plugins={[plugin2.current]}
            onMouseLeave={() => plugin2.current.play()}
          >
            <CarouselContent>
              {testimonials2.map((testimonial, index) => (
                <CarouselItem key={index} className="basis-auto">
                  <Card className="max-w-96 p-6 select-none">
                    <div className="mb-4 flex gap-4">
                      <Avatar className="size-9 rounded-full ring-1 ring-input">
                        <AvatarImage
                          src={testimonial.avatar}
                          alt={testimonial.name}
                        />
                      </Avatar>
                      <div className="text-sm">
                        <p className="font-medium">{testimonial.name}</p>
                        <p className="text-muted-foreground">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    <q>{testimonial.content}</q>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export { Testimonial7 };
