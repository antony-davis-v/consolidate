import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";


import mspp1 from "@/assets/mspp/mspp1.png"
import mspp2 from "@/assets/mspp/mspp2.png"
import mspp3 from "@/assets/mspp/mspp3.png"
import mspp4 from "@/assets/mspp/mspp4.png"
import mspp5 from "@/assets/mspp/mspp5.png"



export const Hero12 = () => (
  <section className="bg-white py-40">
    <div className="container mx-auto max-w-5xl flex flex-col items-center text-center gap-12">
      <h1 className="text-center text-3xl font-semibold tracking-tight leading-normal md:text-4xl lg:text-5xl">
        {[
          "Low‑code / No‑code Apps",
          "Workflow Automations",
          "Data Analytics",
          "AI Agents",
        ].map((text, i) => (
          <span
            key={i}
            className="block transition-transform duration-300 hover:translate-x-1"
          >
            {text}
          </span>
        ))}
      </h1>
      <p className="max-w-3xl text-lg text-muted-foreground lg:text-xl px-4">
        Empower your teams with custom solutions built on Power BI, Power Apps,
        Power Automate, Power Pages, and Copilot
      </p>
      <div className="flex justify-center gap-3 mb-12">
        <Button className="shadow-sm transition-shadow hover:shadow">
          Get Started
        </Button>
        <Button variant="outline" className="group">
          Learn more
          <ExternalLink className="ml-2 h-4 transition-transform group-hover:translate-x-0.5" />
        </Button>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-4">
        {[
          {
            src: mspp1,
            alt: "power apps",
          },
          {
            src: mspp2,
            alt: "power bi",
          },
          {
            src: mspp3,
            alt: "power automate",
          },
          {
            src: mspp4,
            alt: "power pages",
          },
          {
            src:mspp5,
            alt: "co pilot",
          },
        ].map((logo, idx) => (
          <a
            key={idx}
            href="#"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "group flex aspect-square h-12 items-center justify-center p-0"
            )}
          >
            <img
              src={logo.src.src}
              alt={logo.alt}
              className="h-6 transition-all group-hover:saturate-100"
            />
          </a>
        ))}
      </div>
    </div>
  </section>
);
