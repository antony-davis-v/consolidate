"use client";

import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const Hero30 = () => {
  return (
    <section className="relative overflow-hidden py-16 bg-white">
      <div className="relative container">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <h2 className="mb-6 text-4xl font-medium text-muted-foreground lg:text-5xl">
              Transform your workforce with AI Agents
            </h2>
            <p className="mb-6 text-lg text-muted-foreground">
              We build and deploy intelligent AI agents that streamline operations, automate complex workflows, and deliver real-time, conversation-driven experiences—backed by enterprise-grade governance and control.
            </p>
            <Button variant="secondary">
              Get Started
              <ChevronRight className="ml-2 h-4" />
            </Button>
          </div>
          <div className="relative mt-16 -mb-16 flex justify-center gap-4 lg:mt-0 lg:mb-0 lg:justify-end">
            <div className="relative z-10">
              <img
                src="https://shadcnblocks.com/images/block/placeholder-1.svg"
                alt="placeholder hero"
                className="h-[400px] rounded-lg border border-border object-cover object-center sm:max-w-[320px]"
              />
            </div>
            <div className="relative z-10 hidden flex-col gap-4 sm:flex md:hidden 2xl:flex">
              <div className="w-[256px] flex-1 overflow-clip rounded-lg border border-border bg-background"></div>
              <div className="aspect-[2/1] w-[256px] overflow-clip rounded-lg border border-border bg-background"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero30 };
