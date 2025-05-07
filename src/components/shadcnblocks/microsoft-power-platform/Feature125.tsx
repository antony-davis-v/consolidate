"use client";

import { Check, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import pages1 from "@/assets/mspp/pages1.png";

const checkedItems: string[] = [
  "Custom Branded UX & Data Integration",
  "Robust Security & Access Control",
  "End‑to‑End Deployment & Support",
];

const Feature125 = () => {
  return (
    <section className="m-x-auto container flex flex-col items-start pt-0 pb-40 md:flex-row md:items-center">
      <div className="w-full lg:w-[40%]">
        <h2 className="mb-8 text-2xl font-semibold tracking-tight leading-normal md:text-3xl lg:text-4xl">
          Power Pages Solutions
        </h2>
        <p className="mb-10">
          Elevate your online presence with custom external‑facing websites
          built on Microsoft Power Pages—without the learning curve. Our experts
          handle everything from design studio configuration to security and
          data integration, so you can focus on engaging customers and partners.
        </p>
        <ul className="mb-8 flex flex-col gap-2 text-muted-foreground">
          {checkedItems.map((item) => (
            <li className="flex items-center gap-2" key={item}>
              <Check className="size-5" /> {item}
            </li>
          ))}
        </ul>
        <a href="./contact" className="hover:text-accent-foreground">
        <Button variant="outline">
          Ask us
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
        </a>
      </div>
      <div className="relative flex h-[430px] w-full pt-4 pr-4 before:absolute before:inset-0 before:bg-primary/10 before:[mask-image:url(/images/block/patterns/cross-pattern.svg)] before:[mask-repeat:repeat] before:[mask-size:_32px_32px]">
        <div className="absolute inset-0 z-1 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent to-background opacity-70"></div>
        <div className="relative mt-auto mr-auto w-[100%]">
          <img
            src={pages1.src}
            alt="placeholder hero"
            className="z-40 max-h-[350px] w-full rounded-md object-cover"
          ></img>
        </div>
        <div className="absolute inset-0 z-50 bg-gradient-to-r from-background via-transparent via-15%"></div>
        <div className="absolute inset-0 z-50 bg-gradient-to-t from-background via-transparent via-15%"></div>
      </div>
    </section>
  );
};

export { Feature125 };
