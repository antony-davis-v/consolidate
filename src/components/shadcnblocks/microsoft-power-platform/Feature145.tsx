"use client";

import { useState } from "react";


import apps1 from "@/assets/mspp/apps1.png";
import apps2 from "@/assets/mspp/apps2.png";
import apps3 from "@/assets/mspp/apps3.png";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface ITabData {
  id: number;
  title: string;
  imageSrc: string[];
  description: string;
}

const tabsData: ITabData[] = [
  {
    id: 1,
    title: "Rapid App Prototyping & Delivery",
    imageSrc: [
      apps1.src,
      apps1.src,
      apps1.src,
    ],
    description:
      "Our Power Apps specialists partner with you to turn requirements into working applications in days, not months. We’ll workshop your processes, then build branded, functional prototypes using the low‑code canvas—binding to Dataverse, wiring up Power Automate flows, and polishing the UI through iterative user feedback. You’ll see real business value immediately and be positioned to roll out a production‑ready solution on your accelerated cadence.",
  },
  {
    id: 2,
    title: "Deep Integration & Custom Extensibility",
    imageSrc: [
      apps2.src,
      apps2.src,
      apps2.src,
    ],
    description:
      "We seamlessly connect your new Power Apps to the systems you already run—CRM, ERP, SQL databases, custom APIs and beyond—leveraging 1,400+ out‑of‑the‑box connectors or building your own. Where off‑the‑shelf components fall short, our developers extend capabilities with Power Fx formulas, Azure Functions, and reusable component libraries. The result is a tightly integrated, future‑proof application tailored to your complex business logic and branding guidelines.",
  },
  {
    id: 3,
    title: "Enterprise Governance & Scalable Support",
    imageSrc: [
      apps3.src,
      apps3.src,
      apps3.src,
    ],
    description:
      "As your app portfolio grows, we put the right controls in place to safeguard data and streamline operations at scale. Our team will define solution‑aware environments, enforce role‑based access and data‑loss prevention policies, and automate CI/CD pipelines using Azure DevOps. We deliver centralized monitoring, training, and 24/7 support so your Power Apps remain secure, compliant, and performant—whether users are online, offline, in the office or on the frontline.",
  },
];

const Feature145 = () => {
  const [activeTabId, setActiveTabId] = useState<number | null>(null);
  const [activeImage, setActiveImage] = useState<string[]>(
    tabsData[0].imageSrc
  );

  return (
    <section className="pt-0 pb-40">
      <div className="container">
        <div className="m-auto mb-24 max-w-xl">
          <h2 className="mb-6 text-center text-2xl font-semibold tracking-tight leading-normal md:text-3xl lg:text-4xl">
            Enterprise‑Grade Power Apps
          </h2>
          <p className="m-auto max-w-3xl text-center text-base">
            Empower your organization with bespoke, low‑code business
            applications built to fit your unique processes and systems. Our
            experienced Power Apps consultants guide you from initial discovery
            through rapid prototyping, deep integrations, and enterprise‑grade
            governance. Whether you need a simple field service app, a complex
            model‑driven solution, or offline‑ready mobile canvases, we deliver
            secure, scalable applications that accelerate time‑to‑value.
          </p>
          <a
            className="mx-auto mt-8 block w-fit rounded-full border-2 border-muted bg-white px-6 py-4 text-sm font-semibold transition hover:border-muted-foreground"
            href="#"
          >
            Get Started
          </a>
        </div>
        <div className="flex w-full items-start justify-between gap-x-12">
          <div className="w-full md:w-1/2">
            <Accordion type="single" className="w-full" defaultValue="item-1">
              {tabsData.map((tab) => (
                <AccordionItem
                  key={tab.id}
                  value={`item-${tab.id}`}
                  className={`border-t-2 border-b-0 px-2 transition hover:bg-accent ${
                    tab.id === activeTabId && "border-foreground"
                  }`}
                >
                  <AccordionTrigger
                    onClick={() => {
                      setActiveImage(tab.imageSrc);
                      setActiveTabId(tab.id);
                    }}
                    className="cursor-pointer py-5 !no-underline transition"
                  >
                    <h6
                      className={`text-xl font-semibold ${
                        tab.id === activeTabId
                          ? "text-black text-lg font-semibold tracking-tight leading-normal md:text-lg lg:text-xl"
                          : "text-muted-foreground text-lg font-semibold tracking-tight leading-normal md:text-lg lg:text-xl"
                      }`}
                    >
                      {tab.title}
                    </h6>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mt-3 text-muted-foreground">
                      {tab.description}
                    </p>
                    <div className="mt-4 md:hidden">
                      <img
                        src={tab.imageSrc[0]}
                        alt="placeholder"
                        className="aspect-[1.2] w-full rounded-md object-cover"
                      />
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className="relative m-auto hidden w-1/2 overflow-hidden rounded-xl bg-muted-foreground/5 px-10 py-12 before:absolute before:inset-0 before:z-[-1] before:bg-primary/50 before:[mask-image:url(/images/block/patterns/dot-pattern.svg)] before:[mask-repeat:repeat] before:[mask-size:_15px] md:block">
            <div className="flex min-h-96 w-full items-center justify-center px-3">
              <img
                src={activeImage[0]}
                alt="placeholder"
                className="aspect-[1.2] w-full rounded-md object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature145 };
