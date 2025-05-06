"use client";
import React from "react";
 
import { ChevronRight, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
 
interface DataItem {
  title: string;
  description: string;
}
 
const DATA: DataItem[] = [
  {
    title: "Data Engineering",
    description:
      "Building and maintaining robust data infrastructure and pipelines for analytics",
  },
  {
    title: "Data Modelling",
    description:
      "Developing models to uncover insights and forecast trends from complex data",
  },
  {
    title: "Data Visualizations",
    description:
      "Creating graphical representations of data to facilitate strategic decisions",
  },
  {
    title: "AI Integration",
    description:
      "Deploying scalable AI solutions for automated data-driven innovation",
  },
];
 
const Feature181 = () => {
  return (
    <section className="py-16">
      <style jsx>{`
        @keyframes gradient-x {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient-x 3s linear infinite;
        }
      `}</style>
      <div className="container">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <p className="mb-6 font-mono text-xs text-muted-foreground">
              What’s the solution?
            </p>
            <h2 className="mb-6 text-4xl font-medium text-foreground lg:text-5xl">
              Data & AI
            </h2>
            <p className="mb-6 text-lg text-muted-foreground">
              We architect scalable data infrastructures, craft predictive models,
              create insightful visualizations, and deploy robust AI solutions—transforming
              complex data into strategic, actionable intelligence that fuels enterprise innovation.
            </p>
            <Button>
              <a href="/data-and-ai">
              Dive Deeper
              </a>
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4">
          {DATA.map((feature, index) => (
            <div
              key={index}
              className={cn("mt-0 flex flex-col border-l px-6 sm:mt-4 md:mt-6")}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent/70 to-transparent opacity-100"></div>
                <h1 className="mb-12 text-9xl bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent animate-gradient">
                  0{index + 1}
                </h1>
              </div>
              <a
                href="#"
                className="group flex items-center mt-4 mb-2 text-md font-semibold transition-colors hover:text-primary"
              >
                {feature.title}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <p className="mb-12 text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
 
export { Feature181 };
 
